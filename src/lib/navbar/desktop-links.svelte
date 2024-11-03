<script lang="ts">
	import CommonLinks from './common-links.svelte';
	import type { Tab } from './types';
	interface Props {
		selected: Tab;
	}

	let { selected }: Props = $props();
</script>

<div class="hidden space-x-6 lg:block">
	<CommonLinks {selected} />
</div>
