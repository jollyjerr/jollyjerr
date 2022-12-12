import { getPostsMetadata } from '$lib/blog/server/model';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		posts: getPostsMetadata()
	};
};
