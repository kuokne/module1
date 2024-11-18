
document.getElementById("answer").addEventListener("click", function checkAnswer () {
    let userAnswer = document.getElementById("question").value;
    if (userAnswer === "ECMAScript") {
        alert ("You are right!!!");
    } else {
        alert ("Didn’t know? ECMAScript") ;
    }
})



