var wordBlank = document.querySelector(".word-blanks");
var wordGameGo = document.querySelector(".start-button");
var timeLeft = document.querySelector(".timer-count");
var wins = document.querySelector(".win");
var lose = document.querySelector(".lose");

var winCounter = 0;
var loseCounter = 0;
var timer;
var timerCount;

// arrays used to create blanks and letters on screen

// array of words the user will guess


// the init function to get wins and losses

// the startGame function
function startGame() {
    // isWin = false;
    timerCount = 10;
    wordGameGo.disabled = true;
    // renderblanks()
    startTimer()
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timeLeft.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

// win function will show a message and increment the wins
// lose function will show a message and increment the losses
function loseGame() {
    wordBlank.textContent = "Try again!";
    loseCounter++;
    lose.textContent = loseCounter;
    wordGameGo.disabled = false;
}
// reset button to reset the score
// create the blanks and populates with random word from array
// store score to local storage
// clicking start will start the game
wordGameGo.addEventListener("click", startGame);