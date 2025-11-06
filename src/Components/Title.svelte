<script >
	import Logo from "$lib/logo-X.PNG"
	let {text} = $props();
</script>
<div class="flex justify-center">
	<img class="xl:h-16 h-12" src={Logo} alt="Logo X">
	<h1 class="xl:text-[32pt] text-[22pt]">{text}</h1>
</div>
