(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["network-network-module"],{

/***/ "./src/app/network/network.module.ts":
/*!*******************************************!*\
  !*** ./src/app/network/network.module.ts ***!
  \*******************************************/
/*! exports provided: NetworkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPageModule", function() { return NetworkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _network_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./network.page */ "./src/app/network/network.page.ts");







var routes = [
    {
        path: '',
        component: _network_page__WEBPACK_IMPORTED_MODULE_6__["NetworkPage"]
    }
];
var NetworkPageModule = /** @class */ (function () {
    function NetworkPageModule() {
    }
    NetworkPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_network_page__WEBPACK_IMPORTED_MODULE_6__["NetworkPage"]]
        })
    ], NetworkPageModule);
    return NetworkPageModule;
}());



/***/ }),

/***/ "./src/app/network/network.page.html":
/*!*******************************************!*\
  !*** ./src/app/network/network.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>network</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/network/network.page.scss":
/*!*******************************************!*\
  !*** ./src/app/network/network.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmsvbmV0d29yay5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/network/network.page.ts":
/*!*****************************************!*\
  !*** ./src/app/network/network.page.ts ***!
  \*****************************************/
/*! exports provided: NetworkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPage", function() { return NetworkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NetworkPage = /** @class */ (function () {
    function NetworkPage() {
    }
    NetworkPage.prototype.ngOnInit = function () {
    };
    NetworkPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-network',
            template: __webpack_require__(/*! ./network.page.html */ "./src/app/network/network.page.html"),
            styles: [__webpack_require__(/*! ./network.page.scss */ "./src/app/network/network.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NetworkPage);
    return NetworkPage;
}());



/***/ })

}]);
//# sourceMappingURL=network-network-module.js.map