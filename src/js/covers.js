const marqueeContainer = document.querySelector('.marquee-inner');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const lines = entry.target.querySelectorAll('.marquee__line');
    lines.forEach(line => {
      if (entry.isIntersecting) {
        line.style.animationPlayState = 'paused'; // Зупиняємо анімацію
      } else {
        line.style.animationPlayState = 'running'; // Відновлюємо анімацію
      }
    });
  });
}, {
  threshold: 0.9,
});




