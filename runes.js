const runes = [
  'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ',
  'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛋ',
  'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛝ', 'ᛟ', 'ᛞ'
];

const message = "THE CHOSEN ONE WILL REMEMBER, AND SO DO WE.";
const runeContainer = document.getElementById("runeRow");

function createRuneChar(initial, index) {
  const span = document.createElement("span");
  span.className = "rune-char";
  span.setAttribute("data-index", index);
  span.setAttribute("data-target", initial);
  span.textContent = getRandomRune();
  runeContainer.appendChild(span);
}

function getRandomRune() {
  return runes[Math.floor(Math.random() * runes.length)];
}

function flipRuneChar(span, target) {
  const interval = setInterval(() => {
    span.textContent = getRandomRune();
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    span.textContent = target;
    setTimeout(() => {
      span.textContent = getRandomRune();
    }, 5000); // stays in English before flipping back
  }, 2000); // runes flip rapidly for 2 seconds before showing English
}

function animateRunes() {
  const spans = document.querySelectorAll(".rune-char");
  spans.forEach((span, index) => {
    setTimeout(() => {
      const target = span.getAttribute("data-target");
      flipRuneChar(span, target);
    }, index * 3000); // delay each character 3 seconds apart
  });
}

// Initialize rune text
runeContainer.innerHTML = '';
for (let i = 0; i < message.length; i++) {
  const char = message[i] === " " ? " " : message[i];
  createRuneChar(char, i);
}

// Start animation loop
setInterval(animateRunes, 30000); // full animation cycle every 30 seconds
