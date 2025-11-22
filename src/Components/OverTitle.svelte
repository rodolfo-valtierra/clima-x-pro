<script>
  import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome'
  let {src, title, icon} = $props()

</script>
<div class="main-div hover:relative snap-center lg:w-90 w-50">
 <h1 class="text-white z-2 text-shadow-xs text-center lg:text-4xl text-lg items-center justify-center  text-white  rounded-lg  ">
  <FontAwesomeIcon {icon}  />{title}
 </h1>
 <img class="z-1 rounded-lg lg:h-100 h-50 w-100" {src} alt="">
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
    z-index: 3;
    opacity: 0.7;
    height: 100%;
    background-color: var(--color-logo-blue);
    transition: all 0.3s ;
  }

</style>

