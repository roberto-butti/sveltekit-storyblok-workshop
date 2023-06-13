<script>
	/**
	 * @type {string}
	 */
	export let headline;
</script>

<h2 class="font-title relative z-[2] mx-auto text-[clamp(2rem,6vw,4.5rem)] font-black leading-none">
	<span class="inline-grid">
		<span
			style="opacity:1"
			class="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 leading-tight [&amp;::selection]:bg-blue-700/20 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]"
			>{headline}</span
		></span
	>
</h2>
