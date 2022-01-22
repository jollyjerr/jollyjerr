<script lang="ts">
  import { page } from '$app/stores';

  export let to: string;
  export let title: string;
</script>

<a href={to}>
  <li
    class={`border-opacity-0 border-b-2 transform duration-150 px-5 outline-none focus-visible:ring-1 focus-visible:opacity-100 ring-0 ring-gray-700 font-bold w-32 text-center ${
      // @ts-ignore
      $page.url.pathname.includes(to)
        ? 'border-opacity-100 border-primary'
        : 'hover:border-opacity-100 opacity-60 hover:opacity-100 border-gray-800'
    }`}
    tabindex="0"
  >
    {title}
  </li>
</a>
