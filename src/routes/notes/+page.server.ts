import type { PageServerLoad } from './$types';
import { pathToNotes } from '$lib/notes/constants';
import { FileSystem } from '@mindgraph/read';

export const load: PageServerLoad = async () => {
	const graph = await FileSystem.read({ path: pathToNotes });
	return {
		notes: graph
	};
};
