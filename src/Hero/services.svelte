<script>
	import ServicesList from '$component/ServicesList.svelte'
	import ImgMantenance from '$lib/mantenimiento1.jpeg'
	import Mantenimiento from '$lib/mantenimiento2.jpg'
	import Calidad from '$lib/calidad.jpg'
	import BackService from '$lib/back-service.jpg'
	import Title from '$component/Title.svelte'
  import {navigate} from 'sv-router/generated'

  function goTo(serviceId) {
    navigate('/services/'+serviceId)
  }
</script>

<section class="flex flex-col place-content-center gap-10 w-full h-[100dvh] snap-center">
		<Title text="Servicios especializados"/>
	<div class="relative flex flex-row gap-4 justify-center ">
		<div class="w-180 hidden lg:block">
			<img src={ImgMantenance} alt="Not maintenance">
		</div>
		<div class="relative border w-170 rounded-xl bg-logo-blue text-white pt-8" style={`background-image: url(${BackService})`}>
			<div class="absolute top-5 md:left-[80%] left-92 text-[#F34401] bg-white z-2 text-center w-26 shadow-[0px_0px_26px_1px] shadow-gray-700 px-1 pb-3 rounded-[20px]">
				<h2 class="lg:text-[28pt] text-[17pt] font-bold ">18+</h2>
				<p class="text-center leading-none">
					a&ntildeos de 
					experiencia
				</p>
			</div>
			<ServicesList title="Catalogo de servicios" onclick={goTo} >
				<img class="absolute md:top-17 top-25 md:left-100 left-92 md:w-45 w-30 rounded-[20px]" src={Mantenimiento} alt="mantenimiento">
				<img class="absolute top-60 left-[50%]  md:w-50 w-30 rounded-[20px]" src={Calidad} alt="calidad">
			</ServicesList>
		</div>	
	</div>
</section>


<style>
  
  section {
    animation: 1ms scrolling linear forwards;
    animation-timeline: --my-scroller;
  }

  @keyframes scrolling {
    from {
      opacity: 0;
      transform: scale(0.8)
      }
      35% {
      opacity: 1;
      transform: scale(1)
        }
    }

</style>

