<script>
	import { fly } from 'svelte/transition';
	import { searchCity } from '../services/weather';
	import ItemCity from './item-city.svelte';
	import Loader from './loader.svelte';
	import TextField from './text-field.svelte';
	import popularCities from './list/popular-cities.json';
	// props
	export let show;
	export let onChange;
	// states
	let search;
	let results;
	const onChangeInput = (e) => {
		if (e.target.value.length > 3) {
			results = searchCity(e.target.value);
		} else {
			results = [];
		}
	};
</script>

{#if show}
	<nav transition:fly={{ x: -550, opacity: 1 }}>
		<TextField label="search" onChange={onChangeInput} value={search} />
		{#await results}
			<Loader />
		{:then results}
			<div>
				{#if results}
					{#each results as result}
						<ItemCity city={result} onClick={onChange} />
					{/each}
				{:else}
					<p>Most Populars:</p>
					{#each popularCities as city}
						<ItemCity {city} onClick={onChange} />
					{/each}
				{/if}
			</div>
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</nav>
{/if}

<style>
	nav {
		position: fixed;
		top: 0;
		height: 100%;
		padding: 55px 20px 0 20px;
		background: var(--body-color);
		width: 100%;
		z-index: 1;
		max-width: 550px;
	}
	p {
		margin: 15px;
	}
</style>
