let homeScore = 0;
let guestScore = 0;

function add1home() {
  homeScore += 1;
  document.getElementById("home-score").textContent = homeScore;
  updateLeader();
}
function add2home() {
  homeScore += 2;
  document.getElementById("home-score").textContent = homeScore;
  updateLeader();
}
function add3home() {
  homeScore += 3;
  document.getElementById("home-score").textContent = homeScore;
  updateLeader();
}

function add1guest() {
  guestScore += 1;
  document.getElementById("guest-score").textContent = guestScore;
  updateLeader();
}
function add2guest() {
  guestScore += 2;
  document.getElementById("guest-score").textContent = guestScore;
  updateLeader();
}
function add3guest() {
  guestScore += 3;
  document.getElementById("guest-score").textContent = guestScore;
  updateLeader();
}

function newGame() {
  document.getElementById("guest-score").textContent = 0;
  document.getElementById("home-score").textContent = 0;
  homeSign.classList.remove("leader");
  guestSign.classList.remove("leader");
  homeScore = 0;
  guestScore = 0;
}

let homeSign = document.getElementById("home-sign");
let guestSign = document.getElementById("guest-sign");

function updateLeader() {
  if (homeScore > guestScore) {
    homeSign.classList.add("leader");
    guestSign.classList.remove("leader");
  } else if (homeScore < guestScore) {
    guestSign.classList.add("leader");
    homeSign.classList.remove("leader");
  } else if (homeScore == guestScore) {
    homeSign.classList.remove("leader");
    guestSign.classList.remove("leader");
  }
}

// if (homeScore > guestScore) {
//   homeSign.classList.add("leader");
//   guestScore.classList.remove("leader");
// } else if (homeScore < guestScore) {
//   guestScore.classList.add("leader");
//   homeSign.classList.remove("leader");
// } else if (homeScore == guestScore) {
//   homeSign.classList.remove("leader");
//   guestScore.classList.remove("leader");
// }
