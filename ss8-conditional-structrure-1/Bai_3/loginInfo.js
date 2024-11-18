document.getElementById("login").addEventListener("click", function checkUserInfo() {
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (userName.trim() === "") {
        alert("Canceled! Tên người dùng không hợp lệ! ");
    } else if (userName === "Admin") {
        if (password.trim() === "") {
            alert("Canceled! Mật khẩu không hợp lệ! ");
        } else if (password === "TheMaster") {
            alert("Welcome!");
        } else {
            alert("Wrong password!");
        }
    } else {
        alert("I dont know you!");
    }
})