<script>
	import Logo from '$lib/img4.PNG'
	import {p, route} from 'sv-router/generated'
  import Links from '$utils/navLinks.js'
	let {children} = $props();
  let showMobile = $state(false);

  function displayMobileMenu (event) {
    showMobile = !showMobile;
  }

  async function showLink (event) {
    showMobile = false;
    const id = route.hash;
    console.log(id)
    console.log(document.querySelector(id))
    if (route.hash.includes('#'))
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }

</script>
<nav class="fixed z-3 w-full">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-white rounded-b-md">
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
      <div class="flex flex-1 items-center md:justify-self-start justify-center sm:items-stretch ">
        <div class="flex shrink-0 items-center">
          <img class="h-12 w-auto" src={Logo} alt="logo 4">
        </div>
      </div>
      <div class="hidden sm:ml-6 sm:block justify-self-end text-lg">
        <div class="flex space-x-4">
            {#each Links as link}
            <a id={link.name} href={p(link.link)} onclick={showLink}>{link.name}</a>
            {/each}
        </div>
      </div>
    </div>
  </div>

  <div id="mobile-menu" class="absolute top-15 w-full bg-white  rounded-md" hidden={!showMobile}>
    <div class="space-y-1 px-2 pt-2 pb-3 hover:bg-white">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" -->
      {#each Links as link}
        <a href={p(link.link)} class="block rounded-md px-3 py-2 text-base font-medium  focus:bg-logo-blue focus:text-white" onclick={showLink} >
          {link.name}
        </a>
      {/each}
    </div>
  </div>
</nav>
{@render children?.()}


