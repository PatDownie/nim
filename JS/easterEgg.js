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

function easterEggActivate() {
  setTimeout(pageResize, 19500);
  // setTimeout(pageResize, 15000);
  setTimeout(revealChris, 500);
  setTimeout(changeBackground, 7000);
  setTimeout(revealChris, 500);
  setTimeout(loadingBar, 7000);
  setTimeout(revealText, 19500);
}
