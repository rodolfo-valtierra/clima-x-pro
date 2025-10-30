<script>
	import ServicesList from '$utils/services.js'
</script>
<div class="flex flex-wrap flex-col w-50 gap-4 m-3 text-white">
	<div class="flex flex-col ">
		<label for="email">Correo / Email</label>
		<input type="" name="email" placeholder="Email"/>
	</div>
	<div class="flex flex-col ">
		<label for="name">Nombre</label>
		<input type="" name="name" value="" placeholder="Name"/>
	</div>
	<div class="flex flex-col ">
		<label for="service">Selecciona un servicio</label>
		<select type="" name="service" value="" placeholder="Servicio requerido ">
			{#each ServicesList as service, i}
				<option value={i}>{service}</option>
			{/each}
		</select>
	</div>
	<div class="flex flex-col ">
		<label for="message">Mensage</label>
		<textarea name="message" rows="3" cols="40" placeholder="Describe the work you need">
		</textarea>
	</div>
</div>

<style>
	input, textarea, select {
		background-color: white;
		color: black;
		font-size: 12pt;
		padding: 4px;
		border-radius: 5px;
	}
</style>
