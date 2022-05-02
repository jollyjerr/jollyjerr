<script>
	import ContactForm from './contact-form.svelte';
</script>

<div class="lg:space-y-6 space-y-12 grid lg:grid-cols-2 lg:p-8">
	<div class="space-y-5 lg:text-left text-center">
		<h2 class="text-5xl">Questions or comments?</h2>
		<p class="text-2xl">Send me an email here <span class="hidden lg:inline-flex">-></span></p>
	</div>
	<ContactForm />
</div>
