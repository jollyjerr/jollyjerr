<script lang="ts">
	import NavbarLink from './navbar-link.svelte';
	import type { Tab } from './types';
	export let selected: Tab;
</script>

<ul class="space-x-6 hidden lg:block">
	<NavbarLink selected={selected === 'blog'} title="blog" href="/" />
	<NavbarLink selected={selected === 'notes'} title="notes" href="/notes" />
	<NavbarLink selected={selected === 'about'} title="about" href="/about" />
	<NavbarLink selected={selected === 'contact'} title="contact" href="/contact" />
</ul>
