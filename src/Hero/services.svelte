<script>
	import ServicesList from '$component/ServicesList.svelte'
	import ImgMantenance from '$lib/mantenimiento1.jpeg'
	import Logo from "$lib/logo-X.PNG"
	import Mantenimiento from '$lib/mantenimiento2.jpg'
	import Calidad from '$lib/calidad.jpg'
	import BackService from '$lib/back-service.jpg'
	import Title from '$component/Title.svelte'
	import {navigate} from 'sv-router/generated'
</script>

<section class="flex flex-col my-10 gap-10 w-full">
		<Title text="Servicios especializados"/>
	<div class="relative flex flex-row gap-4 justify-center ">
		<div class="w-180 hidden lg:block">
			<img src={ImgMantenance} alt="Not maintenance">
		</div>
		<div class="relative border w-170 rounded-xl bg-logo-blue text-white pt-8" style={`background-image: url(${BackService})`}>
			<div class="absolute top-5 md:left-[80%] left-92 text-[#F34401] bg-white z-2 text-center w-26 shadow-[0px_0px_26px_1px] shadow-gray-700 px-1 pb-3 rounded-[20px]">
				<h2 class="text-[28pt] font-bold ">18+</h2>
				<p class="text-center leading-none">
					a&ntildeos de 
					experiencia
				</p>
			</div>
			<ServicesList title="Catalogo de servicios" onclick={(service) => {navigate('/services/'+service)}}>
				<img class="absolute top-17 md:left-100 left-92 md:w-45 w-25 rounded-[20px]" src={Mantenimiento} alt="mantenimiento">
				<img class="absolute top-54 left-[50%]  md:w-50 w-30 rounded-[20px]" src={Calidad} alt="calidad">
			</ServicesList>
		</div>	
	</div>
</section>

<style>
	*.triangle {
		--top-triangle: -4dvw;
	}
 .triangle {
		height: 10px;
		border-left: 2dvw solid #F34401;
		border-bottom: 6dvw solid transparent;
		border-top: 5dvw solid transparent;
	}

	.triangle {
		position: absolute;
		z-index: 2;
	}

	.triangle:nth-child(1){
		left: 0rem;
		top: var(--top-triangle);
		transform: rotate(-140deg);
	}

	.triangle:nth-child(4) {
		left: 34dvw;
		top: var(--top-triangle);
		transform: rotate(-40deg);
	}

	.triangle:nth-child(2) {
		left: 0rem;
		top: 19dvw;
		transform: rotate(140deg)
	}
	.triangle:nth-child(5) {
		left: 34dvw;
		top: 19dvw;
		transform: rotate(40deg)
	}
</style>
