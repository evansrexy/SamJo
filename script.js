// Enter Invite

function enterInvite(){

document.querySelector(".intro").style.display="none";

document.getElementById("invite").style.display="block";

}


// Countdown

const weddingDate = new Date("Aug 22, 2026 00:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = weddingDate - now;

const days = Math.floor(distance/(1000*60*60*24));

document.getElementById("countdown").innerHTML = days + " Days Remaining";

},1000);


// Music

const music = document.getElementById("music");

const btn = document.getElementById("musicBtn");

let playing=false;

btn.onclick=function(){

if(!playing){

music.play();

btn.innerHTML="🔊";

playing=true;

}

else{

music.pause();

btn.innerHTML="🎵";

playing=false;

}

}
