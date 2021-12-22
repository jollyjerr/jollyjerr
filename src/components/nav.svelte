<script>
  import { page } from '$app/stores';

  import NavButton from './navButton.svelte';
</script>

<nav class="text-center lg:text-left lg:flex flex-col">
  <h1 class="text-xl lg:text-base xl:text-xl font-bold whitespace-nowrap">
    Jeremiah Tabb
  </h1>
  <div
    class="lg:flex flex-col grid grid-cols-3 lg:pt-4 lg:p-0 p-8 w-full bg-gray-900 lg:relative fixed bottom-0"
  >
    <NavButton active={$page.path === '/'} to="/" title="About" />
    <NavButton
      active={$page.path === '/experience'}
      to="/experience"
      title="Experience"
    />
    <NavButton
      active={$page.path === '/contact'}
      to="/contact"
      title="Contact"
    />
  </div>
</nav>
