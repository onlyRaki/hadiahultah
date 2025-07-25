document.getElementById('startBtn').addEventListener('click', () => {
  const popup = document.getElementById('pop-up-download');
  const ready = document.getElementById('download-ready');
  const percentText = document.getElementById('percent');

  document.getElementById('startBtn').style.display = 'none';
  popup.classList.add('active');
  ready.classList.remove('active');

  let progress = 0;
  const interval = setInterval(() => {
    progress++;
    percentText.textContent = progress + '%';

    if (progress >= 100) {
      clearInterval(interval);
      popup.classList.remove('active');
      ready.classList.add('active');
    }
  }, 30);
});
