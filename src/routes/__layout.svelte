<script>
  import '../app.css';
  import Nav from '../components/nav.svelte';
  import Social from '../images/social.jpg';
</script>

<svelte:head>
  <title>Jeremiah Tabb</title>
  <meta name="theme-color" content="#1f2028" />
  <meta name="description" content="Software Engineer" />
  <meta name="subject" content="Jeremiah Tabb" />
  <meta name="rating" content="General" />
  <meta property="og:url" content="https://jtabb.dev" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Jeremiah Tabb" />
  <meta property="og:image" content={Social} />
  <meta property="og:image:alt" content="Jeremiah Tabb" />
  <meta property="og:description" content="Software Engineer" />
  <meta property="og:site_name" content="Jtabb.dev" />
  <meta property="og:locale" content="en_US" />
  <meta name="twitter:card" content="Software Engineer" />
  <meta name="twitter:site" content="@jerrtabb" />
  <meta name="twitter:creator" content="@jerrtabb" />
  <meta name="twitter:url" content="https://jtabb.dev" />
  <meta name="twitter:title" content="Jeremiah Tabb" />
  <meta name="twitter:description" content="Software Engineer" />
  <meta name="twitter:image" content={Social} />
  <meta name="twitter:image:alt" content="Jeremiah Tabb" />
</svelte:head>

<main class="min-h-screen overflow-x-hidden bg-gray-900 text-white font-body">
  <div class="lg:container lg:grid grid-cols-8 pt-6">
    <div class="col-span-1">
      <Nav />
    </div>
    <div class="col-span-7">
      <slot />
    </div>
  </div>
</main>
