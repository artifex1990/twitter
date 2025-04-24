import { API_PICTURES, API_POSTS, API_STATISTIC } from './api/api_constant.js';
import getData from './api/get_data.js';
import convertTime from './assets/convert_time.js';
import postSize from './assets/post_size.js';
import fixTime from './helpers/fix_time.js';
import validateEmail from './helpers/validate_email.js';
import updateProgress from './assets/circle_progressbar.js';

const authForm = document.querySelector('#auth .modal__form');
const registerForm = document.querySelector('#register .modal__form');
const messagesSymbols = document.querySelector('.progress-text');
const maxMessagesSymbols = 400;

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

async function getMessages() {
  const [dataPosts, dataPictures] = await new Promise((res) => {
    setTimeout(async () => {
      const posts = await getData(API_POSTS);
      const pictures = await getData(API_PICTURES);
      res([posts, pictures]);
    }, 2000);
  });

  if (dataPosts instanceof Error) {
    return dataPosts;
  }

  dataPosts.messages.map((m) => {
    const message = m;
    message.url = dataPictures instanceof Error
      ? '#'
      : dataPictures.pictures
        .find((picture) => picture.user_id === message.user_id)
        .url;

    return message;
  });

  return dataPosts.messages;
}

async function getMetrics() {
  const [statistic] = await new Promise(
    (res) => {
      setTimeout(async () => {
        const data = await getData(API_STATISTIC);
        res([data.statistic]);
      }, 2000);
    },
  );

  return statistic;
}

async function renderMetrcis(data) {
  const metrics = document.querySelector('.metrics');

  try {
    const { usersRegistr, writMessages, writToday } = data;
    metrics.innerHTML = `
      <div class="metric">
          <h2 class="metric__title">${usersRegistr}</h2>
          <div class="metric__description">Пользователей зарегистрировано</div>
      </div>
      <div class="metric">
          <h2 class="metric__title">${writMessages}</h2>
          <div class="metric__description">Сообщений написано</div>
      </div>
      <div class="metric">
          <h2 class="metric__title">${writToday}</h2>
          <div class="metric__description">Написано сегодня</div>
      </div>
    `;
  } catch (error) {
    metrics.innerHTML = `<h2 class="error">${error}</h2>`;
  }
}

function renderPosts(data) {
  const messages = document.querySelector('.messages__posts');

  if (data instanceof Error) {
    messages.innerHTML = `<h2 class="error">${data.message}</h2>`;
    return;
  }

  messages.innerHTML = '';
  data.forEach((message) => {
    messages.innerHTML += `
      <div class="messages__wrapper">
          <div class="messages__post">
              <div class="messages__avatar">
                  <img src="${message.url}" alt="аватарка">
              </div>
              <div class="messages__info">
                  <div class="message__user">
                      <div class="messages__name">${message.name}</div>  
                      <div class="messages__login"><a href="#">${message.mail}</a></div>  
                      <div class="messages__time">${convertTime(fixTime(message.date))}</div>
                  </div>
                  <div class="messages__text">
                      ${message.message}
                      ${message.img_message ? `<img src="${message.img_message}" alt="картинка">` : ''}
                  </div>
                  <div class="messages__commands">
                      <div class="messages__command">
                          <a href="#">
                              <img src="./logo/reply.svg" alt="репост">
                          </a>
                          <span>${message.quantityReposts}</span>
                      </div>
                      <div class="messages__command">
                          <a href="#">
                              <img src="./logo/like.svg" alt="лайк">
                          </a>
                          <span>${message.quantityLike}</span>
                      </div>
                      <div class="messages__command">
                          <a href="#">
                              <img src="./logo/share.svg" alt="поделиться">
                          </a>
                          <span>${message.quantityShare}</span>
                      </div>
                  </div>
              </div>
          </div> 
      </div>
    `;
  });
}

function plugLoading() {
  const metrics = document.querySelector('.metrics');
  metrics.innerHTML = '<h2 class="loading white">Загружаю контент!</h2>';

  const messagesText = document.querySelector('.messages__posts');
  messagesText.innerHTML = '<h2 class="loading">Загружаю контент!</h2>';
}

document.querySelector('#new-message').addEventListener('input', (e) => {
  e.target.style.height = 'auto';
  e.target.style.height = `${e.target.scrollHeight}px`;
  if (messagesSymbols) {
    const ps = postSize(e.target.value);
    messagesSymbols.textContent = ps;
    updateProgress(ps, maxMessagesSymbols);
  }
});

(async () => {
  plugLoading();
  renderMetrcis(await getMetrics());
  renderPosts(await getMessages());
})();
