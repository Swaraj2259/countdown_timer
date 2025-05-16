let timer;

function startCountdown() {
  const input = document.getElementById("dateInput").value;
  if (!input) return alert("Please select a date and time!");

  const end = new Date(input).getTime();

  clearInterval(timer); // clear previous countdown if any

  timer = setInterval(() => {
    let t = end - Date.now();
    if (t <= 0) {
      clearInterval(timer);
      document.getElementById("countdown").style.display = "none";
      document.getElementById("event-ended").style.display = "block";
      return;
    }

    let d = String(Math.floor(t / 86400000)).padStart(2, '0'),
        h = String(Math.floor(t / 3600000) % 24).padStart(2, '0'),
        m = String(Math.floor(t / 60000) % 60).padStart(2, '0'),
        s = String(Math.floor(t / 1000) % 60).padStart(2, '0');

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;

    document.getElementById("countdown").style.display = "flex";
    document.getElementById("event-ended").style.display = "none";
  }, 1000);
}