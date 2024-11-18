function checkLeapYear() {
    let year = document.getElementById("yearCheck").value;
    if (isNaN(year)  || year.length === 0) {
        return "Vui lòng nhập vào số hợp lệ"
    }
    else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 )){
        return "Đây là năm nhuận!";
    } else {
        return "Đây không phải là năm nhuận";
    }
}

document.getElementById("click").addEventListener("click", function Check() {
    alert(checkLeapYear());
})

function displayYearCheck() {
   alert(checkLeapYear());
}

function displayYearCheck2() {
    return checkLeapYear();
}
