

var startQuiz = function () {
// setting variables
var i = 0;
var j = 0;
//var correctAnswer = 0;
    var quizI = quizInfo[i];
    // sets everything in place but only recognizes the first answer as a viable choice to move through array
    document.getElementById("questions").innerHTML =
        '<h1>' + quizI.question + '</h1>' + "<button id=choices>" + quizI.answers[j] + "</button>" + '<button id=choices>' + quizI.answers[j + 1] + '</button>' + "<button id=choices>" + quizI.answers[j + 2] + "</button>" + '<button id=choices>' + quizI.answers[j + 3] + '</button>';
    // function to go through array
    var nextQue = function () {
        if (i > quizInfo.length - 1) {
            i = 0;
        };
        startQuiz(i);
        i++ 
    };
    var next = document.getElementById("choices");
    next.addEventListener("click", nextQue);
    console.log(next);
};
// this is where my setInterval/setTimeout for my timer would go
// array for the quiz to use
var quizInfo = [
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: ["getElementId()",
            "getElementById()",
            "getElementsByClassName()",
            "Both 2 and 3"],
        correctAnswer: 3
    },
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answers: ["Both the datatype and the result of the expression are compared.",
            "Only the datatype of the expression is compared.",
            "Only the value of the expression is compared.",
            "None of the above."],
        correctAnswer: 0
    },
    {
        question: "What does the 'toLocateString()' method do in JS?",
        answers: ["Returns a localised object representation.",
            "Returns a parsed string.",
            "Returns a localized string representation of an object.",
            "None of the above."],
        correctAnswer: 2
    },
    {
        question: "The 3 basic object attributes in Javascript are:",
        answers: ["Class, prototype, objects' parameters.",
            "Class, prototype, objects' extensible flag.",
            "Class, parameters, objects' extensible flag.",
            "Classes, Native object, and Interfaces and Object's extensible flag."],
        correctAnswer: [1, 3]
    },
    {
        question: "Which of the following are closures in Javascript?",
        answers: ["Variables",
            "Functions",
            "Objects",
            "All of the above"],
        correctAnswer: 3
    },
    {
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        answers: ["async",
            "await",
            "setTimeout",
            "None of the above"],
        correctAnswer: 0
    },
    {
        question: "How to stop an interval timer in Javascript?",
        answers: ["intervalOver",
            "clearTimer",
            "clearInterval",
            "Cleartime"],
        correctAnswer: 2
    },
    {
        question: "How do we write a comment in javascript?",
        answers: ["/* */",
            "//",
            "#",
            "&&"],
        correctAnswer: 1
    },
    {
        question: "Which of the following are not server-side Javascript objects?",
        answers: ["Date",
            "FileUpload",
            "Function",
            "All of the above"],
        correctAnswer: 3
    },
    {
        question: "Which object in Javascript doesn't have a prototype?",
        answers: ["Base Object",
            "All objects have a prototype",
            "None of the objects have a prototype",
            "None of the above"],
        correctAnswer: 0
    }
];
var startBtn = document.querySelector("#choices")
startBtn.addEventListener("click", startQuiz)