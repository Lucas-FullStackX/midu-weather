<script>
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Loader from '../components/loader.svelte';
	onMount(async () => {
		goto('/city/auto');
	});
	console.log($page);
</script>

<Loader />
