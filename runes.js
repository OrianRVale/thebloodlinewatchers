
document.addEventListener("DOMContentLoaded", () => {
  const runeMessage = document.getElementById("runeReveal");
  const runeText = "ᚦᚺᛖ ᚲᚺᛟᛊᛖᚾ ᛟᚾᛖ ᚹᛁᛚᛚ ᚱᛖᛗᛖᛗᛒᛖᚱ, ᚨᚾᛞ ᛊᛟ ᛞᛟ ᚹᛖ.";
  const englishText = "The chosen one will remember, and so do we.";

  const delay = 125; // Increased delay between each character flip

  function splitAndWrap(text) {
    return text.split("").map((char, i) => {
      const span = document.createElement("span");
      span.innerText = char;
      span.style.setProperty("--char-index", i);
      return span;
    });
  }

  function animateFlip(from, to) {
    const spans = splitAndWrap(from);
    runeMessage.innerHTML = "";
    spans.forEach(span => runeMessage.appendChild(span));

    spans.forEach((span, i) => {
      setTimeout(() => {
        span.innerText = to[i] || "";
      }, i * delay);
    });
  }

  let showingRunes = true;
  setInterval(() => {
    if (showingRunes) {
      animateFlip(runeText, englishText);
    } else {
      animateFlip(englishText, runeText);
    }
    showingRunes = !showingRunes;
  }, 15000); // Slowed flip every 15 seconds
});
