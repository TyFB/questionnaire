var startQuiz = function () {
    for (var i = 0; i < quizInfo.length; i++) {
        if (time > 75){
        var quizI = quizInfo[i]
        document.getElementById("questions").innerHTML = 
        '<h1>' + quizI.question + '</h1>' + "<button>" + quizI.answers1 + "</button>" + '<button>' + quizI.answers2 + '</button>' + "<button>" + quizI.answers3 + "</button>" + '<button>' + quizI.answers4 + '</button>';
        }
    }
    var time = document.getElementById("timer").innerHTML="75";
};
var quizInfo = [
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers1: "1. getElementId()",
        answers2: "2. getElementById()",
        answers3: "3. getElementsByClassName()",
        answers4: "4. Both 2 and 3"
    },
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answers1: "1. Both the datatype and the result of the expression are compared.",
        answers2: "2. Only the datatype of the expression is compared.",
        answers3: "3. Only the value of the expression is compared.",
        answers4: "4. None of the above."
    },
    {
        question: "What does the 'toLocateString()' method do in JS?",
        answers1: "Returns a localised object representation.",
        answers2: "Returns a parsed string.",
        answers3: "Returns a localized string representation of an object.",
        answers4: "None of the above."
    },
    {
        question: "The 3 basic object attributes in Javascript are:",
        answers1: "Class, prototype, objects' parameters.",
        answers2: "Class, prototype, objects' extensible flag.",
        answers3: "Class, parameters, objects' extensible flag.",
        answers4: "Classes, Native object, and Interfaces and Object's extensible flag."
    },
    {
        question: "Which of the following are closures in Javascript?",
        answers1: "Variables",
        answers2: "Functions",
        answers3: "Objects",
        answers4: "All of the above"
    },
    {
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        answers1: "async",
        answers2: "await",
        answers3: "setTimeout",
        answers4: "None of the above"
    },
    {
        question: "How to stop an interval timer in Javascript?",
        answers1: "intervalOver",
        answers2: "clearTimer",
        answers3: "clearInterval",
        answers4: "Cleartime"
    },
    {
        question: "How do we write a comment in javascript?",
        answers1: "/* */",
        answers2: "//",
        answers3: "#",
        answers4: "&&"
    },
    {
        question: "Which of the following are not server-side Javascript objects?",
        answers1: "Date",
        answers2: "FileUpload",
        answers3: "Function",
        answers4: "All of the above"
    },
    {
        question: "Which object in Javascript doesn't have a prototype?",
        answers1: "Base Object",
        answers2: "All objects have a prototype",
        answers3: "None of the objects have a prototype",
        answers4: "None of the above"
    }
]
var startBtn = document.querySelector("#start")
startBtn.addEventListener("click", startQuiz)