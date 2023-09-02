<script lang="ts">
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';

	import type { PageData } from './$types';
	import FeaturedBlogs from './featured-blogs.svelte';

	export let data: PageData;
	export const posts = data.posts;
</script>

<Head />
<Navbar selected="blog" />
<FeaturedBlogs {posts} />
