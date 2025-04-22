import validateEmail from './helpers/validate_email.js';

const authForm = document.querySelector('#auth .modal__form');
const registerForm = document.querySelector('#register .modal__form');

function resetErrors(modalId) {
  const errorFields = document.querySelectorAll(`${modalId} .error_field`);
  errorFields.forEach((field) => field.classList.remove('error_field'));

  const errorMessages = document.querySelectorAll(`${modalId} .modal__error`);
  errorMessages.forEach((el) => {
    const errorElement = el;
    errorElement.textContent = '';
    errorElement.style.display = 'none';
  });
}

function showError(modalId, fieldName, message) {
  const field = document.querySelector(`${modalId} input[name="${fieldName}"]`);
  if (!field) return;

  field.classList.add('error_field');
  const errorElement = field.closest('.modal__fields').querySelector('.modal__error');
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = 'block';
  }
}

function checkEmptyFields(modalId, fieldNames) {
  let isValid = true;
  document.querySelector(fieldNames.forEach((fieldName) => {
    const field = document.querySelector(`${modalId} input[name="${fieldName}"]`);
    const labelContent = field.closest('.modal__fields').querySelector('.modal__label').textContent.trim();
    if (!field.value) {
      isValid = false;
      showError(modalId, fieldName, `Заполните поле "${labelContent}"`);
    }
  }));

  return isValid;
}

function handleRegistration() {
  const modalId = '#register';
  const form = document.querySelector('#register .modal__form');
  const email = form.querySelector('input[name="email"]').value;
  const password = form.querySelector('input[name="password"]').value;
  const repassword = form.querySelector('input[name="repassword"]').value;

  resetErrors(modalId);

  let isValid = true;

  if (!checkEmptyFields(modalId, ['email', 'password', 'repassword'])) {
    return;
  }

  if (password.length < 6) {
    showError(modalId, 'password', 'Пароль должен быть не менее 6 символов');
    isValid = false;
  }

  if (!validateEmail(email)) {
    showError(modalId, 'email', 'Невалидная почта');
    isValid = false;
  }

  if (password !== repassword) {
    showError(modalId, 'password', 'Пароли не совпадают');
    showError(modalId, 'repassword', 'Пароли не совпадают');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Я успешно отправил на сервер ${email}, ${password}`);
  form.reset();
  document.querySelector(modalId).classList.remove('modal_active');
}

function handleAuthorization() {
  const modalId = '#auth';
  const form = document.querySelector('#auth .modal__form');
  const email = form.querySelector('input[name="email"]').value;
  const password = form.querySelector('input[name="password"]').value;

  resetErrors(modalId);

  let isValid = true;

  if (!checkEmptyFields(modalId, ['email', 'password'])) {
    return;
  }

  if (!validateEmail(email)) {
    showError(modalId, 'email', 'Невалидная почта');
    isValid = false;
  }

  if (password.length < 6) {
    showError(modalId, 'password', 'Пароль должен быть не менее 6 символов');
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Я успешно отправил на сервер ${email}, ${password}`);
  form.reset();
  document.querySelector(modalId).classList.remove('modal_active');
}

document.querySelectorAll('.modal').forEach((el) => el.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    const modalId = e.target.id;
    const form = e.target.querySelector('form');
    form.reset();
    resetErrors(`#${modalId}`);
    e.target.classList.remove('modal_active');
  }
}));

document.querySelectorAll('.button.button-register').forEach((el) => el.addEventListener('click', (e) => {
  if (e.target.closest('.modal')) return;
  document.getElementById('register').classList.add('modal_active');
  e.stopImmediatePropagation();
}));

document.querySelectorAll('.button').forEach((el) => el.addEventListener('click', (e) => {
  if (e.target.closest('.modal')) return;
  document.getElementById('auth').classList.add('modal_active');
}));

document.querySelectorAll('.modal').forEach((el) => el.addEventListener('swiped-down', (e) => {
  e.currentTarget.classList.remove('modal_active');
}));

if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleRegistration();
  });
}

if (authForm) {
  authForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleAuthorization();
  });
}
