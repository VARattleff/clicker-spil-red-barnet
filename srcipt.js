"use strict";
window.addEventListener("load", start);

let points = 0;
let lives = 0;

function start() {
  points = 0;
  lives = 3;

  document.querySelector("#boy_container").classList.add("falling1");
  document.querySelector("#priest_container").classList.add("falling3");
  document
    .querySelector("#boy_container")
    .addEventListener("mousedown", boyRun);
  document
    .querySelector("#priest_container")
    .addEventListener("mousedown", priestRun);

  document.querySelector("#boy1_container").classList.add("falling2");
  document.querySelector("#priest1_container").classList.add("falling4");
  document
    .querySelector("#boy1_container")
    .addEventListener("mousedown", boyRun1);
  document
    .querySelector("#priest1_container")
    .addEventListener("mousedown", priestRun1);
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

function priestRun1() {
  console.log("priestRun1");
  document
    .querySelector("#priest1_container")
    .removeEventListener("click", priestRun1);
  document.querySelector("#priest1_container").classList.add("paused");
  document.querySelector("#priest1_sprite").classList.add("zoom_out");
  document
    .querySelector("#priest1_container")
    .addEventListener("animationend", priestGone1);

  incrementPoints();
}

function priestGone() {
  document
    .querySelector("#priest_container")
    .removeEventListener("animationend", priestGone);

  document.querySelector("#priest_sprite").classList.remove("zoom_out");
  document.querySelector("#priest_container").classList.remove("paused");
  document.querySelector("#priest_container").classList.remove("falling3");
  document.querySelector("#priest_container").offsetWidth;
  document.querySelector("#priest_container").classList.add("falling3");

  document
    .querySelector("#priest_container")
    .addEventListener("click", priestRun);
}

function priestGone1() {
  document
    .querySelector("#priest1_container")
    .removeEventListener("animationend", priestGone1);

  document.querySelector("#priest1_sprite").classList.remove("zoom_out");
  document.querySelector("#priest1_container").classList.remove("paused");
  document.querySelector("#priest1_container").classList.remove("falling4");
  document.querySelector("#priest1_container").offsetWidth;
  document.querySelector("#priest1_container").classList.add("falling4");

  document
    .querySelector("#priest1_container")
    .addEventListener("click", priestRun1);
}

function boyRun() {
  console.log("boyRun");
  document.querySelector("#boy_container").removeEventListener("click", boyRun);

  document.querySelector("#boy_container").classList.add("paused");

  document.querySelector("#boy_sprite").classList.add("zoom_out");

  document
    .querySelector("#boy_container")
    .addEventListener("animationend", boyGone);

  decrementLives();
}

function boyRun1() {
  console.log("boyRun1");
  document
    .querySelector("#boy1_container")
    .removeEventListener("click", boyRun1);

  document.querySelector("#boy1_container").classList.add("paused");

  document.querySelector("#boy1_sprite").classList.add("zoom_out");

  document
    .querySelector("#boy1_container")
    .addEventListener("animationend", boyGone1);

  decrementLives();
}

function boyGone() {
  document
    .querySelector("#boy_container")
    .removeEventListener("animationend", boyGone);
  document.querySelector("#boy_sprite").classList.remove("zoom_out");
  document.querySelector("#boy_container").classList.remove("paused");
  document.querySelector("#boy_container").classList.remove("falling1");
  document.querySelector("#boy_container").offsetWidth;
  document.querySelector("#boy_container").classList.add("falling1");
  document.querySelector("#priest_container").addEventListener("click", boyRun);
}

function boyGone1() {
  document
    .querySelector("#boy1_container")
    .removeEventListener("animationend", boyGone1);
  document.querySelector("#boy1_sprite").classList.remove("zoom_out");
  document.querySelector("#boy1_container").classList.remove("paused");
  document.querySelector("#boy1_container").classList.remove("falling2");
  document.querySelector("#boy1_container").offsetWidth;
  document.querySelector("#boy1_container").classList.add("falling2");
  document.querySelector("#boy1_container").addEventListener("click", boyRun1);
}

function incrementPoints() {
  console.log("Giv point");
  points++;
  console.log("har nu " + points + " point");
  displayPoints();
  if (points == 5) {
    LevelComplete();
  }
}

function displayPoints() {
  console.log("vis point");
  document.querySelector("#kill_count").textContent = points;
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
