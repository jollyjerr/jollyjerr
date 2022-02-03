<script lang="ts">
  import Github from '../common/github.svelte';
  import Linkedin from '../common/linkedin.svelte';
  import Twitter from '../common/twitter.svelte';

  const thisYear = new Date().getFullYear();
</script>

<footer class="py-8">
  <hr class="w-full border-b border-gray-800" />
  <section class="grid space-y-6 p-6 lg:grid-cols-2">
    <div>
      <p class="text-sm">
        <span class="text-lg font-bold">Jeremiah Tabb</span> <br /> Software
        Engineer <br />
        <span class="text-xs italic">All rights reserved © {thisYear}</span>
      </p>
    </div>
    <div class="flex items-center gap-2 lg:justify-end">
      <a href="https://github.com/jollyjerr">
        <Github width="20" height="20" />
      </a>
      <a href="https://twitter.com/jerrtabb">
        <Twitter width="30" height="30" />
      </a>
      <a href="https://www.linkedin.com/in/jeremiahtabb/">
        <Linkedin width="20" height="20" />
      </a>
    </div>
  </section>
</footer>
