<script lang="ts">
	export let title: string;
	export let href: string;
</script>

<a class="hover:text-primary-2 duration-200 focus-visible:underline" {href}>{title}</a>
