<script >
	import Logo from "$lib/logo-X.PNG"
	let {text, size="30pt", ...rest} = $props();
	const cla = rest.class+' flex justify-center '
</script>
<div class={cla}>
	<img class="w-15" src={Logo} alt="Logo X">
	<h1 class={`text-[${size}]`} >{text}</h1>
</div>
