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

const createLoadingStoreStore = () => {
	const { subscribe, set, update } = writable(true);
	return {
		subscribe,
		set,
		update
	};
};

export const loadingStore = createLoadingStoreStore();

const createThemeStoreStore = () => {
	const { subscribe, set, update } = writable(false);
	return {
		subscribe,
		set,
		update
	};
};

export const themeStore = createThemeStoreStore();
