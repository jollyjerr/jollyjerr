import type { PageServerLoad } from './$types';
import { default as directoryTree } from 'directory-tree';

const pathToNotes = 'knowledge';
const hiddenFilesRegex = /\/\./;

export const load: PageServerLoad = async () => {
	const notes = directoryTree(pathToNotes, { exclude: hiddenFilesRegex });
	return {
		notes
	};
};
