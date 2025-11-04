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
<div class="grid gap-10 grid-rows-3 h-fit">
	<Titulo text="Nuestro Equipo"/>
	<img class="-z-1 blur-sm w-220 place-self-center drop-shadow-2xl" src={Logo} alt="">
	<div class="flex flex-row justify-center items-center gap-20">
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
	.grid > h1 {
		grid-area: titulo;
	}
	.grid > * {
		grid-area: team;
	}
</style>

