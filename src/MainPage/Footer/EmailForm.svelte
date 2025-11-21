<script>
	import ServicesList from '$utils/services.js'
</script>

<div class="xl:order-first order-first flex flex-col m-2 mb-8 text-white place-center items-center gap-3 md:h-fit w-fit">
	<h1 class="col-span-2 text-4xl text-center">
    Contactanos al (477-284-6535) o cotiza con nosotros
  </h1>
	<div class="grid grid-cols-2 col-start-1 grid-fields gap-5 content-start">
    <div class="flex flex-col col-start-1 gap-2">
			<label for="name">Nombre</label>
			<input name="name" value="" placeholder="Nombre"/>
		</div>
		<div class="flex flex-col col-start-2 gap-2">
			<label for="email">Correo / Email</label>
			<input name="email" placeholder="Email"/>
		</div>
		<div class="flex flex-col col-start-1 gap-2">
			<label for="telefono">Telefono</label>
			<input name="telefono" placeholder="Telefono"/>
		</div>
		<div class="flex flex-col col-start-2 gap-2">
			<label for="service">Selecciona un servicio</label>
			<select  name="service" value="-1" >
        <option disabled hidden value="-1" >Nuestros servicios...</option>
				{#each ServicesList as service, i}
					<option value={i}>{service}</option>
				{/each}
					<option>Otro...</option>
			</select>
		</div>	
    <div class="flex flex-col col-span-2  gap-2">
      <label for="message">Mensaje</label>
      <textarea name="message" rows="4" placeholder="Describe el servicio aqui..."></textarea>
    </div>
	</div>
  <h2 class="font-bold text-lg">O envianos correo directamente a:</h2>
  <h2 class="bg-white text-xl font-bold text-black"><span class="text-logo-blue">clima</span><span class="text-logo-orange">x</span>
  <span class="text-logo-sky">pro</span>@gmail.com</h2>
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
