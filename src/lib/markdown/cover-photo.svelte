<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class="absolute top-0 left-0 w-full -z-10">
	<div class="relative">
		<img class="absolute h-36 opacity-40 object-cover w-full" {src} {alt} />
		<div class="absolute bg-gradient-to-t from-primary-8 to-transparent h-36 w-full" />
	</div>
</div>
