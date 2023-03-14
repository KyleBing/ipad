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
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "9.7",
                width: 2048,
                height: 1536,
                density: 264,
                refreshRate: 60,
                brightness: 0, // nit
                color: '',
                trueTone: false,
                material: 'IPS'
            },
        width: 240,
        height: 169.5,
        thickness: 6.1,
        os: {
            init: "iOS 9.3",
            last: lastOS
        },
        geekbenchScore: 1175,
        cpu: {
            model: 'A9X',
            rate: '2.26',
            core: 2
        },
        gpu: {
            model: "PowerVR 7XT",
            core: 12
        },
        memory: [
            {size: "2", type: "LPDDR4"}
        ],
        storage: ["32", "128", "256"],
        price: "",
        battery: {
            capacity: 7306, // 容量 mah
            capacityWH: 27.91, // wh
            voltage: 3.82 // 电压 v
        },
        connector: ['闪电', '智能接点', '3.5mm音频接口'],
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad6,3", model: "A1673 (WiFi)", weight: 437},
            {id: 2, name: "iPad6,4", model: "A1674 or A1675 (WiFi + 蜂窝)", weight: 444}
        ],
        cameras: {
            front: {
                pixelCount: '120万, ƒ/2.2',
                dimension: [{size: '720p', fps: []}],
                zoomRate: ''
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/2.2',
                    dimension: [
                        {size: '4k', fps: [30]},
                        {size: '1080p', fps: [30,60]},
                        {size: '720p', fps: [240]}
                    ],
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
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "12.9",
                width: 2732,
                height: 2048,
                density: 264,
                refreshRate: 60,
                brightness: 0, // nit
                color: '',
                trueTone: false,
                material: 'IPS'
            },
        width: 305.7,
        height: 220.6,
        thickness: 6.9,
        os: {
            init: "iOS 9.1",
            last: lastOS
        },
        geekbenchScore: 1188,
        cpu: {
            model: 'A9X',
            rate: '2.26',
            core: 2
        },
        gpu: {
            model: "PowerVR 7XT",
            core: 12
        },
        memory: [
            {size: "4", type: "LPDDR4"}
        ],
        storage: ["32", "128", "256"],
        price: "",
        battery: {
            capacity: 10307, // 容量 mah
            capacityWH: 38.8, // wh
            voltage: 3.77 // 电压 v
        },
        connector: ['闪电', '智能接点', '3.5mm音频接口'],
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad6,7", model: "A1584 (WiFi)", weight: 710},
            {id: 2, name: "iPad6,8", model: "A1652 (蜂窝)", weight: 720}
        ],
        cameras: {
            front: {
                pixelCount: '120万, ƒ/2.2',
                dimension: [{size: '720p', fps: []}],
                zoomRate: ''
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万, ƒ/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                        {size: '720p', fps: [120]}
                    ],
                    zoomRate: '3'},
            ]
        },
        release: "2015-09-11"
    },
    // iPad pro 2 generation
    {
        name: "iPad Pro 2 10.5",
        name_short: "Pro 2",
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "10.5",
                width: 2224,
                height: 1668,
                density: 264,
                refreshRate: 120,
                brightness: 0, // nit
                color: '',
                trueTone: false,
                material: 'IPS',
            },
        width: 250.6,
        height: 174.1,
        thickness: 6.1,
        os: {
            init: "iOS 9.1",
            last: lastOS
        },
        geekbenchScore: 2263,
        cpu: {
            model: 'A10X',
            rate: '2.36',
            core: 6
        },
        gpu: {
            model: "PowerVR 7XT",
            core: 12
        },
        memory: [
            {size: "4", type: "LPDDR4"}
        ],
        storage: ["64", "256", "512"],
        price: "",
        battery: {
            capacity: 8134, // 容量 mah
            capacityWH: 30.8, // wh
            voltage: 3.77 // 电压 v
        },
        connector: ['闪电', '智能接点', '3.5mm音频接口'],
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
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
                    dimension: [
                        {size: '4k', fps: [30]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
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
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "12.9",
                width: 2732,
                height: 2048,
                density: 264,
                refreshRate: 120,
                brightness: 0, // nit
                color: '',
                trueTone: false,
                material: 'IPS',
            },
        width: 305.7,
        height: 220.6,
        thickness: 6.9,
        os: {
            init: "iOS 10.3.2",
            last: lastOS
        },
        geekbenchScore: 2276,
        cpu: {
            model: 'A10X',
            rate: '2.36',
            core: 6
        },
        gpu: {
            model: "PowerVR 7XT",
            core: 12
        },
        memory: [
            {size: "4", type: "LPDDR4"}
        ],
        storage: ["64", "256", "512"],
        price: "",
        battery: {
            capacity: 10875, // 容量 mah
            capacityWH: 41, // wh
            voltage: 3.77 // 电压 v
        },
        connector: ['闪电', '智能接点', '3.5mm音频接口'],
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad7,1", model: "A1670 (WiFi)", weight: 677},
            {id: 2, name: "iPad7,2", model: "A1671 (WiFi + 蜂窝)", weight: 692}
        ],
        cameras: {
            front: {
                pixelCount: '700万, ƒ/2.2',
                dimension: [
                    {size: '1080p', fps: []},
                ],
                zoomRate: ''
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [30]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
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
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "11",
                width: 2388,
                height: 1668,
                density: 264,
                refreshRate: 120,
                brightness: 600, // nit
                colorP3: true,
                trueTone: true,
            },
        width: 247.6,
        height: 178.5,
        thickness: 5.9,
        os: {
            init: "iOS 12.1",
            last: lastOS
        },
        geekbenchScore: 4622,
        cpu: {
            model: 'A12X',
            rate: '2.36',
            core: 8
        },
        gpu: {
            model: "Apple",
            core: 7
        },
        memory: [
            {name: "< 1T", size: "4", type: "LPDDR4X"},
            {name: "= 1T", size: "6", type: "LPDDR4X"}
        ],
        storage: ["64", "256", "512", "1024"],
        price: "",
        battery: {
            capacity: 7812, // 容量 mah
            capacityWH: 29.45, // wh
            voltage: 3.77 // 电压 v
        },
        connector: ['USB-C', '智能接点', '磁力接点'],
        mechanicalKeys: ['开关机键','音量增减键'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['面容解锁'],
        models: [
            {id: 1, name: "iPad8,1 (<1T) iPad8,2 (=1T)", model: "A1980 (WiFi)", weight: 468},
            {id: 2, name: "iPad8,3 (<1T)", model: "A1934, A2013 (WiFi + 蜂窝)", weight: 468},
            {id: 3, name: "iPad8,4 (=1T)", model: "A1979 (WiFi + 蜂窝, 国行)", weight: 468},
        ],
        cameras: {
            front: {
                pixelCount: '700万, ƒ/2.2',
                dimension: [
                    {size: '1080p', fps: [30, 60]},
                ],
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
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
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "12.9",
                width: 2732,
                height: 2048,
                density: 264,
                refreshRate: 120,
                brightness: 600, // nit
                colorP3: true,
                trueTone: true,
            },
        width: 280.6,
        height: 214.9,
        thickness: 5.9,
        os: {
            init: "iOS 12.1",
            last: lastOS
        },
        geekbenchScore: 4768,
        cpu: {
            model: 'A12X',
            rate: '2.36',
            core: 8
        },
        gpu: {
            model: "Apple",
            core: 7
        },
        memory: [
            {name: "< 1T", size: "4", type: "LPDDR4X"},
            {name: "= 1T", size: "6", type: "LPDDR4X"}
        ],
        storage: ["64", "256", "512", "1024"],
        price: "",
        battery: {
            capacity: 9720, // 容量 mah
            capacityWH: 36.55, // wh
            voltage: 3.76 // 电压 v
        },
        connector: ['USB-C', '智能接点', '磁力接点'],
        mechanicalKeys: ['开关机键','音量增减键'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['面容解锁'],
        models: [
            {id: 1, name: "iPad8,5 (<1T) iPad8,6 (=1T)", model: "A1876 (WiFi)", weight: 631},
            {id: 2, name: "iPad8,7 (<1T)", model: "A1895, A2014 (WiFi + 蜂窝)", weight: 633},
            {id: 3, name: "iPad8,8 (=1T)", model: "A1983 (WiFi + 蜂窝, 国行)", weight: 633}
        ],
        cameras: {
            front: {
                pixelCount: '700万, ƒ/2.2',
                dimension: [
                    {size: '1080p', fps: [30, 60]},
                ],
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
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
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "11",
                width: 2388,
                height: 1688,
                density: 264,
                refreshRate: 120,
                brightness: 600, // nit
                colorP3: true,
                trueTone: true,
            },
        width: 247.6,
        height: 178.5,
        thickness: 5.9,
        os: {
            init: "iPadOS 13.4",
            last: lastOS
        },
        geekbenchScore: 4649,
        cpu: {
            model: 'A12Z',
            rate: '2.49',
            core: 8
        },
        gpu: {
            model: "Apple",
            core: 8
        },
        memory: [
            {name: "", size: "6", type: "LPDDR4X"},
        ],
        storage: ["128", "256", "512", "1024"],
        price: "",
        battery: {
            capacity: 7812, // 容量 mah
            capacityWH: 29.45, // wh
            voltage: 3.77 // 电压 v
        },
        connector: ['USB-C', '智能接点', '磁力接点'],
        mechanicalKeys: ['开关机键','音量增减键'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['面容解锁'],
        models: [
            {id: 1, name: "iPad8,9", model: "A2228 (WiFi)", weight: 471},
            {id: 2, name: "iPad8,10", model: "A2068, A2230 (WiFi + 蜂窝)", weight: 473},
            {id: 3, name: "iPad", model: "A2231 (WiFi + 蜂窝, 国行)", weight: 473}
        ],
        cameras: {
            front: {
                pixelCount: '700万, ƒ/2.2',
                dimension: [
                    {size: '1080p', fps: [30, 60]},
                ],
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
                {
                    name: '广角',
                    pixelCount: '1000万, ƒ/2.4， 125˚',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
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
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "12.9",
                width: 2732,
                height: 2048,
                density: 264,
                refreshRate: 120,
                brightness: 600, // nit
                colorP3: true,
                trueTone: true,
            },
        width: 280.6,
        height: 214.9,
        thickness: 5.9,
        os: {
            init: "iPadOS 13.4",
            last: lastOS
        },
        geekbenchScore: 4664,
        cpu: {
            model: 'A12Z',
            rate: '2.49',
            core: 8
        },
        gpu: {
            model: "Apple",
            core: 8
        },
        memory: [
            {name: "", size: "6", type: "LPDDR4X"},
        ],
        storage: ["128", "256", "512", "1024"],
        price: "",
        battery: {
            capacity: 9720, // 容量 mah
            capacityWH: 36.55, // wh
            voltage: 3.76 // 电压 v
        },
        connector: ['USB-C', '智能接点', '磁力接点'],
        mechanicalKeys: ['开关机键','音量增减键'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['面容解锁'],
        models: [
            {id: 1, name: "iPad8,11", model: "A2229 (WiFi)", weight: 641},
            {id: 2, name: "iPad,12", model: "A2069, A2232 (WiFi + 蜂窝)", weight: 643},
            {id: 3, name: "iPad", model: "A2233 (WiFi + 蜂窝, 国行)", weight: 643},
        ],
        cameras: {
            front: {
                pixelCount: '700万, ƒ/2.2',
                dimension: [
                    {size: '1080p', fps: [30, 60]},
                ],
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
                {
                    name: '广角',
                    pixelCount: '1000万, ƒ/2.4， 125˚',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
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
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "11",
                width: 2388,
                height: 1668,
                density: 264,
                refreshRate: 120,
                brightness: 600, // nit
                colorP3: true,
                trueTone: true,
            },
        width: '247.6',
        height: '178.5',
        thickness: '5.9',
        os: {
            init: "iPadOS 14.5",
            last: lastOS
        },
        geekbenchScore: 7203,
        cpu: {
            model: 'M1',
            rate: '3.2',
            core: '8'
        },
        gpu: {
            model: "Apple",
            core: '8'
        },
        memory: [
            {name: "", size: "8", type: "LPDDR4X"},
            {name: "≥ 1T", size: "16", type: "LPDDR4X"},
        ],
        storage: ['128', '256', '512', '1024', '2048'],
        price: "",
        battery: {
            capacity: 7599, // 容量 mah
            capacityWH: 28.65, // wh
            voltage: 3.77 // 电压 v
        },
        connector: ['雷雳3', '智能接点', '磁力接点'],
        mechanicalKeys: ['开关机键','音量增减键'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['面容解锁'],
        models: [
            {id: 1, name: "iPad13,4", model: "A2377 WiFi", weight: 466},
            {id: 2, name: "iPad13,5", model: "A2459 WiFi + 蜂窝", weight: 470},
            {id: 3, name: "iPad13,6", model: "A2301 WiFi + 蜂窝 + mmWave", weight: 470},
            {id: 4, name: "iPad13,7", model: "A2460 WiFi + 蜂窝,国行", weight: 470},
        ],
        cameras: {
            front: {
                pixelCount: '1200万, ƒ/2.4',
                dimension: [
                    {size: '1080p', fps: [30, 60]},
                ],
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
                {
                    name: '广角',
                    pixelCount: '1000万, ƒ/2.4， 125˚',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
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
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "12.9",
                width: 2732,
                height: 2048,
                density: 264,
                refreshRate: 120,
                brightness: 600, // nit
                colorP3: true,
                trueTone: true,
            },
        width: '280.6',
        height: '214.9',
        thickness: '6.4',
        os: {
            init: "iPadOS 14.5",
            last: lastOS
        },
        geekbenchScore: 7206,
        cpu: {
            model: 'M1',
            rate: '3.2',
            core: '8'
        },
        gpu: {
            model: "Apple",
            core: '8'
        },
        memory: [
            {name: "", size: "8", type: "LPDDR4X"},
            {name: "≥ 1T", size: "16", type: "LPDDR4X"},
        ],
        storage: ['128', '256', '512', '1024', '2048'],
        price: "",
        battery: {
            capacity: 10872, // 容量 mah
            capacityWH: 40.88, // wh
            voltage: 3.76 // 电压 v
        },
        connector: ['雷雳3', '智能接点', '磁力接点'],
        mechanicalKeys: ['开关机键','音量增减键'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['面容解锁'],
        models: [
            {id: 1, name: "iPad13,8", model: "A2378 WiFi", weight: 682},
            {id: 2, name: "iPad13,9", model: "A2461 WiFi + 蜂窝", weight: 685},
            {id: 3, name: "iPad13,10", model: "A2379 WiFi + 蜂窝 + mmWave", weight: 685},
            {id: 4, name: "iPad13,11", model: "A2462 WiFi + 蜂窝,国行", weight: 685},
        ],
        cameras: {
            front: {
                pixelCount: '1200万, ƒ/2.4',
                dimension: [
                    {size: '1080p', fps: [30, 60,]},
                ],
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
                {
                    name: '广角',
                    pixelCount: '1000万, ƒ/2.4， 125˚',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
            ]
        },
        release: "2021-04-21"
    },
    // iPad pro 6 th
    {
        name: "iPad Pro 6 11",
        name_short: "Pro 6",
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "11",
                width: 2388,
                height: 1668,
                density: 264,
                refreshRate: 120,
                brightness: 600, // nit
                colorP3: true,
                trueTone: true,
            },
        width: '247.6',
        height: '178.5',
        thickness: '5.9',
        os: {
            init: "iPadOS 16",
            last: lastOS
        },
        geekbenchScore: 8396,
        cpu: {
            model: 'M2',
            rate: '3.49',
            core: '8'
        },
        gpu: {
            model: "Apple",
            core: '10'
        },
        memory: [
            {name: "", size: "8", type: "LPDDR5"},
            {name: "≥ 1T", size: "16", type: "LPDDR5"},
        ],
        storage: ['128', '256', '512', '1024', '2048'],
        price: "",
        battery: {
            capacity: 0, // 容量 mah
            capacityWH: 28.65, // wh
            voltage: 0 // 电压 v
        },
        connector: ['雷雳3', '智能接点', '磁力接点'],
        mechanicalKeys: ['开关机键','音量增减键'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['面容解锁'],
        models: [
            {id: 1, name: "iPad14,3", model: "WiFi", weight: 466},
            {id: 2, name: "iPad14,4", model: "WiFi + 蜂窝", weight: 468},
        ],
        cameras: {
            front: {
                pixelCount: '1200万, ƒ/2.4',
                dimension: [
                    {size: '1080p', fps: [30, 60]},
                ],
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
                {
                    name: '广角',
                    pixelCount: '1000万, ƒ/2.4， 125˚',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
            ]
        },
        release: "2022-10-19"
    },
    {
        name: "iPad Pro 6 12.9",
        name_short: "Pro 6",
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "12.9",
                width: 2732,
                height: 2048,
                density: 264,
                refreshRate: 120,
                brightness: 600, // nit
                colorP3: true,
                trueTone: true,
                xdr: true,
                xdrRange: [1000, 1600], // nit
            },
        width: '280.6',
        height: '214.9',
        thickness: '6.4',
        os: {
            init: "iPadOS 16",
            last: lastOS
        },
        geekbenchScore: 8416,
        cpu: {
            model: 'M2',
            rate: '3.49',
            core: '8'
        },
        gpu: {
            model: "Apple",
            core: '10'
        },
        memory: [
            {name: "", size: "8", type: "LPDDR5"},
            {name: "≥ 1T", size: "16", type: "LPDDR5"},
        ],
        storage: ['128', '256', '512', '1024', '2048'],
        price: "",
        battery: {
            capacity: 0, // 容量 mah
            capacityWH: 40.88, // wh
            voltage: 0 // 电压 v
        },
        connector: ['雷雳3', '智能接点', '磁力接点'],
        mechanicalKeys: ['开关机键','音量增减键'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['面容解锁'],
        models: [
            {id: 1, name: "iPad14,5", model: "WiFi", weight: 682},
            {id: 2, name: "iPad14,6", model: "WiFi + 蜂窝", weight: 684},
        ],
        cameras: {
            front: {
                pixelCount: '1200万, ƒ/2.4',
                dimension: [
                    {size: '1080p', fps: [30, 60,]},
                ],
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
                {
                    name: '广角',
                    pixelCount: '1000万, ƒ/2.4， 125˚',
                    dimension: [
                        {size: '4k', fps: [30,60]},
                        {size: '1080p', fps: [30, 60, 120]},
                        {size: '720p', fps: [240]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
            ]
        },
        release: "2022-10-19"
    },
]
const iPadAir = [
    {
        name: "iPad Air 1",
        name_short: "Air 1",
        active: false,
        isPreview: false,
        isNew: false,
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
            last: "iOS 12.5.5"
        },
        geekbenchScore: 530,
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
            {name: "", size: "1", type: "LPDDR3"},
        ],
        storage: [16, 32, 64, 128],
        price: "",
        battery: {
            capacity: 8820, // 容量 mah
            capacityWH: 32.9, // wh
            voltage: 3.73 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad4,1", model: "A1474 (WiFi)", weight: 469},
            {id: 2, name: "iPad4,2", model: "A1475 (WiFi + 蜂窝)", weight: 478},
        ],
        cameras: {
            front: {
                pixelCount: '120万, ƒ/2.2',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '500万, ƒ/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false},
            ]
        },
        release: "2013-09-01"
    },
    {
        name: "iPad Air 2",
        name_short: "Air 2",
        active: false,
        isPreview: false,
        isNew: false,
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
            last: "iPadOS 15"
        },
        geekbenchScore: 1055,
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
            {name: "", size: "2", type: "LPDDR3"},
        ],
        storage: [16, 64, 128],
        price: "",
        battery: {
            capacity: 7340, // 容量 mah
            capacityWH: 27.62, // wh
            voltage: 3.76 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad5,3 (WiFi)", model: "A1566 (WiFi)", weight: 437},
            {id: 2, name: "iPad5,4 (WiFi + 蜂窝)", model: "A1567 (WiFi + 蜂窝)", weight: 444},
        ],
        cameras: {
            front: {
                pixelCount: '120万, ƒ/2.2',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万, ƒ/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false},
            ]
        },
        release: "2014-10-22"
    },
    {
        name: "iPad Air 3 2019",
        name_short: "Air 3",
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "10.5",
                width: 2224,
                height: 1668,
                density: 264,
                refreshRate: 60,
                colorP3: true,
                trueTone: true,
            },
        width: 248.9,
        height: 172.7,
        thickness: 6.1,
        os: {
            init: "iOS 12.1.4",
            last: lastOS
        },
        geekbenchScore: 2838,
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
            {name: "", size: "3", type: "LPDDR4X"},
        ],
        storage: [64, 256],
        price: "",
        battery: {
            capacity: 8134, // 容量 mah
            capacityWH: 30.2, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad11,3", model: "A2152 (WiFi)", weight: 456},
            {id: 2, name: "iPad11,4", model: "A2123, A2153 (WiFi + 蜂窝)", weight: 464},
            {id: 3, name: "iPad11,4", model: "A2154 (WiFi + 蜂窝, 国行)", weight: 464},
        ],
        cameras: {
            front: {
                pixelCount: '700万, ƒ/2.2',
                dimension: [
                    {size: '1080p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万, ƒ/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false
                },
            ]
        },
        release: "2019-03-18"
    },
    {
        name: "iPad Air 4",
        name_short: "Air 4",
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "10.9",
                width: 2360,
                height: 1640,
                density: 264,
                refreshRate: 60,
                colorP3: true,
                trueTone: true,
            },
        width: 247.6,
        height: 178.5,
        thickness: 6.1,
        os: {
            init: "iPadOS 14",
            last: lastOS
        },
        geekbenchScore: 4206,
        cpu: {
            model: 'A14',
            rate: '2.99',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: "4"
        },
        memory: [
            {name: "", size: "4", type: "LPDDR4X"},
        ],
        storage: [64, 256],
        price: "",
        battery: {
            capacity: 0, // 容量 mah
            capacityWH: 28.6, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键'],
        connector: ['USB-C'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad13,1", model: "A2316 (WiFi)", weight: 458},
            {id: 2, name: "iPad13,2", model: "A2324, A2072(WiFi + 蜂窝)", weight: 460},
            {id: 2, name: "iPad", model: "A2325 (WiFi + 蜂窝，国行)", weight: 460},
        ],
        cameras: {
            front: {
                pixelCount: '700万, ƒ/2.0',
                dimension: [
                    {size: '1080p', fps: []},
                ],
                rate: '',
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [24, 30,60]},
                        {size: '1080p', fps: [30, 60]},
                    ],
                    zoomRate: '5',
                    hdr: false
                },
            ]
        },
        release: "2020-09-16"
    },
    {
        name: "iPad Air 5",
        name_short: "Air 5",
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "10.9",
                width: 2360,
                height: 1640,
                density: 264,
                refreshRate: 60,
                brightness: 500, // nit
                colorP3: true,
                trueTone: true,
            },
        width: 247.6,
        height: 178.5,
        thickness: 6.1,
        os: {
            init: "iPadOS 15",
            last: lastOS
        },
        geekbenchScore: 7128,
        cpu: {
            model: 'M1',
            rate: '3.20',
            core: 8
        },
        gpu: {
            model: "Apple",
            core: "8"
        },
        memory: [
            {name: "", size: "8", type: "LPDDR4X SDRAM"},
        ],
        storage: [64, 256],
        price: "",
        battery: {
            capacity: 0, // 容量 mah
            capacityWH: 28.6, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键'],
        connector: ['USB-C', '智能接点', '磁力接点'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad13,16", model: "A2588 (WiFi)", weight: 458},
            {id: 2, name: "iPad13,17", model: "A2589, A2072(WiFi + 蜂窝)", weight: 460},
            {id: 2, name: "iPad13", model: "A2591 (WiFi + 蜂窝，国行)", weight: 460},
        ],
        cameras: {
            front: {
                pixelCount: '1200万, ƒ/2.4',
                dimension: [
                    {size: '1080p', fps: []},
                ],
                rate: '',
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: true
                },
            ]
        },
        release: "2022-03-18"
    }
]
const iPadMini = [
    {
        name: "iPad Mini",
        name_short: "Mini 1",
        colors: ['Silver', 'Slate'],
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "7.9",
                width: 1024,
                height: 768,
                density: 163,
                refreshRate: 60,
                material: 'IPS LCD',
            },
        width: 199.9,
        height: 134.6,
        thickness: 7.1,
        os: {
            init: "iOS 6.0",
            last: "iOS 9.3.6"
        },
        geekbenchScore: 0,
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
        battery: {
            capacity: 4440, // 容量 mah
            capacityWH: 0, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad2,5", model: "A1432 (WiFi)", weight: 310},
            {id: 2, name: "iPad2,6", model: "A1454 (WiFi + 蜂窝)", weight: 310},
            {id: 3, name: "iPad2,7", model: "A1455 (WiFi + 蜂窝 MM)", weight: 310},
        ],
        cameras: {
            front: {
                pixelCount: '120万',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '500万',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false},
            ]
        },
        release: "2012-09-02"
    },
    {
        name: "iPad Mini 2",
        name_short: "Mini 2",
        colors: ['Silver', 'Space Gray'],
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "7.9",
                width: 2048,
                height: 1536,
                density: 326,
                refreshRate: 60,
                material: 'IPS LCD',
            },
        width: 199.9,
        height: 134.6,
        thickness: 7.4,
        os: {
            init: "iOS 7.0",
            last: "iOS 12.4.5"
        },
        geekbenchScore: 490,
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
            {name: "", size: "1", type: "LPDDR3"},
        ],
        storage: [16, 32, 64, 128],
        price: "",
        battery: {
            capacity: 6471, // 容量 mah
            capacityWH: 0, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad4,4", model: "A1489 (WiFi)", weight: 330},
            {id: 2, name: "iPad4,5", model: "A1490 (WiFi + 蜂窝)", weight: 340},
            {id: 3, name: "iPad4,6", model: "A1491 (WiFi + 蜂窝 TD-LTE)", weight: 340},
        ],
        cameras: {
            front: {
                pixelCount: '120万',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '500万',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false
                },
            ]
        },
        release: "2013-09-12"
    },
    {
        name: "iPad Mini 3",
        name_short: "Mini 3",
        colors: ['Silver', 'Gold', 'Space Gray'],
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "7.9",
                width: 2048,
                height: 1536,
                density: 326,
                refreshRate: 60,
                material: 'IPS LCD',
            },
        width: 199.9,
        height: 134.6,
        thickness: 7.4,
        os: {
            init: "iOS 8.1",
            last: "iOS 12.5.5"
        },
        geekbenchScore: 489,
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
            {name: "", size: "1", type: "LPDDR3"},
        ],
        storage: [16, 32, 64],
        price: "",
        battery: {
            capacity: 6471, // 容量 mah
            capacityWH: 0, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad4,7", model: "A1599 (WiFi)", weight: 310},
            {id: 2, name: "iPad4,8", model: "A1600 (WiFi + 蜂窝)", weight: 310},
            {id: 3, name: "iPad4,9", model: "A1601 (WiFi + 蜂窝 TD-LTE)", weight: 310},
        ],
        cameras: {
            front: {
                pixelCount: '120万',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '500万',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false
                },
            ]
        },
        release: "2014-10-22"
    },
    {
        name: "iPad Mini 4",
        name_short: "Mini 4",
        colors: ['Silver', 'Gold', 'Space Gray'],
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "7.9",
                width: 2048,
                height: 1536,
                density: 326,
                refreshRate: 60,
                trueTone: true,
            },
        width: 203.2,
        height: 134.6,
        thickness: 6.1,
        os: {
            init: "iOS 9.0",
            last: "iPadOS 15"
        },
        geekbenchScore: 664,
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
            {name: "", size: "2", type: "LPDDR3"},
        ],
        storage: [16, 64, 128],
        price: "",
        battery: {
            capacity: 5124, // 容量 mah
            capacityWH: 0, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad5,1", model: "A1538 (WiFi)", weight: 290},
            {id: 2, name: "iPad5,1", model: "A1550 (WiFi + 蜂窝)", weight: 300},
        ],
        cameras: {
            front: {
                pixelCount: '120万',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '3',
                    hdr: false},
            ]
        },
        release: "2015-09-09"
    },
    {
        name: "iPad Mini 5",
        name_short: "Mini 5",
        colors: ['Silver', 'Gold', 'Space Gray'],
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "7.9",
                width: 2048,
                height: 1536,
                density: 326,
                refreshRate: 60,
                brightness: 500, // nit
                material: 'IPS LCD',
                colorP3: true,
                trueTone: true,
            },
        width: 203.2,
        height: 134.6,
        thickness: 6.1,
        os: {
            init: "iOS 12.1.4",
            last: lastOS
        },
        geekbenchScore: 2717,
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
            {name: "", size: "3", type: "LPDDR4X"},
        ],
        storage: [64, 256],
        price: "",
        battery: {
            capacity: 5124, // 容量 mah
            capacityWH: 0, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad11,1", model: "A2133 (WiFi)", weight: 300},
            {id: 2, name: "iPad11,2", model: "A2124, A2126 (WiFi + 蜂窝)", weight: 310},
            {id: 3, name: "iPad11,2", model: "A2125 (WiFi + 蜂窝, 国行)", weight: 310},
        ],
        cameras: {
            front: {
                pixelCount: '700万',
                dimension: [
                    {size: '1080p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '3',
                    hdr: false},
            ]
        },
        release: "2019-03-18"
    },
    {
        name: "iPad Mini 6",
        name_short: "Mini 6",
        colors: ['Space Gray', 'Pink', 'Purple', 'Starlight'],
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "8.3",
                width: 2266,
                height: 1488,
                density: 326,
                refreshRate: 60,
                brightness: 500, // nit
                colorP3: true,
                trueTone: true,
            },
        width: 195.4,
        height: 134.8,
        thickness: 6.3,
        os: {
            init: "iPadOS 15",
            last: lastOS
        },
        geekbenchScore: 4455,
        cpu: {
            model: 'A15',
            rate: '2.93',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 5
        },
        memory: [
            {name: "", size: "4", type: "LPDDR4X"},
        ],
        storage: [64, 256],
        price: "",
        battery: {
            capacity: 5124, // 容量 mah
            capacityWH: 19.3, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键'],
        connector: ['USB-C'],
        pencil: ['Apple Pencil 2'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad14,1", model: "A2568  (WiFi)", weight: 290},
            {id: 2, name: "iPad14,2", model: "A2569 (WiFi + 蜂窝)", weight: 300},
        ],
        cameras: {
            front: {
                pixelCount: '1200万 ƒ/2.4',
                dimension: [
                    {size: '1080p', fps: [60]},
                ],
                zoomRate: '',
                hdr: true
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万 ƒ/1.8',
                    dimension: [
                        {size: '4k', fps: [60]},
                    ],
                    zoomRate: '5',
                    hdr: true},
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
        isPreview: false,
        isNew: false,
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
        geekbenchScore: 0,
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
        battery: {
            capacity: 6600, // 容量 mah
            capacityWH: 24.8, // wh
            voltage: 3.75 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['30针'],
        pencil: [],
        unlockMethods: ['指纹解锁'],
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
        isPreview: false,
        isNew: false,
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
        geekbenchScore: 0,
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
            {name: "", size: "0.512", type: "DDR2"},
        ],
        storage: [16, 32, 64],
        price: "",
        battery: {
            capacity: 6944, // 容量 mah
            capacityWH: 0, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['30针'],
        pencil: [],
        unlockMethods: ['指纹解锁'],
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
                {
                    name: '默认',
                    pixelCount: '70万',
                    dimension: [
                        {size: '720p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false},
            ]
        },
        release: "2011-03-11"
    },
    {
        name: "iPad 3",
        name_short: "iPad 3",
        active: false,
        isPreview: false,
        isNew: false,
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
        geekbenchScore: 0,
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
            {name: "", size: "1", type: "LPDDR2"},
        ],
        storage: [16, 32, 64],
        price: "",
        battery: {
            capacity: 11560, // 容量 mah
            capacityWH: 43, // wh
            voltage: 3.7 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['30针'],
        pencil: [],
        unlockMethods: ['指纹解锁'],
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
                {
                    name: '默认',
                    pixelCount: '500万, f/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false},
            ]
        },
        release: "2012-03-16"
    },
    {
        name: "iPad 4",
        name_short: "iPad 4",
        active: false,
        isPreview: false,
        isNew: false,
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
            init: "iOS 6.0",
            last: "iOS 10.3.4"
        },
        geekbenchScore: 0,
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
            {name: "", size: "1", type: "LPDDR2"},
        ],
        storage: [16, 32, 64, 128],
        price: "",
        battery: {
            capacity: 11560, // 容量 mah
            capacityWH: 42.5, // wh
            voltage: 3.7 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        pencil: [],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad5,3", model: "A1458 (WiFi)", weight: 650},
            {id: 2, name: "iPad5,4", model: "A1459 (WiFi + 蜂窝)", weight: 660},
            {id: 3, name: "iPad5,4", model: "A1460 (WiFi + 蜂窝 MM)", weight: 660},
        ],
        cameras: {
            front: {
                pixelCount: '120万, ƒ/2.2 ',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '500万, f/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false},
            ]
        },
        release: "2012-10-23"
    },
    {
        name: "iPad 5",
        name_short: "iPad 5",
        active: false,
        isPreview: false,
        isNew: false,
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
        geekbenchScore: 1020,
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
            {name: "", size: "2", type: "LPDDR4"},
        ],
        storage: [32, 128],
        price: "",
        battery: {
            capacity: 8827, // 容量 mah
            capacityWH: 32.9, // wh
            voltage: 3.7 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        pencil: [],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad6,11", model: "A1822 (WiFi)", weight: 469},
            {id: 2, name: "iPad6,12", model: "A1823 (WiFi + 蜂窝)", weight: 478},
        ],
        cameras: {
            front: {
                pixelCount: '120万, ƒ/2.2 ',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万, ƒ/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '3',
                    hdr: false},
            ]
        },
        release: "2017-03-21"
    },
    {
        name: "iPad 6",
        name_short: "iPad 6",
        active: false,
        isPreview: false,
        isNew: false,
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
        geekbenchScore: 1397,
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
            {name: "", size: "2", type: "LPDDR4"},
        ],
        storage: [32, 128],
        price: "",
        battery: {
            capacity: 8594, // 容量 mah
            capacityWH: 32.4, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad7,5", model: "A1893 (WiFi)", weight: 469},
            {id: 2, name: "iPad7,6", model: "A1954 (WiFi + 蜂窝)", weight: 478},
        ],
        cameras: {
            front: {
                pixelCount: '120万, ƒ/2.2 ',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万, ƒ/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '3',
                    hdr: false},
            ]
        },
        release: "2018-03-27"
    },
    {
        name: "iPad 7",
        name_short: "iPad 7",
        active: false,
        isPreview: false,
        isNew: false,
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
            init: "iOS 13.3",
            last: lastOS
        },
        geekbenchScore: 1384,
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
        battery: {
            capacity: 8594, // 容量 mah
            capacityWH: 32.4, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad7,11", model: "A2197 (WiFi)", weight: 483},
            {id: 2, name: "iPad7,12", model: "A2200 (WiFi + 蜂窝)", weight: 493},
            {id: 2, name: "iPad7,12", model: "A2198 (WiFi + 蜂窝)", weight: 493},
        ],
        cameras: {
            front: {
                pixelCount: '120万, ƒ/2.2 ',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万, ƒ/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '3',
                    hdr: false},
            ]
        },
        release: "2019-09-10"
    },
    {
        name: "iPad 8",
        name_short: "iPad 8",
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "10.2",
                width: 2160,
                height: 1620,
                density: 264,
                refreshRate: 60,
                brightness: 500, // nit
            },
        width: 250.6,
        height: 174.1,
        thickness: 7.5,
        os: {
            init: "iPadOS",
            last: lastOS
        },
        geekbenchScore: 2501,
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
        battery: {
            capacity: 0, // 容量 mah
            capacityWH: 32.4, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad11,6", model: "iPad11,6 (WiFi)", weight: 490},
            {id: 2, name: "iPad11,7", model: "iPad11,7 (WiFi + 蜂窝)", weight: 495},
        ],
        cameras: {
            front: {
                pixelCount: '120万, ƒ/2.2 ',
                dimension: [
                    {size: '720p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万, ƒ/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '3',
                    hdr: false},
            ]
        },
        release: "2020-09-16"
    },
    {
        name: "iPad 9",
        name_short: "iPad 9",
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "10.2",
                width: 2160,
                height: 1620,
                density: 264,
                refreshRate: 60,
                brightness: 500, // nit
            },
        width: 250.6,
        height: 174.1,
        thickness: 7.5,
        os: {
            init: "iPadOS 15",
            last: lastOS
        },
        geekbenchScore: 3310,
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
            {name: "", size: "3", type: "LPDDR4X SDRAM"},
        ],
        storage: [64, 256],
        price: "",
        battery: {
            capacity: 0, // 容量 mah
            capacityWH: 32.4, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键','Home键'],
        connector: ['闪电'],
        pencil: ['Apple Pencil 1'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "iPad12,1", model: "A2602 (WiFi)", weight: 487},
            {id: 2, name: "iPad12,2", model: "A2603 (WiFi + 蜂窝)", weight: 498},
            {id: 3, name: "iPad12", model: "A2604", weight: 0},
            {id: 4, name: "iPad12", model: "A2605", weight: 0},
        ],
        cameras: {
            front: {
                pixelCount: '1200万, ƒ/2.4 ',
                dimension: [
                    {size: '1080p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '800万, ƒ/2.4',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: false},
            ]
        },
        release: "2021-09-15"
    },
    {
        name: "iPad 10",
        name_short: "iPad 10",
        active: false,
        isPreview: false,
        isNew: false,
        screen:
            {
                size: "10.9",
                width: 2360,
                height: 1640,
                density: 264,
                refreshRate: 60,
                brightness: 500, // nit
            },
        width: 248.6,
        height: 179.5,
        thickness: 7,
        os: {
            init: "iPadOS 16",
            last: lastOS
        },
        geekbenchScore: 0,
        cpu: {
            model: 'A14',
            rate: '3.09',
            core: 6
        },
        gpu: {
            model: "Apple",
            core: 4
        },
        memory: [
            {name: "", size: "4", type: 'LPDDR4X SDRAM'},
        ],
        storage: [64, 256],
        price: "",
        battery: {
            capacity: 0, // 容量 mah
            capacityWH: 28.6, // wh
            voltage: 0 // 电压 v
        },
        mechanicalKeys: ['开关机键','音量增减键'],
        connector: ['USB-C'],
        pencil: ['Apple Pencil 1(购买配件)', 'Apple Pencil 2'],
        unlockMethods: ['指纹解锁'],
        models: [
            {id: 1, name: "--", model: "-- (WiFi)", weight: 477},
            {id: 2, name: "--", model: "-- (WiFi + 蜂窝)", weight: 481},
        ],
        cameras: {
            front: {
                pixelCount: '1200万, ƒ/2.4 ',
                dimension: [
                    {size: '1080p', fps: []},
                ],
                zoomRate: '',
                hdr: false
            },
            back: [
                {
                    name: '默认',
                    pixelCount: '1200万, ƒ/1.8',
                    dimension: [
                        {size: '1080p', fps: [30]},
                    ],
                    zoomRate: '5',
                    hdr: true},
            ]
        },
        release: "2022-10-19"
    },
]

const contributors = [
    '许璐','黄朋','微雨中郎', '陈飞虎', 'nvfei', 'Dorcoin'
]

let app = new Vue({
    el: "#app",
    data: {
        // date
        dateEnd: '2023.03.14', // 格式： 2023.03.12
        // thumb up
        pingPongInterval: null,
        thumbsUpKey: 'ipad',
        heartActive: false,
        thumbsUpCount: 0,
        // full screen 相关
        showFullScreenBtn: false,
        didEnteredFullScreen: false,
        // 浏览器参数
        portraitMode: false,
        mobileMode: false,

        // 机型信息筛选
        selectedNames: [], // 已选中的名字
        deviceMap: new Map(),

        latestOS: lastOS,
        allIpads: iPadPro.reverse().concat(iPadAir.reverse(), iPadMini.reverse(), iPad.reverse()),
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
        ],

        // share info
        showShare: false,
        insets: {
            height: innerHeight,
            width: innerWidth
        },
        shareQrCode: null,
        shareQrCodeQQ: null,
        linkAddress: 'http://kylebing.cn/tools/ipad/',
        linkQQ: 'https://jq.qq.com/?_wv=1027&k=Z8E0HrWA'
    },
    mounted() {
        // 全屏相关
        let chromeCore = /Chrome/i.test(navigator.userAgent)
        let mobileMode = /Mobile/i.test(navigator.userAgent)
        this.portraitMode = window.innerWidth > window.innerHeight
        this.mobileMode = mobileMode
        this.showFullScreenBtn = chromeCore && !mobileMode
        this.getInitThumbsUpCount()
        this.websocketInit()

        this.generateDeviceMap()

        // onresize
        onresize = () => {
            this.insets = {
                height: innerHeight,
                width: innerWidth
            }
        }
        this.shareQrCode = QRCode.generatePNG(this.linkAddress, {margin: 1})
        this.shareQrCodeQQ = QRCode.generatePNG(this.linkQQ, {margin: 1})


        console.log(this.yearMaxMin)
    },
    methods: {
        yearStyle(releaseString){
            let year = Number(releaseString.substring(0,4))
            let yearGap = this.yearMaxMin.max - this.yearMaxMin.min
            let percentage = (year - this.yearMaxMin.min) / yearGap
            return `color: hsl(211deg ${80+20*percentage}%  ${30 * percentage + 20}% )`
        },
        toggleShare(){
            this.showShare = !this.showShare
        },

        generateDeviceMap(){
            this.allIpads.forEach(ipadInfo => {
                this.deviceMap.set(ipadInfo.name, ipadInfo)
            })
        },

        // 筛选手机信息
        filterTagToggle(deviceName){
            if (this.selectedNames.includes(deviceName)){
                this.selectedNames.splice(this.selectedNames.indexOf(deviceName), 1)
            } else {
                this.selectedNames.push(deviceName)
            }
            this.updateShowingDevices()

        },
        updateShowingDevices(){
            let filterIpads = this.selectedNames.map(name => this.deviceMap.get(name))
            this.iPadsSeries = [
                {
                    title: '筛选结果',
                    iPads: filterIpads
                }
            ]
            if (filterIpads.length === 0){
                this.iPadsSeries = this.originiPadsSeries
            }
            this.iPadsSeries.push(this.originiPadsSeries[0])
            this.iPadsSeries.pop()
        },

        sortWithGeekbenchScore(){
            this.iPadsSeries = [
                {
                    title: 'GeekBench 多核分数排名',
                    iPads: [].concat(iPadAir, iPadMini, iPad, iPadPro)
                        .sort((a,b) => a.geekbenchScore < b.geekbenchScore? 1 : -1)
                }
            ]
        },
        sortWithBatteryCapacity(){
            this.iPadsSeries = [
                {
                    title: '电量排行',
                    iPads: [].concat(iPadAir, iPadMini, iPad, iPadPro)
                        .sort((a,b) => a.battery.capacity < b.battery.capacity? 1 : -1)
                }
            ]
        },

        sortReset(){
            this.iPadsSeries = this.originiPadsSeries
        },

        // 全屏显示
        enterFullScreen() {
            document.documentElement.requestFullscreen()
        },

        // 点赞功能
        getInitThumbsUpCount(){
            axios.get('../../portal/thumbs-up?key=' + this.thumbsUpKey)
                .then(res => {
                    if (res.data && res.data.data){
                        this.thumbsUpCount = res.data.data
                    }
                })
        },
        websocketInit(){
            this.websocket = new WebSocket('wss://kylebing.cn/ws')
            this.websocket.onopen = this.websocketOnOpen
            this.websocket.onmessage = this.websocketOnMessage
            this.websocket.onerror = this.websocketOnError
            this.websocket.onclose = this.websocketClose
        },
        websocketOnOpen() {
            this.portStatus = 'success'
            this.pingPongInterval = setInterval(()=>{
                if (this.websocket){
                    switch (this.websocket.readyState){
                        case 0: // connecting
                            break;
                        case 1: // open
                            let message = new WSMessage(WSMessage.type.heartBeat, 'ping')
                            this.websocket.send(JSON.stringify(message))
                            break;
                        case 2:  // closing
                            clearInterval(this.pingPongInterval)
                            break;
                        case 3: // closed
                            clearInterval(this.pingPongInterval)
                            break;
                    }
                }
            }, 10000)
        },
        websocketOnMessage(res) {
            let receivedMessage = JSON.parse(res.data)
            switch (receivedMessage.type){
                case WSMessage.type.heartBeat:
                    break;
                case WSMessage.type.thumbsUp:
                    if (receivedMessage.content.key === this.thumbsUpKey){
                        this.thumbsUpCount = receivedMessage.content.count
                    }
                    break;
            }
        },
        websocketOnError() {
            this.portStatus = 'error'
            this.websocket.send('on error')
        },
        websocketClose() {
            this.portStatus = 'closed'
            console.log('socket has closed')
        },

        thumbsUp(){
            this.sendMessage(this.thumbsUpKey)
        },

        sendMessage(key){
            if (this.websocket) {
                this.heartActive = true
                let message = new WSMessage(WSMessage.type.thumbsUp, {
                    key: key
                })
                this.websocket.send(JSON.stringify(message))
            }
        },
    },
    computed: {
        maxScore(){
            let max = 0
            iPad.concat(iPadPro, iPadAir, iPadMini).forEach(item => {
                if (max < item.geekbenchScore) {
                    max = item.geekbenchScore
                }
            })
            return max
        },
        maxBatteryCapacity(){
            let max = 0
            iPad.concat(iPadPro, iPadAir, iPadMini).forEach(item => {
                if (max < item.battery.capacity) {
                    max = item.battery.capacity
                }
            })
            return max
        },
        maxBatteryCapacityWH(){
            let max = 0
            iPad.concat(iPadPro, iPadAir, iPadMini).forEach(item => {
                if (max < item.battery.capacityWH) {
                    max = item.battery.capacityWH
                }
            })
            return max
        },
        yearMaxMin(){
            let allYear = iPad.concat(iPadPro, iPadAir, iPadMini).map(item => Number(item.release.substring(0,4)))
            return {
                max: Math.max(...allYear),
                min: Math.min(...allYear)
            }
        },
    }
})

class WSMessage{
    constructor(type, content) {
        this.type = type
        this.content = content
    }
    static type = {
        thumbsUp: 'thumbs-up',
        heartBeat: 'heart-beat',
    }
}


document.addEventListener('touchstart', () => {
}, false)

// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
    app.didEnteredFullScreen = Boolean(document.fullscreenElement)
}

