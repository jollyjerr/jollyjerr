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

<svelte:head>
  <link rel="preload" as="image" href="/src/images/summit.jpg" />
</svelte:head>

<div class="lg:px-12">
  <section class="lg:h-96 h-52">
    <div
      class="lg:text-6xl md:text-5xl text-4xl grid lg:place-items-start place-items-center space-y-4 lg:py-20"
    >
      {#if visible}
        <h1 in:fade class="whitespace-nowrap">
          <span class="font-bold">Building</span> quality software <br /> and
          <span class="font-bold">sharing</span> what I learn
        </h1>
      {/if}
      {#if visible}
        <div
          class="text-base font-normal space-y-2"
          in:fade={{ duration: 1500 }}
        >
          <a class="block" href="/blog">
            <Button>Read the blog</Button>
          </a>
        </div>
      {/if}
    </div>
  </section>

  <section class="rounded bg-gray-800 grid lg:grid-cols-2">
    <div class="grid place-items-center py-12">
      <div class="relative w-5/6">
        <img
          class="w-full aspect-square object-cover rounded"
          src={Summit}
          alt="Me standing on top of The Elephant's Perch in the Sawtooth range of Idaho, US."
        />
        <div
          class="absolute inset-0 w-full h-full bg-transparent bg-gradient-to-r from-gray-800 via-transparent pointer-events-none"
        />
      </div>
    </div>
    <div>
      <div class="md:text-left text-center px-8 py-12 space-y-6">
        <h2 class="font-bold text-5xl">Hi, I'm Jeremiah</h2>
        <p class="text-xl">
          I am a full-stack engineer with a passion for turning complicated
          ideas into slick applications.
        </p>
        <!-- <p class="text-xl">
          I build solutions using whatever tools necessary. From connecting
          thousands of smart homes and IoT devices at <a
            href="https://smartrent.com/"
            class="text-secondary underline bold">SmartRent</a
          >
          to building a streaming platform for animated shorts at
          <a
            href="https://beta.frame240.com/"
            class="text-secondary underline bold">Frame240</a
          >, I get psyched when a problem is well suited for an automated and
          scalable software solution.
        </p>
        <p class="text-xl">
          I live and work in Boulder, CO. If I am not coding, you can find me
          climbing rocks all around the US or at home learning a new skill. I
          love trad climbing, skiing, and hanging out with great people.
        </p> -->
        <a href="/about" class="block">
          <button
            class="rounded-full p-4 hover:bg-primary bg-gray-700 transform duration-150 focus-visible:ring ring-gray-600 outline-none text-lg"
            >Learn more</button
          >
        </a>
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="lg:text-right text-center">
      <h2 class="lg:text-6xl text-4xl border-b border-primary">Recent Posts</h2>
    </div>
  </section>
</div>
