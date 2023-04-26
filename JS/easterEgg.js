"use strict";

const button = document.querySelector(".mobileButton");
const sound = document.querySelector(".sound");
button.addEventListener("click", (_) => {
  sound.play();
});
button.addEventListener("click", easterEggActivate);

function pageResize() {
  console.log("page resize begin");
  const bodyDiv = document.querySelector(".bodyDiv");
  bodyDiv.classList.add("easterEgg");
}

function revealChris() {
  let chrisLeft = document.getElementById("chrispointleft");
  let chrisRight = document.getElementById("chrispointright");
  chrisLeft.className = "revealed";
  chrisRight.className = "revealed";
}
function revealChrisHead() {
  let chrisHead1 = document.getElementById("chrisfloathead");
  let chrisHead2 = document.getElementById("chrisfloatheads");
  let chrisHeadVR = document.getElementById("chrisfloatvr");
  chrisHead1.className = "revealed";
  chrisHead2.className = "revealed";
  chrisHeadVR.className = "revealed";
}

function changeBackground() {
  let HTML = document.querySelector("html");
  let body = document.querySelector("body");
  body.className = "chrisbackground";
  HTML.className = "chrisbackground";
}
function loadingBar() {
  let loadingBar = document.getElementById("loadingbar");
  loadingBar.className = "revealed";
}
function revealText() {
  let easterEggText = document.getElementById("eastereggtext");
  easterEggText.className = "revealed";
}

function pageReset() {
  location.reload();
}

function revealReset() {
  let easterText = document.getElementById("eastereggtext");
  easterText.textContent = `Result (!RESPONSIVE)`;
  easterText.className = "result";
}

function easterEggActivate() {
  setTimeout(pageResize, 19500);
  // setTimeout(pageResize, 15000);
  setTimeout(revealChris, 500);
  setTimeout(changeBackground, 7000);
  // setTimeout(changeBackground, 7);
  setTimeout(revealChris, 500);
  setTimeout(revealChrisHead, 35230);
  setTimeout(loadingBar, 7000);
  setTimeout(revealText, 19500);
  setTimeout(revealReset, 53500);
  setTimeout(pageReset, 57500);
}
