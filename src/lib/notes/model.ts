import { parseMarkdownFile } from '$lib/markdown/parse';
import { pathToNotes } from './constants';

export const getNote = (slug: string) => {
	return parseMarkdownFile(pathToNotes + `/${slug}`);
};
