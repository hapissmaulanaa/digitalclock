// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById("clock").innerHtml =
//     h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }

// function checkTime(i){
//     if (i<10) {
//         i = "0" + i;
//     }
//     return i;
// }

function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var session = document.getElementById('session');

    if (hrs >= 12) {
        session.innerHTML = 'PM'
    }else{
        session.innerHTML = 'AM'
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
}
setInterval(displayTime, 1000);