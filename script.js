const questions = [
  "Kya tum ready ho thoda sa pyaar mehsoos karne ke liye?",
  "Kya tumhe bhi meri yadoon me khoye rehna pasnd hai?",
  "Tula mazya dolyat khrr prem diste ka 👀?",
  "Tufakt  majhya sapnat nahi, majhya life madhe yeshil ka?",
  "Mi engineer banaycha ahe, pan tujhya smile che calculation jamtay mala… try karu ka?",
  "Mi coffee nahi, pan tujhya sobtine roz garam hoto… jamel ka ? chee ha chan navhta",
  "Last question — Kya ek cute date per chalogi mere sath ? jab bhi teri mummy aane de💍"
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
  document.getElementById("popupText").innerText = "Oye aisa kya abi theek hai n 💔😭 Mala  -No-  bolun jashil tari kuthe 😎";
  document.getElementById("popupButtons").style.display = "none";
}

window.onload = function () {
  document.getElementById("mainContent").classList.add("blurred");
};


function showLoveMessage() {
  document.getElementById("loveMessage").style.display = "block";
}

