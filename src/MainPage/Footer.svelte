<script>
	import EmailForm from '$component/EmailForm.svelte'
	import Rheem from '$lib/servicio-especial.png'
	import Map from '$component/Map.svelte'
	import SocialNet from '$component/SocialNet.svelte'

</script>

<footer id="pie" class=" flex flex-col bg-logo-blue py-10 h-200 justify-items-center">
	<div class="grid auto-row-max grid-cols-2 grid-flow-row gap-y-5 justify-around">
		<Map/>
		<EmailForm/>
		<SocialNet/>
		<div class="w-40">
			<img src={Rheem} alt="">
		</div>
	</div>
</footer>


