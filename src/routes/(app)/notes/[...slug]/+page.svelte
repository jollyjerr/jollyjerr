<script lang="ts">
	import Head from '$lib/head/head.svelte';
	import MarkdownPage from '$lib/markdown/markdown-page.svelte';
	import Navbar from '$lib/navbar/navbar.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
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
	image="https://ik.imagekit.io/jollyjerr/jtabb_dev/longspeak_3vFbwWTsS.jpg"
	html={note.html}
/>
