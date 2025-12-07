<script>
import Title from '$component/Title.svelte';
import {marcas } from '$utils/img-marcas.js';
import {route} from 'sv-router/generated';
import Carousel from '$component/Carousel.svelte';
import Products from '$utils/imgProducts.js';
import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';

let product = $state(0);

$effect(() => {
  const param = route.params
  if (param)
    product = param
})

</script>

<div class="flex flex-col pt-20 justify-center gap-10">
  <Title text="Productos destacados "/>
  <div class="flex flex-row gap-10 justify-center">
    {#each marcas as marca, i}
    <div class="flex flex-col gap-3">
      <img class=" h-10" src={marca.src} alt="">
      {#if product==i}
        <hr class="under-line text-logo-sky border-4">
      {/if}
    </div>
    {/each}
  </div>
  <div class="flex flex-col items-center">
    <h1 class='text-2xl'>title</h1>
    <div class="flex flex-col justify-center w-[80dvw] h-100" >
      <Carousel perPage={3} >
        {#each Products as p}
          <img class="w-[100dvw] h-60" src={p} alt="">
        {/each}
        {#snippet nextButton()}
          <FontAwesomeIcon size="2xl" icon="fa-angle-right" name="button-right"/>
        {/snippet}
        {#snippet prevButton()}
          <FontAwesomeIcon size="2xl" icon="fa-angle-left" name="button-left"/>
        {/snippet}
      </Carousel>
    </div>
    <div>
      
    </div>
  </div>
</div>


<style>
  .under-line {
    animation: 0.4s spaning linear;
    
  }

  @keyframes spaning {
    from {
      width: 0%;
      }
    to { 
      width: 100%;
    }
  }
</style>
