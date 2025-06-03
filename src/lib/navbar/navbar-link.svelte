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
	class={`
    relative 
    z-10 
    text-3xl 
    transition-colors 
    duration-100
    lg:text-lg
    ${selected ? 'cursor-default text-cyan-500' : 'not-dark:hover:text-black dark:hover:text-white'}`}
	{href}>{title}</a
>
