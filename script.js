function scrollToSection() {
    document.querySelector('.invitation').scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener("click", function () {
    const music = document.getElementById("bg-music");
    music.play();
}, { once: true });

function toggleMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
