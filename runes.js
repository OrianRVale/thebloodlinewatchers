const runeContainer = document.getElementById('runes-container');

const norseRunes = [
  'ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ',
  'ᛁ', 'ᛃ', 'ᛇ', 'ᛈ', 'ᛉ', 'ᛋ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ',
  'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ'
];

const englishText = "The chosen one will remember, and so do we.";
let runeIndex = 0;
let revealIndex = 0;
let direction = 'toEnglish'; // toggles between directions

function flipLetterByLetter() {
  let display = "";

  for (let i = 0; i < englishText.length; i++) {
    const char = englishText[i];

    if (i < revealIndex) {
      display += direction === 'toEnglish' ? char : getRandomRune();
    } else if (char === " ") {
      display += " ";
    } else {
      display += getRandomRune();
    }
  }

  runeContainer.textContent = display;

  if (revealIndex < englishText.length) {
    revealIndex++;
  } else {
    setTimeout(() => {
      direction = direction === 'toEnglish' ? 'toRunes' : 'toEnglish';
      revealIndex = 0;
    }, 3000); // Pause before flip back
  }

  setTimeout(flipLetterByLetter, 150); // Slower eerie tick
}

function getRandomRune() {
  return norseRunes[Math.floor(Math.random() * norseRunes.length)];
}

flipLetterByLetter();
