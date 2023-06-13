<script>
	export let url;
	export let label;
</script>

<div class="flex w-full justify-center">
	<a data-sveltekit-preload-data="hover" href={url} class="btn btn-primary md:btn-wide w-full"
		>{label}</a
	>
</div>
