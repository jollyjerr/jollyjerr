<script lang="ts">
	import IconImg from './icon.png';
	import MobileLinks from './mobile-links.svelte';
	import DesktopLinks from './desktop-links.svelte';
	import type { Tab } from './types';

	interface Props {
		title?: string;
		selected: Tab;
	}

	let { title = 'Blog', selected }: Props = $props();

	const href = selected && ['blog', 'about'].includes(selected) ? '/' : `/${selected}`;
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 bg-neutral-50/80 backdrop-blur-md dark:bg-slate-950/80"
>
	<nav class="container mx-auto flex items-center justify-between px-4 py-4">
		<div class="flex items-center space-x-1">
			<a href="/" class="group flex items-center">
				<img src={IconImg} alt="My emoji - A small 8 bit character" width={32} height={32} />
			</a>
			<div>/</div>
			<a
				class="group-hover:text-primary-2 ml-3 text-xl font-bold text-gray-800 transition-colors"
				{href}
			>
				{title}
			</a>
		</div>
		<DesktopLinks {selected} />
		<MobileLinks {selected} />
	</nav>
</header>
