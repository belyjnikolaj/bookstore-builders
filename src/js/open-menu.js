import checkAuthState from './auth'

const menuBurgerConteiner = document.querySelector('.js-menu-container');
const btnBurger = document.querySelector('.open-menu-btn');
const btnClose = document.querySelector('.close-menu-btn');
const activeShopingPage = document.querySelector('.nav-shopping-page');
const activeHomePage = document.querySelector('.nav-home-page');

const isLogged = true;
// markup()

export const openBurgerMenu = () => {
  checkAuthState;
  menuBurgerConteiner.classList.add('open-menu');
  btnBurger.classList.add('hidden');
  btnClose.classList.remove('hidden');
};

export const closeBurgerMenu = () => {
  checkAuthState;
  menuBurgerConteiner.classList.remove('open-menu');
  btnBurger.classList.remove('hidden');
  btnClose.classList.add('hidden');
};

btnBurger.addEventListener('click', openBurgerMenu);
btnClose.addEventListener('click', closeBurgerMenu);

activeHomePage.addEventListener('click', () => {
  activeHomePage.classList.add('link-active');
  activeShopingPage.classList.remove('link-active');
});

activeShopingPage.addEventListener('click', () => {
  activeShopingPage.classList.add('link-active');
  activeHomePage.classList.remove('link-active');
});
