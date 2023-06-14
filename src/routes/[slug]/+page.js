import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/sblib';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const slug = params.slug;

	await useStoryblok();

	let storyblokApi = await useStoryblokApi();

	const dataStory = await storyblokApi.get('cdn/stories/' + slug, {
		version: 'draft'
	});

	return {
		story: dataStory.data.story
	};
}
