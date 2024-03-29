function calculateAverage() {
    var sum = 0;
    var count = 0;
    for (var i = 500; i <= 565; i++) {
        if (i % 2 == 0) {
            sum += i;
            count++;
        }
    }
    var average = sum / count;
    document.getElementById("result").innerHTML = "Average of even numbers between 500 and 565: " + average;
}


window.onload = function() {
    calculateAverage();
}