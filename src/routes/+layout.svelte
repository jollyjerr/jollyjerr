<script lang="ts">
	import '../app.css';
	import { type Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="font-common text-primary-1 min-h-screen overflow-x-hidden antialiased">
	{@render children?.()}
</main>
