var startQuiz = function () {
    document.getElementById("questions").innerHTML = '<h1>' + quizInfo.question + '</h1>' + "<button>" + quizInfo.answers + "</button>";
};
var quizInfo = [
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: "1. getElementId()",
        answers: "2. getElementById()",
        answers: "3. getElementsByClassName()",
        answers: "4. Both 2 and 3"
    },
    {
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answers: "1. Both the datatype and the result of the expression are compared.",
        answers: "2. Only the datatype of the expression is compared.",
        answers: "3. Only the value of the expression is compared.",
        answers: "4. None of the above."
    },
    {
        question: "What does the ‘toLocateString()’ method do in JS?",
        answers: "Returns a localised object representation.",
        answers: "Returns a parsed string.",
        answers: "Returns a localized string representation of an object.",
        answersw: "None of the above."
    },
    {
        question: "The 3 basic object attributes in Javascript are:",
        answersw: "Class, prototype, objects' parameters.",
        answers: "Class, prototype, objects' extensible flag.",
        answersw: "Class, parameters, objects' extensible flag.",
        answers: "Classes, Native object, and Interfaces and Object's extensible flag."
    },
    {
        question: "Which of the following are closures in Javascript?",
        answers: "Variables",
        answers: "Functions",
        answers: "Objects",
        answers: "All of the above"
    },
    {
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        answers: "async",
        answersw: "await",
        answersw: "setTimeout",
        answersw: "None of the above"
    },
    {
        question: "How to stop an interval timer in Javascript?",
        answersw: "intervalOver",
        answersw: "clearTimer",
        answers: "clearInterval",
        answersw: "Cleartime"
    },
    {
        question: "How do we write a comment in javascript?",
        answersw: "/* */",
        answers: "//",
        answersw: "#",
        answersw: "&&"
    },
    {
        question: "Which of the following are not server-side Javascript objects?",
        answersw: "Date",
        answersw: "FileUpload",
        answersw: "Function",
        answers: "All of the above"
    },
    {
        question: "Which object in Javascript doesn’t have a prototype?",
        answers: "Base Object",
        answersw: "All objects have a prototype",
        answersw: "None of the objects have a prototype",
        answersw: "None of the above"
    }
]
var startBtn = document.querySelector("#start")
startBtn.addEventListener("click", startQuiz)