import { openModal, closeModal } from './js/header.js';
import './js/hero.js';
import './js/abouts.js';
import './js/benefits.js';
import './js/project.js';
import './js/questions.js';
import './js/covers.js';
import './js/reviews.js';
import './js/work-together.js';
// header no scrol function

//function open burger

(() => {
  const refs = {
    openModalBtn: document.querySelector('.head-btn'),
    closeModalBtn: document.querySelector('.modal-close-btn'),
    modal: document.querySelector('.mobile-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
