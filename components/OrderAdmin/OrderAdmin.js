// const productsList = [
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

const productsList = JSON.parse(localStorage.getItem('DUMMY_PRODUCTS'));

let userData = JSON.parse(localStorage.getItem('DUMMY_API'));
const modalOrderAdmin = document.querySelector('.modal');
const overlayOrderAdmin = document.querySelector('.overlay');


const closeModalOrderAdmin = () => {
  modalOrderAdmin.classList.remove('active');
  overlayOrderAdmin.classList.remove('active');
};

function returnTruePathLink(img) {
  if (img.startsWith('data:image')) {
    return img;
  } else if (img.startsWith('database')) {
    return '/' + img;
  }
}

const showModalOrderAdmin = (user, currentPID, cart, currentQNT) => {
  const form = modalOrderAdmin.querySelector('form');

  const productInfo = productsList.find(product => product.ID === currentPID);
  const price = parseFloat(productInfo.price.replace('VND', '').split('.').join(''));

  modalOrderAdmin.innerHTML = '';

  if (form) {
    form.innerHTML = '';
  }

  const accounts = JSON.parse(localStorage.getItem('accounts'));
  const userInfo = accounts.find(acc => acc.id === user.idUser);

  const convertDateCreate = new Date(cart.dateCreate);
  const time =
    convertDateCreate.getDate().toString().padStart(2, '0') +
    '/' +
    (convertDateCreate.getMonth() + 1).toString().padStart(2, '0') +
    '/' +
    convertDateCreate.getFullYear() +
    ' ' +
    convertDateCreate.getHours().toString().padStart(2, '0') +
    ':' +
    convertDateCreate.getMinutes().toString().padStart(2, '0') +
    ':' +
    convertDateCreate.getSeconds().toString().padStart(2, '0');

  const html = `
  <form action="">
    <div class="modal__content">
      <div class="modal__content--header">
        <h1>Thông tin chi tiết</h1>
        <p>Sản phẩm thuộc đơn hàng: <span>${cart.idOrder}</span></p>
        <p>Ngày đặt hàng: <span>${time}</span></p>
      </div>
      <div class="modal__content--title modal__content--id__user">
        <h1>Mã khách hàng</h1>
        <p>${user.idUser}</p>
      </div>
      <div class="modal__content--title modal__content--username">
        <h1>Tên khách hàng</h1>
        <p>${userInfo?.name}</p>
      </div>
      <div class="modal__content--product">
        <ul class="modal__content--product__title">
          <li class="product__title--id">Mã sản phẩm</li>
          <li class="product__title--name">Tên sản phẩm</li>
          <li class="product__title--qnt">Số lượng</li>
        </ul>
        <ul class="modal__content--product__item">  
          <li class="product__item--id">${productInfo.ID}</li>
          <li class="product__item--name">${productInfo.name}</li>
          <li class="product__item--qnt">${currentQNT}</li>
        </ul>
      </div>
      <div class="modal__content--img">
        <img src="${productInfo.imgSrc}" alt="Hình ảnh xe đạp">
      </div>
      <div class="modal__conent--total__amount">
        <h1>Tổng tiền</h1>
        <p>${price ? (price * currentQNT).toLocaleString('en') + 'VNĐ' : 'Giá liên hệ'} </p>
      </div>
    </div>
    
    <div class="modal__actions">
      <button class="modal__action--exit">Thoát</button>
      <button class="modal__action--process">Xử lý</button>
    </div>
  </form>
    `;

  modalOrderAdmin.insertAdjacentHTML('afterbegin', html);
  modalOrderAdmin.classList.add('active');
  overlayOrderAdmin.classList.add('active');
};

overlayOrderAdmin.addEventListener('click', closeModalOrderAdmin);
const listProducts = document.querySelector('.admin__content--body__products');

const uiElement = (idUser, idOrder, day, month, year, quantity, productInfo, idProduct, isProcessed) => {
  const html = `
  <ul class="admin__content--body__products--item ${
    isProcessed ? 'isActiveStatus' : 'isNonActiveStatus'
  }" pid="${idProduct}">
    <li class="admin__content--body__id products--item__id" id="${idUser}">${idUser}</li>
    <li class="admin__content--body__orderId products--item__orderId" id="${idOrder}">${idOrder}</li>
    <li class="admin__content--body__productId products--item__productId">${idProduct}</li>
    <li class="admin__content--body__img products--item__img">
      <div>
        <img ${productInfo ? '' : 'style = " width: 85% " '};" src="${productInfo ? productInfo.imgSrc : "https://api.xedap.vn/wp-content/uploads/2022/06/jumper-red-edited.png"}" alt="Hình ảnh xe đạp" />
      </div>
    </li>
    <li class="admin__content--body__name products--item__name">${productInfo ? productInfo.name : ""}</li>
    <li class="admin__content--body__qnt products--item__qnt" data-qnt=${quantity}>
      <p>${quantity}</p>
    </li>
    <li class="admin__content--body__dateCreate products--item__dateCreate">${day}/${month}/${year}</li>
    ${
      isProcessed
        ? `<li class="admin__content--body__status products--item__status">
        Đã xử lý
        <i class="fa-solid fa-circle-info"></i>
      </li>`
        : `<li class="admin__content--body__status products--item__status">
        Chưa xử lý
        <i class="fa-solid fa-pen-to-square"></i>
      </li>`
    }

    <li class="admin__content--body__btn products--item__btn">
      <button class="${isProcessed ? 'hide' : ''}"><i class="fa-solid fa-x"></i></button>
    </li>
  </ul>`;
  return html;
};

const renderItems = (processed = false, processing = false, data = userData) => {
  listProducts.innerHTML = '';

  data?.forEach(user => {
    const idUser = user.idUser;

    if (user.cart?.length === 0) {
      return;
    }

    if (user.cart !== undefined) {
      user.cart.forEach(cart => {
        const idOrder = cart.idOrder;
        const dateCreate = cart.dateCreate;
        const convertDateCreate = new Date(dateCreate);
        const day = convertDateCreate.getDate().toString().padStart(2, '0');
        const month = (convertDateCreate.getMonth() + 1).toString().padStart(2, '0');
        const year = convertDateCreate.getFullYear();

        cart.product.forEach(product => {
          const idProduct = product.id;
          const quantity = product.quantity;
          const isProcessed = product.processed;

          const productInfo = productsList.find(product => product.ID === idProduct);
          let html;

          if (processed && isProcessed === true) {
            html = uiElement(idUser, idOrder, day, month, year, quantity, productInfo, idProduct, isProcessed);
          } else if (processing && isProcessed === false) {
            html = uiElement(idUser, idOrder, day, month, year, quantity, productInfo, idProduct, isProcessed);
          } else if (!processed && !processing) {
            html = uiElement(idUser, idOrder, day, month, year, quantity, productInfo, idProduct, isProcessed);
          }

          listProducts.insertAdjacentHTML('beforeend', html);
        });
      });
    }
  });
};
const submitBtnOrderAdmin = document.querySelector('.order--filter__btn');

let dataOrderAdmin;

let isProcessed;

submitBtnOrderAdmin.addEventListener('click', e => {
  e.preventDefault();

  const inputIdClientValue = document.querySelector('#orderIdClient input').value.trim();
  const inputIdOrderValue = document.querySelector('#orderIdOrder input').value.trim();
  const selectStatusValue = document.querySelector('#orderStatus select').value;
  const inputOrderDateBegin = document.querySelector('#orderDateBegin input').value;
  const inputOrderDateEnd = document.querySelector('#orderDateEnd input').value;
  const timeBegin = new Date(inputOrderDateBegin);
  const timeEnd = new Date(inputOrderDateEnd);
  if (timeBegin > timeEnd) {
    alert('Ngày bắt đầu phải nhỏ hơn ngày kết thúc');
    return;
  }

  if (
    inputIdClientValue === '' &&
    inputIdOrderValue === '' &&
    !selectStatusValue &&
    !inputOrderDateBegin &&
    !inputOrderDateEnd
  ) {
    return;
  } else {
    const contentListProduct = document.querySelector('#orderList');

    window.scrollTo({
      top: contentListProduct.getBoundingClientRect().top + window.scrollY - contentListProduct.clientHeight,
      behavior: 'smooth'
    });
  }

  dataOrderAdmin = userData;

  if (inputOrderDateBegin && inputOrderDateEnd) {
    const dayBegin = timeBegin.getDate();
    const monthBegin = timeBegin.getMonth();
    const yearBegin = timeBegin.getFullYear();

    const dayEnd = timeEnd.getDate();
    const monthEnd = timeEnd.getMonth();
    const yearEnd = timeEnd.getFullYear();
    dataOrderAdmin = dataOrderAdmin.filter(user => {
      return user.cart.some(cart => {
        console.log;
        const timeOrder = new Date(cart.dateCreate);
        const dayOrder = timeOrder.getDate();
        const monthOrder = timeOrder.getMonth();
        const yearOrder = timeOrder.getFullYear();

        const orderDate = new Date(yearOrder, monthOrder, dayOrder);
        const startDate = new Date(yearBegin, monthBegin, dayBegin);
        const endDate = new Date(yearEnd, monthEnd, dayEnd);
        const isAfterOrEqualBeginDate = startDate <= orderDate;
        const isBeforeOrEqualEndDate = orderDate <= endDate;

        return isAfterOrEqualBeginDate && isBeforeOrEqualEndDate;
      });
    });
  }
  if (inputIdClientValue) {
    dataOrderAdmin = dataOrderAdmin.filter(user => user.idUser === inputIdClientValue.trim());
  }

  if (inputIdOrderValue) {
    dataOrderAdmin = dataOrderAdmin
      .map(user => ({
        idUser: user.idUser,
        cart: [user.cart.find(cart => cart.idOrder === inputIdOrderValue)]
      }))
      .filter(user => user.cart.length > 0 && user.cart[0] !== undefined);
  }

  if (selectStatusValue) {
    if (selectStatusValue === 'valid') {
      isProcessed = 'processed';
    } else if (selectStatusValue === 'invalid') {
      isProcessed = 'processing';
    } else if (selectStatusValue === 'all') {
      isProcessed = 'all';
    }
  }

  listProducts.innerHTML = '';
  if (isProcessed === 'processed') {
    renderItems(true, false, dataOrderAdmin);
    clickIconHandler();
    clickIconInfoHandler();
    clickDeleteBtnHandler();
  } else if (isProcessed === 'processing') {
    renderItems(false, true, dataOrderAdmin);
    clickIconHandler();
    clickIconInfoHandler();
    clickDeleteBtnHandler();
  } else if (isProcessed === 'all') {
    renderItems(false, false, dataOrderAdmin);
    clickIconHandler();
    clickIconInfoHandler();
    clickDeleteBtnHandler();
    sortProductsNonActiveFirst();
  }

  renderImgTruePath();
  paginationHandler();
});

const resetBtnOrderAdmin = document.querySelector('.order--reset__btn');
resetBtnOrderAdmin.addEventListener('click', e => {
  initOrderAdmin();
  paginationHandler();
});
const updateProcessingHandler = (user, currentPID, currentOID) => {
  user.cart = user.cart.map(cart => {
    if (cart.idOrder === currentOID) {
      cart.product.forEach(product => {
        if (product.id === currentPID && !product.processed) {
          product.processed = true;
        }
      });
    }
    return cart;
  });
};

const clickedExitBtnHandler = () => {
  const exitBtn = document.querySelector('.modal__action--exit');
  exitBtn.addEventListener('click', e => {
    e.preventDefault();
    closeModalOrderAdmin();
  });
};

const clickedProcessBtnHandler = (user, currentPID, currentOID) => {
  const processBtn = document.querySelector('.modal__action--process');
  processBtn.addEventListener('click', e => {
    e.preventDefault();
    updateProcessingHandler(user, currentPID, currentOID);
    closeModalOrderAdmin();
    initOrderAdmin();
    paginationHandler();
    localStorage.setItem('isNeedReloadPageAdmin', JSON.stringify(true));

    localStorage.setItem('DUMMY_API', JSON.stringify(userData));
  });
};

const updateLocalStorageForProcessHandler = (currentUID, currentPID, currentOID, currentQNT) => {
  userData.forEach((user, idx) => {
    if (user.idUser === currentUID) {
      user.cart.forEach(cart => {
        if (cart.idOrder === currentOID) {
          showModalOrderAdmin(user, currentPID, cart, currentQNT);
          clickedProcessBtnHandler(user, currentPID, currentOID);
          clickedExitBtnHandler();
        }
      });
    }
  });
  localStorage.setItem('DUMMY_API', JSON.stringify(userData));
};

const clickIconHandler = () => {
  const nonActiveElements = document.querySelectorAll('.isNonActiveStatus');
  nonActiveElements.forEach(item => {
    const iconBtn = item.querySelector('.products--item__status i');
    const currentPID = item.getAttribute('pid');
    const currentUID = item.querySelector('.products--item__id').getAttribute('id');
    const currentOID = item.querySelector('.products--item__orderId').getAttribute('id');
    const currenQNT = parseInt(item.querySelector('.products--item__qnt').textContent);

    iconBtn.addEventListener('click', e => {
      updateLocalStorageForProcessHandler(currentUID, currentPID, currentOID, currenQNT);
    });
  });
};

const clickIconInfoHandler = () => {
  const isActiveElements = document.querySelectorAll('.isActiveStatus');
  isActiveElements.forEach(element => {
    const icon = element.querySelector('.products--item__status i');
    icon.addEventListener('click', e => {
      const currentOID = element.querySelector('.products--item__orderId').getAttribute('id');
      const currentUID = element.querySelector('.products--item__id').getAttribute('id');
      const currentPID = element.querySelector('.products--item__productId').textContent;
      const currentQNT = element.querySelector('.products--item__qnt').getAttribute('data-qnt');

      userData.forEach((user, idx) => {
        if (user.idUser === currentUID) {
          user.cart.forEach(cart => {
            if (cart.idOrder === currentOID) {
              showModalOrderAdmin(user, currentPID, cart, currentQNT);
              clickedExitBtnHandler();
              document.querySelector('.modal__action--process').style.display = 'none';
            }
          });
        }
      });
    });
  });
};

const deleteProduct = (currentUID, currentPID, currentOID, isNonActiveItem) => {
  userData.forEach(user => {
    if (user.idUser === currentUID) {
      user.cart = user.cart.filter(cart => {
        if (cart.idOrder !== currentOID) {
          return true;
        }
      });
    }
  });
  alert('Xóa dữ liệu đơn hàng thành công!');
};

function updateLocalStorageForDeleteHandler() {
  initOrderAdmin();
  paginationHandler();
  localStorage.setItem('DUMMY_API', JSON.stringify(userData));
}

const renderModalContentOrderAdmin = () => {
  modalOrderAdmin.innerHTML = '';

  modalOrderAdmin.classList.add('active');
  overlayOrderAdmin.classList.add('active');

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
  modalOrderAdmin.insertAdjacentHTML('afterbegin', html);
};

function clickDeleteBtnHandler() {
  const productsList = document.querySelectorAll('.admin__content--body__products ul');
  productsList.forEach(item => {
    const deleteBtnElements = item.querySelectorAll('.products--item__btn button');
    const isNonActiveItem = item.classList.contains('isNonActiveStatus');
    const currentPID = item.getAttribute('pid');
    const currentUID = item.querySelector('.products--item__id').getAttribute('id');
    const currentOID = item.querySelector('.products--item__orderId').getAttribute('id');

    deleteBtnElements.forEach(btn => {
      btn.addEventListener('click', e => {
        renderModalContentOrderAdmin();

        const acpDeleteBtn = document.querySelector('.modal--delete__footer--delete');
        const exitDeleteBtn = document.querySelector('.modal--delete__footer--exit');

        acpDeleteBtn.addEventListener('click', e => {
          deleteProduct(currentUID, currentPID, currentOID, isNonActiveItem);
          updateLocalStorageForDeleteHandler();
          closeModalOrderAdmin();
        });

        exitDeleteBtn.addEventListener('click', e => {
          closeModalOrderAdmin();
        });
      });
    });
  });
}
const sortProductsNonActiveFirst = () => {
  const productList = document.querySelector('.admin__content--body__products');

  const items = productList.querySelectorAll('.admin__content--body__products--item');

  const nonActiveItems = [];
  const activeItems = [];

  items.forEach(item => {
    if (item.classList.contains('isNonActiveStatus')) {
      nonActiveItems.push(item);
    } else {
      activeItems.push(item);
    }
  });

  productList.innerHTML = '';

  nonActiveItems.forEach(item => {
    productList.appendChild(item);
  });

  activeItems.forEach(item => {
    productList.appendChild(item);
  });
};

const initOrderAdmin = () => {
  renderItems();
  clickIconHandler();
  clickIconInfoHandler();
  clickDeleteBtnHandler();
  sortProductsNonActiveFirst();
  renderImgTruePath();
};

initOrderAdmin();

function paginationHandler() {
  const productItems = document.querySelectorAll('.admin__content--body__products ul');
  let currentPage = 0;
  const itemsPerPage = 6;
  const totalPages = Math.ceil(productItems.length / itemsPerPage);
  let storeItemsPerPage = [];

  function renderLayoutPagination() {
    document.querySelector('.admin__content--body__products').innerHTML = '';
    const startIdx = currentPage * itemsPerPage;
    const endIdx = Math.min(currentPage * itemsPerPage + itemsPerPage, productItems.length);

    for (let i = startIdx; i < endIdx; i++) {
      storeItemsPerPage.push(productItems[i]);
    }
    storeItemsPerPage.forEach(item => {
      document.querySelector('.admin__content--body__products').appendChild(item);
    });

    storeItemsPerPage = [];
  }

  function renderPaginationBtn(isProcessed) {
    const pagination = document.querySelector('.pagination__order');
    pagination.innerHTML = '';
    const html = `
      <button data-goto="${
        currentPage - 1
      }" data-of="${totalPages}" class="btn--inline pagination__order--pagination__btn--prev ${
      currentPage === 0 ? 'hide' : ''
    }">
        <i class="fa-solid fa-arrow-left"></i>
        <span>${currentPage}</span>
        <span> of ${totalPages}</span>
      </button>
      <span class="currentPage">${currentPage + 1}</span>
      <button data-goto="${
        currentPage + 1
      }" data-of="${totalPages}" class="btn--inline pagination__order--pagination__btn--next ${
      currentPage === totalPages - 1 || totalPages === 0 ? 'hide' : ''
    }"  >
        <span>${currentPage + 2}</span>
        <span> of ${totalPages}</span>
        <i class="fa-solid fa-arrow-right"></i>
      </button>`;
    pagination.insertAdjacentHTML('afterbegin', html);
    nextPageHandler();
    prevPageHandler();
  }

  function nextPageHandler() {
    const nextPageBtn = document.querySelector('.pagination__order--pagination__btn--next');
    nextPageBtn.addEventListener('click', e => {
      currentPage += 1;
      renderLayoutPagination();
      renderPaginationBtn();
    });
  }

  function prevPageHandler() {
    const prevPageBtn = document.querySelector('.pagination__order--pagination__btn--prev');
    prevPageBtn.addEventListener('click', e => {
      currentPage -= 1;
      renderLayoutPagination();
      renderPaginationBtn();
    });
  }

  renderLayoutPagination();
  renderPaginationBtn();
}
paginationHandler();
function renderImgTruePath() {
  const productOrders = document.querySelectorAll('.admin__content--body__products--item .products--item__img');
  productOrders.forEach(order => {
    const getImgPathLink = order.querySelector('img').getAttribute('src');
    if (getImgPathLink.startsWith('/data:image')) {
      order.querySelector('img').setAttribute('src', getImgPathLink.substring(1));
    }
  });
}