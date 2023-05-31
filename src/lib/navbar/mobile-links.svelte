<script lang="ts">
	import CommonLinks from './common-links.svelte';
	import type { Tab } from './types';
	export let selected: Tab;

	let open = false;
	function toggleOpen() {
		open = !open;
	}

	$: innerWidth = 0;
	function handleResize() {
		if (innerWidth > 1023) {
			open = false;
		}
	}
</script>

<svelte:window bind:innerWidth on:resize={handleResize} />

<button
	class="rounded-sm fixed right-3 top-3 z-20 rounded bg-primary-5 bg-opacity-70 p-2 lg:hidden"
	on:click={toggleOpen}
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
		class="to-transparent fixed left-0 top-0 z-10 h-full w-full bg-gradient-to-bl from-primary-6 via-primary-6"
	>
		<ul class="flex flex-col items-end gap-2 pr-24 pt-12">
			<CommonLinks {selected} />
		</ul>
	</section>
{/if}
