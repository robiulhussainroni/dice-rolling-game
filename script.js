"use strict";

let totalScore1 = 0;
let totalScore2 = 0;
let chance = 0;

document.querySelector(".btn-roll-1").addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".message-1").textContent = dice;
  document.querySelector(".dice-1").src = `../img/dice-${dice}.png`;
  totalScore1 += dice;
  document.querySelector(".total-score-1").textContent = totalScore1;
  chance++;

  if (chance === 3) {
    document.querySelector(".btn-roll-1").classList.add("hidden");
    document.querySelector(".player-2").classList.remove("hidden");
  }
});

document.querySelector(".btn-roll-2").addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  document.querySelector(".message-2").textContent = dice;
  document.querySelector(".dice-2").src = `../img/dice-${dice}.png`;
  totalScore2 += dice;
  document.querySelector(".total-score-2").textContent = totalScore2;
  chance++;
  if (chance === 6) {
    document.querySelector(".btn-roll-2").classList.add("hidden");
  }
  if (totalScore1 > totalScore2) {
    document.querySelector(".winner").textContent = 1;
  } else {
    document.querySelector(".winner").textContent = 2;
  }
});
