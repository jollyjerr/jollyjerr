import { logger } from '$lib/logger';
import { readFileSync } from 'fs';
import Showdown from 'showdown';
import type { Metadata } from 'showdown';

export function parseMarkdownFile(filepath: string) {
	try {
		const text = readFileSync(filepath, { encoding: 'utf8' });
		return get_html_and_metadata(text);
	} catch (error) {
		logger.error(error);
		return {
			html: undefined,
			metadata: undefined
		};
	}
}

function get_html_and_metadata(text: string) {
	const converter = new Showdown.Converter({ metadata: true });

	const html = converter.makeHtml(text);
	const metadata = converter.getMetadata() as Metadata;

	return {
		html,
		metadata
	};
}
