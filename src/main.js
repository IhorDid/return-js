import {
  openModal,
  closeModal,
  toggleMenuHead,
  headOpenModal,
  setupMobileModal,
} from './js/header.js';
import './js/hero.js';
import './js/abouts.js';
import './js/benefits.js';
import './js/project.js';
import './js/questions.js';
import './js/covers.js';
import './js/reviews.js';
import './js/work-together.js';

// header menu function.
toggleMenuHead();
// open modal function.
headOpenModal();
//To close the modal window when clicking on anchor links.
setupMobileModal();
