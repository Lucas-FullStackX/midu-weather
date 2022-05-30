<script>
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	import { tempStore } from '../store';
	import { TempFormats } from '../types';
	import WeatherIcon from './weather-icon.svelte';
	// props
	export let weatherHour;
	// states
	let currentHour;
	const getHour = (day) => Number(dayjs(day).format('HH'));
	onMount(() => {
		if (getHour(dayjs()) === getHour(dayjs(weatherHour.time))) {
			currentHour = true;
		}
	});
</script>

<div class={currentHour ? 'container current' : 'container'}>
	<p>
		{$tempStore === TempFormats.Celsius
			? Math.floor(weatherHour.temp_c)
			: Math.floor(weatherHour.temp_f)}°
	</p>
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
		background: var(--bg-color);
	}
	.current {
		background: linear-gradient(311deg, var(--color-primary) 0%, rgba(153, 68, 209, 1) 100%);
	}
	.current p {
		color: #fafafa;
	}
	p {
		margin: 0;
	}
</style>
