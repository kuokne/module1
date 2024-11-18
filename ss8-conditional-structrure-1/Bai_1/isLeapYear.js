function displayYearCheck() {
    let year = document.getElementById("yearCheck");
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 )){
        alert("Đây là năm nhuận!");
    } else {
        alert("Đây không phải là năm nhuận");
    }
}

document.getElementById("click").addEventListener("click", function Check() {
    let year = document.getElementById("yearCheck");
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 )){
        alert("Đây là năm nhuận!");
    } else {
        alert("Đây không phải là năm nhuận");
    }
})

