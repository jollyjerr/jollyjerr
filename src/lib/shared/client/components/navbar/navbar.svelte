<script lang="ts">
	import NavbarLink from './navbar-link.svelte';
	import IconImg from './icon.png';
	import MobileLinks from './mobile-links.svelte';
	import DesktopLinks from './desktop-links.svelte';
	import type { Tab } from './types';

	export let title: string = 'Blog';
	export let selected: Tab;

	const selectedToLink = {
		blog: '/',
		notes: '/notes',
		about: '/about',
		contact: '/contact'
	};
</script>

<nav class="mb-10 lg:text-left text-center inline-flex items-end w-full justify-between">
	<div class="inline-flex items-end gap-2 pointer-events-none">
		<img src={IconImg} alt="My emoji - A small 8 bit character" class="w-12" />
		<a
			href={selected ? selectedToLink[selected] : '/'}
			class="text-3xl font-bold pointer-events-auto hover:text-primary-2 transform duration-200"
			>{title}</a
		>
	</div>
	<DesktopLinks {selected} />
	<MobileLinks {selected} />
</nav>
