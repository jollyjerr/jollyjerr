import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: [
					'/',
					'/_app/*',
					'/favicon.png',
					'robots.txt',
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
