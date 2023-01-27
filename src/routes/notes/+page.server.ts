import type { PageServerLoad } from './$types';
import { pathToNotes } from '$lib/notes/constants';
import { readFromFileSystem } from '@mindgraph/read';

export const load: PageServerLoad = async () => {
	const graph = await readFromFileSystem(pathToNotes);
	return {
		notes: graph
	};
};
