<script lang="ts">
	import { onMount } from 'svelte';
	import { afterNavigate, goto } from '$app/navigation';
	import algoliasearch, { type SearchClient } from 'algoliasearch';
	import AlgoliaLogo from './algolia-logo.png';
	import HitItem from './hit-item.svelte';
	import type { AlgoliaBlog } from '$lib/blog/types';
	import type { AlgoliaNote } from '$lib/notes/types';

	const queryTemplate = [
		{ indexName: 'blogs', params: { hitsPerPage: 2 } },
		{ indexName: 'notes', params: { hitsPerPage: 3 } }
	] as const;

	let searchClient: SearchClient;
	let enabled = false;
	let query = '';
	let blogPosts: AlgoliaBlog[] = [];
	let notes: AlgoliaNote[] = [];
	let allHits: (AlgoliaNote | AlgoliaBlog)[] = [];

	let focusedIdIndex = -1;
	let focusedID = '';
	let keyHandled = false;

	afterNavigate(() => toggleSearch());
	onMount(() => {
		searchClient = algoliasearch('XHMYZ3V6CT', 'a9ba9e903d2ec7c98a6eb054283cccf3');

		document.onkeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && enabled) {
				toggleSearch();
				keyHandled = true;
			} else if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
				event.preventDefault();
				toggleSearch(!enabled);
				keyHandled = true;
			} else if (event.key === 'ArrowDown' || (event.ctrlKey && event.key === 'n')) {
				nudgeFocus(true);
				keyHandled = true;
			} else if (event.key === 'ArrowUp' || (event.ctrlKey && event.key === 'p')) {
				nudgeFocus(false);
				keyHandled = true;
			} else if (event.key === 'Enter' && focusedIdIndex >= 0) {
				const selected = allHits[focusedIdIndex];
				if ('slug' in selected) {
					goto(`/blog/${selected.slug}`);
				} else {
					goto(`/notes/${(selected as unknown as { path: string }).path}`);
				}
			}
		};
	});

	function toggleSearch(to = false) {
		query = '';
		enabled = to;
		focusedIdIndex = -1;
		focusedID = '';
		if (to) {
			search();
		}
	}

	function nudgeFocus(down: boolean) {
		focusedIdIndex += down ? 1 : -1;
		if (focusedIdIndex > allHits.length) {
			focusedIdIndex--;
		} else if (focusedIdIndex < -1) {
			focusedIdIndex++;
		}
		focusedID = allHits[focusedIdIndex].objectID;
	}

	async function search() {
		if (keyHandled) {
			keyHandled = false;
			return;
		}

		searchClient
			.multipleQueries(queryTemplate.map((t) => ({ ...t, query })))
			.then(({ results }) => {
				blogPosts = results[0].hits as unknown as AlgoliaBlog[];
				notes = results[1].hits as unknown as AlgoliaNote[];
				allHits = [...blogPosts, ...notes];
				if (focusedIdIndex > blogPosts.length + notes.length) {
					focusedIdIndex = -1;
					focusedID = '';
				}
			});
	}
</script>

{#if enabled}
	<div
		class="absolute z-[900] flex min-h-full min-w-full items-center justify-center bg-primary-8 bg-opacity-70"
		on:click={() => toggleSearch()}
		on:keyup={() => {
			// use esc to close with keyboard
		}}
	>
		<div
			class="rounded-sm w-full max-w-2xl space-y-3 border border-primary-6 bg-primary-7 p-6 drop-shadow-md"
		>
			<!-- svelte-ignore a11y-autofocus -- users will expect this -->
			<input
				type="text"
				class="rounded-sm w-full bg-primary-7"
				placeholder="search..."
				autofocus
				bind:value={query}
				on:keyup={search}
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
