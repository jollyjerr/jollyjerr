<script>
  import '../app.css';
  import Nav from '../components/__layout/nav.svelte';
  import Footer from '../components/__layout/footer.svelte';
  import { colorScheme } from '../stores/colorScheme';

  const darkClasses = ['dark', 'bg-black'];
  colorScheme.subscribe((scheme) => {
    if (
      typeof document !== 'undefined' &&
      typeof localStorage !== 'undefined'
    ) {
      if (scheme === 'dark') {
        darkClasses.forEach((item) => {
          document.documentElement.classList.add(item);
        });
      } else {
        darkClasses.forEach((item) => {
          document.documentElement.classList.remove(item);
        });
      }
      localStorage.setItem('theme', scheme);
    }
  });
</script>

<main
  class="min-h-screen overflow-x-hidden bg-white font-body text-gray-900 dark:bg-gray-900 dark:text-white"
>
  <Nav />
  <div class="mt-36 px-3 lg:mt-20 lg:px-24">
    <slot />
    <Footer />
  </div>
</main>
