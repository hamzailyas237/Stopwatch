var min = 0;
var sec = 0;
var msec = 0;
var minutes = document.getElementById('min')
var seconds = document.getElementById('sec')
var milliSeconds = document.getElementById('msec')
var interval;

function timer() {
    msec++
    milliSeconds.innerHTML = msec

    if (msec == 100) {
        sec++
        seconds.innerHTML = sec
        msec = 0
    }
    else if (sec == 60) {
        min++
        minutes.innerHTML = min
        sec = 0
    }
}
// interval = setInterval(timer, 10)

function start() {
    interval = setInterval(timer, 10)

    // Disable start button if it is click once
    var i = document.getElementsByTagName('button')
    if (msec = 1) {
        i[0].disabled = true
    }
}

function stop() {
    clearInterval(interval)
    
    // Able start button when stop button is pressed
    var i = document.getElementsByTagName('button')
    if ( i[1] = true ) {
        i[0].disabled = false
    }
}

function reset() {
    milliSeconds.innerHTML = 0
    seconds.innerHTML = 0
    minutes.innerHTML = 0
    stop()
}