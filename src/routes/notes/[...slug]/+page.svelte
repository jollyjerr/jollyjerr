<script lang="ts">
	import Head from '$lib/head/head.svelte';
	import MarkdownPage from '$lib/markdown/markdown-page.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;
	const { note } = data;

	onMount(() => {
		// hack for internal relative routes
		// https://kit.svelte.dev/docs/link-options#data-sveltekit-reload
		document.querySelectorAll('a').forEach((n) => n.setAttribute('rel', 'external'));
	});
</script>

<Head title={note.title} description={`Learn about ${note.title}`} />
<Navbar selected="notes" title="Notes" />
<MarkdownPage
	title={note.title}
	image="https://ik.imagekit.io/jollyjerr/jtabb_dev/climbing_R2mdWU1pJ.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1652395182898&tr=w-1080%2Ch-1080%2Cfo-auto"
	html={note.html}
/>
