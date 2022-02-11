//DOM elements
const daysEl = document.getElementById("days-number");
const hoursEl = document.getElementById("hours-number");
const minutesEl = document.getElementById("minutes-number");
const secondsEl = document.getElementById("seconds-number");

//Variables
const SECONDSINDAY = 60 * 60 * 24;

//Functions
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(() => {
  let nextNewYear = new Date().getFullYear() + 1;
  let nextNewYearDate = new Date(`${nextNewYear}/01/01`);
  let milisRemaining = nextNewYearDate.getTime() - Date.now();
  let secondsRemaining = Math.floor(milisRemaining / 1000);

  let days = Math.floor(secondsRemaining / SECONDSINDAY);
  let hours = Math.floor((secondsRemaining - days * SECONDSINDAY) / 3600);
  let minutes = Math.floor(
    (secondsRemaining - days * SECONDSINDAY - hours * 3600) / 60
  );
  let seconds =
    secondsRemaining - days * SECONDSINDAY - hours * 3600 - minutes * 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}, 1000);
