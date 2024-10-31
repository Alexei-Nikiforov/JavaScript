const menuActive = document.querySelector('.banner__menu');
const burger = document.querySelector('.header .header__menus .header__menu');

function clickMenu() {
  menuActive.classList.toggle('burger');
}

burger.addEventListener('click', clickMenu);