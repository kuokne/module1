document.getElementById("button1").addEventListener("click",function showMessage1() {
    alert("Hello World!");
})

document.getElementById("button2").addEventListener("click",function showMessage2() {
    document.getElementById("messageDiv").innerHTML = "Hello World!";
})

document.getElementById("button3").addEventListener("click",function showMessage3() {
    document.write("Xin chào!");
})

document.getElementById("button4").addEventListener("click",function showMessage4() {
    console.log("おはようございます！");
})