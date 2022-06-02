<script lang="ts">
  import NavbarLink from './navbar-link.svelte';
  import type { Tab } from './types';

  export let selected: Tab;
</script>

<NavbarLink selected={selected === 'blog'} title="blog" href="/" />
<NavbarLink
  selected={selected === 'notes'}
  title="notes"
  href="https://github.com/jollyjerr/knowledge"
  target="_blank"
/>
<NavbarLink selected={selected === 'contact'} title="contact" href="/contact" />
