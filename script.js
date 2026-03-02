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
/* 📍 LOCATION QR SECTION */

.location-section {
    margin-top: 40px;
    text-align: center;
}

.location-section h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #5a0f1c;
}

.location-section p {
    margin-bottom: 15px;
    font-size: 16px;
}

.qr-box {
    display: inline-block;
    padding: 15px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    transition: 0.3s ease;
}

.qr-box img {
    width: 180px;
    height: 180px;
}

.qr-box:hover {
    transform: scale(1.05);
}

.scan-text {
    margin-top: 10px;
    font-size: 14px;
    color: #777;
}
