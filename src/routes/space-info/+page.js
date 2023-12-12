import { useStoryblokApi } from '@storyblok/svelte';
import { useStoryblok } from '$lib/sblib';
import { error } from '@sveltejs/kit';
export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load() {
	await useStoryblok();

	let storyblokApi = await useStoryblokApi();

	let space = false;
	let errorMessage = '';
	let errorCode = -1;
	try {
		const dataSpace = await storyblokApi.get('cdn/spaces/me');
		space = dataSpace.data.space;
	} catch (e) {
		space = false;
		let eobj = {};
		errorMessage = 'Error';
		if (typeof e === 'string') {
			eobj = JSON.parse(e);
			errorMessage = eobj.message + '(' + eobj.status + ')' + eobj.response;
			errorCode = eobj.status;
		}
	}

	if (space === false) {
		throw error(404, {
			message: errorMessage,
			code: errorCode
		});
	}

	return {
		space: space
	};
}
