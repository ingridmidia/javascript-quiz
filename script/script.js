var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var initialPage = document.getElementById("initial-page");
var questionTitle = document.getElementById("question-title");
var answer1Button = document.getElementById("answer1");
var answer2Button = document.getElementById("answer2");
var answer3Button = document.getElementById("answer3");
var answer4Button = document.getElementById("answer4");

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
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timer.textContent = "Time: 0";
            console.log("game over");//goes to allDone()!
        }
    }, 1000);
}

var allQuestions = [
    {
        questionTitle: "Which of the following is not a primitive data type in JavaScript?",
        answers: ["1. number", "2. boolean", "3. object", "4. string"],
    },
    {
        questionTitle: "Which method is used to remove the last element from an array and return it?",
        answers: ["1. pop", "2. slice", "3. push", "4. concat"],
    }
];

var currentQuestion = 0;

function showQuestion() {
    if (currentQuestion > allQuestions.length - 1) {
        //showAllDone();
    } else {
        questionTitle.textContent = allQuestions[currentQuestion].questionTitle;
        answer1Button.textContent = allQuestions[currentQuestion].answers[0];
        answer2Button.textContent = allQuestions[currentQuestion].answers[1];
        answer3Button.textContent = allQuestions[currentQuestion].answers[2];
        answer4Button.textContent = allQuestions[currentQuestion].answers[3];
    }
}

var rightAnswers = ["3. object", "1. pop"];

answer1Button.addEventListener("click", validateAnswer);
answer2Button.addEventListener("click", validateAnswer);
answer3Button.addEventListener("click", validateAnswer);
answer4Button.addEventListener("click", validateAnswer);

function validateAnswer(e) {
    if (e.srcElement.innerText === rightAnswers[currentQuestion]) {
        // display Correct!
    } else {
        timeLeft = timeLeft - 15;
        // display Wrong!
    }
    currentQuestion++;
    showQuestion();
}

