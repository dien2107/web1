const experienceYear = document.querySelector('#experienceYear');
const currentYear = new Date().getFullYear();
experienceYear.querySelector('span').innerText = `${currentYear - 1976}`;
experienceYear.querySelector('span').setAttribute('data-value', `${currentYear - 1976}`);

const headerTopHeight = 30;
const headerBottomHeight = 80;

const reseizeAndLoadEvent = ['resize', 'load'];

let headerSlideHeight;

reseizeAndLoadEvent.forEach(event => {
  window.addEventListener(event, e => {
    const windowHeight = window.innerHeight;
    headerSlideHeight = windowHeight - (headerTopHeight + headerBottomHeight);
    document.documentElement.style.setProperty('--header-slider-height', `${headerSlideHeight}px`);
  });
});

const headerBottom = document.querySelector('.header__bottom');
const overlay = document.querySelector('.overlay');

document.addEventListener('click', e => {
  if (document.querySelector('.header__bottom.search--active')) {
    document.addEventListener('click', e => {
      if (!e.target.closest('.header__bottom--result') && !e.target.closest('.header__bottom--extention-search')) {
        headerBottom.classList.toggle('search--active');
      }
    });
  }
});

const scrollEvents = ['scroll', 'reload'];

const section1Wrapper = document.querySelector('.section--1 .wrapper');
const section2 = document.querySelector('.section--2');
const product = document.querySelectorAll('.info_container .product');
const section4 = document.querySelector('.section--4-container');

section1Wrapper.querySelectorAll('div').forEach((item, idx) => {
  item.style.transform = `translateY(${100 + idx * 20}px)`;
});

scrollEvents.forEach(event => {
  window.addEventListener(event, e => {
    if (window.innerHeight > section1Wrapper.getBoundingClientRect().top) {
      section1Wrapper.classList.add('active');
    }

    if (window.innerHeight > section2.getBoundingClientRect().top) {
      section2.classList.add('active');
    }

    product.forEach(product => {
      if (window.innerHeight > product.getBoundingClientRect().top) {
        product.classList.add('active');
      }
    });

    if (window.innerHeight + 300 > section4.getBoundingClientRect().top) {
      section4.classList.add('active');
    }
  });
});
const typeProductsNav = document.querySelectorAll('.header__bottom--list ul li');

typeProductsNav.forEach(item =>
  item.addEventListener('click', e => {
    const firstString = item.textContent.trim().charAt(0).toUpperCase(); 
    const secondString = item.textContent.trim().substring(1).toLocaleLowerCase(); 
    const type = firstString + secondString;

    // localStorage.setItem('typeToFilter', JSON.stringify(type));
  })
);
const typeProductsSidebarMenu = document.querySelectorAll('.hide__menu--list__type');

typeProductsSidebarMenu.forEach(item =>
  item.addEventListener('click', e => {
    const firstString = item.textContent.trim().charAt(0).toUpperCase();
    const secondString = item.textContent.trim().substring(1).toLocaleLowerCase(); 
    const type = firstString + secondString;
    // localStorage.setItem('typeToFilter', JSON.stringify(type));
  })
);
const isLogged = JSON.parse(localStorage.getItem('User'));
const numberOfProducts = document.querySelector('.header__bottom--extention-cart p');

if (isLogged) {
  numberOfProducts.textContent = isLogged.cart.length;
} else {
  numberOfProducts.style.display = 'none';
}
