<script>
	import SocialImg from '$lib/seo/assets/social.jpg';

	export let image = SocialImg;
	export let title = 'Jeremiah Tabb | Software Engineer';
	export let description = 'Learn about stuff!';
	export let url = 'https://jtabb.dev';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="theme-color" content="#1f2028" />
	<meta name="description" content={description} />
	<meta name="subject" content={title} />
	<meta name="rating" content="General" />
	<meta property="og:url" content={url} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="Jtabb.dev" />
	<meta property="og:locale" content="en_US" />
	<meta name="twitter:card" content={description} />
	<meta name="twitter:site" content="@jerrtabb" />
	<meta name="twitter:creator" content="@jerrtabb" />
	<meta name="twitter:url" content={url} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	<meta name="twitter:image:alt" content={title} />
</svelte:head>
