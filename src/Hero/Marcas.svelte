<script>
	import Title from '$component/Title.svelte'
	const marcas =  import.meta.glob('$lib/marcas/*.*',{eager: true})
	const images = Object.keys(marcas).map(m => marcas[m].default)

</script>

<section class=" h-fit pb-20 my-10 py-5 bg-logo-blue grid grid-rows-3 justify-items-center items-center">
	<Title class="row-span-1 text-white " color="white" size={30} text="Trabajando con los mejores"/>
	<div class="row-span-2 border-orange bg-white mt-3 borde-y-12 w-[100%] grid justify-items-center border-logo-orange border-y-15 p-5">
		<div class="flex flex-row h-15 ">
			{#each images as marca}
				<img class="mx-5" src={marca} alt="">
			{/each}
		</div>	
	</div>
</section>



