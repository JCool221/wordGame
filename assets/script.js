var wordGameGo = document.querySelector(".start-button");
var timeLeft = document.querySelector(".large-font timer-count");
console.log(timeLeft);
var wins = document.querySelector(".win");
console.log(wins);
var lose = document.querySelector(".lose");
console.log(lose);

var winstext = 0;

function setWinsText() {
    wins.textContent = winstext;
}

wordGameGo.addEventListener("click", function() {
    wins++;
    setWinsText();
    console.log("button");
});







