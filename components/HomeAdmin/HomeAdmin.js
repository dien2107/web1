const DUMMY_API = JSON.parse(localStorage.getItem('DUMMY_API'));
const DUMMY_PRODUCTS = JSON.parse(localStorage.getItem('DUMMY_PRODUCTS'));

const countProductsByType = (products, targetType) => {
  return products.filter(product => product.type === targetType).length;
};

const updateDataInHTML = (targetId, count) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.innerText = count;
  }
};

const countCategories = products => {
  const uniqueTypes = new Set();

  products.forEach(product => {
    uniqueTypes.add(product.type);
  });

  const categoryCounts = {};

  uniqueTypes.forEach(type => {
    const count = products.filter(product => product.type === type).length;
    categoryCounts[type] = count;
  });

  return categoryCounts;
};

const storedProducts = JSON.parse(localStorage.getItem('DUMMY_PRODUCTS'));

if (storedProducts) {
  const DUMMY_PRODUCTS = storedProducts;

  const productCount = DUMMY_PRODUCTS.length;

  const categoryCounts = countCategories(DUMMY_PRODUCTS);
  updateDataInHTML('productCount', productCount);
  for (const type in categoryCounts) {
    if (Object.hasOwnProperty.call(categoryCounts, type)) {
      updateDataInHTML(`categoryCount${type.charAt(0).toUpperCase() + type.slice(1)}`, categoryCounts[type]);
    }
  }

  const numberOfTypes = Object.keys(categoryCounts).length;
  updateDataInHTML('numberOfTypes', numberOfTypes);
} else {
  console.log('Không có dữ liệu trong local storage');
}

const accountsString = localStorage.getItem('accounts');

let memberCount = 0;

if (accountsString) {
  const accounts = JSON.parse(accountsString);

  memberCount = accounts.length;

} else {
  console.log('Không có dữ liệu thành viên trong localStorage');
}
updateDataInHTML('memberCount', memberCount);


const usersString2 = localStorage.getItem('Users');
let users = [];

function countOrdersStatus(data) {
  let processedCount = 0;
  let unprocessedCount = 0;

  data?.forEach(user => {
    user.cart.forEach(order => {
      order.product.forEach(item => {
        if (item.processed) {
          processedCount++;
        } else {
          unprocessedCount++;
        }
      });
    });
  });

  return { processed: processedCount, unprocessed: unprocessedCount };
}


const ordersStatusCount = countOrdersStatus(DUMMY_API);
updateDataInHTML('unprocessedOrderCount', ordersStatusCount.unprocessed);
updateDataInHTML('processedOrderCount', ordersStatusCount.processed);

if (Array.isArray(users)) {
  let pendingOrdersCount = 0;
  let processedOrdersCount = 0;

  users.forEach(user => {
    if (Array.isArray(user.cart)) {
      user.cart.forEach(order => {
        if (Array.isArray(order.product)) {
          order.product.forEach(product => {
            if (product.processed) {
              processedOrdersCount++;
            } else {
              pendingOrdersCount++;
            }
          });
        }
      });
    }
  });
} else {
  console.log('Dữ liệu người dùng không phải là mảng hợp lệ.');
}

let arrayTemp = [];
DUMMY_API?.forEach(idUser => {
  idUser.cart.forEach(order => {
    order.product.forEach(item => {
      if (item.processed) {
        arrayTemp.push({ id: item.id, quantity: item.quantity });
      }
    });
  });
});

let total_Price = 0;

arrayTemp.forEach(item => {
  const product = DUMMY_PRODUCTS.find(prod => prod.ID === item.id);
  if (product) {
    const productPrice = parseFloat(product.price.replace('VND', '').replace(/\./g, '').replace(',', '.'));
    total_Price += productPrice * item.quantity;
  }
});

document.querySelector('.box #producttotalprice').innerText = total_Price.toLocaleString('vi-VN') + ' VNĐ';
const modal = document.querySelector('.modal_statistic');
const modalTableContent = modal.querySelector('.table_body');
const overlay = document.querySelector('.overlay');

const mountainBtn = document.querySelector('#mountainBtn');
const touringBtn = document.querySelector('#touringBtn');
const roadBtn = document.querySelector('#roadBtn');
const kidsBtn = document.querySelector('#kidsBtn');
const exitBtn = document.querySelector('.table-exit-btn');
exitBtn.addEventListener('click', e => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', e => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});
const mountainStatistic = [];
const roadStatistic = [];
const touringStatistic = [];
const kidsStatistic = [];

DUMMY_API.forEach(userCart => {
  userCart.cart.forEach(cart => {
    const whatTypeIs = DUMMY_PRODUCTS.find(
      product => product.ID === cart?.product[0]?.id && cart?.product[0]?.processed
    );
    if (!whatTypeIs) {
      return;
    }

    if (whatTypeIs.type === 'mountain') {
      mountainStatistic.push({
        id: whatTypeIs.ID,
        price: whatTypeIs.price,
        name: whatTypeIs.name,
        quantitySold: cart.product[0].quantity,
        dateCreate: cart.dateCreate
      });
    } else if (whatTypeIs.type === 'road') {
      roadStatistic.push({
        id: whatTypeIs.ID,
        price: whatTypeIs.price,
        name: whatTypeIs.name,
        quantitySold: cart.product[0].quantity,
        dateCreate: cart.dateCreate
      });
    } else if (whatTypeIs.type === 'touring') {
      touringStatistic.push({
        id: whatTypeIs.ID,
        price: whatTypeIs.price,
        name: whatTypeIs.name,
        quantitySold: cart.product[0].quantity,
        dateCreate: cart.dateCreate
      });
    } else if (whatTypeIs.type === 'kids') {
      kidsStatistic.push({
        id: whatTypeIs.ID,
        price: whatTypeIs.price,
        name: whatTypeIs.name,
        quantitySold: cart.product[0].quantity,
        dateCreate: cart.dateCreate
      });
    }
  });
});

const groupMountainQuantityStatistic = [];
const groupRoadQuantityStatistic = [];
const groupTouringQuantityStatistic = [];
const groupKidsQuantityStatistic = [];

function calculateTotalQuantitySold(inputArray, outputArray) {
  inputArray.forEach(product => {
    const isExistInGroupArray = outputArray.find(groupProduct => groupProduct.id === product.id);
    if (!isExistInGroupArray) {
      outputArray.push({ ...product });
    }
    else {
      const isIndex = outputArray.findIndex(groupProduct => groupProduct.id === product.id);
      const quantitySoldUpdate = outputArray[isIndex].quantitySold + product.quantitySold;
      outputArray[isIndex].quantitySold = quantitySoldUpdate;
    }
  });
}

calculateTotalQuantitySold(mountainStatistic, groupMountainQuantityStatistic);
calculateTotalQuantitySold(roadStatistic, groupRoadQuantityStatistic);
calculateTotalQuantitySold(touringStatistic, groupTouringQuantityStatistic);
calculateTotalQuantitySold(kidsStatistic, groupKidsQuantityStatistic);

function renderDetailStatisticUniqueType(inputGroupArray) {
  modal.classList.add('active');
  overlay.classList.add('active');

  modalTableContent.innerHTML = '';

  inputGroupArray.forEach(item => {
    const html = `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantitySold}</td>
      </tr>
    `;
    modalTableContent.insertAdjacentHTML('afterbegin', html);
  });
}

const filterStatisticBtn = document.querySelector('#filterStatisticBtn');

filterStatisticBtn.addEventListener('click', e => {
  const validMountainStatistic = [];
  const validRoadStatistic = [];
  const validTouringStatistic = [];
  const validKidsStatistic = [];

  const filterStatisticStartDate = document.querySelector('#filterStatisticStartDate input');
  const filterStatisticEndDate = document.querySelector('#filterStatisticEndDate input');

  const filterStatisticStartDateMessage = document.querySelector('.filterStatisticStartDateMessage');
  const filterStatisticEndDateMessage = document.querySelector('.filterStatisticEndDateMessage');

  let isValidStartDate = true;
  let isValidEndDate = true;

  const startDateDay = filterStatisticStartDate.value.split('-')[2];
  const startDateMonth = +filterStatisticStartDate.value.split('-')[1] - 1;
  const startDateYear = filterStatisticStartDate.value.split('-')[0];

  const endDateDay = filterStatisticEndDate.value.split('-')[2];
  const endDateMonth = +filterStatisticEndDate.value.split('-')[1] - 1;
  const endDateYear = filterStatisticEndDate.value.split('-')[0];

  const convertStartDate = new Date(startDateYear, startDateMonth, startDateDay);
  const convertEndDate = new Date(endDateYear, endDateMonth, endDateDay);

  if (filterStatisticStartDate.value === '') {
    isValidStartDate = false;
    filterStatisticStartDateMessage.innerHTML = '* Vui lòng chọn ngày bắt đầu';
  } else {
    isValidStartDate = true;
    filterStatisticStartDateMessage.innerHTML = '';
  }

  if (filterStatisticEndDate.value === '') {
    isValidEndDate = false;
    filterStatisticEndDateMessage.innerHTML = '* Vui lòng chọn ngày kết thúc';
  } else if (convertEndDate < convertStartDate) {
    isValidEndDate = false;
    filterStatisticEndDateMessage.innerHTML = '* Vui lòng chọn ngày kết thúc lớn hơn hoặc bằng ngày bắt đầu';
  } else {
    isValidEndDate = true;
    filterStatisticEndDateMessage.innerHTML = '';
  }

  const isValidForm = isValidStartDate && isValidEndDate;

  if (isValidForm) {
    document.querySelector('.dashboard__wrapper').style.display = 'flex';

    filterProductToPushNewArray(groupMountainQuantityStatistic, validMountainStatistic);
    filterProductToPushNewArray(groupTouringQuantityStatistic, validTouringStatistic);
    filterProductToPushNewArray(groupRoadQuantityStatistic, validRoadStatistic);
    filterProductToPushNewArray(groupKidsQuantityStatistic, validKidsStatistic);

    mountainBtn.addEventListener('click', e => {
      renderDetailStatisticUniqueType(validMountainStatistic);
    });

    touringBtn.addEventListener('click', e => {
      renderDetailStatisticUniqueType(validTouringStatistic);
    });

    roadBtn.addEventListener('click', e => {
      renderDetailStatisticUniqueType(validRoadStatistic);
    });

    kidsBtn.addEventListener('click', e => {
      renderDetailStatisticUniqueType(validKidsStatistic);
    });

    const productBought = [];
    const statisticType = [
      { type: 'mountain', quantity: 0, totalPrice: 0 },
      { type: 'touring', quantity: 0, totalPrice: 0 },
      { type: 'road', quantity: 0, totalPrice: 0 },
      { type: 'kids', quantity: 0, totalPrice: 0 }
    ];

    DUMMY_API.forEach(user => {
      user.cart.forEach(order => {
        const createDate = new Date(order.dateCreate);

        const dateCreateDay = createDate.getDate();
        const dateCreateMonth = createDate.getMonth();
        const dateCreateYear = createDate.getFullYear();

        if (
          order?.product[0]?.processed &&
          convertStartDate <= new Date(dateCreateYear, dateCreateMonth, dateCreateDay) &&
          convertEndDate >= new Date(dateCreateYear, dateCreateMonth, dateCreateDay)
        ) {
          productBought.push({
            id: order.product[0].id,
            quantity: order.product[0].quantity
          });
        }
      });
    });

    function convertToPrice(price) {
      const getLeftString = price.split(' ')[0];
      const convertToTruePrice = +getLeftString.replaceAll('.', '');
      return convertToTruePrice;
    }

    DUMMY_PRODUCTS.forEach(product => {
      productBought.forEach(productB => {
        if (productB.id === product.ID) {
          statisticType.forEach(statisticItem => {
            if (statisticItem.type === product.type) {
              statisticItem.quantity += productB.quantity;
              statisticItem.totalPrice += convertToPrice(product.price) * productB.quantity;
            }
          });
        }
      });
    });

    const mountainTotalPriceElement = document.querySelector('#mountainTotalPrice');
    const roadTotalPriceElement = document.querySelector('#roadTotalPrice');
    const touringTotalPriceElement = document.querySelector('#touringTotalPrice');
    const kidsTotalPriceElement = document.querySelector('#kidsTotalPrice');

    const mountainTotalQuantityElement = document.querySelector('#mountainTotalQuantity');
    const roadTotalQuantityElement = document.querySelector('#roadTotalQuantity');
    const touringTotalQuantityElement = document.querySelector('#touringTotalQuantity');
    const kidsTotalQuantityElement = document.querySelector('#kidsTotalQuantity');

    statisticType.forEach(type => {
      if (type.type === 'mountain') {
        mountainTotalPriceElement.textContent = type.totalPrice.toLocaleString('vi-VN') + ' VNĐ';
        mountainTotalQuantityElement.textContent = type.quantity;
      } else if (type.type === 'road') {
        roadTotalPriceElement.textContent = type.totalPrice.toLocaleString('vi-VN') + ' VNĐ';
        roadTotalQuantityElement.textContent = type.quantity;
      } else if (type.type === 'touring') {
        touringTotalPriceElement.textContent = type.totalPrice.toLocaleString('vi-VN') + ' VNĐ';
        touringTotalQuantityElement.textContent = type.quantity;
      } else if (type.type === 'kids') {
        kidsTotalPriceElement.textContent = type.totalPrice.toLocaleString('vi-VN') + ' VNĐ';
        kidsTotalQuantityElement.textContent = type.quantity;
      }
    });
  }
});

function filterProductToPushNewArray(oldArray, newArray) {
  const filterStatisticStartDate = document.querySelector('#filterStatisticStartDate input');
  const filterStatisticEndDate = document.querySelector('#filterStatisticEndDate input');

  const startDateDay = filterStatisticStartDate.value.split('-')[2];
  const startDateMonth = +filterStatisticStartDate.value.split('-')[1] - 1;
  const startDateYear = filterStatisticStartDate.value.split('-')[0];

  const endDateDay = filterStatisticEndDate.value.split('-')[2];
  const endDateMonth = +filterStatisticEndDate.value.split('-')[1] - 1;
  const endDateYear = filterStatisticEndDate.value.split('-')[0];

  const convertStartDate = new Date(startDateYear, startDateMonth, startDateDay);
  const convertEndDate = new Date(endDateYear, endDateMonth, endDateDay);

  oldArray.forEach(item => {
    const dateCreate = new Date(item.dateCreate);
    const dateCreateDay = dateCreate.getDate();
    const dateCreateMonth = dateCreate.getMonth();
    const dateCreateYear = dateCreate.getFullYear();

    if (
      convertStartDate <= new Date(dateCreateYear, dateCreateMonth, dateCreateDay) &&
      convertEndDate >= new Date(dateCreateYear, dateCreateMonth, dateCreateDay)
    ) {
      newArray.push(item);
    }
  });
}
