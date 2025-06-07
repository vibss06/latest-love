const questions = [
  "Kya tum ready ho thoda sa pyaar mehsoos karne ke liye?",
  "Kya tum mere saath hamesha rehna chahogi?",
  "Kya tum mujhe kabhi nahi bhoologi?",
  "Kya tum mujhe apna maanogi dil se?",
  "Last question — Kya tum iss pyare safar ke liye haan kahogi? 💍"
];

let currentQuestion = 0;

function nextPopup() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    document.getElementById("popupText").innerText = questions[currentQuestion];
  } else {
    document.getElementById("popupBox").style.display = "none";
    document.getElementById("surpriseMessage").style.display = "block";
    document.getElementById("mainContent").classList.remove("blurred");
  }
}

function rejectPopup() {
  document.getElementById("popupText").innerText = "Oye hoye... dil toot gaya 💔😭 Par ek din tum bhi manaogi 😎";
  document.getElementById("popupButtons").style.display = "none";
}

window.onload = function () {
  document.getElementById("mainContent").classList.add("blurred");
};
