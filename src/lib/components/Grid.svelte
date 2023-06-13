<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;
</script>

<div use:storyblokEditable={blok} class="min-h-[200vh] w-full px-2 lg:px-10">
	<div class="sticky top-0 pt-40 text-center">
		<div
			class="bg-primary pointer-events-none absolute bottom-0 left-1/2 aspect-square w-1/2 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
		/>
		<h2
			class="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none"
		>
			{blok.headline}
		</h2>
		<div class="h-32" />
		<div class="grid gap-10 p-6 xl:grid-cols-3">
			{#each blok.columns as blokitem}
				<div class="flex flex-col items-center gap-4">
					<h3 class="text-[clamp(2rem,6vw,5rem)] font-black tabular-nums">
						<span>{blokitem.name} </span>
					</h3>
				</div>
			{/each}
		</div>
	</div>
</div>
