<script lang="ts">
	import { searchClient } from '@algolia/client-search';
	import { useSearch } from '$lib/search/api.svelte';
	import type { AlgoliaNote } from '$lib/notes/types';
	import type { AlgoliaBlog } from '$lib/blog/types';
	import HitItem from './hit-item.svelte';
	import AlgoliaLogo from './algolia-logo.png';

	const search = useSearch();
	const algolia_client = searchClient('XHMYZ3V6CT', 'a9ba9e903d2ec7c98a6eb054283cccf3');

	let query = $state('');
	let timeout = $state<number>();
	let resultsPromise = $derived(fetchSearchResults());

	function debounce(newValue: string) {
		window.clearTimeout(timeout);
		timeout = window.setTimeout(() => {
			query = newValue;
		}, 200);
	}

	async function fetchSearchResults(): Promise<{
		blogs: AlgoliaBlog[];
		notes: AlgoliaNote[];
		state: 'success' | 'idle';
	}> {
		if (!query) return { blogs: [], notes: [], state: 'idle' };

		const {
			results: [{ hits: blogs }, { hits: notes }]
		} = (await algolia_client.search({
			requests: [
				{ indexName: 'blogs', query },
				{ indexName: 'notes', query }
			]
			// eslint-disable-next-line @typescript-eslint/no-explicit-any -- algolia types are silly
		})) as any as { results: [{ hits: AlgoliaBlog[] }, { hits: AlgoliaNote[] }] };

		return {
			blogs,
			notes,
			state: 'success'
		};
	}
</script>

{#if search.open}
	<div
		role="button"
		tabindex="-1"
		class="fixed z-[900] flex min-h-full min-w-full items-center justify-center bg-primary-8 bg-opacity-70"
		onclick={() => search.setOpen(false)}
		onkeyup={() => {
			// use esc to close with keyboard
		}}
	>
		<div
			class="rounded-sm w-full max-w-2xl space-y-3 rounded border border-primary-6 bg-primary-7 p-6 drop-shadow-md"
		>
			<!-- svelte-ignore a11y_autofocus -->
			<input
				type="text"
				id="search term"
				class="rounded-sm w-full rounded bg-primary-7"
				placeholder="search..."
				autofocus
				onkeyup={({ target }) => {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any -- todo?
					debounce((target as any)?.value);
				}}
			/>
			{#await resultsPromise then { blogs, notes, state }}
				{#if state !== 'idle'}
					{#if blogs.length || notes.length}
						<h2 class="text-2xl font-bold">Blogs</h2>
						<ul>
							{#each blogs as blog}
								<HitItem href={`/blog/${blog.slug}`} title={blog.title} selected={false} />
							{/each}
						</ul>
						<hr />
						<h2 class="text-xl font-bold">Notes</h2>
						<ul>
							{#each notes as note}
								<HitItem href={`/notes/${note.path}`} title={note.title} selected={false} />
							{/each}
						</ul>
					{:else}
						<h2 class="font-bold">No results</h2>
					{/if}
				{/if}
			{/await}
			<div class="flex items-center justify-end gap-2">
				<a
					href="https://www.algolia.com/developers/?utm_content=powered_by&utm_source=jtabb.dev&utm_medium=referral"
				>
					<img class="w-24" src={AlgoliaLogo} alt="search powered by Algolia" />
				</a>
			</div>
		</div>
	</div>
{/if}
