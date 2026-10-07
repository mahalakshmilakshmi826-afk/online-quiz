const questions = [

    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],

        answer: 0
    },

    {
        question: "Which language is used to style a webpage?",

        options: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],

        answer: 1
    },

    {
        question: "Which language is used to add functionality to a webpage?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        answer: 2
    },

    {
        question: "What does CPU stand for?",

        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Unit",
            "Control Processing Unit"
        ],

        answer: 0
    },

    {
        question: "Which one is a programming language?",

        options: [
            "HTML",
            "CSS",
            "Java",
            "Chrome"
        ],

        answer: 2
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",

        options: [
            "//",
            "##",
            "<!-- -->",
            "**"
        ],

        answer: 0
    },

    {
        question: "Which data structure uses LIFO?",

        options: [
            "Queue",
            "Stack",
            "Array",
            "Linked List"
        ],

        answer: 1
    },

    {
        question: "Which data structure uses FIFO?",

        options: [
            "Stack",
            "Tree",
            "Queue",
            "Graph"
        ],

        answer: 2
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",

        options: [
            "variable",
            "int",
            "let",
            "define"
        ],

        answer: 2
    },

    {
        question: "Which company developed JavaScript?",

        options: [
            "Microsoft",
            "Netscape",
            "Google",
            "Apple"
        ],

        answer: 1
    }

];


let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let username = "";

let timeLeft = 60;

let timer;


/* Start Quiz */

function startQuiz() {

    username = document.getElementById("username").value;

    if (username.trim() === "") {

        alert("Please enter your name.");

        return;
    }

    document.getElementById("start-screen").style.display = "none";

    document.getElementById("quiz-screen").style.display = "block";

    currentQuestion = 0;

    score = 0;

    timeLeft = 60;

    showQuestion();

    startTimer();
}


/* Show Question */

function showQuestion() {

    selectedAnswer = null;

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        "Question " + (currentQuestion + 1) +
        " / " + questions.length;

    document.getElementById("question").textContent =
        question.question;

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";


    question.options.forEach(function(option, index) {

        const optionElement = document.createElement("div");

        optionElement.classList.add("option");

        optionElement.textContent = option;

        optionElement.onclick = function() {

            selectAnswer(index, optionElement);

        };

        optionsContainer.appendChild(optionElement);

    });


    if (currentQuestion === questions.length - 1) {

        document.getElementById("next-btn").textContent =
            "Submit Quiz";

    } else {

        document.getElementById("next-btn").textContent =
            "Next";
    }
}


/* Select Answer */

function selectAnswer(index, element) {

    selectedAnswer = index;

    const options =
        document.querySelectorAll(".option");

    options.forEach(function(option) {

        option.classList.remove("selected");

    });

    element.classList.add("selected");
}


/* Next Question */

function nextQuestion() {

    if (selectedAnswer === null) {

        alert("Please select an answer.");

        return;
    }


    if (selectedAnswer === questions[currentQuestion].answer) {

        score++;

    }


    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        finishQuiz();
    }
}


/* Timer */

function startTimer() {

    clearInterval(timer);

    timer = setInterval(function() {

        timeLeft--;

        document.getElementById("timer").textContent =
            "Time: " + timeLeft;


        if (timeLeft <= 0) {

            clearInterval(timer);

            finishQuiz();

        }

    }, 1000);
}


/* Finish Quiz */

function finishQuiz() {

    clearInterval(timer);

    document.getElementById("quiz-screen").style.display = "none";

    document.getElementById("result-screen").style.display = "block";


    document.getElementById("result-name").textContent =
        "Hello, " + username + "!";


    document.getElementById("score").textContent =
        "Your Score: " + score + " / " + questions.length;


    const percentage =
        (score / questions.length) * 100;


    document.getElementById("percentage").textContent =
        "Percentage: " + percentage + "%";
}


/* Restart Quiz */

function restartQuiz() {

    document.getElementById("result-screen").style.display = "none";

    document.getElementById("start-screen").style.display = "block";

    document.getElementById("username").value = "";

    timeLeft = 60;

    currentQuestion = 0;

    score = 0;
}