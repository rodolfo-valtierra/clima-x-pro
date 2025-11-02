<script>
	import Info from './information.svelte'
	let {img} = $props();
</script>
<div>
	<img src={img} alt="">
	<div>
		
	</div>
	<div>
		<div>
			<Info/>
		</div>
		<div>
			<h1></h1>
		</div>
	</div>
</div>
