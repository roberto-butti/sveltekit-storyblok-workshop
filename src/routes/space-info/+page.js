import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/sblib';
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
	await useStoryblok();

	let storyblokApi = await useStoryblokApi();

	const dataSpace = await storyblokApi.get('cdn/spaces/me');

	console.log(dataSpace.data);
	return {
		space: dataSpace.data.space
	};
}
