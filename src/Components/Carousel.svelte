<script>
	import Siema from 'siema'

	let {
    perPage = 3,
    loop = false,
    autoplay = 0,
    duration = 200,
    easing = 'ease-out',
    startIndex = 0,
    draggable = true,
    multipleDrag = true,	
    dots = true	,
    controls = true,
    threshold = 20,
    rtl,
    next = null,
    prev = null,
    go = handleGo,
    pause = handlePause,
    resume = handleResume,
    resetInterval = handleResetInterval,
    children,
    nextButton,
    prevButton,
    dispatch
  } = $props();

  let currentIndex = $state(startIndex);
	let siema ; 
	let controller = null;
	let timer = $state(0);
	let pips = $derived(controller ? controller.innerElements : [])
	let currentPerPage = $derived(controller ? controller.perPage : perPage)
	let totalDots = $derived(controller ? Math.ceil(controller.innerElements.length / currentPerPage) : [])

  $effect(() => {
		controller = new Siema({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
      duration,
      easing,
      startIndex,
      draggable,
 			multipleDrag,
      threshold,
      rtl,
			onChange: handleChange
		})
    next = controller.next;
    prev = controller.prev;
		
		
		return () => {
			controller.destroy()
		}
	})

  $effect(() => {
    if(autoplay) {
			timer = setInterval(right, autoplay);
		}
    return () => {
      autoplay && clearInterval(timer)
      }
    })
	
	function isDotActive (currentIndex, dotIndex) {
        if (currentIndex < 0) currentIndex = pips.length + currentIndex;
        return currentIndex >= dotIndex*currentPerPage && currentIndex < (dotIndex*currentPerPage)+currentPerPage
  }

function handleGo (index) {
  controller.goTo(index)
}

function handlePause() {
  clearInterval(timer);
}

function handleResume() {
  if (autoplay) {
    timer = setInterval(right, autoplay);
  }
}

function handleChange (event) {
    currentIndex = controller.currentSlide
    dispatch?.('change', {
      currentSlide: controller.currentSlide,
      slideCount: controller.innerElements.length
    } )
}

function handleResetInterval(node, condition) {
  function handleReset(event) {
    pause();
    resume();
  }

  if(condition) {
    node.addEventListener('click', handleReset);
  }

  return () => {
    node.removeEventListener('click', handleReset);
  }
}
</script>

<div class="flex flex-row items-center w-full " >
  <button class="left" class:hidden={!controls} onclick={prev} use:resetInterval={autoplay} aria-label="left">
    {@render prevButton?.()}
  </button>
  <div class="slides" bind:this={siema}>
    {@render children?.()}
  </div>
  <button class="right" class:hidden={!controls} onclick={next} use:resetInterval={autoplay} aria-label="right">
    {@render nextButton?.()}
  </button>

</div>
<ul class:hidden={!dots}>
  {#each {length: totalDots} as _, i}
    <li onclick={() => go(i*currentPerPage)} class={isDotActive(currentIndex, i) ? "active" : ""}></li>
  {/each}
</ul>
<style>
.carousel {
position: relative;
width: 100%;
       justify-content: center;
       align-items: center;
}

button {
position: absolute;
width: 40px;
height: 40px;
top: 50%;
     z-index: 50;
     margin-top: -20px;
border: none;
        background-color: transparent;
}

button:focus {
outline: none;
       }

.left {
left: 3%;
}

.right {
right: 6%;
}
ul {
  list-style-type: none;
display: flex;
         flex-direction: row;
         align-self: end;
         justify-content: center;
width: 100%;
       z-index: 4;
}
ul li {
margin: 6px;
        border-radius: 100%;
        background-color: gray;
height: 8px;
width: 8px;
opacity: 0.6;
}
ul li:hover {
  background-color: rgba(255,0,0,0.85);
}
ul li.active {
  background-color: gray;
opacity: 1;
}
</style>

