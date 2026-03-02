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

// Auto Music Play with Fallback
window.addEventListener("load", function () {
    const music = document.getElementById("bg-music");

    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            document.addEventListener("click", function () {
                music.play();
            }, { once: true });
        });
    }
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
