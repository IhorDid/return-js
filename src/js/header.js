import { elements } from './elements';

function addHiddenClass() {
  if (elements.mobileModal) {
    elements.mobileModal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  }
}

function closeModalBtn() {
  elements.modalOrderBtns.forEach(function (btn) {
    btn.addEventListener('click', addHiddenClass);
  });
}

document.addEventListener('DOMContentLoaded', closeModalBtn());

function openModal() {
  document.body.classList.add('no-scroll');
}

function closeModal() {
  document.body.classList.remove('no-scroll');
}

function toggleModal() {
  elements.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function headOpenModal() {
  elements.openModalBtn.addEventListener('click', toggleModal);
  elements.closeModalBtn.addEventListener('click', toggleModal);
}

function toggleMenuHead() {
  elements.titleBtn.addEventListener('click', toggleMenu);

  document.addEventListener('click', hideOnClickOutside);

  function toggleMenu() {
    const isVisible = elements.menuItems[0].classList.contains('active');

    if (isVisible) {
      hideMenuItems();
    } else {
      showMenuItems();
    }
  }

  function hideOnClickOutside(event) {
    const isTitleBtnClicked = event.target.closest('.nav-title-btn');
    if (!isTitleBtnClicked) {
      hideMenuItems();
    }
  }

  function hideMenuItems() {
    elements.menuItems.forEach(fadeOut);
  }

  function fadeOut(item, index) {
    setTimeout(() => {
      if (!item.classList.contains('opacity')) {
        item.style.opacity = 0;
        item.classList.remove('active');
        if (!item.classList.contains('active')) {
          item.classList.add('pointer-events-none');
        }
      }
    }, (elements.menuItems.length - index) * 50);
  }

  function showMenuItems() {
    elements.menuItems.forEach(fadeIn);
  }

  function fadeIn(item, index) {
    setTimeout(() => {
      if (!item.classList.contains('opacity')) {
        item.style.opacity = 0;
        item.classList.add('active');
        if (item.classList.contains('active')) {
          item.classList.remove('pointer-events-none');
        }
        setTimeout(() => {
          item.style.opacity = 1;
        }, 50);
      }
    }, index * 150);
  }

  elements.menuItems.forEach(function hide(item) {
    item.classList.add('hidden-modal');
  });

  elements.titleBtn.addEventListener('click', showHiddenModal);

  function showHiddenModal() {
    elements.menuItems.forEach(show);
  }

  function show(item) {
    item.classList.remove('hidden-modal');
  }
}

function setupMobileModal() {
  document.addEventListener('DOMContentLoaded', addEventListeners);

  function addEventListeners() {
    elements.modalLinks.forEach(link => {
      link.addEventListener('click', closeModal);
    });

    elements.closeButton.addEventListener('click', closeModal);

    elements.menuItems.forEach(item => {
      item.addEventListener('click', closeAndHideModal);
    });

    elements.modalLinks.forEach(link => {
      if (link.classList.contains('modal-link-yk')) {
        link.addEventListener('click', hideModal);
      }
    });
  }

  function closeAndHideModal() {
    closeModal();
    elements.modal.classList.add('is-hidden');
  }

  function hideModal() {
    elements.modal.classList.add('is-hidden');
  }
}

toggleMenuHead();
headOpenModal();
setupMobileModal();
