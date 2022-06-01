<script>
	import { goto } from '$app/navigation';
	import { loadingStore } from '../store';
	export let city;
	export let onClick;
	const toDetails = (url) => {
		loadingStore.set(true);
		goto(`/city/${url}`, {
			replaceState: true
		});
		onClick();
	};
</script>

<div class="content">
	<p on:click={toDetails(city.url)}>{city.name}</p>
	<p>{city.country}</p>
</div>

<style>
	.content {
		width: 100%;
		height: 70px;
		margin: 10px 0;
		border-radius: 10px;
		padding: 15px;
		background-color: var(--bg-color);
	}
</style>
