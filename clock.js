function updateClock() {
  const now = new Date();

  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');

  const currentTime = `${hours}:${minutes}:${seconds}`;
  document.getElementById('clock').textContent = currentTime;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
