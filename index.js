// Initialize variables to track the stopwatch state
let isRunning = false; // Indicates whether the stopwatch is currently running
let seconds = 0; // Number of seconds elapsed
let intervalId; // ID of the setInterval function, used to stop the interval later

// Get reference to the display element in the HTML
const display = document.querySelector('.display');

// Get references to the start, pause, and reset buttons in the HTML
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');

// Function to format time in HH:MM:SS format
function formatTime(time) {
    // Helper function to pad single-digit numbers with leading zeros
    const pad = (num) => num.toString().padStart(2, '0');

    // Calculate hours, minutes, and seconds
    const hours = pad(Math.floor(time / 3600));
    const minutes = pad(Math.floor((time % 3600) / 60));
    const secs = pad(time % 60);

    // Return formatted time as a string
    return `${hours}:${minutes}:${secs}`;
}

// Function to update the display with the current elapsed time
function updateDisplay() {
    display.textContent = formatTime(seconds);
}

// Function to start the stopwatch
function start() {
    // Check if the stopwatch is not currently running
    if (!isRunning) {
        // Start the setInterval function to increment seconds every 1000 milliseconds (1 second)
        intervalId = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
    // Update the state to indicate that the stopwatch is running
    isRunning = true;
}

// Function to pause the stopwatch
function pause() {
    // Stop the interval function, effectively pausing the stopwatch
    clearInterval(intervalId);
    // Update the state to indicate that the stopwatch is paused
    isRunning = false;
}

// Function to reset the stopwatch
function reset() {
    // Stop the interval function
    clearInterval(intervalId);
    // Reset the seconds to 0
    seconds = 0;
    // Update the display with the reset time
    updateDisplay();
    // Update the state to indicate that the stopwatch is not running
    isRunning = false;
}

// Add click event listeners to the buttons, calling the respective functions
startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);
