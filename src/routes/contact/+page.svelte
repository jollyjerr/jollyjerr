<script>
	import Head from '$lib/seo/components/head.svelte';
	import Navbar from '$lib/shared/client/components/navbar/navbar.svelte';

	import ContactPage from './contact-page.svelte';
</script>

<Head title="Contact" />
<Navbar selected="contact" title="Contact" />
<ContactPage />
