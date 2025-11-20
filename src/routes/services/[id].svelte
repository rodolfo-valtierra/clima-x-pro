
<script>
	import {route} from 'sv-router/generated'
	import ServicesList from '$component/ServicesList.svelte'
	import BackService from '$lib/back-service.jpg'
	import ImgMantenance from '$lib/mantenimiento1.jpeg'
	import Services from '$utils/services.js'
	import Title from '$component/Title.svelte'

	let service_id = $state(route.params.id);
</script>
<div class="flex flex-col pt-20 gap-5 h-full">
  <Title text="Services"/>
  <div class="grid lg:grid-cols-4 grid-cols-2 lg:justify-around justify-start">
    <div class="lg:col-start-2 border rounded-xl bg-dark-blue text-white py-7" style={`background-image: url(${BackService})`}>
      <ServicesList bind:service={service_id}/>
    </div>
    <div class="relative sm:top-50% -z-1 overlap lg:col-start-3 place-items-center" >
      <div class="z-2 bg-white text-md">
          {Services.filter((s, i) => i==service_id)}
      </div>
      <img class="grayscale z-1 rounded-xl lg:h-100 lg:w-100 h-120 w-100" src={ImgMantenance} alt="">
    </div>
  </div>

</div>

<style>
	.overlap {
		display: grid;
		grid-template: "container";
	}

	.overlap > * {
		grid-area: container;
	}
</style>

