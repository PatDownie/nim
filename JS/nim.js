let totalNimElements = 12;

function beginNim(nimNumber) {
  turnCounter = 0;
  const nimDiv = document.getElementById("nimdiv");
  for (let i = 0; i < nimNumber; i++) {
    let nimElementDiv = document.createElement("div");
    nimDiv.appendChild(nimElementDiv);
  }
  const buttonDiv = document.getElementById("buttondiv");
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

let turnCounter = 0;

function handlePlayerMove(event) {
  buttonDiv.removeEventListener("click", handlePlayerMove);
  let removedDivs = event.target.id;
  document.getElementById("compStatic").id = "compThink";
  const nimDiv = document.getElementById("nimdiv");
  for (let i = 0; i < removedDivs; i++) {
    let divForRemoval = nimDiv.lastElementChild;
    nimDiv.removeChild(divForRemoval);
  }
  function computerTurn() {
    let computerRemovedDivs = 4 - event.target.id;
    console.log("pc takes: " + computerRemovedDivs);
    alert(`pc takes ${computerRemovedDivs}`);
    document.getElementById("compThink").id = "compStatic";
    for (let i = 0; i < computerRemovedDivs; i++) {
      let divForRemoval = nimDiv.lastElementChild;
      nimDiv.removeChild(divForRemoval);
    }
    turnCounter++;
    if (turnCounter === 3) {
      document.getElementById("compStatic").id = "compSmug";
      alert("you lose dumbass!!!");
    } else {
      buttonDiv.addEventListener("click", handlePlayerMove);
    }
  }
  setTimeout(computerTurn, randomTimeoutTime(800, 3000));
}

beginNim(totalNimElements);

const buttonDiv = document.getElementById("buttondiv");
buttonDiv.addEventListener("click", handlePlayerMove);
