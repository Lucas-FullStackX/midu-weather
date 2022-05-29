<script>
	import { fly } from 'svelte/transition';
	import { searchCity } from '../services/weather';
	import Loader from './loader.svelte';
	import TextField from './text-field.svelte';
	// props
	export let show = false;
	// states
	let search;
	let results;
	const onChange = (e) => {
		if (e.target.value.length > 3) {
			results = searchCity(e.target.value);
		} else {
			results = [];
		}
	};
</script>

{#if show}
	<nav transition:fly={{ x: -450, opacity: 1 }}>
		<TextField label="search" {onChange} value={search} />
		{#await results}
			<Loader />
		{:then results}
			<div>
				{#if results}
					{#each results as result}
						<a href="#1">{result.name}</a>
					{/each}
				{:else}
					<p>No results</p>
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
		background: #ece8f4;
		overflow-y: auto;
		width: 100%;
		z-index: 1;
		max-width: 450px;
	}
</style>
