let countdown;

const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("button");

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    // Math.round(): 四舍五入(正数)
    // Math.floor(): 去掉小数点后面的值取整(正数)
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    console.log(secondsLeft);
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const mins = Math.floor((seconds / 60));
  const reminderSeconds = seconds % 60;
  console.log({mins, reminderSeconds});
  
  const display = `${mins}:${reminderSeconds < 10 ? '0' : ''}${reminderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const mins = end.getMinutes();
  endTime.textContent = `BE BACK AT ${hours}:${mins}`;
}

function startTimer() {
  const seconds = this.dataset.time;
  timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});