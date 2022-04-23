import { parse } from '$lib/blog/server/parse';
import type { Post } from '$lib/blog/common/types';
import { notFound } from '$lib/shared/server/response';
import { pathToBlogs } from '$lib/blog/server/constants';

export function get({ params }) {
	const { slug } = params;

	const { html, metadata } = parse(`${pathToBlogs}/${slug}.md`);

	if (!html || !metadata) {
		return notFound;
	}

	return {
		body: {
			html,
			metadata
		} as Post
	};
}
