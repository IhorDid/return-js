const hiddenElements = document.querySelectorAll('.marquee-inner');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      const lines = entry.target.querySelectorAll('.marquee__line');
      lines.forEach(line => {
        if (entry.isIntersecting) {
          line.style.animationPlayState = 'running';
        } else {
          line.style.animationPlayState = 'paused';
        }
      });
    });
  },
  {
    threshold: 0.4,
  }
);
hiddenElements.forEach(el => observer.observe(el));
