document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById("playButton");
    const bgMusic = document.getElementById("bgMusic");
    const vinyl = document.querySelector(".vinyl");
  
    playButton.addEventListener("click", () => {
      if (bgMusic.paused) {
        bgMusic.play();
        playButton.textContent = "Pause";
        vinyl.classList.add("spinning");
      } else {
        bgMusic.pause();
        playButton.textContent = "Play";
        vinyl.classList.remove("spinning");
      }
    });
  });