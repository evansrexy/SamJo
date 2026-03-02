// ===============================
// 🎵 ENTER SCREEN + MUSIC CONTROL
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const enterBtn = document.getElementById("enter-btn");
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const music = document.getElementById("bg-music");

    // Hide main content initially
    mainContent.style.opacity = "0";

    // When user clicks Join Us
    enterBtn.addEventListener("click", function () {

        // 🔊 Start music (100% allowed because user clicked)
        music.volume = 1.0;
        music.play();

        // ✨ Fade out intro screen
        introScreen.style.opacity = "0";
        introScreen.style.visibility = "hidden";

        // 🌸 Show main content smoothly
        mainContent.style.opacity = "1";
    });

});


// ===============================
// 🌸 SMOOTH SCROLL FUNCTION
// ===============================

function scrollToInvite() {
    const inviteSection = document.querySelector(".invitation");
    if (inviteSection) {
        inviteSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// ===============================
// ✨ FADE-IN ON SCROLL ANIMATION
// ===============================

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


// ===============================
// 🔊 OPTIONAL: MUSIC TOGGLE (if you add button later)
// ===============================

function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (!music) return;

    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
