<script>
	import Logo from '$lib/img4.PNG'
	import {p, route} from 'sv-router/generated'
  import {isActiveLink} from 'sv-router'
  import Links from '$utils/navLinks.js'
  import {FontAwesomeIcon} from '@fortawesome/svelte-fontawesome';
  import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
  import {whatsappText} from  "$utils/texts.js"

	let {children} = $props();
  let showMobile = $state(false);

  function displayMobileMenu () {
    showMobile = !showMobile;
  }

</script>
<nav class="fixed z-4 w-full">
  <div class="lg:mx-auto mx-0 max-w-7xl lg:px-6 px-1 bg-white rounded-b-md shadow-lg/30 ">
    <div class="relative flex h-16 items-center">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button onclick={displayMobileMenu} class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 in-aria-expanded:hidden">
            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6 not-in-aria-expanded:hidden">
            <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center lg:justify-start justify-center lg:items-stretch ">
        <div class="flex shrink-0 items-center">
          <img class="h-12 w-auto" src={Logo} alt="logo 4">
        </div>
      </div>
      <div class="hidden sm:ml-6 sm:block justify-self-end text-lg">
        <div class="flex ">
            {#each Links as link}
              <a id={link.name} use:isActiveLink href={p(link.link)} class="cursor-pointer hover:bg-logo-orange hover:text-white p-2 hover:rounded-sm transition duration-280 linear hover:translate-y-1" >{link.name}</a>
            {/each}
        </div>
      </div>
    </div>
  </div>

  <div id="mobile-menu" class="absolute top-15 w-full bg-white rounded-md" hidden={!showMobile}>
    <div class="space-y-1 px-2 pt-2 pb-3 hover:bg-white">
      {#each Links as link}
        <a href={p(link.link)} use:isActiveLink class="block rounded-md px-3 py-2 text-base font-medium  focus:bg-logo-blue focus:text-white"  >
          {link.name}
        </a>
      {/each}
    </div>
  </div>
  
</nav>
<div class="fixed top-200 left-5 z-4 grid grid-cols-auto gap-3">
  <a class="enlace-to flex flex-row items-center gap-2" target="blank" href={"https://wa.me/+524772846535?text="+whatsappText} >
    <FontAwesomeIcon class="bg-[#25d366] hover:animate-bounce text-white rounded-full" size="3x" icon="fa-brands fa-whatsapp"/>
    <span class="bg-white rounded-lg" >+52 (477) 284 65 35</span>
  </a>
  <a  onclick={() => document.getElementById('pie').scrollIntoView()} class="enlace-to flex flex-row items-center gap-2">
    <FontAwesomeIcon class="text-logo-blue bg-white hover:animate-bounce  rounded-md" size="3x" icon={['fa','envelope']}/>
    <span class="bg-white rounded-xl" >ventas.climaxpro@gmail.com</span>
  </a>
</div>
{@render children?.()}

<style>
  .enlace-to:not(:hover) {
    & span {
      display: none;
      opacity: 0;
      }
    }
  .enlace-to:has(>span):hover {
    & span {
      display: block;
      opacity: 1;
      padding: 5px;
      color: black;
      font-weight: bold;
      transition: opacity 5s linear;
    }
  }

  a:global(.is-active) {
    color: var(--color-logo-orange);
    border-radius: 13px;
  }

  a:global(.is-active:hover) {
    color: white;
    }
</style>
