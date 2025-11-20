<script>
	import ServicesList from '$utils/services.js'
</script>

<div class="xl:order-first order-first grid m-2 mb-8 text-white place-center items-center gap-3 md:h-76 w-200">
	<h1 class="col-span-2 text-4xl">Contactanos al (477-284-6535) o cotiza con nosotros</h1>
	<div class="grid grid-col-2 col-start-1 grid-fields gap-5 content-start">
		<div class="flex flex-col col-start-1">
			<label for="email">Correo / Email</label>
			<input name="email" placeholder="Email"/>
		</div>
    <div class="flex flex-col col-start-2">
			<label for="name">Nombre</label>
			<input name="name" value="" placeholder="Nombre"/>
		</div>
		<div class="flex flex-col col-start-1">
			<label for="telefono">Telefono</label>
			<input name="telefono" placeholder="Telefono"/>
		</div>
		<div class="flex flex-col col-start-2">
			<label for="service">Selecciona un servicio</label>
			<select  name="service" value="-1" >
        <option disabled hidden value="-1" >Nuestros servicios...</option>
				{#each ServicesList as service, i}
					<option value={i}>{service}</option>
				{/each}
					<option>Otro...</option>
			</select>
		</div>	
    <div class="flex flex-col col-span-2 ">
      <label for="message">Mensage</label>
      <textarea name="message" rows="4" cols="30" placeholder="Describe el servicio aqui..."></textarea>
    </div>
	</div>
</div>

<style>
	input, textarea, select {
		background-color: white;
		color: black;
		font-size: 12pt;
		padding: 6px;
		border-radius: 10px;
	}

</style>
