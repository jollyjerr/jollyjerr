<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';

	export let posts: PostMetadata[];

	const allTags = posts
		.flatMap((post) => post.tags)
		.reduce<string[]>((acc, tag) => (acc.includes(tag) ? acc : [...acc, tag]), []);

	$: selectedTags = [] as string[];
	let filteredPosts = posts.filter((post) => post.tags.every((tag) => selectedTags.includes(tag)));
</script>

<h1 class="text-2xl font-bold p-6 rounded bg-primary-7">Search blogs by tag</h1>
<ul class="flex gap-2 my-4">
	{#each allTags as tag}
		<li
			class={`p-4 rounded ${selectedTags.includes(tag) ? 'bg-primary-6' : 'bg-primary-7'}`}
			on:click={() => {
				if (selectedTags.includes(tag)) {
					selectedTags.push(tag);
				} else {
					selectedTags = selectedTags.filter((t) => t !== tag);
				}
			}}
		>
			#{tag}
		</li>
	{/each}
</ul>
