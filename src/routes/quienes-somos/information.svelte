<script>
	import TextIcon from '$component/Text-Icon.svelte'
	let {img} = $props();
</script>

	<img src={img} alt="">
	<div>
		
	</div>
	<div class="grid auto-rows-2 gap-6 justify-center bg-logo-blue w-fit p-10 rounded-s-[50px] rounded-t-[50px] text-white opacity-90" >
		<div class="w-150">
			<TextIcon icon="fa-solid fa-gears">
				Somos una empresa con más de 18 años de experiencia con sede en leon Guanajuato
				especializada en soluciones HVAC modernas,confiables de alta eficiencia con lo que buscamos
				alargar la vida útil de cada equipo dando soporte especializado en sus mantenimientos.
			</TextIcon>
		</div>
		<div class="w-150">
			<TextIcon icon="fa-solid fa-screwdriver-wrench">
			El soporte especializado en mantenimientos han generado alianzas clave para el desarrollo de proyectos a nivelnacional e internacional
			</TextIcon>
		</div>
	</div>
