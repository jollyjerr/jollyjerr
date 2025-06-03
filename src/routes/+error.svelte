<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="grid h-screen w-full place-items-center">
	<div class="space-y-4 text-center">
		<h1 class="text-xl font-bold">Error: {page.error?.message || 'iz broke :('}</h1>
		<a href="/" class="hover:underline">Go Home</a>
	</div>
</div>
