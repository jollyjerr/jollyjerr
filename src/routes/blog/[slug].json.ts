import { parse } from '$lib/blog/server/parse';
import { notFound } from '$lib/shared/response';

export function get({ params }) {
	const { slug } = params;

	const { html, metadata } = parse(`src/lib/blog/posts/${slug}.md`);

	if (!html || !metadata) {
		return notFound;
	}

	return {
		body: {
			html,
			metadata
		}
	};
}
