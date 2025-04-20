document.querySelectorAll('.modal').forEach((el) => el.addEventListener('click', (e) => {
  const form = e.target.querySelector('form');
  form.reset();
  e.target.classList.remove('modal_active');
}));

document.querySelectorAll('.button.button-register').forEach((el) => el.addEventListener('click', (e) => {
  document.getElementById('register').classList.add('modal_active');
  e.stopImmediatePropagation();
}));

document.querySelectorAll('.button').forEach((el) => el.addEventListener('click', () => {
  document.getElementById('auth').classList.add('modal_active');
}));

document.querySelectorAll('.modal').forEach((el) => el.addEventListener('swiped-down', (e) => {
  e.currentTarget.classList.remove('modal_active');
}));
