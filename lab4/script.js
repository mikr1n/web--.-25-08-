const stage = document.querySelector('#cradle-stage');
const toggleButton = document.querySelector('#toggle-motion');
const restartButton = document.querySelector('#restart-motion');

function setPaused(paused) {
  stage.classList.toggle('paused', paused);
  toggleButton.textContent = paused ? 'Продолжить' : 'Пауза';
  toggleButton.setAttribute('aria-pressed', String(paused));
}

toggleButton.addEventListener('click', () => {
  setPaused(!stage.classList.contains('paused'));
});

restartButton.addEventListener('click', () => {
  stage.classList.add('restarting');
  stage.classList.remove('paused');
  toggleButton.textContent = 'Пауза';
  toggleButton.setAttribute('aria-pressed', 'false');
  void stage.offsetWidth;
  stage.classList.remove('restarting');
});