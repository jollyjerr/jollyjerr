<script>
  import Link from '../components/common/link.svelte';
  import Page from '../components/common/page.svelte';
  import Climbing from '../images/climbing.jpg';
</script>

<Page
  title="Contact"
  image={{
    src: Climbing,
    alt: 'Me climbing',
  }}
>
  <h3 class="text-2xl">📲 Let&apos;s get in touch!</h3>
  <ul class="list-inside text-xl space-y-1 flex flex-col">
    <Link href="https://github.com/jollyjerr">Github</Link>
    <Link href="https://www.linkedin.com/in/jeremiahtabb/">LinkedIn</Link>
    <Link href="https://twitter.com/JerrTabb">Twitter</Link>
    <Link href="https://medium.com/@jollyjerr">Medium</Link>
    <Link href="https://www.instagram.com/jollyjerr/">Instagram</Link>
  </ul>
</Page>
