<script lang="ts">
  import Button from '../components/common/button.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Summit from '../images/summit.jpg';

  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<section class="lg:h-96 h-56">
  <div class="lg:text-6xl text-3xl grid place-items-start space-y-4 lg:py-20">
    {#if visible}
      <h1 in:fade class="whitespace-nowrap">
        <span class="font-bold">Building</span> quality software <br /> and
        <span class="font-bold">sharing</span> what I learn
      </h1>
    {/if}
    {#if visible}
      <div class="text-base font-normal space-y-2" in:fade={{ duration: 1500 }}>
        <Button>Read the blog</Button>
        <Button>Learn about me</Button>
      </div>
    {/if}
  </div>
</section>
<section class="rounded bg-gray-800 grid lg:grid-cols-2">
  <div>
    <p>Hi, I'm Jeremiah</p>
  </div>
  <div class="grid place-items-center py-12">
    <div class="w-96 relative">
      <img
        class="w-full aspect-square object-cover rounded"
        src={Summit}
        alt="Me standing on top of The Elephant's Perch in the Sawtooth range of Idaho, US"
      />
      <div
        class="absolute inset-0 w-full h-full bg-transparent bg-gradient-to-r from-gray-800 via-transparent pointer-events-none"
      />
    </div>
  </div>
</section>
