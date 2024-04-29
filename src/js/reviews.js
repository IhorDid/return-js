import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import axios from 'axios';

// Функция рендеринга
/*
const listReviews = document.querySelector('.js-list');

async function serviceReviews() {
  const resp = await fetch('https://portfolio-js.b.goit.study/api/reviews');
  return resp.json();
}

serviceReviews().then(data => {
  listReviews.insertAdjacentHTML(
    'afterbegin',
    data
      .map(
        ({ author, avatar_url, review }) => `
          <div class="swiper-slide review-card">
        <img src="${avatar_url}" alt="${author}" class="review-card-foto"/>
        <h3 class="review-card-name">${author}</h3>
        <p class="review-card-text">${review}</p>
      </div>`
      )
      .join('')
  );

    // reviewsSwiper.update();
});
*/

const listReviews = document.querySelector('#review-card');

async function serviceReviews() {
  const resp = await axios('https://portfolio-js.b.goit.study/api/reviews');
  return resp.data;
}

async function createReviews() {
  try {
    const response = await serviceReviews();
    console.log(response);
    listReviews.insertAdjacentHTML(
      'afterbegin',
      response
        .map(
          ({ _id, author, avatar_url, review }) => `
          <li class="review-card   swiper-slide"  id="${_id}">
        <img class="revem-img" src="${avatar_url}" alt="${author}"  width="48" height="48" loading="lazy"/>
        <div class="position">
        <h3 class="review-card-name">${author}</h3>
        <p class="review-card-text">${review.trim()}</p>
     </div>
        </li>`
        )
        .join('')
    );
  } catch (error) {
    alert(error.message);
  }
}
createReviews();

const reviewsSwiper = new Swiper('#reviews-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,

  autoHeight: true,
  //оболочка слайдера адаптирует свою высоту к высоте текущего активного слайда.

  mousewheel: {
    invert: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 1,
      spaceBetween: 18,
    },
  },
  navigation: {
    nextEl: '.btn-next-review',
    prevEl: '.btn-prev-review',
  },
});
