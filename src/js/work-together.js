import { elements } from './elements';

// import to js "elements"

// modal: document.querySelector('.footer-modal'),
// footerForm: document.querySelector('.footer-form'),

const modal = document.querySelector('.footer-modal');
modal.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', closeModalWindow);

function closeModalWindow(event) {
  if (
    event.target.classList.contains('icon-close-modal') ||
    event.target.classList.contains('footer-modal') ||
    event.target.classList.contains('close-modal-button')
  ) {
    event.currentTarget.classList.add('is-hidden');
  }
  if (event.key === 'Escape') {
    modal.classList.add('is-hidden');
  }
}

// ----------------------------------------------------------------------------------
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import postUserInfo from './postApi';

const footerForm = document.querySelector('.footer-form');
footerForm.addEventListener('submit', submitFooterForm);

async function submitFooterForm(event) {
  event.preventDefault();
  const { userEmail, comments } = event.currentTarget.elements;
  if (!userEmail.value.trim() || !comments.value.trim()) {
    iziToast.error({
      message: 'Your query does not contain any letters!',
      position: 'topRight',
    });
    return;
  }
  const data = {
    email: userEmail.value,
    comment: comments.value,
  };

  try {
    const response = await postUserInfo(data);
    modal.classList.remove('is-hidden');

    console.log(response);
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    event.target.reset();
  }
}
