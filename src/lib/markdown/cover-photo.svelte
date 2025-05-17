<script lang="ts">
	import { imageSizes, sizedImage } from '$lib/image';

	interface Props {
		src: string;
		alt: string;
	}

	let { src, alt }: Props = $props();
</script>

<div class="absolute top-0 left-0 -z-10 w-full">
	<div class="relative">
		<img
			class="absolute h-36 w-full object-cover opacity-40"
			{alt}
			src={sizedImage(src, imageSizes.lg)}
		/>
		<div class="from-primary-8 absolute h-36 w-full bg-gradient-to-t to-transparent"></div>
	</div>
</div>
