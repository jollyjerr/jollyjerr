<script lang="ts">
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';

	import type { PageData } from './$types';
	import FeaturedBlogs from './featured-blogs.svelte';
	// import Tags from './tags.svelte';

	export let data: PageData;
	export const posts = data.posts;
</script>

<Head />
<Navbar selected="blog" />
<FeaturedBlogs {posts} />
<div class="w-full h-1 bg-gradient-to-r from-primary-8 via-primary-2 to-primary-8 my-6" />
<!-- <Tags {posts} /> -->
