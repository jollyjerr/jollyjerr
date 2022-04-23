<script lang="ts">
	import type { PostMetadata } from '$lib/blog/common/types';

	export let posts: PostMetadata[];
	const topThree = posts.filter((post) => post.featured !== 'true');
</script>

<ul class="w-full space-y-12">
	{#each topThree as post}
		<li class="max-w-2xl mx-auto hover:bg-primary-6 rounded p-6 transform duration-200">
			<a href={`/blog/${post.slug}`} class="flex justify-between">
				<span>
					<a href={`/blog/${post.slug}`} class="text-2xl font-bold">{post.title}</a>
					<p>{post.subtitle}</p>
				</span>
				<img
					src={post.image}
					alt={post.title}
					class="object-cover aspect-video w-1/2 pl-28 rounded"
				/>
			</a>
		</li>
	{/each}
</ul>
