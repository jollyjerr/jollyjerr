<script lang="ts">
	import { safeFormat } from '$lib/date';
	import { sizedImage, imageSizes } from '$lib/image';
	import type { PostMetadata } from '$lib/blog/types';

	interface Props {
		post: PostMetadata | undefined;
	}

	let { post }: Props = $props();

	const sizedUrl = post ? sizedImage(post.image, imageSizes.lg) : undefined;
</script>

<svelte:head>
	{#if sizedUrl}
		<link rel="preload" as="image" href={sizedUrl} />
	{/if}
</svelte:head>

{#if post}
	<div class="flex w-full flex-col">
		<ul class="text-primary-4 py-4">
			{#each post.tags as tag}
				<li>#{tag}</li>
			{/each}
		</ul>
		<div>
			<a class="hover:text-primary-4 text-5xl font-bold hover:underline" href={`/blog/${post.slug}`}
				>{post.title}</a
			>
		</div>
		<p class="pt-2 opacity-80">{post.subtitle}</p>
		<p class="text-sm opacity-40">{safeFormat(post.date)}</p>
	</div>
{/if}
