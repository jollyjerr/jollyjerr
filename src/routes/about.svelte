<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<div class="mx-auto max-w-7xl">
  <section class="my-12 h-52 lg:my-32 lg:h-96">
    <div class="grid space-y-6 text-4xl lg:space-y-10 lg:py-20">
      {#if visible}
        <div>
          <h1 in:fade class="whitespace-nowrap">
            <span class="font-bold">Building</span> quality software <br /> and
            <span class="font-bold">sharing</span> what I learn
          </h1>
        </div>
      {/if}
      <p class="text-xl">
        I build solutions using whatever tools necessary. From connecting
        thousands of smart homes and IoT devices at <a
          href="https://smartrent.com/"
          class="bold text-secondary underline">SmartRent</a
        >
        to building a streaming platform for animated shorts at
        <a
          href="https://beta.frame240.com/"
          class="bold text-secondary underline">Frame240</a
        >, I get psyched when a problem is well suited for an automated and
        scalable software solution.
      </p>
      <p class="text-xl">
        I live and work in Boulder, CO. If I am not coding, you can find me
        climbing rocks all around the US or at home learning a new skill. I love
        trad climbing, skiing, and hanging out with great people.
      </p>
    </div>
  </section>
</div>
