import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: [
					'/',
					'/_app/*',
					'/favicon.png',
					'/robots.txt',
					'/social.jpg',
					'/__data.json',
					'/contact',
					'/linktree',
					'/notes/*',
					'/blog/*'
				]
			}
		}),
		prerender: {
			entries: ['*', '/blog/uses']
		}
	}
};

export default config;
