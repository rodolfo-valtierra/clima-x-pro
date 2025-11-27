<script>
  import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome'
  let {src, title, icon=null} = $props()

</script>
<div class="main-div hover:relative  w-[90%]">
 <h1 class="text-white z-2 text-shadow-xs text-center lg:text-4xl text-lg items-center justify-center  text-white  rounded-lg  ">
  {#if icon}
    <FontAwesomeIcon {icon} />{title}
  {/if}
 </h1>
 <img class="z-1 rounded-lg h-100 w-[100vw]" {src} alt="">
</div>


<style>
  .main-div {
    display: grid;
    grid-template: "title";
    align-items: center;
    justify-content: center;
  }

  .main-div > * {
    grid-area: title;
  }
  
  .main-div:hover > h1{
    display: grid;
    z-index: 2;
    opacity: 0.7;
    height: 100%;
    background-color: var(--color-logo-blue);
    transition: all 0.3s ;
  }

</style>

