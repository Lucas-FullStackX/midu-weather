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
	const { forecast } = data;
	const { forecastday } = forecast;
	const body = {
		forecastday
	};

	return {
		status: 200,
		body
	};
}
