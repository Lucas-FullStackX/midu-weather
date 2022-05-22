<script>
	import { getWeatherFrom } from '../services/weather.js';
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherInfo from '../components/weather-info.svelte';

	const getWeather = getWeatherFrom();
</script>

{#await getWeather then weather}
	<section>
		<h1>{weather.locationName}</h1>
		<WeatherInfo {weather} />
	</section>
	<WeatherFooter />
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
