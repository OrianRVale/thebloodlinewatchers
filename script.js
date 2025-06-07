// Rune phrases and translations
const runeMap = {
  'ᚠ': 'T',
  'ᚢ': 'H',
  'ᚦ': 'E',
  'ᚨ': ' ',
  'ᚱ': 'C',
  'ᚲ': 'H',
  'ᛊ': 'O',
  'ᛏ': 'S',
  'ᛒ': 'E',
  'ᛚ': 'N',
  'ᚺ': ' '
};

const phrases = [
  "ᚠᚢᚦᚨᚱᚲ ᛊᛏᚨᚦᚱ ᛒᛚᚨᚺ",  // THE CHOSEN ONE
  "ᚠᚢᚦᚨᚱᚲ ᛏᚨᛁᚾ ᚱᚢᚾᛖ",      // THAIN RUNE (mystery filler)
  "ᚠᚢᚦᚨᚱᚲ ᛋᚺᚨᛞᛟᚹ",          // SHADOW
  "ᚠᚢᚦᚨᚱᚲ ᛊᛏᚨᚦᚱ ᛗᚨᚲᛁᚲ"      // STAR MAGIC
];

const englishMap = {
  "ᚠᚢᚦᚨᚱᚲ ᛊᛏᚨᚦᚱ ᛒᛚᚨᚺ": "THE CHOSEN ONE",
  "ᚠᚢᚦᚨᚱᚲ ᛏᚨᛁᚾ ᚱᚢᚾᛖ": "THE ANCIENT RUNE",
  "ᚠᚢᚦᚨᚱᚲ ᛋᚺᚨᛞᛟᚹ": "SHADOW RISES",
  "ᚠᚢᚦᚨᚱᚲ ᛊᛏᚨᚦᚱ ᛗᚨᚲᛁᚲ": "STARCHILD AWAKENS"
};

const runeElement = document.getElementById('runePhrase');
let index = 0;
let showingRunes = true;

setInterval(() => {
  const rune = phrases[index];
  runeElement.textContent = showingRunes
    ? englishMap[rune]
    : rune;
  showingRunes = !showingRunes;
  if (showingRunes) index = (index + 1) % phrases.length;
}, 5000);
