// @ts-nocheck

import { apiPlugin, storyblokInit } from '@storyblok/svelte';
// 001 Import the environment variables
import { PUBLIC_ACCESS_TOKEN } from '$env/static/public';
import { PUBLIC_REGION } from '$env/static/public';

export async function useStoryblok(accessToken = '') {
	// 002 setting the access token (from environment variable)
	accessToken = accessToken === '' ? PUBLIC_ACCESS_TOKEN : accessToken;
	// 003 call storyblok init
	await storyblokInit({
		// 004 using the access token
		accessToken: accessToken,
		// 005 using the apiPlugin (for connecting with Stroyblok API)
		use: [apiPlugin],
		// 006 listing the needed components
		components: {
			feature: (await import('$lib/components/Feature.svelte')).default,
			grid: (await import('$lib/components/Grid.svelte')).default,
			page: (await import('$lib/components/Page.svelte')).default,
			teaser: (await import('$lib/components/Teaser.svelte')).default
		},
		// 007 setting some api options like https, cache and region
		apiOptions: {
			https: true,
			cache: {
				type: 'memory'
			},
			region: PUBLIC_REGION // "us" if your space is in US region
		}
	});
}
/**
 * @param {{ linktype: string; url: any; cached_url: string }} linkBlok
 */
export function getHref(linkBlok) {
	if (linkBlok.linktype === 'url') {
		return linkBlok.url;
	}
	if (linkBlok.linktype === 'story') {
		return linkBlok.story?.full_slug && linkBlok.cached_url;
	}
}

export function getCachedCV() {}
