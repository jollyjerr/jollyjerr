import type { Post } from '$lib/blog/common/types';
import { pathToBlogs } from './constants';
import { parse } from './parse';
import { readdirSync } from 'fs';

export const getPost = (slug: string) => {
	const { html, metadata } = parse(pathToBlogs + `/${slug}.md`);
	return {
		html,
		metadata: {
			...metadata,
			slug
		}
	} as Post;
};

export const getPostsMetadata = () =>
	readdirSync(pathToBlogs)
		.map((file) => {
			const filename = file.split('.')[0];
			const { metadata } = getPost(filename);
			return metadata;
		})
		.sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime());
