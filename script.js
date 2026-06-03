"use strict";

// Selectors
const dice = document.querySelector(".dice");
const diceScore = document.getElementById("dice-score");
const btnRoll = document.getElementById("btn-roll");
const chanceDisplay = document.getElementById("chance");
const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const playerWinner = document.querySelector(".player-winner");
const winner = document.querySelector(".winner");

dice.classList.add("hidden");
diceScore.textContent = "...";
let currentscore = [0, 0];
let score = [0, 0];
let chance = 5;
let activePlayer = 0;
let count = 10;
let playing = true;
btnRoll.addEventListener("click", function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove("hidden");
    dice.src = `img/dice-${diceNumber}.png`;
    diceScore.textContent = diceNumber;

    currentscore[activePlayer] += diceNumber;
    score[activePlayer] = currentscore[activePlayer];
    document.querySelector(`.player-${activePlayer}-score`).textContent =
      `${score[activePlayer]}`;

    document.getElementById("chance").textContent = chance - 1;
    chance--;
    if (chance < 1) {
      activePlayer = 1;
      chance = 5;
      chanceDisplay.textContent = chance;
      player0.classList.add("hidden");
      player1.classList.remove("hidden");
    }
    count--;
    if (count < 1) {
      playing = false;
      chance = 0;
      chanceDisplay.textContent = chance;
      playerWinner.classList.remove("hidden");
      score[0] > score[1]
        ? (winner.textContent = 1)
        : score[0] < score[1]
          ? (winner.textContent = 2)
          : (playerWinner.textContent = "Match Drawn");
    }
  }
});
