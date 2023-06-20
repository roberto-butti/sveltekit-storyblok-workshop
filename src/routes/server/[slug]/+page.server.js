import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/sblib';
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const slug = params.slug.split('/').at(-1);

	await useStoryblok();

	let storyblokApi = await useStoryblokApi();

	const dataStory = await storyblokApi.get('cdn/stories/' + slug, {
		version: 'draft'
	});

	return {
		story: dataStory.data.story
	};
}
