<script lang="ts">
  import Github from '../components/index/github.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Twitter from '../components/index/twitter.svelte';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<section class="grid lg:grid-cols-2">
  <div class="text-6xl grid place-items-center h-96">
    {#if visible}
      <p in:fade>
        I build quality apps <br /> that <span class="font-bold">scale</span>
      </p>
    {/if}
  </div>
  <div>
    <Github width="120" height="120" />
    <Twitter width="120" height="120" />
  </div>
</section>
