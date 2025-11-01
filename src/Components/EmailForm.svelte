<script>
	import ServicesList from '$utils/services.js'
</script>
<div class="grid auto-cols-2 auto-rows-2 m-2 text-white place-center items-center h-80">
	<h1 class="col-span-2">Contactanos y cotiza con nosotros</h1>
	<div class="col-start-1 grid grid-cols-1 gap-3 max-w-70">
		<div class="flex flex-col col-start-1">
			<label for="email">Correo / Email</label>
			<input type="" name="email" placeholder="Email"/>
		</div>
		<div class="flex flex-col col-start-1">
			<label for="name">Nombre</label>
			<input type="" name="name" value="" placeholder="Name"/>
		</div>
		<div class="flex flex-col col-start-1">
			<label for="service">Selecciona un servicio</label>
			<select type="" name="service" value="" placeholder="Servicio requerido ">
				{#each ServicesList as service, i}
					<option value={i}>{service}</option>
				{/each}
			</select>
		</div>	
	</div>
	<div class="flex flex-col col-start-2 row-span-2">
		<label for="message">Mensage</label>
		<textarea name="message" rows="3" cols="30" placeholder="Describe the work you need"></textarea>
	</div>
	
</div>

<style>
	input, textarea, select {
		background-color: white;
		color: black;
		font-size: 12pt;
		padding: 6px;
		border-radius: 5px;
	}

	h1 {
		font-size: 28pt;
	}
</style>
