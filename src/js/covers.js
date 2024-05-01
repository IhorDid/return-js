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

const marqueeLines = document.querySelectorAll('.marquee__line');

marqueeLines.forEach(line => {
  line.addEventListener('mouseenter', () => {
    const image = line.querySelector('.covers-image');

    image.classList.add('rotate-image');

    const englishWish = document.createElement('div');
    englishWish.textContent = 'We are Legendary';
    englishWish.classList.add('english-wish');

    line.appendChild(englishWish);

    setTimeout(() => {
      englishWish.style.animation = 'fadeIn 3.5s ease';
      englishWish.style.opacity = '1';
    }, 100);
  });

  line.addEventListener('mouseleave', () => {
    const image = line.querySelector('.covers-image');

    image.classList.remove('rotate-image');

    const englishWish = line.querySelector('.english-wish');

    englishWish.remove();
  });
});
