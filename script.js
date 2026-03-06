function playMusic(){

const music=document.getElementById("music");

music.play();

}



// Fade animation

const slides=document.querySelectorAll(".slide");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";

}

});

});

slides.forEach(slide=>{

slide.style.opacity=0;

slide.style.transform="translateY(40px)";

slide.style.transition="1s";

observer.observe(slide);

});
