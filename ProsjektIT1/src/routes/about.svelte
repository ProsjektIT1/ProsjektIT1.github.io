<svelte:head>
	<title>About</title>
</svelte:head>
<script>

let nextAge = 18
let birthdate = new Date("04/05/2004")
var today = new Date();
var time = String(today.getTime());
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var today = new Date(mm + '/' + dd + '/' + yyyy);
console.log(today);
console.log(time);
console.log(birthdate   );
console.log(today.getTime());
console.log(birthdate.getTime());
var Age_Difference_In_Time = time - (birthdate.getTime());
let Age_Difference_In_Days = (Age_Difference_In_Time / (1000 * 3600 * 24*365.21));
console.log(Age_Difference_In_Time);
console.log(Age_Difference_In_Days);

const nextageing = () => {
if(Age_Difference_In_Days <= 19){
    nextAge = 19}
else if(Age_Difference_In_Days >= 20){
    nextAge = 20}}
nextageing();

var date1 = new Date("04/05/2004")
var date2 = date1.getTime() + (nextAge*31554189473)

var burger = date2 - today

// To calculate the time difference of two dates
var Difference_In_Time = date2 - today.getTime();
  
// To calculate the no. of days between two dates
let Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));

//To display the final no. of days (result)	
console.log("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + today + " is: <br> " 
               + Difference_In_Days);

</script>

<style>
    h1 {
        font-size:2.4rem;
        text-align:center;
    }
    span {
        font-size:1.4rem;
    }
    .container {
        background:linear-gradient(0.375turn, #ABD699, #75C9B7);
        padding:1%;
        display:flex;
        flex-wrap: wrap;
        border-radius:1%;
        width:100%;
    }
    .header {
        background:rgba(255,255,255,0.6);
        border-radius:5px;
        padding:1%;
        width:100%;
        order:0;
        
    }
    .info {
        background:rgba(255,255,255,0.6);
        padding:1%;
        margin:1% 0px 1% 0px;
        border-radius:5px;
        order:1;
        width:100%;
        padding:1% 2% 1% 2%;
    }
    .teamet {
        order:2;
        width:100%;
        display:flex;
    }
    .teametb {
        margin:0.7%;
        margin-bottom:0;
    }
    .teameta {
        margin-left:0;
    }
    .teametc {
        margin-right:0;
    }
    .teametb img {
        width:100%;
        border-radius:2%;
        
    }
    .teamDesc1,.teamDesc2,.teamDesc3{
        background-color:rgba(0,0,0,0.5);
        position:absolute;
        font-size:1.2vw;
        padding:0.9% 1.8%;
        color:white;
        top:73.4%;
        border-radius:2%;
    }
    .teamDesc1{
        left:6.9%;
    }
    .teamDesc2{
        left:37.7%;
    }
    .teamDesc3{
        left:68.6%;
    }
    .teamDesc4{
        background:rgba(255,255,255,0.6);
        padding:1% 2% 1% 2%;
        margin:1% 0px 1% 0px;
        border-radius:5px;
        order:3;
        width:100%;
        font-size:1.4rem;
    }
    .relevant{
        position:absolute;
        top:1000px;
        font-size:10px;
    }
</style>
<div class="container">
    <div class="header">
        <h1><strong>Møt det verdensberømte teamet vårt! </strong></h1>
    </div>
    <div class="info">
        <span>Our team is your team. When your mission is to be better, faster and smarter, you need the best people driving your vision forward. You need people who can create focused marketing strategies that align with business goals, who can infuse their creativity into groundbreaking campaigns, and who can analyze data to optimize every tactic along the way. You need Teo AS. Get to know your team below.*<br>
    </div>
    <div class="teamet">
        <div class="teametb teameta"><img src="https://pbs.twimg.com/profile_images/1313579240051412992/mkHGgIOZ_400x400.jpg"></div>
        <div class="teametb"><img src="https://pbs.twimg.com/profile_images/1313579240051412992/mkHGgIOZ_400x400.jpg"></div>
        <div class="teametb teametc"><img src="https://pbs.twimg.com/profile_images/1313579240051412992/mkHGgIOZ_400x400.jpg"></div>  
    </div>
    <div class="teamDesc1">- Teodor Log Bjørvik<br>Eier</div>
    <div class="teamDesc2">- Teodor Log Bjørvik<br>Daglig Leder</div>
    <div class="teamDesc3">- Teodor Log Bjørvik<br>Swag</div>
    <div class="teamDesc4"><strong>Vi blir {nextAge} år gamle om {Difference_In_Days} dager.**</strong></div>
    
</div>
<div class="relevant">*Jeg stjal denne teksten fra google<br>
    **Ikke særlig relevant, men jeg brukte en stund på å lage en javascript code som alltid regner ut min nøyaktige alder og dager til bursdag.<br> Den nøyaktige alderen akkurat nå er: {Age_Difference_In_Days} år.</div>