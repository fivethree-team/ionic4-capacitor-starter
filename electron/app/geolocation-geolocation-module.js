(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geolocation-geolocation-module"],{

/***/ "./src/app/geolocation/geolocation.module.ts":
/*!***************************************************!*\
  !*** ./src/app/geolocation/geolocation.module.ts ***!
  \***************************************************/
/*! exports provided: GeolocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPageModule", function() { return GeolocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocation.page */ "./src/app/geolocation/geolocation.page.ts");







var routes = [
    {
        path: '',
        component: _geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]
    }
];
var GeolocationPageModule = /** @class */ (function () {
    function GeolocationPageModule() {
    }
    GeolocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]]
        })
    ], GeolocationPageModule);
    return GeolocationPageModule;
}());



/***/ }),

/***/ "./src/app/geolocation/geolocation.page.html":
/*!***************************************************!*\
  !*** ./src/app/geolocation/geolocation.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>geolocation</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  {{coordinates | json}}\n\n</ion-content>"

/***/ }),

/***/ "./src/app/geolocation/geolocation.page.scss":
/*!***************************************************!*\
  !*** ./src/app/geolocation/geolocation.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlb2xvY2F0aW9uL2dlb2xvY2F0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/geolocation/geolocation.page.ts":
/*!*************************************************!*\
  !*** ./src/app/geolocation/geolocation.page.ts ***!
  \*************************************************/
/*! exports provided: GeolocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPage", function() { return GeolocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Geolocation;
var GeolocationPage = /** @class */ (function () {
    function GeolocationPage() {
    }
    GeolocationPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('get initial geolocation');
                        return [4 /*yield*/, this.getCurrentPosition()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GeolocationPage.prototype.getCurrentPosition = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = this;
                        return [4 /*yield*/, Geolocation.getCurrentPosition()];
                    case 1:
                        _a.coordinates = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _b.sent();
                        console.log('Error getting current position', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GeolocationPage.prototype.watchPosition = function () {
        var _this = this;
        var wait = Geolocation.watchPosition({}, function (position, err) {
            if (!err) {
                _this.coordinates = position;
            }
            else {
                console.log('Error watching for Geolocation', err);
            }
        });
    };
    GeolocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-geolocation',
            template: __webpack_require__(/*! ./geolocation.page.html */ "./src/app/geolocation/geolocation.page.html"),
            styles: [__webpack_require__(/*! ./geolocation.page.scss */ "./src/app/geolocation/geolocation.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeolocationPage);
    return GeolocationPage;
}());



/***/ })

}]);
//# sourceMappingURL=geolocation-geolocation-module.js.map