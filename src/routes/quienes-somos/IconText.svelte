<script>
	import {FontAwesomeIcon	} from '@fortawesome/svelte-fontawesome'
	let {icon, children, size="1x"} = $props();

</script>

<div class="flex flex-row xl:mb-4 mb-1 w-100">
	<FontAwesomeIcon class="icon mx-4 my-2" {icon} {size}/>
	<p>{@render children()}</p>
</div>

