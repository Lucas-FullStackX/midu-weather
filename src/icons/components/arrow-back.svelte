<script>
	import arrowBack from '../../lib/icons/arrow-back.png';
	import { themeStore } from '../../store';
</script>

<img src={arrowBack} class={$themeStore ? 'dark' : 'light'} alt="" />

<style>
	img {
		width: 100%;
		color: #352bd8;
		margin: auto;
	}
	.dark {
		filter: invert(92%) sepia(77%) saturate(6740%) hue-rotate(188deg) brightness(130%) contrast(95%);
	}
	.light {
		filter: invert(0%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%);
	}
</style>
