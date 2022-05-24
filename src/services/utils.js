import dayjs from 'dayjs';

export function getWeekRate(today) {
	const numberMount = dayjs(today).format('D');
	const numberWeek = dayjs(today).format('d');
	const dt = dayjs()
		.date(Number(numberMount) - Number(numberWeek))
		.format('YYYY-MM-DD');
	const end_dt = dayjs()
		.date(Number(numberMount) + 6 - Number(numberWeek))
		.format('YYYY-MM-DD');
	return {
		dt,
		end_dt
	};
}
