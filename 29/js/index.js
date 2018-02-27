const timeLeft = document.querySelector('.displayTimeLeft');
const endedTime = document.querySelector('.displayEndTime');
const allButtonTimer = document.querySelectorAll('[data-time]');
let countdown;

allButtonTimer.forEach(button => button.addEventListener('click', startTimer));
document.form.addEventListener('submit', e => {
  const input = form.minutes.value;
  const int = parseInt(input);
  if (isNaN(int)) {
    console.log('error');
    return;
  }
  doTimer(int);
  e.preventDefault();

});

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  // console.log(seconds);
  doTimer(seconds);
}

function doTimer(seconds) {
  clearInterval(countdown);
  const timeNow = Date.now();
  const timeLimited = timeNow + seconds * 1000;

  displayTimeLeft(seconds);
  displayTimeEnd(timeLimited);

  countdown = setInterval(() => {
    const secondLeft = Math.round((timeLimited - Date.now()) / 1000);
    if (secondLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondLeft);
  }, 1000);

}

function displayTimeLeft(seconds) {
  const minutesLeft = Math.floor(seconds / 60);
  const secondLeft = seconds % 60;
  const display = `Left: ${minutesLeft} Minutes : ${secondLeft} Sec`;
  document.title = display;
  timeLeft.textContent = display;
}

function displayTimeEnd(timer) {
  const timeEnd = new Date(timer);
  const hour = timeEnd.getHours();
  const hourEnded = hour > 12 ? hour - 12 : hour;
  const minutesEnded = timeEnd.getMinutes();
  endedTime.textContent = `Be Bact At ${hourEnded}:${minutesEnded}`;
}
