<script>
	import { getWeatherFrom } from '../services/weather.js';
	import WeatherDay from '../components/weather-day.svelte';
	import WeatherDetails from '../components/weather-details.svelte';
	import WeatherInfo from '../components/weather-info.svelte';
	const getWeather = getWeatherFrom();
</script>

{#await getWeather}
	<p>...loading</p>
{:then weather}
	<section>
		<h1>{weather.locationName}</h1>
		<WeatherInfo {weather} />
		<WeatherDetails {weather} />
	</section>
	<div>
		{#each weather.history ?? [] as weatherHour}
			<WeatherDay {weatherHour} />
		{/each}
	</div>
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
	div {
		padding: 16px;
		width: 90%;
		overflow: auto;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		flex-direction: row;
		text-align: center;
	}
</style>
