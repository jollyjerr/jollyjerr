import { logger } from '$lib/shared/logger';
import * as fs from 'fs';
import Showdown from 'showdown';
import type { Metadata } from 'showdown';

export function parse(filepath: string) {
	try {
		const text = fs.readFileSync(filepath, { encoding: 'utf8' });
		return convertMarkdownToPost(text);
	} catch (error) {
		logger.error(error);
		return {
			html: undefined,
			metadata: undefined
		};
	}
}

function convertMarkdownToPost(text: string) {
	const converter = new Showdown.Converter({ metadata: true });

	const html = converter.makeHtml(text);
	const metadata = converter.getMetadata();

	return {
		html,
		metadata: formatMetadata(metadata as Metadata)
	};
}

function formatMetadata(metadata: Metadata) {
	return { ...metadata, tags: metadata.tags ? metadata.tags.split(',') : [] };
}
