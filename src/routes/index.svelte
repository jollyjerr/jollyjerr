<script context="module" lang="ts">
	export async function load({ fetch }) {
		const response = await fetch('/blog.json');
		return {
			status: response.status,
			props: {
				posts: response.ok && (await response.json()).posts
			}
		};
	}
</script>

<script lang="ts">
	import type { PostMetadata } from '$lib/blog/common/types';
	import BlogPage from '$lib/blog/client/pages/blog/blog-page.svelte';
	import Head from '$lib/seo/components/head.svelte';
	import Navbar from '$lib/shared/client/components/navbar/navbar.svelte';

	export let posts: PostMetadata[];
</script>

<Head />
<Navbar selected="blog" />
<BlogPage {posts} />
