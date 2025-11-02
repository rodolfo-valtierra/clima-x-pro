<script>
	import {FontAwesomeIcon	} from '@fortawesome/svelte-fontawesome'
	let {icon, children} = $props();
</script>
<div class="flex flex-row">
	<FontAwesomeIcon class="mx-4" {icon} size="2x"/>
	<p>{@render children()}</p>
</div>
