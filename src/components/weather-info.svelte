<script>
	import WeatherIcon from '../components/weather-icon.svelte';
	import { tempStore } from '../store/index.js';
	export let weather;
	function changeFormat() {
		if ($tempStore === 'Celsius') {
			tempStore.set('Fahrenheit');
		} else {
			tempStore.set('Celsius');
		}
	}
</script>

<div class="container">
	<WeatherIcon text={weather.conditionText} icon={weather.conditionIcon} />

	<h2>
		{$tempStore === 'Celsius' ? Math.floor(weather.temperature) : Math.floor(weather.temp_f)}
	</h2>
	<h3>{weather.conditionText}</h3>
	<span
		><a href="#celsius" class={$tempStore === 'Celsius' ? 'selected' : ''} on:click={changeFormat}
			>C°</a
		>/
		<a
			href="#fahrenheit"
			class={$tempStore === 'Fahrenheit' ? 'selected' : ''}
			on:click={changeFormat}>F°</a
		></span
	>
</div>

<style>
	.selected {
		color: #fafafa;
	}
	a {
		color: rgba(255, 255, 255, 0.3);
	}
	a:hover {
		color: rgba(255, 255, 255, 0.6);
	}
	h2 {
		font-size: 80px;
		text-transform: uppercase;
		padding: 0;
		grid-column-start: 2;
		grid-row-start: 1;
	}
	.container {
		border: 2px solid #000;
		padding: 32px;
		width: 90%;
		margin: 0 auto 20px auto;
		border-radius: 15px;
		display: grid;
		grid-template-columns: 50% 50%;
		grid-template-rows: 80px 30px;
		align-items: center;
		text-align: center;
		justify-content: space-evenly;
		bottom: 32px;
		background: linear-gradient(311deg, #352bd8 0%, rgba(153, 68, 209, 1) 100%);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		border: 1px solid rgba(255, 255, 255, 0.18);
	}
</style>
