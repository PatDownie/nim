# nim

## A site where you can play the classic game of nim!

by Ross Lindsay and Patrick Downie

### 19/4 To do

Merge Branch

Finish CSS structure

Start CSS on Java Game

Implement Game

Work on Comp Reaction to moves CSS / Java Dom Manip

Implement Table / Results

Check Responsiveness

Work on Logo

Work on Easter Egg Bar

function renderStats() {
let number = stats.avgDucksPerGame;
let round_number = number.toFixed(2);
let divSelect = document.querySelector("#statView");
let divh2 = document.createElement("h2");
divh2.textContent = `Your Stats!`;
divSelect.appendChild(divh2);
let p = document.createElement("p");
p.textContent = `Your total of plays is ${stats.gamesPlayed} and you managed to save ${stats.ducksTaken} ducks, which gives you an average of ${round_number} per game. You've won ${stats.gamesWon} games, that's just terrible`;
divSelect.appendChild(p);
}
