<script>
	import WindIcon from '../icons/components/wind-icon.svelte';
	import VisibleIcon from '../icons/components/visible-icon.svelte';
	import HumidityIcon from '../icons/components/humidity-icon.svelte';
	export let weather;
</script>

<div class="container">
	<div>
		<WindIcon --width="40px" />
		<span> {weather.windSpeed}Km/h</span>
		<strong> Wind </strong>
	</div>

	<div>
		<HumidityIcon --width="40px" />
		<span> {weather.humidity}% </span>
		<strong> Humidity </strong>
	</div>

	<div>
		<VisibleIcon --width="25px" --margin="7px 0 8px 0" />
		<span> {weather.vis_km}Km</span>
		<strong> Visibility </strong>
	</div>
</div>

<style>
	.container {
		padding: 32px;
		width: 90%;
		margin: 0 auto 20px auto;
		border-radius: 15px;
		display: flex;
		text-align: center;
		justify-content: space-between;
		background: #fafafa;
	}

	span {
		display: block;
		color: #000;
		font-weight: 600;
		font-size: 16px;
	}

	strong {
		color: #9699a9;
		font-size: 14px;
		font-weight: 500;
	}
</style>
