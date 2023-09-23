var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var initialPage = document.getElementById("initial-page");
var questionTitle = document.getElementById("question-title");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

startButton.addEventListener("click", function (e) {
    setTimer();
    initialPage.style.display = "none";
    question.style.display = "block";
    showQuestion();
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

var allQuestions = [
    {
        questionTitle: "Which of the following is not a primitive data type in JavaScript?",
        answers: ["1. number", "2. boolean", "3. object", "4. string"],
        // rightAnswer: 2
    },
    {
        questionTitle: "Which method is used to remove the last element from an array and return it?",
        answers: ["1. pop", "2. slice", "3. push", "4. concat"],
        // rightAnswer: 1
    }

];

var currentQuestion = 0;

function showQuestion() {

    questionTitle.textContent = allQuestions[currentQuestion].questionTitle;
    answer1.textContent = allQuestions[currentQuestion].answers[0];
    answer2.textContent = allQuestions[currentQuestion].answers[1];
    answer3.textContent = allQuestions[currentQuestion].answers[2];
    answer4.textContent = allQuestions[currentQuestion].answers[3];

}

// currentQuestion++;//when button is pressed