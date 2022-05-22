import adapter from '@sveltejs/adapter-auto';
import svg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				svg({
					includePaths: ['./src/lib/icons/', './src/assets/icons/'],
					svgoOptions: {
						multipass: true,
						plugins: ['preset-default', { name: 'removeAttrs', params: { attrs: '(fill|stroke)' } }]
					}
				}),
				svg({
					includePaths: ['./src/lib/graphics/'],
					svgoOptions: {
						multipass: true,
						plugins: ['preset-default']
					}
				})
			]
		}
	}
};

export default config;
