<script>
	import {FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  import {fade} from  'svelte/transition'
	import Ubicacion from '$lib/ubicacion.png';
	import Plaza from '$lib/san-martin.png'
  import Espania from '$lib/flags/espania.webp'
  import Mexico from '$lib/flags/mexico.webp'
  
  let toggle = $state(false);
  const timeToggle = setInterval( () => {
    toggle= !toggle;
    }, 4000)
</script>

<div class="xl:order-last order-last md:w-140 grid xl:auto-cols-2 auto-cols-1 text-left text-white justify-content-center gap-3">
  <div class="grid grid-cols-2 gap-4 w-50">
      <img src={Espania} alt="">
      <img src={Mexico} alt="">
    </div>
  <div class="col-span-2 grid grid-rows-1 justify-start gap-2">
    <FontAwesomeIcon icon="col-start-1 fa-solid fa-earth-americas" size="2x"/>
    <h1 class="font-bold text-lg z-2 col-start-2">Visitanos en nuestras oficinas</h1>
  </div>
	<div class="map col-start-1 h-fit text-left mx-1 ">
		<p class="z-2 bg-logo-blue h-fit">Local Interior de la plaza, Blvd.  Aeropuerto 849 Isla 7. Outlet San Martin, Local E-8, San Martin, 37295  León de los Aldama, Gto.</p>
    {#if toggle}
		<img transition:fade={{duration: 2000}} class="ubicacion h-70 rounded-b-lg " src={Ubicacion} alt="">
    {:else }
		<img transitino:fade={{duration: 2000}} class="ubicacion h-70 rounded-b-lg w-130" src={Plaza} alt="">
    {/if}
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
