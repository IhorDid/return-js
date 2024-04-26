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

serviceReviews().then(data => {
  listReviews.insertAdjacentHTML(
    'afterbegin',
    data.map(
      ({ author, avatar_url, review }) => `
    <div class="swiper-slide">
        <img src="${avatar_url}" alt="${author}" />
        <h2>${author}</h2>
        <p>${review}</p>
    </div>`
    ).join('')
  );

  swiper.update();
});


const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
    modules: [Navigation],
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
