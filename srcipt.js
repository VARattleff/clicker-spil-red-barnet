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

  document.querySelector("#bishop_container").classList.add("falling5");
  document.querySelector("#cardinal_container").classList.add("falling6");
  document.querySelector("#pope_container").classList.add("falling7");
  document
    .querySelector("#bishop_container")
    .addEventListener("mousedown", bishopRun);
  document
    .querySelector("#cardinal_container")
    .addEventListener("mousedown", cardinalRun);
  document
    .querySelector("#pope_container")
    .addEventListener("mousedown", popeRun);
}

function popeRun() {
  console.log("popeRun");
  document
    .querySelector("#pope_container")
    .removeEventListener("mousedown", popeRun);
  document.querySelector("#pope_container").classList.add("paused");
  document.querySelector("#pope_sprite").classList.add("zoom_out");
  document
    .querySelector("#pope_container")
    .addEventListener("animationend", popeGone);

  incrementPoints();
}

function popeGone() {
  document
    .querySelector("#pope_container")
    .removeEventListener("animationend", popeGone);

  document.querySelector("#pope_sprite").classList.remove("zoom_out");
  document.querySelector("#pope_container").classList.remove("paused");
  document.querySelector("#pope_container").classList.remove("falling7");
  document.querySelector("#pope_container").offsetWidth;
  document.querySelector("#pope_container").classList.add("falling7");

  document
    .querySelector("#pope_container")
    .addEventListener("mousedown", popeRun);
}

function cardinalRun() {
  console.log("cardinalRun");
  document
    .querySelector("#cardinal_container")
    .removeEventListener("mousedown", cardinalRun);
  document.querySelector("#cardinal_container").classList.add("paused");
  document.querySelector("#cardinal_sprite").classList.add("zoom_out");
  document
    .querySelector("#cardinal_container")
    .addEventListener("animationend", cardinalGone);

  incrementPoints();
}

function cardinalGone() {
  document
    .querySelector("#cardinal_container")
    .removeEventListener("animationend", cardinalGone);

  document.querySelector("#cardinal_sprite").classList.remove("zoom_out");
  document.querySelector("#cardinal_container").classList.remove("paused");
  document.querySelector("#cardinal_container").classList.remove("falling6");
  document.querySelector("#cardinal_container").offsetWidth;
  document.querySelector("#cardinal_container").classList.add("falling6");

  document
    .querySelector("#cardinal_container")
    .addEventListener("mousedown", cardinalRun);
}

function bishopRun() {
  console.log("bishopRun");
  document
    .querySelector("#bishop_container")
    .removeEventListener("mousedown", priestRun);
  document.querySelector("#bishop_container").classList.add("paused");
  document.querySelector("#bishop_sprite").classList.add("zoom_out");
  document
    .querySelector("#bishop_container")
    .addEventListener("animationend", bishopGone);

  incrementPoints();
}

function bishopGone() {
  document
    .querySelector("#bishop_container")
    .removeEventListener("animationend", bishopGone);

  document.querySelector("#bishop_sprite").classList.remove("zoom_out");
  document.querySelector("#bishop_container").classList.remove("paused");
  document.querySelector("#bishop_container").classList.remove("falling5");
  document.querySelector("#bishop_container").offsetWidth;
  document.querySelector("#bishop_container").classList.add("falling5");

  document
    .querySelector("#bishop_container")
    .addEventListener("mousedown", bishopRun);
}

function priestRun() {
  console.log("priestRun");
  document
    .querySelector("#priest_container")
    .removeEventListener("mousedown", priestRun);
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
    .removeEventListener("mousedown", priestRun1);
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
    .addEventListener("mousedown", priestRun);
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
    .addEventListener("mousedown", priestRun1);
}

function boyRun() {
  document
    .querySelector("#boy_container")
    .removeEventListener("mousedown", boyRun);

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
    .removeEventListener("mousedown", boyRun1);

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
  document
    .querySelector("#priest_container")
    .addEventListener("mousedown", boyRun);
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
  document
    .querySelector("#boy1_container")
    .addEventListener("mousedown", boyRun1);
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
  document.querySelector("#kill_count").textContent = points;
}

function decrementLives() {
  console.log("mist et liv");

  if (lives <= 1) {
    gameOver();
  }

  showDecrementedLives();
  lives--;
}

function incrementLives() {
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

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 30) + "px; left: " + (e.pageX - 30) + "px;"
  );
});

document.addEventListener("click", () => {
  cursor.classList.add("expand");

  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
