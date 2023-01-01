import type { Post } from '$lib/blog/types';
import { parseMarkdownFile } from '$lib/markdown/parse';
import type { Metadata } from 'showdown';
import { pathToBlogs } from './constants';

export const getPost = (slug: string) => {
	const { html, metadata } = parseMarkdownFile(pathToBlogs + `/${slug}.md`);
	return {
		html,
		metadata: {
			...(metadata ? format_metadata(metadata) : {}),
			slug
		}
	} as Post;
};

function format_metadata(metadata: Metadata) {
	return { ...metadata, tags: metadata.tags ? metadata.tags.split(',') : [] };
}
