import { FETCH_OPTIONS } from './utils';

export async function get(event) {
	const { searchParams } = event.url;
	const q = searchParams.get('q');
	let response;
	try {
		response = await fetch(
			'https://weatherapi-com.p.rapidapi.com/search.json?' + new URLSearchParams({ q }),
			FETCH_OPTIONS
		);
	} catch (err) {
		throw new Error(err.message);
	}
	const data = await response.json();
	console.log(data);
	return {
		status: 200,
		body: data
	};
}
