<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`
      }
    };
  }
</script>

<script>
  import Head from '$lib/seo/components/head.svelte';
  import Navbar from '$lib/shared/client/components/navbar/navbar.svelte';

  export let title;
</script>

<Head title="Error" />
<Navbar selected={null} title="Error" />
<h1>{title}</h1>
