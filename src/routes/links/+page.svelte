<script lang="ts">
	import Head from '$lib/head/head.svelte';
	import { imageSizes, sizedImage } from '$lib/image';
	import { links } from './links.json';

	const image = sizedImage(
		'https://ik.imagekit.io/jollyjerr/jtabb_dev/IMG_9275_SlROuIxg1.jpg',
		imageSizes.sm
	);
</script>

<link rel="preload" href={image} as="image" />
<Head title="Links | Jer Tabb" description="My entire online presence" {image} />
<div class="m-auto flex w-full max-w-xl flex-col items-center space-y-6 px-2 py-12">
	<div class="aspect-square h-[160px] w-[160px]">
		<img
			src={image}
			alt="A happy Jeremiah after climbing J-Crack in Lumpy"
			class="w-full rounded-full"
			fetchpriority="high"
		/>
	</div>
	<h1 class="text-3xl font-bold text-neutral-800">@jollyjerr</h1>
	<ul class="w-full space-y-3">
		{#each links as link (link.href)}
			<a
				class="block
                       w-full
                       rounded-lg
                       bg-neutral-100
                       p-3
                       text-center
                       text-lg
                       font-medium
                       text-neutral-800
                       shadow-sm
                       transition-all
                       duration-100
                       hover:translate-y-[-4px]
                       hover:bg-neutral-50
                       hover:shadow-md"
				target="_blank"
				href={link.href}
			>
				{link.title}
			</a>
		{/each}
	</ul>
</div>
