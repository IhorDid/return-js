import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// import { accordionItemsFaq, headerFaq, contentFaq, arrowIconFaq } from './elements.js';
  
// const elements = {
//   accordionItemsFaq : document.querySelectorAll('.faq'),
//   headerFaq : item.querySelector('.faq-question-container'),
//   contentFaq : item.querySelector('.faq-answer-container'),
//   arrowIconFaq : header.querySelector('.faq-list-btn'),
// };


// function initAccordion() {
//     elements.accordionItemsFaq.forEach(item => {

//     elements.headerFaq.addEventListener('click', function () {
//       item.classList.toggle('active');

//       if (content.style.maxHeight) {
//         elements.contentFaq.style.maxHeight = null;
//         elements.arrowIconFaq.classList.remove('rotated');
//       } else {
//         elements.contentFaq.style.maxHeight = content.scrollHeight + 'px';
//         elements.arrowIconFaq.classList.add('rotated');
//       }
//     });
//   });
// }

// document.addEventListener('DOMContentLoaded', initAccordion);


//  Function Declaration

function initAccordion() {
  const accordionItems = document.querySelectorAll('.faq');
  accordionItems.forEach(item => {
    const header = item.querySelector('.faq-question-container');
    const content = item.querySelector('.faq-answer-container');
    const arrowIcon = header.querySelector('.faq-list-btn');

    header.addEventListener('click', function () {
      item.classList.toggle('active');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        arrowIcon.classList.remove('rotated');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        arrowIcon.classList.add('rotated');
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initAccordion);

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
