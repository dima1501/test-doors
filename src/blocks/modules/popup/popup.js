document.addEventListener('DOMContentLoaded', function () {
    const popup = document.querySelector('.popup');
    const popupCloser = popup.querySelector('.js-popup-close');
    const popupInner = popup.querySelector('.popup__inner');

    popup.addEventListener('click', function (e) {
        if (!popupInner.contains(e.target)) {
          popup.classList.remove('_visible');
        }
    });
    
    popupCloser.addEventListener('click', function () {
      popup.classList.remove('_visible');
    });
  });