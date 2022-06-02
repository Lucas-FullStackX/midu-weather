<script>
	import WeatherIcon from '../components/weather-icon.svelte';
	import { tempStore } from '../store/index.js';
	import { TempFormats } from '../types';
	export let weather;
	function changeFormat() {
		if ($tempStore === TempFormats.Celsius) {
			tempStore.set(TempFormats.Fahrenheit);
		} else {
			tempStore.set(TempFormats.Celsius);
		}
	}
</script>

<div class="container">
	<WeatherIcon text={weather.conditionText} icon={weather.conditionIcon} />

	<h2>
		{$tempStore === TempFormats.Celsius
			? Math.floor(weather.temperature)
			: Math.floor(weather.temp_f)}
	</h2>
	<h3>{weather.conditionText}</h3>
	<span
		><a
			href="#celsius"
			class={$tempStore === TempFormats.Celsius ? 'selected' : ''}
			on:click={changeFormat}>C°</a
		>/
		<a
			href="#fahrenheit"
			class={$tempStore === TempFormats.Fahrenheit ? 'selected' : ''}
			on:click={changeFormat}>F°</a
		></span
	>
</div>

<style>
	.selected {
		color: #fafafa;
		pointer-events: none;
	}
	a {
		color: rgba(255, 255, 255, 0.3);
	}
	a:hover {
		color: rgba(255, 255, 255, 0.6);
	}
	h2,
	h3,
	span {
		color: var(--text-color-light);
	}
	h2 {
		font-size: 80px;
		text-transform: uppercase;
		padding: 0;
		grid-column-start: 2;
		grid-row-start: 1;
	}
	.container {
		padding: 32px;
		width: 100%;
		margin: 0 auto 20px auto;
		border-radius: 15px;
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 80px 30px;
		align-items: center;
		text-align: center;
		justify-content: space-evenly;
		bottom: 32px;
		background: linear-gradient(311deg, var(--color-primary) 0%, rgba(153, 68, 209, 1) 100%);
	}
</style>
