document.addEventListener("DOMContentLoaded", function () {
  const flipText = "The chosen one will remember, and so do we.";
  const runeMap = {
    A: "ᚨ", B: "ᛒ", C: "ᚲ", D: "ᛞ", E: "ᛖ", F: "ᚠ",
    G: "ᚷ", H: "ᚺ", I: "ᛁ", J: "ᛃ", K: "ᚴ", L: "ᛚ",
    M: "ᛗ", N: "ᚾ", O: "ᛟ", P: "ᛈ", Q: "ᛩ", R: "ᚱ",
    S: "ᛋ", T: "ᛏ", U: "ᚢ", V: "ᚡ", W: "ᚹ", X: "ᛪ",
    Y: "ᛇ", Z: "ᛉ", " ": " ", ",": ",", ".": "."
  };

  const display = document.getElementById("runeDisplay");

  let currentIndex = 0;
  let showingEnglish = false;

  function flipLetterByLetter() {
    let currentText = flipText.split('').map((char, idx) => {
      if (idx < currentIndex) return showingEnglish ? char : runeMap[char.toUpperCase()] || char;
      return showingEnglish ? runeMap[char.toUpperCase()] || char : char;
    }).join('');

    display.textContent = currentText;

    currentIndex++;

    if (currentIndex > flipText.length) {
      showingEnglish = !showingEnglish;
      currentIndex = 0;
    }

    setTimeout(flipLetterByLetter, 150); // slower tick
  }

  flipLetterByLetter();
});
