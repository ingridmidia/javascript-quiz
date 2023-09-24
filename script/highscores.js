var goBackButton = document.getElementById("go-back-button");
var highscoresList = document.getElementById("highscores-list");

goBackButton.addEventListener("click", function () {
    window.location.href = "./index.html";
});

var initialsList = localStorage.getItem("initialsList").split(",");
var scoreList = localStorage.getItem("scoreList").split(",");

var listElement;

function addHighscore() {
    for (var currentInitialsAndScore = 0; currentInitialsAndScore < initialsList.length-1; currentInitialsAndScore++) {
        listElement = document.createElement("li");
        listElement.innerText = initialsList[currentInitialsAndScore] + " - " + scoreList[currentInitialsAndScore];
        highscoresList.appendChild(listElement);
    }
}

addHighscore();