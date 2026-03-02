function scrollToSection() {
    document.querySelector('.invitation').scrollIntoView({
        behavior: 'smooth'
    });
}

window.addEventListener("load", function () {
    const music = document.getElementById("bg-music");

    // Try to play automatically
    music.play().then(() => {
        console.log("Music playing");
    }).catch(() => {
        console.log("Autoplay blocked");
    });
});


