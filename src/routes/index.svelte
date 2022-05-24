<script>
	import { getWeatherFrom, getWeatherWeek } from '../services/weather.js';
	import WeatherDetails from '../components/weather-details.svelte';
	import WeatherInfo from '../components/weather-info.svelte';
	const getWeather = getWeatherFrom();
	const weatherList = getWeatherWeek();
	console.log(getWeather);
	console.log(weatherList);
</script>

{#await getWeather then weather}
	<section>
		<h1>{weather.locationName}</h1>
		<WeatherInfo {weather} />
		<WeatherDetails {weather} />
	</section>
	{#await weatherList then weatherList}
		{#each weatherList.forecastday as weather}
			<p>{weather.day.condition.text}</p>
		{/each}
	{/await}
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
