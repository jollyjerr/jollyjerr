<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<div class="absolute left-0 top-0 -z-10 w-full">
	<div class="relative">
		<img class="absolute h-36 w-full object-cover opacity-40" {src} {alt} />
		<div class="to-transparent absolute h-36 w-full bg-gradient-to-t from-primary-8" />
	</div>
</div>
