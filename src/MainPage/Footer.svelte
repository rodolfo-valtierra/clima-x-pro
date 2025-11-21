<script>
	import EmailForm from './Footer/EmailForm.svelte'
	import Map from './Footer/Map.svelte'
	import SocialNet from './Footer/SocialNet.svelte';
  import Certificates from './Footer/Centificates.svelte'
  import Logo from '$lib/img4.PNG'
</script>

<footer id="pie" class="bg-logo-blue pb-10" >
  <div class="bg-white flex justify-center h-15 mb-15">
    <img  src={Logo} alt="">
  </div>
	<div class="flex xl:flex-row flex-col lg:justify-center items-start gap-4">
		<EmailForm/>
		<Map/>
  </div>
  <div class="flex lg:flex-row flex-col mb-12 lg:justify-around items-center ">
		<SocialNet/>
		<Certificates/>
	</div>
  <div class="text-white flex justify-center">
    CLIMAXPRO Todos los derechos revervados 2025 &copy
  </div>
</footer>



