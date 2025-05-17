<script lang="ts">
	import Head from '$lib/head/head.svelte';
	import { links } from './links.json';

	const image =
		'https://ik.imagekit.io/jollyjerr/jtabb_dev/IMG_9275_SlROuIxg1.jpg?updatedAt=1689525287506&tr=w-1080%2Ch-1080%2Cfo-auto';
</script>

<Head title="Links | Jeremiah Tabb" description="My entire online presence" {image} />
<div class="m-auto flex w-full max-w-xl flex-col items-center space-y-6 px-2 py-12">
	<img
		src={image}
		alt="A happy Jeremiah after climbing J-Crack in Lumpy"
		style="border-radius: 50%;"
		class="aspect-square w-full max-w-[180px]"
	/>
	<h1 class="text-primary-5 text-2xl font-bold">@jollyjerr</h1>
	<ul class="w-full space-y-3">
		{#each links as link}
			<a
				class="bg-primary-7 hover:bg-primary-6 block w-full rounded p-3 text-center text-lg"
				target="_blank"
				href={link.href}
			>
				{link.title}
			</a>
		{/each}
	</ul>
</div>
