<script>
	import {Router} from 'sv-router';
	import './app.css'
	import NavBar from './MainPage/NavBar.svelte'
	import Footer from './MainPage/Footer.svelte';

  setTimeout(() => {
    const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('section-out');
        entry.target.classList.add('section-in');
        observer.unobserve(entry.target);
        }
      })
    }, {
      root: null,
      rootMargin: '10px',
      threshold: 0.3
      })

    const sections = document.querySelectorAll('section');
    sections.forEach(el => {
      observer.observe(el);
    })
  
  }, 1000)
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


