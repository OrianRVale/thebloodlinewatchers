
const runePairs = [
  ["ᚦ", "T"], ["ᛖ", "h"], ["ᛖ", "e"], ["ᚲ", " "],
  ["ᛒ", "c"], ["ᛚ", "h"], ["ᛟ", "o"], ["ᛋ", "s"],
  ["ᛖ", "e"], ["ᚾ", "n"], ["ᚲ", " "], ["ᛟ", "o"],
  ["ᚾ", "n"], ["ᚹ", "e"], ["ᛚ", " "], ["ᚹ", "r"],
  ["ᛖ", "e"], ["ᛗ", "m"], ["ᛖ", "e"], ["ᛗ", "m"],
  ["ᛞ", "b"], ["ᛖ", "e"], ["ᚱ", ","], ["ᚲ", " "],
  ["ᛗ", "a"], ["ᛞ", "n"], ["ᛞ", "d"], ["ᚲ", " "],
  ["ᛋ", "s"], ["ᛟ", "o"], ["ᛞ", " "], ["ᛞ", "o"],
  ["ᚢ", " "], ["ᚹ", "w"], ["ᛖ", "e"]
];

const runeElement = document.getElementById("runeMessage");

let currentStep = 0;
function cycleRunes() {
  const display = runePairs.map(([rune, latin], index) => {
    return index <= currentStep ? latin : rune;
  }).join(" ");
  runeElement.textContent = display;
  currentStep++;
  if (currentStep > runePairs.length) currentStep = 0;
}

setInterval(cycleRunes, 800);
cycleRunes();

function updateCountdown() {
  const countdown = document.getElementById("countdown");
  const targetDate = new Date("August 13, 2025 20:13:00").getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;
  if (diff < 0) {
    countdown.textContent = "The first flame has been revealed.";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  countdown.textContent = `⏳ ${days} days, ${hours} hours until the first flame is revealed`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
