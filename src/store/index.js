import { writable } from 'svelte/store';
import { TempFormats } from '../types';

const createTempStore = () => {
	const { subscribe, set, update } = writable(TempFormats.Celsius);
	return {
		subscribe,
		set,
		update
	};
};

export const tempStore = createTempStore();
