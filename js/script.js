var score
var startPage = document.getElementById("startPage");
var startButton = document.getElementById("startButton");
var question1 = document.getElementById("question");
// use the same class for every question from the HTML
var question2 = document.getElementById("question")
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var buttonClicked = document.querySelectorAll("btn");
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
question1.style.display = "none";

//question 1 appears and startPage is hidden
function advancePage1() {
    console.log("click")
    startPage.style.display = "none"
    question1.style.display = "block";
    showQuestion1();
}
//question1 grabs the appropriate heading and choices from array of listOfQuestions in index 0
function showQuestion1() {
    listOfQuestions[0].heading
    console.log(listOfQuestions[0].heading);
    var headingQuestion = document.getElementById("heading-question");
    headingQuestion.textContent = listOfQuestions[1].heading;
    console.log(listOfQuestions[0].choice1, listOfQuestions[0].choice2, listOfQuestions[0].choice3, listOfQuestions[0].choice4);
    var button1 = document.getElementById("choice1");
    button1.textContent = listOfQuestions[0].choice1; 
    var button2 = document.getElementById("choice2");
    button2.textContent = listOfQuestions[0].choice2; 
    var button3 = document.getElementById("choice3");
    button3.textContent = listOfQuestions[0].choice3;
    var button4 = document.getElementById("choice4");
    button4.textContent = listOfQuestions[0].choice4;  
}

//I will need to create another function to advance to next question
buttonClicked.addEventListener("click", advancePage2);
question2.style.display - "none";

function advancePage2() {
    question1.style.display = "none"
    question2.style.display = "block";
    showQuestion2();
}

function showQuestion2() {
    listOfQuestions[1].heading
    console.log(listOfQuestions[1].heading);
    var headingQuestion = document.getElementById("heading-question");
    headingQuestion.textContent = listOfQuestions[0].heading;
    console.log(listOfQuestions[1].choice1, listOfQuestions[1].choice2, listOfQuestions[1].choice3, listOfQuestions[1].choice4);
    var button1 = document.getElementById("choice1");
    button1.textContent = listOfQuestions[1].choice1; 
    var button2 = document.getElementById("choice2");
    button2.textContent = listOfQuestions[1].choice2; 
    var button3 = document.getElementById("choice3");
    button3.textContent = listOfQuestions[1].choice3;
    var button4 = document.getElementById("choice4");
    button4.textContent = listOfQuestions[1].choice4;  
}



        // ---------------------------------------------------------
// I will need to create a data storage for the correct answer
//this will need an if statement



