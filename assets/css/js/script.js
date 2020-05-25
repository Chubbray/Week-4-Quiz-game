var questionsObjects = [
    {
        "question": "Commony used data types Do Not Include:",
        "chose": ["strings", "booleans", "alerts", "numbers"],
        "answer": "alerts"
    },

    {
        "question": "The condition in an if / else statement is enclosed with ___________.",
        "chose": ["quotes", "curly brackets", "parenthesis", "square brackets"],
        "answer": "curly brackets"
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
    
    document.getElementById("main-page").innerHTML = `<div> ${questionsObjects[0].question}
   
    <ol>
    <li>
    <button onclick="answer()">${questionsObjects[0].chose[0]}</button>
    </li>
    <li>
    <button onclick="answer()">${questionsObjects[0].chose[1]}</button>
    </li>
    <li>
    <button onclick="answer()">${questionsObjects[0].chose[2]}</button>
    </li>
    <li>
    <button onclick="answer()">${questionsObjects[0].chose[3]}</button>
    </li>
    </ol>
    
    </div>`;
    console.log(questionsObjects)
     for (i = 0; i < questionsObjects[0].chose; i++) {
         console.log("questions",questionsObjects[i])
         text += questionsObjects[i].question + " ";

         if (questionsObjects[0].chose[2] == questionsObjects[0].chose[2]) {
             
         }
     }
    
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