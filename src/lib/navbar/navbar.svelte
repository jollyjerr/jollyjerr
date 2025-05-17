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

<header>
	<nav class="mb-10 inline-flex w-full items-end justify-between text-center lg:text-left">
		<div class="pointer-events-none inline-flex items-end gap-2">
			<a href="/" class="pointer-events-auto z-10">
				<img
					src={IconImg}
					alt="My emoji - A small 8 bit character"
					class="z-10"
					width={48}
					height={48}
				/>
			</a>
			<span class="text-3xl font-bold italic opacity-75">
				{' / '}
			</span>
			<a
				{href}
				class="hover:text-primary-2 pointer-events-auto transform text-3xl font-bold duration-200"
				>{title}</a
			>
		</div>
		<DesktopLinks {selected} />
		<MobileLinks {selected} />
	</nav>
</header>
