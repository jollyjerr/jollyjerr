<script lang="ts">
	import type { PageData } from './$types';
	import Head from '$lib/head/head.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import MarkdownPage from '$lib/markdown/markdown-page.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const { post } = data;

	const selected = post.metadata.title === 'About me' ? 'about' : 'blog';
</script>

<Head
	title={post.metadata.title}
	description={post.metadata.subtitle}
	image={post.metadata.image}
/>
<Navbar {selected} />
<MarkdownPage
	title={post.metadata.title}
	image={post.metadata.image}
	html={post.html}
	date={post.metadata.date}
	tags={post.metadata.tags}
/>
