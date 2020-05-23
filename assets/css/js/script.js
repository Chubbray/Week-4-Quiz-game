var questions = [
    {
        "question": "Commony used data types Do Not Include:",
        "chose": ["strings", "booleans", "alerts", "numbers"],
        "answer": "alerts"
    }
]

var secondsLeft = 30;
var score = 0;
var highScore = []

function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		time.innerHTML = `
		<div>Time Remaining: ${secondsLeft} seconds
		
		</div>
		`;
		if (secondsLeft <= 0) {
			clearInterval(timerInterval);
			return endGame();
		}
	}, 1000);
};

function startQuiz() {
    // atch to start button on click event
     document.getElementById("start").style.color = "purple";
    // call set time function
    // call render questions function
}

function renderQuestion() {
    // use for loop for questin, answers form the aray to html

}

function checkAnswer() {
    // make suer the choice is the corect answer
}

function restartGame() {
    // Resets everything
}

function saveHigh() {
    // save high score to local storage
}