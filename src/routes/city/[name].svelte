<script context="module">
	import { loadingStore } from '../../store/index.js';
	import { getWeatherFrom } from '../../services/weather.js';
	export async function load({ params }) {
		const { name } = params;
		const data = await getWeatherFrom(name);
		loadingStore.set(false);
		return {
			props: {
				data
			}
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	import Navbar from '../../components/navbar.svelte';
	import Loader from '../../components/loader.svelte';
	import WeatherDetails from '../../components/weather-details.svelte';
	import WeatherHistory from '../../components/waether-history.svelte';
	import WeatherInfo from '../../components/weather-info.svelte';
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
{#if $loadingStore}
	<Loader />
{:else}
	<Navbar city={data.locationName} type={TypeNavigation.MAIN} />
	<section>
		<WeatherInfo weather={data} />
		<WeatherDetails weather={data} />
		<WeatherHistory weather={data} />
	</section>
{/if}

<style>
	section {
		padding: 15px 25px;
		width: 100%;
	}
</style>
