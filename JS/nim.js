"use strict";

let totalNimElements = 12;

let turnCounter = 0;

const buttonDiv = document.getElementById("buttondiv");
buttonDiv.addEventListener("click", handlePlayerMove);

const nimDiv = document.getElementById("nimdiv");
const armsDiv = document.getElementById("armsdiv");
const clawsDiv1 = document.getElementById("clawsdiv1");
const clawsDiv2 = document.getElementById("clawsdiv2");

let ducksTakenThisGame;

function beginNim(nimNumber) {
  turnCounter = 0;
  ducksTakenThisGame = 0;
  buttonDiv.className = "active";
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
}

function randomTimeoutTime(min, max) {
  const milliseconds = Math.round(min + (max - min) * Math.random());
  console.log("delay (ms): " + milliseconds);
  return milliseconds;
}

function activateButtons() {
  buttonDiv.addEventListener("click", handlePlayerMove);
  buttonDiv.className = "active";
}

function handlePlayerMove(event) {
  buttonDiv.removeEventListener("click", handlePlayerMove);
  buttonDiv.className = "inactive";
  let removedDivs = event.target.id;
  // document.getElementById("compStatic").id = "compThink";
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
    console.log("ducksTakenThisGame " + ducksTakenThisGame);
  }
  function computerTurn() {
    let computerRemovedDivs = 4 - event.target.id;
    // alert(`pc takes ${computerRemovedDivs}`);
    // document.getElementById("compThink").id = "compStatic";
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
    turnCounter++;
    if (turnCounter === 3) {
      // document.getElementById("compStatic").id = "compSmug";
      alert("you lose dumbass!!!");
      saveStats();
    } else {
      setTimeout(activateButtons, 4000);
    }
  }
  setTimeout(computerTurn, randomTimeoutTime(1200, 4000));
}

beginNim(totalNimElements);

let nimElements = document.querySelectorAll("#nimdiv div");
for (let i = 0; i < nimElements.length; i++) {
  nimElements[i].addEventListener("animationend", function () {
    nimElements[i].style.opacity = "0";
  });
}
// let armElements = document.querySelectorAll("#armsdiv div img");
// console.log(armElements);
// for (let i = 0; i < armElements.length; i++) {
//   armElements[i].addEventListener("animationend", function () {
//     armElements[i].src = "images/main-closedclaw.png";
//     armElements[i].className = "greg";
//   });
// }
// console.log(armElements);

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
