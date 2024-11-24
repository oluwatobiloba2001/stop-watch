let secondsElapsed = 0;
let interval = null;
const time = document.getElementById('time')

function padStart(value){
    return String(value).padStart(2, '0')
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
    setTime();
}

let startClock = () => {
    interval = setInterval(timer,1000)
};

let stopClock = () => {
    clearInterval(interval);
    interval = null; // Optional: Reset the interval variable to prevent accidental restarts
};

let resetClock = () => {
    clearInterval(interval); // Stop the timer if it's running
    interval = null;         // Reset the interval variable
    secondsElapsed = 0;      // Reset the seconds counter
    setTime();               // Update the display to "0:0"
};
