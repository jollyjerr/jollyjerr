import type { HLJSApi } from 'highlight.js';
import hljsCore from 'highlight.js/lib/core';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import sql from 'highlight.js/lib/languages/sql';
import rust from 'highlight.js/lib/languages/rust';
import elixir from 'highlight.js/lib/languages/elixir';
import cpp from 'highlight.js/lib/languages/cpp';
import go from 'highlight.js/lib/languages/go';
import css from 'highlight.js/lib/languages/css';
import lua from 'highlight.js/lib/languages/lua';

let hightlight: HLJSApi | undefined;

export function getHighlighter(): HLJSApi {
	if (hightlight) return hightlight;

	[
		{ name: 'js', language: js },
		{ name: 'ts', language: ts },
		{ name: 'sql', language: sql },
		{ name: 'rust', language: rust },
		{ name: 'elixir', language: elixir },
		{ name: 'cpp', language: cpp },
		{ name: 'go', language: go },
		{ name: 'css', language: css },
		{ name: 'lua', language: lua }
	].forEach(({ name, language }) => {
		hljsCore.registerLanguage(name, language);
	});

	hightlight = hljsCore;

	return hightlight;
}
