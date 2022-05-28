<script>
	import { getWeatherFrom } from '../services/weather.js';
	import Navbar from '../components/navbar.svelte';
	import WeatherDetails from '../components/weather-details.svelte';
	import WeatherHistory from '../components/waether-history.svelte';
	import WeatherInfo from '../components/weather-info.svelte';
	const getWeather = getWeatherFrom();
</script>

{#await getWeather}
	<p>...loading</p>
{:then weather}
	<Navbar />
	<section>
		<h1>{weather.locationName}</h1>
		<WeatherInfo {weather} />
		<WeatherDetails {weather} />
		<WeatherHistory {weather} />
	</section>
{/await}

<style>
	section {
		padding: 16px;
		width: 100%;
	}

	h1 {
		font-weight: 300;
		color: #333;
		text-transform: uppercase;
		padding: 16px 0 0 0;
	}
</style>
