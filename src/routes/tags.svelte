<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';

	export let posts: PostMetadata[];

	const allTags = posts
		.flatMap((post) => post.tags)
		.reduce<string[]>((acc, tag) => (acc.includes(tag) ? acc : [...acc, tag]), []);

	let selectedTags: string[] = [];

	function toggle(tag: string) {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter((t) => t !== tag);
		} else {
			selectedTags = [...selectedTags, tag];
		}
	}

	$: filteredPosts = (
		selectedTags.length > 0
			? posts.filter((post) => selectedTags.every((tag) => post.tags.includes(tag)))
			: posts
	).slice(0, 8);
</script>

<h1 class="text-2xl font-bold p-6 rounded bg-primary-7">Search blogs by tag</h1>
<ul class="flex flex-wrap gap-2 my-4">
	{#each allTags as tag}
		<li
			class={`p-4 rounded cursor-pointer hover:ring-1 active:ring-1 ring-primary-4 ${
				selectedTags.includes(tag) ? 'bg-primary-6' : 'bg-primary-7'
			}`}
			on:click={() => toggle(tag)}
			on:keypress={() => toggle(tag)}
		>
			#{tag}
		</li>
	{/each}
</ul>
<ul>
	{#each filteredPosts as post}
		<li>{post.title}</li>
	{/each}
</ul>
