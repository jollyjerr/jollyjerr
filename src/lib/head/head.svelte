<script>
	import SocialImg from '$lib/head/social.jpg';

	export let image = SocialImg;
	export let title = 'Jeremiah Tabb | Software Engineer';
	export let description = 'Blog posts and notes about software, math, and everything else.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="theme-color" content="#1f2028" />
	<meta name="description" content={description} />
	<meta name="subject" content={title} />
	<meta name="rating" content="General" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:site_name" content="jtabb.dev" />
	<meta property="og:locale" content="en_US" />
</svelte:head>
