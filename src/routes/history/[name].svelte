<script context="module">
	import { loadingStore } from '../../store/index.js';
	import { getWeatherWeek } from '../../services/weather.js';
	export async function load({ params }) {
		const { name } = params;
		const data = await getWeatherWeek(name);
		loadingStore.set(false);
		return {
			props: {
				data
			}
		};
	}
</script>

<script>
	import Navbar from '../../components/navbar.svelte';
	import Loader from '../../components/loader.svelte';
	import WeatherDetails from '../../components/weather-details.svelte';
	import WeatherInfo from '../../components/weather-info.svelte';
	import WeatherWeek from '../../components/weather-week.svelte';
	import { TypeNavigation } from '../../types/index.js';
	export let data;
	// i guess this is the same as the onMount function in the component
	// should be save the data in the store
</script>

<svelte:head>
	<title>{data.locationName ?? 'Weather'}</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

{#if !data}
	<Loader />
{:else}
	<Navbar city={data.locationName} type={TypeNavigation.SECOND} />
	<section>
		<WeatherInfo weather={data} />
		<WeatherDetails weather={data} />
		<WeatherWeek history={data.history} />
	</section>
{/if}

<style>
	section {
		padding: 16px;
		width: 100%;
	}
</style>
