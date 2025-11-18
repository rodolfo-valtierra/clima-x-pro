<script>
  import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome'
  let {src, title, icon} = $props()

</script>
<div class="main-div hove:relative">
 <h1 class="z-2 bg-logo-blue h-[20%]  text-center flex flex-row items-center justify-center  text-xl opacity-85 text-white  rounded-lg">
  <FontAwesomeIcon {icon}  />{title}
 </h1>
 <img class="h-[35dvw] w-85 z-1 rounded-lg" {src} alt="">
</div>


<style>
  .main-div {
    display: grid;
    grid-template: "title";
  }

  .main-div > * {
    grid-area: title;
  }
  
  .main-div:hover{
    position: relative;
    display: grid;
    z-index: 3;

      & > * {
        position: absolute;
        width: 100%;
        z-index: 2;
      }
      & > h1 {
        z-index: 3;
        transform: scaleX(.6);
        top: 40%;
      }
      & img {
        box-shadow: 0px 0px 10px 7px white;
      }

    transform: translate(0px, -20px) scaleX(1.5);
    transition: all 0.3s ;
  }

</style>

