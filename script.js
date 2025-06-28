const card = document.querySelector('.card');
const flipBtn = document.getElementById('flipBtn');
const flipBackBtn = document.getElementById('flipBackBtn');

flipBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  card.classList.add('is-flipped');
});

flipBackBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  card.classList.remove('is-flipped');
});
