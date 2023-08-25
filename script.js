"use strict";

const attackButton = document.querySelector(".player-attack");
const teaseButton = document.querySelector(".player-tease");
const snackButton = document.querySelector(".player-snack");
let playerMessage = document.querySelector(".player-message");
let playerStartScore = document.querySelector(".player-start");

const ogreAttackButton = document.querySelector(".ogre-attack");
let ogreStartScore = document.querySelector(".ogre-start");

let playerScore = 20;
let ogreScore = 25;

playerStartScore.textContent = playerScore;
ogreStartScore.textContent = ogreScore;

attackButton.addEventListener("click", function () {
  let attack = Math.trunc(Math.random() * 10) + 1;

  playerMessage.textContent = "a-ha!";
  ogreStartScore.textContent = `${ogreScore - attack}`;
  console.log(attack);
});
