<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import ArrowBack from '../icons/components/arrow-back.svelte';
	import { TypeNavigation } from '../types';
	import Sidebar from './sidebar.svelte';
	import Switch from './switch.svelte';
	export let city = '';
	export let type;
	let show = false;
	const onChange = () => {
		show = !show;
	};
	const goSomeWhereBack = () => {
		goto(`/city/${$page.params.name}`);
	};
</script>

<nav>
	{#if type === TypeNavigation.MAIN}
		<input class="checkbox" type="checkbox" on:change={onChange} bind:checked={show} />
		<div class="hamburger-lines">
			<span class="line line1" />
			<span class="line line2" />
			<span class="line line3" />
		</div>
	{:else}
		<div class="icon" on:click={goSomeWhereBack}>
			<ArrowBack />
		</div>
	{/if}
	<div class="title">
		<h2>{city}</h2>
	</div>
	<Switch />
	<Sidebar {show} {onChange} />
</nav>

<style>
	nav {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 10px 25px;
	}
	h2 {
		font-size: 1.5em;
		font-weight: bold;
		color: var(--text-color-dark);
		text-align: center;
	}
	.icon {
		cursor: pointer;
		margin-right: 10px;
		width: 30px;
		position: absolute;
		top: 12px;
		left: 20px;
	}
	.title {
		width: calc(100% - 120px);
	}
	nav .hamburger-lines {
		display: block;
		height: 20px;
		width: 25px;
		position: absolute;
		top: 17px;
		left: 20px;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		z-index: 3;
	}
	nav .hamburger-lines .line {
		display: block;
		height: 4px;
		width: 100%;
		border-radius: 10px;
		background: var(--text-color);
	}
	nav .hamburger-lines .line1 {
		transform-origin: 0% 0%;
		transition: transform 0.4s ease-in-out;
	}

	nav .hamburger-lines .line2 {
		transition: transform 0.2s ease-in-out;
	}

	nav .hamburger-lines .line3 {
		transform-origin: 0% 100%;
		transition: transform 0.4s ease-in-out;
	}
	.checkbox {
		position: absolute;
		display: block;
		height: 32px;
		width: 32px;
		top: 20px;
		left: 20px;
		z-index: 5;
		opacity: 0;
		cursor: pointer;
	}

	nav input[type='checkbox']:checked ~ .hamburger-lines .line1 {
		transform: rotate(45deg);
	}

	nav input[type='checkbox']:checked ~ .hamburger-lines .line2 {
		transform: scaleY(0);
	}

	nav input[type='checkbox']:checked ~ .hamburger-lines .line3 {
		transform: rotate(-45deg);
	}
</style>
