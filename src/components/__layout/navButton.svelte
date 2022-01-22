<script lang="ts">
  import { page } from '$app/stores';

  export let to: string;
  export let title: string;
</script>

<a href={to}>
  <li
    class={`border-opacity-0 border-b-2 border-gray-800 transform duration-150 px-5 py-2 outline-none focus-visible:ring-1 focus-visible:opacity-100 ring-0 ring-gray-700 ${
      // @ts-ignore
      $page.url.pathname.includes(to)
        ? 'border-opacity-100'
        : 'hover:border-opacity-100 opacity-60 hover:opacity-100'
    }`}
  >
    {title}
  </li>
</a>
