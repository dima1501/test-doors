document.addEventListener('DOMContentLoaded', function () {
    const toggleElements = document.querySelectorAll('[data-toggle]');
    const popupElements = document.querySelectorAll('.js-drop');
    const header = document.querySelector('.header');
    const headerToggler = document.querySelector('.js-menu-toggler');
  
    toggleElements.forEach(function (element) {
      element.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = element.getAttribute('data-toggle');
        togglePopup(targetId);
          element.classList.toggle('_active');
          header.classList.remove('_opened'); 
          headerToggler.classList.remove('_active'); 
      });
    });
  
    function togglePopup(targetId) {
      popupElements.forEach(function (popup) {
        if (popup.id === targetId) {
          popup.classList.toggle('_visible');
        } else {
          popup.classList.remove('_visible');
        }
      });
    }
  
    document.addEventListener('click', function (e) {
    if (!e.target.closest('.js-drop') && !e.target.closest('[data-toggle]') ) {
        popupElements.forEach(function (popup) {
          popup.classList.remove('_visible');
        });
        toggleElements.forEach(function (element) {
          element.classList.remove('_active');
        });
      }
    });
  });