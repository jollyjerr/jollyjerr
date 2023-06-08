<script lang="ts">
	import IconImg from './icon.png';
	import MobileLinks from './mobile-links.svelte';
	import DesktopLinks from './desktop-links.svelte';
	import type { Tab } from './types';

	export let title = 'Blog';
	export let selected: Tab;
</script>

<nav class="mb-10 inline-flex w-full items-end justify-between text-center lg:text-left">
	<div class="pointer-events-none inline-flex items-end gap-2">
		<img src={IconImg} alt="My emoji - A small 8 bit character" class="z-10 w-12" />
		<a
			href={`/${selected}`}
			class="pointer-events-auto transform text-3xl font-bold duration-200 hover:text-primary-2"
			>{title}</a
		>
	</div>
	<DesktopLinks {selected} />
	<MobileLinks {selected} />
</nav>
