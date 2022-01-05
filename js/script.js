var score
var startPage = document.getElementById("startPage");
var startButton = document.getElementById("startButton");
var question = document.getElementById("question");
// use the same class for every question from the HTML
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var buttonClicked = document.querySelector(".btn");
//need to create an index of questions
var questionIndex = 0;
//need to create a variable for current Question
var currentQuestion = listOfQuestions[questionIndex];
console.log(buttonClicked);

var listOfQuestions = [
    {
        heading:"Which of the following is a data type", 
        choice1: "bananas",
        choice2: "array",
        choice3: "stingrays",
        choice4: "rays"
    },
    {
        heading: "Which of the following is a method?",
        choice1: "bananas",
        choice2: "array",
        choice3: "stingrays",
        choice4: "rays"
    },
    {
        heading: "Which of the following is correct syntax",
        choice1: "bananas",
        choice2: "array",
        choice3: "stingrays",
        choice4: "rays"
    }
];
// startPage dissapears after user clicks startButton
//advancePage1 runs after the startPage
startButton.addEventListener("click", advancePage1);
question.style.display = "none";

//question 1 appears and startPage is hidden
function advancePage1() {
    console.log("click")
    startPage.style.display = "none"
    question.style.display = "block";
    showQuestion();
}
//question1 grabs the appropriate heading and choices from array of listOfQuestions in index 0
function showQuestion() {
    currentQuestion.heading
    console.log(currentQuestion.heading);
    var headingQuestion = document.getElementById("heading-question");
    headingQuestion.textContent = currentQuestion.heading;
    console.log(currentQuestion.choice1, currentQuestion.choice2, currentQuestion.choice3, currentQuestion.choice4);
    var button1 = document.getElementById("choice1");
    button1.textContent = currentQuestion.choice1; 
    var button2 = document.getElementById("choice2");
    button2.textContent = currentQuestion.choice2; 
    var button3 = document.getElementById("choice3");
    button3.textContent = currentQuestion.choice3;
    var button4 = document.getElementById("choice4");
    button4.textContent = currentQuestion.choice4;  
    buttonClicked.addEventListener("click", questionIndex[1]);
}
currentQuestion
//I will need to create another function to advance to next question

        // ---------------------------------------------------------
// I will need to create a data storage for the correct answer
//this will need an if statement



