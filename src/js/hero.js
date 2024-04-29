const elements = {
  heroBack: document.querySelector('#background'),
};

const backgroundImages = [
  'url(./img/hero/hero-1.png)',
  'url(./img/hero/hero-2.png)',
  'url(./img/hero/hero-3.png)',
  'url(./img/hero/hero-4.png)',
  'url(./img/hero/hero-6.png)',
];
let currentIndex = 0;

function changeBackground() {
  elements.heroBack.opacity = 0;
  setTimeout(function () {
    elements.heroBack.style.backgroundImage = backgroundImages[currentIndex];
    elements.heroBack.style.opacity = 1;
  }, 2000);
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

setInterval(changeBackground, 3000);
