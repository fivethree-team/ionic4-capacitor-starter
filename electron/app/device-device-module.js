(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-device-module"],{

/***/ "./src/app/device/device.module.ts":
/*!*****************************************!*\
  !*** ./src/app/device/device.module.ts ***!
  \*****************************************/
/*! exports provided: DevicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageModule", function() { return DevicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device.page */ "./src/app/device/device.page.ts");







var routes = [
    {
        path: '',
        component: _device_page__WEBPACK_IMPORTED_MODULE_6__["DevicePage"]
    }
];
var DevicePageModule = /** @class */ (function () {
    function DevicePageModule() {
    }
    DevicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_device_page__WEBPACK_IMPORTED_MODULE_6__["DevicePage"]]
        })
    ], DevicePageModule);
    return DevicePageModule;
}());



/***/ }),

/***/ "./src/app/device/device.page.html":
/*!*****************************************!*\
  !*** ./src/app/device/device.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>device</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  {{info | json}}\n  {{language | json}}\n\n</ion-content>"

/***/ }),

/***/ "./src/app/device/device.page.scss":
/*!*****************************************!*\
  !*** ./src/app/device/device.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9kZXZpY2UucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/device/device.page.ts":
/*!***************************************!*\
  !*** ./src/app/device/device.page.ts ***!
  \***************************************/
/*! exports provided: DevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePage", function() { return DevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Device;
var DevicePage = /** @class */ (function () {
    function DevicePage() {
    }
    DevicePage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, Device.getInfo()];
                    case 1:
                        _a.info = _c.sent();
                        _b = this;
                        return [4 /*yield*/, Device.getLanguageCode()];
                    case 2:
                        _b.language = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! ./device.page.html */ "./src/app/device/device.page.html"),
            styles: [__webpack_require__(/*! ./device.page.scss */ "./src/app/device/device.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DevicePage);
    return DevicePage;
}());



/***/ })

}]);
//# sourceMappingURL=device-device-module.js.map