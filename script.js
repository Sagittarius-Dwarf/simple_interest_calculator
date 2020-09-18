function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var d = new Date();
    var currentYear = d.getFullYear();
    var newYear = parseInt(currentYear) + parseInt(years);

    document.getElementById("result").innerHTML = "<br>If you deposit <mark>" + principal + "</mark>,<br>at an interest rate of <mark>" + rate + "</mark>.<br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + newYear + "</mark>.";
}


function slideVal() {
    var val = document.getElementById("rate").value;
    document.getElementById("current").innerHTML = val;
}
