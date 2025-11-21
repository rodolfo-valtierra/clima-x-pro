
<script>
	import {route} from 'sv-router/generated'
	import ServicesList from '$component/ServicesList.svelte'
	import BackService from '$lib/back-service.jpg'
	import ImgMantenance from '$lib/mantenimiento1.jpeg'
	import Services from '$utils/services.js'
	import Title from '$component/Title.svelte'
  import HVAC1 from '$lib/hvac1.jpg'

	let service_id = $state(route.params.id);

</script>
<div class="flex flex-col pt-30 gap-5 h-250 items-center" style={`background: no-repeat url('${HVAC1}')`}>
  <Title text="Services" class="bg-white text-center rounded-md p-2 lg:text-2xl text-lg"/>
  <div class="grid lg:grid-cols-1 grid-cols-2 justify-center gap-3 ">
    <div class="col-span-1 border rounded-xl bg-dark-blue text-white py-7 " style={`background: no-repeat url(${BackService})`}>
      <ServicesList bind:service={service_id}/>
    </div>
    <div class="relative sm:top-50% z-1 overlap lg:col-start-2 place-items-center w-full" >
      <div class="z-2 bg-white lg:text-xl text-sm">
          {Services.filter((s, i) => i==service_id)}
      </div>
      <img class="grayscale z-1 rounded-xl xl:h-150 xl:w-200 h-120 w-100" src={ImgMantenance} alt="">
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

