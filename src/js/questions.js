import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// import { elements } from './elements.js';
  
const elements = {
  accordionItemsFaq: document.querySelectorAll('.faq'),
};

function initAccordion() {
  elements.accordionItemsFaq.forEach(item => {
    const headerFaq = item.querySelector('.faq-question-container');
    const contentFaq = item.querySelector('.faq-answer-container');
    const arrowIconFaq = headerFaq.querySelector('.faq-list-btn');

    headerFaq.addEventListener('click', function () {
      item.classList.toggle('active');

      if (contentFaq.style.maxHeight) {
        contentFaq.style.maxHeight = null;
        arrowIconFaq.classList.remove('rotated');
      } else {
        contentFaq.style.maxHeight = contentFaq.scrollHeight + 'px';
        arrowIconFaq.classList.add('rotated');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initAccordion);


//  Function Declaration

// function initAccordion() {
//   const accordionItems = document.querySelectorAll('.faq');
//   accordionItems.forEach(item => {
//     const header = item.querySelector('.faq-question-container');
//     const content = item.querySelector('.faq-answer-container');
//     const arrowIcon = header.querySelector('.faq-list-btn');

//     header.addEventListener('click', function () {
//       item.classList.toggle('active');

//       if (content.style.maxHeight) {
//         content.style.maxHeight = null;
//         arrowIcon.classList.remove('rotated');
//       } else {
//         content.style.maxHeight = content.scrollHeight + 'px';
//         arrowIcon.classList.add('rotated');
//       }
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', initAccordion);

// Сallback function

// document.addEventListener('DOMContentLoaded', function () {
//   const accordionItems = document.querySelectorAll('.faq');
//   accordionItems.forEach(item => {
//     const header = item.querySelector('.faq-question-container');
//     const content = item.querySelector('.faq-answer-container');
//     const arrowIcon = header.querySelector('.faq-list-btn');

//     header.addEventListener('click', function () {
//       item.classList.toggle('active');

//       if (content.style.maxHeight) {
//         content.style.maxHeight = null;
//         arrowIcon.classList.remove('rotated');
//       } else {
//         content.style.maxHeight = content.scrollHeight + 'px';
//         arrowIcon.classList.add('rotated');
//       }
//     });
//   });
// });
