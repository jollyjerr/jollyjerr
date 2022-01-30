<script lang="ts">
  import Social from '../../images/social.jpg';

  export let title = 'Jeremiah Tabb';
  export let description = 'Software Engineer';
  export let url = 'https://jtabb.dev';
  export let image = Social;
  export let alt = 'Jeremiah Tabb';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="subject" content={title} />
  <meta name="theme-color" content="#1f2028" />
  <meta name="rating" content="General" />

  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:image" content={image} />
  <meta property="og:image:alt" content={alt} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content="jtabb.dev" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />

  <meta name="twitter:title" content={title} />
  <meta name="twitter:card" content={description} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:url" content={url} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:image:alt" content={alt} />
  <meta name="twitter:site" content="@jerrtabb" />
  <meta name="twitter:creator" content="@jerrtabb" />

  <slot />
</svelte:head>
