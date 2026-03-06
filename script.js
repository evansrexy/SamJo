function startInvite(){

document.getElementById("music").play();

}


// Countdown

const weddingDate = new Date("Aug 22, 2026").getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = weddingDate - now;

let days = Math.floor(distance/(1000*60*60*24));

document.getElementById("countdown").innerHTML = days+" Days Remaining";

},1000);


// Falling Petals

for(let i=0;i<20;i++){

let petal=document.createElement("img");

petal.src="https://pngimg.com/uploads/rose_petals/rose_petals_PNG51177.png";

petal.className="petal";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(petal);

}
