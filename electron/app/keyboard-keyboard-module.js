(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["keyboard-keyboard-module"],{

/***/ "./src/app/keyboard/keyboard.module.ts":
/*!*********************************************!*\
  !*** ./src/app/keyboard/keyboard.module.ts ***!
  \*********************************************/
/*! exports provided: KeyboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardPageModule", function() { return KeyboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _keyboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keyboard.page */ "./src/app/keyboard/keyboard.page.ts");







var routes = [
    {
        path: '',
        component: _keyboard_page__WEBPACK_IMPORTED_MODULE_6__["KeyboardPage"]
    }
];
var KeyboardPageModule = /** @class */ (function () {
    function KeyboardPageModule() {
    }
    KeyboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_keyboard_page__WEBPACK_IMPORTED_MODULE_6__["KeyboardPage"]]
        })
    ], KeyboardPageModule);
    return KeyboardPageModule;
}());



/***/ }),

/***/ "./src/app/keyboard/keyboard.page.html":
/*!*********************************************!*\
  !*** ./src/app/keyboard/keyboard.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>keyboard</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/keyboard/keyboard.page.scss":
/*!*********************************************!*\
  !*** ./src/app/keyboard/keyboard.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tleWJvYXJkL2tleWJvYXJkLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/keyboard/keyboard.page.ts":
/*!*******************************************!*\
  !*** ./src/app/keyboard/keyboard.page.ts ***!
  \*******************************************/
/*! exports provided: KeyboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardPage", function() { return KeyboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KeyboardPage = /** @class */ (function () {
    function KeyboardPage() {
    }
    KeyboardPage.prototype.ngOnInit = function () {
    };
    KeyboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-keyboard',
            template: __webpack_require__(/*! ./keyboard.page.html */ "./src/app/keyboard/keyboard.page.html"),
            styles: [__webpack_require__(/*! ./keyboard.page.scss */ "./src/app/keyboard/keyboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KeyboardPage);
    return KeyboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=keyboard-keyboard-module.js.map