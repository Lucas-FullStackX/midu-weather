import dayjs from 'dayjs';

export async function getWeatherFrom(query = 'San Francisco') {
	return fetch(
		`/api/get-weather?${new URLSearchParams({
			q: query
		})}`
	).then((res) => res.json());
}

export async function getWeatherWeek(city = 'San Francisco') {
	const today = dayjs().format('YYYY-MM-DD');
	return fetch(`/api/get-weather-week?${new URLSearchParams({ city, today })}`)
		.then((res) => res.json())
		.catch((err) => console.log(err));
}
