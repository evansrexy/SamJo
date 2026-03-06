// MUSIC

function startMusic(){

document.getElementById("music").play();

}

// COUNTDOWN

const weddingDate = new Date("Aug 22, 2026").getTime();

setInterval(function(){

let now = new Date().getTime();

let distance = weddingDate - now;

let days = Math.floor(distance/(1000*60*60*24));

document.getElementById("countdown").innerHTML = days+" Days Remaining";

},1000);


// LIKE BUTTON

let count=0;

document.getElementById("likeBtn").onclick=function(){

count++;

document.getElementById("likeCount").innerHTML=count+" Hearts ❤️";

};


// PETALS

for(let i=0;i<20;i++){

let petal=document.createElement("img");

petal.src="petal.png";

petal.className="petal";

petal.style.left=Math.random()*100+"%";

petal.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(petal);

}


// SCRATCH EFFECT

const canvas=document.getElementById("scratch");

const ctx=canvas.getContext("2d");

ctx.fillStyle="gray";

ctx.fillRect(0,0,300,100);

let scratching=false;

canvas.addEventListener("mousedown",()=>scratching=true);

canvas.addEventListener("mouseup",()=>scratching=false);

canvas.addEventListener("mousemove",function(e){

if(scratching){

ctx.clearRect(e.offsetX,e.offsetY,30,30);

}

});
