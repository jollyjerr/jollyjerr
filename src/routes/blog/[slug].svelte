<script context="module" lang="ts">
	/** @type {import('./[slug]').Load} */
	export async function load({ params: { slug }, fetch }) {
		const response = await fetch(`/blog/${slug}.json`);
		return {
			status: response.status,
			props: {
				post: response.ok && (await response.json())
			}
		};
	}
</script>

<script lang="ts">
	import type { Post } from '$lib/blog/common/types';
	import PostPage from '$lib/blog/client/pages/post/post.svelte';
	import Head from '$lib/seo/components/head.svelte';
	import Navbar from '$lib/shared/client/components/navbar/navbar.svelte';

	export let post: Post;
</script>

<Head />
<Navbar selected="blog" />
<PostPage {post} />
