"use strict";

// Mobile Responsive

// const button = document.querySelector(".mobileButton");
// const sound = document.querySelector(".sound");
// button.addEventListener("click", (_) => {
//   sound.play();
// });

// Savestats

// Loadstat

let getStats;
let stats;

function loadStats() {
  getStats = localStorage.getItem("savedStats");
  if (getStats) {
    stats = JSON.parse(getStats);
  }
}

// Render Results

function renderStats() {
  let number = stats.avgDucksPerGame;
  let round_number = number.toFixed(2);
  let divSelect = document.querySelector("#statView");
  let divh2 = document.createElement("h2");
  divh2.textContent = `Your Stats!`;
  divSelect.appendChild(divh2);
  let ul = document.querySelector("#statList");
  let liPlays = document.createElement("li");
  liPlays.textContent = `Your total of plays is ${stats.gamesPlayed}.`;
  ul.appendChild(liPlays);
  let liDucks = document.createElement("li");
  liDucks.textContent = `You've managed to save ${stats.ducksTaken} ducks.`;
  ul.appendChild(liDucks);
  let liAvg = document.createElement("li");
  liAvg.textContent = `Which is an average of ${round_number} ducks per game.`;
  ul.appendChild(liAvg);
  let liGames = document.createElement("li");
  liGames.textContent = `You've won ${stats.gamesWon} games, that's just terrible.`;
  ul.appendChild(liGames);
}

function renderWarning() {
  let divSel = document.querySelector("#statView");
  let divTitle = document.createElement("h2");
  divTitle.textContent = "Nice try!";
  divSel.appendChild(divTitle);
  let divWarn = document.createElement("p");
  divWarn.textContent = "Nice try dummy, play the game first to get stats. Do you even know what stats are? From, The Super Smart V.S.Code.";
  divSel.appendChild(divWarn);
}

function renderChart() {
  loadStats();
  if (!getStats) {
    renderWarning();
  } else {
    renderStats();
  }
}

renderChart();
