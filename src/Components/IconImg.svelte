<script>
	let {image, name, position} = $props()
</script>

<div class="flex flex-col">
	<div class="rounded-full shadow-[0px_0px_22px_1px] shadow-gray-800 bg-center bg-contain bg-no-repeat size-10 xl:h-45 xl:w-45 w-20 h-20" 
	style={`background-image: url(${image})`} ></div>
	<div class="flex flex-col items-center xl:text-xl text-[7pt] ">
		<span class="font-bold">{position}</span>
		<span >{name}</span>
	</div>
</div>
	
