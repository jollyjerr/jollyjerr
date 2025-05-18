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
		class="bg-primary-8 bg-opacity-70 fixed z-[900] flex min-h-full min-w-full items-center justify-center backdrop-blur-sm"
		onclick={close_search_window}
		onkeyup={() => {
			// use esc to close with keyboard
		}}
	>
		<div
			class="border-primary-6 bg-primary-7 fixed flex h-full max-h-[32rem] w-full max-w-4xl flex-col justify-between rounded-sm border drop-shadow-md"
		>
			<div class="border-primary-6 flex w-full items-center border-b px-2 py-2">
				<MagnifyingGlass />
				<input
					type="text"
					id="search_term"
					class="bg-primary-7 w-full border-none outline-none focus:border-none focus:ring-0 focus:outline-none"
					placeholder="search..."
					onkeyup={debounced_set_query}
				/>
				<button
					onclick={() => search.setOpen(false)}
					class="bg-primary-6 grid place-items-center p-2 text-xs">esc</button
				>
			</div>
			<div class="flex-grow">
				{#await results_promise then { records, state }}
					<ul class="relative block w-full p-6">
						{#if state !== 'idle'}
							{#if records.length}
								{#each records as record, i (record.title)}
									<a
										data-sveltekit-reload
										href={get_href(record)}
										onmouseenter={() => {
											focus_index = i;
										}}
									>
										<li class={`w-full p-2 ${focus_index === i ? 'bg-primary-6' : ''}`}>
											<h3>{record.title}</h3>
											<p
												class="prose prose-invert prose-em:bg-warning prose-em:not-italic line-clamp-1 opacity-60"
											>
												<!-- eslint-disable-next-line svelte/no-at-html-tags -->
												{@html record._highlightResult.content.value}
											</p>
										</li>
									</a>
								{/each}
							{:else}
								<h2 class="font-bold">No results</h2>
							{/if}
						{/if}
					</ul>
				{:catch}
					<div
						class="text-danger text-opacity-80 grid h-full w-full place-items-center pb-2 text-center"
					>
						Unable to search :( <br /> Try again later!
					</div>
				{/await}
			</div>
			<div class="absolute right-0 bottom-0 flex items-center gap-2 p-4">
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
