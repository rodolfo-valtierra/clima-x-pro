<script>
	import EmailForm from '$component/EmailForm.svelte'
	import Rheem from '$lib/servicio-especial.png'
	import Map from '$component/Map.svelte'
	import SocialNet from '$component/SocialNet.svelte'

</script>

<footer class="bg-logo-blue py-10">
	<div class="flex xl:flex-row flex-col lg:justify-center items-center gap-3">
		<Map/>
		<EmailForm/>
  </div>
  <div class="flex lg:flex-row flex-col my-4 lg:justify-around items-center">
		<SocialNet/>
		<div class="xl:order-last order-first w-40">
			<img src={Rheem} alt="">
		</div>
	</div>
  <div class="text-white flex justify-center">
    CLIMAXPRO Todos los derechos revervados &copy 2025
  </div>
</footer>



