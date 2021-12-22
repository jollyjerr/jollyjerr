<script lang="ts">
  export let active: boolean;
  export let to: string;
  export let title: string;
</script>

<a href={to}>
  <button
    class={'p-2 w-full rounded-sm transform-gpu duration-300 lg:text-right ' +
      (active ? 'bg-gray-800' : 'hover:bg-gray-700')}>{title}</button
  >
</a>
