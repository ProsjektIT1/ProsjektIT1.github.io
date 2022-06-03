<svelte:head>
    <title>Youtube</title>
</svelte:head>


<script>
let videoID = 0

let videoer = [
    "https://www.youtube.com/embed/vTylSBbaBfA", "https://www.youtube.com/embed/C9vbX4zXBK8","https://www.youtube.com/embed/W1bTE6rQGiw","https://www.youtube.com/embed/REjV47Bj-2o","https://www.youtube.com/embed/2TMySS2iOR8","https://www.youtube.com/embed/EAH2TnzYdGs","https://www.youtube.com/embed/dpy2eRbRAls","https://www.youtube.com/embed/thcisl9LKMs"
]

const video = () => {
    videoID = Math.floor(Math.random() * (7 + 1));
}


</script>
<style>
    .container{
        width:100;
        height:70%;
    }
    .header{
        font-size:calc(1vw + 0.5rem);
        margin:auto;
        width:100%;
        text-align:center;
    }
    .midt{
        text-align:center;
        width:50%;
        margin:auto;
        margin-top:10px;
        font-size:calc(0.666vw + 0.2rem);
    }
    .bar{
        margin:auto;
        margin-top:-10px;
        background-color: black;
        width:calc(8vw + 20px);
        height:calc(0.8vw + 10px);
        font-size:0;
    }
    .videoContainer {
        position:relative;
        overflow:hidden;
        width:100%;
        padding-top:56.25%;
    }
    .video{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .button{
        background:linear-gradient(0.375turn, #ABD699, #75C9B7);
        width:60%;
        height:30%;
        font-size:calc(0.666vw + 1.3rem);
        padding:2%;
        margin:auto;
        margin-bottom:4%;
        border-radius:1vw;
        text-align:center;
    }
    .button:hover{
        cursor:pointer;
    }
</style>
<div class="container">
    <div class="header"><h1>Random video generator</h1></div>
    <div class="bar">bar</div>
    <div class="midt"><h1>Klikk på knappen for å generere en tilfeldig youtube video fra min kanal</h1></div>
</div>

<div on:click={()=>video()} class="button">Generer tilfeldig video</div>
<div class="videoContainer">
<iframe class="video" src={videoer[videoID]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>