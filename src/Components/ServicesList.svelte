<script>
	import Services from '$utils/services.js'

	let {service=$bindable(-1), children, onclick = null, title=''} = $props();

	const setId = (serviceId) => {
    service = serviceId;
		onclick && onclick(serviceId);
	}
</script>

<div class="relative">
	{#if title}
		<h1 class="py-1 text-[20pt] relative z-2 px-8">{title}</h1>
	{/if}
	<div class="flex flex-col lg:text-xl text-[12pt]">
		{@render children?.()}
		{#each Services as s, i}
			<div class={["py-1 cursor-pointer hover:bg-white hover:text-black my-1 lg:px-10 px-3 color-white", (i==service?'bg-white':'')]} onclick={() => setId(i)}>
				<span class={[(i==service?'text-black':'white')]}>{s}</span>
			</div>
		{/each}
	</div>
</div>
