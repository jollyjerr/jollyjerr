<script lang="ts">
  import NavButton from './navButton.svelte';
  import Logo from '../../images/favicon.png';
</script>

<nav
  class="flex items-center justify-center w-full lg:py-6 py-12 fixed z-50 bg-gray-900 bg-opacity-95 border-b border-gray-600"
>
  <a href="/" class="absolute lg:left-24 left-3">
    <h1 class="text-3xl font-bold border-b-2 border-primary whitespace-nowrap">
      Jeremiah Tabb
    </h1>
  </a>
  <ul class="hidden lg:flex text-xl">
    <NavButton title="Blog" to="/blog" />
    <NavButton title="About" to="/about" />
    <NavButton title="Contact" to="/contact" />
  </ul>
  <div
    class="rounded-full p-2 grid place-items-center border border-primary bg-gray-800 hover:bg-primary cursor-pointer absolute lg:right-24 right-3 transform duration-150"
  >
    <img src={Logo} alt="My logo, a small cartoon of me." class="w-10" />
  </div>
</nav>
