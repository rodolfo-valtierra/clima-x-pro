<script>
	import Info from './information.svelte'
	import MisionVision from './mision-vision.svelte'
	import TeamFooter from './TeamFooter.svelte'
	import empresaLogo from '$lib/img4.PNG'
	import img1 from '$lib/hvac1.jpg'
	import abraham from '$lib/team/abraham.png'
	import vianney from '$lib/team/vianney.PNG'
	
	let show = $state(false)
</script>
<div class="grid auto-cols">
	<div style={`background: url(${img1}) no-repeat ; background-size: clamp(100dvw, 300dvw , 900px); `} 
  class="grid justify-items-center bg-center bg-no-repeat xl:content-center content-start xl:my-18 my-10 xl:h-150 h-130 " >
		<div class="bg-white my-2 p-3 rounded-sm shadow-lg/50">
			<h1 class="flex flex-row xl:text-4xl text-xl">Quien es <img class="mx-2 h-8 xl:h-12 " src={empresaLogo} alt="logo">?</h1>
		</div>
		<div class="relative z-1 wrapper-box grid auto-rows-2 shadow-lg/50 gap-6 justify-center bg-logo-blue p-2 xl:p-10 rounded-s-[50px] rounded-t-[50px] text-white opacity-90" >
			{#if show}
				<Info/>
			{:else }
				<MisionVision/>
			{/if}
		</div>
		<div class="relative z-2 w-100 my-5">
			{#if show}
				<img class="absolute xl:-top-50 xl:left-111 left-60 -top-12 drop-shadow-xl/50 xl:w-57 w-25" src={abraham} alt="abraham">
			{:else }
				<img class="absolute xl:-top-40 -top-15 xl:left-140 left-[70%] drop-shadow-xl/50 xl:w-47 w-25" src={vianney} alt="vianney">
			{/if}
		</div>
	</div>
	<TeamFooter/>
</div>
