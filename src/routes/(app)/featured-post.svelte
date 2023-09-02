<script lang="ts">
	import { safeFormat } from '$lib/date';
	import type { PostMetadata } from '$lib/blog/types';

	export let post: PostMetadata | undefined;
</script>

<svelte:head>
	{#if post}
		<link rel="preload" as="image" href={post.image} />
	{/if}
</svelte:head>

{#if post}
	<div class="flex w-full flex-col">
		<a href={`/blog/${post.slug}`}>
			<img
				src={post.image}
				alt={post.title}
				class="rounded-xs aspect-square max-h-96 w-full transform rounded object-cover"
			/>
		</a>
		<ul class="py-4 text-primary-4">
			{#each post.tags as tag}
				<li>#{tag}</li>
			{/each}
		</ul>
		<div>
			<a class="text-5xl font-bold hover:text-primary-4 hover:underline" href={`/blog/${post.slug}`}
				>{post.title}</a
			>
		</div>
		<p class="pt-2 opacity-80">{post.subtitle}</p>
		<p class="text-sm opacity-40">{safeFormat(post.date)}</p>
	</div>
{/if}
