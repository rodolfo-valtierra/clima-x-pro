<script>
	import {Router} from 'sv-router';
	import {navigate, p} from 'sv-router/generated'
	import './app.css'
	import NavBar from './MainPage/NavBar.svelte'
	import Footer from './MainPage/Footer.svelte'
</script>

<NavBar>
	<Router/>
</NavBar>
<Footer/>
	
