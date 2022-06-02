<script lang="ts">
  import CommonLinks from './common-links.svelte';
  import type { Tab } from './types';
  export let selected: Tab;
</script>

<ul class="space-x-6 hidden lg:block">
  <CommonLinks {selected} />
</ul>
