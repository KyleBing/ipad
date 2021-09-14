/*****************************
 Create Date: 20200414122339
 Update Date: 20210831230046
 *****************************/

const lastOS = "最新"

const iPadPro = [
   // iPad pro 1 generation
   {
      name: "iPad Pro 1 9.7",
      name_short: "Pro 1",
      active: false,
      screen:
          {
             size: "9.7",
             width: 2048,
             height: 1536,
             density: 264,
             refreshRate: 60,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad6,3", model: "A1673 (WiFi)", weight: 437},
         {id: 2, name: "iPad6,4", model: "A1674 or A1675 (WiFi + 蜂窝)", weight: 444}
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2',
            dimension: ['720p'],
            zoomRate: ''
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/2.2',
               dimension: ['4k 30fps', '1080p 30/60fps', '720p 240fps'],
               zoomRate: '3'
            },
         ]
      },
      release: "2016-05-31"
   },
   {
      name: "iPad Pro 1 12.9",
      name_short: "Pro 1",
      active: false,
      screen:
          {
             size: "12.9",
             width: 2732,
             height: 2048,
             density: 264,
             refreshRate: 60,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad6,7", model: "A1584 (WiFi)", weight: 710},
         {id: 2, name: "iPad6,8", model: "A1652 (蜂窝)", weight: 720}
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2',
            dimension: ['720p'],
            zoomRate: ''
         },
         back: [
            {name: '默认', pixelCount: '800万, ƒ/2.4', dimension: ['1080p 30fps', '720p 120fps'], zoomRate: '3'},
         ]
      },
      release: "2015-09-11"
   },
   // iPad pro 2 generation
   {
      name: "iPad Pro 2 10.5",
      name_short: "Pro 2",
      active: false,
      screen:
          {
             size: "10.5",
             width: 2224,
             height: 1668,
             density: 264,
             refreshRate: 120,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad7,3", model: "A1701 (WiFi)", weight: 469},
         {id: 2, name: "iPad7,4", model: "A1709 (WiFi + 蜂窝)", weight: 477}
      ],
      cameras: {
         front: {
            pixelCount: '700万, ƒ/2.2',
            dimension: ['1080p'],
            zoomRate: ''
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/1.8',
               dimension: ['4k 30fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '3'
            },
         ]
      },
      release: "2017-06-13"
   },
   {
      name: "iPad Pro 2 12.9",
      name_short: "Pro 2",
      active: false,
      screen:
          {
             size: "12.9",
             width: 2732,
             height: 2048,
             density: 264,
             refreshRate: 120,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad7,1", model: "A1670 (WiFi)", weight: 677},
         {id: 2, name: "iPad7,2", model: "A1671 (WiFi + 蜂窝)", weight: 692}
      ],
      cameras: {
         front: {
            pixelCount: '700万, ƒ/2.2',
            dimension: ['1080p'],
            zoomRate: ''
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/1.8',
               dimension: ['4k 30fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '3'
            },
         ]
      },
      release: "2017-06-13"
   },
   // iPad pro 3 generation
   {
      name: "iPad Pro 3 11",
      name_short: "Pro 3",
      active: false,
      screen:
          {
             size: "11",
             width: 2388,
             height: 1668,
             density: 264,
             refreshRate: 120,
          },
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
         {name: "< 1T", size: "4", type: "DDR4X"},
         {name: "= 1T", size: "6", type: "DDR4X"}
      ],
      storage: ["64", "256", "512", "1024"],
      price: "",
      battery: "7812",
      connector: 'USB-C',
      models: [
         {id: 1, name: "iPad8,1 (<1T) iPad8,2 (=1T)", model: "A1980 (WiFi)", weight: 468},
         {id: 2, name: "iPad8,3 (<1T)", model: "A1934, A2013 (WiFi + 蜂窝)", weight: 468},
         {id: 3, name: "iPad8,4 (=1T)", model: "A1979 (WiFi + 蜂窝, 国行)", weight: 468},
      ],
      cameras: {
         front: {
            pixelCount: '700万, ƒ/2.2',
            dimension: ['1080p 30/60fps'],
            zoomRate: '',
            hdr: true
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/1.8',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
         ]
      },
      release: "2018-10-03"
   },
   {
      name: "iPad Pro 3 12.9",
      name_short: "Pro 3",
      active: false,
      screen:
          {
             size: "12.9",
             width: 2732,
             height: 2048,
             density: 264,
             refreshRate: 120,
          },
      width: 280.6,
      height: 214.9,
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
         {name: "< 1T", size: "4", type: "DDR4X"},
         {name: "= 1T", size: "6", type: "DDR4X"}
      ],
      storage: ["64", "256", "512", "1024"],
      price: "",
      battery: "9720",
      connector: 'USB-C',
      models: [
         {id: 1, name: "iPad8,5 (<1T) iPad8,6 (=1T)", model: "A1876 (WiFi)", weight: 631},
         {id: 2, name: "iPad8,7 (<1T)", model: "A1895, A2014 (WiFi + 蜂窝)", weight: 633},
         {id: 3, name: "iPad8,8 (=1T)", model: "A1983 (WiFi + 蜂窝, 国行)", weight: 633}
      ],
      cameras: {
         front: {
            pixelCount: '700万, ƒ/2.2',
            dimension: ['1080p 30/60fps'],
            zoomRate: '',
            hdr: true
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/1.8',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
         ]
      },
      release: "2018-10-03"
   },
   // iPad pro 4 generation
   {
      name: "iPad Pro 4 11",
      name_short: "Pro 4",
      active: false,
      screen:
          {
             size: "11",
             width: 2388,
             height: 1688,
             density: 264,
             refreshRate: 120,
          },
      width: 247.6,
      height: 178.5,
      thickness: 5.9,
      os: {
         init: "iPadOS 13.4",
         last: lastOS
      },
      cpu: {
         model: 'A12Z',
         rate: '2.49',
         core: 8
      },
      gpu: {
         model: "Apple GPU",
         core: 8
      },
      memory: [
         {name: "", size: "6", type: "DDR4X"},
      ],
      storage: ["128", "256", "512", "1024"],
      price: "",
      battery: "7600",
      connector: 'USB-C',
      models: [
         {id: 1, name: "iPad", model: "A2228 (WiFi)", weight: 471},
         {id: 2, name: "iPad", model: "A2068, A2230 (WiFi + 蜂窝)", weight: 473},
         {id: 3, name: "iPad", model: "A2231 (WiFi + 蜂窝, 国行)", weight: 473}
      ],
      cameras: {
         front: {
            pixelCount: '700万, ƒ/2.2',
            dimension: ['1080p 30/60fps'],
            zoomRate: '',
            hdr: true
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/1.8',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
            {
               name: '广角',
               pixelCount: '1000万, ƒ/2.4， 125˚',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
         ]
      },
      release: "2020-03-18"
   },
   {
      name: "iPad Pro 4 12.9",
      name_short: "Pro 4",
      active: false,
      screen:
          {
             size: "12.9",
             width: 2732,
             height: 2048,
             density: 264,
             refreshRate: 120,
          },
      width: 280.6,
      height: 214.9,
      thickness: 5.9,
      os: {
         init: "iPadOS 13.4",
         last: lastOS
      },
      cpu: {
         model: 'A12Z',
         rate: '2.49',
         core: 8
      },
      gpu: {
         model: "Apple GPU",
         core: 8
      },
      memory: [
         {name: "", size: "6", type: "DDR4X"},
      ],
      storage: ["128", "256", "512", "1024"],
      price: "",
      battery: "9737",
      connector: 'USB-C',
      models: [
         {id: 1, name: "iPad", model: "A2229 (WiFi)", weight: 641},
         {id: 2, name: "iPad", model: "A2069, A2232 (WiFi + 蜂窝)", weight: 643},
         {id: 3, name: "iPad", model: "A2233 (WiFi + 蜂窝, 国行)", weight: 643},
      ],
      cameras: {
         front: {
            pixelCount: '700万, ƒ/2.2',
            dimension: ['1080p 30/60fps'],
            zoomRate: '',
            hdr: true
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/1.8',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
            {
               name: '广角',
               pixelCount: '1000万, ƒ/2.4， 125˚',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
         ]
      },
      release: "2020-03-18"
   },
   // iPad pro 5 th
   {
      name: "iPad Pro 5 11",
      name_short: "Pro 5",
      active: false,
      screen:
          {
             size: "11",
             width: 2388,
             height: 1668,
             density: 264,
             refreshRate: 120,
          },
      width: '247.6',
      height: '178.5',
      thickness: '5.9',
      os: {
         init: "iPadOS 14.5",
         last: lastOS
      },
      cpu: {
         model: 'M1',
         rate: '3.2',
         core: '8'
      },
      gpu: {
         model: "Apple GPU",
         core: '8'
      },
      memory: [
         {name: "", size: "8", type: "DDR4X"},
         {name: "≥ 1T", size: "16", type: "DDR4X"},
      ],
      storage: ['128', '256', '512', '1024', '2048'],
      price: "",
      battery: "28.65wh",
      connector: 'USB-C',
      models: [
         {id: 1, name: "", model: "WiFi", weight: 466},
         {id: 2, name: "", model: "WiFi + 蜂窝", weight: 468},
      ],
      cameras: {
         front: {
            pixelCount: '1200万, ƒ/2.4',
            dimension: ['1080p 30/60fps'],
            zoomRate: '',
            hdr: true
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/1.8',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
            {
               name: '广角',
               pixelCount: '1000万, ƒ/2.4， 125˚',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
         ]
      },
      release: "2021-04-21"
   },
   {
      name: "iPad Pro 5 12.9",
      name_short: "Pro 5",
      active: false,
      screen:
          {
             size: "12.9",
             width: 2732,
             height: 2048,
             density: 264,
             refreshRate: 120,
          },
      width: '280.6',
      height: '214.9',
      thickness: '6.4',
      os: {
         init: "iPadOS 14.5",
         last: lastOS
      },
      cpu: {
         model: 'M1',
         rate: '3.2',
         core: '8'
      },
      gpu: {
         model: "Apple GPU",
         core: '8'
      },
      memory: [
         {name: "", size: "8", type: "DDR4X"},
         {name: "≥ 1T", size: "16", type: "DDR4X"},
      ],
      storage: ['128', '256', '512', '1024', '2048'],
      price: "",
      battery: "40.88wh",
      connector: 'USB-C',
      models: [
         {id: 1, name: "", model: "WiFi", weight: 682},
         {id: 2, name: "", model: "WiFi + 蜂窝", weight: 684},
      ],
      cameras: {
         front: {
            pixelCount: '1200万, ƒ/2.4',
            dimension: ['1080p 30/60fps'],
            zoomRate: '',
            hdr: true
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/1.8',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
            {
               name: '广角',
               pixelCount: '1000万, ƒ/2.4， 125˚',
               dimension: ['4k 30/60fps', '1080p 30/60/120fps', '720p 240fps'],
               zoomRate: '5',
               hdr: true
            },
         ]
      },
      release: "2021-04-21"
   },
]
const iPadAir = [
   {
      name: "iPad Air 1",
      name_short: "Air 1",
      active: false,
      screen:
          {
             size: "9.7",
             width: 2048,
             height: 1536,
             density: 264,
             refreshRate: 60,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad4,1", model: "A1474 (WiFi)", weight: 469},
         {id: 2, name: "iPad4,2", model: "A1475 (WiFi + 蜂窝)", weight: 478},
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '500万, ƒ/2.4', dimension: ['1080p 30fps'], zoomRate: '5', hdr: false},
         ]
      },
      release: "2013-09-01"
   },
   {
      name: "iPad Air 2",
      name_short: "Air 2",
      active: false,
      screen:
          {
             size: "9.7",
             width: 2048,
             height: 1536,
             density: 264,
             refreshRate: 60,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad5,3 (WiFi)", model: "A1566 (WiFi)", weight: 437},
         {id: 2, name: "iPad5,4 (WiFi + 蜂窝)", model: "A1567 (WiFi + 蜂窝)", weight: 444},
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万, ƒ/2.4', dimension: ['1080p 30fps'], zoomRate: '5', hdr: false},
         ]
      },
      release: "2014-10-22"
   },
   {
      name: "iPad Air 3 2019",
      name_short: "Air 3",
      active: false,
      screen:
          {
             size: "10.5",
             width: 2224,
             height: 1668,
             density: 264,
             refreshRate: 60,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad11,3", model: "A2152 (WiFi)", weight: 456},
         {id: 2, name: "iPad11,4", model: "A2123, A2153 (WiFi + 蜂窝)", weight: 464},
         {id: 3, name: "iPad11,4", model: "A2154 (WiFi + 蜂窝, 国行)", weight: 464},
      ],
      cameras: {
         front: {
            pixelCount: '700万, ƒ/2.2',
            dimension: ['1080p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万, ƒ/2.4', dimension: ['1080p 30fps'], zoomRate: '5', hdr: false},
         ]
      },
      release: "2019-03-18"
   },
   {
      name: "iPad Air 4",
      name_short: "Air 4",
      active: false,
      screen:
          {
             size: "10.9",
             width: 2360,
             height: 1640,
             density: 264,
             refreshRate: 60,
          },
      width: 247.6,
      height: 178.5,
      thickness: 6.1,
      os: {
         init: "iPadOS 14",
         last: lastOS
      },
      cpu: {
         model: 'A14',
         rate: '2.99',
         core: 6
      },
      gpu: {
         model: "Apple GPU",
         core: "4"
      },
      memory: [
         {name: "", size: "4", type: "--"},
      ],
      storage: [64, 256],
      price: "",
      battery: "28.6 WH",
      connector: 'USB-C',
      models: [
         {id: 1, name: "--", model: "--(WiFi)", weight: 458},
         {id: 2, name: "--", model: "--(WiFi + 蜂窝)", weight: 460},
      ],
      cameras: {
         front: {
            pixelCount: '700万, ƒ/2.0',
            dimension: ['1080p'],
            rate: '',
            zoomRate: '',
            hdr: false
         },
         back: [
            {
               name: '默认',
               pixelCount: '1200万, ƒ/1.8',
               dimension: ['4K 24/30/60fps', '1080p HD 30/60fps'],
               zoomRate: '5',
               hdr: false
            },
         ]
      },
      release: "2020-09-16"
   },
]
const iPadMini = [
    {
      name: "iPad Mini",
      name_short: "Mini 1",
      active: false,
      screen:
          {
             size: "7.9",
             width: 1024,
             height: 768,
             density: 163,
             refreshRate: 60,
          },
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
         model: "PowerVR SGX5400万2",
         core: 4
      },
      memory: [
         {name: "", size: "0.512", type: "DDR2"},
      ],
      storage: [16, 32, 64],
      price: "",
      battery: "4440",
      connector: '闪电',
      models: [
         {id: 1, name: "iPad2,5", model: "A1432 (WiFi)", weight: 310},
         {id: 2, name: "iPad2,6", model: "A1454 (WiFi + 蜂窝)", weight: 310},
         {id: 3, name: "iPad2,7", model: "A1455 (WiFi + 蜂窝 MM)", weight: 310},
      ],
      cameras: {
         front: {
            pixelCount: '120万',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '500万', dimension: ['1080p 30fps'], zoomRate: '5', hdr: false},
         ]
      },
      release: "2012-09-02"
   },
   {
      name: "iPad Mini 2",
      name_short: "Mini 2",
      active: false,
      screen:
          {
             size: "7.9",
             width: 2048,
             height: 1536,
             density: 326,
             refreshRate: 60,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad4,4", model: "A1489 (WiFi)", weight: 330},
         {id: 2, name: "iPad4,5", model: "A1490 (WiFi + 蜂窝)", weight: 340},
         {id: 3, name: "iPad4,6", model: "A1491 (WiFi + 蜂窝 TD-LTE)", weight: 340},
      ],
      cameras: {
         front: {
            pixelCount: '120万',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '500万', dimension: ['1080p 30fps'], zoomRate: '5', hdr: false},
         ]
      },
      release: "2013-09-12"
   },
   {
      name: "iPad Mini 3",
      name_short: "Mini 3",
      active: false,
      screen:
          {
             size: "7.9",
             width: 2048,
             height: 1536,
             density: 326,
             refreshRate: 60,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad4,7", model: "A1599 (WiFi)", weight: 310},
         {id: 2, name: "iPad4,8", model: "A1600 (WiFi + 蜂窝)", weight: 310},
         {id: 3, name: "iPad4,9", model: "A1601 (WiFi + 蜂窝 TD-LTE)", weight: 310},
      ],
      cameras: {
         front: {
            pixelCount: '120万',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '500万', dimension: ['1080p 30fps'], zoomRate: '5', hdr: false},
         ]
      },
      release: "2014-10-22"
   },
   {
      name: "iPad Mini 4",
      name_short: "Mini 4",
      active: false,
      screen:
          {
             size: "7.9",
             width: 2048,
             height: 1536,
             density: 326,
             refreshRate: 60,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad5,1", model: "A1538 (WiFi)", weight: 290},
         {id: 2, name: "iPad5,1", model: "A1550 (WiFi + 蜂窝)", weight: 300},
      ],
      cameras: {
         front: {
            pixelCount: '120万',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万', dimension: ['1080p 30fps'], zoomRate: '3', hdr: false},
         ]
      },
      release: "2015-09-09"
   },
   {
      name: "iPad Mini 5",
      name_short: "Mini 5",
      active: false,
      screen:
          {
             size: "7.9",
             width: 2048,
             height: 1536,
             density: 326,
             refreshRate: 60,
          },
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
      connector: '闪电',
      models: [
         {id: 1, name: "iPad11,1", model: "A2133 (WiFi)", weight: 300},
         {id: 2, name: "iPad11,2", model: "A2124, A2126 (WiFi + 蜂窝)", weight: 310},
         {id: 3, name: "iPad11,2", model: "A2125 (WiFi + 蜂窝, 国行)", weight: 310},
      ],
      cameras: {
         front: {
            pixelCount: '700万',
            dimension: ['1080p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万', dimension: ['1080p 30fps'], zoomRate: '3', hdr: false},
         ]
      },
      release: "2019-03-18"
   },
   {
      name: "iPad Mini 6",
      name_short: "Mini 6",
      active: false,
      screen:
          {
             size: "--",
             width: 0,
             height: 0,
             density: 0,
             refreshRate: 0,
          },
      width: 0,
      height: 0,
      thickness: 0,
      os: {
         init: "iPadOS",
         last: lastOS
      },
      cpu: {
         model: '--',
         rate: '--',
         core: 0
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
      battery: "--",
      connector: 'USB-C',
      models: [
         {id: 1, name: "--", model: "-- (WiFi)", weight: 0},
         {id: 2, name: "--", model: "-- (WiFi + 蜂窝)", weight: 0},
         {id: 3, name: "--", model: "-- (WiFi + 蜂窝, 国行)", weight: 0},
      ],
      cameras: {
         front: {
            pixelCount: '700万',
            dimension: ['1080p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万', dimension: ['1080p 30fps'], zoomRate: '3', hdr: false},
         ]
      },
      release: "2021-09-15"
   },
]
const iPad = [
    {
      name: "iPad 1",
      name_short: "iPad 1",
      active: false,
      screen:
          {
             size: "9.7",
             width: 1024,
             height: 768,
             density: 132,
             refreshRate: 60,
          },
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
      connector: '30针',
      models: [
         {id: 1, name: "iPad1,1", model: "A1219 (WiFi)", weight: 680},
         {id: 2, name: "iPad1,1", model: "A1337 (WiFi + 3G)", weight: 730},
      ],
      cameras: {
         front: {},
         back: []
      },
      release: "2010-04-03"
   },
   {
      name: "iPad 2",
      name_short: "iPad 2",
      active: false,
      screen:
          {
             size: "9.7",
             width: 1024,
             height: 768,
             density: 132,
             refreshRate: 60,
          },
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
         model: "PowerVR SGX5400万2",
         core: 2
      },
      memory: [
         {name: "", size: "0.512", type: "DDR"},
      ],
      storage: [16, 32, 64],
      price: "",
      battery: "6944",
      connector: '30针',
      models: [
         {id: 1, name: "iPad2,1", model: "A1395 (WiFi)", weight: 601},
         {id: 2, name: "iPad2,2", model: "A1397 (WiFi + 3G CDMA)", weight: 613},
         {id: 3, name: "iPad2,3", model: "A1396 (WiFi + 3G GSM)", weight: 607},
      ],
      cameras: {
         front: {
            pixelCount: '30万',
            dimension: '',
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '70万', dimension: ['720p 30fps'], zoomRate: '5', hdr: false},
         ]
      },
      release: "2011-03-11"
   },
   {
      name: "iPad 3",
      name_short: "iPad 3",
      active: false,
      screen:
          {
             size: "9.7",
             width: 2048,
             height: 1536,
             density: 264,
             refreshRate: 60,
          },
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
         model: "PowerVR SGX5400万4",
         core: 4
      },
      memory: [
         {name: "", size: "1", type: "DDR2"},
      ],
      storage: [16, 32, 64],
      price: "",
      battery: "11560",
      connector: '30针',
      models: [
         {id: 1, name: "iPad3,1", model: "A1416 (WiFi)", weight: 650},
         {id: 2, name: "iPad3,2", model: "A1403 (WiFi + 蜂窝 VZ)", weight: 660},
         {id: 3, name: "iPad3,3", model: "A1430 (WiFi + 蜂窝)", weight: 660},
      ],
      cameras: {
         front: {
            pixelCount: '30万',
            dimension: '',
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '500万, f/2.4', dimension: ['1080p 30fps'], zoomRate: '5', hdr: false},
         ]
      },
      release: "2012-03-16"
   },
   {
      name: "iPad 4",
      name_short: "iPad 4",
      active: false,
      screen:
          {
             size: "9.7",
             width: 2048,
             height: 1536,
             density: 132,
             refreshRate: 60,
          },
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
         model: "PowerVR SGX5500万4",
         core: 4
      },
      memory: [
         {name: "", size: "1", type: "DDR2"},
      ],
      storage: [16, 32, 64, 128],
      price: "",
      battery: "11560",
      connector: '闪电',
      models: [
         {id: 1, name: "iPad5,3", model: "A1458 (WiFi)", weight: 650},
         {id: 2, name: "iPad5,4", model: "A1459 (WiFi + 蜂窝)", weight: 660},
         {id: 3, name: "iPad5,4", model: "A1460 (WiFi + 蜂窝 MM)", weight: 660},
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2 ',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '500万, f/2.4', dimension: ['1080p 30fps'], zoomRate: '5', hdr: false},
         ]
      },
      release: "2012-10-23"
   },
   {
      name: "iPad 5",
      name_short: "iPad 5",
      active: false,
      screen:
          {
             size: "9.7",
             width: 2048,
             height: 1536,
             density: 264,
             refreshRate: 60,
          },
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
      battery: "8594",
      connector: '闪电',
      models: [
         {id: 1, name: "iPad6,11", model: "A1822 (WiFi)", weight: 469},
         {id: 2, name: "iPad6,12", model: "A1823 (WiFi + 蜂窝)", weight: 478},
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2 ',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万, ƒ/2.4', dimension: ['1080p 30fps'], zoomRate: '3', hdr: false},
         ]
      },
      release: "2017-03-21"
   },
   {
      name: "iPad 6",
      name_short: "iPad 6",
      active: false,
      screen:
          {
             size: "9.7",
             width: 2048,
             height: 1536,
             density: 264,
             refreshRate: 60,
          },
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
      battery: "8594",
      connector: '闪电',
      models: [
         {id: 1, name: "iPad7,5", model: "A1893 (WiFi)", weight: 469},
         {id: 2, name: "iPad7,6", model: "A1954 (WiFi + 蜂窝)", weight: 478},
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2 ',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万, ƒ/2.4', dimension: ['1080p 30fps'], zoomRate: '3', hdr: false},
         ]
      },
      release: "2018-03-27"
   },
   {
      name: "iPad 7",
      name_short: "iPad 7",
      active: false,
      screen:
          {
             size: "10.2",
             width: 2160,
             height: 1620,
             density: 264,
             refreshRate: 60,
          },
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
         {name: "", size: "3", type: "LPDDR4 DRAM"},
      ],
      storage: [32, 128],
      price: "",
      battery: "8594",
      connector: '闪电',
      models: [
         {id: 1, name: "iPad7,11", model: "A2197 (WiFi)", weight: 483},
         {id: 2, name: "iPad7,12", model: "A2200 (WiFi + 蜂窝)", weight: 493},
         {id: 2, name: "iPad7,12", model: "A2198 (WiFi + 蜂窝)", weight: 493},
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2 ',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万, ƒ/2.4', dimension: ['1080p 30fps'], zoomRate: '3', hdr: false},
         ]
      },
      release: "2019-09-10"
   },
   {
      name: "iPad 8",
      name_short: "iPad 8",
      active: false,
      screen:
          {
             size: "10.2",
             width: 2160,
             height: 1620,
             density: 264,
             refreshRate: 60,
          },
      width: 250.6,
      height: 174.1,
      thickness: 7.5,
      os: {
         init: "iPadOS",
         last: lastOS
      },
      cpu: {
         model: 'A12',
         rate: '2.49',
         core: 6
      },
      gpu: {
         model: "Apple",
         core: 4
      },
      memory: [
         {name: "", size: "3", type: "LPDDR4 DRAM"},
      ],
      storage: [32, 128],
      price: "",
      battery: "32.4 WH",
      connector: '闪电',
      models: [
         {id: 1, name: "iPad11,6", model: "iPad11,6 (WiFi)", weight: 490},
         {id: 2, name: "iPad11,7", model: "iPad11,7 (WiFi + 蜂窝)", weight: 495},
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2 ',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万, ƒ/2.4', dimension: ['1080p 30fps'], zoomRate: '3', hdr: false},
         ]
      },
      release: "2020-09-16"
   },
   {
      name: "iPad 9",
      name_short: "iPad 9",
      active: false,
      screen:
          {
             size: "--",
             width: 0,
             height: 0,
             density: 0,
             refreshRate: 0,
          },
      width: 0,
      height: 0,
      thickness: 0,
      os: {
         init: "iPadOS",
         last: lastOS
      },
      cpu: {
         model: 'A13',
         rate: '2.65',
         core: 6
      },
      gpu: {
         model: "Apple",
         core: 4
      },
      memory: [
         {name: "--", size: "--", type: "LPDDR4 DRAM"},
      ],
      storage: [32, 128],
      price: "",
      battery: "32.4 WH",
      connector: '闪电',
      models: [
         {id: 1, name: "--", model: "-- (WiFi)", weight: 490},
         {id: 2, name: "--", model: "-- (WiFi + 蜂窝)", weight: 495},
      ],
      cameras: {
         front: {
            pixelCount: '120万, ƒ/2.2 ',
            dimension: ['720p'],
            zoomRate: '',
            hdr: false
         },
         back: [
            {name: '默认', pixelCount: '800万, ƒ/2.4', dimension: ['1080p 30fps'], zoomRate: '3', hdr: false},
         ]
      },
      release: "2021-09-15"
   },
]

let app = new Vue({
   el: "#app",
   data: {
      // full screen 相关
      showFullScreenBtn: false,
      didEnteredFullScreen: false,
      // 浏览器参数
      portraitMode: false,
      mobileMode: false,

      keyword: '',
      keywordArray: [],

      latesOS: lastOS,
      allIpads: iPadPro.concat(iPadAir, iPadMini, iPad),
      iPadsSeries: [
         {title: "iPad Pro", iPads: iPadPro},
         {title: "iPad Air", iPads: iPadAir},
         {title: "iPad Mini", iPads: iPadMini},
         {title: "iPad", iPads: iPad},
      ],
      originiPadsSeries: [
         {title: "iPad Pro", iPads: iPadPro},
         {title: "iPad Air", iPads: iPadAir},
         {title: "iPad Mini", iPads: iPadMini},
         {title: "iPad", iPads: iPad},
      ]
   },
   mounted() {
      // 全屏相关
      let chromeCore = /Chrome/i.test(navigator.userAgent)
      let mobileMode = /Mobile/i.test(navigator.userAgent)
      this.portraitMode = window.innerWidth > window.innerHeight
      this.mobileMode = mobileMode
      this.showFullScreenBtn = chromeCore && !mobileMode
   },
   watch: {
      keyword(){
         this.filterIpads()
      }
   },
   methods: {
      // 全屏显示
      enterFullScreen() {
         document.documentElement.requestFullscreen()
      },
      filterIpads() {
         if (this.keyword) {
            let finalKeyword = this.keyword.replace(/ /ig, '')
            this.keywordArray = finalKeyword.split('/')
            let tempCollection = []
            this.keywordArray.forEach(name => {
               this.allIpads.forEach(ipad => {
                  let nameShort = ipad.name_short.replace(/ /ig, '')
                  let reg = new RegExp(name, 'ig')
                  if (reg.test(nameShort)) {
                     tempCollection.push(ipad)
                  }
               })
            })
            this.iPadsSeries = [{
               title: this.keywordArray.join(', '),
               iPads: tempCollection
            }]
         } else {
            this.iPadsSeries = this.originiPadsSeries
         }

      },
   }
})


document.addEventListener('touchstart', ()=>{}, false)

// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
   app.didEnteredFullScreen = Boolean(document.fullscreenElement)
}

