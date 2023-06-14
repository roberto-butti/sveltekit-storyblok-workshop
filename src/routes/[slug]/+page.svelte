<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import '../../app.css';
	import Header from '$lib/components/Header.svelte';
	export let data;

	onMount(() => {
		if (data.story) {
			useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
		}
	});
</script>

<div>
	<Header />
	<StoryblokComponent blok={data.story.content} />
</div>
