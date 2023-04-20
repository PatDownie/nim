"use strict";

// Mobile Responsive

const button = document.querySelector(".mobileButton");
const sound = document.querySelector(".sound");
button.addEventListener("click", (_) => {
  sound.play();
});

// Savestats

// Loadstat

function loadStats() {
  let getStats = localStorage.getItem("saveStats");
  if (getStats) {
    stats = JSON.parse(getStats);
  }
}

// Render Results

function renderStats() {
  let divSelect = document.querySelector("#statView");
  let divh2 = document.createElement("h2");
  divh2.textContent = `Your Stats!`;
  divSelect.appendChild(divh2);
  for (let i = 0; i < stats.length; i++) {
    let p = document.createElement("p");
    p.textContent = `Your total of plays is ${stats[i].gamesPlayed} and you managed to save ${stats[i].ducksTaken} ducks, which gives you an average of ${stats[i].avgDucksPerGame} per game. You've won ${stats[i].gamesWon} games, that's just terrible`;
    divSelect.appendChild(p);
  }
}

function renderWarning() {
  let divSel = document.querySelector("#statView");
  let divTitle = document.createElement("h2");
  divTitle.textContent = "Nice try!";
  divSel.appendChild(divTitle);
  let divWarn = document.createElement("p");
  divWarn.textContent = "Nice try dummy, play the game first to get stats. Do you even know what stats are? - From, The Super Smart Computer.";
}

function renderChart() {
  if (!getStats) {
    renderWarning();
  } else {
    loadStats();
    renderStats();
  }
}

renderChart();
