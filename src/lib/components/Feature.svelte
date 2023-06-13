<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="card w-96 bg-base-100 shadow-xl">
	<div class="card-body">
		<h2 class="card-title">{blok.name}</h2>
		<p />
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Buy Now</button>
		</div>
	</div>
</div>
