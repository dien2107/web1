const accounts = JSON.parse(localStorage.getItem('accounts'));
if (!accounts) {
  const accounts = [
    {
      id: 'admin',
      name: 'Quản lý viên 1',
      email: 'admin',
      password: 'admin',
      dateRegister: '2023-01-01T00:00:00.000Z',
      isAdmin: true,
      cart: [],
      like: []
    }
  ];

  localStorage.setItem('accounts', JSON.stringify(accounts));
}

const submitBtn = document.querySelector('.user--filter__btn');

const addUserBtn = document.getElementById('addUserBtn');
addUserBtn.addEventListener('click', e => {
  e.preventDefault();
  renderAddUserModal();
});

function renderAddUserModal() {
  showModal();
  modal.innerHTML = `
    <form class="modal--add-user">
    <i class="fa-solid fa-xmark"></i>  
      <label for="newUserName">Tên người dùng:</label>
      <input type="text" id="newUserName" placeholder="Nhập tên người dùng" required>
      <p class="newUserNameMessage"></p>
      <br>
      <label for="newUserEmail">Email:</label>
      <input type="email" id="newUserEmail" name="newUserEmail" placeholder="Nhập email người dùng" required>
      <p class="newUserEmailMessage"></p> <br>
      <label for="newUserPassword">Mật khẩu:</label>
      <div class="showPassword">
        <input type="password" id="newUserPassword" name="newUserPassword" placeholder="Nhập mật khẩu người dùng" required>
        <i id="eyeIcon" class="fa-regular fa-eye"></i>
      </div>
      <p class="newUserPasswordMessage"></p> <br>
      <label class= "lbUserRole" for="userRole">Quyền:</label>
      <select class= "userRole" id="userRole" required>
        <option value="user">Người dùng</option>
        <option value="admin">Quản trị viên</option>
      </select>
    </form>
    <button class="modal--add-user__footer--add">Xác nhận</button>`;

  const acpAddUserBtn = document.querySelector('.modal--add-user__footer--add');
  acpAddUserBtn.addEventListener('click', () => {
    addUserHandler();
  });

  const closeBtn = document.querySelector('.modal--add-user i');
  closeBtn.addEventListener('click', e => {
    closeModal();
  });

  const showBtn = document.querySelector('#eyeIcon');
  showBtn.addEventListener('click', e => {
    var passwordField = document.getElementById('newUserPassword');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      eyeIcon.classList.remove('fa-eye-slash');
      eyeIcon.classList.add('fa-eye');
    } else {
      passwordField.type = 'password';
      eyeIcon.classList.remove('fa-eye');
      eyeIcon.classList.add('fa-eye-slash');
    }
  });
}

function addUserHandler() {
  const newUserName = document.getElementById('newUserName').value.trim();
  const newUserEmail = document.getElementById('newUserEmail').value.trim();
  const newUserPassword = document.getElementById('newUserPassword').value.trim();
  const userRole = document.getElementById('userRole').value;

  let isValidName = true;
  let isValidEmail = true;
  let isValidPassword = true;

  const showMessageNameRes = document.querySelector('.newUserNameMessage');
  const showMessageEmailRes = document.querySelector('.newUserEmailMessage');
  const showMessagePasswordRes = document.querySelector('.newUserPasswordMessage');
  const accounts = JSON.parse(localStorage.getItem('accounts'));

  if (newUserName.length === 0) {
    showMessageNameRes.innerText = '* Bạn chưa nhập tên đầy đủ';
    isValidName = false;
  } else {
    showMessageNameRes.innerText = '';
  }
  const patternEmail = /@.*\.[a-zA-z]{2,3}$/gi;

  if (newUserEmail.length === 0) {
    showMessageEmailRes.innerText = '* Bạn chưa nhập email';
    isValidEmail = false;
  } else if (!patternEmail.test(newUserEmail)) {
    showMessageEmailRes.innerText = '* Email không hợp lệ';
    isValidEmail = false;
  } else {
    if (accounts.length > 0) {
      const isExist = accounts.find(account => account.email === newUserEmail);
      if (isExist) {
        showMessageEmailRes.innerText = '* Email đã tồn tại';
        isValidEmail = false;
      } else {
        showMessageEmailRes.innerText = '';
      }
    }
  }

  if (newUserPassword.length === 0) {
    showMessagePasswordRes.innerText = '* Bạn chưa nhập mật khẩu';
    isValidPassword = false;
  } else if (newUserPassword.length <= 8) {
    showMessagePasswordRes.innerText = '* Mật khẩu phải trên 8 ký tự';
    isValidPassword = false;
  } else {
    showMessagePasswordRes.innerText = '';
  }

  const isValidForm = isValidName && isValidEmail && isValidPassword;

  if (isValidForm) {
    let userList = JSON.parse(localStorage.getItem('accounts')) || [];

    const newUser = {
      id: userRole === 'admin' ? 'ad_' + generateRandomUserID(2) : generateRandomUserID(5),
      name: newUserName,
      email: newUserEmail,
      password: newUserPassword,
      dateRegister: new Date(),
      like: [],
      cart: [],
      bought: [],
      processing: [],
      isAdmin: userRole === 'admin' ? true : false
    };

    userList.push(newUser);

    localStorage.setItem('accounts', JSON.stringify(userList));

    renderUsersInfo(userList);

    paginationHandler();
    clickedDeleteBtnHandler();
    closeModal();
  }
}

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


let data;
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const inputNameClientValue = document.querySelector('#userNameClient input').value.toLowerCase();
  const inputIdClientValue = document.querySelector('#userIdClient input').value;
  const inputBeginDate = document.querySelector('#beginDate').value;
  const inputEndDate = document.querySelector('#endDate').value;
  const timeBegin = new Date(inputBeginDate);
  const dayBegin = timeBegin.getDate();
  const monthBegin = timeBegin.getMonth();
  const yearBegin = timeBegin.getFullYear();
  const timeEnd = new Date(inputEndDate);
  const dayEnd = timeEnd.getDate();
  const monthEnd = timeEnd.getMonth();
  const yearEnd = timeEnd.getFullYear();
  if (timeBegin > timeEnd) {
    alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
    return;
  }
  const inputRoleClinetValue = document.querySelector('#userRoleClient select').value;
  let isAdmiValid;
  if (inputRoleClinetValue === 'admin') {
    isAdmiValid = true;
  } else if (inputRoleClinetValue === 'user') {
    isAdmiValid = false;
  }

  if (!inputNameClientValue && !inputIdClientValue && !inputBeginDate && !inputEndDate && !inputRoleClinetValue) {
    return;
  } else {
    const usersContainer = document.querySelector('#userList');

    window.scrollTo({
      top: usersContainer.getBoundingClientRect().top + window.scrollY - usersContainer.clientHeight,
      behavior: 'smooth'
    });
  }

  const userList = JSON.parse(localStorage.getItem('accounts'));

  if (Array.isArray(userList)) {
    data = userList;
  } else {
    data = [userList];
  }

  if (inputNameClientValue) {
    data = data.filter(item => item.name.toLowerCase().includes(inputNameClientValue));
  }

  if (inputIdClientValue) {
    data = data.filter(item => item.id.toString() === inputIdClientValue.trim());
  }

  if (inputBeginDate && inputEndDate) {
    data = data.filter(user => {
      const timeUser = new Date(user.dateRegister);
      const dayUser = timeUser.getDate();
      const monthUser = timeUser.getMonth();
      const yearUser = timeUser.getFullYear();
      const isAfterOrEqualBeginDate =
        new Date(yearUser, monthUser, dayUser) >= new Date(yearBegin, monthBegin, dayBegin);
      const isBeforeOrEqualEndDate = new Date(yearUser, monthUser, dayUser) <= new Date(yearEnd, monthEnd, dayEnd);

      return isAfterOrEqualBeginDate && isBeforeOrEqualEndDate;
    });
  }

  if (inputRoleClinetValue === 'all') {
    data = data;
  } else {
    data = data.filter(item => item.isAdmin === isAdmiValid);
  }

  if (data.length === 0) {
    alert('Không tìm thấy thông tin người dùng!');
  } else {
    alert('Lọc thành công người dùng!');
  }

  init(data);
  paginationHandler();
});

const resetBtnManagerUser = document.querySelector('.user--reset__btn');
resetBtnManagerUser.addEventListener('click', e => {
  const data = JSON.parse(localStorage.getItem('accounts'));
  init(data);
  paginationHandler();
});


const usersContainer = document.querySelector('.admin__content--body__users');

const renderUsersInfo = userList => {
  userList = userList || JSON.parse(localStorage.getItem('accounts'));

  usersContainer.innerHTML = '';

  userList?.forEach(user => {
    const dateRegister = new Date(user.dateRegister);

    const day = dateRegister.getDate().toString().padStart(2, '0');
    const month = (dateRegister.getMonth() + 1).toString().padStart(2, '0');
    const year = dateRegister.getFullYear();
    const html = `
    <ul class="admin__content--body__users--item" uid="${user.id}"> 
      <li class="admin__content--body__id users--item__id">${user.id}</li>
      <li class="admin__content--body__name users--item__name">${user.name}</li>
      <li class="admin__content--body__email users--item__email">${user.email}</li>
      <li class="admin__content--body__role users--item__role">${user.isAdmin ? 'Quản trị viên' : 'Người dùng'}</li>
      <li class="admin__content--body__dateRegister users--item__dateRegister">${day}/${month}/${year}</li>
      <li class="admin__content--body__btn users--item__btn">
        <button ${user.email === 'admin' ? 'style="display: none"' : ''}><i class="fa-solid fa-x"></i></button>
      </li>
    </ul>
    `;
    usersContainer.insertAdjacentHTML('afterbegin', html);
  });
};

const modal = document.querySelector('.modal');
const overlayManageUser = document.querySelector('.overlay');

const showModalManageUser = () => {
  modal.classList.add('active');
  overlayManageUser.classList.add('active');
};

const renderModalContent = () => {
  showModalManageUser();
  modal.innerHTML = '';
  const html = `
  <div class="modal--delete">
    <header class="modal--delete__header">
      <h1>Xóa dữ liệu</h1>
    </header>
    <div class="modal--delete__content">
      <p>Bạn có muốn xóa dữ liệu này không?</p>
    </div>
    <div class="modal--delete__footer">
      <button class="modal--delete__footer--delete">Chắc chắn</button>
      <button class="modal--delete__footer--exit">Không</button>
    </div>
  </div>`;
  modal.insertAdjacentHTML('afterbegin', html);
};

const closeModal = () => {
  modal.classList.remove('active');
  overlayManageUser.classList.remove('active');
};

const showModalHandler = btn => {
  renderModalContent();

  const acpDeleteBtn = document.querySelector('.modal--delete__footer--delete');
  const exitDeleteBtn = document.querySelector('.modal--delete__footer--exit');

  acpDeleteBtn.addEventListener('click', e => {
    deleteUserHandler(btn);
    closeModal();
  });

  exitDeleteBtn.addEventListener('click', e => {
    closeModal();
  });
};

const deleteUserHandler = btn => {
  const currentParent = btn.closest('.admin__content--body__users--item');
  const currentUID = currentParent.getAttribute('uid');

  const userList = JSON.parse(localStorage.getItem('accounts'));

  let data;
  if (Array.isArray(userList)) {
    data = userList;
  } else {
    data = [userList];
  }

  data = data.filter(user => user.id !== currentUID);
  localStorage.setItem('accounts', JSON.stringify(data));

  let userDummyApi = JSON.parse(localStorage.getItem('DUMMY_API'));
  userDummyApi = userDummyApi.filter(user => {
    if (user.idUser !== currentUID) {
      return true;
    }
  });
  localStorage.setItem('DUMMY_API', JSON.stringify(userDummyApi));

  renderUsersInfo(data);
  clickedDeleteBtnHandler();
  paginationHandler();

  alert('Xóa dữ liệu người dùng thành công!');
  location.reload();
};

const clickedDeleteBtnHandler = () => {
  const btnDeleteElements = document.querySelectorAll('.admin__content--body__btn.users--item__btn button');
  btnDeleteElements.forEach(btn => {
    btn.addEventListener('click', e => {
      showModalHandler(btn);
    });
  });
};

const init = data => {
  renderUsersInfo(data);
  clickedDeleteBtnHandler();
};

init();

function paginationHandler() {
  const productItems = document.querySelectorAll('.admin__content--body__users ul');
  let currentPage = 0;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(productItems.length / itemsPerPage);
  let storeItemsPerPage = [];

  function renderLayoutPagination() {
    document.querySelector('.admin__content--body__users').innerHTML = '';
    const startIdx = currentPage * itemsPerPage;
    const endIdx = Math.min(currentPage * itemsPerPage + itemsPerPage, productItems.length);

    for (let i = startIdx; i < endIdx; i++) {
      storeItemsPerPage.push(productItems[i]);
    }
    storeItemsPerPage.forEach(item => {
      document.querySelector('.admin__content--body__users').appendChild(item);
    });
    storeItemsPerPage = [];
  }

  function renderPaginationBtn() {
    const pagination = document.querySelector('.pagination__user');
    pagination.innerHTML = '';
    const html = `
      <button data-goto="${
        currentPage - 1
      }" data-of="${totalPages}" class="btn--inline pagination__user--pagination__btn--prev ${
      currentPage === 0 ? 'hide' : ''
    }">
        <i class="fa-solid fa-arrow-left"></i>
        <span>${currentPage}</span>
        <span> of ${totalPages}</span>
      </button>
      <span class="currentPage">${currentPage + 1}</span>
      <button data-goto="${
        currentPage + 1
      }" data-of="${totalPages}" class="btn--inline pagination__user--pagination__btn--next ${
      currentPage === totalPages - 1 || totalPages === 0 ? 'hide' : ''
    } "  >
        <span>${currentPage + 2}</span>
        <span> of ${totalPages}</span>
        <i class="fa-solid fa-arrow-right"></i>
      </button>`;
    pagination.insertAdjacentHTML('afterbegin', html);
    nextPageHandler();
    prevPageHandler();
  }

  function nextPageHandler() {
    const nextPageBtn = document.querySelector('.pagination__user--pagination__btn--next');
    nextPageBtn.addEventListener('click', e => {
      currentPage += 1;
      renderLayoutPagination();
      renderPaginationBtn();
      clickedDeleteBtnHandler();
    });
  }

  function prevPageHandler() {
    const prevPageBtn = document.querySelector('.pagination__user--pagination__btn--prev');
    prevPageBtn.addEventListener('click', e => {
      currentPage -= 1;
      renderLayoutPagination();
      renderPaginationBtn();
      clickedDeleteBtnHandler();
    });
  }

  renderLayoutPagination();
  renderPaginationBtn();
}
paginationHandler();
