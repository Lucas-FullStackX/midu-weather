<script>
	import { getWeatherFrom } from '../services/weather.js';
	import Navbar from '../components/navbar.svelte';
	import Loader from '../components/loader.svelte';
	import WeatherDetails from '../components/weather-details.svelte';
	import WeatherHistory from '../components/waether-history.svelte';
	import WeatherInfo from '../components/weather-info.svelte';
	const getWeather = getWeatherFrom();
</script>

{#await getWeather}
	<Loader />
{:then weather}
	<Navbar city={weather.locationName} />
	<section>
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
</style>
