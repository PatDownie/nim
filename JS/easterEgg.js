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

function easterEggActivate() {
  // setTimeout(pageResize, 19500);
  setTimeout(pageResize, 500);
}
