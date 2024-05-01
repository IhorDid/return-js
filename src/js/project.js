import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const reket = new Swiper('.myswiper', {
  slidesPerView: 1,
  spaceBetween: 800,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.projects-next-btn',
    prevEl: '.projects-prev-btn',
  },
});
export { reket };
