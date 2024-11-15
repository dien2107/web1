const dataNavbar = JSON.parse(localStorage.getItem('DUMMY_PRODUCTS'));
// const dataNavbar =  [
//   {
//     name: 'Procaliber 9.7 [2024]',
//     imgSrc: '../../../database/images/productImgs/Procaliber97_24_WHT_Primary-571x379.jpg',
//     price: '105.000.000 VND',
//     dataColors: ['#ffffff', '#000000'],
//     ID: 'fwjog',
//     type: 'mountain',
//     dateCreate: '2023-01-01T00:00:00.000Z',
//     dateUpdate: '2023-01-01T00:00:00.000Z'
//   },
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
const navbarToggle = document.getElementById('navbar-toggler');
const navDropdown = document.getElementById('nav-dropdown');
const userLocalNavbar = JSON.parse(localStorage.getItem('User'));
const input = document.getElementById('input');
const statusSearchNavbar = document.getElementById('statusSearchNavbar');
// const DUMMY_API = JSON.parse(localStorage.getItem('DUMMY_API'));
const accountDataNavbar = JSON.parse(localStorage.getItem('accounts'));

if (!localStorage.getItem('inputSearchCheck')) {
  console.log('Mã đã chạy lần đầu tiên');
  const inputSearch = [];
  localStorage.setItem('inputSearch', JSON.stringify(inputSearch));

  localStorage.setItem('inputSearchCheck', 'true');
} else {
}
const searchValue = document.getElementById('searchValue');
const submitBtn = document.getElementById('submit-btn');
let check = false;
const database = data;
const productListNavbar = document.getElementById('productList');
const inputSearch = JSON.parse(localStorage.getItem('inputSearch'));
const pagingNavbar = document.getElementById('pagination');
const returnPage = document.getElementById('return-to-page');
const overlayNavbar = document.getElementById('overlay');

function returnPathImg(element) {
  let pathImg = element.imgSrc;
  if (pathImg.startsWith('\\data:')) {
    pathImg = pathImg.split('\\')[1].trim();
  } else if (pathImg.startsWith('database')) {
    pathImg = '/' + pathImg;
  }
  return pathImg;
}

function displayItem(startIndex, endIndex, data) {
  productListNavbar.innerHTML = '';

  for (let i = startIndex; i < endIndex; i++) {
    if (data[i].imgSrc !== undefined && data[i].name !== undefined && data[i].price !== undefined) {
      let colors = data[i].dataColors;
      let productItem = document.createElement('div');
      productItem.classList.add('product-item');

      productItem.innerHTML = `
                       <div class = "id">${data[i].ID}</div>
                         <div class="imgSrc">
                         <img src="${returnPathImg(data[i])}">
                         <div class="overlay-hover">
                         
                        <div class="top-button">                  
                            <i class="fa-solid fa-copyright" id="add-cart"></i>                        
                            <i class="fa-solid fa-heart" id="like"></i>
                        </div>
                        <div class="overlay-click">
                        
                        <button id="buy-now">
                                Mua ngay
                        </button>
                        
                        </div>

                                
                         </div>
                         </div>
                        <div class="product-information">
                             <div class="color-dots">${colors.map(
        color => `<div class="dot-items" style="background-color: ${color};"></div>`
      )}</div>
                            <h3>${data[i].name}</h3>
                            <p>Price: ${data[i].price}</p>
                        </div>
                    `;
                    productListNavbar.appendChild(productItem);
      const addCart = productItem.querySelector('#add-cart');

      const overlayClick = productItem.querySelector('.overlay-click');
      console.log(data);


      overlayClick.addEventListener('click', () => {
        overlayNavbar.style.display = 'flex';
        const overlayImg = overlayNavbar.querySelector('img');

        const closeToggle = overlayNavbar.querySelector('#close-toggler');
        const overlayName = overlayNavbar.querySelector('.name');


        const overlayid = overlayNavbar.querySelector('#overlayid');
        overlayid.innerHTML = data[i].ID;
        closeToggle.addEventListener('click', () => {
          overlayNavbar.style.display = 'none';
          toastContainerNavbar.style.display = 'none';
        });
        overlayName.innerHTML = data[i].name;
        overlayImg.src = `${returnPathImg(data[i])}`;
        overlayPrice.innerHTML = data[i].price;



        toast.forEach(e => {
          const exitToast = e.querySelector('.exit');
          exitToast.addEventListener('click', () => {
            toastContainerNavbar.style.display = 'none';
            e.style.display = 'none';
          });
        });
      });

      addCart.addEventListener('click', () => {
        for (let i = 0; i < userLocalNavbar.cart.length; i++) {
          if (userLocalNavbar.cart[i].id === e.ID) {
            quantity = parseInt(userLocalNavbar.cart[i].quantity);
            break;
          }
        }
        quantity = quantity + 1;
        alert('Đã thêm vào giỏ hàng!');

        const process = {
          id: e.ID,
          quantity: quantity
        };
        let found = false;

        if (userLocalNavbar.cart.length > 0) {
          for (let i = 0; i < userLocalNavbar.cart.length; i++) {
            if (process.id === userLocalNavbar.cart[i].id) {
              userLocalNavbar.cart[i].quantity = quantity;
              found = true;
              break;
            }
          }
        }

        if (!found) {
          userLocalNavbar.cart.push(process);
          quantity = 0;
        }

        localStorage.setItem('User', JSON.stringify(userLocalNavbar));
        const itemCart = document.createElement('p');
        itemCart.classList.add('item-cart');
        itemCart.innerText = `${userLocalNavbar.cart.length}`;
        navItemCartNavbar.appendChild(itemCart);
      });

    } else {
      return;
    }
  }
}

navbarToggle.addEventListener('click', () => {
  if (!check) {
    navDropdown.style.display = 'block';
    navbarToggle.style.transform = 'rotate(180deg)';
  } else {
    navDropdown.style.display = 'none';
    navbarToggle.style.transform = 'rotate(0deg)';
  }
  check = !check;
});

const overlayPrice = overlayNavbar.querySelector('#overlay-price');
const overlayClose = overlayNavbar.querySelector('#close-toggler');

// const overlayAddCart = overlayNavbar.querySelector('#overlay-add-cart');

// const toastAddCart = document.querySelector('.toast-add-cart');
// const toastSaveProduct = document.querySelector('.toast-save-product');
// const toast = document.querySelectorAll('.toast');
const toastContainerNavbar = document.querySelector('.toast-container');
const overlayidNavbar = document.getElementById('overlayid');

input.addEventListener('input', event => {
  event.preventDefault();
  if (input.value.length < 0 || input.value === '') {
    searchValue.style.display = 'none';
  } else {
    searchValue.style.display = 'block';
    const inputValue = input.value.toLowerCase();

    inputSearch[0] = inputValue;
    localStorage.setItem('inputSearch', JSON.stringify(inputSearch));
    const matchingNames = database.filter(e => e.name.toLowerCase().includes(inputValue));
    if (event.key === 'enter') {
      alert('tên sản phẩm');
    }

    if (inputValue === '') {
      searchValue.innerHTML = '';
      searchValue.style.border = 'none';
      return;
    }

    searchValue.innerHTML = '';
    matchingNames.forEach(e => {
      const searchInfoValue = document.createElement('div');
      searchInfoValue.classList.add('searchItem');
      searchInfoValue.innerHTML = `
                <span id="id">${e.ID}</span>
                 <img src="${returnPathImg(e)}">
                <p>${e.name}</p>
                <p>${e.price}</p>
            `;

      searchValue.appendChild(searchInfoValue);
      searchValue.style.border = '1px solid gray';
      const id = searchInfoValue.querySelector('#id');
      const overlayid = overlayNavbar.querySelector('#overlayid');
      const overlayImg = overlayNavbar.querySelector('img');

      const closeToggle = overlayNavbar.querySelector('#close-toggler');
      const overlayName = overlayNavbar.querySelector('.name');
      const overlayPrice = overlayNavbar.querySelector('#overlay-price');
      const ElementImg = document.querySelector('img');
      const ElementInfo = document.querySelector('.overlay-click');

      searchInfoValue.addEventListener('click', () => {
        overlayNavbar.style.display = 'flex';
        searchValue.style.display = 'none';
        overlayName.innerText = dataNavbar.name;
        overlayImg.src = `${returnPathImg(e)}`;
        overlayPrice.innerText = e.price;
        overlayid.innerHTML = id.textContent;
        console.log(overlayid);
        overlayClose.addEventListener('click', () => {
          overlayNavbar.style.display = 'none';
        });

        toast.forEach(e => {
          const exitToast = e.querySelector('.exit');
          exitToast.addEventListener('click', () => {
            toastContainerNavbar.style.display = 'none';
            e.style.display = 'none';
          });
        });
      });
    });
  }
});
const navItemCartNavbar = document.getElementById('nav-item-cart');

let quantityNavbar = parseInt(document.getElementById('quantity'));
const clickAddCartNavbar = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem('User'));
  if (!isLoggedIn) {
    overlayNavbar.style.display = 'none';
    toastContainerNavbar.style.display = 'none';
    return;
  }

  for (let i = 0; i < userLocalNavbar.cart.length; i++) {
    if (userLocalNavbar.cart[i].id === overlayidNavbar.textContent) {
      quantityNavbar = parseInt(userLocalNavbar.cart[i].quantity);
      break;
    }
  }

  const process = {
    id: overlayidNavbar.textContent,
    quantity: quantityNavbar
  };
  let found = false;
  if (userLocalNavbar.cart.length > 0) {
    for (let i = 0; i < userLocalNavbar.cart.length; i++) {
      if (process.id === userLocalNavbar.cart[i].id) {
        userLocalNavbar.cart[i].quantity = quantityNavbar;
        found = true;
        break;
      }
    }
  }
  if (!found) {
    userLocalNavbar.cart.push(process);
    quantityNavbar = 1;
  }

  for (let i = 0; i < accountDataNavbar.length; i++) {
    if (accountDataNavbar[i].id === userLocalNavbar.id) {
      accountDataNavbar[i].cart = userLocalNavbar.cart;
    }
  }
  localStorage.setItem('User', JSON.stringify(userLocalNavbar));
  localStorage.setItem('accounts', JSON.stringify(accountDataNavbar));
  const itemCart = document.createElement('p');
  itemCart.classList.add('item-cart');
  itemCart.innerText = `${userLocalNavbar.cart.length}`;
  navItemCartNavbar.appendChild(itemCart);
};

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const matchingProduct = database.filter(e => e.name.toLowerCase().includes(inputSearch[0].trim().toLowerCase()));
  productListNavbar.innerHTML = '';
  input.innerHTML = '';

  input.value = '';
  searchValue.innerHTML = '';
  searchValue.style.border = 'none';

  if (inputSearch[0].trim() === '') {
    alert('Không tìm thấy sản phẩm ');
    generatePagination(data);
    loadData(data);
    pagingNavbar.style.display = 'flex';
  } else {
    if (matchingProduct.length > 0) {

     generatePagination(matchingProduct);
     loadData(matchingProduct);
    } else {
      statusSearchNavbar.innerText = 'Không tìm thấy sản phẩm';
      alert('Không tìm thấy sản phẩm ');
      generatePagination(data)
      loadData(data)
      document.location.reload();
      pagingNavbar.style.display = 'flex';
      returnPage.style.display = 'none';
    }
  }
});
returnPage.addEventListener('click', () => {
  document.location.reload();
});

var totalPages = Math.ceil(dataNavbar.length / 10);
const ITEMS_PER_PAGE_NAVBAR = 10;
var maxPagesToShow = 5;
var currentPageNavbar = 1;

function generatePagination(data) {
  var pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  var prevBtn = document.createElement('a');
  prevBtn.href = 'javascript:void(0);';
  prevBtn.innerHTML = '&laquo;';
  prevBtn.addEventListener('click', function () {
    if (currentPageNavbar > 1) {
      currentPageNavbar--;
      generatePagination(data);
      loadData(data);
    }
  });
  pagination.appendChild(prevBtn);

  var startPage = Math.max(1, currentPageNavbar - Math.floor(maxPagesToShow / 2));
  var endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  for (var i = startPage; i <= endPage; i++) {
    var pageLink = document.createElement('a');
    pageLink.href = 'javascript:void(0);';
    pageLink.innerHTML = i;

    if (i === currentPageNavbar) {
      pageLink.classList.add('active');
    }

    pageLink.addEventListener('click', function () {
      currentPageNavbar = parseInt(this.innerHTML);
      generatePagination(data);
      loadData(data);
    });

    pagination.appendChild(pageLink);
  }

  var nextBtn = document.createElement('a');
  nextBtn.href = 'javascript:void(0);';
  nextBtn.innerHTML = '&raquo;';
  nextBtn.addEventListener('click', function () {
    if (currentPageNavbar < totalPages) {
      currentPageNavbar++;
      generatePagination(data);
      loadData(data);
    }
  });
  pagination.appendChild(nextBtn);
}

function loadData(data) {
  var startIndex = (currentPageNavbar - 1) * ITEMS_PER_PAGE_NAVBAR;
  var endIndex = startIndex + ITEMS_PER_PAGE_NAVBAR;
  totalPages = Math.ceil(data.length / 10);
  generatePagination(data);

  if (endIndex > data.length) {
    endIndex = data.length;
  }
  displayItem(startIndex, endIndex, data);
}


window.addEventListener('resize', () => {
  check = false;
  navDropdown.style.display = 'none';
});
