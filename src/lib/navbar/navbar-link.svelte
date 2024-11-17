<script lang="ts">
	interface Props {
		title: string;
		href: string;
		selected: boolean;
		target?: '_blank' | '_self';
	}

	let { title, href, selected, target = '_self' }: Props = $props();
</script>

<a
	{target}
	class={`relative z-10 text-3xl duration-200 focus-visible:underline lg:text-lg ${
		selected ? 'text-primary-4' : 'hover:text-primary-2'
	}`}
	{href}>{title}</a
>
