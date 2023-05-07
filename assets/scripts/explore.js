// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const speechButton = document.querySelector("button");
  const textToSpeech = document.getElementById("text-to-speak");
  const faceImage = document.querySelector("img");

  function getVoiceList() {
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = voices[i].name + " " + "(" + voices[i].lang + ")";
      option.setAttribute("voiceLang", voices[i].lang);
      option.setAttribute("voiceName", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = getVoiceList;
  }
  speechButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeech.value);
    const selectedVoiceName =
      voiceSelect.selectedOptions[0].getAttribute("voiceName");
    const voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedVoiceName) {
        utterance.voice = voices[i];
        break;
      }
    }
    utterance.addEventListener("start", () => {
      faceImage.src = "assets/images/smiling-open.png";
    });
    utterance.addEventListener("end", () => {
      faceImage.src = "assets/images/smiling.png";
    });
    synth.speak(utterance);
  });
}
