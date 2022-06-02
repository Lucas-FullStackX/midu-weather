<script>
	import dayjs from 'dayjs';
	import { tempStore } from '../store';
	import { TempFormats } from '../types';

	export let history;
</script>

<div class="container">
	{#each history as day}
		<div class="day">
			<span>{dayjs(day?.date ?? '').format('ddd')}</span>
			<div class="icon">
				<img src={day?.day.condition?.icon ?? ''} alt={day?.day.condition?.text ?? ''} />
				<p>{day?.day.condition?.text ?? ''}</p>
			</div>
			<p>
				{$tempStore === TempFormats.Celsius ? day?.day.avgtemp_c ?? '' : day?.day.avgtemp_f ?? ''}º
			</p>
		</div>
	{/each}
</div>

<style>
	span {
		font-weight: bold;
	}
	.icon {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.day {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin: 10px 0;
		padding: 0 20px;
		border-radius: 10px;
		background-color: var(--bg-color);
	}
</style>
