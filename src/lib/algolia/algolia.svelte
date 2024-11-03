<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import algoliasearch, { type SearchClient } from 'algoliasearch';
	import AlgoliaLogo from './algolia-logo.png';
	import HitItem from './hit-item.svelte';
	import { searchOpen } from '$lib/store';
	import type { AlgoliaBlog } from '$lib/blog/types';
	import type { AlgoliaNote } from '$lib/notes/types';

	const queryTemplate = [
		{ indexName: 'blogs', params: { hitsPerPage: 2 } },
		{ indexName: 'notes', params: { hitsPerPage: 3 } }
	] as const;

	let enabled = $state(false);
	let searchClient: SearchClient;
	let query = $state('');
	let blogPosts: AlgoliaBlog[] = $state([]);
	let notes: AlgoliaNote[] = $state([]);
	let allHits: (AlgoliaNote | AlgoliaBlog)[] = [];

	let focusedIdIndex: number | null = null;
	let focusedID = $state('');
	let keyHandled = false;

	searchOpen.subscribe((value) => {
		handleSearchToggle(value);
	});
	afterNavigate(() => setSearchOpen());
	onMount(() => {
		searchClient = algoliasearch('XHMYZ3V6CT', 'a9ba9e903d2ec7c98a6eb054283cccf3');

		document.onkeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && enabled) {
				setSearchOpen(false);
				keyHandled = true;
			} else if (enabled && (event.key === 'ArrowDown' || (event.ctrlKey && event.key === 'n'))) {
				event.preventDefault();
				nudgeFocus(true);
				keyHandled = true;
			} else if (enabled && (event.key === 'ArrowUp' || (event.ctrlKey && event.key === 'p'))) {
				event.preventDefault();
				nudgeFocus(false);
				keyHandled = true;
			} else if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
				event.preventDefault();
				setSearchOpen(!enabled);
				keyHandled = true;
			} else if (
				event.key === 'Enter' &&
				typeof focusedIdIndex === 'number' &&
				focusedIdIndex >= 0
			) {
				const selected = allHits[focusedIdIndex];
				if ('slug' in selected) {
					window.location.href = window.location.origin + `/blog/${selected.slug}`;
				} else {
					window.location.href =
						window.location.origin + `/notes/${(selected as unknown as { path: string }).path}`;
				}
			}
		};

		document.onkeyup = (event: KeyboardEvent) => {
			if (enabled && event.ctrlKey) {
				keyHandled = true;
			}
		};
	});

	function setSearchOpen(to = false) {
		searchOpen.update(() => to);
	}

	function handleSearchToggle(to = false) {
		query = '';
		enabled = to;
		focusedIdIndex = null;
		focusedID = '';
		if (to) {
			search();
		}
	}

	function nudgeFocus(moveDown: boolean) {
		const moveUp = !moveDown;

		if (
			(focusedIdIndex === null && moveUp) ||
			(focusedIdIndex === allHits.length - 1 && moveDown) ||
			(focusedIdIndex === 0 && moveUp)
		) {
			return;
		}

		if (moveDown && focusedIdIndex == null) {
			focusedIdIndex = 0;
		} else {
			if (focusedIdIndex === null) return;

			focusedIdIndex += moveDown ? 1 : -1;
			if (focusedIdIndex >= allHits.length) {
				focusedIdIndex = allHits.length - 1;
			}
		}

		if (focusedIdIndex === null) return;
		focusedID = allHits[focusedIdIndex].objectID;
	}

	async function search() {
		if (keyHandled) {
			keyHandled = false;
			return;
		}

		try {
			const { results } = await searchClient.multipleQueries(
				queryTemplate.map((t) => ({ ...t, query }))
			);
			focusedIdIndex = null;
			focusedID = '';

			// Algolia types suck here :(
			const searchResults = results as unknown as { hits: (AlgoliaNote | AlgoliaBlog)[] }[];
			blogPosts = searchResults[0].hits as AlgoliaBlog[];
			notes = searchResults[1].hits as AlgoliaNote[];

			allHits = [...blogPosts, ...notes];
		} catch {
			setSearchOpen(false);
		}
	}
</script>

{#if enabled}
	<div
		role="button"
		tabindex="-1"
		class="absolute z-[900] flex min-h-full min-w-full items-center justify-center bg-primary-8 bg-opacity-70"
		onclick={() => setSearchOpen()}
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
				class="rounded-sm w-full rounded bg-primary-7"
				placeholder="search..."
				autofocus
				bind:value={query}
				onkeyup={search}
				id="search term"
			/>
			{#if blogPosts.length || notes.length}
				<h2 class="text-2xl font-bold">Blogs</h2>
				<ul>
					{#each blogPosts as blog}
						<HitItem
							href={`/blog/${blog.slug}`}
							selected={blog.objectID === focusedID}
							title={blog.title}
						/>
					{/each}
				</ul>
				<hr />
				<h2 class="text-xl font-bold">Notes</h2>
				<ul>
					{#each notes as note}
						<HitItem
							href={`/notes/${note.path}`}
							selected={note.objectID === focusedID}
							title={note.title}
						/>
					{/each}
				</ul>
			{:else}
				<h2 class="font-bold">No results</h2>
			{/if}
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
