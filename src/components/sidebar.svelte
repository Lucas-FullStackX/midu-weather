<script>
	import { fly } from 'svelte/transition';
	import TextField from './text-field.svelte';

	export let show = false;
	const onChange = (e) => {
		e.target.value;
	};
</script>

{#if show}
	<nav transition:fly={{ x: -450, opacity: 1 }}>
		<TextField label="search" {onChange} />
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
