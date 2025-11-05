<script>
	import ServicesList from '$utils/services.js'
</script>

<div class="xl:order-last order-first grid xl:auto-cols-2 xl:auto-rows-2 auto-rows-auto m-2 text-white place-center items-center gap-3 h-76">
	<h1 class="col-span-2 text-4xl">Contactanos y cotiza con nosotros</h1>
	<div class="col-start-1 grid-fields gap-5 content-start">
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
			<select  name="service" value="" placeholder="Servicio requerido ">
				{#each ServicesList as service, i}
					<option value={i}>{service}</option>
				{/each}
			</select>
		</div>	
    <div class="flex flex-col col-start-2 ">
      <label for="message">Mensage</label>
      <textarea name="message" rows="3" cols="30" placeholder="Describe the work you need"></textarea>
    </div>
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

  .grid-fields {
    display: grid;
    grid-template: repeat(3, 50px) / repeat(2, 1fr);
  }

  .grid-fields > div:nth-last-child(1){
    grid-area:  1 / 2 / auto / 2;
    height: fit-content;
  }
</style>
