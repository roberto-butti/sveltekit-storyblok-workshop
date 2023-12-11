<script>
	export let data;
	import Header from '$lib/components/Header.svelte';
	import HeadlineColorful from '$lib/components/micro/HeadlineColorful.svelte';
	import Headline from '$lib/components/micro/Headline.svelte';
	import '../../app.css';
</script>

<div>
	<Header />
	<div class="w-full place-items-center">
		<div class="text-center bg-white bg-opacity-70 px-2 pt-40 lg:px-10">
			<p class="text-base-content/90 font-title relative z-[2] py-4 font-light md:text-3xl">
				Space info:
			</p>
			<Headline headline={data.space.name} />
			<p class="text-base-content/90 font-title relative z-[2] py-4 font-light md:text-3xl">
				Space ID : {data.space.id}
			</p>
			<p class="text-base-content/90 font-title relative z-[2] py-4 font-light md:text-3xl">
				Domain : {data.space.domain}
			</p>
			<p class="text-base-content/90 font-title relative z-[2] py-4 font-light md:text-3xl">
				Version (CV) : {data.space.version}
			</p>
			<p class="text-base-content/90 font-title relative z-[2] py-4 font-light md:text-3xl">
				Languages : {data.space.language_codes.length === 0
					? 'Only Default Lang'
					: data.space.language_codes.join(', ')}
			</p>
			<p class="text-base-content/90 font-title relative z-[2] py-4 font-light">
				Click here to manage the Space in the Storyblok UI:
				<a href="https://app.storyblok.com/#/me/spaces/{data.space.id}/dashboard">{data.space.id}</a
				>
			</p>
		</div>
	</div>
</div>
