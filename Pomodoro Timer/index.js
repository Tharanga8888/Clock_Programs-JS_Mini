let workTime = 25 * 60; 
let breakTime = 5 * 60; 
let time = workTime;
let isRunning = false;
let isWorkSession = true;
let timerInterval = null;

const timerDisplay = document.getElementById("timer");
const sessionLabel = document.getElementById("sessionLabel");

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  timerInterval = setInterval(() => {
    time--;

    if (time < 0) {
      clearInterval(timerInterval);
      isRunning = false;
      isWorkSession = !isWorkSession;

      time = isWorkSession ? workTime : breakTime;
      sessionLabel.textContent = isWorkSession ? "Work Time" : "Break Time";

      startTimer();
    }

    updateDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  isRunning = false;
  isWorkSession = true;
  time = workTime;
  sessionLabel.textContent = "Work Time";
  updateDisplay();
}

updateDisplay();
