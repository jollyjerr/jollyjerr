<script lang="ts">
  import NavButton from './navButton.svelte';
  import Logo from '../../images/favicon.png';
  import { colorScheme } from '../../stores/colorScheme';

  const changeScheme = () => {
    colorScheme.update((val) => (val === 'dark' ? 'light' : 'dark'));
  };
</script>

<nav
  class="fixed z-20 flex w-full items-center justify-center border-b border-gray-800 border-opacity-50 bg-gray-900 bg-opacity-95 py-8 lg:py-4"
>
  <a href="/" class="absolute left-3 lg:left-24">
    <h1 class="whitespace-nowrap border-b-2 border-primary text-3xl font-bold">
      Jeremiah Tabb
    </h1>
  </a>
  <ul class="hidden text-xl lg:flex">
    <NavButton title="Blog" to="/blog" />
    <NavButton title="About" to="/about" />
    <NavButton title="Contact" to="/contact" />
  </ul>
  <div
    on:click={changeScheme}
    class="absolute right-3 grid transform cursor-pointer place-items-center rounded-full border border-primary bg-gray-800 p-2 duration-150 hover:bg-primary lg:right-24"
  >
    <img src={Logo} alt="My logo, a small cartoon of me." class="w-8" />
  </div>
</nav>
