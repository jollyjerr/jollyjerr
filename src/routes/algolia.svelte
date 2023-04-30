<script lang="ts">
	import { onMount } from 'svelte';
	import algoliasearch, { type SearchClient } from 'algoliasearch';
	import type { Note } from '$lib/notes/types';

	const queryTemplate = [
		{ indexName: 'blogs', params: { hitsPerPage: 2 } },
		{ indexName: 'notes', params: { hitsPerPage: 3 } }
	] as const;

	let searchClient: SearchClient;
	let enabled = false;
	let query = '';
	let blogPosts: { title: string }[] = [];
	let notes: Note[] = [];

	onMount(() => {
		searchClient = algoliasearch('XHMYZ3V6CT', 'a9ba9e903d2ec7c98a6eb054283cccf3');

		document.onkeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				query = '';
				enabled = false;
			} else if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
				event.preventDefault();
				query = '';
				enabled = !enabled;
			}
		};
	});

	async function search() {
		searchClient
			.multipleQueries(queryTemplate.map((t) => ({ ...t, query })))
			.then(({ results }) => {
				blogPosts = results[0].hits as unknown as { title: string }[];
				notes = results[1].hits as unknown as Note[];
			});
	}
</script>

{#if enabled}
	<div
		class="absolute z-[900] flex min-h-full min-w-full items-center justify-center bg-primary-8 bg-opacity-40"
	>
		<div class="w-full max-w-2xl space-y-3 rounded bg-primary-7 p-6">
			<!-- svelte-ignore a11y-autofocus -- users will expect this -->
			<input
				type="text"
				class="w-full rounded bg-primary-7"
				placeholder="search..."
				autofocus
				bind:value={query}
				on:keyup={search}
			/>
			<hr />
			<h2>Blogs</h2>
			<ul>
				{#each blogPosts as blog}
					<li>
						<h3>{blog.title}</h3>
					</li>
				{/each}
			</ul>
			<hr />
			<h2>Notes</h2>
			<ul>
				{#each notes as note}
					<li>
						<h3>{note.title}</h3>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
