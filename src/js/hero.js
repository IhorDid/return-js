// import heroOne from '../img/hero/hero-1.png';
// import heroTwo from '../img/hero/hero-2.png';
// import heroThree from '../img/hero/hero-3.png';
// import heroFour from '../img/hero/hero-4.png';
// import heroFive from '../img/hero/hero-6.png';
const elements = {
  heroBack: document.querySelector('#background'),
};

const backgroundImages = [
  './img/hero/hero-1.png',
  './img/hero/hero-2.png',
  './img/hero/hero-3.png',
  './img/hero/hero-4.png',
  './img/hero/hero-6.png',
];
let currentIndex = 0;

function changeBackground() {
  elements.heroBack.opacity = 0;
  setTimeout(function () {
    elements.heroBack.style.backgroundImage =
      'url(' + backgroundImages[currentIndex] + ')';
    elements.heroBack.style.opacity = 1;
  }, 2000);
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

setInterval(changeBackground, 3000);
