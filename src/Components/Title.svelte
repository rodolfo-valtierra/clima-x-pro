<script >
	import Logo from "$lib/logo-X.PNG"

	let {text, size=30, ...rest} = $props();
	const cla = rest.class+' flex justify-center items-center '
</script>

<div class={cla}>
	<img class="xl:h-16 h-12" src={Logo} alt="Logo X">
	<h1 class="lg:text-2xl">{text}</h1>
</div>
