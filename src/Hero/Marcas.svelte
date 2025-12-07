<script>
	import Title from '$component/Title.svelte'
  import {marcas} from '$utils/img-marcas.js'
  import {navigate} from 'sv-router/generated'

  function goTo () {
    navigate('/marcas/i');
  }
</script>

<section class=" h-fit pb-20 my-10 py-5 bg-logo-blue grid grid-rows-3 justify-items-center items-center">
	<Title class="row-span-1 text-white " color="white" size={30} text="Trabajando con los mejores"/>
	<div class="row-span-2 border-orange bg-white mt-3 borde-y-12 w-[100%] border-logo-orange border-y-15 p-5">
		<div class="relative h-27 lg:w-full w-full overflow-hidden" style={"--quantity: "+marcas.length}>
			{#each marcas as marca, i}
				<img style={"--position: "+i+'s; --delay: '+marca.width} class="absolute top-5 z-1  mx-5 " src={marca.src} alt="" onclick={()=> goTo(i)}>
			{/each}
		</div>	
	</div>
</section>


<style>
  img {
    --width: auto;
    --height: 50%;
    width: var(--width);
    height: var(--height);
  }
  @media (width > 700px) {
  img {
    opacity: 0;
    animation: autoRun 10s linear infinite;
    left: 100%;
    animation-delay: calc((var(--position) / var(--quantity)) * var(--delay) );
  }
  }
  @media (width <= 700px) {
    div.relative {
      width: 85%;
    }

    img {
      width: 50px;
      height: 50px;
      animation: autoRun 10s linear infinite;
      animation-delay: calc((var(--position) / var(--quantity)) * 10 );
    }
  }
  
  @keyframes autoRun {
    from {
      opacity: 0;
      left: 90%;
    }
    5% {opacity: 1}
    95% {

      opacity: 1;
      }
    100% {
      left: 0%;
      opacity: 0;
      }
  }

</style>



