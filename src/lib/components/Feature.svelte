<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="flex flex-col items-center gap-4">
	<h3 class="text-[clamp(2rem,6vw,5rem)] font-black tabular-nums">
		<span>{blok.name} </span>
	</h3>
</div>
