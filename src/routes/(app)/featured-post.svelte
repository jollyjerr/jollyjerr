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
	<div
		class="rounded-sm w-full transform rounded bg-primary-7 p-6 duration-200 hover:bg-primary-6 lg:max-w-xl"
	>
		<a href={`/blog/${post.slug}`}>
			<img
				src={post.image}
				alt={post.title}
				class="rounded-sm aspect-square w-full rounded object-cover drop-shadow-sm"
			/>
			<ul class="flex items-center gap-6 py-4 font-bold text-primary-4">
				{#each post.tags as tag}
					<li>#{tag}</li>
				{/each}
			</ul>
			<a class="block transform text-4xl font-bold duration-200" href={`/blog/${post.slug}`}
				>{post.title}</a
			>
			<p class="pt-2 text-lg">{post.subtitle}</p>
		</a>
	</div>
{/if}
