var countDownDate = new Date("March 7 , 2018 22:37:25").getTime();


var countdownfunction = setInterval(function () {

    var now = new Date().getTime();

    //Distance between the Now and the deadline
    var distance = countDownDate - now;

    // Time calculation
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Output
    document.getElementById("demo").innerHTML = "Deadline Reached";
})

