const menuBurgerConteiner = document.querySelector('.js-menu-container');
const btnBurger = document.querySelector('.open-menu-btn');
const btnClose = document.querySelector('.close-menu-btn');

const isLogged = true;
// markup()

export const openBurgerMenu = () => {
  menuBurgerConteiner.classList.add('open-menu');
  btnBurger.classList.add('hidden');
  btnClose.classList.remove('hidden');
};

export const closeBurgerMenu = () => {
  menuBurgerConteiner.classList.remove('open-menu');
  btnBurger.classList.remove('hidden');
  btnClose.classList.add('hidden');
};

// const markup = () => {
//   if (isLogged) {
//     return `
//     <image /> <p> Name </p>

//     <ul class="nav-list list">
//     <li class="nav-list__item"><a class="link link-active nav-home-page" href="/src/index.html">HOME</a>
//     </li>
//     <li class="nav-list__item"><a class="link nav-shopping-page" href="#">SHOPPING LIST<svg class="nav-shopping-page__icon"><use href="/src/images/sprite.svg#icon-uil_cart"></svg></a></li>
//     </ul>

//     <button class="loggedOutBtn">Log out </button><svg class="loggedOutBtn__icon" width="20" height="20">
//     <use href="/src/images/sprite.svg#icon-arrow-right"></use>
//     </svg>
//    `;
//   }
//   if (!isLogged) {
//     return ` <button class="auth_button" type="button"><span>Sign up</span><svg class="call-to-registration-btn__icon" width="20" height="20">
//     <use href="/src/images/sprite.svg#icon-arrow-right"></use>
//     </svg></button>
//    `;
//   }
// };

btnBurger.addEventListener('click', openBurgerMenu);
btnClose.addEventListener('click', closeBurgerMenu);

const activeShopingPage = document.querySelector('.nav-shopping-page');
const activeHomePage = document.querySelector('.nav-home-page');
const activeShopingPageBurger = document.querySelector(
  '.shoppingListButtonMobile__link'
);
const activeHomePageBurger = document.querySelector('.homeButtonMobile__link');

activeHomePage.addEventListener('click', () => {
  activeHomePage.classList.add('link-active');
  activeShopingPage.classList.remove('link-active');
});

activeShopingPage.addEventListener('click', () => {
  activeShopingPage.classList.add('link-active');
  activeHomePage.classList.remove('link-active');
});

activeShopingPageBurger.addEventListener('click', () => {
  activeShopingPageBurger.classList.add('link-active');
  activeHomePageBurger.classList.remove('link-active');
  activeHomePage.classList.remove('link-active');
});

activeHomePageBurger.addEventListener('click', () => {
  activeHomePageBurger.classList.add('link-active');
  activeShopingPageBurger.classList.remove('link-active');
});
