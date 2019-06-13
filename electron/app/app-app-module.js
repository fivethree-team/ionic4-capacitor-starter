(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-app-module"],{

/***/ "./src/app/app/app.module.ts":
/*!***********************************!*\
  !*** ./src/app/app/app.module.ts ***!
  \***********************************/
/*! exports provided: AppPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPageModule", function() { return AppPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.page */ "./src/app/app/app.page.ts");







var routes = [
    {
        path: '',
        component: _app_page__WEBPACK_IMPORTED_MODULE_6__["AppPage"]
    }
];
var AppPageModule = /** @class */ (function () {
    function AppPageModule() {
    }
    AppPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_app_page__WEBPACK_IMPORTED_MODULE_6__["AppPage"]]
        })
    ], AppPageModule);
    return AppPageModule;
}());



/***/ }),

/***/ "./src/app/app/app.page.html":
/*!***********************************!*\
  !*** ./src/app/app/app.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>App</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  {{output}}\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/app/app.page.scss":
/*!***********************************!*\
  !*** ./src/app/app/app.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC9hcHAucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/app/app.page.ts":
/*!*********************************!*\
  !*** ./src/app/app/app.page.ts ***!
  \*********************************/
/*! exports provided: AppPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPage", function() { return AppPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");



var App = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].App;
var AppPage = /** @class */ (function () {
    function AppPage(change) {
        this.change = change;
        this.output = '';
    }
    AppPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ret;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        App.addListener('appStateChange', function (state) {
                            // state.isActive contains the active state
                            console.log('App state changed. Is active?', state.isActive);
                            _this.output += "\n App state changed. Is active? " + state.isActive;
                            _this.change.detectChanges();
                        });
                        return [4 /*yield*/, App.getLaunchUrl()];
                    case 1:
                        ret = _a.sent();
                        if (ret && ret.url) {
                            console.log('App opened with URL: ' + ret.url);
                            this.output += "\n App opened with URL:  " + ret.url;
                            this.change.detectChanges();
                        }
                        App.addListener('appUrlOpen', function (data) {
                            console.log('App opened with URL: ' + data.url);
                            _this.output += "\n App opened with URL:  " + ret.url;
                            _this.change.detectChanges();
                        });
                        App.addListener('appRestoredResult', function (data) {
                            console.log('Restored state:', data);
                            _this.output += "\n Restored state:  " + data;
                            _this.change.detectChanges();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app',
            template: __webpack_require__(/*! ./app.page.html */ "./src/app/app/app.page.html"),
            styles: [__webpack_require__(/*! ./app.page.scss */ "./src/app/app/app.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AppPage);
    return AppPage;
}());



/***/ })

}]);
//# sourceMappingURL=app-app-module.js.map