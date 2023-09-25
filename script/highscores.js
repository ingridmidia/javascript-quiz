var goBackButton = document.getElementById("go-back-button");
var highscoresList = document.getElementById("highscores-list");
var clearHighscoresButton = document.getElementById("clear-highscores-button");

goBackButton.addEventListener("click", function () {
    window.location.href = "./index.html";// redirects to quiz page
});

function showHighscore() {
    // if local storage is empty nothing is shown
    if ((localStorage.getItem("initialsList") === null) && (localStorage.getItem("scoreList") === null)) {
        return;
    }
    var initialsList = localStorage.getItem("initialsList").split(",");// converts string from local storage to array
    var scoreList = localStorage.getItem("scoreList").split(",");// converts string from local storage to array
    var listElement;
    for (var currentInitialsAndScore = 0; currentInitialsAndScore < initialsList.length - 1; currentInitialsAndScore++) {
        listElement = document.createElement("li");
        listElement.innerText = initialsList[currentInitialsAndScore] + " - " + scoreList[currentInitialsAndScore];
        highscoresList.appendChild(listElement);// shows on screen created element with its inner text representing the user's initials and final score
    }
}

showHighscore();

clearHighscoresButton.addEventListener("click", function () {
    localStorage.clear();
    location.reload();// reloads page, so user can see that highscores were in fact cleared
});