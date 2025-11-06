<script>
	import Services from '$utils/services.js'
  import {p} from 'sv-router/generated'

	let {service=-1, children, onclick, title=''} = $props();
	let id = $state(service);

	const setId = (serviceId) => {
		id = serviceId;
		onclick(serviceId);
	}
</script>

<div class="relative">
	{#if title}
		<h1 class="py-1 text-[20pt] relative z-2 px-8">{title}</h1>
	{/if}
	<div class="flex flex-col lg:text-xl text-[12pt]">
		{@render children?.()}
		{#each Services as service, i}
			<a class={["py-1 cursor-pointer hover:bg-white hover:text-black my-1 lg:px-10 px-3 color-white", (i==id?'bg-white':'')]} href={p(`/services/${i}`)}>
				<span class={[(i==id?'text-black':'white')]}>{service}</span>
			</a>
		{/each}
	</div>
</div>
