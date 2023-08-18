document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
      const minusButton = e.target.closest('.js-counter-minus');
      const plusButton = e.target.closest('.js-counter-plus');
  
      if (minusButton) {
        const valueElement = minusButton.nextElementSibling;
        updateCounterValue(valueElement, -1);
      }
  
        if (plusButton) {
        const valueElement = plusButton.previousElementSibling;
        updateCounterValue(valueElement, 1);
      }
    });
  
    function updateCounterValue(valueElement, change) {
      let currentValue = parseInt(valueElement.textContent) + change;
  
      if (currentValue < 1) {
        currentValue = 0;
      }
  
      valueElement.textContent = currentValue;
    }
  });