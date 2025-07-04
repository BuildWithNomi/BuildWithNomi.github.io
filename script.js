const card = document.querySelector('.card');
const flipBtn = document.getElementById('flipBtn');
const flipBackBtn = document.getElementById('flipBackBtn');

function flipToBack(e) {
  e.stopPropagation();
  card.style.transform = "scale(0.97)";
  setTimeout(() => {
    card.classList.add('is-flipped');
    card.style.transform = "";
  }, 100);
}

function flipToFront(e) {
  e.stopPropagation();
  card.style.transform = "scale(0.97)";
  setTimeout(() => {
    card.classList.remove('is-flipped');
    card.style.transform = "";
  }, 100);
}

flipBtn.addEventListener('click', flipToBack);
flipBackBtn.addEventListener('click', flipToFront);
flipBtn.addEventListener('touchstart', flipToBack);
flipBackBtn.addEventListener('touchstart', flipToFront);

// MATRIX BACKGROUND
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "01".split("");
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

setInterval(drawMatrix, 33);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
