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
  on: {
    slideChange: function () {
      const activeIndex = this.activeIndex;
      const allSlides = document.querySelectorAll('.swiper-slide-about');

      // Видалимо клас 'active' у всіх слайдів
      allSlides.forEach(slide => {
        slide.classList.remove('active');
      });

      // Додамо клас 'active' до активного слайда
      allSlides[activeIndex].classList.add('active');
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
export { boboob };
