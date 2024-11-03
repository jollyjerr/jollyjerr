<script>
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<main class="min-h-screen overflow-x-hidden font-common text-primary-1 antialiased">
	{@render children?.()}
</main>
