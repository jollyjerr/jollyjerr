<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';

	export let post: PostMetadata | undefined;
</script>

<svelte:head>
	{#if post}
		<link rel="preload" as="image" href={post.image} />
	{/if}
</svelte:head>

{#if post}
	<div class="lg:max-w-xl bg-primary-7 hover:bg-primary-6 p-8 rounded transform duration-200">
		<a href={`/blog/${post.slug}`}>
			<img src={post.image} alt={post.title} class="rounded aspect-square w-full object-cover drop-shadow-sm" />
			<ul class="flex items-center gap-6 text-primary-4 font-bold py-4">
				{#each post.tags as tag}
					<li>#{tag}</li>
				{/each}
			</ul>
			<a
				class="block text-4xl font-bold transform duration-200"
				href={`/blog/${post.slug}`}>{post.title}</a
			>
			<p class="text-lg pt-2">{post.subtitle}</p>
		</a>
	</div>
{/if}
