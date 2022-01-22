<script lang="ts">
  export let href: string;
</script>

<a {href} target="__blank" rel="noreferrer" class="hover:underline"><slot /></a>
