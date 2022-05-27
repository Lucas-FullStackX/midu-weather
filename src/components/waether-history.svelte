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
	console.log(ref);
	console.log(weather);
</script>

{#if weather}
	<div bind:this={ref}>
		{#each weather.history as weatherHour}
			<WeatherDay {weatherHour} />
		{/each}
	</div>
{/if}

<style>
	div {
		padding: 0;
		width: 90%;
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
