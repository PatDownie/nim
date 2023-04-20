"use strict";

// Mobile Responsive

const button = document.querySelector(".mobileButton");
const sound = document.querySelector(".sound");
button.addEventListener("click", (_) => {
  sound.play();
});
