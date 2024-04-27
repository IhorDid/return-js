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

function headOpenModal() {
  variables.openModalBtn.addEventListener('click', toggleModal);
  variables.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    variables.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
}

function toggleMenuHead() {
  variables.titleBtn.addEventListener('click', function () {
    const isVisible = variables.menuItems[0].classList.contains('active');

    if (isVisible) {
      hideMenuItems();
    } else {
      showMenuItems();
    }
  });

  document.addEventListener('click', function (event) {
    const isTitleBtnClicked = event.target.closest('.nav-title-btn');
    if (!isTitleBtnClicked) {
      hideMenuItems();
    }
  });

  function hideMenuItems() {
    variables.menuItems.forEach(function (item, index) {
      setTimeout(() => {
        item.style.opacity = 0;
        setTimeout(() => {
          item.classList.remove('active');
        }, 500);
      }, (variables.menuItems.length - index) * 50);
    });
  }

  function showMenuItems() {
    variables.menuItems.forEach(function (item, index) {
      setTimeout(() => {
        item.style.opacity = 0;
        item.classList.add('active');
        setTimeout(() => {
          item.style.opacity = 1;
        }, 50);
      }, index * 150);
    });
  }
}

function setupMobileModal() {
  document.addEventListener('DOMContentLoaded', function () {
    variables.modalLinks.forEach(link => {
      link.addEventListener('click', event => {
        closeModal();
      });
    });

    variables.closeButton.addEventListener('click', () => {
      closeModal();
    });
  });
}

toggleMenuHead();
headOpenModal();
setupMobileModal();
