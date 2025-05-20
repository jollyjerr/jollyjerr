<script lang="ts">
	import CommonLinks from './common-links.svelte';
	import type { Tab } from './types';
	interface Props {
		selected: Tab;
	}

	let { selected }: Props = $props();

	let open = $state(false);
	function toggleOpen() {
		open = !open;
	}

	let innerWidth = $state(0);

	function handleResize() {
		if (innerWidth > 1023) {
			open = false;
		}
	}
</script>

<svelte:window bind:innerWidth onresize={handleResize} />

<button
	aria-label="home"
	class="fixed top-3 right-3 z-20 p-2 lg:hidden"
	onclick={toggleOpen}
	title="Open navbar"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-8 w-8"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		stroke-width="2"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
	</svg>
</button>

{#if open}
	<section
		class="fixed top-0 left-0 z-10 h-full w-full bg-gradient-to-bl from-neutral-200 via-neutral-50 to-transparent dark:from-slate-950 dark:via-slate-900"
	>
		<div class="flex flex-col items-end gap-2 pt-12 pr-24">
			<CommonLinks {selected} />
		</div>
	</section>
{/if}
