<script>
	import dayjs from 'dayjs';
	import { onMount } from 'svelte';
	import WeatherDay from './weather-day.svelte';
	export let weather;
	let ref;
	let hour = Number(dayjs().format('HH'));
	onMount(() => {
		ref.scrollLeft = hour * 130;
	});
</script>

{#if weather}
	<div class="header">
		<span>Today</span>
		<a href={`/history/${weather.locationName}`}>Next Days </a>
	</div>
	<div bind:this={ref} class="history">
		{#each weather.history as weatherHour}
			<WeatherDay {weatherHour} />
		{/each}
	</div>
{/if}

<style>
	span {
		font-weight: bold;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	.history {
		padding: 0;
		width: 100%;
		overflow: auto;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		flex-direction: row;
		text-align: center;
	}
	div::-webkit-scrollbar {
		-webkit-appearance: none;
	}

	div::-webkit-scrollbar:vertical {
		width: 10px;
	}

	div::-webkit-scrollbar-button:increment,
	div::-webkit-scrollbar-button {
		display: none;
	}

	div::-webkit-scrollbar:horizontal {
		height: 10px;
	}

	div::-webkit-scrollbar-thumb {
		background-color: #ababab;
		border-radius: 20px;
	}

	div::-webkit-scrollbar-track {
		border-radius: 10px;
	}
</style>
