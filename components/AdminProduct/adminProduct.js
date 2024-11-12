let dataAdminProduct = JSON.parse(localStorage.getItem('DUMMY_PRODUCTS'));
// let dataAdminProduct = [
  // {
  //   name: 'Procaliber 9.7 [2024]',
  //   imgSrc: '../../../database/images/productImgs/Procaliber97_24_WHT_Primary-571x379.jpg',
  //   price: '105.000.000 VND',
  //   dataColors: ['#ffffff', '#000000'],
  //   ID: 'fwjog',
  //   type: 'mountain',
  //   dateCreate: '2023-01-01T00:00:00.000Z',
  //   dateUpdate: '2023-01-01T00:00:00.000Z'
  // },
//   {
//     name: 'Fuel EX 5 Gen 6 [2023]',
//     imgSrc: '../../../database/images/productImgs/FueL_EX5-2023_gen6_Hero-571x379.jpg',
//     price: '65.000.000 VND',
//     dataColors: ['#303030', '#000000'],
//     ID: '0vptf',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Domane AL 4 Gen 3',
//     imgSrc: '../../../database/images/productImgs/Domane_AL4_Disc_23_BLK-571x379.jpg',
//     price: '39.900.000 VND',
//     dataColors: ['#383838', '#000000'],
//     ID: '1v6at',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Checkpoint ALR 4',
//     imgSrc: '../../../database/images/productImgs/CheckpointALR5_24_GRN_Hero-571x379.jpg',
//     price: '49.900.000 VND',
//     dataColors: ['#81d742', '#000000'],
//     ID: 'z6dnl',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Domane SL 6 [2023] Gen 4',
//     imgSrc: '../../../database/images/productImgs/Domane-SL-6-23-BLK_Hero-571x379.jpg',
//     price: '110.000.000 VND',
//     dataColors: ['#000000', '#474747'],
//     ID: '26yno',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Émonda ALR 5',
//     imgSrc: '../../../database/images/productImgs/EmondaALR-_5_Hero-571x379.jpg',
//     price: '55.000.000 VND',
//     dataColors: ['#95c1d9', '#eb867d'],
//     ID: 'nf75f',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Supercaliber SLR 9.9 X0 AXS Gen 2',
//     imgSrc: '../../../database/images/productImgs/SupercaliberSLR_99_X0-AXS_RED_Primary-571x379.jpg',
//     price: '215.000.000 VND',
//     dataColors: ['#681d18', '#000000'],
//     ID: '8adfs',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Supercaliber SL 9.6 Gen 2',
//     imgSrc: '../../../database/images/productImgs/Supercaliber96_23_BLU_Primary-571x379.jpg',
//     price: '110.000.000 VND',
//     dataColors: ['#1e73be', '#000000'],
//     ID: 'sh0u0',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Roscoe 6',
//     imgSrc: '../../../database/images/productImgs/Roscoe6_Hero-571x379.jpg',
//     price: '23.900.000 VND',
//     dataColors: ['#000000', '#dd3333'],
//     ID: '2ifcg',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Émonda SL 6 AXS',
//     imgSrc: '../../../database/images/productImgs/EmondaSL6AXS_23Primary.-571x379.jpg',
//     price: '129.000.000 VND',
//     dataColors: ['#021521', '#4f4f4f'],
//     ID: 'hp1pa',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Verve 2 Disc [2023]',
//     imgSrc: '../../../database/images/productImgs/Verve2_23_BLU_Hero-571x379.jpg',
//     price: '16.900.000 VND',
//     dataColors: ['#1e73be', '#b2b2b2'],
//     ID: 'd6fvi',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'FX 2 Disc  Stagger',
//     imgSrc: '../../../database/images/productImgs/FX2DiscStagger_22_35004_B_Primary-571x379.jpg',
//     price: '16.500.000 VND',
//     dataColors: ['#ed2700', '#000000'],
//     ID: '1t6ce',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Roscoe 24 [2023]',
//     imgSrc: '../../../database/images/productImgs/Roscoe24-571x379.jpg',
//     price: '18.000.000 VND',
//     dataColors: ['#000000', '#00d69d'],
//     ID: 'wbl5q',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Roscoe 20 [2023]',
//     imgSrc: '../../../database/images/productImgs/Roscoe20_Hero-571x379.jpg',
//     price: '19.000.000 VND',
//     dataColors: ['#000000', '#00d69d'],
//     ID: '09p9s',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Precaliber 24 8SP Boy’s [2023]',
//     imgSrc: '../../../database/images/productImgs/Precaliber248speed_23_36965_A_Primary-571x379.jpg',
//     price: '8.500.000 VND',
//     dataColors: ['#757575', '#dd9933'],
//     ID: '8m88h',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Checkpoint ALR 5',
//     imgSrc: '../../../database/images/productImgs/CheckpointALR5_22_35172_B_Primary-571x379.jpg',
//     price: '65.000.000 VND',
//     dataColors: ['#0b1b49', '#b7382a'],
//     ID: '1x2bj',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Domane SL 7 eTap [2023] Gen 4',
//     imgSrc: '../../../database/images/productImgs/Domane-SL-6-eTap-23-Hero-571x379.jpg',
//     price: '179.000.000 VND',
//     dataColors: ['#ffffff', '#6b1e16'],
//     ID: 'amfrm',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Verve 1 Disc [2023]',
//     imgSrc: '../../../database/images/productImgs/Verve1_23_36811_A_Primary-571x379.jpg',
//     price: '13.500.000 VND',
//     dataColors: ['#000000', '#967801'],
//     ID: '5pmvq',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Verve 2 Disc Lowstep [2023]',
//     imgSrc: '../../../database/images/productImgs/Verve2DiscLowStep_23_GRN_Hero-571x379.jpg',
//     price: '16.900.000 VND',
//     dataColors: ['#40ceb2', '#003b42'],
//     ID: 'qcumb',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Verve 1 Disc Lowstep [2023]',
//     imgSrc: '../../../database/images/productImgs/Verve1DiscLowStep_23_Red_Hero-571x379.jpg',
//     price: '13.500.000 VND',
//     dataColors: ['#dd3333', '#353535'],
//     ID: 'limev',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Precaliber 16 [2023]',
//     imgSrc: '../../../database/images/productImgs/PreCaliber16_2023_GRN-571x379.jpg',
//     price: '6.500.000 VND',
//     dataColors: ['#d5f44b', '#004863'],
//     ID: '7rwfc',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Domane AL 3 Disc 2023',
//     imgSrc: '../../../database/images/productImgs/Domane_AL3_Disc_23.-571x379.jpg',
//     price: '29.900.000 VND',
//     dataColors: ['#606060', '#bf2b2b'],
//     ID: 'hribg',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Dual Sport 3 [2023] Gen 5',
//     imgSrc: '../../../database/images/productImgs/DS3_2023_GRN-571x379.jpg',
//     price: '20.900.000 VND',
//     dataColors: ['#173a01', '#84561a'],
//     ID: 'm9q49',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Dual Sport 2 [2023] Gen 5',
//     imgSrc: '../../../database/images/productImgs/DS2_2023_BLU-571x379.jpg',
//     price: '17.900.000 VND',
//     dataColors: ['#4f4f4f', '#000000'],
//     ID: 'sfar9',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Dual Sport 1 [2023] Gen 5',
//     imgSrc: '../../../database/images/productImgs/DS1_2023_GRY-571x379.jpg',
//     price: '14.900.000 VND',
//     dataColors: ['#4f4f4f', '#000000'],
//     ID: 'rtuso',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Domane SL 5 [2023] Gen 4',
//     imgSrc: '../../../database/images/productImgs/Domane_SL5_23_Gen-571x379.jpg',
//     price: '89.000.000 VND',
//     dataColors: ['#161616', '#dd3333'],
//     ID: 'dimsi',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Top Fuel 8',
//     imgSrc: '../../../database/images/productImgs/TOP-FUEL-8_Hero-571x379.jpg',
//     price: '85.000.000 VND',
//     dataColors: ['#00285e', '#00285e'],
//     ID: 'xq3ld',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Procaliber 9.8 [2022]',
//     imgSrc: '../../../database/images/productImgs/Procaliber98_22_Hero-571x379.jpg',
//     price: '130.000.000 VND',
//     dataColors: ['#6b0707', '#dd3333'],
//     ID: 'ninws',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Domane SL 6 eTap [2023] Gen 4',
//     imgSrc: '../../../database/images/productImgs/Domane-SL-6-eTap-23-Hero-571x379.jpg',
//     price: '125.000.000 VND',
//     dataColors: ['#9b231f', '#ffffff'],
//     ID: '0htwb',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Madone SL 7 eTap [2023]',
//     imgSrc: '../../../database/images/productImgs/Madone-SL-7-eTap_Primary-571x379.jpg',
//     price: '185.000.000 VND',
//     dataColors: ['#4d6087', '#000000'],
//     ID: 'tvmsp',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Madone SLR 7  Gen 6 [2023]',
//     imgSrc: '../../../database/images/productImgs/MadoneSLR7Gen6_23_BLK_Primary-571x379.jpg',
//     price: '199.000.000 VND',
//     dataColors: ['#000000', '#000000'],
//     ID: '0ko1l',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Marlin 8  2023',
//     imgSrc: '../../../database/images/productImgs/Marlin8_23_GREY_Primary-571x379.jpg',
//     price: '29.900.000 VND',
//     dataColors: ['#4c4c4c', '#000000'],
//     ID: 'dpf84',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Marlin 7 2023',
//     imgSrc: '../../../database/images/productImgs/Marlin7_23_36967_B_Primary-571x379.jpg',
//     price: '21.900.000 VND',
//     dataColors: ['#18a4ac', '#000000'],
//     ID: 'awpt0',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Marlin 6 2023',
//     imgSrc: '../../../database/images/productImgs/Marlin6_23_BLU-571x379.jpg',
//     price: '17.900.000 VND',
//     dataColors: ['#212857', '#303be0'],
//     ID: 'mkddt',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Supercaliber 9.9 AXS',
//     imgSrc: '../../../database/images/productImgs/Supercaliber99AXS_20_28896_A_Primary-571x379.jpg',
//     price: '270.000.000 VND',
//     dataColors: ['#2d2d2d', '#bcb5ad'],
//     ID: 'sif5y',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'X-Caliber 9 [2022-2023]',
//     imgSrc: '../../../database/images/productImgs/XCaliber9_22_35112_A_Primary-571x379.jpg',
//     price: '41.900.000 VND',
//     dataColors: ['#1e73be', '#999999'],
//     ID: 'lki6k',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Top Fuel 5',
//     imgSrc: '../../../database/images/productImgs/TopFuel5_23-571x379.jpg',
//     price: '79.000.000 VND',
//     dataColors: ['#dd9933', '#262626'],
//     ID: 'leqn3',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Fuel EX 5  2022',
//     imgSrc: '../../../database/images/productImgs/FueL_EX5-2022-571x379.jpg',
//     price: '75.000.000 VND',
//     dataColors: ['#000000', '#565656'],
//     ID: 'i5b4e',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Slash 7 2022',
//     imgSrc: '../../../database/images/productImgs/Slash7DeoreXT_22_Primary-571x379.jpg',
//     price: '89.000.000 VND',
//     dataColors: ['#083802', '#b54029'],
//     ID: '8f3zz',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Madone SLR 7 eTap [2022]',
//     imgSrc: '../../../database/images/productImgs/MadoneSLR7eTap_22_35744_F_Primary-571x379.jpg',
//     price: '199.000.000 VND',
//     dataColors: ['#ff3a3a', '#f2ff00'],
//     ID: 'n9sjp',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Speed Concept SLR 6 eTap',
//     imgSrc: '../../../database/images/productImgs/SpeedConceptSLR6eTap_22_35754_D_Primary-571x379.jpg',
//     price: '210.000.000 VND',
//     dataColors: ['#ff0000', '#000000'],
//     ID: '8zxeb',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Procaliber 9.7 [2022]',
//     imgSrc: '../../../database/images/productImgs/Procaliber97_22_35114_B_Primary-571x379.jpg',
//     price: '99.000.000 VND',
//     dataColors: ['#0092e8', '#00127c'],
//     ID: 'x6wjz',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Speed Concept SLR 7',
//     imgSrc: '../../../database/images/productImgs/Speed-Concept-SLR-7_2023-571x379.jpg',
//     price: '225.000.000 VND',
//     dataColors: ['#000000', '#232323'],
//     ID: 'tncod',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'FX 3 Disc',
//     imgSrc: '../../../database/images/productImgs/FX3Disc_22_35021_B_Primary-1-571x379.jpg',
//     price: '23.900.000 VND',
//     dataColors: ['#7c0000', '#ff0800'],
//     ID: 'poewt',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Supercaliber 9.7',
//     imgSrc: '../../../database/images/productImgs/Supercaliber97_22_35149_A_Primary-571x379.jpg',
//     price: '130.000.000 VND',
//     dataColors: ['#383838', '#cc0000'],
//     ID: 'clmxg',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Madone SL 7 eTap [2022]',
//     imgSrc: '../../../database/images/productImgs/MadoneSL7eTap_22_35180_A_Primary-571x379.jpg',
//     price: '165.000.000 VND',
//     dataColors: ['#080054', '#00b7ef'],
//     ID: 'wb11x',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Émonda SL 6 [2022]',
//     imgSrc: '../../../database/images/productImgs/EmondaSL6Disc_21_32561_A_Primary-571x379.jpg',
//     price: '85.000.000 VND',
//     dataColors: ['#464f3d', '#464f3d'],
//     ID: 'dpmvu',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Checkpoint SL 5',
//     imgSrc: '../../../database/images/productImgs/CheckpointSL5_22_35169_B_Primary-571x379.jpg',
//     price: '89.000.000 VND',
//     dataColors: ['#d10000', '#d10000'],
//     ID: 'wl5cm',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Domane SL 5 [2023] Gen 3',
//     imgSrc: '../../../database/images/productImgs/DomaneSL5_22_35298_A_Primary-571x379.jpg',
//     price: '89.000.000 VND',
//     dataColors: ['#383838', '#895700'],
//     ID: 'kb0vp',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Procaliber 9.8 [2021]',
//     imgSrc: '../../../database/images/productImgs/Procaliber98_21_33269_A_Primary-571x379.jpg',
//     price: '125.000.000 VND',
//     dataColors: ['#ff7f00', '#000000'],
//     ID: 'sjcy8',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Madone SL 6 Disc [2022]',
//     imgSrc: '../../../database/images/productImgs/MadoneSL6_22_35177_B_Primary-571x379.jpg',
//     price: '120.000.000 VND',
//     dataColors: ['#f20000', '#f20000'],
//     ID: '3mzug',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'X-Caliber 8 [2022-2023]',
//     imgSrc: '../../../database/images/productImgs/XCaliber8_23_Primary_BLU-571x376.jpg',
//     price: '30.900.000 VND',
//     dataColors: ['#240e87', '#ffffff'],
//     ID: '4nudz',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Procaliber 9.6 [2022-2023]',
//     imgSrc: '../../../database/images/productImgs/Procaliber96_22_35113_B_Primary-571x379.jpg',
//     price: '79.900.000 VND',
//     dataColors: ['#daf722', '#0a0a0a'],
//     ID: 'cwhow',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Supercaliber 9.6',
//     imgSrc: '../../../database/images/productImgs/Supercaliber96_22_35151_B_Primary-571x379.jpg',
//     price: '110.000.000 VND',
//     dataColors: ['#d10000', '#d10000'],
//     ID: 'i2m3e',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'FX 2 Disc',
//     imgSrc: '../../../database/images/productImgs/FX2Disc_22_35003_B_Primary-1-571x379.jpg',
//     price: '16.500.000 VND',
//     dataColors: ['#ed2700', '#ed2700'],
//     ID: 'y2zd6',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'FX1 Stagger Disc 2022',
//     imgSrc: '../../../database/images/productImgs/FX1StaggerDisc_22_35002_A_Primary-571x379.jpg',
//     price: '13.900.000 VND',
//     dataColors: ['#e5dcb3', '#2d1d00'],
//     ID: 'vxy9b',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'FX 1 Disc',
//     imgSrc: '../../../database/images/productImgs/FX1Disc_22_35001_B_Primary-1-571x379.jpg',
//     price: '13.900.000 VND',
//     dataColors: ['#d10000', '#d8b682'],
//     ID: 'bnrsc',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Marlin 6 2022',
//     imgSrc: '../../../database/images/productImgs/Marlin6_22_35066_A_Primary-571x379.jpg',
//     price: '16.500.000 VND',
//     dataColors: ['#424242', '#dd003b'],
//     ID: 'kj6e5',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Precaliber 24 8SP SUS Girl’s [2023]',
//     imgSrc: '../../../database/images/productImgs/Precaliber248speedSuspension_23_36846_D_Primary-571x379.jpg',
//     price: '9.500.000 VND',
//     dataColors: ['#00c7ce', '#8224e3'],
//     ID: 'd2g3f',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Domane AL 2 Disc',
//     imgSrc: '../../../database/images/productImgs/DomaneAL2Disc_21_33083_A_Primary-571x379.jpg',
//     price: '24.900.000 VND',
//     dataColors: ['#00439b', '#e5e5e5'],
//     ID: 'etw02',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Marlin 5',
//     imgSrc: '../../../database/images/productImgs/Marlin5_22_34587_C_Primary-571x379.jpg',
//     price: '12.900.000 VND',
//     dataColors: ['#00e5ed', '#d1f200'],
//     ID: '6e42j',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: '520 Grando',
//     imgSrc: '../../../database/images/productImgs/520Allroad_21_33474_A_Primary-571x379.jpg',
//     price: '35.900.000 VND',
//     dataColors: ['#0f335b', '#0f335b'],
//     ID: '6h1rz',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Dual Sport 4 2021',
//     imgSrc: '../../../database/images/productImgs/DualSport4_21_32898_A_Primary-571x379.jpg',
//     price: '27.500.000 VND',
//     dataColors: ['#2b2b2b', '#2b2b2b'],
//     ID: 'fu2j5',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'FX Sport 4',
//     imgSrc: '../../../database/images/productImgs/FXSport_Carbon_GREY-571x379.jpg',
//     price: '69.900.000 VND',
//     dataColors: ['#1e1e1e', '#c1c1c1'],
//     ID: 'x42kz',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Roscoe 7',
//     imgSrc: '../../../database/images/productImgs/Roscoe7_20_28499_A_Primary-571x379.jpeg',
//     price: '29.900.000 VND',
//     dataColors: ['#000000', '#4f3c00'],
//     ID: 'qbi80',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Top Fuel 9.9 X01',
//     imgSrc: '../../../database/images/productImgs/Trek-Top-Fuel-99-X01-Primary-571x379.jpg',
//     price: '179.000.000 VND',
//     dataColors: ['#000000', '#828282'],
//     ID: 'lij6h',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Émonda ALR 4 Disc',
//     imgSrc: '../../../database/images/productImgs/EmondaALR4Disc_21_33078_B_Primary-571x379.jpeg',
//     price: '39.900.000 VND',
//     dataColors: ['#dd3333', '#ffcb23'],
//     ID: '3k2fc',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Procaliber 9.5[2022-2023]',
//     imgSrc: '../../../database/images/productImgs/Procaliber95_21_33258_B_Primary-571x379.jpg',
//     price: '65.000.000 VND',
//     dataColors: ['#dd3333', '#ffd800'],
//     ID: 'jw27j',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Verve 1 Disc Lowstep',
//     imgSrc: '../../../database/images/productImgs/Verve1DiscLowStep_21_32736_B_Primary-571x379.jpeg',
//     price: '13.500.000 VND',
//     dataColors: ['#fff9ef', '#ffb656'],
//     ID: 'g2aee',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Émonda SL 7 eTap',
//     imgSrc: '../../../database/images/productImgs/EmondaSL7eTap_23_36978_A_Primary-571x379.jpg',
//     price: '159.000.000 VND',
//     dataColors: ['#212121', '#000000'],
//     ID: '0iaob',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Émonda SL 5 Disc',
//     imgSrc: '../../../database/images/productImgs/EmondaSL5Disc_BLUE_hero-571x379.jpg',
//     price: '79.000.000 VND',
//     dataColors: ['#00053d', '#0925c1'],
//     ID: 'ccvld',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Émonda SL 6 Pro',
//     imgSrc: '../../../database/images/productImgs/EmondaSL6DiscPro_22601812_Primary-571x379.jpg',
//     price: '100.000.000 VND',
//     dataColors: ['#313933', '#313933'],
//     ID: '7mnol',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Crockett 4 Disc',
//     imgSrc: '../../../database/images/productImgs/Crockett-4-Disc-BLK-Primary-571x379.jpg',
//     price: '45.000.000 VND',
//     dataColors: ['#000000', '#cccccc'],
//     ID: 'fe7rx',
//     type: 'road',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Marlin 4',
//     imgSrc: '../../../database/images/productImgs/Marlin4_23_BLU-571x379.jpg',
//     price: '11.500.000 VND',
//     dataColors: ['#1e73be', '#ffffff'],
//     ID: 'qekns',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Supercaliber 9.9 XX1',
//     imgSrc: '../../../database/images/productImgs/Supercaliber-99-XX1-CNBLK-2021-571x379.jpg',
//     price: '270.000.000 VND',
//     dataColors: ['#2d2d2d', '#bcb5ad'],
//     ID: '8zgya',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Supercaliber 9.8 GX',
//     imgSrc: '../../../database/images/productImgs/Supercaliber98GX_22_35147_B_Primary-571x379.jpg',
//     price: '150.000.000 VND',
//     dataColors: ['#2d2d2d', '#bcb5ad'],
//     ID: 'k5c7v',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Fuel EX 9.7',
//     imgSrc: '../../../database/images/productImgs/TK-FuelEX-97-20-BLU-571x379.jpg',
//     price: '109.000.000 VND',
//     dataColors: ['#04afed', '#12e2db'],
//     ID: 'k0ek3',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Precaliber 20 7SP Girl’s [2023]',
//     imgSrc: '../../../database/images/productImgs/Precaliber207speed_23_36268_D_Primary-571x379.jpg',
//     price: '7.900.000 VND',
//     dataColors: ['#42d6d6', '#4c00db'],
//     ID: 't3w90',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Precaliber 20 SS Boy’s [2023]',
//     imgSrc: '../../../database/images/productImgs/Precaliber20_23_36271_B_Primary-571x379.jpg',
//     price: '6.900.000 VND',
//     dataColors: ['#dd3333', '#081438'],
//     ID: 'i1dos',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Precaliber 24 8SP SUS Boy’s [2023]',
//     imgSrc: '../../../database/images/productImgs/Precaliber248speedSuspension_23_36846_A_Primary-571x379.jpg',
//     price: '9.500.000 VND',
//     dataColors: ['#424242', '#eeee22'],
//     ID: '70efo',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'Precaliber 20 7SP Boys’ [2023]',
//     imgSrc: '../../../database/images/productImgs/Precaliber207speed_23_36268_B_Primary-571x379.jpg',
//     price: '7.900.000 VND',
//     dataColors: ['#f75238', '#000544'],
//     ID: 'p8zz7',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: '520',
//     imgSrc: '../../../database/images/productImgs/520Disc_19_24000_A_Primary-571x379.jpg',
//     price: '31.900.000 VND',
//     dataColors: ['#d10000', '#d10000'],
//     ID: 'u9tkw',
//     type: 'touring',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: 'MT-201',
//     imgSrc: '../../../database/images/productImgs/Trek-MT-201-571x379.jpg',
//     price: '5.999.000 VND',
//     dataColors: ['#000000', '#a3a3a3'],
//     ID: 'dtfkr',
//     type: 'kids',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
//   {
//     name: '820 WSD',
//     imgSrc: '../../../database/images/productImgs/Trek_820_Women_BLUBLK-571x379.jpg',
//     price: '9.500.000 VND',
//     dataColors: ['#03c8ee', '#000000'],
//     ID: 'l6f1z',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   }
// ];
let filteredData = [...dataAdminProduct];

const closeFormClick = document.getElementById('close');

function setValuesInput(ImageUrl, Name, UpdateDate, CreationDate, Type) {
  const imageUrl = document.getElementById('imageUrl');
  const name = document.getElementById('name');
  const updateDate = document.getElementById('dateupdate');
  const creationDate = document.getElementById('datecreate');
  const type = document.getElementById('type');

  imageUrl.value = ImageUrl;
  name.value = Name;
  updateDate.value = UpdateDate;
  creationDate.value = CreationDate;
  type.value = Type;
}

function getValuesInput() {
  const imageUrl = document.getElementById('imageUrl');
  const name = document.getElementById('name');
  const updateDate = document.getElementById('dateupdate');
  const creationDate = document.getElementById('datecreate');

  const imageUrlvalues = imageUrl.value;
  const namValue = name.value;
  const updateDateValue = updateDate.value;
  const createValue = creationDate.value;

  return {
    imageUrlvalues,
    namValue,
    updateDateValue,
    createValue
  };
}

function copyNameProduct(name) {
  navigator.clipboard
    .writeText(name)
    .then(() => {
      alert('Text has been copied! ');
    })
    .catch(err => {
      console.log('Unable to copy text: ', err);
    });
}

function displayFormChange() {
  showModal();
  const modal = document.querySelector('.modal');
  modal.innerHTML = '';

  const html = `
    <div class="change-product-info">
      <i class="close fa-solid fa-xmark" id="close"></i>
      <h2>Thay đổi thông tin sản phẩm</h2>
      <p>* Định dạng ngày ô nhập là mm/dd/yyyy</p>
      <form>
        <p id="id" style="opacity: 0">2</p>

        <div class="form-group form-group--start">
          <label for="">Hình ảnh</label>
          <div>
            <div>
              <p>Xóa hình</p>
              <input type="radio" id="deleteImgFormEdit" value="delete" name="img" />
            </div>
            <div>
              <p>Thay hình</p>
              <input type="radio" id="changeImgFormEdit" value="change" name="img" />
            </div>
            <div>
              <p>Giữ hình</p>
              <input type="radio" id="saveImgFormEdit" value="save" name="img" checked />
            </div>
          </div>
        </div>

        <div class="form-group" id="editImgForm">
          <label for="">Tải ảnh lên</label>
            <input type="file" id="imageUrl" name="imageUrl" required />
            <img id="form-group--previewImg"></img>
            <p class="imgMessage"></p>
        </div>

        <div class="form-group-1">
        <div class="form-group-name">
          <label for="">Tên sản phẩm</label>
          <input type="text" id="name" name="name" required />
          <p class="nameMessage"></p>
        </div>

        <div class="form-group-type">
          <label for="">Phân loại</label>
          <select id="type">
          <option value="all">Chọn phân loại</option>
          <option value="mountain">Mountain</option>
          <option value="road">Road</option>
          <option value="kids">Kids</option>
          <option value="touring">Touring</option>
          </select>
          <p class="typeMessage"></p>
        </div>
        </div>

        <div class="form-group-1">
          <div class="form-group">
            <label for="">Giá sản phẩm</label>
            <input type="text" id="priceEditForm" name="priceEditForm" required />
            <p class="priceMessage"></p>
          </div>
  
          <div class="form-group form-group--start">
            <label for="">Mã sản phẩm</label>
            <input type="text" id="idProductEdit" required/>
            <p class="idProductMessage"></p>
          </div>
        </div>

        <div class="form-group-1">
          <div class="form-group">
            <label for="">Ngày cập nhật</label>
            <input type="date" id="dateupdate" name="dateupdate" required />
            <p class="updateMessage"></p>
          </div>
  
          <div class="form-group">
            <label for="">Ngày tạo</label>
            <input type="date" id="datecreate" name="datecreate" required />
            <p class="createMessage"></p>
          </div>
        </div>

        <button type="submit" id="formSubmit">Change</button>
      </form>
    </div>
  `;

  modal.insertAdjacentHTML('afterbegin', html);

  const close = document.querySelector('.close');
  close.addEventListener('click', e => {
    hideModal();
  });
}


function updateEvent(item, index, id, element) {
  const edits = item.querySelectorAll('.edit');
  edits.forEach(edit => {
    edit.addEventListener('click', e => {
      displayFormChange();
      const id = edit.parentElement.querySelector('.id').innerText.trim();
      const currentProductName = edit.parentElement.querySelector('.name').innerText.trim();
      document.querySelector('.form-group-name #name').setAttribute('value', currentProductName);
      const currentProductPrice = edit.parentElement
        .querySelector('.price')
        .innerText.trim()
        .split(' ')[0]
        .replace(/\./g, '');
      document.querySelector('#priceEditForm').setAttribute('value', currentProductPrice);

      const currentIdProduct = edit.parentElement.querySelector('.id').innerText.trim();
      document.querySelector('#idProductEdit').setAttribute('value', currentIdProduct);

      const currentTypeProduct = edit.parentElement.querySelector('.type').innerText.trim();
      document.querySelector('.form-group-type #type').value = currentTypeProduct;

      const currentCreateDate = edit.parentElement.querySelector('.date-creat').innerText.trim().split('/');
      const currentCreateDay = currentCreateDate[0];
      const currentCreateMonth = currentCreateDate[1];
      const currentCreateYear = currentCreateDate[2];

      document.querySelector('#datecreate').value = `${currentCreateYear}-${currentCreateMonth}-${currentCreateDay}`;

      const currentUpdateDate = edit.parentElement.querySelector('.date-update').innerText.trim().split('/');
      const currentUpdateDay = currentUpdateDate[0];
      const currentUpdateMonth = currentUpdateDate[1];
      const currentUpdateYear = currentUpdateDate[2];

      document.querySelector('#dateupdate').value = `${currentUpdateYear}-${currentUpdateMonth}-${currentUpdateDay}`;

      const formImgInput = document.querySelector('.form-group #imageUrl');

      formImgInput.addEventListener('change', e => {
        previewImage(formImgInput, '#form-group--previewImg');
      });

      const formCheckboxDeleteImg = document.querySelector('#deleteImgFormEdit');
      const formCheckboxSaveImg = document.querySelector('#saveImgFormEdit');
      const formCheckboxChangeImg = document.querySelector('#changeImgFormEdit');
      const inputImg = document.querySelector('#editImgForm');

      formCheckboxDeleteImg.addEventListener('change', e => {
        if (formCheckboxDeleteImg.checked) {
          inputImg.style.display = 'none';
        }
      });

      formCheckboxSaveImg.addEventListener('change', e => {
        if (formCheckboxSaveImg.checked) {
          inputImg.style.display = 'none';
        }
      });

      formCheckboxChangeImg.addEventListener('change', e => {
        if (formCheckboxChangeImg.checked) {
          inputImg.style.display = 'flex';
        }
      });

      const submitBtn = document.getElementById('formSubmit');
      submitBtn.addEventListener('click', e => {
        e.preventDefault();

        const imageUrlValue = document.querySelector('#imageUrl').value;
        const formImgPathLink = document.querySelector('#form-group--previewImg');
        const formNameInputValue = document.querySelector('.form-group-1 #name').value.trim();
        const formDateUpdateValue = document.querySelector('.form-group #dateupdate').value;
        const formDateCreateValue = document.querySelector('.form-group #datecreate').value;
        const formTypeValue = document.querySelector('.form-group-1 #type').value;
        const formPriceValue = document.querySelector('#priceEditForm').value;
        const formIdProductValue = document.querySelector('#idProductEdit').value;

        let isValidInputImg = true;
        let isValidName = true;
        let isValidDateUpdate = true;
        let isValidDateCreate = true;
        let isValidType = true;
        let isValidPrice = true;
        let isValidIdProduct = true;

        const nameMessgae = document.querySelector('.nameMessage');
        const updateMessage = document.querySelector('.updateMessage');
        const createMessage = document.querySelector('.createMessage');
        const typeMessage = document.querySelector('.typeMessage');
        const imgMessage = document.querySelector('.imgMessage');
        const priceMessage = document.querySelector('.priceMessage');
        const idProductMessage = document.querySelector('.idProductMessage');
        if (imageUrlValue === '' && formCheckboxChangeImg.checked) {
          isValidInputImg = false;
          imgMessage.innerHTML = '* Vui lòng chọn file hình ảnh';
        } else {
          isValidInputImg = true;
          imgMessage.innerHTML = '';
        }

        if (formNameInputValue === '') {
          isValidName = false;
          nameMessgae.innerHTML = '* Vui lòng nhập tên sản phẩm';
        } else {
          isValidName = true;
          nameMessgae.innerHTML = '';
        }

        if (formDateUpdateValue === '') {
          isValidDateUpdate = false;
          updateMessage.innerHTML = '* Vui lòng nhập dữ liệu';
        } else {
          isValidDateUpdate = true;
          updateMessage.innerHTML = '';
        }

        if (formDateCreateValue === '') {
          isValidDateCreate = false;
          createMessage.innerHTML = '* Vui lòng nhập dữ liệu';
        } else {
          isValidDateCreate = true;
          createMessage.innerHTML = '';
        }

        if (formTypeValue === 'all') {
          isValidType = false;
          typeMessage.innerHTML = '* Vui lòng chọn thể loại';
        } else {
          isValidType = true;
          typeMessage.innerHTML = '';
        }

        if (formPriceValue.trim() === '') {
          isValidPrice = false;
          priceMessage.innerHTML = '* Vui lòng nhập dữ liệu';
        } else if (!+formPriceValue.trim()) {
          isValidPrice = false;
          priceMessage.innerHTML = '* Vui lòng nhập dữ liệu là số';
        } else {
          isValidPrice = true;
          priceMessage.innerHTML = '';
        }

        if (formIdProductValue.trim().length === 0) {
          idProductMessage.innerHTML = '* Vui lòng nhập mã sản phẩm';
          isValidIdProduct = false;
        } else if (
          dataAdminProduct.some(
            product => product.ID === formIdProductValue.trim() && currentIdProduct !== formIdProductValue.trim()
          )
        ) {
          idProductMessage.innerHTML = '* Mã sản phẩm đã tồn tại';
          isValidIdProduct = false;
        } else if (formIdProductValue.trim().length !== 5) {
          idProductMessage.innerHTML = '* Mã sản phẩm phải bằng 5 ký tự';
          isValidIdProduct = false;
        } else {
          idProductMessage.innerHTML = '';
          isValidIdProduct = true;
        }
        if (isValidDateCreate && isValidDateUpdate) {
          if (formDateCreateValue > formDateUpdateValue) {
            isValidDateCreate = false;
            createMessage.innerHTML = '* Vui lòng nhập ngày tạo nhỏ hơn hoặc bằng ngày cập nhật';
          } else {
            isValidDateCreate = true;
            createMessage.innerHTML = '';
          }
        }

        let isValidForm =
          isValidName &&
          isValidDateUpdate &&
          isValidDateCreate &&
          isValidType &&
          isValidInputImg &&
          isValidPrice &&
          isValidIdProduct;

        if (isValidForm) {
          dataAdminProduct.forEach(product => {
            if (product.ID === id) {
              let whatImgSrcIs;

              if (formCheckboxDeleteImg.checked) {
                whatImgSrcIs = '../../../database/images/comming.jpg';
              } else if (formCheckboxChangeImg.checked) {
                whatImgSrcIs = formImgPathLink.src;
              } else if (formCheckboxSaveImg) {
                whatImgSrcIs = product.imgSrc;
              }

              product.imgSrc = whatImgSrcIs;
              product.name = formNameInputValue;
              product.price = `${(+formPriceValue).toLocaleString('vi-VN')} VND`;
              product.dateCreate = new Date(formDateCreateValue).toISOString();
              product.dateUpdate = new Date(formDateUpdateValue).toISOString();
              product.type = formTypeValue;
              product.ID = formIdProductValue;
              console.log(product)
              console.log(product.type)
              console.log(product.dateCreate)
              console.log(product.dateUpdate)
            }
          });
          localStorage.setItem('needReturnProductPage', JSON.stringify(true));
          localStorage.setItem('DUMMY_PRODUCTS', JSON.stringify(dataAdminProduct));

          alert('Cập nhật dữ liệu thành công!');

          location.reload();
        }
      });
    });
  });

  const deletes = document.querySelectorAll('.delete');
  deletes.forEach(d => {
    d.addEventListener('click', e => {
      const modal = document.querySelector('.modal');

      modal.innerHTML = '';
      showModal();

      const html = `<div class="modal--delete">
          <header class="modal--delete__header">
            <h1>Xóa sản phẩm</h1>
          </header>
          <div class="modal--delete__content">
            <p>Bạn có muốn xóa sản phẩm này không?</p>
          </div>
          <div class="modal--delete__footer">
            <button class="modal--delete__footer--delete">Chắc chắn</button>
            <button class="modal--delete__footer--exit">Không</button>
          </div>
        </div>`;

      modal.insertAdjacentHTML('afterbegin', html);

      const confirmBtn = document.querySelector('.modal--delete__footer--delete');
      const exitBtn = document.querySelector('.modal--delete__footer--exit');
      exitBtn.addEventListener('click', e => {
        hideModal();
      });
      confirmBtn.addEventListener('click', e => {
        const id = d.parentElement.querySelector('.id').innerText.trim();
        dataAdminProduct = dataAdminProduct.filter(product => product.ID !== id);
        localStorage.setItem('needReturnProductPage', JSON.stringify(true));
        localStorage.setItem('DUMMY_PRODUCTS', JSON.stringify(dataAdminProduct));

        alert('Xóa sản phẩm thành công!');

        location.reload();
        hideModal();
      });
    });
  });
}

function showModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.add('active');
  overlay.classList.add('active');
}

function hideModal() {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

function returnPathImg(element) {
  let pathImg = element.imgSrc;
  if (pathImg.startsWith('database')) {
    pathImg = '/' + pathImg;
  }
  return pathImg;
}

function disPlayProductItem(pageStart, pageEnd, data) {
  const content = document.getElementById('content');

  const id = document.getElementById('id');
  content.innerHTML = '';

  for (let index = pageStart; index < pageEnd; index++) {
    const element = data[index];

    const dateCreate = new Date(element.dateCreate);
    const dateCreateDate = dateCreate.getDate().toString().padStart(2, '0');
    const dateCreateMonth = (dateCreate.getMonth() + 1).toString().padStart(2, '0');
    const dateCreateYear = dateCreate.getFullYear();

    const dateUpdate = new Date(element.dateUpdate);
    const dateUpdateDate = dateUpdate.getDate().toString().padStart(2, '0');
    const dateUpdateMonth = (dateUpdate.getMonth() + 1).toString().padStart(2, '0');
    const dateUpdateYear = dateUpdate.getFullYear();

    const item = document.createElement('tr');
    item.innerHTML = `
              <th class="id">${element.ID}</th>
              <th class="image"><img src="${returnPathImg(element)}"></th>
              <th class="name">${element.name}</th>
              <th class="type">${element.type}</th>             
              <th class="date-update">${dateUpdateDate}/${dateUpdateMonth}/${dateUpdateYear}</th>
              <th class="date-creat">${dateCreateDate}/${dateCreateMonth}/${dateCreateYear}</th>
              <th class="price">${element.price}</th>
              <th class="edit" id="edit">Sửa</th>
              <th class="delete" id="delete">Xóa</th>
      `;
    content.appendChild(item);

    updateEvent(item, index, id, element);
  }
}
function previewImage(input, element) {
  var imagePreview = document.querySelector(`${element}`);
  var file = input.files[0];
  if (file) {
    var render = new FileReader();

    render.onload = function (e) {
      imagePreview.src = e.target.result;
    };
    render.readAsDataURL(file);
  }
}

function hideFilterContent() {
  const productPageFilterContainer = document.querySelector('#manageProduct .filter');
  productPageFilterContainer.querySelector('h1').style.display = 'none';
  productPageFilterContainer
    .querySelectorAll('.admin__content--body__filter--gr1')
    .forEach(element => (element.style.display = 'none'));
  document.querySelector('#product-filter-form p').style.display = 'none';
  productPageFilterContainer.querySelector('.body__filter--actions').style.display = 'none';
}

function unhideFilterContent() {
  const productPageFilterContainer = document.querySelector('#manageProduct .filter');
  productPageFilterContainer.querySelector('h1').style.display = 'block';
  productPageFilterContainer
    .querySelectorAll('.admin__content--body__filter--gr1')
    .forEach(element => (element.style.display = 'flex'));
  document.querySelector('#product-filter-form p').style.display = 'block';
  productPageFilterContainer.querySelector('.body__filter--actions').style.display = 'block';
}

const addProductBtn = document.getElementById('add-product-btn');
addProductBtn.addEventListener('click', e => {
  e.preventDefault();

  addProductBtn.style.display = 'none';
  hideFilterContent();

  const content = document.getElementById('content-product');
  const manageProduct = document.getElementById('add-product-container');
  const pagination = document.getElementById('pagination');
  const cancel = document.getElementById('cancel');
  content.style.display = 'none';
  pagination.style.display = 'none';
  cancel.style.display = 'block';
  manageProduct.innerHTML = ``;
  const addProductForm = document.createElement('div');
  addProductForm.innerHTML = `
  
  <div class="add-product-form-container">
    <div class="title">
        <h2>
            Thêm sản phẩm mới
        </h2>
    </div>
    <form id="add-product-form">
        <div class="form-item">
            <label for="fileInput">Hình ảnh sản phẩm</label>
            <input type="file" id="fileInput">
            <img src="" alt="" id="imagePreview">
        </div>
        
        <div class="form-item">
            <label for="name">Tên sản phẩm</label>
            <input type="text" id="name" placeholder="Nhập tên sản phẩm">
            <p class="newProductNameMessage"></p>
        </div>

        <div class="form-item__container">  
          <div class="form-item form-item__productCode">
              <label for="productCodeForm">Mã sản phẩm</label>
              <input type="text" id="productCodeForm" placeholder="Nhập mã sản phẩm">
              <p class="newProcductIdMessage"></p>
          </div>
          <div class="form-item form-item__productCategory">
              <label for="category">Thể loại</label>
              <select name="categoty" id="category">
                  <option value="">Chọn thể loại</option>
                  <option value="mountain">Mountain</option>
                  <option value="road">Road</option>
                  <option value="touring">Touring</option>
                  <option value="kids">Kids</option>
              </select>
              <p class="newMessageCategory"></p>
          </div>
        </div class="form-item__container">  


        <div class="form-item__container">
          <div class="form-item form-item__productPrice">
              <label for="price">Giá sản phẩm</label>
              <input type="text" id="price" placeholder="Nhập giá sản phẩm">
              <p class="newProcductPriceMessage"></p>
          </div>
        </div>
        

        <button id="add-form-btn">Thêm</button>

    </form>
  </div>
  `;

  manageProduct.appendChild(addProductForm);

  var fileInput = document.getElementById('fileInput');

  fileInput.addEventListener('change', function () {
    previewImage(fileInput, '#imagePreview');
  });

  const formBtn = document.getElementById('add-form-btn');

  formBtn.addEventListener('click', e => {
    e.preventDefault();
    var form = document.getElementById('add-product-form');
    var imgUrl = form.querySelector('#imagePreview');

    var name = form.querySelector('#name');
    var id = form.querySelector('#productCodeForm');
    var category = form.querySelector('#category');
    var price = form.querySelector('#price');

    const showMessageNameRes = document.querySelector('.newProductNameMessage');
    const showMessageIdRes = document.querySelector('.newProcductIdMessage');
    const showMessagePrice = document.querySelector('.newProcductPriceMessage');
    const showMessageCategory = document.querySelector('.newMessageCategory');

    let isValidName = true;
    let isValidId = true;
    let isValidCategory = true;
    let isValidPrice = true;
    let isValidColor = true;

    if (name.value.trim().length === 0) {
      showMessageNameRes.innerHTML = '* Vui lòng nhập tên sản phẩm';
      isValidName = false;
    } else {
      showMessageNameRes.innerText = '';
      name.style.border = '1px solid #333';
      isValidName = true;
    }

    if (id.value.trim().length === 0) {
      showMessageIdRes.innerHTML = '* Vui lòng nhập mã sản phẩm';
      isValidId = false;
    } else if (dataAdminProduct.some(product => product.ID === id.value.trim())) {
      showMessageIdRes.innerHTML = '* Mã sản phẩm đã tồn tại';
      isValidId = false;
    } else if (id.value.trim().length !== 5) {
      showMessageIdRes.innerHTML = '* Mã sản phẩm phải bằng 5 ký tự';
      isValidId = false;
    } else {
      showMessageIdRes.innerHTML = '';
      id.style.border = '1px solid #333';
      isValidId = true;
    }

    if (price.value.trim().length === 0) {
      showMessagePrice.innerHTML = '* Vui lòng nhập giá sản phẩm';
      isValidPrice = false;
    } else if (!+price.value.trim()) {
      showMessagePrice.innerHTML = '* Giá sản phẩm phải là số';
      isValidPrice = false;
    } else {
      showMessagePrice.innerText = '';
      price.style.border = '1px solid #333';
      isValidPrice = true;
    }

    if (category.value.trim().length === 0) {
      showMessageCategory.innerHTML = '* Vui lòng chọn thể loại xe';
      isValidCategory = false;
    } else {
      showMessageCategory.innerHTML = '';
      category.style.border = '1px solid #333';
      isValidCategory = true;
    }

    if (imgUrl.value === '' && name.value === '' && id.value === '' && price.value === '') {
      return null;
    }

    if (imgUrl.value === '') {
      imgUrl.style.border = '1px solid red';
    }
    if (name.value === '') {
      name.style.border = '1px solid red';
    }
    if (id.value === '') {
      id.style.border = '1px solid red';
    }
    if (price.value === '') {
      price.style.border = '1px solid red';
    }
    if (category.value === '') {
      category.style.border = '1px solid red';
    }

    const isValidForm = isValidName && isValidId && isValidCategory && isValidColor && isValidPrice;

    if (isValidForm) {
      let imgLink;

      if (fileInput.value.trim().length === 0) {
        imgLink = '../../../database/images/comming.jpg';
      } else {
        imgLink = imgUrl.src;
      }
      const currentDate = new Date();
      const currentISOString = currentDate.toISOString();

      const priveValue = +price.value;

      var newProduct = {
        name: name.value,
        imgSrc: imgLink,
        price: priveValue.toLocaleString('vi-VN') + ' VND',
        ID: id.value,
        type: category.value,
        dateCreate: currentISOString,
        dateUpdate: currentISOString
      };

      dataAdminProduct.push(newProduct);
      localStorage.setItem('DUMMY_PRODUCTS', JSON.stringify(dataAdminProduct));

      const manageProduct = document.getElementById('add-product-container');
      const pagination = document.getElementById('pagination');
      const content = document.getElementById('content-product');

      manageProduct.innerHTML = '';
      content.style.display = 'table';
      pagination.style.display = 'flex';
      cancel.style.display = 'none';
      addProductBtn.style.display = 'block';
      loadData(dataAdminProduct);

      unhideFilterContent();
      alert('Đã thêm sản phẩm thành công!');
    }
  });
});

const cancel = document.getElementById('cancel');
cancel.addEventListener('click', e => {
  e.preventDefault();
  unhideFilterContent();
  const manageProduct = document.getElementById('add-product-container');
  const pagination = document.getElementById('pagination');
  const content = document.getElementById('content-product');
  manageProduct.innerHTML = '';
  content.style.display = 'table';
  pagination.style.display = 'flex';
  cancel.style.display = 'none';
  addProductBtn.style.display = 'block';
  loadData(dataAdminProduct);
});


var totalPages = Math.ceil(filteredData.length / 10);
var currentPage = 1;
const ITEMS_PER_PAGE = 10;
var maxPagesToShow = 5;

function generatePagination(data) {
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  const prevBtn = document.createElement('a');
  prevBtn.href = 'javascript:void(0);';
  prevBtn.innerHTML = '&laquo;';

  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      generatePagination(data);
      loadData(data);
    }
  });
  pagination.appendChild(prevBtn);

  var startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  var endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  for (let i = startPage; i <= endPage; i++) {
    var pageLink = document.createElement('a');
    pageLink.href = 'javascript:void(0);';
    pageLink.innerHTML = i;

    if (i === currentPage) {
      pageLink.classList.add('active');
    }

    pageLink.addEventListener('click', function () {
      currentPage = parseInt(this.innerHTML);
      generatePagination(data);
      loadData(data);
    });

    pagination.appendChild(pageLink);
  }

  const nextBtn = document.createElement('a');
  nextBtn.href = 'javascript:void(0);';
  nextBtn.innerHTML = '&raquo;';

  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      generatePagination(data);
      loadData(data);
    }
  });
  pagination.appendChild(nextBtn);
}

function loadData(data) {
  totalPages = Math.ceil(data.length / 10);
  var startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  var endIndex = startIndex + ITEMS_PER_PAGE;
  generatePagination(data);

  if (endIndex > data.length) {
    endIndex = data.length;
  }
  disPlayProductItem(startIndex, endIndex, data);
}

generatePagination(dataAdminProduct);
loadData(dataAdminProduct);

const manageProduct = document.getElementById('manageProduct');
const formFilter = manageProduct.querySelector('#product-filter-form');
const filterSubmitBtn = formFilter.querySelector('#filter-submit-btn');

filterSubmitBtn.addEventListener('click', e => {
  e.preventDefault();

  const productName = manageProduct.querySelector('#productName');
  const productCode = manageProduct.querySelector('#productCode');
  const categorySelect = manageProduct.querySelector('#categorySelect');

  const dateSelect = manageProduct.querySelector('#cateDateSelect');
  const dateFrom = manageProduct.querySelector('#dateFrom input');
  const dateTo = manageProduct.querySelector('#dateTo input');
  if (
    !productName.value &&
    !productCode.value &&
    !dateSelect.value &&
    !dateFrom.value &&
    !dateTo.value &&
    !categorySelect.value
  ) {
    return;
  }

  let dataFilter = [...dataAdminProduct];
  if (dateFrom.value || dateTo.value || dateSelect.value !== '') {
    if ((dateFrom.value || dateTo.value) && !dateSelect.value) {
      alert('Vui lòng chọn dữ kiện loại ngày cần lọc!');
      return;
    }

    if (!dateFrom.value) {
      alert('Vui lòng chọn bắt đầu từ ngày nào!');
      return;
    } else if (!dateTo.value) {
      alert('Vui lòng chọn kết thúc ngày nào!');
      return;
    }

    const selectedDateFrom = new Date(dateFrom.value);
    const selectedDateTo = new Date(dateTo.value);
    if (selectedDateFrom <= selectedDateTo) {
      dataFilter = dataFilter.filter(product => {
        const dateCreateProduct = new Date(product.dateCreate);
        const dateUpdateProduct = new Date(product.dateUpdate);

        if (
          dateSelect.value === 'dateCreate' &&
          dateCreateProduct >= selectedDateFrom &&
          dateCreateProduct <= selectedDateTo
        ) {
          return true;
        } else if (
          dateSelect.value === 'dateUpdate' &&
          dateUpdateProduct >= selectedDateFrom &&
          dateUpdateProduct <= selectedDateTo
        ) {
          return true;
        }
        return false;
      });
    } else {
      alert('Ngày kết thúc không hợp lệ!');
      return;
    }
  }
  if (productName.value.trim()) {
    dataFilter = dataFilter.filter(e => e.name.toLowerCase().includes(productName.value.trim().toLowerCase()));
  }
  if (productCode.value.trim()) {
    dataFilter = dataFilter.filter(e => e.ID.includes(productCode.value));
  }

  if (categorySelect.value != 'all') {
    dataFilter = dataFilter.filter(e => e.type === categorySelect.value);
  }

  filteredData = [...dataFilter];
  generatePagination(filteredData);
  loadData(filteredData);

  const content = document.getElementById('content');

  content.innerHTML = '';
  const id = document.getElementById('id');
  for (let index = 0; index < filteredData.length; index++) {
    const element = filteredData[index];
    const item = document.createElement('tr');

    const dateCreate = new Date(element.dateCreate);
    const dateCreateDate = dateCreate.getDate().toString().padStart(2, '0');
    const dateCreateMonth = (dateCreate.getMonth() + 1).toString().padStart(2, '0');
    const dateCreateYear = dateCreate.getFullYear();

    const dateUpdate = new Date(element.dateUpdate);
    const dateUpdateDate = dateUpdate.getDate().toString().padStart(2, '0');
    const dateUpdateMonth = (dateUpdate.getMonth() + 1).toString().padStart(2, '0');
    const dateUpdateYear = dateUpdate.getFullYear();

    item.innerHTML = `
      <th class="id">${element.ID}</th>
      <th class="image"><img src="${returnPathImg(element)}"></th>
      <th class="name">${element.name}</th>
      <th class="type">${element.type}</th>
      <th class="date-update">${dateUpdateDate}/${dateUpdateMonth}/${dateUpdateYear}</th>
      <th class="date-creat">${dateCreateDate}/${dateCreateMonth}/${dateCreateYear}</th>
      <th class="price">${element.price}</th>
      <th class="edit" id="edit">Sửa</th>
      <th class="delete" id="delete">Xóa</th>
    `;

    content.appendChild(item);
    updateEvent(item, index, id, element);
  }
  alert('Lọc thành công sản phẩm!');
});
const resetBtn = document.querySelector('.product--reset__btn');
resetBtn.addEventListener('click', () => {
  productName.value = '';
  productCode.value = '';
  categorySelect.value = 'all';
  filteredData = [...dataAdminProduct];
  generatePagination(filteredData);
  loadData(dataAdminProduct);
});
const autoReturnProductPageWhenReload = () => {
  const taskbarItems = document.querySelectorAll('.admin__taskbar--body__list li');
  const contentElements = document.querySelectorAll('.admin__content');

  taskbarItems.forEach(item => {
    item.classList.remove('active');
  });

  contentElements.forEach(content => {
    content.classList.add('hideItem');
  });

  document.querySelector('.admin__taskbar--body__list #product').classList.add('active');
  productContent.classList.remove('hideItem');
};

window.addEventListener('load', e => {
  const isNeedReturn = JSON.parse(localStorage.getItem('needReturnProductPage'));
  if (isNeedReturn) {
    autoReturnProductPageWhenReload();
    localStorage.setItem('needReturnProductPage', JSON.stringify(false));
  }
});