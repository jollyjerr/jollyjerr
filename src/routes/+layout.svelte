<script lang="ts">
	import '../app.css';
	import { type Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="min-h-screen overflow-x-hidden font-common text-primary-1 antialiased">
	{@render children?.()}
</main>
