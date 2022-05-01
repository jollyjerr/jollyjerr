<script lang="ts">
	export let title: string;
	export let href: string;
	export let selected: boolean;
</script>

<a
	class={`duration-200 focus-visible:underline lg:text-lg text-3xl ${
		selected ? 'text-primary-4' : 'hover:text-primary-2'
	}`}
	{href}>{title}</a
>
