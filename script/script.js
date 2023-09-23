var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var initialPage = document.getElementById("initial-page");

startButton.addEventListener("click", function (e) {
    setTimer();
    initialPage.style.display = "none";
    question.style.display = "block";
    // showQuestion();
});

var timeLeft = 75;

function setTimer() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = "Time: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            console.log("game over");//goes to all done!
        }
    }, 1000);
}