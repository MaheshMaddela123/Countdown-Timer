let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function StartStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("StartStop").innerText = "Start";
    } else {
        timer = setInterval(updateTimer, 1000);
        document.getElementById("StartStop").innerText = "Stop";
    }
    isRunning = !isRunning;
}

function Reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    isRunning = false;
    document.getElementById("StartStop").innerText = "Start";
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("num");
    display.innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

document.getElementById("StartStop").addEventListener("click", StartStop);
document.getElementById("Reset").addEventListener("click", Reset);
