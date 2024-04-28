const variables = {
  openModalBtn: document.querySelector('.head-btn'),
  closeModalBtn: document.querySelector('.modal-close-btn'),
  modal: document.querySelector('.mobile-modal'),
  titleBtn: document.querySelector('.nav-title-btn'),
  menuItems: document.querySelectorAll('.menu-item'),
  modalLinks: document.querySelectorAll('.modal-menu-item a'),
  closeButton: document.querySelector('.modal-close-btn'),
};

function openModal() {
  document.body.classList.add('no-scroll');
}

function closeModal() {
  document.body.classList.remove('no-scroll');
}

function toggleModal() {
  variables.modal.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}

function headOpenModal() {
  variables.openModalBtn.addEventListener('click', toggleModal);
  variables.closeModalBtn.addEventListener('click', toggleModal);
}

function toggleMenuHead() {
  variables.titleBtn.addEventListener('click', toggleMenu);

  document.addEventListener('click', hideOnClickOutside);

  function toggleMenu() {
    const isVisible = variables.menuItems[0].classList.contains('active');

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
    variables.menuItems.forEach(fadeOut);
  }

  function fadeOut(item, index) {
    setTimeout(() => {
      if (!item.classList.contains('opacity')) {
        item.style.opacity = 0;
        item.classList.remove('active');
      }
    }, (variables.menuItems.length - index) * 50);
  }

  function showMenuItems() {
    variables.menuItems.forEach(fadeIn);
  }

  function fadeIn(item, index) {
    setTimeout(() => {
      if (!item.classList.contains('opacity')) {
        item.style.opacity = 0;
        item.classList.add('active');
        setTimeout(() => {
          item.style.opacity = 1;
        }, 50);
      }
    }, index * 150);
  }

  variables.menuItems.forEach(function hide(item) {
    item.classList.add('hidden-modal');
  });

  variables.titleBtn.addEventListener('click', showHiddenModal);

  function showHiddenModal() {
    variables.menuItems.forEach(show);
  }

  function show(item) {
    item.classList.remove('hidden-modal');
  }
}

function setupMobileModal() {
  document.addEventListener('DOMContentLoaded', addEventListeners);

  function addEventListeners() {
    variables.modalLinks.forEach(link => {
      link.addEventListener('click', closeModal);
    });

    variables.closeButton.addEventListener('click', closeModal);

    variables.menuItems.forEach(item => {
      item.addEventListener('click', closeAndHideModal);
    });

    variables.modalLinks.forEach(link => {
      if (link.classList.contains('modal-link-yk')) {
        link.addEventListener('click', hideModal);
      }
    });
  }

  function closeAndHideModal() {
    closeModal();
    variables.modal.classList.add('is-hidden');
  }

  function hideModal() {
    variables.modal.classList.add('is-hidden');
  }
}

toggleMenuHead();
headOpenModal();
setupMobileModal();
