import { writable } from 'svelte/store';

const createTempStore = () => {
	const { subscribe, set, update } = writable('Celsius');
	return {
		subscribe,
		set,
		update
	};
};

export const tempStore = createTempStore();
