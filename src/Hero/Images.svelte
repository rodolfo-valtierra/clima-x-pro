<script>
  import Title from '$component/Title.svelte'
  import images from '$utils/ImagesServices.js'
  import Carousel from '$component/Carousel.svelte'
  import OverTitle from '$component/OverTitle.svelte'
  import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome'
</script>

<section class="flex flex-col items-center mb-30  ">
  <div class="lg:w-180 w-100 my-10">
    <Title text="Servicios HVAC para todo tipo de comercio consulta, mantenimiento o reparaciones de emergencia"/>
  </div>
  <div class="flex flex-col items-center justify-center overflow-hidden w-300">
    <Carousel perPage={3} >
      {#each images as img} 
        <OverTitle title={img.title} src={img.src} alt=""/>
      {/each}
        {#snippet prevButton()}
      <FontAwesomeIcon  icon="fa-angle-left"/>
        {/snippet}
        {#snippet nextButton()}
      <FontAwesomeIcon icon="fa-angle-right"/>
        {/snippet}
    </Carousel>
  </div>
</section>
