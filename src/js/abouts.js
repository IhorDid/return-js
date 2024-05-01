import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'swiper/css';
import 'swiper/css/navigation';

new Accordion('.about-me-secondlist', {
  openOnInit: [0],
  showMultiple: true,
});

const about = new Swiper('.swiper-about', {
  autoplay: {
    delay: 2500,
  },
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
  on: {
    init: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active-action');
        } else {
          slide.classList.remove('active-action');
        }
      });
    },

    slideChange: function () {
      const activeIndex = this.activeIndex;
      this.slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.classList.add('active-action');
        } else {
          slide.classList.remove('active-action');
        }
      });
    },
  },
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
