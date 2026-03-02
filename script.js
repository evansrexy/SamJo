document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bg-music");

    // Force autoplay attempt
    const playAudio = () => {
        music.play().then(() => {
            console.log("Music started automatically");
        }).catch(() => {
            // If blocked, try muted autoplay (browser safe method)
            music.muted = true;
            music.play().then(() => {
                // Unmute after slight delay
                setTimeout(() => {
                    music.muted = false;
                }, 1000);
            }).catch(() => {
                console.log("Autoplay completely blocked by browser");
            });
        });
    };

    playAudio();
});
