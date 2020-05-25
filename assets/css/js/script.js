var questions = [
    {
        "question1": "Commony used data types Do Not Include:",
        "chose1": ["strings", "booleans", "alerts", "numbers"],
        "answer1": "alerts"
    }
]

var questions = [
    {
        "question2": "The condition in an if / else statement is enclosed with ___________.",
        "chose2": ["quotes", "curly brackets", "parenthesis", "square brackets"],
        "answer2": "curly brackets"
    }
]

var secondsLeft = 30;
var score = 0;
var highScore = []
const time = document.getElementById("time-count");
const main = document.getElementById("main-page");
var text = "";
var i;
var endGame = restartGame

function setTime() {
	var timerInterval = setInterval(function () {
		secondsLeft--;
		time.innerHTML = ` 
		<div>Time: ${secondsLeft} 		
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
    // call set time function
     document.getElementById("time-count").innerHTML = `
     <div>Time: ${secondsLeft}      
     </div>
     `;
    // call render questions function
    renderQuestion();
}

function renderQuestion() {
    // use for loop for questin, answers form the aray to html
    for (i = 0; i < questions.length; i++) {
        text += questions[i] + " ";
        
    }
    document.getElementById("main-page").innerHTML = `<div> ${questions}</div>`;
    console.log(questions)
    
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