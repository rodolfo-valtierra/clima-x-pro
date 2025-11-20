<script>
	import Image2 from "$lib/image2.jpeg";
	import Logo from "$lib/img4.PNG";
</script>

<section class="w-fit justify-items-center">
	<img class="back" src={Image2} alt="no back" />
	<div class="grid grid-cols-2 w-full">
		<div class="col-span-1 absolute -top-10 z-1 triangle "></div>
	</div>
	<div class="back-logo grid grid-rows-2 -skew-x-15 absolute top-70 lg:left-[28%] sm:left-0 lg:px-25 content-center sm:px-3 pt-3 mx-7 z-1  max-h-45 min-h-30  max-w-230 bg-white">
			<div class="logo-glow row-span-1 col-span-full skew-x-15 max-w-160 h-fit">
				<img class="drop-shadow mx-2" src={Logo} alt="no logo" />
			</div>
			<div class="row-span-2 ps-5 skew-x-15  self-end text-right ">
				<span class="shadow-higth italic mx-1">You deserve the best...</span>
			</div>
	</div>
	<div class="tag-bottom absolute grid grid-rows-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 top-130  z-3 w-full h-fit justify-content-end">
		<div class="row-span-1 col-span-2 grid justify-items-end w-full ms-7 -z-1">
			<div class="w-20 h-30 bg-logo-blue -skew-x-15 rounded-s-xl"></div>
		</div>
		<div class="row-span-1 lg:col-start-3 sm:col-start-3 col-end-5 bg-logo-blue text-white h-30 ps-10 grid content-center ">
			<span>Distribucion y mantenimiento de <b>Sistemas HVAC</b></span>
		</div>
		<div class=" row-span-2 relative -top-3 lg:col-start-3 sm:col-start-3 col-end-5 min-w-full">
			<div class="text-black rounded-s-xl top-18 ps-8 bg-white grid content-center justify-items-start ">
					<span >Cotiza con nosotros</span>
			</div>	
		</div>
	</div>
</section>

<style>
	* {
		--back: 120dvh;
	}
	.back {
		height: var(--back);
		width: 100dvw;
	}

	.back-logo {
		box-shadow: -45px 45px 30px 0px #f84101;
	}

  .back-logo > * {
		font-size: clamp(17pt, 23pt,3.6dvw);
	}

	.triangle {
		opacity: 0.9;
		height: var(--back);
		border-left: 50vw solid #052543;
		border-bottom: 60vh solid transparent;
		border-top: 60vh solid transparent;
	}

	.tag-bottom {
			container-name: tag-container;
			container-type: inline-size;
	}

	.tag-bottom > * {
		font-size: clamp(14pt, 18pt, 3.6dvw);
    animation: 7s tag-scale linear infinite;
	}

  @property --logo-corner {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
    }
  
	.logo-glow::before {
		content:'';
    background: no-repeat conic-gradient(from var(--logo-corner), white 70%, #016dc3);
    background-size: 127px 100%;
    backdrop-filter: blur(5);
		clip-path: path("M 18 42 L 50,42 L 65,61 L 104,17 L 127,17 L 78,77 L 103,117 L 76,117 L 59,100 L 17,143 L 0,143 L 45,81 z");
    position: absolute;
    width: 20%;
    height: 9rem;
		top: -1rem;
    left: 49%;
    z-index: -1;
    animation: 3s logo-move linear infinite;
    container-name: logo-container;
    container-type: inline-size;
	}

  @keyframes logo-move {
    to {
      --logo-corner: 360deg;
      }
  }
  
  @container logo-container (width < 600px) {
    .logo-glow::before {
      display: hidden;
      }
    }
	@container tag-container (width < 1036px){
		.tag-bottom::before{
			left: 100%;
		}
	}
	
	.shadow-higth {
		text-shadow: #000000c7 -3px 4px 7px;
	}

  .drop-shadow {
    filter: drop-shadow(0px 0px 12px #00000069);
    }
</style>

