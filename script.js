const countdown = document.getElementById("countdown");
const title = document.getElementById("title");

// Set birthday date (18 April 2026, 12:00 AM)
const birthday = new Date("April 18, 2026 00:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = birthday - now;

 if (distance <= 0) {
  clearInterval(timer);
  countdown.innerText = "";

  const message = "Happy Birthday to the one who just gets me 💫";
  let i = 0;

  function typeEffect() {
    if (i < message.length) {
      title.innerText += message.charAt(i);
      i++;
      setTimeout(typeEffect, 50);
    }
  }

  title.innerText = "";
  typeEffect();
}

  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerText = `${hours}h ${minutes}m ${seconds}s`;
}, 1000);

function showMessage() {
  document.getElementById("extra").style.display = "block";
}