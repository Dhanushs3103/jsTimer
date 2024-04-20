// JS code starts here 

let start = document.getElementById("Start");
let reset = document.getElementById("Reset");
let pause = document.getElementById("Pause");

let timeRemaining;
let intervalId;

start.addEventListener("click",startTimer);
pause.addEventListener("click",pauseTimer);
reset.addEventListener("click",resetTimer);

// function to start the timer
function startTimer () {
    let hours = document.getElementById("hours").value;
    let minutes = document.getElementById("minutes").value;
    let seconds = document.getElementById("seconds").value;

    if(hours == "" && minutes == "" && seconds == "") {
        alert("Please enter the time");
        return;
    }

    let timeRemaining = hours*3600 + minutes*60 + seconds;
    intervalId = setInterval(function () {
            timeRemaining--;
            let hr = Math.floor(timeRemaining/3600);
            let min = Math.floor((timeRemaining%3600)/60);
            let sec = timeRemaining%60;

            document.getElementById("hours").value = hr;
            document.getElementById("minutes").value = min;
            document.getElementById("seconds").value = sec;
       
            if(timeRemaining === 0) {
                clearInterval(intervalId);
                alert("Time is up 🛑⏱️🛑");
                
            }
    },1000)


}

// function to pause the timer
function pauseTimer () {
    clearInterval(intervalId);
    timeRemaining = null;

}

// function to reset the timer
function resetTimer () {
    pauseTimer();
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
}