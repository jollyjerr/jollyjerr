<script lang="ts">
	import NavbarLink from './navbar-link.svelte';

	export let title: string = 'Jeremiah Tabb';
</script>

<nav class="mb-8 lg:text-left text-center inline-flex items-end w-full justify-between">
	<h1 class="text-2xl font-bold focus-visible:underline">{title}</h1>
	<ul class="space-x-6 hidden lg:block">
		<NavbarLink title="home" href="/" />
		<NavbarLink title="blog" href="/blog" />
		<NavbarLink title="notes" href="/notes" />
		<NavbarLink title="about" href="/about" />
		<NavbarLink title="contact" href="/contact" />
	</ul>
</nav>
