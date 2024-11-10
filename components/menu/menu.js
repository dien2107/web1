const hideMenuBtn = document.querySelector('.header__bottom--hide-menu');
const closeMenuBtn = document.querySelector('.hide__menu--close');
const hideMenu = document.querySelector('.hide__menu');
const menuOverlay = document.querySelector('.overlay');

hideMenuBtn.addEventListener('click', e => {
  hideMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active__overlay');
});

const closeMenu = () => {
  hideMenu.classList.remove('active');
  menuOverlay.classList.remove('active__overlay');
};

closeMenuBtn.addEventListener('click', e => {
  closeMenu();
});

menuOverlay.addEventListener('click', e => {
  closeMenu();
});

const menuUserBtn = document.querySelector('.hide__menu--list__extention .header__bottom--extention-user');
const menuUserWrapper = document.querySelector('.user__wrapper');
const openFormRegister = () => {
  menuUserWrapper.classList.add('user__active');
  menuUserWrapper.classList.add('register__active');
  menuOverlay.classList.add('active__overlay');
};
const catelogyBtn = document.querySelector('.hide__menu--list__extention .header__bottom--extention-cate');
const hideMenuList = document.querySelector('.hide__menu--list__types');

const iconUp = document.querySelector('.header__bottom--extention-cate .header__bottom--extention__icon--up');
const iconDown = document.querySelector('.header__bottom--extention-cate .header__bottom--extention__icon--down');

catelogyBtn.addEventListener('click', e => {
  hideMenuList.classList.toggle('active');
  iconDown.classList.toggle('hidden');
  iconUp.classList.toggle('active');
});
