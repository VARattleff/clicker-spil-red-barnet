"use strict";

window.addEventListener("load", ready);

var points = 0;
var lives = 0;

function ready() {
  console.log("JavaScript ready!");
  document.querySelector("#btn_start").addEventListener("click", start);
  document
    .querySelector("#btn_go_to_start")
    .addEventListener("click", showStartScreen);
  document
    .querySelector("#game_over_button")
    .addEventListener("click", retryGame);
}

function start() {
  points = 0;
  lives = 3;
  displayPoints();

  document.querySelector("#start").classList.add("hidden");

  document
    .querySelector("#game_over_button")
    .addEventListener("mousedown", start);
  startAllAnimation();
  startTimer();
}

function startAllAnimation() {
  document.querySelector("#boy_container").classList.add("boyrun1");
  document.querySelector("#priest_container").classList.add("priest1");
  document
    .querySelector("#boy_container")
    .addEventListener("mousedown", boyRun);
  document
    .querySelector("#priest_container")
    .addEventListener("mousedown", priestRun);

  document.querySelector("#boy1_container").classList.add("boyrun21");
  document
    .querySelector("#boy1_container")
    .addEventListener("mousedown", boyRun1);

  document.querySelector("#bishop_container").classList.add("bishop1");
  document.querySelector("#cardinal_container").classList.add("cardinal1");
  document.querySelector("#pope_container").classList.add("pope1");
  document
    .querySelector("#bishop_container")
    .addEventListener("mousedown", bishopRun);
  document
    .querySelector("#cardinal_container")
    .addEventListener("mousedown", cardinalRun);
  document
    .querySelector("#pope_container")
    .addEventListener("mousedown", popeRun);

  document.querySelector("#boy3_container").classList.add("boy31");
  document
    .querySelector("#boy3_container")
    .addEventListener("mousedown", boyRun3);
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
  let randomnumber = Math.floor(Math.random() * 3) + 1;
  document
    .querySelector("#pope_container")
    .removeEventListener("animationend", popeGone);

  document.querySelector("#pope_sprite").classList.remove("zoom_out");
  document.querySelector("#pope_container").classList.remove("paused");
  document
    .querySelector("#pope_container")
    .classList.remove("pope" + randomnumber);
  document.querySelector("#pope_container").offsetWidth;
  document
    .querySelector("#pope_container")
    .classList.add("pope" + randomnumber);

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
  let randomnumber = Math.floor(Math.random() * 3) + 1;
  document
    .querySelector("#cardinal_container")
    .removeEventListener("animationend", cardinalGone);

  document.querySelector("#cardinal_sprite").classList.remove("zoom_out");
  document.querySelector("#cardinal_container").classList.remove("paused");
  document
    .querySelector("#cardinal_container")
    .classList.remove("cardinal" + randomnumber);
  document.querySelector("#cardinal_container").offsetWidth;
  document
    .querySelector("#cardinal_container")
    .classList.add("cardinal" + randomnumber);

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
  let randomnumber = Math.floor(Math.random() * 3) + 1;
  document
    .querySelector("#bishop_container")
    .removeEventListener("animationend", bishopGone);

  document.querySelector("#bishop_sprite").classList.remove("zoom_out");
  document.querySelector("#bishop_container").classList.remove("paused");
  document
    .querySelector("#bishop_container")
    .classList.remove("bishop" + randomnumber);
  document.querySelector("#bishop_container").offsetWidth;
  document
    .querySelector("#bishop_container")
    .classList.add("bishop" + randomnumber);

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

function priestGone() {
  let randomnumber = Math.floor(Math.random() * 3) + 1;
  document
    .querySelector("#priest_container")
    .removeEventListener("animationend", priestGone);

  document.querySelector("#priest_sprite").classList.remove("zoom_out");
  document.querySelector("#priest_container").classList.remove("paused");
  document
    .querySelector("#priest_container")
    .classList.remove("priest" + randomnumber);
  document.querySelector("#priest_container").offsetWidth;
  document
    .querySelector("#priest_container")
    .classList.add("priest" + randomnumber);

  document
    .querySelector("#priest_container")
    .addEventListener("mousedown", priestRun);
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
  let randomnumber = Math.floor(Math.random() * 3) + 1;
  document
    .querySelector("#boy_container")
    .removeEventListener("animationend", boyGone);
  document.querySelector("#boy_sprite").classList.remove("zoom_out");
  document.querySelector("#boy_container").classList.remove("paused");
  document
    .querySelector("#boy_container")
    .classList.remove("boyrun" + randomnumber);
  document.querySelector("#boy_container").offsetWidth;
  document
    .querySelector("#boy_container")
    .classList.add("boyrun" + randomnumber);
  document
    .querySelector("#boy_container")
    .addEventListener("mousedown", boyRun);
}

function boyRun3() {
  console.log("boyRun3");
  document
    .querySelector("#boy3_container")
    .removeEventListener("mousedown", boyRun3);

  document.querySelector("#boy3_container").classList.add("paused");

  document.querySelector("#boy3_sprite").classList.add("zoom_out");

  document
    .querySelector("#boy3_container")
    .addEventListener("animationend", boyGone3);

  decrementLives();
}

function boyGone3() {
  let randomnumber = Math.floor(Math.random() * 3) + 1;
  document
    .querySelector("#boy3_container")
    .removeEventListener("animationend", boyGone3);
  document.querySelector("#boy3_sprite").classList.remove("zoom_out");
  document.querySelector("#boy3_container").classList.remove("paused");
  document
    .querySelector("#boy3_container")
    .classList.remove("boy3" + randomnumber);
  document.querySelector("#boy3_container").offsetWidth;
  document
    .querySelector("#boy3_container")
    .classList.add("boy3" + randomnumber);
  document
    .querySelector("#boy3_container")
    .addEventListener("mousedown", boyRun3);
}

function boyGone1() {
  let randomnumber = Math.floor(Math.random() * 3) + 1;
  document
    .querySelector("#boy1_container")
    .removeEventListener("animationend", boyGone);
  document.querySelector("#boy1_sprite").classList.remove("zoom_out");
  document.querySelector("#boy1_container").classList.remove("paused");
  document
    .querySelector("#boy1_container")
    .classList.remove("boyrun2" + randomnumber);
  document.querySelector("#boy1_container").offsetWidth;
  document
    .querySelector("#boy1_container")
    .classList.add("boyrun2" + randomnumber);
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

function showStartScreen() {
  // fjern hidden fra startskærm og tilføj til game over og level complete
  document.querySelector("#start").classList.remove("hidden");
  document.querySelector("#game_over").classList.add("hidden");
  document.querySelector("#level_complete").classList.add("hidden");
  resetLives();
  resetTimer();
}

function resetLives() {
  // sæt lives til 3
  lives = 3;
  //nulstil visning af liv (hjerte vi ser)
  document.querySelector("#heart1").classList.remove("broken_heart");
  document.querySelector("#heart2").classList.remove("broken_heart");
  document.querySelector("#heart3").classList.remove("broken_heart");
  document.querySelector("#heart1").classList.add("active_heart");
  document.querySelector("#heart2").classList.add("active_heart");
  document.querySelector("#heart3").classList.add("active_heart");
}

function retryGame() {
  resetLives();
  showStartScreen();
  start();
  resetTimer();
}

function startTimer() {
  document.querySelector("#time_sprite").classList.add("shrink");

  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);
}

function timeIsUp() {
  if (points >= 5) {
    levelComplete();
  } else {
    gameOver();
  }
}

function resetTimer() {
  document
    .querySelector("#time_sprite")
    .removeEventListener("animationend", timeIsUp);
  document.querySelector("#time_sprite").classList.remove("shrink");
  document.querySelector("#time_sprite").offsetWidth;
  document.querySelector("#time_sprite").classList.add("shrink");
  document
    .querySelector("#time_sprite")
    .addEventListener("animationend", timeIsUp);
}
