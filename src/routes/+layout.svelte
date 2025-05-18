<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="min-h-screen overflow-x-hidden pt-20">
	{@render children()}
</main>
