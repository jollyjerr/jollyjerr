<script lang="ts">
	import CommonLinks from './common-links.svelte';
	import type { Tab } from './types';
	export let selected: Tab;
</script>

<div class="hidden space-x-6 lg:block">
	<CommonLinks {selected} />
</div>
