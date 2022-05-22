export async function getWeatherFrom(query = 'San Francisco') {
	return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}
