import { logger } from '$lib/logger';
import { readFileSync } from 'fs';
import Showdown from 'showdown';
import type { Metadata } from 'showdown';

export function parse(filepath: string) {
	try {
		const text = readFileSync(filepath, { encoding: 'utf8' });
		return convert_markdown_to_post(text);
	} catch (error) {
		logger.error(error);
		return {
			html: undefined,
			metadata: undefined
		};
	}
}

function convert_markdown_to_post(text: string) {
	const converter = new Showdown.Converter({ metadata: true });

	const html = converter.makeHtml(text);
	const metadata = converter.getMetadata();

	return {
		html,
		metadata: format_metadata(metadata as Metadata)
	};
}

function format_metadata(metadata: Metadata) {
	return { ...metadata, tags: metadata.tags ? metadata.tags.split(',') : [] };
}
