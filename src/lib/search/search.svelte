<script lang="ts">
	import { searchClient } from '@algolia/client-search';
	import { useSearch } from '$lib/search/api.svelte';

	const search = useSearch();
	const algolia_client = searchClient('XHMYZ3V6CT', 'a9ba9e903d2ec7c98a6eb054283cccf3');

	let query = $state<string>();

    // todo: turn this into async derived with debounce
	async function requestHits() {
		if (!query) return;

		const results = await algolia_client.search({
			requests: [{ indexName: 'blogs', query }, { indexName: 'notes', query }]
		});

        console.log(results);
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
				class="rounded-sm w-full rounded bg-primary-7"
				placeholder="search..."
				autofocus
				bind:value={query}
				onkeyup={requestHits}
				id="search term"
			/>
			<!-- 	{#if blogPosts.length || notes.length} -->
			<!-- 		<h2 class="text-2xl font-bold">Blogs</h2> -->
			<!-- 		<ul> -->
			<!-- 			{#each blogPosts as blog} -->
			<!-- 				<HitItem -->
			<!-- 					href={`/blog/${blog.slug}`} -->
			<!-- 					selected={blog.objectID === focusedID} -->
			<!-- 					title={blog.title} -->
			<!-- 				/> -->
			<!-- 			{/each} -->
			<!-- 		</ul> -->
			<!-- 		<hr /> -->
			<!-- 		<h2 class="text-xl font-bold">Notes</h2> -->
			<!-- 		<ul> -->
			<!-- 			{#each notes as note} -->
			<!-- 				<HitItem -->
			<!-- 					href={`/notes/${note.path}`} -->
			<!-- 					selected={note.objectID === focusedID} -->
			<!-- 					title={note.title} -->
			<!-- 				/> -->
			<!-- 			{/each} -->
			<!-- 		</ul> -->
			<!-- 	{:else} -->
			<!-- 		<h2 class="font-bold">No results</h2> -->
			<!-- 	{/if} -->
			<!-- 	<div class="flex items-center justify-end gap-2"> -->
			<!-- 		<a -->
			<!-- 			href="https://www.algolia.com/developers/?utm_content=powered_by&utm_source=jtabb.dev&utm_medium=referral" -->
			<!-- 		> -->
			<!-- 			<img class="w-24" src={AlgoliaLogo} alt="search powered by Algolia" /> -->
			<!-- 		</a> -->
			<!-- 	</div> -->
		</div>
	</div>
{/if}
