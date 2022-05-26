import dayjs from 'dayjs';
import { FETCH_OPTIONS } from './utils';

export async function get(event) {
	const { searchParams } = event.url;
	const query = searchParams.get('q') ?? 'auto:ip';
	let error = null;
	let data = null;
	let loading = true;

	let response;
	try {
		response = await fetch(
			`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
			FETCH_OPTIONS
		);
	} catch (err) {
		return { error, data, loading };
	}
	let weatherHistory;
	try {
		weatherHistory = await fetch(
			`https://weatherapi-com.p.rapidapi.com/history.json?q=${new URLSearchParams({
				q: query,
				dt: dayjs().format('YYYY-MM-DD'),
				lang: 'en'
			})}`,
			FETCH_OPTIONS
		);
	} catch (err) {
		return { error, data, loading };
	}
	const history = await weatherHistory.json();
	const info = await response.json();

	const { location, current } = info;
	const { forecast } = history;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, is_day, vis_km, wind_kph, temp_c, temp_f, wind_dir } =
		current;
	const { text, icon } = condition;
	const body = {
		conditionText: text,
		conditionIcon: icon,
		country,
		localtime,
		locationName: name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperature: temp_c,
		temp_f,
		windSpeed: wind_kph,
		windDir: wind_dir,
		history: forecast.forecastday[0].hour,
		vis_km
	};

	return {
		status: 200,
		body
	};
}
