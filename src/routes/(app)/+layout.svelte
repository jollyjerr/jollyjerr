<script lang="ts">
	import Socials from './socials.svelte';
	import Search from '$lib/search/search.svelte';
	import '../../highlight.css';
	import { onMount } from 'svelte';

	let { children } = $props();

	let isDarkMode = $state(false);

	function toggleTheme() {
		isDarkMode = !isDarkMode;
		updateTheme();
	}

	function updateTheme() {
		localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	onMount(() => {
		const savedMode = localStorage.getItem('theme');
		if (savedMode) {
			isDarkMode = savedMode === 'dark';
			updateTheme();
		} else {
			isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			updateTheme();
		}
	});
</script>

<Search />
<div class="container mx-auto px-3 py-3 lg:py-8">
	{@render children()}
</div>
<Socials />
<footer class="p-4">
	<div class="container mx-auto flex items-center justify-end">
        <a href="/links">links</a>
		<button
			onclick={toggleTheme}
			class="flex items-center justify-center rounded-full bg-gray-200
                                                p-2 text-gray-800
                                                transition-colors duration-300
                                                hover:bg-gray-300 dark:bg-gray-700
                                                dark:text-gray-200 dark:hover:bg-gray-600"
		>
			{#if isDarkMode}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.636 5.636m12.728 12.728L18.364 18.364M12 7a5 5 0 110 10 5 5 0 010-10z"
					/>
				</svg>
				<span class="ml-2">Light Mode</span>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
					/>
				</svg>
				<span class="ml-2">Dark Mode</span>
			{/if}
		</button>
	</div>
</footer>
