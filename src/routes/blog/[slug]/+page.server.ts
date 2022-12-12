import { error } from '@sveltejs/kit';
import type { Post } from '$lib/blog/common/types';
import { getPost } from '$lib/blog/server/model';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params: { slug } }) => {
	const { html, metadata } = getPost(slug);
	if (!html || !metadata) {
		throw error(404, 'Blog not found');
	}

	return {
		post: {
			html,
			metadata
		} as Post
	};
};
