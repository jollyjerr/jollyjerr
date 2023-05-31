<script lang="ts">
	export let href: string;
	export let selected: boolean;
	export let title: string;
</script>

<a data-sveltekit-reload {href}>
	<li class={`rounded-sm rounded p-3 ${selected ? 'bg-primary-3' : ''}`}>
		<h3>{title}</h3>
	</li>
</a>
