<script lang="ts">
	import { useSearch } from '$lib/search/api.svelte';
	import NavbarLink from './navbar-link.svelte';
	import type { Tab } from './types';

	interface Props {
		selected: Tab;
	}

	let { selected }: Props = $props();

	const search = useSearch();
	function toggleSearch() {
		search.setOpen(!search.open);
	}
</script>

<NavbarLink selected={selected === 'blog'} title="blog" href="/" />
<NavbarLink selected={selected === 'about'} title="about" href="/blog/about" />
<NavbarLink selected={selected === 'notes'} title="notes" href="/notes" />
<NavbarLink selected={selected === 'contact'} title="contact" href="/contact" />
<button onclick={toggleSearch} class="inline italic opacity-40">search</button>
