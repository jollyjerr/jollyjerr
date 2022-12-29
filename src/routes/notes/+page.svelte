<script lang="ts">
	import Head from '$lib/seo/components/head.svelte';
	import Navbar from '$lib/shared/client/components/navbar/navbar.svelte';

    import type {PageData} from './$types';

    export let data: PageData;
    export const notes = data.notes;
</script>

<Head title="Notes" />
<Navbar selected="notes" title="Notes" />
