import { elements } from './elements';

// import to js "elements"
// footerForm: document.querySelector('.footer-form'),

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as basicLightbox from 'basiclightbox';

import postUserInfo from './postApi';
import iconSvg from '../img/x.svg';
const footerForm = document.querySelector('.footer-form');
footerForm.addEventListener('submit', submitFooterForm);

// Function that makes POST request and makes a message about success/error for users
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
    console.log(response);
    const instance = basicLightbox.create(`
<div class="footer-modal">
  <div class="footer-modal-window">
    <button
      class="close-modal-button"
      aria-label="button to close the message"
    >
      <svg class="icon-close-modal" width="22" height="22">
        <use xlink:href="${iconSvg}#icon-close-modal"></use>
      </svg>
    </button>
    <h2 class="footer-modal-title">
      ${response.data.title}
    </h2>
    <p class="footer-modal-text">
      ${response.data.message}
    </p>
  </div>
</div>

`);
    instance.show();
    document.querySelector('body').classList.add('fix-scroll');
    localStorage.removeItem(key);
    handleClosing(instance.close);
    event.target.reset();
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  }
}
// Function that sets conditions for closing a modal window
function handleClosing(callback) {
  document.addEventListener('click', closeModalWindow);
  document.addEventListener('keydown', closeModalWindow);
  function closeModalWindow(event) {
    if (
      event.target.classList.contains('icon-close-modal') ||
      event.target.classList.contains('footer-modal') ||
      event.target.classList.contains('close-modal-button')
    ) {
      callback();
      document.querySelector('body').classList.remove('fix-scroll');
    }
    if (event.key === 'Escape') {
      callback();
      document.querySelector('body').classList.remove('fix-scroll');
    }
  }
}
// Prevent fields from being cleared on page refresh before the form is submitted
const key = `footer-form-state`;

if (localStorage.getItem(key)) {
  setPreviousValue();
}

footerForm.addEventListener('input', saveValue);
function saveValue(event) {
  const valueObj = JSON.parse(localStorage.getItem(key)) || {};
  const value = event.target.value;
  valueObj[event.target.name] = value.trim();
  localStorage.setItem(key, JSON.stringify(valueObj));
}

function setPreviousValue() {
  const previousValues = JSON.parse(localStorage.getItem(key));
  const previousEmail = previousValues.userEmail;
  const previousMessage = previousValues.comments;
  const { userEmail, comments } = footerForm.elements;

  userEmail.value = previousEmail || '';
  comments.value = previousMessage || '';
}
