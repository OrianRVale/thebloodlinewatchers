const runesEl = document.getElementById('runes');

// Use Elder Futhark Norse runes and their matching English letters
const runesMap = {
  A: 'ᚨ',
  B: 'ᛒ',
  C: 'ᚲ',
  D: 'ᛞ',
  E: 'ᛖ',
  F: 'ᚠ',
  G: 'ᚷ',
  H: 'ᚺ',
  I: 'ᛁ',
  J: 'ᛃ',
  K: 'ᚲ',
  L: 'ᛚ',
  M: 'ᛗ',
  N: 'ᚾ',
  O: 'ᛟ',
  P: 'ᛈ',
  Q: 'ᚲ',
  R: 'ᚱ',
  S: 'ᛊ',
  T: 'ᛏ',
  U: 'ᚢ',
  V: 'ᚡ',
  W: 'ᚹ',
  X: 'ᛉ',
  Y: 'ᛃ',
  Z: 'ᛉ',
  ' ': ' ',
  ',': ',',
  '.': '.',
};

const phrase = 'THE CHOSEN ONE WILL REMEMBER, AND SO DO WE.';
let isRune = true;

function translate(text, toRunes) {
  return text
    .split('')
    .map(char => {
      const upper = char.toUpperCase();
      return toRunes ? (runesMap[upper] || char) : upper;
    })
    .join('');
}

function updateText() {
  runesEl.textContent = translate(phrase, isRune);
  isRune = !isRune;
}

// Initial display in runes
runesEl.textContent = translate(phrase, true);

// Tick effect every 10 seconds
setInterval(updateText, 10000);
