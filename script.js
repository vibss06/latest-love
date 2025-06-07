const questions = [
  "Do you love me? 💖",
  "Will you stay with me forever? 💍",
  "Am I the reason behind your smile? 😊",
  "Can I call you my soulmate? 🌙",
  "Do I make your heart skip a beat? 💓"
];

let currentQuestion = 0;

const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const noMessage = document.getElementById("no-message");
const surpriseMessage = document.getElementById("surprise-message");
const finalLove = document.getElementById("final-love");

window.onload = () => {
  popup.classList.remove("hidden");
  popupText.innerText = questions[currentQuestion];
};

function handleAnswer(answer) {
  if (!answer) {
    popup.classList.add("hidden");
    noMessage.classList.remove("hidden");
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    popupText.innerText = questions[currentQuestion];
  } else {
    popup.classList.add("hidden");
    surpriseMessage.classList.remove("hidden");
  }
}

function showFinalLove() {
  finalLove.classList.remove("hidden");
}

