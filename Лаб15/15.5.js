function addLeadingZero(num) {
  return num < 10 ? "0" + num : num;
}

function updateCountdown() {
  let now = new Date();
  let nextYear = now.getFullYear() + 1;
  let newYear = new Date(`January 1, ${nextYear} 00:00:00`);
  let diff = newYear - now;

  let countdownDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  let countdownHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  let countdownMinutes = Math.floor((diff / (1000 * 60)) % 60);
  let countdownSeconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = addLeadingZero(countdownDays);
  document.getElementById('hours').textContent = addLeadingZero(countdownHours);
  document.getElementById('minutes').textContent = addLeadingZero(countdownMinutes);
  document.getElementById('seconds').textContent = addLeadingZero(countdownSeconds);
}

setInterval(updateCountdown, 1000);
updateCountdown(); 