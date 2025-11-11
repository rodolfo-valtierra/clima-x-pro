<script>
  import Title from '$component/Title.svelte'
  import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome'
  import OverTitle from '$component/OverTitle.svelte'
  import Sectors from '$utils/ImagesServices.js'

  let pageEnd = $state(2);
  let pageStart = $state(0);
  let images = $derived(Sectors.filter((_, i) => (i>=pageStart && i<=pageEnd)))

  function incrementPage() {
    if (Sectors.length<=pageEnd+1) {
      pageStart = 0;
      pageEnd = 2;
      return;
    }

    pageStart++;
    pageEnd++;
  }

</script>

<section class="flex flex-col items-center my-10">
  <div class="w-300">
    <Title text="Servicios HVAC para todo tipo de comercio consulta, mantenimiento o reparaciones de emergencia"/>
  </div>
  <div class="flex flex-row gap-2 justify-between items-center">
    <button class="w-fit " onclick={incrementPage}>
      <FontAwesomeIcon icon="fa-solid fa-chevron-left"></FontAwesomeIcon>
    </button>
    <div class="col-span-1 grid grid-cols-3 gap-10 w-fit" >
      {#each images as sector, i}
          <OverTitle {...sector}/>
      {/each}
    </div>
    <button class="w-fit">
      <FontAwesomeIcon icon="fa-solid fa-chevron-right"></FontAwesomeIcon>
    </button>
  </div>
</section>
