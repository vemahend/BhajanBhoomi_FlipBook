function reloadPage() {
    location.reload();
}

var audio = document.getElementById("myAudio");
var playPauseBtn = document.getElementById("playPauseBtn");
var muteBtn = document.getElementById("muteBtn");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = "⏸️"; // Pause icon
    } else {
        audio.pause();
        playPauseBtn.innerHTML = "▶️"; // Play icon
    }
}

function toggleMute() {
    audio.muted = !audio.muted;
    muteBtn.innerHTML = audio.muted ? "🔇" : "🔊"; // Change icon
}