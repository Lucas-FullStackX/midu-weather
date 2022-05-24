<script>
	import WindIcon from '../../lib/icons/wind.svg?url';

	$: cssVariables = Object.entries($$props)
		.filter(([key]) => key.startsWith('--'))
		.reduce((css, [key, value]) => `${css}${key}: ${value};`, '');
</script>

<img src={WindIcon} style={cssVariables} alt="wind" />

<style>
	img {
		width: var(--width, 100%);
		color: #352bd8;
	}
</style>
