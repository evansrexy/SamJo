document.addEventListener("DOMContentLoaded", function () {

    const enterBtn = document.getElementById("enter-btn");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const music = document.getElementById("bg-music");

    mainContent.style.opacity = "0";

    enterBtn.addEventListener("click", function () {

        // 🎵 Start Music
        music.volume = 1.0;
        music.play();

        // Fade out intro
        introScreen.style.opacity = "0";
        introScreen.style.visibility = "hidden";

        // Show main content
        mainContent.style.opacity = "1";
    });

});


// Fade In On Scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
