import heroOne from '../img/hero/hero-1.png';
import heroTwo from '../img/hero/hero-2.png';
import heroThree from '../img/hero/hero-3.png';
import heroFour from '../img/hero/hero-4.png';
import heroFive from '../img/hero/hero-6.png';
import mobOne from '../img/hero/hero_mob@1x.png';
import mobTwo from '../img/hero/mon-1.jpg';
import mobThree from '../img/hero/mob-2.jpg';
import mobFour from '../img/hero/mob-3.jpg';
import mobFive from '../img/hero/mob-4.jpg';
import tabOne from '../img/hero/hero_tab@1x.png';
import tabTwo from '../img/hero/tab-1.jpg';
import tabTree from '../img/hero/tab-2.jpg';
import tabFour from '../img/hero/tab-3.jpg';
import tabFive from '../img/hero/tab-4.jpg';

import { elements } from './elements';
const backgroundImages = [heroOne, heroTwo, heroThree, heroFour, heroFive];
const backgroundImagesTablet = [tabOne, tabTwo, tabTree, tabFour, tabFive];
const backgroundImagesMobile = [mobOne, mobTwo, mobThree, mobFour, mobFive];
let currentIndex = 0;

function changeBackground() {
  elements.heroBack.opacity = 0;
  setTimeout(function () {
    let currentImages;
    if (window.innerWidth >= 1440) {
      currentImages = backgroundImages;
    } else if (window.innerWidth >= 768) {
      currentImages = backgroundImagesTablet;
    } else {
      currentImages = backgroundImagesMobile;
    }
    elements.heroBack.style.backgroundImage =
      'url(' + currentImages[currentIndex] + ')';
    elements.heroBack.style.opacity = 1;
  }, 2500);
  currentIndex = (currentIndex + 1) % backgroundImages.length;
}

setInterval(changeBackground, 5000);
