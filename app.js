let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#sbmt");

const lowOrHi = document.querySelector(".msg");

const guesses = document.querySelector(".prev");

const remaining = document.querySelector(".remain");

const input = document.getElementById("input-field");

const result = document.querySelector(".result");

const div = document.createElement("div");

let playGame = true;

let prevGuesses = [];

let chances = 1;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const value = parseInt(input.value);
    validateGuess(value);
  });
}

function validateGuess(value) {
  if (isNaN(value)) {
    alert("Enter a Valid Number");
  } else if (value > 100) {
    alert("Enter a Number below 100");
  } else if (value < 1) {
    alert("Enter a Number between 1 to 100");
  } else {
    prevGuesses.push(value);
  // console.log(prevGuesses);

    if (chances === 11) {
      displayGuesses(value);
      lowOrHi.innerHTML = `Game Over! Your Number was ${random}`;
      endGame();
    } else {
      displayGuesses(value);
      checkGuess(value);
    }
  }
}

function displayGuesses(value) {
  input.value = "";
  guesses.innerHTML += `${value} `;
  chances++;
  remaining.innerHTML = `${11 - chances}`;
}

function checkGuess(value) {
  if (value === random) {
    lowOrHi.innerHTML = `You Guessed Correct`;
    endGame();
  } else if (value > random) {
    lowOrHi.innerHTML = `Too High! Try Again`;
  } else if (value < random) {
    lowOrHi.innerHTML = `Too Low! Try Again`;
  }
}

function endGame() {
  input.value = "";
  input.setAttribute("disabled", "");
  div.innerHTML = ` <button id="restart" class="rst">Restart</button></div>`;
  result.appendChild(div);
  playGame = false;
  newGame();
}

function newGame() {
 const  button = document.querySelector("#restart");
  button.addEventListener("click", () => {
     random = parseInt((Math.random() * 100) + 1);
    prevGuesses = [];
    chances = 1;
    lowOrHi.innerHTML = "";
    guesses.innerHTML = "";
    remaining.innerHTML = `${10 - chances}`;
    input.removeAttribute("disabled");
    result.removeChild(div);
    playGame = true;

   
  });
}
