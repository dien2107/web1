let isLoggedIn = false;

const userProductBtn = document.querySelector('.userProductBtn');
const cartProductBtn = document.querySelector('.cartProductBtn');

const userWrapper = document.querySelector('.user__wrapper');
const btnCloseGlobal = document.querySelector('.user__wrapper .form__close--global');
const overlay = document.querySelector('.overlay-login');

const numberOfCart = document.querySelector('#nav-item-cart p');

let accounts = JSON.parse(localStorage.getItem('accounts'));

if (!accounts) {
  accounts = [
    {
      id: 'admin',
      name: 'Quản lý viên 1',
      email: 'admin',
      password: 'admin',
      dateRegister: '2023-01-01T00:00:00.000Z',
      isAdmin: true,
      cart: []
    }
  ];

  localStorage.setItem('accounts', JSON.stringify(accounts));
}

const checkLoggedIn = () => {
  const userLogin = JSON.parse(localStorage.getItem('User'));
  const userList = document.querySelector('.header__bottom--user__list');

  if (userLogin) {
    isLoggedIn = true;

    userProductBtn.removeEventListener('click', openFormRegister);

    userProductBtn.addEventListener('mouseover', e => {
      userList.style.display = 'block';
    });

    userProductBtn.addEventListener('mouseout', e => {
      userList.style.display = 'none';
    });
    if (userLogin.isAdmin) {
      document.querySelectorAll('.adminManager__item').forEach(item => (item.style.display = 'block'));
    } else {
      document.querySelectorAll('.adminManager__item').forEach(item => (item.style.display = 'none'));
    }
  } else {
    isLoggedIn = false;
  }
};

checkLoggedIn();

const logoutBtn = document.querySelector('.logout');

const logoutHandler = () => {
  localStorage.removeItem('User');
  alert('Đăng xuất thành công!');
  location.reload();
};

logoutBtn.addEventListener('click', logoutHandler);
const manageBtn = document.querySelector('.adminManager');

manageBtn.addEventListener('click', e => {
  window.location.href = '/web1/html/page/admin/Home.html';
});

function openFormRegister() {
  if (!isLoggedIn) {
    userWrapper.classList.add('user__active');
    userWrapper.classList.add('register__active');
    overlay.classList.add('active__overlay');
  }
}

const hideFormRegLogin = () => {
  userWrapper.style.animation = `fade 0.5s ease-in`;
  setTimeout(() => {
    overlay.classList.remove('active__overlay');
    userWrapper.classList.remove('user__active');
    userWrapper.classList.remove('register__active');
    userWrapper.classList.remove('login__active');
    userWrapper.style.animation = `bottomUp 1s ease-in-out`;
  }, 450);
};

userProductBtn.addEventListener('click', e => {
  checkLoggedIn();
  openFormRegister();
});

if (!isLoggedIn) {
  cartProductBtn.addEventListener('click', e => {
    e.preventDefault();
    checkLoggedIn();
    openFormRegister();
  });
}

btnCloseGlobal.addEventListener('click', e => {
  hideFormRegLogin();
});

let DUMMY_API = [];

const registerSubmitBtn = document.querySelector('.register__info--submit');
const registerNameInput = document.querySelector('.register__info--input-name');
const registerEmailInput = document.querySelector('.register__info--input-email');
const registerPasswordInput = document.querySelector('.register__info--input-password');

const showMessageNameRes = document.querySelector('.register__info--input__full-name p');
const showMessageEmailRes = document.querySelector('.register__info--input__full-email p');
const showMessagePasswordRes = document.querySelector('.register__info--input__full-password p');

function generateRandomUserID(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let userID = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    userID += characters.charAt(randomIndex);
  }

  return userID;
}

registerSubmitBtn.addEventListener('click', e => {
  e.preventDefault();
  const name = registerNameInput.value.trim();
  const email = registerEmailInput.value.trim();
  const password = registerPasswordInput.value.trim();

  let isValidName = true;
  let isValidEmail = true;
  let isValidPassword = true;

  if (name.length === 0) {
    showMessageNameRes.innerText = '* Bạn chưa nhập tên đầy đủ';
    isValidName = false;
  } else {
    showMessageNameRes.innerText = '';
  }

  const patternEmail = /@.*\.[a-zA-z]{2,3}$/gi;

  if (email.length === 0) {
    showMessageEmailRes.innerText = '* Bạn chưa nhập email';
    isValidEmail = false;
  } else if (!patternEmail.test(email)) {
    showMessageEmailRes.innerText = '* Email không hợp lệ';
    isValidEmail = false;
  } else {
    if (accounts.length > 0) {
      const isExist = accounts.find(account => account.email === email);
      if (isExist) {
        showMessageEmailRes.innerText = '* Email đã tồn tại';
        isValidEmail = false;
      } else {
        showMessageEmailRes.innerText = '';
      }
    }
  }

  if (password.length === 0) {
    showMessagePasswordRes.innerText = '* Bạn chưa nhập mật khẩu';
    isValidPassword = false;
  } else if (password.length <= 8) {
    showMessagePasswordRes.innerText = '* Mật khẩu phải trên 8 ký tự';
    isValidPassword = false;
  } else {
    showMessagePasswordRes.innerText = '';
  }

  const isValidRegister = isValidName && isValidEmail && isValidPassword;

  if (isValidRegister) {
    const date = new Date().toISOString();
    const id = generateRandomUserID(5);
    accounts.push({
      id: id,
      name: name,
      email: email,
      password: password,
      dateRegister: date,
      cart: [],
      isAdmin: false
    });

    localStorage.setItem('accounts', JSON.stringify(accounts));

    const isHasDummyAPI = JSON.parse(localStorage.getItem('DUMMY_API'));
    if (!isHasDummyAPI) {
      accounts.forEach(account => {
        DUMMY_API.push({
          idUser: account.id,
          cart: []
        });
      });
    } else {
      DUMMY_API = isHasDummyAPI;
      console.log(DUMMY_API);
      accounts.forEach(account => {
        const isExistUserCart = DUMMY_API.find(userCart => account.id === userCart.idUser);
        if (!isExistUserCart) {
          DUMMY_API.push({
            idUser: account.id,
            cart: []
          });
        }
      });
    }

    localStorage.setItem('DUMMY_API', JSON.stringify(DUMMY_API));

    localStorage.setItem(
      'User',
      JSON.stringify({
        id: id,
        name: name,
        email: email,
        password: password,
        dateRegister: date,
        cart: [],
        isAdmin: false
      })
    );

    location.reload();

    registerNameInput.value = '';
    registerEmailInput.value = '';
    registerPasswordInput.value = '';

    checkLoggedIn();
  }
});

const loginSubmitBtn = document.querySelector('.login__info--submit');
const loginEmailInput = document.querySelector('.login__info--input-email');
const loginPasswordInput = document.querySelector('.login__info--input-password');

const showMessageEmailLog = document.querySelector('.login__info--input__full-email p');
const showMessagePasswordLog = document.querySelector('.login__info--input__full-password p');

loginSubmitBtn.addEventListener('click', e => {
  e.preventDefault();

  const email = loginEmailInput.value.trim();
  const password = loginPasswordInput.value.trim();

  let isValidEmail = true;
  let isValidPassword = true;

  if (email.length === 0) {
    showMessageEmailLog.innerText = '* Bạn chưa nhập email';
    isValidEmail = false;
  } else if (!email.includes('@') && email !== 'admin') {
    showMessageEmailLog.innerText = '* Email không hợp lệ';
    isValidEmail = false;
  } else {
    showMessageEmailLog.innerText = '';
  }

  if (password.length === 0) {
    showMessagePasswordLog.innerText = '* Bạn chưa nhập mật khẩu';
    isValidPassword = false;
  } else if (password.length <= 8 && password !== 'admin') {
    showMessagePasswordLog.innerText = '* Mật khẩu phải trên 8 ký tự';
    isValidPassword = false;
  } else {
    showMessagePasswordLog.innerText = '';
  }

  const isValidLogin = isValidEmail && isValidPassword;

  if (isValidLogin) {
    const findAccount = accounts.find(account => {
      return account.email === email;
    });

    if (findAccount) {
      if (findAccount.password === password) {
        localStorage.setItem('User', JSON.stringify(findAccount));

        const isHasDummyAPI = JSON.parse(localStorage.getItem('DUMMY_API'));
        if (!isHasDummyAPI) {
          accounts.forEach(account => {
            DUMMY_API.push({
              idUser: account.id,
              cart: []
            });
          });
          localStorage.setItem('DUMMY_API', JSON.stringify(DUMMY_API));
        }

        location.reload();

        loginEmailInput.value = '';
        loginPasswordInput.value = '';

        checkLoggedIn();
      } else {
        showMessagePasswordLog.innerText = '* Bạn nhập sai mật khẩu';
      }
    } else {
      showMessageEmailLog.innerText = '* Email không tồn tại';
    }
  }
});
const signinBtn = document.querySelector('.register__background button');

signinBtn.addEventListener('click', e => {
  userWrapper.classList.add('login__active');
  userWrapper.classList.remove('register__active');
});

const signinBtnOnLowDevice = document.querySelector('.signin button');
const registerAgainOnLowDevice = document.querySelector('.register__again button');

signinBtnOnLowDevice.addEventListener('click', e => {
  userWrapper.classList.add('login__active');
  userWrapper.classList.remove('register__active');
});

registerAgainOnLowDevice.addEventListener('click', e => {
  userWrapper.classList.remove('login__active');
  userWrapper.classList.add('register__active');
});

const registerAgain = document.querySelector('.login__background button');
registerAgain.addEventListener('click', e => {
  userWrapper.classList.add('register__active');
  userWrapper.classList.remove('login__active');
});
const section4 = document.querySelector('.section--4-container ');

if (!isLoggedIn) {
  section4.classList.add('active');

  const section4Btn = section4.querySelector('button');
  section4Btn.addEventListener('click', e => {
    openFormRegister();
  });
}

const showEyeRegister = document.querySelector('.showEyeRegister');
const hideEyeRegister = document.querySelector('.hideEyeRegister');

showEyeRegister.addEventListener('click', e => {
  e.preventDefault();
  registerPasswordInput.type = 'text';
  showEyeRegister.classList.toggle('hide');
  hideEyeRegister.classList.toggle('hide');
});

hideEyeRegister.addEventListener('click', e => {
  e.preventDefault();
  registerPasswordInput.type = 'password';
  showEyeRegister.classList.toggle('hide');
  hideEyeRegister.classList.toggle('hide');
});

const showEyeLogin = document.querySelector('.showEyeLogin');
const hideEyeLogin = document.querySelector('.hideEyeLogin');

showEyeLogin.addEventListener('click', e => {
  e.preventDefault();
  loginPasswordInput.type = 'text';
  showEyeLogin.classList.toggle('hide');
  hideEyeLogin.classList.toggle('hide');
});

hideEyeLogin.addEventListener('click', e => {
  e.preventDefault();
  loginPasswordInput.type = 'password';
  showEyeLogin.classList.toggle('hide');
  hideEyeLogin.classList.toggle('hide');
});

const headerTop = document.querySelector('.header__top');

if (isLoggedIn) {
  const nameClient = headerTop.querySelectorAll('p')[1];
  nameClient.textContent = JSON.parse(localStorage.getItem('User')).name;
  headerTop.style.display = 'block';
} else {
  headerTop.querySelector('.header__top-item--left').style.display = 'none';
}

function HienthiTaikhoan() {
  var User = JSON.parse(localStorage.getItem('User'));
  console.log(User);
  console.log(document.querySelector(".user__wrapper"));
  document.querySelector(".user__wrapper").style.display = 'flex';
  const userLogin = JSON.parse(localStorage.getItem('User'));
  const userList = document.querySelector('.header__bottom--user__list');
  const cartBtn = document.getElementById('cart');
  if (userLogin) {
    document.querySelector(".user__wrapper").style.display = 'none';
    var li = document.getElementById('HienthiTaikhoan');
    li.innerHTML = '<i class="fa-solid fa-door-open" style="color: white"></i><p style="color: white">Đăng xuất</p>'
    li.setAttribute("id", "");
    li.setAttribute("onclick", "");
    li.setAttribute("class", "");
    li.addEventListener('click', function () {
      localStorage.removeItem('User');
      window.location.href = "product.html";
    });
  } else {
    cartBtn.style.display = 'none';
    cartBtn.setAttribute('disabled', 'disabled');
    console.log('Tài khoản chưa đăng nhập');
  }
}
function Dangky__btn() {
  document.querySelector(".register").style.opacity = '1';
}

