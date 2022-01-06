var score = 0
var secondsLeft = 25;
var timeLeft = document.getElementById("timeLeft")
console.log(score);
var startPage = document.getElementById('startPage');
var startButton = document.getElementById("startButton");
var question = document.getElementById("question");
var headingQuestion = document.getElementById("heading-question");
// use the same class for every question from the HTML
var button1 = document.getElementById("choice1");
var button2 = document.getElementById("choice2");
var button3 = document.getElementById("choice3");
var button4 = document.getElementById("choice4");
var nextButton = document.getElementById("nextButton");
//need to create an index of questions
var questionIndex = 0;
var listOfQuestions = [
    {
        heading:"Which of the will default to a decimal?", 
        choice1: "split",
        choice2: "Math.Floor", //this is the correct answer
        choice3: "math.random",
        choice4: "slice"
    },
    {
        heading: "Which of the following is a method?",
        choice1: "split", //this is the correct answer
        choice2: "for",
        choice3: "if else",
        choice4: "what else"
    },
    {
        heading: "Common Data Types in JavaScript DO NOT include...",
        choice1: "alerts", //this is the correct answer
        choice2: "booleans",
        choice3: "numbers",
        choice4: "strings"
    },
    {
        heading: "if else statements are contained within",
        choice1: "parenthesis", //this is the correct answer
        choice2: "curly brackets",
        choice3: "square brackets",
        choice4: "quotes"
    },
    {
        heading: "for loops must have what notation within the parenthesis",
        choice1: "semicolon", //this is the correct answer
        choice2: "commas",
        choice3: "quotes",
        choice4: "slashes"
    }
];
//timer function to be called after startButton is clicked
function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft --;
        timeLeft.textContent = secondsLeft + " seconds left!"
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }        
    }, 1000);
}
// startPage dissapears after user clicks startButton
//advancePage1 runs after the startPage
startButton.addEventListener("click", advancePage);
question.style.display = "none";

//question 1 appears and startPage is hidden
function advancePage() {
    console.log("click")
    startPage.style.display = "none"
    question.style.display = "block";
    showQuestion();
    setTimer();
    if (secondsLeft === 0) {
        question.heading.textContent = ("You have run out of time!")
    }
}
//start the timer

console.log(secondsLeft);
//question1 grabs the appropriate heading and choices from array of listOfQuestions in index 0
function showQuestion() {
    //need to create a variable for current Question
    var currentQuestion = listOfQuestions[questionIndex];
    currentQuestion.heading
    console.log(currentQuestion.heading);
    headingQuestion.textContent = currentQuestion.heading;
    console.log(currentQuestion.choice1, currentQuestion.choice2, currentQuestion.choice3, currentQuestion.choice4);
    button1.textContent = currentQuestion.choice1; 
    button2.textContent = currentQuestion.choice2; 
    button3.textContent = currentQuestion.choice3;
    button4.textContent = currentQuestion.choice4;
    var nextButton = document.getElementById("nextButton");
    nextButton.textContent = "Next question";
    currentQuestion = listOfQuestions[questionIndex += 1];
    console.log(secondsLeft + "seconds left");
    console.log("you are on question #" + questionIndex);
    }
nextButton.addEventListener("click", showQuestion);
//if (button2.getEventListener()))
//two ways to do
//use keyword of "this"
//google javascript t
//I will need to create another function to advance to next question
        // ---------------------------------------------------------
// I will need to create a data storage for the correct answer
function keepScore() {

}
//this will need an if statement