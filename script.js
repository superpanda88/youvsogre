"use strict";

//-----selectors------//

//-----buttons-----//

const attackButton = document.querySelector(".player-attack");
const insultButton = document.querySelector(".player-insult");
const muffinButton = document.querySelector(".player-muffin");
const startButton = document.querySelector(".init");

//----displays----//

let playerMessage = document.querySelector(".player-message");
let playerScoreDisplay = document.querySelector(".player-start");
let ogreMessage = document.querySelector(".ogre-message");
let ogreScoreDisplay = document.querySelector(".ogre-start");

let playerScore = 20;
let ogreScore = 25;
let clicked = 0;

playerScoreDisplay.textContent = playerScore;
ogreScoreDisplay.textContent = ogreScore;

const insults = [
  "you mother ate so many villagers, she needed twenty horses to carry her",
  "your mother is so hairy, she needs to shave with a scythe",
  "your mother is so ugly, her face shattered the magic mirror",
  "your mother's teeth are so big, your father has to kiss her with his helmet on",
  "your mother looks just like you",
  "your mother is so scary, even a troll wouldn't date her",
  "*I think he's mad enough, also I'm out of ideas*",
];

//----functions-----//

const disableButton = (button) => (button.disabled = true);

const enableButton = (button) => (button.disabled = false);

const enrage = function () {
  ogreScore += 3;
  ogreScoreDisplay.textContent = `${ogreScore}`;
  ogreMessage.textContent = `ARRRRGGGGHHHH!!!`;
};

let index = 0;
const insult = function (arr) {
  if (index < arr.length) {
    playerMessage.innerHTML = arr[index];
    index++;
  } else {
    disableButton(insultButton);
  }
};

//-----initial conditions----//

const init = function () {
  playerScore = 20;
  ogreScore = 25;
  playerScoreDisplay.textContent = playerScore;
  ogreScoreDisplay.textContent = ogreScore;
  playerMessage.textContent = "Click to attack";
  ogreMessage.textContent = "*Minding own business*";
  muffinButton.innerHTML = "Muffin Button";
  clicked = 0;
  enableButton(muffinButton);
  enableButton(insultButton);
  enableButton(attackButton);
};

//------event listeners------//

const ogreAttack = function () {
  let attack = Math.trunc(Math.random() * 8) + 1;
  playerScore -= attack;
  ogreMessage.textContent = "Hur, hur, hur!";
  playerMessage.textContent = "Ouch!";
  playerScoreDisplay.textContent = `${playerScore}`;
  enableButton(attackButton);

  if (playerScore <= 0) {
    playerMessage.textContent = `You are defeated!`;
    disableButton(attackButton);
  }
};

attackButton.addEventListener("click", function () {
  let attack = Math.trunc(Math.random() * 6) + 1;
  ogreScore -= attack;
  playerMessage.textContent = "a-ha!";
  ogreMessage.textContent = "huuurrrgggghhhh";
  ogreScoreDisplay.textContent = `${ogreScore}`;
  attackButton.disabled = true;
  if (ogreScore <= 0) {
    playerMessage.textContent = `The ogre is defeated!`;
  }
  setTimeout(ogreAttack, 4000);
});

startButton.addEventListener("click", init);

insultButton.addEventListener("click", function () {
  insult(insults);
  enrage();
});

//muffin button

muffinButton.addEventListener("click", function () {
  if (clicked <= 2) {
    playerScore += 3;
    playerScoreDisplay.textContent = `${playerScore}`;
    clicked++;
    muffinButton.innerHTML = `Eat a Muffin: ${clicked} eaten`;
  } else {
    disableButton(muffinButton);
    muffinButton.innerHTML = "No More Muffins!";
  }
  return clicked;
});
