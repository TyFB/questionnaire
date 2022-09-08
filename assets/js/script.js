var startQuiz = function () {
    document.getElementById("questions").innerHTML=
        "<h1>Which of the following methods is used to access HTML elements using Javascript?</h1> <button>1. getElementId()</button> <button>2. getElementById()</button> <button>3. getElementsByClassName()</button> <button id=answer>4. Both 2 and 3</button>";
        if (document.getElementById("#answer").clicked === true) {
            console.log("Found You!")
        }
    //document.getElementById("questions").innerHTML=
     //   "<h1>When the switch statement matches the expression with the given labels, how is the comparison done?</h1> <button id=answers>1. Both the datatype and the result of the expression are compared.</button> <button id=answers>2. Only the datatype of the expression is compared.</button> <button id=answers>3. Only the value of the expression is compared.</button> <button id=answers>4. None of the above.</button>";
}
var startBtn = document.querySelector("#start")
startBtn.addEventListener("click", startQuiz)