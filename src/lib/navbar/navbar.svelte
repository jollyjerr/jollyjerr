<script lang="ts">
	import IconImg from './icon.png';
	import MobileLinks from './mobile-links.svelte';
	import DesktopLinks from './desktop-links.svelte';
	import type { Tab } from './types';

	export let title = 'Blog';
	export let selected: Tab;
</script>

<nav class="mb-10 lg:text-left text-center inline-flex items-end w-full justify-between">
	<div class="inline-flex items-end gap-2 pointer-events-none">
		<img src={IconImg} alt="My emoji - A small 8 bit character" class="w-12 z-10" />
		<a
			href="/"
			class="text-3xl font-bold pointer-events-auto hover:text-primary-2 transform duration-200"
			>{title}</a
		>
	</div>
	<DesktopLinks {selected} />
	<MobileLinks {selected} />
</nav>
