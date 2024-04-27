import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('#acc3', {
  openOnInit: [0],
  showMultiple: true,
});

const boboob = new Swiper('.swiper-about', {
  centeredSlides: false,
  grabCursor: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  mousewheel: true,
  touch: true,
  navigation: {
    nextEl: '.about-button-next',
  },
  spaceBetween: 0,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});
