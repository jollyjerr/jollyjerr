<script lang="ts">
	import { searchClient } from '@algolia/client-search';
	import { useSearch } from '$lib/search/api.svelte';
	import type { AlgoliaNote } from '$lib/notes/types';
	import type { AlgoliaBlog } from '$lib/blog/types';
	import AlgoliaLogo from './algolia-logo.png';
	import MagnifyingGlass from './magnifying-glass.svg.svelte';
	import { onMount } from 'svelte';

	interface SearchResults {
		records: (AlgoliaNote | AlgoliaBlog)[];
		state: 'success' | 'idle';
	}

	const search = useSearch();
	const algolia_client = searchClient('XHMYZ3V6CT', 'a9ba9e903d2ec7c98a6eb054283cccf3');
	const initial_results_state: SearchResults = { records: [], state: 'idle' };
	const max_result_count = 5;

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

		const blog_count = 3;
		const blog_slice = blogs.slice(0, blog_count);
		const num_notes = max_result_count - blog_slice.length;
		const note_slice = notes.slice(0, num_notes);

		return {
			records: [...blog_slice, ...note_slice],
			state: 'success'
		};
	}

	let query = $state('');
	let focus_index = $state(-1);
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
		focus_index = -1;
		search.setOpen(false);
	}

	function is_algolia_blog(record: AlgoliaBlog | AlgoliaNote): record is AlgoliaBlog {
		return !!(record as AlgoliaBlog).slug;
	}

	function get_href(record: AlgoliaBlog | AlgoliaNote): string {
		return is_algolia_blog(record) ? `/blog/${record.slug}` : `/notes/${record.path}`;
	}

	function nudge_focus_up() {
		if (focus_index > -1) {
			focus_index -= 1;
		}
	}

	function nudge_focus_down() {
		results_promise.then((l) => {
			if (focus_index < l.records.length - 1) {
				focus_index += 1;
			}
		});
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
			} else if (event.key === 'ArrowDown' || (event.ctrlKey && event.key === 'n')) {
				event.preventDefault();
				nudge_focus_down();
			} else if (event.key === 'ArrowUp' || (event.ctrlKey && event.key === 'p')) {
				event.preventDefault();
				nudge_focus_up();
			} else if (event.key === 'Enter' && focus_index >= 0) {
				results_promise.then((results) => {
					const selected = results.records[focus_index];
					if (is_algolia_blog(selected)) {
						window.location.href = window.location.origin + `/blog/${selected.slug}`;
					} else {
						window.location.href = window.location.origin + `/notes/${selected.path}`;
					}
				});
			}
		};
	});

	// struggled to debug this quickly so using a hacky solution for now
	$effect(() => {
		if (search.open) {
			let input: HTMLInputElement | null = null;
			while (input === null) {
				input = document.querySelector('#search_term')!;
			}
			input.focus();
		}
	});
</script>

{#if search.open}
	<div
		role="button"
		tabindex="-1"
		class="fixed inset-0 z-[900] flex items-center justify-center bg-black/20 backdrop-blur-sm dark:bg-black/40"
		onclick={close_search_window}
		onkeyup={() => {
			// use esc to close with keyboard
		}}
	>
		<div
			class="relative flex h-full max-h-[32rem] w-full max-w-4xl flex-col rounded-lg border border-neutral-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800"
		>
			<div
				class="flex w-full items-center border-b border-neutral-200 px-4 py-3 dark:border-slate-700"
			>
				<MagnifyingGlass />
				<input
					type="text"
					id="search_term"
					class="w-full border-none bg-transparent px-3 text-lg placeholder-neutral-400 outline-none focus:ring-0 dark:placeholder-slate-500"
					placeholder="Search..."
					onkeyup={debounced_set_query}
				/>
				<button
					onclick={() => search.setOpen(false)}
					class="grid place-items-center rounded-md border border-neutral-300 px-2 py-1 text-xs text-neutral-600 dark:border-slate-600 dark:text-slate-400"
				>
					esc
				</button>
			</div>
			<div class="flex-grow overflow-y-auto">
				{#await results_promise then { records, state }}
					<ul class="relative block w-full py-2">
						{#if state !== 'idle'}
							{#if records.length}
								{#each records as record, i (record.title)}
									<a
										data-sveltekit-reload
										href={get_href(record)}
										onmouseenter={() => {
											focus_index = i;
										}}
										class="block"
									>
										<li
											class={`mx-2 rounded-md px-4 py-2 hover:bg-neutral-100 dark:hover:bg-slate-700 ${focus_index === i ? 'bg-neutral-100 dark:bg-slate-700' : ''}`}
										>
											<h3 class="text-lg font-medium text-neutral-800 dark:text-slate-200">
												{record.title}
											</h3>
											<p class="line-clamp-1 text-sm text-neutral-500 dark:text-slate-400">
												<!-- eslint-disable-next-line svelte/no-at-html-tags -->
												{@html record._highlightResult.content.value}
											</p>
										</li>
									</a>
								{/each}
							{:else}
								<div class="p-6 text-center text-neutral-500 dark:text-slate-400">
									<h2 class="text-xl font-medium">No results</h2>
									<p class="mt-2 text-sm">Try a different search term.</p>
								</div>
							{/if}
						{:else}
							<div class="p-6 text-center text-neutral-500 dark:text-slate-400">
								<p>Start typing to search...</p>
							</div>
						{/if}
					</ul>
				{:catch}
					<div
						class="grid h-full w-full place-items-center px-6 py-12 text-center text-red-600 dark:text-red-400"
					>
						<p class="text-lg font-medium">Unable to search :(</p>
						<p class="mt-2 text-sm">Please try again later!</p>
					</div>
				{/await}
			</div>
			<div
				class="flex items-center justify-end gap-2 border-t border-neutral-200 p-4 text-sm text-neutral-500 dark:border-slate-700 dark:text-slate-400"
			>
				Search by
				<a
					href="https://www.algolia.com/developers/?utm_content=powered_by&utm_source=jtabb.dev&utm_medium=referral"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img class="w-20 not-dark:invert" src={AlgoliaLogo} alt="search powered by Algolia" />
				</a>
			</div>
		</div>
	</div>
{/if}
