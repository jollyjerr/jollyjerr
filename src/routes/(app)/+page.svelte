<script lang="ts">
	import type { PostMetadata } from '$lib/blog/types';
	import { safeFormat } from '$lib/date';
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';

	import type { PageData } from './$types';
	import FeaturedBlogs from './featured-blogs.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	export const posts = data.posts;

	function groupByYear(posts: PostMetadata[]) {
		return posts.reduce<Record<string, PostMetadata[]>>((acc, article) => {
			const year = article.date.split('-')[0];

			if (!acc[year]) {
				acc[year] = [];
			}
			acc[year].push(article);

			return acc;
		}, {});
	}

	const groupedPosts = Object.entries(groupByYear(posts)).sort(([yeara], [yearb]) =>
		yeara > yearb ? -1 : 1
	);
</script>

<Head />
<Navbar selected="blog" />
<FeaturedBlogs {posts} />

<div class="grid w-full place-items-center py-8 lg:w-1/2">
	<div class="w-full space-y-3">
		<h3 class="text-3xl">All Posts</h3>
		{#each groupedPosts as [key, values]}
			<h4 class="text-xl">{key}</h4>
			<ul>
				{#each values as post}
					<li class="flex items-center justify-between text-lg">
						<div class="opacity-60">{safeFormat(post.date, 'at some point,').split(',')[0]}</div>
						<a class="hover:underline hover:text-primary-4" href={`/blog/${post.slug}`}>{post.title}</a>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
</div>
