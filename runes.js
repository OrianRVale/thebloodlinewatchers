const runes = [
  "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ", "ᚹ", "ᚺ", "ᚾ", "ᛁ", "ᛃ",
  "ᛇ", "ᛈ", "ᛉ", "ᛋ", "ᛏ", "ᛒ", "ᛖ", "ᛗ", "ᛚ", "ᛜ", "ᛞ", "ᛟ"
];

const message = "The chosen one will remember, and so do we.";
const messageRunes = message.split("").map((char, i) => ({
  char,
  rune: runes[i % runes.length]
}));

const runesEl = document.getElementById("runes");
runesEl.innerHTML = messageRunes.map(m => `<span>${m.rune}</span>`).join("");

let revealIndex = 0;
const interval = 300;

function animateRunes() {
  const spans = runesEl.querySelectorAll("span");
  if (revealIndex < spans.length) {
    spans[revealIndex].textContent = messageRunes[revealIndex].char;
    revealIndex++;
  } else {
    revealIndex = 0;
    spans.forEach((span, i) => {
      span.textContent = messageRunes[i].rune;
    });
  }
}

setInterval(animateRunes, interval);
