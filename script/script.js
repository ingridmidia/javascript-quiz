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
var finalScoreMessage = document.getElementById("final-score-message");
var submitButton = document.getElementById("submit-button");
var initials = document.getElementById("initials");

// When user clicks on start button the timer starts and the first question is shown
startButton.addEventListener("click", function (e) {
    setTimer();
    initialPage.style.display = "none";
    question.style.display = "block";
    showQuestion();
});

// Timer starts in 75 seconds, 15 seconds to each question
var timeLeft = 75;
var timerInterval;

// Decrease timer every second
function setTimer() {
    timerInterval = setInterval(function () {
        timeLeft--; 
        // If timer runs out game ends
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft = 0; // set timeLeft to 0, so user don't see a negative number
            showAllDone();
        }
        timer.textContent = "Time: " + timeLeft;
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

var rightAnswers = ["3. object", "1. pop", "4. [ ]", "1. Reusable blocks of code", "4. To make decisions in code based on a condition"];

var currentQuestion = 0;// used as index to access allQuestions and rightAnswers array

function showQuestion() {
    if (currentQuestion > allQuestions.length - 1) {
        showAllDone();// if all questions were shown goes to all done
        clearInterval(timerInterval);// stops timer
    } else {
        questionTitle.textContent = allQuestions[currentQuestion].questionTitle;
        answer1Button.textContent = allQuestions[currentQuestion].answers[0];
        answer2Button.textContent = allQuestions[currentQuestion].answers[1];
        answer3Button.textContent = allQuestions[currentQuestion].answers[2];
        answer4Button.textContent = allQuestions[currentQuestion].answers[3];
    }
}

answer1Button.addEventListener("click", validateAnswer);
answer2Button.addEventListener("click", validateAnswer);
answer3Button.addEventListener("click", validateAnswer);
answer4Button.addEventListener("click", validateAnswer);

// The innerText of the button the user clicked is compared to the rightAnswers array on the currentQuestion index to validate if answer is correct
function validateAnswer(e) {
    if (e.srcElement.innerText === rightAnswers[currentQuestion]) {
        correct.style.display = "block";// display Correct! message
        setTimeout(hideCorrectOrWrong, 5000);// hides message after 5 seconds
    } else {
        timeLeft = timeLeft - 15;// if user picks wrong answer their time decreases by 15 seconds
        // set timeLeft to 0, so user don't see a negative number
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeLeft = 0;
        }
        timer.textContent = "Time: " + timeLeft;
        wrong.style.display = "block";// display Wrong! message
        setTimeout(hideCorrectOrWrong, 5000);// hides message after 5 seconds
    }
    currentQuestion++;
    showQuestion();
}
// if user pick an answer before 5 seconds Corret! and Wrong! messages will be hidden
answer1Button.addEventListener("mousedown", hideCorrectOrWrong);
answer2Button.addEventListener("mousedown", hideCorrectOrWrong);
answer3Button.addEventListener("mousedown", hideCorrectOrWrong);
answer4Button.addEventListener("mousedown", hideCorrectOrWrong);

function showAllDone() {
    question.style.display = "none";
    hideCorrectOrWrong();// hide Correct! or Wrong! when all questions are answered
    allDone.style.display = "block";
    finalScoreMessage.textContent = "Your final score is " + timeLeft + ".";// timeLeft is used as user's final score
}

function hideCorrectOrWrong() {
    correct.style.display = "none";
    wrong.style.display = "none";
}
// creates initials and scores arrays and redirects to highscores page
submitButton.addEventListener("click", function () {
    var initialsList = [];
    initialsList.push(initials.value.toUpperCase());
    initialsList = initialsList.concat(localStorage.getItem("initialsList"));
    localStorage.setItem("initialsList", initialsList);
    
    var scoreList = [];
    scoreList.push(timeLeft);
    scoreList = scoreList.concat(localStorage.getItem("scoreList"));
    localStorage.setItem("scoreList", scoreList);

    window.location.href = "./highscores.html";
});
