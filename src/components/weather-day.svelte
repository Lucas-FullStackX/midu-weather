<script>
	import dayjs from 'dayjs';

	import WeatherIcon from './weather-icon.svelte';

	export let weatherHour;
</script>

<div class="container">
	<p>{Math.floor(weatherHour.temp_c)}°</p>
	<p>{dayjs(weatherHour.time).format('HH:MM')}</p>
	<WeatherIcon text={weatherHour.condition.text} icon={weatherHour.condition.icon} />
</div>

<style>
	.container {
		padding: 10px;
		margin-left: 0;
		margin-right: 20px;
		min-width: 35%;
		margin: 0 10px;
		border-radius: 25px;
		display: flex;
		flex-direction: column;
		text-align: center;
		justify-content: space-between;
		background: #fafafa;
	}
	p {
		margin: 0;
	}
</style>
