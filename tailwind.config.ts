import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [typography, forms, aspectRatio],
	theme: {
		colors: {
			primary: {
				1: '#ffffff',
				2: '#67d0e5',
				3: '#34c0dc',
				4: '#01b0d3',
				5: '#018da9',
				6: '#01586a',
				7: '#00232a',
				8: '#001215'
			},
			danger: '#ff6666',
			warning: '#ffb34d',
			success: '#6cc6d'
		},
		fontFamily: {
			common: ['Arial', 'sans-serif']
		},
		borderRadius: {
			DEFAULT: '12px'
		}
	}
} satisfies Config;
