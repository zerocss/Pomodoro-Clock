var totalTime = 1500;
var breakTotalTime = 300;
var minute = Math.floor(totalTime / 60);
var seconds = totalTime - (60 * minute);
var timeToString = document.querySelector(".pomodoro");
var startButton = document.querySelector(".start")
var stopButton = document.querySelector(".stop");
var pauseButton = document.querySelector(".pause");
var interval; // start timer interval
var countStarted = false;
var breakTime = false;

timeToString.innerHTML = updateDOM(minute, seconds);

function timer() {
    if(totalTime === 0) {
        breakTotalTime--;
        breakTime = true;
        minute = Math.floor(breakTotalTime / 60);
        seconds = breakTotalTime - (60 * minute);
            if(breakTotalTime === 0)
                totalTime = 1500;
    } else {
        totalTime--;
        breakTime = false;
        minute = Math.floor(totalTime / 60);
        seconds = totalTime - (60 * minute);
        breakTotalTime = 300;
    }
    timeToString.innerHTML = updateDOM(minute, seconds);
}

function updateDOM(minute, seconds) {
    
    if(seconds < 10) {
        return minute + ":0" + seconds;
    }
    else {
        return minute + ":" + seconds;
    } 
}

function startCounter() {
    if(countStarted === false)
        interval = setInterval(timer, 1000);
    countStarted = true;
}

function stopCounter() {
    clearInterval(interval);
    interval = false;
    if(breakTime === true) {
        totalTime = 300;
    }
    else {
        totalTime = 1500;
    }
    
    minute = Math.floor(totalTime / 60);
    seconds = totalTime - (60 * minute);
    countStarted = false;
    timeToString.textContent = updateDOM(minute, seconds);
}

function pauseCounter() {
    clearInterval(interval);
    interval = false;
    countStarted = false;
}

function refreshCounter() {
    if(breakTime === true) {
        totalTime = 300;
    }
    else {
        totalTime = 1500;
    }
    
    minute = Math.floor(totalTime / 60);
    seconds = totalTime - (60 * minute);
    timeToString.textContent = updateDOM(minute, seconds);
}







