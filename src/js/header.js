// header no scrol function
export function openModal() {
  document.body.classList.add('no-scroll');
}

export function closeModal() {
  document.body.classList.remove('no-scroll');
}

// Отримуємо кнопку меню та елементи пунктів меню
export function toggleMenuHead() {
  const titleBtn = document.querySelector('.nav-title-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  titleBtn.addEventListener('click', function () {
    const isVisible = menuItems[0].classList.contains('active');

    if (isVisible) {
      menuItems.forEach(function (item, index) {
        setTimeout(() => {
          item.style.opacity = 0;
          setTimeout(() => {
            item.classList.remove('active');
          }, 500);
        }, (menuItems.length - index) * 50);
      });
    } else {
      menuItems.forEach(function (item, index) {
        setTimeout(() => {
          item.style.opacity = 0;
          item.classList.add('active');
          setTimeout(() => {
            item.style.opacity = 1;
          }, 50);
        }, index * 150);
      });
    }
  });
}
