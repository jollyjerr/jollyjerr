import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getNote } from '$lib/notes/model';
import type { Note } from '$lib/notes/types';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const { html } = getNote(slug);
	if (!html) {
		throw error(404, 'Note not found');
	}

	return {
		note: {
			html,
			slug,
			title: (slug.split('/').at(-1)?.split('.md')[0] || 'something')
				.split('-')
				.map((w) => w[0].toUpperCase() + w.slice(1))
				.join(' ')
		} as Note
	};
};
