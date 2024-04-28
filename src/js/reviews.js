
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';



// Функция рендеринга

const listReviews = document.querySelector('.js-list');

async function serviceReviews() {
  const resp = await fetch('https://portfolio-js.b.goit.study/api/reviews');
  return resp.json();
}

const swiperReviews = new Swiper('.reviews-swiper', {

  modules: [Navigation],
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  slidesPerView: 1,

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1440px
   1440: {
      slidesPerView: 4,
    },
  },

  modules: [Navigation],
  
  navigation: {
    nextEl: '.swiper-btn-prev',
    prevEl: '.swiper-btn-next',
  },

});


serviceReviews().then(data => {
  listReviews.insertAdjacentHTML(
    'afterbegin',
    data.map(
      ({ author, avatar_url, review }) => `
    <div class="review-card">
       /* <img src="${avatar_url}" alt="${author}" class="review-card-foto" />
        <h3 class="review-card-name">${author}</h3>
        <p class="review-card-text">${review}</p>
    </div>`
    ).join('')
  );

  swiperReviews.update();
});






/*
const swiperContainer = document.querySelector('.reviews-swiper');
const swiper = new Swiper(swiperContainer, {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 16,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
  direction: 'horizontal',
  navigation: {
    nextEl: '.reviews-next-btn',
    prevEl: '.reviews-prev-btn',
  },
}); 
*/
