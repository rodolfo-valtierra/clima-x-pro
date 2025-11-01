<script>
	import {FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import Ubicacion from '$lib/ubicacion.png';
	import Plaza from '$lib/san-martin.png'
</script>

<div class="grid auto-cols-2 text-left text-white justify-center">
	<FontAwesomeIcon icon="col-span-1 row-span-2 fa-solid fa-earth-americas" size="2x"/>
	<h1 class="font-bold text-xl z-2">Visitanos en nuestras oficinas</h1>
	<div class="map col-start-2 w-130 h-100 text-left mx-1 ">
		<p class="z-2 bg-logo-blue h-fit">Local Interior de la plaza, Blvd.  Aeropuerto 849 Isla 7. Outlet San Martin, Local E-8, San Martin, 37295  León de los Aldama, Gto.</p>
		<img class="h-70 rounded-b-lg " src={Ubicacion} alt="">
		<img class="h-70 rounded-b-lg w-130 hidden" src={Plaza} alt="">
	</div>
</div>

<style>
	.map {
		display: grid;
		grid-template-areas: "info-map";
	}

	.map > * {
		grid-area: info-map;
	}

</style>
