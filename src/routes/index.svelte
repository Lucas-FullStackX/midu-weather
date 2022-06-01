<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Loader from '../components/loader.svelte';
	onMount(async () => {
		goto('/city/auto');
	});
</script>

<Loader />
