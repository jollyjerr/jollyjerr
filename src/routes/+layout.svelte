<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="h-full overflow-x-hidden pt-20">
	{@render children()}
</main>
