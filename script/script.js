var startButton = document.getElementById("start-button");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var initialPage = document.getElementById("initial-page");
var questionTitle = document.getElementById("question-title");
var answer1Button = document.getElementById("answer1");
var answer2Button = document.getElementById("answer2");
var answer3Button = document.getElementById("answer3");
var answer4Button = document.getElementById("answer4");
var correct = document.getElementById("correct");
var wrong = document.getElementById("wrong");
var allDone = document.getElementById("all-done");

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
            showAllDone();
        }
    }, 1000);
}

var allQuestions = [
    {
        questionTitle: "Which of the following is not a primitive data type in JavaScript?",
        answers: ["1. number", "2. boolean", "3. object", "4. string"]
    },
    {
        questionTitle: "Which method is used to remove the last element from an array and return it?",
        answers: ["1. pop", "2. slice", "3. push", "4. concat"]
    },
    {
        questionTitle: "Which type of brackets do use to declare an array in Javascript?",
        answers: ["1. < >", "2. { }", "3. ( )", "4. [ ]"]
    },
    {
        questionTitle: "What is a JavaScript function primarily used for?",
        answers: ["1. Reusable blocks of code", "2. Defining variables", "3. Declaring objects", "4. Creating loops"]
    },
    {
        questionTitle: "What is the purpose of the if statement in JavaScript?",
        answers: ["1. To loop through an array", "2. To declare a variable", "3. To define a function", "4. To make decisions in code based on a condition"]
    }
];

var currentQuestion = 0;

function showQuestion() {
    if (currentQuestion > allQuestions.length - 1) {
        showAllDone();
       // timer needs to stop and use timeLeft as final score
    } else {
        questionTitle.textContent = allQuestions[currentQuestion].questionTitle;
        answer1Button.textContent = allQuestions[currentQuestion].answers[0];
        answer2Button.textContent = allQuestions[currentQuestion].answers[1];
        answer3Button.textContent = allQuestions[currentQuestion].answers[2];
        answer4Button.textContent = allQuestions[currentQuestion].answers[3];
    }
}

var rightAnswers = ["3. object", "1. pop", "4. [ ]", "1. Reusable blocks of code", "4. To make decisions in code based on a condition"];

answer1Button.addEventListener("click", validateAnswer);
answer2Button.addEventListener("click", validateAnswer);
answer3Button.addEventListener("click", validateAnswer);
answer4Button.addEventListener("click", validateAnswer);

answer1Button.addEventListener("mousedown", hideCorrectOrWrong);
answer2Button.addEventListener("mousedown", hideCorrectOrWrong);
answer3Button.addEventListener("mousedown", hideCorrectOrWrong);
answer4Button.addEventListener("mousedown", hideCorrectOrWrong);

function validateAnswer(e) {
    if (e.srcElement.innerText === rightAnswers[currentQuestion]) {
        correct.style.display = "block";
        setTimeout(hideCorrectOrWrong, 5000);
    } else {
        timeLeft = timeLeft - 15;
        wrong.style.display = "block";
        setTimeout(hideCorrectOrWrong, 5000);
    }
    currentQuestion++;
    showQuestion();
}

function showAllDone() {
    question.style.display = "none";
    hideCorrectOrWrong();
    allDone.style.display = "block";
}

function hideCorrectOrWrong() {
    correct.style.display = "none";
    wrong.style.display = "none";
}

