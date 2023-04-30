<script lang="ts">
	export let title: string;
	export let href: string;
	export let selected: boolean;
	export let target: '_blank' | '_self' = '_self';
</script>

<a
	{target}
	class={`relative z-10 text-3xl duration-200 focus-visible:underline lg:text-lg ${
		selected ? 'text-primary-4' : 'hover:text-primary-2'
	}`}
	{href}>{title}</a
>
