<script lang="ts">
	import NavbarLink from './navbar-link.svelte';
	import { useSearch } from '$lib/store.svelte';
	import type { Tab } from './types';

	interface Props {
		selected: Tab;
	}

	let { selected }: Props = $props();

	const search = useSearch();
	function toggleSearch() {
		search.setSearchOpen(!search.searchOpen());
	}
</script>

<NavbarLink selected={selected === 'blog'} title="blog" href="/" />
<NavbarLink selected={selected === 'notes'} title="notes" href="/notes" />
<NavbarLink selected={selected === 'contact'} title="contact" href="/contact" />
<button onclick={toggleSearch} class="inline italic opacity-40">search</button>
