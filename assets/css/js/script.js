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
const time = document.getElementById("time-count");
var endGame = restartGame

function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		time.innerHTML = ` 
		<div>Time: ${secondsLeft} 		
		</div>
        `;
        console.log(setTime);
		if (secondsLeft <= 0) {
			clearInterval(timerInterval);
			return endGame();
		}
	}, 1000);
};

function startQuiz() {
    // atch to start button on click event
     document.getElementById("time-count").innerHTML = `
     <div>Time: ${secondsLeft}      
     </div>
     `;
     console.log(startQuiz);
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