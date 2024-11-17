<script lang="ts">
	import { searchClient } from '@algolia/client-search';
	import { useSearch } from '$lib/search/api.svelte';
	import type { AlgoliaNote } from '$lib/notes/types';
	import type { AlgoliaBlog } from '$lib/blog/types';
	import HitItem from './hit-item.svelte';
	import AlgoliaLogo from './algolia-logo.png';
	import MagnifyingGlass from './magnifying-glass.svg.svelte';
	import { onMount } from 'svelte';

	interface SearchResults {
		blogs: AlgoliaBlog[];
		notes: AlgoliaNote[];
		state: 'success' | 'idle';
	}

	const search = useSearch();
	const algolia_client = searchClient('XHMYZ3V6CT', 'a9ba9e903d2ec7c98a6eb054283cccf3');
	const initial_results_state: SearchResults = { blogs: [], notes: [], state: 'idle' };

	async function fetch_search_results(): Promise<SearchResults> {
		if (!query) return initial_results_state;

		const {
			results: [{ hits: blogs }, { hits: notes }]
		} = (await algolia_client.search({
			requests: [
				{ indexName: 'blogs', query },
				{ indexName: 'notes', query }
			]
			// eslint-disable-next-line @typescript-eslint/no-explicit-any -- algolia types are silly
		})) as any as { results: [{ hits: AlgoliaBlog[] }, { hits: AlgoliaNote[] }] };

		const record_count = 8;
		const blog_count = 3;
		const blog_slice = blogs.slice(0, blog_count);
		const num_notes = record_count - blog_slice.length;
		const note_slice = notes.slice(0, num_notes);

		return {
			blogs: blog_slice,
			notes: note_slice,
			state: 'success'
		};
	}

	let query = $state('');
	let timeout = $state<number>();
	let results_promise = $derived(fetch_search_results());

	function debounced_set_query(event: KeyboardEvent) {
		window.clearTimeout(timeout);
		timeout = window.setTimeout(() => {
			query = (event.target as HTMLInputElement).value;
		}, 200);
	}

	function close_search_window() {
		query = '';
		search.setOpen(false);
	}

	onMount(() => {
		document.onkeydown = (event: KeyboardEvent) => {
			if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
				event.preventDefault();
				search.setOpen(!search.open);
			}

			if (!search.open) return;

			if (event.key === 'Escape') {
				close_search_window();
			}
		};
	});

	$effect(() => {
		results_promise.then(console.log);
	});
</script>

{#if search.open}
	<div
		role="button"
		tabindex="-1"
		class="fixed z-[900] flex min-h-full min-w-full items-center justify-center bg-primary-8 bg-opacity-70 backdrop-blur-sm"
		onclick={close_search_window}
		onkeyup={() => {
			// use esc to close with keyboard
		}}
	>
		<div
			class="rounded-sm fixed h-full max-h-[32rem] w-full max-w-4xl rounded border border-primary-6 bg-primary-7 drop-shadow-md"
		>
			<div class="flex w-full items-center border-b border-primary-6 px-2 py-2">
				<MagnifyingGlass />
				<!-- svelte-ignore a11y_autofocus -->
				<input
					type="text"
					id="search term"
					class="w-full border-none bg-primary-7 outline-none focus:border-none focus:outline-none focus:ring-0"
					placeholder="search..."
					autofocus
					onkeyup={debounced_set_query}
				/>
				<button
					onclick={() => search.setOpen(false)}
					class="grid place-items-center bg-primary-6 p-2 text-xs">esc</button
				>
			</div>
			{#await results_promise then { blogs, notes, state }}
				<ul class="p-6">
					{#if state !== 'idle'}
						{#if blogs.length || notes.length}
							{#if blogs.length}
								{#each blogs as blog}
									<HitItem href={`/blog/${blog.slug}`} title={blog.title} selected={false} />
								{/each}
							{/if}
							{#if notes.length}
								{#each notes as note}
									<HitItem href={`/notes/${note.path}`} title={note.title} selected={false} />
								{/each}
							{/if}
						{:else}
							<h2 class="font-bold">No results</h2>
						{/if}
					{/if}
				</ul>
			{:catch}
				<div
					class="grid h-full w-full place-items-center pb-2 text-center text-danger text-opacity-80"
				>
					Unable to search :( <br /> Try again later!
				</div>
			{/await}
			<div class="absolute bottom-0 right-0 flex items-center justify-end gap-2 p-4">
				Search by
				<a
					href="https://www.algolia.com/developers/?utm_content=powered_by&utm_source=jtabb.dev&utm_medium=referral"
				>
					<img class="w-24" src={AlgoliaLogo} alt="search powered by Algolia" />
				</a>
			</div>
		</div>
	</div>
{/if}
