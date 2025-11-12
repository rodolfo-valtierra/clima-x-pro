<script>
	import IconImg from '$component/IconImg.svelte'
	import Logo from '$lib/img4.PNG'
	import Titulo from '$component/Title.svelte'
	import Abraham from '$lib/team/abraham.png'
	import Vianney from '$lib/team/vianney2.png'
	import Carolina from '$lib/team/Carolina.png'

	let members = $state([
		{img: Vianney, name: "Vianney Guillen", position:"Sales Director & MK"},
		{img: Abraham, name: "Abraham Pedraza", position:"CEO & fundador"},
		{img: Carolina, name: "Carolina GB", position:"Depto. Administrativo"}
	])
</script>
<div class="grid gap-5 grid-rows-3 h-fit my-5">
	<Titulo text="Nuestro Equipo"/>
	<img class="-z-1 blur-sm place-self-center  drop-shadow-2xl" src={Logo} alt="">
	<div class="flex flex-row justify-center xl:gap-10 gap-2">
		{#each members as member}
			<IconImg image={member.img} name={member.name} position={member.position}/>
		{/each}
	</div>
</div>

<style>
	.grid {
		grid-template-areas: 
		"titulo"
		"team";
	}
	
	.grid > * {
		grid-area: team;
	}
</style>

