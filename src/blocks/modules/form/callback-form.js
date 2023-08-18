document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('.js-form');
  
  forms.forEach(function (form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const agreeCheckbox = form.querySelector('.styled-checkbox__input');
    const inputs = form.querySelectorAll('.styled-input');

    agreeCheckbox.addEventListener('change', function () {
      if (agreeCheckbox.checked) {
        submitButton.removeAttribute('disabled');
      } else {
        submitButton.setAttribute('disabled', 'disabled');
      }
    });

    inputs.forEach(function (input) {
      input.addEventListener('input', function () {
        validateInput(input);
      });
    });
  });

  function validateForm(form) {
    const inputs = form.querySelectorAll('.styled-input');
    let isValid = true;

    inputs.forEach(function (input) {
      validateInput(input);

      const isValidInput = input.validity.valid;

      if (!isValidInput) {
        isValid = false;
      }
    });

    if (isValid) {
      // Выполните действия после успешной валидации
      console.log('Форма валидна, можно отправить данные');
    } else {
      console.log('Форма содержит ошибки, проверьте введенные данные');
    }
  }

  function validateInput(input) {
    const isValid = input.validity.valid;

    if (isValid) {
      input.classList.remove('_error');
    } else {
      input.classList.add('_error');
    }

    if (input.type === 'tel') {
      const russianPhonePattern = /^(\+7|8)?(\d{10})$/;
      if (input.value && !russianPhonePattern.test(input.value)) {
        input.classList.add('_error');
      }
    }
  }
});