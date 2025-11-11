<script >
	import Logo from "$lib/logo-X.PNG"
	let {text, size=30} = $props();
</script>
<div class="flex justify-center">
	<img class="xl:h-16 h-12" src={Logo} alt="Logo X">
	<h1 class={[`lg:text-[${size}pt] text-[${size-10}pt]`]}>{text}</h1>
</div>
