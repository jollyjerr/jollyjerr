<script lang="ts">
	interface Props {
		href: string;
		selected: boolean;
		title: string;
	}

	let { href, selected, title }: Props = $props();
</script>

<a data-sveltekit-reload {href}>
	<li class={`rounded-sm rounded p-3 ${selected ? 'bg-primary-3' : ''}`}>
		<h3>{title}</h3>
	</li>
</a>
