let isLoggedIn = false;
const userBtn = document.querySelector('.header__bottom--extention-user');
const loginOverlay = document.querySelector('.overlay');
const userWrapper = document.querySelector('.user__wrapper');

const showOverlay = () => loginOverlay.classList.add('active__overlay');
const hideOverlay = () => loginOverlay.classList.remove('active__overlay');

const toggleUserForm = (formType) => {
  userWrapper.classList.add('user__active', `${formType}__active`);
  showOverlay();
};

userBtn.addEventListener('click', () => {
  checkLoggedIn();
  if (!isLoggedIn) toggleUserForm('register');
});

document.querySelector('.section--4 button').addEventListener('click', () => toggleUserForm('register'));
document.querySelector('.register__background button').addEventListener('click', () => toggleUserForm('login'));
document.querySelector('.login__background button').addEventListener('click', () => toggleUserForm('register'));

const handleCloseForm = () => {
  userWrapper.style.animation = `fade 0.5s ease-in`;
  setTimeout(() => {
    hideOverlay();
    userWrapper.classList.remove('user__active', 'register__active', 'login__active');
    userWrapper.style.animation = `bottomUp 1s ease-in-out`;
  }, 450);
};

loginOverlay.addEventListener('click', handleCloseForm);
document.querySelector('.user__wrapper .form__close--global').addEventListener('click', handleCloseForm);

const accounts = JSON.parse(localStorage.getItem('accounts')) || [
  { id: 'admin', name: 'Admin', email: 'admin', password: 'admin', isAdmin: true, cart: [] }
];
const DUMMY_API = JSON.parse(localStorage.getItem('DUMMY_API')) || accounts.map(account => ({ idUser: account.id, cart: [] }));

const saveDataToLocalStorage = () => {
  localStorage.setItem('accounts', JSON.stringify(accounts));
  localStorage.setItem('DUMMY_API', JSON.stringify(DUMMY_API));
};

const displayMessage = (element, message) => {
  element.innerText = message;
};

const registerSubmitBtn = document.querySelector('.register__info--submit');
const registerNameInput = document.querySelector('.register__info--input-name');
const registerEmailInput = document.querySelector('.register__info--input-email');
const registerPasswordInput = document.querySelector('.register__info--input-password');

registerSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = registerNameInput.value.trim();
  const email = registerEmailInput.value.trim();
  const password = registerPasswordInput.value.trim();

  const showMessageNameRes = document.querySelector('.register__info--input__full-name p');
  const showMessageEmailRes = document.querySelector('.register__info--input__full-email p');
  const showMessagePasswordRes = document.querySelector('.register__info--input__full-password p');

  const isValidName = name.length > 0;
  const isValidEmail = email.length > 0 && /@.*\.[a-zA-Z]{2,3}$/g.test(email) && !accounts.some(acc => acc.email === email);
  const isValidPassword = password.length > 8;

  displayMessage(showMessageNameRes, isValidName ? '' : '* Bạn chưa nhập tên đầy đủ');
  displayMessage(showMessageEmailRes, isValidEmail ? '' : '* Email không hợp lệ hoặc đã tồn tại');
  displayMessage(showMessagePasswordRes, isValidPassword ? '' : '* Mật khẩu phải trên 8 ký tự');

  if (isValidName && isValidEmail && isValidPassword) {
    const newAccount = { id: Date.now().toString(), name, email, password, dateRegister: new Date().toISOString(), isAdmin: false, cart: [] };
    accounts.push(newAccount);
    DUMMY_API.push({ idUser: newAccount.id, cart: [] });
    saveDataToLocalStorage();
    alert('Đăng ký thành công!');
    location.reload();
  }
});

const loginSubmitBtn = document.querySelector('.login__info--submit');
const loginEmailInput = document.querySelector('.login__info--input-email');
const loginPasswordInput = document.querySelector('.login__info--input-password');

loginSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const email = loginEmailInput.value.trim();
  const password = loginPasswordInput.value.trim();

  const showMessageEmailLog = document.querySelector('.login__info--input__full-email p');
  const showMessagePasswordLog = document.querySelector('.login__info--input__full-password p');

  const isValidEmail = email.length > 0 && (email.includes('@') || email === 'admin');
  const isValidPassword = password.length > 8 || password === 'admin';

  displayMessage(showMessageEmailLog, isValidEmail ? '' : '* Email không hợp lệ');
  displayMessage(showMessagePasswordLog, isValidPassword ? '' : '* Mật khẩu không hợp lệ');

  if (isValidEmail && isValidPassword) {
    const user = accounts.find(account => account.email === email && account.password === password);
    if (user) {
      localStorage.setItem('User', JSON.stringify(user));
      location.reload();
    } else {
      alert('Email hoặc mật khẩu không chính xác');
    }
  }
});

const checkLoggedIn = () => {
  const userLogin = JSON.parse(localStorage.getItem('User'));
  if (userLogin) {
    isLoggedIn = true;
    document.querySelector('.user-welcome p:last-child').innerText = userLogin.name;
    document.querySelector('.section--4-container').style.display = 'none';
  } else {
    document.querySelector('.header__bottom--user__list').style.display = 'none';
  }
};

checkLoggedIn();

const logoutHandler = () => {
  localStorage.removeItem('User');
  alert('Đăng xuất thành công!');
  location.reload();
};

document.querySelector('.logout').addEventListener('click', logoutHandler);
document.querySelector('.hide__menu--list__type.logout__item').addEventListener('click', logoutHandler);

document.querySelector('.showEyeRegister').addEventListener('click', (e) => {
  e.preventDefault();
  registerPasswordInput.type = 'text';
});
document.querySelector('.hideEyeRegister').addEventListener('click', (e) => {
  e.preventDefault();
  registerPasswordInput.type = 'password';
});
