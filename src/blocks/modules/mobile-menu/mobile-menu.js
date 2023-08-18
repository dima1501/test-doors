document.addEventListener('DOMContentLoaded', function () {
    const menuToggler = document.querySelector('.js-menu-toggler');
    const header = document.querySelector('.header');
  
    menuToggler.addEventListener('click', function () {
      header.classList.toggle('_opened');
      menuToggler.classList.toggle('_active');
    });
  });