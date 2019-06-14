"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = [
    { path: '', name: 'Home' },
    { path: 'accessibility', name: 'Accessibility' },
    { path: 'app', name: 'App' },
    { path: 'background-task', name: 'Background Task' },
    { path: 'browser', name: 'Browser' },
    { path: 'camera', name: 'Camera' },
    { path: 'device', name: 'Device' },
    { path: 'geolocation', name: 'Geolocation' },
    { path: 'keyboard', name: 'Keyboard' },
    { path: 'local-notifications', name: 'Local Notifications' },
    { path: 'network', name: 'Network' },
    { path: 'share', name: 'Share' },
];
exports.devices = [
    {
        name: 'iPhone SE',
        // tslint:disable-next-line:max-line-length
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
        viewport: {
            width: 320,
            height: 568,
            deviceScaleFactor: 2,
            isMobile: true,
            hasTouch: true,
            isLandscape: false
        }
    },
    {
        name: 'iPhone 8',
        // tslint:disable-next-line:max-line-length
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        viewport: {
            width: 375,
            height: 667,
            deviceScaleFactor: 2,
            isMobile: true,
            hasTouch: true,
            isLandscape: false
        }
    },
    {
        name: 'iPhone 8 Plus',
        // tslint:disable-next-line:max-line-length
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        viewport: {
            width: 414,
            height: 736,
            deviceScaleFactor: 3,
            isMobile: true,
            hasTouch: true,
            isLandscape: false
        }
    },
    {
        name: 'iPhone X',
        // tslint:disable-next-line:max-line-length
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        viewport: {
            width: 375,
            height: 812,
            deviceScaleFactor: 3,
            isMobile: true,
            hasTouch: true,
            isLandscape: false
        }
    },
    {
        name: 'iPhone Xs Max',
        // tslint:disable-next-line:max-line-length
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        viewport: {
            width: 414,
            height: 896,
            deviceScaleFactor: 3,
            isMobile: true,
            hasTouch: true,
            isLandscape: false
        }
    },
    {
        name: 'iPad',
        // tslint:disable-next-line:max-line-length
        userAgent: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
        viewport: {
            width: 768,
            height: 1024,
            deviceScaleFactor: 2,
            isMobile: true,
            hasTouch: true,
            isLandscape: false
        }
    },
    {
        name: 'iPad Pro',
        // tslint:disable-next-line:max-line-length
        userAgent: 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1',
        viewport: {
            width: 1024,
            height: 1366,
            deviceScaleFactor: 2,
            isMobile: true,
            hasTouch: true,
            isLandscape: false
        }
    },
    {
        name: 'Pixel 2',
        // tslint:disable-next-line:max-line-length
        userAgent: 'Mozilla/5.0 (Linux; Android 8.0; Pixel 2 Build/OPD3.170816.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
        viewport: {
            width: 411,
            height: 731,
            deviceScaleFactor: 2.625,
            isMobile: true,
            hasTouch: true,
            isLandscape: false
        }
    },
    {
        name: 'Pixel 2 XL',
        // tslint:disable-next-line:max-line-length
        userAgent: 'Mozilla/5.0 (Linux; Android 8.0.0; Pixel 2 XL Build/OPD1.170816.004) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Mobile Safari/537.36',
        viewport: {
            width: 411,
            height: 823,
            deviceScaleFactor: 3.5,
            isMobile: true,
            hasTouch: true,
            isLandscape: false
        }
    },
];
