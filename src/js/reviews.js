import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// Функция рендеринга
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
          <div class="swiper-slide reviem-card">
        <img src="${avatar_url}" alt="${author}" />
        <h3>${author}</h3>
        <p>${review}</p>
      </div>`
      )
      .join('')
  );

  swiper.update();
});

const hamala = new Swiper('#hamala', {
  direction: 'horizontal',

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
