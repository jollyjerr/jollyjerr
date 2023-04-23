import type { PageServerLoad } from './$types';
import { readdirSync } from 'fs';
import { pathToBlogs } from '$lib/blog/constants';
import { getPost } from '$lib/blog/model';

export const load: PageServerLoad = async () => {
	return {
		posts: get_posts_metadata()
	};
};

const get_posts_metadata = () =>
	readdirSync(pathToBlogs)
		.map((file) => {
			const filename = file.split('.')[0];
			const { metadata } = getPost(filename);
			return metadata;
		})
		.filter((post) => post.draft === 'false')
		.sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime());
