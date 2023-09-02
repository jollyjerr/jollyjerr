<script lang="ts">
	import { imageSizes, sizedImage } from '$lib/image';

	export let src: string;
	export let alt: string;
</script>

<div class="absolute left-0 top-0 -z-10 w-full">
	<div class="relative">
		<img
			class="absolute h-36 w-full object-cover opacity-40"
			{alt}
			src={sizedImage(src, imageSizes.lg)}
		/>
		<div class="to-transparent absolute h-36 w-full bg-gradient-to-t from-primary-8" />
	</div>
</div>
