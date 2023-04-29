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
			if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
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
		class="absolute flex min-h-full min-w-full bg-primary-8 bg-opacity-40 z-[900] items-center justify-center"
	>
		<div class="bg-primary-7 w-full max-w-2xl p-6 rounded space-y-3">
			<!-- svelte-ignore a11y-autofocus -- users will expect this -->
			<input
				type="text"
				class="w-full bg-primary-7 rounded"
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
