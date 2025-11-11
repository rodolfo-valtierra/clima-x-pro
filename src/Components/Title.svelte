<script >
	import Logo from "$lib/logo-X.PNG"

	let {text, size=30, ...rest} = $props();
	const cla = rest.class+' flex justify-center '
</script>

<div class={cla}>
	<h1 class={[`lg:text-[${size}pt] text-[${size-10}pt]`]}>{text}</h1>
	<img class="xl:h-16 h-12" src={Logo} alt="Logo X">
</div>
