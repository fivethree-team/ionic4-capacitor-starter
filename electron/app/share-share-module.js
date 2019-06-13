(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["share-share-module"],{

/***/ "./src/app/share/share.module.ts":
/*!***************************************!*\
  !*** ./src/app/share/share.module.ts ***!
  \***************************************/
/*! exports provided: SharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePageModule", function() { return SharePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _share_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share.page */ "./src/app/share/share.page.ts");







var routes = [
    {
        path: '',
        component: _share_page__WEBPACK_IMPORTED_MODULE_6__["SharePage"]
    }
];
var SharePageModule = /** @class */ (function () {
    function SharePageModule() {
    }
    SharePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_share_page__WEBPACK_IMPORTED_MODULE_6__["SharePage"]]
        })
    ], SharePageModule);
    return SharePageModule;
}());



/***/ }),

/***/ "./src/app/share/share.page.html":
/*!***************************************!*\
  !*** ./src/app/share/share.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>share</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/share/share.page.scss":
/*!***************************************!*\
  !*** ./src/app/share/share.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlL3NoYXJlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/share/share.page.ts":
/*!*************************************!*\
  !*** ./src/app/share/share.page.ts ***!
  \*************************************/
/*! exports provided: SharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePage", function() { return SharePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharePage = /** @class */ (function () {
    function SharePage() {
    }
    SharePage.prototype.ngOnInit = function () {
    };
    SharePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.page.html */ "./src/app/share/share.page.html"),
            styles: [__webpack_require__(/*! ./share.page.scss */ "./src/app/share/share.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharePage);
    return SharePage;
}());



/***/ })

}]);
//# sourceMappingURL=share-share-module.js.map