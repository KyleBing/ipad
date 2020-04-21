/*****************************
  Create Date: 20200414122339
  Update Date: 20200416150225
 *****************************/

const lastOS = "iPadOS 13.4.1";

const iPadPro =[
  // iPad pro 1 generation
  {
    name: "iPad Pro 1 12.9",
    name_short: "Pro 1",
    active: false,
    screen_size: "12.9",
    screen_resolution: "2732 x 2048",
    screen_density: "264",
    width: 305.7,
    height: 220.6,
    thickness: 6.9,
    os: {
      init: "iOS 9.1",
      last: lastOS
    },
    cpu: {
      model: 'A9X',
      rate: '2.26',
      core: 2
    },
    gpu: {
      model: "PowerVR Series 7XT",
      core: 12
    },
    memory: [
      {size: "4", type: "DDR4"}
    ],
    storage: ["32", "128", "256"],
    price: "",
    battery: "10307",
    models: [
      {id: 1, name: "iPad6,7", model: "A1584 (WiFi)", weight: 710},
      {id: 2, name: "iPad6,8", model: "A1652 (蜂窝)", weight: 720}
    ],
    release: "2015-09-11"
  },
  {
    name: "iPad Pro 1 9.7",
    name_short: "Pro 1",
    active: false,
    screen_size: "9.7",
    screen_resolution: "2048 x 1536",
    screen_density: "264",
    width: 240,
    height: 169.5,
    thickness: 6.1,
    os: {
      init: "iOS 9.3",
      last: lastOS
    },
    cpu: {
      model: 'A9X',
      rate: '2.26',
      core: 2
    },
    gpu: {
      model: "PowerVR Series 7XT",
      core: 12
    },
    memory: [
      {size: "2", type: "DDR4"}
    ],
    storage: ["32", "128", "256"],
    price: "",
    battery: "7306",
    models: [
      {id: 1, name: "iPad6,3", model: "A1673 (WiFi)", weight: 437},
      {id: 2, name: "iPad6,4", model: "A1674 or A1675 (WiFi + 蜂窝)", weight: 444}
    ],
    release: "2016-05-31"
  },

  // iPad pro 2 generation
  {
    name: "iPad Pro 2 12.9",
    name_short: "Pro 2",
    active: false,
    screen_size: "12.9",
    screen_resolution: "2732 x 2048",
    screen_density: "264",
    width: 240,
    height: 169.5,
    thickness: 6.1,
    os: {
      init: "iOS 10.3.2",
      last: lastOS
    },
    cpu: {
      model: 'A10X',
      rate: '2.36',
      core: 6
    },
    gpu: {
      model: "PowerVR Series 7XT",
      core: 12
    },
    memory: [
      {size: "4", type: "DDR4"}
    ],
    storage: ["64", "256", "512"],
    price: "",
    battery: "10875",
    models: [
      {id: 1, name: "iPad7,1", model: "A1670 (WiFi)", weight: 677},
      {id: 2, name: "iPad7,2", model: "A1671 (WiFi + 蜂窝)", weight: 692}
    ],
    release: "2017-06-13"
  },
  {
    name: "iPad Pro 2 10.5",
    name_short: "Pro 2",
    active: false,
    screen_size: "10.5",
    screen_resolution: "2224 x 1668",
    screen_density: "264",
    width: 240,
    height: 169.5,
    thickness: 6.1,
    os: {
      init: "iOS 9.1",
      last: lastOS
    },
    cpu: {
      model: 'A10X',
      rate: '2.36',
      core: 6
    },
    gpu: {
      model: "PowerVR Series 7XT",
      core: 12
    },
    memory: [
      {size: "4", type: "DDR4"}
    ],
    storage: ["64", "256", "512"],
    price: "",
    battery: "8134",
    models: [
      {id: 1, name: "iPad7,3", model: "A1701 (WiFi)", weight: 469},
      {id: 2, name: "iPad7,4", model: "A1709 (WiFi + 蜂窝)", weight: 477}
    ],
    release: "2017-06-13"
  },

  // iPad pro 3 generation
  {
    name: "iPad Pro 3 12.9",
    name_short: "Pro 3",
    active: false,
    screen_size: "12.9",
    screen_resolution: "2732 x 2048",
    screen_density: "264",
    width: 280.6,
    height: 241.9,
    thickness: 5.9,
    os: {
      init: "iOS 12.1",
      last: lastOS
    },
    cpu: {
      model: 'A12X',
      rate: '2.36',
      core: 8
    },
    gpu: {
      model: "Apple GPU",
      core: 7
    },
    memory: [
      {name: "<1T", size: "4", type: "DDR4X"},
      {name: "=1T", size: "6", type: "DDR4X"}
    ],
    storage: ["64", "256", "512", "1024"],
    price: "",
    battery: "9720",
    models: [
      {id: 1, name: "iPad8,5 (<1TB) iPad8,6 (=1TB)", model: "A1876 (WiFi)", weight: 631},
      {id: 2, name: "iPad8,7 (<1TB)", model: "A1895, A2014 (WiFi + 蜂窝)", weight: 633},
      {id: 3, name: "iPad8,8 (=1TB)", model: "A1983 (WiFi + 蜂窝, 国行)", weight: 633}
    ],
    release: "2018-10-03"
  },
  {
    name: "iPad Pro 3 11",
    name_short: "Pro 3",
    active: false,
    screen_size: "11",
    screen_resolution: "2388 x 1668",
    screen_density: "264",
    width: 247.6,
    height: 178.5,
    thickness: 5.9,
    os: {
      init: "iOS 12.1",
      last: lastOS
    },
    cpu: {
      model: 'A12X',
      rate: '2.36',
      core: 8
    },
    gpu: {
      model: "Apple GPU",
      core: 7
    },
    memory: [
      {name: "<1T", size: "4", type: "DDR4X"},
      {name: "=1T", size: "6", type: "DDR4X"}
    ],
    storage: ["64", "256", "512", "1024"],
    price: "",
    battery: "7812",
    models: [
      {id: 1, name: "iPad8,1 (<1TB) iPad8,2 (=1TB)", model: "A1980 (WiFi)", weight: 468},
      {id: 2, name: "iPad8,3 (<1TB)", model: "A1934, A2013 (WiFi + 蜂窝)", weight: 468},
      {id: 3, name: "iPad8,4 (=1TB)", model: "A1979 (WiFi + 蜂窝, 国行)", weight: 468},
    ],
    release: "2018-10-03"
  },

  // iPad pro 4 generation
  {
    name: "iPad Pro 4 12.9",
    name_short: "Pro 4",
    active: false,
    screen_size: "12.9",
    screen_resolution: "2732 x 2048",
    screen_density: "264",
    width: 280.6,
    height: 214.9,
    thickness: 5.9,
    os: {
      init: "iPadOS 13.4",
      last: lastOS
    },
    cpu: {
      model: 'A12Z',
      rate: '≈2.5',
      core: 8
    },
    gpu: {
      model: "Apple GPU",
      core: 8
    },
    memory: [],
    storage: ["128", "256", "512", "1024"],
    price: "",
    battery: "28.65 W·h",
    models: [
      {id: 1, name: "iPad", model: "(WiFi)", weight: 471},
      {id: 2, name: "iPad", model: "(WiFi + 蜂窝)", weight: 473},
    ],
    release: "2020-03-18"
  },
  {
    name: "iPad Pro 4 11",
    name_short: "Pro 4",
    active: false,
    screen_size: "11",
    screen_resolution: "2388 x 1688",
    screen_density: "264",
    width: 247.6,
    height: 178.5,
    thickness: 5.9,
    os: {
      init: "iPadOS 13.4",
      last: lastOS
    },
    cpu: {
      model: 'A12Z',
      rate: '≈2.5',
      core: 8
    },
    gpu: {
      model: "Apple GPU",
      core: 8
    },
    memory: [],
    storage: ["128", "256", "512", "1024"],
    price: "",
    battery: "36.71 W·h",
    models: [
      {id: 1, name: "iPad", model: "(WiFi)", weight: 641},
      {id: 2, name: "iPad", model: "(WiFi + 蜂窝)", weight: 643},
    ],
    release: "2020-03-18"
  },
];

const iPadAir =[
  {
    name: "iPad Air",
    name_short: "Air",
    active: false,
    screen_size: "9.7",
    screen_resolution: "2048×1536",
    screen_density: "264",
    width: 238.8,
    height: 167.6,
    thickness: 7.5,
    os: {
      init: "iOS 7.0.3",
      last: "iOS 12.4.5"
    },
    cpu: {
      model: 'A7',
      rate: '1.4',
      core: 2
    },
    gpu: {
      model: "PowerVR G6430",
      core: 4
    },
    memory: [
      {name: "", size: "1", type: "DDR3"},
    ],
    storage: [16, 32, 64, 128],
    price: "",
    battery: "8820",
    models: [
      {id: 1, name: "iPad4,1", model: "A1474 (WiFi)", weight: 469},
      {id: 2, name: "iPad4,2", model: "A1475 (WiFi + 蜂窝)", weight: 478},
    ],
    release: "2013-09-01"
  },
  {
    name: "iPad Air 2",
    name_short: "Air 2",
    active: false,
    screen_size: "9.7",
    screen_resolution: "2048×1536",
    screen_density: "264",
    width: 238.8,
    height: 167.6,
    thickness: 6.1,
    os: {
      init: "iOS 8.1",
      last: lastOS
    },
    cpu: {
      model: 'A8X',
      rate: '1.5',
      core: 3
    },
    gpu: {
      model: "PowerVR GXA6850",
      core: 8
    },
    memory: [
      {name: "", size: "2", type: "DDR3"},
    ],
    storage: [16, 64, 128],
    price: "",
    battery: "7340",
    models: [
      {id: 1, name: "iPad5,3 (WiFi)", model: "A1566 (WiFi)", weight: 437},
      {id: 2, name: "iPad5,4 (WiFi + 蜂窝)", model: "A1567 (WiFi + 蜂窝)", weight: 444},
    ],
    release: "2014-10-22"
  },
  {
    name: "iPad Air 3 2019",
    name_short: "Air 3",
    active: false,
    screen_size: "10.5",
    screen_resolution: "2224 x 1668",
    screen_density: "264",
    width: 248.9,
    height: 172.7,
    thickness: 6.1,
    os: {
      init: "iOS 12.1.4",
      last: lastOS
    },
    cpu: {
      model: 'A12',
      rate: '2.49',
      core: 6
    },
    gpu: {
      model: "Apple GPU",
      core: 4
    },
    memory: [
      {name: "", size: "3", type: "DDR4X"},
    ],
    storage: [64, 256],
    price: "",
    battery: "8134",
    models: [
      {id: 1, name: "iPad11,3", model: "A2152 (WiFi)", weight: 456},
      {id: 2, name: "iPad11,4", model: "A2123, A2153 (WiFi + 蜂窝)", weight: 464},
      {id: 3, name: "iPad11,4", model: "A2154 (WiFi + 蜂窝, 国行)", weight: 464},
    ],
    release: "2019-03-18"
  },
];

const iPadMini =[
  {
    name: "iPad mini",
    name_short: "mini",
    active: false,
    screen_size: "7.9",
    screen_resolution: "1024 x 768",
    screen_density: 163,
    width: 199.9,
    height: 134.6,
    thickness: 7.1,
    os: {
      init: "iOS 6.0",
      last: "iOS 9.3.6"
    },
    cpu: {
      model: 'A5',
      rate: '1',
      core: 2
    },
    gpu: {
      model: "PowerVR SGX543MP2",
      core: 4
    },
    memory: [
      {name: "", size: "0.512", type: "DDR2"},
    ],
    storage: [16, 32, 64],
    price: "",
    battery: "4440",
    models: [
      {id: 1, name: "iPad2,5", model: "A1432 (WiFi)", weight: 310},
      {id: 2, name: "iPad2,6", model: "A1454 (WiFi + 蜂窝)", weight: 310},
      {id: 3, name: "iPad2,7", model: "A1455 (WiFi + 蜂窝 MM)", weight: 310},
    ],
    release: "2012-09-02"
  },
  {
    name: "iPad mini 2",
    name_short: "mini 2",
    active: false,
    screen_size: "7.9",
    screen_resolution: "2048 × 1536",
    screen_density: 326,
    width: 199.9,
    height: 134.6,
    thickness: 7.4,
    os: {
      init: "iOS 7.0",
      last: "iOS 12.4.5"
    },
    cpu: {
      model: 'A7',
      rate: '1.3',
      core: 2
    },
    gpu: {
      model: "PowerVR G6430",
      core: 4
    },
    memory: [
      {name: "", size: "1", type: "DDR3"},
    ],
    storage: [16, 32, 64, 128],
    price: "",
    battery: "6471",
    models: [
      {id: 1, name: "iPad4,4", model: "A1489 (WiFi)", weight: 330},
      {id: 2, name: "iPad4,5", model: "A1490 (WiFi + 蜂窝)", weight: 340},
      {id: 3, name: "iPad4,6", model: "A1491 (WiFi + 蜂窝 TD-LTE)", weight: 340},
    ],
    release: "2013-09-12"
  },
  {
    name: "iPad mini 3",
    name_short: "mini 3",
    active: false,
    screen_size: "7.9",
    screen_resolution: "2048 × 1536",
    screen_density: 326,
    width: 199.9,
    height: 134.6,
    thickness: 7.4,
    os: {
      init: "iOS 8.1",
      last: "iOS 12.4.5"
    },
    cpu: {
      model: 'A7',
      rate: '1.3',
      core: 2
    },
    gpu: {
      model: "PowerVR G6430",
      core: 4
    },
    memory: [
      {name: "", size: "1", type: "DDR3"},
    ],
    storage: [16, 32, 64],
    price: "",
    battery: "6471",
    models: [
      {id: 1, name: "iPad4,7", model: "A1599 (WiFi)", weight: 310},
      {id: 2, name: "iPad4,8", model: "A1600 (WiFi + 蜂窝)", weight: 310},
      {id: 3, name: "iPad4,9", model: "A1601 (WiFi + 蜂窝 TD-LTE)", weight: 310},
    ],
    release: "2014-10-22"
  },
  {
    name: "iPad mini 4",
    name_short: "mini 4",
    active: false,
    screen_size: "7.9",
    screen_resolution: "2048 × 1536",
    screen_density: 326,
    width: 203.2,
    height: 134.6,
    thickness: 6.1,
    os: {
      init: "iOS 9.0",
      last: lastOS
    },
    cpu: {
      model: 'A8',
      rate: '1.5',
      core: 2
    },
    gpu: {
      model: "PowerVR GX6450",
      core: 4
    },
    memory: [
      {name: "", size: "2", type: "DDR3"},
    ],
    storage: [16, 64, 128],
    price: "",
    battery: "5124",
    models: [
      {id: 1, name: "iPad5,1", model: "A1538 (WiFi)", weight: 290},
      {id: 2, name: "iPad5,1", model: "A1550 (WiFi + 蜂窝)", weight: 300},
    ],
    release: "2015-09-09"
  },
  {
    name: "iPad mini 5",
    name_short: "mini 5",
    active: false,
    screen_size: "7.9",
    screen_resolution: "2048 × 1536",
    screen_density: 326,
    width: 203.2,
    height: 134.6,
    thickness: 6.1,
    os: {
      init: "iOS 12.1.4",
      last: lastOS
    },
    cpu: {
      model: 'A12',
      rate: '2.49',
      core: 6
    },
    gpu: {
      model: "Apple GPU",
      core: 4
    },
    memory: [
      {name: "", size: "3", type: "DDR4X"},
    ],
    storage: [64, 256],
    price: "",
    battery: "5124",
    models: [
      {id: 1, name: "iPad11,1", model: "A2133 (WiFi)", weight: 300},
      {id: 2, name: "iPad11,2", model: "A2124, A2126 (WiFi + 蜂窝)", weight: 310},
      {id: 3, name: "iPad11,2", model: "A2125 (WiFi + 蜂窝, 国行)", weight: 310},
    ],
    release: "2019-03-18"
  },
];


const iPad =[
  {
    name: "iPad 1",
    name_short: "iPad 1",
    active: false,
    screen_size: "9.7",
    screen_resolution: "1024 x 768",
    screen_density: 132,
    width: 242.8,
    height: 189.7,
    thickness: 13.4,
    os: {
      init: "iPhoneOS 3.2",
      last: "iOS 5.1.1"
    },
    cpu: {
      model: 'A4',
      rate: '1',
      core: 1
    },
    gpu: {
      model: "PowerVR SGX535",
      core: 1
    },
    memory: [
      {name: "", size: "0.256", type: "DDR"},
    ],
    storage: [16, 32, 64],
    price: "",
    battery: "6613",
    models: [
      {id: 1, name: "iPad1,1", model: "A1219 (WiFi)", weight: 680},
      {id: 2, name: "iPad1,1", model: "A1337 (WiFi + 3G)", weight: 730},
    ],
    release: "2010-04-03"
  },
  {
    name: "iPad 2",
    name_short: "iPad 2",
    active: false,
    screen_size: "9.7",
    screen_resolution: "1024 x 768",
    screen_density: 132,
    width: 241.3,
    height: 185.7,
    thickness: 8.8,
    os: {
      init: "iOS 4.2.1",
      last: "iOS 9.3.6"
    },
    cpu: {
      model: 'A5',
      rate: '1',
      core: 2
    },
    gpu: {
      model: "PowerVR SGX543MP2",
      core: 2
    },
    memory: [
      {name: "", size: "0.512", type: "DDR"},
    ],
    storage: [16, 32, 64],
    price: "",
    battery: "6944",
    models: [
      {id: 1, name: "iPad2,1", model: "A1395 (WiFi)", weight: 601},
      {id: 2, name: "iPad2,2", model: "A1397 (WiFi + 3G CDMA)", weight: 613},
      {id: 3, name: "iPad2,3", model: "A1396 (WiFi + 3G GSM)", weight: 607},
    ],
    release: "2011-03-11"
  },
  {
    name: "iPad 3",
    name_short: "iPad 3",
    active: false,
    screen_size: "9.7",
    screen_resolution: "2048 x 1536",
    screen_density: 264,
    width: 241.3,
    height: 185.7,
    thickness: 9.4,
    os: {
      init: "iOS 5.1",
      last: "iOS 9.3.6"
    },
    cpu: {
      model: 'A5X',
      rate: '1',
      core: 2
    },
    gpu: {
      model: "PowerVR SGX543MP4",
      core: 4
    },
    memory: [
      {name: "", size: "1", type: "DDR2"},
    ],
    storage: [16, 32, 64],
    price: "",
    battery: "11560",
    models: [
      {id: 1, name: "iPad3,1", model: "A1416 (WiFi)", weight: 650},
      {id: 2, name: "iPad3,2", model: "A1403 (WiFi + 蜂窝 VZ)", weight: 660},
      {id: 3, name: "iPad3,3", model: "A1430 (WiFi + 蜂窝)", weight: 660},
    ],
    release: "2012-03-16"
  },
  {
    name: "iPad 4",
    name_short: "iPad 4",
    active: false,
    screen_size: "9.7",
    screen_resolution: "2048 x 1536",
    screen_density: 132,
    width: 241.3,
    height: 185.7,
    thickness: 9.4,
    os: {
      init: "iOS 6.0",
      last: "iOS 10.3.4"
    },
    cpu: {
      model: 'A6X',
      rate: '1.4',
      core: 2
    },
    gpu: {
      model: "PowerVR SGX554MP4",
      core: 4
    },
    memory: [
      {name: "", size: "1", type: "DDR2"},
    ],
    storage: [16, 32, 64, 128],
    price: "",
    battery: "11560",
    models: [
      {id: 1, name: "iPad5,3", model: "A1458 (WiFi)", weight: 650},
      {id: 2, name: "iPad5,4", model: "A1459 (WiFi + 蜂窝)", weight: 660},
      {id: 3, name: "iPad5,4", model: "A1460 (WiFi + 蜂窝 MM)", weight: 660},
    ],
    release: "2012-10-23"
  },
  {
    name: "iPad 5",
    name_short: "iPad 5",
    active: false,
    screen_size: "9.7",
    screen_resolution: "2048 x 1536",
    screen_density: 264,
    width: 238.8,
    height: 167.6,
    thickness: 7.4,
    os: {
      init: "iOS 10.3",
      last: lastOS
    },
    cpu: {
      model: 'A9',
      rate: '1.85',
      core: 2
    },
    gpu: {
      model: "PowerVR GT7600",
      core: 6
    },
    memory: [
      {name: "", size: "2", type: "DDR4"},
    ],
    storage: [32, 128],
    price: "",
    battery: "32.4 W·h",
    models: [
      {id: 1, name: "iPad6,11", model: "A1822 (WiFi)", weight: 469},
      {id: 2, name: "iPad6,12", model: "A1823 (WiFi + 蜂窝)", weight: 478},
    ],
    release: "2017-03-21"
  },
  {
    name: "iPad 6",
    name_short: "iPad 6",
    active: false,
    screen_size: "9.7",
    screen_resolution: "2048 x 1536",
    screen_density: 264,
    width: 238.8,
    height: 167.6,
    thickness: 7.4,
    os: {
      init: "iOS 11.3",
      last: lastOS
    },
    cpu: {
      model: 'A10',
      rate: '2.34',
      core: 4
    },
    gpu: {
      model: "PowerVR GT7600 Plus",
      core: 6
    },
    memory: [
      {name: "", size: "2", type: "DDR4"},
    ],
    storage: [32, 128],
    price: "",
    battery: "32.4 W·h",
    models: [
      {id: 1, name: "iPad7,5", model: "A1893 (WiFi)", weight: 469},
      {id: 2, name: "iPad7,6", model: "A1954 (WiFi + 蜂窝)", weight: 478},
    ],
    release: "2018-03-27"
  },
  {
    name: "iPad 7",
    name_short: "iPad 7",
    active: false,
    screen_size: "10.2",
    screen_resolution: "2160 x 1620",
    screen_density: 264,
    width: 248.9,
    height: 172.7,
    thickness: 7.4,
    os: {
      init: "iOS 13.3",
      last: lastOS
    },
    cpu: {
      model: 'A10',
      rate: '2.34',
      core: 4
    },
    gpu: {
      model: "PowerVR GT7600 Plus",
      core: 6
    },
    memory: [
      {name: "", size: "3", type: "DDR4"},
    ],
    storage: [32, 128],
    price: "",
    battery: "32.4 W·h",
    models: [
      {id: 1, name: "iPad7,11", model: "A2197 (WiFi)", weight: 483},
      {id: 2, name: "iPad7,12", model: "A2200 (WiFi + 蜂窝)", weight: 493},
      {id: 2, name: "iPad7,12", model: "A2198 (WiFi + 蜂窝)", weight: 493},
    ],
    release: "2019-09-10"
  },
];



let app =new Vue({
  el: "#app",
  data: {
    iPadsSeries: [
      {title: "iPad Pro", iPads: iPadPro},
      {title: "iPad Air", iPads: iPadAir},
      {title: "iPad Mini", iPads: iPadMini},
      {title: "iPad", iPads: iPad},
    ]
  },
  methods: {}
});
