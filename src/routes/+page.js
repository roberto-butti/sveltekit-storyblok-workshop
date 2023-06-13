import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/sblib';

/** @type {import('./$types').PageLoad} */
export async function load() {
	await useStoryblok();

	let storyblokApi = await useStoryblokApi();

	const dataStory = await storyblokApi.get('cdn/stories/home', {
		version: 'draft'
	});

	return {
		story: dataStory.data.story
	};
}
