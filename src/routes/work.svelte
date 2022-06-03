<svelte:head>
	<title>Work</title>
</svelte:head>
<script>
	import { hslide } from './hslide.js';
	
	let tekst = 0
	let disp = "none"
	let les = "les mer"
	let header = 0
	let slides = [
		{ content: 'buss.jpg', bg: 'gray', text: 'Jobbuke i Tide AS' },
		{ content: 'maling.jpg', bg: 'gray', text: 'Jeg malte et hus' },
		{ content: 'placeholder.jpg', bg: 'gray', text: 'Jeg er daglig leder i Teo AS' },
		{ content: 'skolen.jpg', bg: 'linear-gradient(270deg, rgb(253,230,194), rgb(233,214,200))', text: 'Elevbedrift Steinerskolen' },
	]
	
	let cur = 0;
	
	function changeSlide(slide) {
		cur = slide;
	}
	
	function visBilde() {
		if(disp == "inline"){
			disp = "none"
			les = "les mer"}
		else if(disp == "none"){
			disp = "inline"
			les = "les mindre"
		}
		else{
		}
	}

	
	const lesMer = (id) => {
		if(id===0){
			tekst = "Jeg jobbet i Tide AS i en uke på ungdomskolen da vi hadde noe som het \"Jobbuke\", det bestod av at vi valgte en bedrift og spurte om vi kunne jobbe der i en uke for å få en følelse av hvordan arbeidslivet er. Hos Tide jobbet jeg med enkle greier som å legge inn riktig data på når og hvor ting som har med busser skjer."
			header = "Tide AS"}
		else if(id===1){
			tekst = "Sist sommer malte jeg moren min sitt hus, det var en grei mulighet til å tjene penger. Jobben inkluderte å vaske og skrape den gamle malingen, også male to strøk med ny maling. Det var gøy i starten men ikke på slutten så jeg kommer ikke til å gjøre det igjen på en stund!"
			header = "Maling"}
		else if(id===2){
			tekst = "Da jeg ble 18 år gammel, startet jeg mitt eget AS, der jeg er eier og daglig leder. Foreløpig miner jeg kryptovaluta, men skal utvide til andre typer investering/spekulering i fremtiden. Det er ganske gøy men en del arbeid."
			header = "Teo AS"}
		else if(id===3){
			tekst = "Da jeg gikk på steinerskolen laget vi en elevbedrift som gikk ut på å lage naturlig såpe og selge den på eventuelle markeder, jeg jobbet med salg og pakking. Vi tjente greit med penger på det, men såpen var en complete scam altså."
			header = "Elevbedrift"}
		else
			{tekst = "not a page?"}

	}	

	const clamp = (number, min, max) => Math.min(Math.max(number, min), max);
	const transition_args = {
		duration: 200,
	}
	
	function prev(e) {
		cur = clamp( --cur, 0, slides.length-1 )
	}
	
	function next(e) {
		cur = clamp( ++cur, 0, slides.length-1 )
	}
	
  const ARROW_LEFT = 37;
	const ARROW_RIGHT = 39;
	function handleShortcut(e) {
        if (e.keyCode === ARROW_LEFT ) {
						prev();
        }
		    if (e.keyCode === ARROW_RIGHT ) {
            next();
        }
    }
</script>

<svelte:window on:keyup={handleShortcut} />

<div class="extra-outer-wrapper">
	<div class="outer-wrapper">
		<div class="inner-wrapper">
			{#each slides as slide, id}
				{#if id === cur}
				<div
						 style="background:{slide.bg}"
						 class="slide"
					
				>
					<img on:click={lesMer(id)} src="{slide.content}" alt="balls">	
					<div style="display:{disp}" class="bildeDesc">
						<div class="descHeader"><span>{header}</span><div on:click="{()=>visBilde()}" class="X">&#10006;</div></div>
						<div>{tekst}</div>
					</div>
                    <div class="bildeTekst">{slide.text} - <a on:click="{()=>visBilde()}">{les}</a></div>
				</div>
				{/if}
			{/each}
			<div class="controls">
				<button on:click="{()=>prev()}">
					&lt;
				</button>
				<button on:click="{()=>next()}">
					&gt;
				</button>
			</div>
		</div>
	</div>
</div>

<div class="dots">
	{#each slides as slide, i}
		<button on:click={()=>changeSlide(i)} class="dot" class:selected={cur == i}>{i+1}</button>
	{/each}
</div>
<style>
	button {
		background: transparent;
		color: #FFF;
		border-color: transparent;
		width: 3.2rem;
		height: 3.2rem;
	}
	
	button:hover{
		background: rgba(0,0,0,0.5);
	}
	
	.dots {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 8px;
	}
	
	.dot {
		width: 8px;
		height: 16px;
		background: #000;
		border-radius: 100%;
		font-size: 0;
		margin: 0.3rem;
		opacity: 0.3;
	}
	
	.dot.selected {
		opacity: 1;
	}

	.extra-outer-wrapper {
		width: 100%;
		margin: 0 auto;	}

	.outer-wrapper {
		width: 100%;
		padding: 0 0 56.25%;
		position: relative;
	}
	
	.inner-wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		position: absolute;
	}

	.controls button:first-child {
		position: absolute;
		left: 0;
		top: calc(50% - 1.2rem);
	}
	
	.controls button:last-child {
		position: absolute;
		right: 0;
		top: calc(50% - 1.2rem);
	}
	
	.slide {
		flex: 1 0 auto;
		width: 100%;
		height: 100%;
		background: red;
	  	align-items: center;
		justify-content: center;
		display: flex;
		text-align: center;
		font-weight: bold;
		font-size: 2rem;
		color: white;
	}
    .slide img {
        width:100%;
        object-fit: cover;
        max-width:100%;
        max-height: 100%;
    }
	
	.controls {
		text-align: center;
		width: 100%;
		display: block;
	}
    .bildeTekst {
        color:#f2f2f2;
        font-size:calc(1vw + 1.2rem);
        padding:8px 12px;
		position:absolute;
        bottom: 8px;
        text-align:center;
		background-color:rgba(0,0,0,0.5);
		border-radius:3px;
    }
	.bildeTekst a {
		text-decoration:underline;
		color:rgb(0,102,204);
	}
	.bildeTekst a:hover {
		cursor:pointer;
	}

	.bildeDesc {
		display:flex;
		color:#f2f2f2;
        font-size:calc(0.8vw + 0.8rem);
        padding:8px 12px;
        position:absolute;
        top: 5%;
        text-align:center;
		background-color:rgba(0,0,0,0.6)
	}
	.descHeader {
		background-color: rgba(0,0,0,0.8);
		width:100%;
		height:6%;
		margin:0px;
		display:block;
		border-radius:3px;
	}

	.X {
		width:20px;
		height:20px;
		position:absolute;
		right:3%;
		top:2%;
	}
	.X:hover {
		cursor:pointer;
	}
</style>