import products from './menu.json';

import templates from './template.hbs';

import './styles.css';

// Тема
// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.
// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
// Если при загрузке страницы тема тёмная, не забудь поставить свойство checked у чекбокса #theme-switch-toggle в true,
//чтобы ползунок сдвинулся в правильное положение.

const changeThemeRef = document.querySelector('.theme-switch__toggle');
const bodyToggleThemeRef = document.querySelector('body');

function onTakeClass() {
  if (localStorage.getItem('savedClass')) {
    bodyToggleThemeRef.className = localStorage.getItem('savedClass');
    if (localStorage.getItem('savedClass') === 'dark-theme') {
      changeThemeRef.checked = 'true';
    }
  }
}
onTakeClass();

function onSaveClass() {
  const savedClass = bodyToggleThemeRef.className;
  localStorage.setItem('savedClass', savedClass);
}

changeThemeRef.addEventListener('change', onToggleClass);
function onToggleClass(e) {
  bodyToggleThemeRef.classList.toggle('dark-theme');
  bodyToggleThemeRef.classList.toggle('light-theme');
  onSaveClass();
}

// Шаблонизация
// Используя шаблонизатор Handlebars создай шаблон одного элемента меню. После чего, используя шаблон,
//создай разметку всего меню по данным из menu.json и добавь в DOM в ul.js - menu.
// Для иконок используется библиотека Material Icons, линк на веб-фонт уже есть в исходном HTML.
// Ниже указана разметка элемента меню которая должна получаться по шаблону (данные будут разные для каждого объекта).

const productsMenuRef = document.querySelector('.js-menu');

const markUpMenu = createProductsMarkUp(products);
function createProductsMarkUp(products) {
  return products.map(templates).join('');
}

productsMenuRef.insertAdjacentHTML('beforeend', markUpMenu);
