<script>
  import Title from '$component/Title.svelte'
  import images from '$utils/ImagesServices.js'
  import Carousel from '$component/Carousel.svelte'
  import OverTitle from '$component/OverTitle.svelte'
  import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome'
</script>

<section class="flex flex-col items-center justify-around mb-30  ">
  <div class="lg:w-180 w-100 my-10">
    <Title text="Servicios HVAC para todo tipo de comercio consulta, mantenimiento o reparaciones de emergencia"/>
  </div>
  <div class="lg:w-300 w-full  ">
    <Carousel >
      {#each images as img} 
        <OverTitle title={img.title} src={img.src} alt=""/>
      {/each}
      <FontAwesomeIcon slot="left-control" icon="fa-angle-left"/>
      <FontAwesomeIcon slot="right-control" icon="fa-angle-right"/>
    </Carousel>
  </div>
</section>
