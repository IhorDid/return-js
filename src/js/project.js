import Swiper from 'swiper';
import 'swiper/css';
document.addEventListener('DOMContentLoaded', () => {
  try {
    const mySwiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.projects-next-btn',
        prevEl: '.projects-prev-btn',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    const updateButtonState = () => {
      const nextBtn = document.querySelector('.projects-next-btn');
      const prevBtn = document.querySelector('.projects-prev-btn');
      if (nextBtn && prevBtn) {
        updateButton(nextBtn, !mySwiper.isEnd);
        updateButton(prevBtn, !mySwiper.isBeginning);
      }
    };

    const updateButton = (button, isEnabled) => {
      button.classList.toggle('disabled', !isEnabled);
      button.style.opacity = isEnabled ? '1' : '0.5';
      button.style.cursor = isEnabled ? 'pointer' : 'not-allowed';
    };

    const handleNextButtonClick = () => {
      const nextBtn = document.querySelector('.projects-next-btn');
      if (nextBtn && !nextBtn.classList.contains('disabled')) {
        mySwiper.slideNext();
      }
    };

    const handlePrevButtonClick = () => {
      const prevBtn = document.querySelector('.projects-prev-btn');
      if (prevBtn && !prevBtn.classList.contains('disabled')) {
        mySwiper.slidePrev();
      }
    };

    const handleClick = e => {
      if (e.target.matches('.projects-next-btn')) {
        handleNextButtonClick();
      } else if (e.target.matches('.projects-prev-btn')) {
        handlePrevButtonClick();
      }
    };

    const handleKeyDown = e => {
      if (e.key === 'ArrowRight') {
        handleNextButtonClick();
      } else if (e.key === 'ArrowLeft') {
        handlePrevButtonClick();
      }
    };

    updateButtonState();

    document
      .querySelector('.projects-next-btn')
      .addEventListener('click', handleNextButtonClick);
    document
      .querySelector('.projects-prev-btn')
      .addEventListener('click', handlePrevButtonClick);
    document.addEventListener('keydown', handleKeyDown);

    mySwiper.on('slideChange', updateButtonState);

    mySwiper.on('swiper.touch.start', () => {
      document.addEventListener('swiper.touch.move', handleTouchMove);
    });

    mySwiper.on('swiper.touch.end', () => {
      document.removeEventListener('swiper.touch.move', handleTouchMove);
    });

    const handleTouchMove = evt => {
      const touch = evt.touches[0] || evt.changedTouches[0];
      const xDiff = touch.clientX - touch.startX;
      const yDiff = touch.clientY - touch.startY;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          mySwiper.slideNext();
        } else {
          mySwiper.slidePrev();
        }
      }
    };
  } catch (error) {
    console.error('An error occurred:', error);
  }
});
