import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

// import { elements } from './elements.js';

const elements = {
  accordionItemsFaq: document.querySelectorAll('.faq'),
};

function toggleAccordion(item) {
  const headerFaq = item.querySelector('.faq-question-container');
  const contentFaq = item.querySelector('.faq-answer-container');
  const arrowIconFaq = headerFaq.querySelector('.faq-list-btn');

  item.classList.toggle('active');

  if (contentFaq.style.maxHeight) {
    contentFaq.style.maxHeight = null;
    arrowIconFaq.classList.remove('rotated');
  } else {
    contentFaq.style.maxHeight = contentFaq.scrollHeight + 'px';
    arrowIconFaq.classList.add('rotated');
  }
}

function initAccordion() {
  elements.accordionItemsFaq.forEach(item => {
    item.addEventListener('click', () => toggleAccordion(item));
  });
}

document.addEventListener('DOMContentLoaded', initAccordion);