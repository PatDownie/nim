"use strict";

let totalNimElements = 12;

let turnCounter = 0;

let ducksTakenThisGame;

let mockeryArray = [
  "You're quackers!",
  "You were a sitting duck all along!",
  "You ugly duckling!",
  "Waddle away, fool!",
  "Your brain needs debugging!",
  "What the duck did you just ducking say to me you little duck? I'll have you know I graduated top of my class in the navy ducklings and h...",
  "Even french Jeremy couldn't beat me!",
  "const yourBrain = null;",
  "const you = stupid;",
  'function mockery(){let mockery = "hahaha!"; return mockery;};',
  "I've got a 'variable' to declare! You suck!!",
  "!youWin",
];
// let mockeryArray = ['function mockery(){let mockery = "hahaha!"; return mockery;};'];

function revealDucksworth() {
  document.getElementById("computer").className = "compStatic";
  document.getElementById("ducksworth").className = "revealed";
  document.getElementById("ducksworth-arm").className = "revealed";
  document.getElementById("ducksworth-claw1").className = "revealed";
  document.getElementById("ducksworth-claw2").className = "revealed";
}
function hideDucksworth() {
  document.getElementById("ducksworth").className = "hidden";
  document.getElementById("ducksworth-arm").className = "hidden";
  document.getElementById("ducksworth-claw1").className = "hidden";
  document.getElementById("ducksworth-claw2").className = "hidden";
}

function randomMockery() {
  let random = Math.floor(mockeryArray.length * Math.random());
  let mockery = mockeryArray[random];
  speechText.className = "";
  speechText.textContent = mockery;
}

function resetGame() {
  nimDiv.innerHTML = "";
  armsDiv.innerHTML = "";
  clawsDiv1.innerHTML = "";
  clawsDiv2.innerHTML = "";
  buttonDiv.innerHTML = "";
  hideDucksworth();
  beginNim(totalNimElements);
}

const nimDiv = document.getElementById("nimdiv");
const armsDiv = document.getElementById("armsdiv");
const clawsDiv1 = document.getElementById("clawsdiv1");
const clawsDiv2 = document.getElementById("clawsdiv2");
const buttonDiv = document.getElementById("buttondiv");
const resetDiv = document.getElementById("resetdiv");
const speechText = document.getElementById("speechText");

buttonDiv.addEventListener("click", handlePlayerMove);
resetDiv.addEventListener("click", resetGame);

function activateAllButtons() {
  buttonDiv.addEventListener("click", handlePlayerMove);
  buttonDiv.className = "active";
  resetDiv.addEventListener("click", resetGame);
  resetDiv.className = "active";
}

function activateResetButton() {
  resetDiv.addEventListener("click", resetGame);
  resetDiv.className = "active";
}

function deactivateAllButtons() {
  buttonDiv.removeEventListener("click", handlePlayerMove);
  buttonDiv.className = "inactive";
  resetDiv.removeEventListener("click", resetGame);
  resetDiv.className = "inactive";
}

function beginNim(nimNumber) {
  document.getElementById("computer").className = "compStatic";
  speechText.className = "";
  speechText.textContent = "You dare challenge me??";
  turnCounter = 0;
  ducksTakenThisGame = 0;
  buttonDiv.className = "active";
  resetDiv.className = "active";
  for (let i = 0; i < nimNumber; i++) {
    if (i == nimNumber - 1) {
      let nimElementDiv = document.createElement("div");
      nimElementDiv.className = "unremoved";
      let duckyImg = document.createElement("img");
      duckyImg.src = "images/angel-ducky.gif";
      nimElementDiv.appendChild(duckyImg);
      nimDiv.appendChild(nimElementDiv);
    } else {
      let nimElementDiv = document.createElement("div");
      nimElementDiv.className = "unremoved";
      let duckyImg = document.createElement("img");
      duckyImg.src = "images/ducky.gif";
      nimElementDiv.appendChild(duckyImg);
      nimDiv.appendChild(nimElementDiv);
    }
  }

  for (let i = 0; i < nimNumber; i++) {
    let armElementDiv = document.createElement("div");
    armElementDiv.className = "unremoved";
    let mainArmImg = document.createElement("img");
    mainArmImg.src = "images/main-noclaw.png";
    armElementDiv.appendChild(mainArmImg);
    armsDiv.appendChild(armElementDiv);
  }

  for (let i = 0; i < nimNumber; i++) {
    let clawElementDiv = document.createElement("div");
    clawElementDiv.className = "unremoved";
    let clawImg = document.createElement("img");
    clawImg.src = "images/claw-leftopenclaw.png";
    clawElementDiv.appendChild(clawImg);
    clawsDiv1.appendChild(clawElementDiv);
  }

  for (let i = 0; i < nimNumber; i++) {
    let clawElementDiv = document.createElement("div");
    clawElementDiv.className = "unremoved";
    let clawImg = document.createElement("img");
    clawImg.src = "images/claw-openclaw.png";
    clawElementDiv.appendChild(clawImg);
    clawsDiv2.appendChild(clawElementDiv);
  }

  for (let i = 0; i < 3; i++) {
    let buttonElementDiv = document.createElement("div");
    buttonElementDiv.textContent = "Take " + (i + 1);
    buttonElementDiv.id = i + 1;
    buttonDiv.appendChild(buttonElementDiv);
  }
  let nimElements = document.querySelectorAll("#nimdiv div");
  for (let i = 0; i < nimElements.length; i++) {
    nimElements[i].addEventListener("animationend", function () {
      nimElements[i].style.opacity = "0";
    });
  }
  activateAllButtons();
}

function randomTimeoutTime(min, max) {
  const milliseconds = Math.round(min + (max - min) * Math.random());
  // console.log("delay (ms): " + milliseconds);
  return milliseconds;
}

function handlePlayerMove(event) {
  if (event.target.id == 1 || event.target.id == 2 || event.target.id == 3) {
    deactivateAllButtons();
    let removedDivs = event.target.id;

    document.getElementById("computer").className = "compThink";
    speechText.textContent = "hmmm...";
    speechText.className = "thinking";

    let divForRemoval;
    for (let i = 0; i < removedDivs; i++) {
      divForRemoval = document.querySelector("#nimdiv div.unremoved");
      divForRemoval.className = "player-removed";
      let robotArm = document.querySelector("#armsdiv div.unremoved");
      robotArm.className = "player-removed";
      let robotClaw1 = document.querySelector("#clawsdiv1 div.unremoved");
      robotClaw1.className = "player-removed";
      let robotClaw2 = document.querySelector("#clawsdiv2 div.unremoved");
      robotClaw2.className = "player-removed";
      ducksTakenThisGame++;
      // console.log("ducksTakenThisGame " + ducksTakenThisGame);
    }
    function computerTurn() {
      let computerRemovedDivs = 4 - event.target.id;

      document.getElementById("computer").className = "compStatic";

      for (let i = 0; i < computerRemovedDivs; i++) {
        let divForRemoval = document.querySelector("#nimdiv div.unremoved");
        divForRemoval.className = "computer-removed";
        let robotArm = document.querySelector("#armsdiv div.unremoved");
        robotArm.className = "computer-removed";
        let robotClaw1 = document.querySelector("#clawsdiv1 div.unremoved");
        robotClaw1.className = "computer-removed";
        let robotClaw2 = document.querySelector("#clawsdiv2 div.unremoved");
        robotClaw2.className = "computer-removed";
      }
      speechText.className = "";
      speechText.textContent = "I'll take " + computerRemovedDivs + "!";
      turnCounter++;
      if (turnCounter === 3) {
        document.getElementById("computer").className = "compSmug";
        // alert("you lose dumbass!!!");
        saveStats();
        setTimeout(activateResetButton, 4000);
        setTimeout(randomMockery, 4000);
        setTimeout(revealDucksworth, 4000);
      } else {
        setTimeout(activateAllButtons, 4000);
      }
    }
    setTimeout(computerTurn, randomTimeoutTime(1600, 3500));
  }
}

beginNim(totalNimElements);

// ----------------stats section--------------------
// ----------------vvvvvvvvvvvvvv-------------------

let stats = {};

function gameLoadStats() {
  let getStats = localStorage.getItem("savedStats");
  if (getStats) {
    stats = JSON.parse(getStats);
  } else {
    stats = {
      gamesPlayed: 0,
      ducksTaken: 0,
      avgDucksPerGame: 0,
      gamesWon: 0,
    };
  }
  console.log(stats);
}

function saveStats() {
  gameLoadStats();
  stats.gamesPlayed++;
  stats.ducksTaken += ducksTakenThisGame;
  stats.avgDucksPerGame = stats.ducksTaken / stats.gamesPlayed;
  stats.gamesWon = 0;
  let savedStats = JSON.stringify(stats);
  console.log(savedStats);
  localStorage.setItem("savedStats", savedStats);
}
