<script lang="ts">
  import { page } from '$app/stores';

  export let to: string;
  export let title: string;
</script>

<a href={to}>
  <li
    class={`w-32 transform border-b-2 border-opacity-0 px-5 text-center font-bold outline-none ring-0 ring-gray-700 duration-150 focus-visible:opacity-100 focus-visible:ring-1 ${
      // @ts-ignore
      $page.url.pathname.includes(to)
        ? 'border-primary border-opacity-100'
        : 'border-gray-800 opacity-60 hover:border-opacity-100 hover:opacity-100'
    }`}
    tabindex="0"
  >
    {title}
  </li>
</a>
