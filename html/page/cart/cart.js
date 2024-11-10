const userLocal = JSON.parse(localStorage.getItem('User'));
const cartInfo = document.getElementById('cart-info');
const DUMMY_API = JSON.parse(localStorage.getItem('DUMMY_API'));

// Kiểm tra quyền truy cập User nếu là admin thì hiển thị btn Quản lý
const userLogin = JSON.parse(localStorage.getItem('User'));
if (userLogin.isAdmin) {
  document.querySelectorAll('.adminManager__item').forEach(item => (item.style.display = 'block'));
} else {
  document.querySelectorAll('.adminManager__item').forEach(item => (item.style.display = 'none'));
}

const dataCart =  [
  {
    name: 'Procaliber 9.7 [2024]',
    imgSrc: '../../../database/images/productImgs/Procaliber97_24_WHT_Primary-571x379.jpg',
    price: '105.000.000 VND',
    dataColors: ['#ffffff', '#000000'],
    ID: 'fwjog',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Fuel EX 5 Gen 6 [2023]',
    imgSrc: '../../../database/images/productImgs/FueL_EX5-2023_gen6_Hero-571x379.jpg',
    price: '65.000.000 VND',
    dataColors: ['#303030', '#000000'],
    ID: '0vptf',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Domane AL 4 Gen 3',
    imgSrc: '../../../database/images/productImgs/Domane_AL4_Disc_23_BLK-571x379.jpg',
    price: '39.900.000 VND',
    dataColors: ['#383838', '#000000'],
    ID: '1v6at',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Checkpoint ALR 4',
    imgSrc: '../../../database/images/productImgs/CheckpointALR5_24_GRN_Hero-571x379.jpg',
    price: '49.900.000 VND',
    dataColors: ['#81d742', '#000000'],
    ID: 'z6dnl',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Domane SL 6 [2023] Gen 4',
    imgSrc: '../../../database/images/productImgs/Domane-SL-6-23-BLK_Hero-571x379.jpg',
    price: '110.000.000 VND',
    dataColors: ['#000000', '#474747'],
    ID: '26yno',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Émonda ALR 5',
    imgSrc: '../../../database/images/productImgs/EmondaALR-_5_Hero-571x379.jpg',
    price: '55.000.000 VND',
    dataColors: ['#95c1d9', '#eb867d'],
    ID: 'nf75f',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Supercaliber SLR 9.9 X0 AXS Gen 2',
    imgSrc: '../../../database/images/productImgs/SupercaliberSLR_99_X0-AXS_RED_Primary-571x379.jpg',
    price: '215.000.000 VND',
    dataColors: ['#681d18', '#000000'],
    ID: '8adfs',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Supercaliber SL 9.6 Gen 2',
    imgSrc: '../../../database/images/productImgs/Supercaliber96_23_BLU_Primary-571x379.jpg',
    price: '110.000.000 VND',
    dataColors: ['#1e73be', '#000000'],
    ID: 'sh0u0',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Roscoe 6',
    imgSrc: '../../../database/images/productImgs/Roscoe6_Hero-571x379.jpg',
    price: '23.900.000 VND',
    dataColors: ['#000000', '#dd3333'],
    ID: '2ifcg',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Émonda SL 6 AXS',
    imgSrc: '../../../database/images/productImgs/EmondaSL6AXS_23Primary.-571x379.jpg',
    price: '129.000.000 VND',
    dataColors: ['#021521', '#4f4f4f'],
    ID: 'hp1pa',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Verve 2 Disc [2023]',
    imgSrc: '../../../database/images/productImgs/Verve2_23_BLU_Hero-571x379.jpg',
    price: '16.900.000 VND',
    dataColors: ['#1e73be', '#b2b2b2'],
    ID: 'd6fvi',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'FX 2 Disc  Stagger',
    imgSrc: '../../../database/images/productImgs/FX2DiscStagger_22_35004_B_Primary-571x379.jpg',
    price: '16.500.000 VND',
    dataColors: ['#ed2700', '#000000'],
    ID: '1t6ce',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Roscoe 24 [2023]',
    imgSrc: '../../../database/images/productImgs/Roscoe24-571x379.jpg',
    price: '18.000.000 VND',
    dataColors: ['#000000', '#00d69d'],
    ID: 'wbl5q',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Roscoe 20 [2023]',
    imgSrc: '../../../database/images/productImgs/Roscoe20_Hero-571x379.jpg',
    price: '19.000.000 VND',
    dataColors: ['#000000', '#00d69d'],
    ID: '09p9s',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Precaliber 24 8SP Boy’s [2023]',
    imgSrc: '../../../database/images/productImgs/Precaliber248speed_23_36965_A_Primary-571x379.jpg',
    price: '8.500.000 VND',
    dataColors: ['#757575', '#dd9933'],
    ID: '8m88h',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Checkpoint ALR 5',
    imgSrc: '../../../database/images/productImgs/CheckpointALR5_22_35172_B_Primary-571x379.jpg',
    price: '65.000.000 VND',
    dataColors: ['#0b1b49', '#b7382a'],
    ID: '1x2bj',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Domane SL 7 eTap [2023] Gen 4',
    imgSrc: '../../../database/images/productImgs/Domane-SL-6-eTap-23-Hero-571x379.jpg',
    price: '179.000.000 VND',
    dataColors: ['#ffffff', '#6b1e16'],
    ID: 'amfrm',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Verve 1 Disc [2023]',
    imgSrc: '../../../database/images/productImgs/Verve1_23_36811_A_Primary-571x379.jpg',
    price: '13.500.000 VND',
    dataColors: ['#000000', '#967801'],
    ID: '5pmvq',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Verve 2 Disc Lowstep [2023]',
    imgSrc: '../../../database/images/productImgs/Verve2DiscLowStep_23_GRN_Hero-571x379.jpg',
    price: '16.900.000 VND',
    dataColors: ['#40ceb2', '#003b42'],
    ID: 'qcumb',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Verve 1 Disc Lowstep [2023]',
    imgSrc: '../../../database/images/productImgs/Verve1DiscLowStep_23_Red_Hero-571x379.jpg',
    price: '13.500.000 VND',
    dataColors: ['#dd3333', '#353535'],
    ID: 'limev',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Precaliber 16 [2023]',
    imgSrc: '../../../database/images/productImgs/PreCaliber16_2023_GRN-571x379.jpg',
    price: '6.500.000 VND',
    dataColors: ['#d5f44b', '#004863'],
    ID: '7rwfc',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Domane AL 3 Disc 2023',
    imgSrc: '../../../database/images/productImgs/Domane_AL3_Disc_23.-571x379.jpg',
    price: '29.900.000 VND',
    dataColors: ['#606060', '#bf2b2b'],
    ID: 'hribg',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Dual Sport 3 [2023] Gen 5',
    imgSrc: '../../../database/images/productImgs/DS3_2023_GRN-571x379.jpg',
    price: '20.900.000 VND',
    dataColors: ['#173a01', '#84561a'],
    ID: 'm9q49',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Dual Sport 2 [2023] Gen 5',
    imgSrc: '../../../database/images/productImgs/DS2_2023_BLU-571x379.jpg',
    price: '17.900.000 VND',
    dataColors: ['#4f4f4f', '#000000'],
    ID: 'sfar9',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Dual Sport 1 [2023] Gen 5',
    imgSrc: '../../../database/images/productImgs/DS1_2023_GRY-571x379.jpg',
    price: '14.900.000 VND',
    dataColors: ['#4f4f4f', '#000000'],
    ID: 'rtuso',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Domane SL 5 [2023] Gen 4',
    imgSrc: '../../../database/images/productImgs/Domane_SL5_23_Gen-571x379.jpg',
    price: '89.000.000 VND',
    dataColors: ['#161616', '#dd3333'],
    ID: 'dimsi',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Top Fuel 8',
    imgSrc: '../../../database/images/productImgs/TOP-FUEL-8_Hero-571x379.jpg',
    price: '85.000.000 VND',
    dataColors: ['#00285e', '#00285e'],
    ID: 'xq3ld',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Procaliber 9.8 [2022]',
    imgSrc: '../../../database/images/productImgs/Procaliber98_22_Hero-571x379.jpg',
    price: '130.000.000 VND',
    dataColors: ['#6b0707', '#dd3333'],
    ID: 'ninws',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Domane SL 6 eTap [2023] Gen 4',
    imgSrc: '../../../database/images/productImgs/Domane-SL-6-eTap-23-Hero-571x379.jpg',
    price: '125.000.000 VND',
    dataColors: ['#9b231f', '#ffffff'],
    ID: '0htwb',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Madone SL 7 eTap [2023]',
    imgSrc: '../../../database/images/productImgs/Madone-SL-7-eTap_Primary-571x379.jpg',
    price: '185.000.000 VND',
    dataColors: ['#4d6087', '#000000'],
    ID: 'tvmsp',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Madone SLR 7  Gen 6 [2023]',
    imgSrc: '../../../database/images/productImgs/MadoneSLR7Gen6_23_BLK_Primary-571x379.jpg',
    price: '199.000.000 VND',
    dataColors: ['#000000', '#000000'],
    ID: '0ko1l',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Marlin 8  2023',
    imgSrc: '../../../database/images/productImgs/Marlin8_23_GREY_Primary-571x379.jpg',
    price: '29.900.000 VND',
    dataColors: ['#4c4c4c', '#000000'],
    ID: 'dpf84',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Marlin 7 2023',
    imgSrc: '../../../database/images/productImgs/Marlin7_23_36967_B_Primary-571x379.jpg',
    price: '21.900.000 VND',
    dataColors: ['#18a4ac', '#000000'],
    ID: 'awpt0',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Marlin 6 2023',
    imgSrc: '../../../database/images/productImgs/Marlin6_23_BLU-571x379.jpg',
    price: '17.900.000 VND',
    dataColors: ['#212857', '#303be0'],
    ID: 'mkddt',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Supercaliber 9.9 AXS',
    imgSrc: '../../../database/images/productImgs/Supercaliber99AXS_20_28896_A_Primary-571x379.jpg',
    price: '270.000.000 VND',
    dataColors: ['#2d2d2d', '#bcb5ad'],
    ID: 'sif5y',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'X-Caliber 9 [2022-2023]',
    imgSrc: '../../../database/images/productImgs/XCaliber9_22_35112_A_Primary-571x379.jpg',
    price: '41.900.000 VND',
    dataColors: ['#1e73be', '#999999'],
    ID: 'lki6k',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Top Fuel 5',
    imgSrc: '../../../database/images/productImgs/TopFuel5_23-571x379.jpg',
    price: '79.000.000 VND',
    dataColors: ['#dd9933', '#262626'],
    ID: 'leqn3',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Fuel EX 5  2022',
    imgSrc: '../../../database/images/productImgs/FueL_EX5-2022-571x379.jpg',
    price: '75.000.000 VND',
    dataColors: ['#000000', '#565656'],
    ID: 'i5b4e',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Slash 7 2022',
    imgSrc: '../../../database/images/productImgs/Slash7DeoreXT_22_Primary-571x379.jpg',
    price: '89.000.000 VND',
    dataColors: ['#083802', '#b54029'],
    ID: '8f3zz',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Madone SLR 7 eTap [2022]',
    imgSrc: '../../../database/images/productImgs/MadoneSLR7eTap_22_35744_F_Primary-571x379.jpg',
    price: '199.000.000 VND',
    dataColors: ['#ff3a3a', '#f2ff00'],
    ID: 'n9sjp',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Speed Concept SLR 6 eTap',
    imgSrc: '../../../database/images/productImgs/SpeedConceptSLR6eTap_22_35754_D_Primary-571x379.jpg',
    price: '210.000.000 VND',
    dataColors: ['#ff0000', '#000000'],
    ID: '8zxeb',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Procaliber 9.7 [2022]',
    imgSrc: '../../../database/images/productImgs/Procaliber97_22_35114_B_Primary-571x379.jpg',
    price: '99.000.000 VND',
    dataColors: ['#0092e8', '#00127c'],
    ID: 'x6wjz',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Speed Concept SLR 7',
    imgSrc: '../../../database/images/productImgs/Speed-Concept-SLR-7_2023-571x379.jpg',
    price: '225.000.000 VND',
    dataColors: ['#000000', '#232323'],
    ID: 'tncod',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'FX 3 Disc',
    imgSrc: '../../../database/images/productImgs/FX3Disc_22_35021_B_Primary-1-571x379.jpg',
    price: '23.900.000 VND',
    dataColors: ['#7c0000', '#ff0800'],
    ID: 'poewt',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Supercaliber 9.7',
    imgSrc: '../../../database/images/productImgs/Supercaliber97_22_35149_A_Primary-571x379.jpg',
    price: '130.000.000 VND',
    dataColors: ['#383838', '#cc0000'],
    ID: 'clmxg',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Madone SL 7 eTap [2022]',
    imgSrc: '../../../database/images/productImgs/MadoneSL7eTap_22_35180_A_Primary-571x379.jpg',
    price: '165.000.000 VND',
    dataColors: ['#080054', '#00b7ef'],
    ID: 'wb11x',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Émonda SL 6 [2022]',
    imgSrc: '../../../database/images/productImgs/EmondaSL6Disc_21_32561_A_Primary-571x379.jpg',
    price: '85.000.000 VND',
    dataColors: ['#464f3d', '#464f3d'],
    ID: 'dpmvu',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Checkpoint SL 5',
    imgSrc: '../../../database/images/productImgs/CheckpointSL5_22_35169_B_Primary-571x379.jpg',
    price: '89.000.000 VND',
    dataColors: ['#d10000', '#d10000'],
    ID: 'wl5cm',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Domane SL 5 [2023] Gen 3',
    imgSrc: '../../../database/images/productImgs/DomaneSL5_22_35298_A_Primary-571x379.jpg',
    price: '89.000.000 VND',
    dataColors: ['#383838', '#895700'],
    ID: 'kb0vp',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Procaliber 9.8 [2021]',
    imgSrc: '../../../database/images/productImgs/Procaliber98_21_33269_A_Primary-571x379.jpg',
    price: '125.000.000 VND',
    dataColors: ['#ff7f00', '#000000'],
    ID: 'sjcy8',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Madone SL 6 Disc [2022]',
    imgSrc: '../../../database/images/productImgs/MadoneSL6_22_35177_B_Primary-571x379.jpg',
    price: '120.000.000 VND',
    dataColors: ['#f20000', '#f20000'],
    ID: '3mzug',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'X-Caliber 8 [2022-2023]',
    imgSrc: '../../../database/images/productImgs/XCaliber8_23_Primary_BLU-571x376.jpg',
    price: '30.900.000 VND',
    dataColors: ['#240e87', '#ffffff'],
    ID: '4nudz',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Procaliber 9.6 [2022-2023]',
    imgSrc: '../../../database/images/productImgs/Procaliber96_22_35113_B_Primary-571x379.jpg',
    price: '79.900.000 VND',
    dataColors: ['#daf722', '#0a0a0a'],
    ID: 'cwhow',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Supercaliber 9.6',
    imgSrc: '../../../database/images/productImgs/Supercaliber96_22_35151_B_Primary-571x379.jpg',
    price: '110.000.000 VND',
    dataColors: ['#d10000', '#d10000'],
    ID: 'i2m3e',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'FX 2 Disc',
    imgSrc: '../../../database/images/productImgs/FX2Disc_22_35003_B_Primary-1-571x379.jpg',
    price: '16.500.000 VND',
    dataColors: ['#ed2700', '#ed2700'],
    ID: 'y2zd6',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'FX1 Stagger Disc 2022',
    imgSrc: '../../../database/images/productImgs/FX1StaggerDisc_22_35002_A_Primary-571x379.jpg',
    price: '13.900.000 VND',
    dataColors: ['#e5dcb3', '#2d1d00'],
    ID: 'vxy9b',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'FX 1 Disc',
    imgSrc: '../../../database/images/productImgs/FX1Disc_22_35001_B_Primary-1-571x379.jpg',
    price: '13.900.000 VND',
    dataColors: ['#d10000', '#d8b682'],
    ID: 'bnrsc',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Marlin 6 2022',
    imgSrc: '../../../database/images/productImgs/Marlin6_22_35066_A_Primary-571x379.jpg',
    price: '16.500.000 VND',
    dataColors: ['#424242', '#dd003b'],
    ID: 'kj6e5',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Precaliber 24 8SP SUS Girl’s [2023]',
    imgSrc: '../../../database/images/productImgs/Precaliber248speedSuspension_23_36846_D_Primary-571x379.jpg',
    price: '9.500.000 VND',
    dataColors: ['#00c7ce', '#8224e3'],
    ID: 'd2g3f',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Domane AL 2 Disc',
    imgSrc: '../../../database/images/productImgs/DomaneAL2Disc_21_33083_A_Primary-571x379.jpg',
    price: '24.900.000 VND',
    dataColors: ['#00439b', '#e5e5e5'],
    ID: 'etw02',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Marlin 5',
    imgSrc: '../../../database/images/productImgs/Marlin5_22_34587_C_Primary-571x379.jpg',
    price: '12.900.000 VND',
    dataColors: ['#00e5ed', '#d1f200'],
    ID: '6e42j',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: '520 Grando',
    imgSrc: '../../../database/images/productImgs/520Allroad_21_33474_A_Primary-571x379.jpg',
    price: '35.900.000 VND',
    dataColors: ['#0f335b', '#0f335b'],
    ID: '6h1rz',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Dual Sport 4 2021',
    imgSrc: '../../../database/images/productImgs/DualSport4_21_32898_A_Primary-571x379.jpg',
    price: '27.500.000 VND',
    dataColors: ['#2b2b2b', '#2b2b2b'],
    ID: 'fu2j5',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'FX Sport 4',
    imgSrc: '../../../database/images/productImgs/FXSport_Carbon_GREY-571x379.jpg',
    price: '69.900.000 VND',
    dataColors: ['#1e1e1e', '#c1c1c1'],
    ID: 'x42kz',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Roscoe 7',
    imgSrc: '../../../database/images/productImgs/Roscoe7_20_28499_A_Primary-571x379.jpeg',
    price: '29.900.000 VND',
    dataColors: ['#000000', '#4f3c00'],
    ID: 'qbi80',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Top Fuel 9.9 X01',
    imgSrc: '../../../database/images/productImgs/Trek-Top-Fuel-99-X01-Primary-571x379.jpg',
    price: '179.000.000 VND',
    dataColors: ['#000000', '#828282'],
    ID: 'lij6h',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Émonda ALR 4 Disc',
    imgSrc: '../../../database/images/productImgs/EmondaALR4Disc_21_33078_B_Primary-571x379.jpeg',
    price: '39.900.000 VND',
    dataColors: ['#dd3333', '#ffcb23'],
    ID: '3k2fc',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Procaliber 9.5[2022-2023]',
    imgSrc: '../../../database/images/productImgs/Procaliber95_21_33258_B_Primary-571x379.jpg',
    price: '65.000.000 VND',
    dataColors: ['#dd3333', '#ffd800'],
    ID: 'jw27j',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Verve 1 Disc Lowstep',
    imgSrc: '../../../database/images/productImgs/Verve1DiscLowStep_21_32736_B_Primary-571x379.jpeg',
    price: '13.500.000 VND',
    dataColors: ['#fff9ef', '#ffb656'],
    ID: 'g2aee',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Émonda SL 7 eTap',
    imgSrc: '../../../database/images/productImgs/EmondaSL7eTap_23_36978_A_Primary-571x379.jpg',
    price: '159.000.000 VND',
    dataColors: ['#212121', '#000000'],
    ID: '0iaob',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Émonda SL 5 Disc',
    imgSrc: '../../../database/images/productImgs/EmondaSL5Disc_BLUE_hero-571x379.jpg',
    price: '79.000.000 VND',
    dataColors: ['#00053d', '#0925c1'],
    ID: 'ccvld',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Émonda SL 6 Pro',
    imgSrc: '../../../database/images/productImgs/EmondaSL6DiscPro_22601812_Primary-571x379.jpg',
    price: '100.000.000 VND',
    dataColors: ['#313933', '#313933'],
    ID: '7mnol',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Crockett 4 Disc',
    imgSrc: '../../../database/images/productImgs/Crockett-4-Disc-BLK-Primary-571x379.jpg',
    price: '45.000.000 VND',
    dataColors: ['#000000', '#cccccc'],
    ID: 'fe7rx',
    type: 'road',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Marlin 4',
    imgSrc: '../../../database/images/productImgs/Marlin4_23_BLU-571x379.jpg',
    price: '11.500.000 VND',
    dataColors: ['#1e73be', '#ffffff'],
    ID: 'qekns',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Supercaliber 9.9 XX1',
    imgSrc: '../../../database/images/productImgs/Supercaliber-99-XX1-CNBLK-2021-571x379.jpg',
    price: '270.000.000 VND',
    dataColors: ['#2d2d2d', '#bcb5ad'],
    ID: '8zgya',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Supercaliber 9.8 GX',
    imgSrc: '../../../database/images/productImgs/Supercaliber98GX_22_35147_B_Primary-571x379.jpg',
    price: '150.000.000 VND',
    dataColors: ['#2d2d2d', '#bcb5ad'],
    ID: 'k5c7v',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Fuel EX 9.7',
    imgSrc: '../../../database/images/productImgs/TK-FuelEX-97-20-BLU-571x379.jpg',
    price: '109.000.000 VND',
    dataColors: ['#04afed', '#12e2db'],
    ID: 'k0ek3',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Precaliber 20 7SP Girl’s [2023]',
    imgSrc: '../../../database/images/productImgs/Precaliber207speed_23_36268_D_Primary-571x379.jpg',
    price: '7.900.000 VND',
    dataColors: ['#42d6d6', '#4c00db'],
    ID: 't3w90',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Precaliber 20 SS Boy’s [2023]',
    imgSrc: '../../../database/images/productImgs/Precaliber20_23_36271_B_Primary-571x379.jpg',
    price: '6.900.000 VND',
    dataColors: ['#dd3333', '#081438'],
    ID: 'i1dos',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Precaliber 24 8SP SUS Boy’s [2023]',
    imgSrc: '../../../database/images/productImgs/Precaliber248speedSuspension_23_36846_A_Primary-571x379.jpg',
    price: '9.500.000 VND',
    dataColors: ['#424242', '#eeee22'],
    ID: '70efo',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'Precaliber 20 7SP Boys’ [2023]',
    imgSrc: '../../../database/images/productImgs/Precaliber207speed_23_36268_B_Primary-571x379.jpg',
    price: '7.900.000 VND',
    dataColors: ['#f75238', '#000544'],
    ID: 'p8zz7',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: '520',
    imgSrc: '../../../database/images/productImgs/520Disc_19_24000_A_Primary-571x379.jpg',
    price: '31.900.000 VND',
    dataColors: ['#d10000', '#d10000'],
    ID: 'u9tkw',
    type: 'touring',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: 'MT-201',
    imgSrc: '../../../database/images/productImgs/Trek-MT-201-571x379.jpg',
    price: '5.999.000 VND',
    dataColors: ['#000000', '#a3a3a3'],
    ID: 'dtfkr',
    type: 'kids',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  },
  {
    name: '820 WSD',
    imgSrc: '../../../database/images/productImgs/Trek_820_Women_BLUBLK-571x379.jpg',
    price: '9.500.000 VND',
    dataColors: ['#03c8ee', '#000000'],
    ID: 'l6f1z',
    type: 'mountain',
    dateCreate: '2023-01-01T00:00:00.000Z',
    dateUpdate: '2023-01-01T00:00:00.000Z'
  }
];
const accountData = JSON.parse(localStorage.getItem('accounts'));
function generateRandomId() {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var id = '';

  for (var i = 0; i < 10; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}
function getIdUser() {
  return userLocal.id;
}

let check = true;
const totalPriceDisplay = document.getElementById('totalPriceId');
let totalPrice = 0;

const menu = document.getElementById('menu');
const toast = document.getElementById('toast');

if (userLocal.cart.length <= 0) {
  footer.style.display = 'none';
  menu.style.display = 'none';
  toast.style.display = 'flex';
} else {
  footer.style.display = 'flex';
  menu.style.display = 'table';
  toast.display = 'none';
}

// function returnPathImg(element) {
//   let pathImg = element.imgSrc;
//   if (pathImg.startsWith('database')) {
//     pathImg = '../../../' + pathImg;
//   }
//   return pathImg;
// }

function displayProductItems() {
  for (let i = 0; i < dataCart.length; i++) {
    for (let j = 0; j < userLocal.cart.length; j++) {
      if (dataCart[i].ID === userLocal.cart[j].id && check) {
        const cartItem = document.createElement('tr');
        console.log(dataCart[i].imgSrc)
        cartItem.classList.add('info-item-container');
        cartItem.innerHTML = `
                    <td class="img"><img src="${dataCart[i].imgSrc}" alt="${dataCart[i].name}"></td>
                    <td class="name">
                       
                        ${dataCart[i].name}
                    </td>
                    <td class="price">${dataCart[i].price}</td>
                    <td class="quantity">
                        <div class="quantity-item">
                            <button class="decrement" id="decrement">-</button>
                            <span id="quantity">${userLocal.cart[j].quantity}</span>
                            <button class="increment" id="increment">+</button>
                        </div>
                    </td>
                    <td >
                        <div class="checkbox">
                            <p class="id">${dataCart[i].ID}</p>
                            <label class="checkbox-container">
                                <input type="checkbox" id="checkboxId">
                                <span class="checkmark"></span>
                            </label>

                        </div>
                    </td>
                `;

        // const priceString = data[i].price;
        // const priceNumber = parseFloat(priceString.replace(/\D/g, ''));
        // totalPrice = totalPrice + priceNumber * parseInt(userLocal.cart[j].quantity);

        cartInfo.appendChild(cartItem);
      }
    }
  }
  // const priceString = totalPrice.toLocaleString();
  // totalPriceDisplay.innerText = priceString + ' ' + 'VND';
}

displayProductItems();

const infoContainer = document.querySelectorAll('.info-item-container');
let currentSelectProduct = [];
let updateESelect = [];
const dialog = document.getElementById('dialog');
const container = document.getElementById('container');

const totalPricePay = document.getElementById('totalPricePay');
const confirmButton = document.getElementById('confirmButton');
const database = [];

for (let i = 0; i < userLocal.cart.length; i++) {
  for (let j = 0; j < dataCart.length; j++) {
    if (userLocal.cart[i].id === dataCart[j].ID) {
      database.push(dataCart[j]);
    }
  }
}
let chekcbuy = true;
console.log(userLocal.cart);
let checked = false;
var currentPrice = 0;


infoContainer.forEach((element, index) => {
  const decrement = element.querySelector('#decrement');
  const increment = element.querySelector('#increment');
  const quantityDisplay = element.querySelector('#quantity');
  const checkbox = element.querySelector('#checkboxId');
  const id = element.querySelector('.id');
  console.log(id);
  const buyId = document.getElementById('buy');
  const price = element.querySelector('.price');

  const selectAllButton = document.getElementById('selectAllButton');

  const deleteId = document.getElementById('delete');
  decrement.addEventListener('click', () => {
    if (parseInt(userLocal.cart[index].quantity) > 1 && userLocal.cart[index].quantity !== null) {
      userLocal.cart[index].quantity = parseInt(userLocal.cart[index].quantity) - 1;
      quantityDisplay.innerText = userLocal.cart[index].quantity;
    }
    if (parseInt(userLocal.cart[index].quantity) <= 1) {
      // userLocal.cart.splice(index, 1);
      // cartInfo.removeChild(element);
      // localStorage.setItem('User', JSON.stringify(userLocal));
      return;
    }
    console.log(index);
    const priceFloat = parseFloat(price.textContent.replace(/\D/g, ''));
    const totalPrice = parseFloat(totalPriceDisplay.textContent.replace(/\D/g, ''));

    console.log(userLocal.cart[index].quantity);
    const currentPrice = totalPrice - priceFloat;
    totalPriceDisplay.innerText = currentPrice.toLocaleString() + ' ' + 'VND';

    localStorage.setItem('User', JSON.stringify(userLocal));
    // alert(id.textContent);
  });

  increment.addEventListener('click', () => {
    userLocal.cart[index].quantity = parseInt(userLocal.cart[index].quantity) + 1;
    quantityDisplay.innerText = userLocal.cart[index].quantity;
    console.log(userLocal.cart[index].quantity);
    localStorage.setItem('User', JSON.stringify(userLocal));
    const priceFloat = parseFloat(price.textContent.replace(/\D/g, ''));
    const totalPrice = parseFloat(totalPriceDisplay.textContent.replace(/\D/g, ''));

    const currentPrice = totalPrice + priceFloat;
    totalPriceDisplay.innerText = currentPrice.toLocaleString() + ' ' + 'VND';

    localStorage.setItem('User', JSON.stringify(userLocal));
    // alert(id.textContent);
  });

  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      currentSelectProduct.push(id.textContent);
      updateESelect.push(userLocal.cart[index]);
      checked = true;
      const priceFloat = parseFloat(price.textContent.replace(/\D/g, ''));
      currentPrice += priceFloat * parseInt(quantityDisplay.textContent);
      console.log(currentPrice);
      totalPriceDisplay.innerText = '0';
      deleteId.style.backgroundColor = '#313131';
      buyId.style.backgroundColor = '#313131';
      deleteId.style.cursor = 'pointer';
      buyId.style.cursor = 'pointer';

      // localStorage.setItem('updateSelect', JSON.stringify(updateESelect));
    } else {
      for (let i = 0; i < currentSelectProduct.length; i++) {
        if (currentSelectProduct[i] === id.textContent) {
          currentSelectProduct.splice(i, 1);
        }
      }
      checked = false;
      totalPriceDisplay.innerText = '0';
      const priceFloat = parseFloat(price.textContent.replace(/\D/g, ''));
      if (currentPrice > 0) {
        currentPrice -= priceFloat * parseInt(quantityDisplay.textContent);
      }
      console.log(currentPrice);
      buyId.style.backgroundColor = '#b5b5b5';
      deleteId.style.backgroundColor = '#b5b5b5';
      buyId.style.cursor = 'not-allowed';
      deleteId.style.cursor = 'not-allowed';
    }
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var totalPrice = 0;
    totalPrice += currentPrice;

    totalPriceDisplay.innerText = totalPrice.toLocaleString() + ' ' + 'VND';

    const checkboxStates = Array.from(checkboxes).map(checkbox => checkbox.checked);

    const allFalse = checkboxStates.every(state => !state);

    if (allFalse) {
      deleteId.style.backgroundColor = '#B5B5B5';
    } else {
      deleteId.style.backgroundColor = '#313131';
    }
  });

  let checkSelect = true;
  let checkBuyAll = false;

  selectAllButton.addEventListener('click', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    updateESelect = userLocal.cart;
    if (checkSelect) {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = true;
      });
      checked = true;

      deleteId.style.backgroundColor = '#313131';
      buyId.style.backgroundColor = '#313131';
      deleteId.style.cursor = 'pointer';
      buyId.style.cursor = 'pointer';

      selectAllButton.innerText = 'Bỏ chọn tất cả';
      checkSelect = false;
      for (let i = 0; i < userLocal.cart.length; i++) {
        currentSelectProduct.push(userLocal.cart[i].id);
      }
    } else {
      checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
      });
      checked = false;

      deleteId.style.backgroundColor = '#B5B5B5';
      buyId.style.backgroundColor = '#B5B5B5';
      deleteId.style.cursor = 'not-allowed';
      buyId.style.cursor = 'not-allowed';

      selectAllButton.innerText = 'Chọn tất cả';

      checkSelect = true;
      currentSelectProduct = [];
    }
    console.log(currentSelectProduct);
    checkBuyAll = true;
  });

  deleteId.addEventListener('click', e => {
    e.preventDefault();

    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');

    overlay.classList.add('active');
    modal.classList.add('active');

    const submitDeleteBtn = document.querySelector('.modal__footer--delete');
    const exitDeleteBtn = document.querySelector('.modal__footer--exit');

    submitDeleteBtn.addEventListener('click', e => {
      if (checked) {
        const productsToDelete = userLocal.cart.filter(product => currentSelectProduct.includes(product.id));

        for (const productToDelete of productsToDelete) {
          const index = userLocal.cart.indexOf(productToDelete);
          userLocal.cart.splice(index, 1);
        }

        accountData.forEach(account => {
          if (account.id === userLocal.id) {
            account.cart = userLocal.cart;
          }
        });

        localStorage.setItem('accounts', JSON.stringify(accountData));
        localStorage.setItem('User', JSON.stringify(userLocal));

        location.reload();
        displayProductItems();
      }
    });

    // Ẩn đi modal và overlay ==========================================
    exitDeleteBtn.addEventListener('click', e => {
      overlay.classList.remove('active');
      modal.classList.remove('active');
    });

    overlay.addEventListener('click', e => {
      overlay.classList.remove('active');
      modal.classList.remove('active');
    });
  });

  buyId.addEventListener('click', () => {
    if (checked) {
      const overlay = document.querySelector('.overlay');
      overlay.classList.add('active__overlay');

      overlay.addEventListener('click', e => {
        overlay.classList.remove('active__overlay');
        dialog.style.display = 'none';
      });

      var totalPrice = 0;
      var priceString;
      var priceNumber;
      for (let i = 0; i < database.length; i++) {
        for (let j = 0; j < updateESelect.length; j++) {
          if (database[i].ID === updateESelect[j].id) {
            console.log(database[i].price);
            priceString = database[i].price;
            priceNumber = parseFloat(priceString.replace(/\D/g, ''));
            totalPrice = totalPrice + priceNumber * parseInt(updateESelect[j].quantity);
          }
        }
      }
      console.log(updateESelect);
      const idContainer = document.createElement('p');
      idContainer.classList.add('idContainer');
      idContainer.innerText = id.textContent;
      dialog.style.display = 'flex';
      // container.style.display = 'block';
      container.appendChild(idContainer);

      totalPrice = totalPrice.toLocaleString();
      totalPricePay.innerText = 'Tổng số tiền' + ':' + ' ' + totalPrice + 'VND';
    }
  });
  confirmButton.addEventListener('click', function () {
    const customerName = document.getElementById('customername');
    const customerAddress = document.getElementById('customeraddress');
    const customerNameMessage = document.getElementById('customerNameMessage');
    const customerAddressMessage = document.getElementById('customerAddressMessage');
    if (customerName.value === '') {
      customerNameMessage.innerHTML = '*Tên không được để trống';
    } else {
      customerNameMessage.innerHTML = '';
    }

    if (customerAddress.value === '') {
      customerAddressMessage.innerHTML = '*Địa chỉ không được để trống';
    } else {
      customerAddressMessage.innerHTML = '';
    }

    if (customerName.value === '' || customerAddress.value === '') {
      return;
    }
    if (chekcbuy && customerName.value !== '' && customerAddress.value !== '') {
      var currentTime = new Date();

      for (let index = 0; index < updateESelect.length; index++) {
        const element = updateESelect[index];
        const processing = {
          idOrder: generateRandomId(),
          dateCreate: currentTime,
          dateCancel: '',
          product: [
            {
              id: element.id,
              quantity: element.quantity,
              processed: false
            }
          ]
        };
        for (let i = 0; i < DUMMY_API.length; i++) {
          if (DUMMY_API[i].idUser === getIdUser()) {
            DUMMY_API[i].cart.push(processing);
          }
        }
      }
      console.log(userLocal.cart);
      console.log(updateESelect);
      if (checkBuyAll) {
        userLocal.cart = [];
        checkBuyAll = false;
      }
      for (let k = 0; k < updateESelect.length; k++) {
        for (let j = 0; j < userLocal.cart.length; j++) {
          if (userLocal.cart[j].id === updateESelect[k].id) {
            userLocal.cart.splice(j, 1);
          }
        }
      }
      for (let i = 0; i < accountData.length; i++) {
        if (accountData[i].id === userLocal.id) {
          accountData[i].cart = userLocal.cart;
        }
      }

      localStorage.setItem('User', JSON.stringify(userLocal));
      localStorage.setItem('accounts', JSON.stringify(accountData));
      console.log(DUMMY_API);
      localStorage.setItem('DUMMY_API', JSON.stringify(DUMMY_API));

      chekcbuy = false;
      return;
    }
    location.reload();
  });
});
window.addEventListener('beforeunload', function (event) {
  userLocal.processing = [...new Set(userLocal.processing)];
  localStorage.setItem('User', JSON.stringify(userLocal));
});

const input = document.getElementById('input');

const searchValue = document.getElementById('searchValue');
const submitBtn = document.getElementById('submit-btn');
const inputSearch = JSON.parse(localStorage.getItem('inputSearch'));
// input.addEventListener('input', event => {
//   event.preventDefault();
//   if (input.value.length < 0 || input.value === '') {
//     searchValue.style.display = 'none';
//   } else {
//     searchValue.style.display = 'block';
//     const inputValue = input.value.toLowerCase();

//     inputSearch[0] = inputValue;
//     localStorage.setItem('inputSearch', JSON.stringify(inputSearch));
//     const matchingNames = database.filter(e => e.name.toLowerCase().includes(inputValue));
//     if (event.key === 'enter') {
//       alert('tên sản phẩm');
//     }
//     if (inputValue === '') {
//       searchValue.innerHTML = '';
//       searchValue.style.border = 'none';
//       return;
//     }
//     searchValue.innerHTML = '';
//     matchingNames.forEach(e => {
//       const searchInfoValue = document.createElement('div');
//       searchInfoValue.classList.add('searchItem');
//       searchInfoValue.innerHTML = `
//                  <img src="/${e.imgSrc}">
//                 <p>${e.name}</p>
//             `;
//       searchValue.appendChild(searchInfoValue);
//       searchValue.style.border = '1px solid gray';
//     });
//   }
// });

const table = document.getElementById('order_status_table');
const allTh = table.querySelectorAll('th');
allTh.forEach((e, index) => {
  e.addEventListener('click', () => {
    if (index == 0) {
      location.reload();
    }
    if (index == 1) {
      console.log('panding');
      cartInfo.innerHTML = '';
      handlePanding();
    }
    if (index == 2) {
      console.log('onDeliverery');
      cartInfo.innerHTML = '';
      handleOnDelivery();
    }
    allTh.forEach(e => (e.style.backgroundColor = '#eee'));
    e.style.backgroundColor = '#45a049';
    e.style.color = '#333';
  });
});

function handleOnDelivery() {
  const cartInfo = document.getElementById('cart-info');
  var tmp = 0;
  for (let i = 0; i < DUMMY_API.length; i++) {
    if (DUMMY_API[i].idUser === getIdUser()) {
      tmp = i;
    }
  }
  let check = false;
  for (let i = 0; i < dataCart.length; i++) {
    for (let j = 0; j < DUMMY_API[tmp].cart.length; j++) {
      for (let k = 0; k < DUMMY_API[tmp].cart[j].product.length; k++) {
        if (DUMMY_API[tmp].cart[j].product[k].processed === true) {
          check = true;
        }
      }
    }
  }
  if (check) {
    footer.style.display = 'none';
    menu.style.display = 'table';
    toast.style.display = 'none';
  } else {
    footer.style.display = 'none';
    menu.style.display = 'none';
    toast.style.display = 'flex';
  }
  for (let i = 0; i < dataCart.length; i++) {
    for (let j = 0; j < DUMMY_API[tmp].cart.length; j++) {
      for (let k = 0; k < DUMMY_API[tmp].cart[j].product.length; k++) {
        if (dataCart[i].ID === DUMMY_API[tmp].cart[j].product[k].id && check) {
          const cartItem = document.createElement('tr');

          if (DUMMY_API[tmp].cart[j].product[k].processed === true) {
            cartItem.classList.add('info-item-container');

            cartItem.innerHTML = `
                          <td class="img"><img src="${dataCart[i].imgSrc}" alt="${dataCart[i].name}"></td>
                          <td class="name">
                              ${dataCart[i].name}
                          </td>
                          <td class="price">${dataCart[i].price}</td>
                          <td class="quantity">
                              <div class="quantity-item">
                                  
                                  <span id="quantity">${DUMMY_API[tmp].cart[j].product[k].quantity}</span>
                                 
                              </div>
                          </td>
                          <td >
                              <div class="checkbox">
                                  <p class="id">${dataCart[i].ID}</p>
                                  
      
                              </div>
                          </td>
                      `;

            cartInfo.appendChild(cartItem);
            console.log(cartInfo);
          }
        }
      }
    }
  }
}

function handlePanding() {
  var tmp = 0;
  for (let i = 0; i < DUMMY_API.length; i++) {
    if (DUMMY_API[i].idUser === getIdUser()) {
      tmp = i;
      console.log(i);
    }
  }
  const cartInfo = document.getElementById('cart-info');
  // console.log(tmp)
  if (DUMMY_API[tmp].cart.length > 0) {
    footer.style.display = 'none';
    menu.style.display = 'table';
    toast.style.display = 'none';
  } else {
    footer.style.display = 'none';
    menu.style.display = 'none';
    toast.style.display = 'flex';
  }
  for (let i = 0; i < dataCart.length; i++) {
    for (let j = 0; j < DUMMY_API[tmp].cart.length; j++) {
      for (let k = 0; k < DUMMY_API[tmp].cart[j].product.length; k++) {
        if (dataCart[i].ID === DUMMY_API[tmp].cart[j].product[k].id && check) {
          const cartItem = document.createElement('tr');

          if (DUMMY_API[tmp].cart[j].product[k].processed === false) {
            cartItem.classList.add('info-item-container');

            cartItem.innerHTML = `
                          <td class="img"><img src="${dataCart[i].imgSrc}" alt="${dataCart[i].name}"></td>
                          <td class="name">
                             
                              ${dataCart[i].name}
                          </td>
                          <td class="price">${dataCart[i].price}</td>
                          <td class="quantity">
                              <div class="quantity-item">
                                  
                                  <span id="quantity">${DUMMY_API[tmp].cart[j].product[k].quantity}</span>
                                 
                              </div>
                          </td>
                          <td >
                              <div class="checkbox">
                                  <p class="id">${dataCart[i].ID}</p>
                                  <label class="checkbox-container">
                                      <button id="cancelPanding"> Hủy đơn </button>
                                  </label>
      
                              </div>
                          </td>
                      `;

            cartInfo.appendChild(cartItem);
            console.log(cartInfo);
            const cancelOrder = cartItem.querySelector('#cancelPanding');
            console.log(cancelOrder);
            cancelOrder.addEventListener('click', () => {
              DUMMY_API[tmp].cart.splice(j, 1);
              localStorage.setItem('DUMMY_API', JSON.stringify(DUMMY_API));
              alert('Đã hủy đơn thành công!');
              location.reload();
            });
          }
        }
      }
    }
  }
}

// Ẩn đi modal xác nhận thanh toán khi click vào bên ngoài (overlay)
const dialogCloseBtn = document.querySelector('.dialog-close');
const overlay = document.querySelector('.overlay');
dialogCloseBtn.addEventListener('click', e => {
  dialog.style.display = 'none';
  overlay.classList.remove('active__overlay');
});

// XỬ LÝ THÊM ==================================================
// Cập nhật tên cho User
const headerTop = document.querySelector('.header__top');
const user = JSON.parse(localStorage.getItem('User'));
if (user) {
  const nameClient = headerTop.querySelectorAll('p')[1];
  nameClient.textContent = user.name;
  headerTop.style.display = 'block';
} else {
  headerTop.querySelector('.header__top-item--left').style.display = 'none';
}

// Kiểm người dùng bấm vào MOUNTAIN - ROAD - TOURING -KIDS
// Thì setLocal cho bên Sản phẩm lấy và lọc
const typeProductsNav = document.querySelectorAll('.header__bottom--list ul li');

typeProductsNav.forEach(item =>
  item.addEventListener('click', e => {
    const firstString = item.textContent.trim().charAt(0).toUpperCase(); //Cắt chữ đầu viết hoa
    const secondString = item.textContent.trim().substring(1).toLocaleLowerCase(); //Vế còn lại viết thường
    const type = firstString + secondString;

    // Khi có sự kiện load trang thì set data
    localStorage.setItem('typeToFilter', JSON.stringify(type));
  })
);

const userCartBtn = document.querySelector('.header__bottom--extention-user');
const userList = document.querySelector('.header__bottom--user__list');

userCartBtn.addEventListener('mouseover', e => {
  userList.style.display = 'block';
});

userCartBtn.addEventListener('mouseout', e => {
  userList.style.display = 'none';
});

// =========================== start: LOGOUT LOGIC ===========================
const logoutBtn = document.querySelector('.logout');

const logoutHandler = () => {
  window.location.href = '../../../../index.html';
  localStorage.removeItem('User');
  alert('Đăng xuất thành công!');
};

logoutBtn.addEventListener('click', logoutHandler);
// =========================== end: LOGOUT LOGIC ===========================

// =========================== start: GO TO ADMIN PAGE ===========================
const manageBtn = document.querySelector('.adminManager');

manageBtn.addEventListener('click', e => {
  window.location.href = '/web1/html/page/admin/Home.html';
});
// =========================== end: GO TO ADMIN PAGE ===========================

// Thêm sự kiện click vào tài khoản trên hideMenu
const userLowDeviceBtn = document.querySelector('#userLowDeviceBtn');

// Kiểm tra quyền truy cập User nếu là admin thì hiển thị btn Quản lý
if (userLogin.isAdmin) {
  document.querySelectorAll('.adminManager__item').forEach(item => (item.style.display = 'block'));
}

// Cập nhật tên người dùng hiện tại
const userNameOnLowDevice = document.querySelector('.hide__menu--list__extention .header__bottom--extention-user span');
userNameOnLowDevice.innerHTML = userLogin.name;
const userListOnLowDevice = document.querySelector('.hide__menu--user__list');

// FOR ACOUNT BTN ON HIDE MENU
userLowDeviceBtn.classList.add('active-down');
userLowDeviceBtn.addEventListener('click', e => {
  userListOnLowDevice.classList.toggle('active__onHideMenu');
  userLowDeviceBtn.classList.toggle('active-down');
  userLowDeviceBtn.classList.toggle('active-up');
});

const manageLowDeviceBtn = document.querySelector('.hide__menu--list__type.adminManager__item');

manageLowDeviceBtn.addEventListener('click', e => {
  window.location.href = '/web1/html/page/admin/Home.html';
});

const logoutLowDeviceBtn = document.querySelector('.hide__menu--list__type.logout__item');
logoutLowDeviceBtn.addEventListener('click', logoutHandler);

// Kiểm tra trên thiết bị nhỏ hơn
const typeProductsSidebarMenu = document.querySelectorAll('.hide__menu--list__type');
typeProductsSidebarMenu.forEach(item =>
  item.addEventListener('click', e => {
    const firstString = item.textContent.trim().charAt(0).toUpperCase(); //Cắt chữ đầu viết hoa
    const secondString = item.textContent.trim().substring(1).toLocaleLowerCase(); //Vế còn lại viết thường
    const type = firstString + secondString;
    // Khi có sự kiện load trang thì set data
    localStorage.setItem('typeToFilter', JSON.stringify(type));
  })
);
