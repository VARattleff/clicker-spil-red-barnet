"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  console.log("JavaScriptFungere");

  points = 0;
  lives = 3;

  document.querySelector("#boy_container").classList.add("falling");
  document.querySelector("#priest_container").classList.add("falling");
  document.querySelector("#boy_container").addEventListener("click", boyRun);
  document
    .querySelector("#priest_container")
    .addEventListener("click", priestRun);
}

function priestRun() {
  console.log("priestRun");
  document
    .querySelector("#priest_container")
    .removeEventListener("click", priestRun);
  document.querySelector("#priest_container").classList.add("paused");
  document.querySelector("#priest_sprite").classList.add("zoom_out");
  document
    .querySelector("#priest_container")
    .addEventListener("animationend", priestGone);

  incrementPoints();
}

function priestGone() {
  document
    .querySelector("#priest_container")
    .removeEventListener("animationend", priestGone);

  document.querySelector("#priest_sprite").classList.remove("zoom_out");
  document.querySelector("#priest_container").classList.remove("paused");
  document.querySelector("#priest_container").classList.remove("falling");
  document.querySelector("#priest_container").offsetWidth;
  document.querySelector("#priest_container").classList.add("falling");

  document
    .querySelector("#priest_container")
    .addEventListener("click", priestRun);
}

function boyRun() {
  console.log("boyRun");
  document.querySelector("#boy_container").removeEventListener("click", boyRun);

  // Stop coin container
  document.querySelector("#boy_container").classList.add("paused");

  // sæt forsvind-animation på coin
  document.querySelector("#boy_sprite").classList.add("zoom_in");

  // når forsvind-animation er færdig: coinGone
  document
    .querySelector("#boy_container")
    .addEventListener("animationend", boyGone);

  decrementLives();
}

function boyGone() {
  // fjern event der bringer os herind
  document
    .querySelector("#boy_container")
    .removeEventListener("animationend", boyGone);

  // fjern forsvind-animation
  document.querySelector("#boy_sprite").classList.remove("zoom_in");

  // fjern pause
  document.querySelector("#boy_container").classList.remove("paused");

  // genstart falling animation
  document.querySelector("#boy_container").classList.remove("falling");
  document.querySelector("#boy_container").offsetWidth;
  document.querySelector("#boy_container").classList.add("falling");

  // gør det muligt at klikke på bomb igen
  document.querySelector("#priest_container").addEventListener("click", boyRun);
}

function incrementPoints() {
  console.log("Giv point");
  points++;
  console.log("har nu " + points + " point");
  displayPoints();
  if (points == 10) {
    LevelComplete();
  }
}

function displayPoints() {
  console.log("vis point");
  document.querySelector("#coin_count").textContent = points;
}

function decrementLives() {
  console.log("mist et liv");

  if (lives <= 1) {
    gameOver();
  } else {
    showDecrementedLives();
  }
  lives--;
}

function incrementLives() {
  console.log("få et liv");
  lives++;
  showIncrementedLives();
}

function showDecrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("active_heart");
  document.querySelector("#heart" + lives).classList.add("broken_heart");
}

function showIncrementedLives() {
  document.querySelector("#heart" + lives).classList.remove("broken_heart");
  document.querySelector("#heart" + lives).classList.add("active_heart");
}

function gameOver() {
  console.log("gameOver");
  document.querySelector("#game_over").classList.remove("hidden");
}

function LevelComplete() {
  console.log("levelComplete");
  document.querySelector("#level_complete").classList.remove("hidden");
}
