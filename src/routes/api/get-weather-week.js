import dayjs from 'dayjs';
import { getWeekRate } from '../../services/utils';
import { FETCH_OPTIONS } from './utils';

export async function get(event) {
	const { searchParams } = event.url;
	const today = searchParams.get('today') ?? dayjs().format('YYYY-MM-DD');
	const city = searchParams.get('city') ?? 'San Francisco';
	const { dt, end_dt } = getWeekRate(today);
	let response;
	try {
		response = await fetch(
			'https://weatherapi-com.p.rapidapi.com/history.json?' +
				new URLSearchParams({ q: city, dt, end_dt }),
			FETCH_OPTIONS
		);
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}

	const data = await response.json();
	const { forecast, location } = data;
	const { country, localtime, name } = location;
	const { forecastday } = forecast;
	const { day } = forecastday.find(({ date }) => date === today);
	const {
		condition,
		feelslike_c,
		maxwind_kph,
		avgtemp_c,
		avgtemp_f,
		maxwind_dir,
		avghumidity,
		avgvis_km
	} = day;
	const { text, icon } = condition;
	const body = {
		conditionText: text,
		conditionIcon: icon,
		country,
		localtime,
		locationName: name,
		temperature: avgtemp_c,
		temp_f: avgtemp_f,
		feelsLike: feelslike_c,
		humidity: avghumidity,
		windSpeed: maxwind_kph,
		windDir: maxwind_dir,
		vis_km: avgvis_km,
		history: forecastday
	};

	return {
		status: 200,
		body
	};
}
