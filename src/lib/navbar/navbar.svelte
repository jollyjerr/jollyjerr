<script lang="ts">
	import IconImg from './icon.png';
	import MobileLinks from './mobile-links.svelte';
	import DesktopLinks from './desktop-links.svelte';
	import type { Tab } from './types';
	import { useSearch } from '$lib/search/api.svelte';

	interface Props {
		title?: string;
		selected: Tab;
	}

	let { title = 'Blog', selected }: Props = $props();

	const href = selected && ['blog', 'about'].includes(selected) ? '/' : `/${selected}`;
	const search = useSearch();
</script>

<header
	class="top-0 right-0 left-0 z-10 container mx-auto h-20 bg-neutral-50/80 backdrop-blur-sm dark:bg-slate-950/80"
	class:fixed={!search.open}
>
	<nav class="container mx-auto flex items-center justify-between px-4 py-4">
		<div class="flex items-center space-x-1">
			<a href="/" class="group flex items-center">
				<img src={IconImg} alt="My emoji - A small 8 bit character" width={32} height={32} />
			</a>
			<div>/</div>
			<a
				class="ml-3
                       text-xl
                       font-bold
                       transition-colors
                       duration-100
                       not-dark:hover:text-black
                       dark:hover:text-white"
				{href}
			>
				{title}
			</a>
		</div>
		<DesktopLinks {selected} />
	</nav>
</header>
<MobileLinks {selected} />
