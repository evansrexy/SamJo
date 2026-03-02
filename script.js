const enterBtn = document.getElementById("enter-btn");
const introScreen = document.getElementById("intro-screen");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bg-music");

enterBtn.addEventListener("click", function() {

    // 🎵 Start Music (100% works because user clicked)
    music.volume = 1.0;
    music.play();

    // ✨ Fade Out Intro
    introScreen.style.opacity = "0";
    introScreen.style.visibility = "hidden";

    // 🌸 Show Main Content
    mainContent.style.opacity = "1";
});
