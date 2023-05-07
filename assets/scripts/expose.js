window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.querySelector("#expose img");
  const soundButton = document.querySelector("#expose button");
  const audioPlayer = document.querySelector("#expose audio");
  const volumeController = document.getElementById("volume");
  const volumeIcon = document.querySelector("#volume-controls img");

  hornSelect.addEventListener("change", () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    audioPlayer.src = `assets/audio/${horn}.mp3`;
  });

  volumeController.addEventListener("input", () => {
    const volume = volumeController.value;
    audioPlayer.volume = volume / 100;
    if (volume == 0) {
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  soundButton.addEventListener("click", () => {
    if (hornSelect.value == "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    audioPlayer.play();
  });
}
