// Smooth Scroll
function scrollToInvite() {
    document.querySelector(".invitation").scrollIntoView({
        behavior: "smooth"
    });
}

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


// 🔥 FORCE AUTO MUSIC PLAY
window.addEventListener("DOMContentLoaded", function () {

    const music = document.getElementById("bg-music");

    if (!music) return;

    music.volume = 1.0;
    music.muted = false;
    music.setAttribute("playsinline", "true");

    function forcePlay() {
        let playAttempt = music.play();

        if (playAttempt !== undefined) {
            playAttempt.then(() => {
                console.log("Music autoplay success");
            }).catch(() => {

                // If blocked → Try muted trick
                music.muted = true;

                music.play().then(() => {
                    setTimeout(() => {
                        music.muted = false;
                        music.volume = 1.0;
                    }, 500);
                }).catch(() => {
                    console.log("Autoplay blocked completely by browser.");
                });

            });
        }
    }

    // Try multiple times (stronger forcing)
    forcePlay();
    setTimeout(forcePlay, 500);
    setTimeout(forcePlay, 1500);
    setTimeout(forcePlay, 3000);
});


// Toggle Button
function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
