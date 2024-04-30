import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

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
  } catch (error) {;
    iziToast.error({
      message: 'No reviews found!',
      position: 'topRight',
    });
    
    const hiddenPlaceholder = document.querySelector('.placeholder-text-hidden');
    hiddenPlaceholder.classList.replace('placeholder-text-hidden', 'placeholder-text');
    console.log(hiddenPlaceholder);
  }
}
createReviews();

const reviewsSwiper = new Swiper('#reviews-swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,
  keyboard: {
    enabled: true,
  },
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
