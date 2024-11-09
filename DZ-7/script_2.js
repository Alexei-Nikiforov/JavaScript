const menuActives = document.querySelector('.banner__menus');
const cart = document.querySelector('.header .header__basket');

function clickMenu() {
  menuActives.classList.toggle('banner__basket-card');
}

cart.addEventListener('click', clickMenu);