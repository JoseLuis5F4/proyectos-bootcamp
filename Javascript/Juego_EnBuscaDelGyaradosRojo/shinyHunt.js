const atms$$ = document.querySelector('[data-function="attempts"]');
const timerNumber = document.getElementById("timerNumber");
const progressBar = document.getElementById("progress");

let found = {
  x: Math.floor(Math.random() * 6),
  y: Math.floor(Math.random() * 4),
};

let failure = false;
let attempts = 0;
let timeLeft = 60;
let timerInterval;

function animateAttempts() {
  atms$$.classList.add("animated");
  setTimeout(() => {
    atms$$.classList.remove("animated");
  }, 500);
}

function fishingBoard() {
  failure = false;
  const seaBoard = document.querySelector('[data-function="board"]');

  for (let i = 0; i < 6; i++) {
    const tr$$ = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
      const td$$ = document.createElement("td");

      const img$$ = document.createElement("img");
      img$$.setAttribute("src", "./public/shinyHunt/card_flip.png");

      td$$.addEventListener("click", function () {
        flipCard(img$$, i, j);
      });

      td$$.appendChild(img$$);
      tr$$.appendChild(td$$);
    }
    seaBoard.appendChild(tr$$);
  }
}

function flipCard(img$$, i, j) {
  if (!img$$.classList.contains("flipped")) {
    img$$.classList.add("flipped");
    attempts++;
    atms$$.textContent = attempts;
    animateAttempts();

    if (found.x === i && found.y === j) {
      img$$.setAttribute("src", "./public/shinyHunt/shiny_gyarados.jpg");
      clearInterval(timerInterval);
      setTimeout(() => {
        alert("¡Un Gyarados rojo apareció! ¡Has ganado!");
        failure = true;
      }, 1000);
    } else {
      img$$.setAttribute("src", "./public/shinyHunt/magikarp_false.png");
    }
  }
}

function updateTimer(progress, number) {
  progressBar.setAttributeNS(null, "width", progress + "%");
  progressBar.setAttributeNS(null, "height", "100%");
  timerNumber.textContent = number;
}

timerInterval = setInterval(() => {
  timeLeft--;
  updateTimer((timeLeft / 60) * 100, timeLeft);
  if (timeLeft === 0 || failure) {
    clearInterval(timerInterval);
  }
}, 1000);

fishingBoard();
