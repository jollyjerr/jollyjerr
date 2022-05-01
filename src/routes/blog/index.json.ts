import { pathToBlogs } from '$lib/blog/server/constants';
import { readdirSync } from 'fs';
import { getPost } from '$lib/blog/server/model';

export function get() {
	const posts = readdirSync(pathToBlogs)
		.map((file) => {
			const filename = file.split('.')[0];
			const { metadata } = getPost(filename);
			return metadata;
		})
		.sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime());

	return {
		body: {
			posts
		}
	};
}
