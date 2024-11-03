<script lang="ts">
	import NavbarLink from './navbar-link.svelte';
	import { searchOpen } from '$lib/store';
	import type { Tab } from './types';

	interface Props {
		selected: Tab;
	}

	let { selected }: Props = $props();

	function toggleSearch() {
		searchOpen.update((v) => !v);
	}
</script>

<NavbarLink selected={selected === 'blog'} title="blog" href="/" />
<NavbarLink selected={selected === 'notes'} title="notes" href="/notes" />
<NavbarLink selected={selected === 'contact'} title="contact" href="/contact" />
<button onclick={toggleSearch} class="inline italic opacity-40">search</button>
