import { FETCH_OPTIONS } from './utils';

export async function get(event) {
	const { searchParams } = event.url;
	const q = searchParams.get('q');
	const response = await fetch(
		'https://weatherapi-com.p.rapidapi.com/search.json?' + new URLSearchParams({ q }),
		FETCH_OPTIONS
	);
	if (!response.ok()) {
		throw new Error(response.statusText);
	}

	const data = await response.json();
	console.log(data);
	return {
		status: 200,
		body: data
	};
}
