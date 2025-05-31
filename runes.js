const runesText = "ᚦᚺᚲᛖᛋᛖᚾ ᚹᛁᛚᛚ ᚱᛖᛗᛖᛗᛒᛖᚱ, ᚨᚾᛞ ᛋᛟ ᛞᛟ ᚹᛖ.";
const englishText = "The chosen one will remember, and so do we.";
let flipIndex = 0;
let showingRunes = true;

const runeElement = document.getElementById("runeline");
const subtitleElement = document.getElementById("chapter-subtitle");

function flipRune() {
  const current = showingRunes ? runesText : englishText;
  const next = showingRunes ? englishText : runesText;

  const flipped = next.slice(0, flipIndex + 1) + current.slice(flipIndex + 1);
  runeElement.textContent = flipped;

  flipIndex++;

  if (flipIndex >= current.length) {
    showingRunes = !showingRunes;
    flipIndex = 0;
  }
}

// Slow eerie flips every 4 seconds
setInterval(flipRune, 4000);

// Countdown to first flame (August 13, 2025, 8:13 PM Central)
const launchTime = new Date("2025-08-13T20:13:00-05:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchTime - now;

  if (distance < 0) {
    countdownElement.textContent = "🔥 The flame has been revealed.";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.textContent = `⏳ ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until the first flame is revealed`;

  // Show Chapter One subtitle if 10 days or less
  if (days <= 10) {
    subtitleElement.classList.remove("hidden");
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);
