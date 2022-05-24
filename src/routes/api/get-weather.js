import { FETCH_OPTIONS } from './utils';

export async function get(event) {
	const { searchParams } = event.url;
	const query = searchParams.get('q') ?? 'San Francisco';

	const response = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		FETCH_OPTIONS
	);

	const data = await response.json();

	const { location, current } = data;
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
		vis_km
	};

	return {
		status: 200,
		body
	};
}
