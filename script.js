// RUNE FLIP
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

function decodeRunes(runes) {
  return runes.split('').map(char => runeMap[char] || char).join('');
}

const runeElement = document.getElementById('runePhrase');
let showingRunes = true;

setInterval(() => {
  runeElement.textContent = showingRunes
    ? decodeRunes(runeElement.textContent)
    : 'ᚠᚢᚦᚨᚱᚲ ᛊᛏᚨᚦᚱ ᛒᛚᚨᚺ';
  showingRunes = !showingRunes;
}, 4000);

// TRIANGLE EFFECT
const canvas = document.getElementById("triangleCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

function drawTriangle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, canvas.height / 2 - 60);
  ctx.lineTo(canvas.width / 2 - 50, canvas.height / 2 + 40);
  ctx.lineTo(canvas.width / 2 + 50, canvas.height / 2 + 40);
  ctx.closePath();

  ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 + 0.3 * Math.random()})`;
  ctx.lineWidth = 2;
  ctx.shadowColor = "#ffd700";
  ctx.shadowBlur = Math.random() * 15;
  ctx.stroke();
}

setInterval(drawTriangle, 2500);
