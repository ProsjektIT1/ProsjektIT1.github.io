


















































<svelte:head>
<html lang="en">
    <title>Work</title>
</svelte:head>
<style>
* {
    box-sizing:border-box;
}

/*Plassering og størrelse */
.slideshow-container {
    max-width:1000px;
    position:relative;
    margin:auto;
}

.mineSlides {
    display:none;
}

img {
    vertical-align:middle;
}

.nummerTekst {
    color:#f2f2f2;
    font-size:12px;
    padding:8px 12px;
    position:absolute;
    top:0;
}

.bildeTekst {
    color:#f2f2f2;
    font-size:15px;
    padding:8px 12px;
    position:absolute;
    bottom: 8px;
    text-align:center;
}

/* neste og forrige knapper [piler]*/
.forrige, .neste {
    cursor:pointer;
    position:absolute;
    top:50%;
    width:auto;
    padding:16px;
    margin-top:-22px;
    color:white;
    font-weight:bold;
    font-size:18px;
    transition: 0.6s ease;
    border-radius:0 3px 3px 0;
    user-select: none;
}

/*Ender bakgrunnsfarge når musepekeren er over pilene*/
.forrige:hover, .neste:hover {
    background-color: rgba(0,0,0,0.8);
}

.neste {
    right:0;
    border-radius:3px 0 0 3px;
}

.dott{ 
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
}

.active, .dott:hover {
    background-color: #717171;
  }

/* Fading animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
  }
  
  @-webkit-keyframes fade {
    from {opacity: 0.4}
    to {opacity: 1}
  }
  
  @keyframes fade {
    from {opacity: 0.4}
    to {opacity: 1}
  }

  @media only screen and (max-width:300px) {
      .forrige, .neste, .bildeTekst {
          font-size:11px;
      }
  }    
</style>
<script>
    import buss from 'buss.jpg'
    import sunglas from 'sunglas.jpg'
    import placeholder from 'placeholder.jpg'
    import soap from 'skolen.jpg'
    import maling from 'maling.jpg'

let selectedIndex = 1

const minusSlide = () => {
    selectedIndex--
}

const plusSlide = () => {
    selectedIndex++
}
const CurrentSlide = (a) => {
    selectedIndex  = a
}



</script>
<h1>Tidligere arbeid</h1>

<h2>TIDE AS<br>
    Steinerskolen elevbedrift<br>
    idk fucking painting hus<br>
    min egen gpu-rig <img style="margin-bottom:-7px;width:35px" alt="sunglas" src="{sunglas}">
</h2>

<h1>Slideshow fra Venezia</h1>
    <div class="slideshow-container">
        <div class="mineSlides fade">
            <div class="nummerTekst">1 / 4</div>
                <img src="{buss}" alt="Bilde fra Venezia" style="width:100%;">
                <div class="bildeTekst">Jeg jobbet hos Tide AS i en uke i 10.klasse fordi "arbeidsuke"</div>
        </div>
        <div class="mineSlides fade">
            <div class="nummerTekst">2 / 4</div>
                <img src="{soap}" alt="Bilde fra Venezia" style="width:100%;">
                <div class="bildeTekst">Jeg jobbet i en elevbedrift på Steinerskolen en stund der vi lagde og solgte såpe. Complete scam by the way, ez money.</div>
        </div>
        <div class="mineSlides fade">
            <div class="nummerTekst">3 / 4</div>
                <img src="{maling}" alt="Bilde fra Venezia" style="width:100%;">
                <div class="bildeTekst">Jeg har malt hus.</div>
        </div>
        <div class="mineSlides fade">
            <div class="nummerTekst">4 / 4</div>
                <img src="{placeholder}" alt="Bilde fra Venezia" style="width:100%;">
                <div class="bildeTekst">Jeg bygger og vedlikeholder gpu rig so i make money.</div>
        </div>

        <a class="forrige" onclick="plusSlides(-1)">&lt;</a>
        <a class="neste" onclick="plusSlides(1)">&gt;</a>

    </div>

    <br>

    <div style="text-align: center;">
        <span class="dott" onclick="currentSlide(1)"></span>
        <span class="dott" onclick="currentSlide(2)"></span>
        <span class="dott" onclick="currentSlide(3)"></span>
        <span class="dott" onclick="currentSlide(4)"></span>
    </div>