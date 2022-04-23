<script lang="ts">
	import NavbarLink from './navbar-link.svelte';
	import IconImg from './icon.png';

	export let title: string = 'Blog';
	export let selected: 'blog' | 'notes' | 'about' | 'contact' | null;

	const selectedToLink = {
		blog: '/',
		notes: '/notes',
		about: '/about',
		contact: '/contact'
	};
</script>

<nav class="mb-10 lg:text-left text-center inline-flex items-end w-full justify-between">
	<div class="inline-flex items-end gap-2 pointer-events-none">
		<img src={IconImg} alt="My emoji - A small 8 bit character" class="w-12" />
		<a
			href={selected ? selectedToLink[selected] : '/'}
			class="text-3xl font-bold pointer-events-auto hover:text-primary-2 transform duration-200"
			>{title}</a
		>
	</div>
	<ul class="space-x-6 hidden lg:block">
		<NavbarLink selected={selected === 'blog'} title="blog" href="/" />
		<NavbarLink selected={selected === 'notes'} title="notes" href="/notes" />
		<NavbarLink selected={selected === 'about'} title="about" href="/about" />
		<NavbarLink selected={selected === 'contact'} title="contact" href="/contact" />
	</ul>
</nav>
