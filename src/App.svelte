<script>
	import {Router} from 'sv-router';
	import './app.css'
	import NavBar from './MainPage/NavBar.svelte'
	import Footer from './MainPage/Footer.svelte';

 
</script>
<NavBar>
	<Router />
</NavBar>
<Footer />

<style>
:global(section.section-out){
  opacity: 0.4;
  transform: scale(0.5);
}

:global(.section-in) {
  opacity: 1;
  transform: scale(1);
  transition: 0.5s all linear;
}

</style>


