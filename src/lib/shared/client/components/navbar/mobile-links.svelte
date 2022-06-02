<script lang="ts">
  import CommonLinks from './common-links.svelte';
  import type { Tab } from './types';
  export let selected: Tab;

  let open = false;
  function toggleOpen() {
    open = !open;
  }

  $: innerWidth = 0;
  function handleResize() {
    if (innerWidth > 1023) {
      open = false;
    }
  }
</script>

<svelte:window bind:innerWidth on:resize={handleResize} />

<button
  class="fixed lg:hidden right-3 top-3 z-20 bg-primary-7 rounded p-2"
  on:click={toggleOpen}
  title="Open navbar"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-8 w-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
</button>

{#if open}
  <section
    class="fixed top-0 left-0 z-10 w-full h-full bg-gradient-to-bl from-primary-6 via-primary-6 to-transparent"
  >
    <ul class="flex flex-col pt-12 gap-2 items-end pr-24">
      <CommonLinks {selected} />
    </ul>
  </section>
{/if}
