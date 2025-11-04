<script>
	import {FontAwesomeIcon	} from '@fortawesome/svelte-fontawesome'
	let {icon, children, size="2x"} = $props();

</script>

<div class="flex flex-row xl:mb-4 mb-2">
	<FontAwesomeIcon class="icon xl:mx-4 mx-2" {icon} {size}/>
	<p>{@render children()}</p>
</div>

