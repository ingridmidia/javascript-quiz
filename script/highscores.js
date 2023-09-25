var goBackButton = document.getElementById("go-back-button");
var highscoresList = document.getElementById("highscores-list");
var clearHighscoresButton = document.getElementById("clear-highscores-button");

goBackButton.addEventListener("click", function () {
    window.location.href = "./index.html";
});

function showHighscore() {
    if ((localStorage.getItem("initialsList") === null) && (localStorage.getItem("scoreList") === null)) {
        return;
    }
    var initialsList = localStorage.getItem("initialsList").split(",");
    var scoreList = localStorage.getItem("scoreList").split(",");
    var listElement;
    for (var currentInitialsAndScore = 0; currentInitialsAndScore < initialsList.length - 1; currentInitialsAndScore++) {
        listElement = document.createElement("li");
        listElement.innerText = initialsList[currentInitialsAndScore] + " - " + scoreList[currentInitialsAndScore];
        highscoresList.appendChild(listElement);
    }
}

showHighscore();

clearHighscoresButton.addEventListener("click", function () {
    localStorage.clear();
    highscoresList.style.visibility = "hidden";
});