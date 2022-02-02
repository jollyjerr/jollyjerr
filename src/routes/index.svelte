<script lang="ts">
  import { format } from 'date-fns';
  import Button from '../components/common/button.svelte';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Summit from '../images/summit.jpg';
  import Head from '../components/common/head.svelte';
  import { featuredBlogs } from '../blogs';

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<Head>
  <link rel="preload" as="image" href="/src/images/summit.jpg" />
</Head>

<div class="lg:px-12">
  <section class="my-12 h-52 lg:my-32 lg:h-96">
    <div
      class="grid place-items-center space-y-6 text-3xl md:text-5xl lg:space-y-10 lg:py-20 lg:text-7xl"
    >
      {#if visible}
        <h1 in:fade class="whitespace-nowrap">
          <span class="font-bold">Building</span> quality software <br /> and
          <span class="font-bold">sharing</span> what I learn
        </h1>
      {/if}
      {#if visible}
        <div
          class="space-y-2 text-base font-normal"
          in:fade={{ duration: 1500 }}
        >
          <a class="block" href="/blog">
            <Button>Read the blog</Button>
          </a>
        </div>
      {/if}
    </div>
  </section>

  <section class="mx-auto grid max-w-7xl rounded lg:grid-cols-2">
    <div class="grid place-items-center py-12">
      <div class="relative w-5/6">
        <img
          class="aspect-square w-full rounded object-cover"
          src={Summit}
          alt="Me standing on top of The Elephant's Perch in the Sawtooth range of Idaho, US."
        />
        <div
          class="pointer-events-none absolute inset-0 h-full w-full bg-transparent bg-gradient-to-r from-gray-800 via-transparent"
        />
      </div>
    </div>
    <div>
      <div
        class="grid place-items-center space-y-6 px-8 py-12 text-center md:text-left lg:place-items-start"
      >
        <h2 class="text-5xl font-bold">Hi, I'm Jeremiah</h2>
        <p class="text-xl">
          I am a full-stack engineer with a passion for turning innovative ideas
          into slick applications.
        </p>
        <a href="/about" class="block">
          <Button>Learn more</Button>
        </a>
      </div>
    </div>
  </section>

  <section class="py-20">
    <div class="text-center lg:text-right">
      <h2 class="text-3xl lg:text-5xl">Recent Posts</h2>
    </div>
    <section
      class="flex w-full flex-col items-center gap-6 py-6 lg:flex-row lg:py-12"
    >
      {#each featuredBlogs as { slug, title, image, date, readTime }}
        <a
          href={`/blog/${slug}`}
          class="block w-full transform rounded bg-gray-200 py-6 px-2 ring-primary duration-200 hover:ring-2 focus-visible:ring-2 dark:bg-gray-800"
        >
          <div class="mx-auto max-w-xl space-y-4 lg:max-w-sm">
            <img
              src={image}
              alt={title}
              class="aspect-square w-full rounded object-cover"
            />
            <div class="text-sm">
              {format(new Date(date), 'MMMM do, yyyy')} - {readTime} min read
            </div>
            <div class="text-3xl font-bold">{title}</div>
          </div>
        </a>
      {/each}
    </section>
  </section>
</div>
