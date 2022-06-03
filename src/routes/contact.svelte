<svelte:head>
    <title>Kontakt</title>
</svelte:head>


<script>



let Value=""




const visDiscord = () => {
    Value = "Discord"
}
const visMail = () => {
    Value = "Mail"
}
const visTLF = () => {
    Value = "TLF"
}
const visSnap = () => {
    Value = "Snap"
}
const visMonke = () => {
    Value = "Monke"
}

</script>
<style>
    .container{
        width:100;
        height:70%;
    }
    .header{
        font-size:calc(1vw + 0.3rem);
        margin:auto;
        width:100%;
        text-align:center;
    }
    .midt{
        text-align:center;
        margin-top:10px;
        font-size:calc(0.666vw + 0.2rem)
    }
    .bar{
        background-color: black;
        width:calc(10vw + 20px);
        height:calc(1vw + 10px);
        margin:auto;
        font-size:0;
    }
    .Kontakt{
        width:19%;
        margin:1%;
        height:calc(4vw + 3rem);
        background:linear-gradient(0.375turn, #ABD699, #75C9B7);
    }
    .Kontakt span {
        font-size:calc(0.5vw + 0.7rem);
    }
    .Kontakt img {
        margin-top:-20px;
    }
    img{
        width:75%;
    }
    .containerKontakt{
        display: flex;
        margin-top:8%;
    }
    .kontaktButton {
        width:100%;
        height:20%;
        margin:auto;
        background-color: #C7DDCC;
        text-align:center;
        border-radius: 5px;
        cursor:pointer;
        font-size:calc(0.5vw + 0.4rem);
        margin-top:0;
    }
    .Info{
        width:60%;
        margin:auto;
        text-align:center;
        height:125px;
    }
    .header span {
        text-decoration:overline underline;
    }
    .infoContainer {
        background:linear-gradient(0.375turn, #ABD699, #75C9B7);
        width:96%;
        padding:1%;
        margin:1%;
        font-size:calc(0.666vw + 1rem);
    }

    .infoContainer img {
        width:98%;
        margin:1%;
    }
</style>





<div class="container">
    <div class="header"><h1>Kontakt <span><b>TEODOR INC. LLC. AS.GOV</b></span></h1></div>
    <div class="bar">bar</div>
    <div class="midt"><h1>Mandag - Mandag: 07:00 - 07:01 (GMT+1)</h1></div>
    <div class="containerKontakt">
        <div class="discordKontakt Kontakt"><div class="Info"><img alt="Discord Icon" src=discord.png><br><span><b>Discord</b></span><div class="kontaktButton" on:click={visDiscord}><a>DM meg</a></div></div></div>
        <div class="emailKontakt Kontakt"><div class="Info"><img alt="Gmail Icon" src=gmail.png><br><span><b>Gmail</b></span><div class="kontaktButton" on:click={visMail}><a>Send mail</a></div></div></div>
        <div class="tlfKontakt Kontakt"><div class="Info"><img alt="TLF Icon" src=phone.png><br><span><b>Telefon</b></span><div class="kontaktButton" on:click={visTLF}><a>Ring TLF</a></div></div></div>
        <div class="snapchatKontakt Kontakt"><div class="Info"><img alt="Snapchat Icon" src=snapchat.png><br><span><b>Snapchat</b></span><div class="kontaktButton" on:click={visSnap}><a>IDKW HAT</a></div></div></div>
        <div class="monke Kontakt"><div class="Info"><img alt="MONKE" src=monke.jpg><br><span><b>MONKE</b></span><div class="kontaktButton" on:click={visMonke}><a>MONKE</a></div></div></div>
    </div>
    <div class="infoContainer">
        {#if Value === "Discord"}
            Kontaktinfo for discord er utilgjengelig
        {:else if Value === "Mail"}
            <span>Skolemail: <u>tebjorvik@elev.rogfk.no</u><br> Jobbmail: <u>teovirksomhet@gmail.com</u></span>
        {:else if Value === "TLF"}
            Personlig Telefon: <u>90062363</u>.<br>
            Bedrift Telefon: <u>mangler</u>.
        {:else if Value === "Snap"}
            Litt for personlig + idk ka det er
        {:else if Value === "Monke"}
            <img alt="balance" src="balance.png">
            <img alt="golira" src="golira.png">
            <img alt="lastbanana" src="lastbanana.jpg">
            <img alt="pov banana" src="POVBanana.jpg">
            <img alt="vibing monke" src="vibe.jfif">
            <img alt="monke icon" src="monke.jpg">
        {:else}
            Velg hvor du vil kontakte over.
        {/if}
    </div>
</div>
