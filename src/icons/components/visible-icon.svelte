<script>
	import WindIcon from '../../lib/icons/eye.svg?url';

	$: cssVariables = Object.entries($$props)
		.filter(([key]) => key.startsWith('--'))
		.reduce((css, [key, value]) => `${css}${key}: ${value};`, '');
</script>

<img src={WindIcon} style={cssVariables} alt="wind" />

<style>
	img {
		width: var(--width, 100%);
		margin: var(--margin, 0);
		color: #352bd8;
		filter: invert(9%) sepia(100%) saturate(7227%) hue-rotate(251deg) brightness(88%) contrast(91%);
	}
</style>
