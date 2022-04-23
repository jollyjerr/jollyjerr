import { pathToBlogs } from '$lib/blog/server/constants';
import { parse } from '$lib/blog/server/parse';
import fs from 'fs';
import type { PostMetadata } from '$lib/blog/common/types';

export function get() {
	const posts = fs
		.readdirSync(pathToBlogs)
		.map((file) => {
			const filename = file.split('.')[0];
			const { metadata } = parse(`${pathToBlogs}/${filename}.md`);
			return metadata as PostMetadata;
		})
		.sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime());

	return {
		body: {
			posts
		}
	};
}
