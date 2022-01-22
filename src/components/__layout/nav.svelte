<script lang="ts">
  import NavButton from './navButton.svelte';
  import Logo from '../images/favicon.png';
</script>

<nav class="relative flex items-center justify-center w-full my-9">
  <a href="/" class="absolute lg:left-24 left-9">
    <h1
      class="text-3xl font-bold border-b-2 border-gray-800 whitespace-nowrap p-1"
    >
      Jeremiah Tabb
    </h1>
  </a>
  <ul class="flex text-xl">
    <NavButton title="Blog" to="/blog" />
    <NavButton title="About" to="/about" />
    <NavButton title="Contact" to="/contact" />
  </ul>
  <div
    class="rounded-full p-2 grid place-items-center bg-gray-800 absolute lg:right-24 right-9"
  >
    <img src={Logo} alt="My logo, a small cartoon of me." class="w-10" />
  </div>
</nav>
