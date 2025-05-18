<script lang="ts">
	import { onMount } from 'svelte';
	import Github from './github.svelte';
	import Linkedin from './linkedin.svelte';

	let isDarkMode = $state(false);
	let loading = $state(true);

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
		isDarkMode =
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
		loading = false;
	});
</script>

<footer class="fixed right-0 bottom-0 left-0 bg-transparent p-4">
	<div class="container mx-auto flex max-w-4xl items-center justify-between">
		<div class="flex items-center space-x-4">
			<a
				href="/links"
				class="text-sm text-gray-600 transition-colors duration-300
                       hover:text-black dark:text-gray-300 dark:hover:text-white"
			>
				links
			</a>
			{#if !loading}
				<button
					onclick={toggleTheme}
					class="cursor-pointer text-gray-500 transition-colors duration-300
                           hover:text-black dark:text-gray-400 dark:hover:text-white"
					aria-label="Toggle theme"
				>
					{#if isDarkMode}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m3.343-5.657L5.636 5.636m12.728 12.728L18.364 18.364M12 7a5 5 0 110 10 5 5 0 010-10z"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						</svg>
					{/if}
				</button>
			{/if}
		</div>
		<div class="flex space-x-4">
			<a
				href="https://github.com/jollyjerr"
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-600 transition-colors duration-300 hover:text-black
                       dark:text-gray-300 dark:hover:text-white"
			>
				<Github />
			</a>
			<a
				href="https://www.linkedin.com/in/jeremiahtabb/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-600 transition-colors duration-300 hover:text-black
                       dark:text-gray-300 dark:hover:text-white"
			>
				<Linkedin />
			</a>
		</div>
	</div>
</footer>
