<script lang="ts">
  export let title: string;
  export let image: { src: string; alt: string };
</script>

<section
  class="lg:px-12 px-4 pt-6 lg:pb-6 pb-32 lg:text-left text-center space-y-6"
>
  <h2 class="text-center font-bold text-2xl text-gray-600 underline">
    {title}
  </h2>
  <img
    src={image.src}
    alt={image.alt}
    class="aspect-square w-1/3 rounded-full lg:ml-auto lg:mx-0 mx-auto"
  />
  <article class="space-y-6 lg:w-3/4">
    <slot />
  </article>
</section>
