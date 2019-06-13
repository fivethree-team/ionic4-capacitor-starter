(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["browser-browser-module"],{

/***/ "./src/app/browser/browser.module.ts":
/*!*******************************************!*\
  !*** ./src/app/browser/browser.module.ts ***!
  \*******************************************/
/*! exports provided: BrowserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPageModule", function() { return BrowserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _browser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browser.page */ "./src/app/browser/browser.page.ts");







var routes = [
    {
        path: '',
        component: _browser_page__WEBPACK_IMPORTED_MODULE_6__["BrowserPage"]
    }
];
var BrowserPageModule = /** @class */ (function () {
    function BrowserPageModule() {
    }
    BrowserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_browser_page__WEBPACK_IMPORTED_MODULE_6__["BrowserPage"]]
        })
    ], BrowserPageModule);
    return BrowserPageModule;
}());



/***/ }),

/***/ "./src/app/browser/browser.page.html":
/*!*******************************************!*\
  !*** ./src/app/browser/browser.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>browser</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-button (click)=\"openURL()\">\n    open URL\n  </ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/browser/browser.page.scss":
/*!*******************************************!*\
  !*** ./src/app/browser/browser.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzZXIvYnJvd3Nlci5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/browser/browser.page.ts":
/*!*****************************************!*\
  !*** ./src/app/browser/browser.page.ts ***!
  \*****************************************/
/*! exports provided: BrowserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPage", function() { return BrowserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var Browser = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Browser;
var BrowserPage = /** @class */ (function () {
    function BrowserPage() {
    }
    BrowserPage.prototype.ngOnInit = function () {
    };
    BrowserPage.prototype.openURL = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Browser.open({
                                url: 'https://github.com/fivethree-team',
                                presentationStyle: 'fullscreen',
                                toolbarColor: '#000',
                                windowName: 'fivethree on GitHub'
                            })];
                    case 1:
                        _a.sent();
                        console.log('browser opened');
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log('Error opening browser: ', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BrowserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browser',
            template: __webpack_require__(/*! ./browser.page.html */ "./src/app/browser/browser.page.html"),
            styles: [__webpack_require__(/*! ./browser.page.scss */ "./src/app/browser/browser.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowserPage);
    return BrowserPage;
}());



/***/ })

}]);
//# sourceMappingURL=browser-browser-module.js.map