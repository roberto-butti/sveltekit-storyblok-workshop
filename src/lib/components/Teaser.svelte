<script>
	import { storyblokEditable } from '@storyblok/svelte';
	import Headline from './micro/Headline.svelte';
	import HeadlineColorful from './micro/HeadlineColorful.svelte';

	export let blok;
</script>

<div
	use:storyblokEditable={blok}
	class=" w-full"
	style="background-image: url('{blok.image.filename}/m/');"
>
	<div class="text-center bg-white bg-opacity-70 px-2 pt-40 lg:px-10">
		<Headline headline={blok.headline} />
		{#if blok.headline2}
			<HeadlineColorful headline={blok.headline2} />
		{/if}
		<p class="text-base-content/90 font-title relative z-[2] py-4 font-light md:text-3xl">
			{blok.subheadline}
		</p>
		<div class="h-10" />
	</div>
</div>
