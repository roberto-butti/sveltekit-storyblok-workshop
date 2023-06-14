import adapter from '@sveltejs/adapter-static';
// 001 import the vitePreprocess
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		})
	},
	// 002 setting the preprocess
	preprocess: [vitePreprocess()]
};

export default config;
