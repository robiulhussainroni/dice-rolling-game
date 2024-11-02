"use strict";

document.querySelector(".dice").classList.add("hidden");
document.getElementById("dice-score").textContent = "...";
let currentscore = [0, 0];
let score = [0, 0];
let chance = 5;
let activePlayer = 0;
let count = 10;
document.getElementById("btn-roll").addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".dice").classList.remove("hidden");
  document.querySelector(".dice").src = `img/dice-${dice}.png`;
  document.getElementById("dice-score").textContent = dice;

  currentscore[activePlayer] += dice;
  score[activePlayer] = currentscore[activePlayer];
  document.querySelector(
    `.player-${activePlayer}-score`
  ).textContent = `${score[activePlayer]}`;

  document.getElementById("chance").textContent = chance - 1;
  chance--;
  if (chance < 1) {
    activePlayer = 1;
    chance = 5;
    document.getElementById("chance").textContent = chance;
    document.querySelector(".player-0").classList.add("hidden");
    document.querySelector(".player-1").classList.remove("hidden");
  }
  count--;
  if (count < 1) {
    chance = 0;
    document.getElementById("chance").textContent = chance;
    document.querySelector(".player-winner").classList.remove("hidden");
    if (score[0] > score[1]) {
      document.querySelector(".winner").textContent = 1;
    } else if (score[0] < score[1]) {
      document.querySelector(".winner").textContent = 1;
    } else {
      document.querySelector(".player-winner").textContent = "Match Drawn";
    }
  }
});
