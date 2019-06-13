(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["local-notifications-local-notifications-module"],{

/***/ "./src/app/local-notifications/local-notifications.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/local-notifications/local-notifications.module.ts ***!
  \*******************************************************************/
/*! exports provided: LocalNotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPageModule", function() { return LocalNotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _local_notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-notifications.page */ "./src/app/local-notifications/local-notifications.page.ts");







var routes = [
    {
        path: '',
        component: _local_notifications_page__WEBPACK_IMPORTED_MODULE_6__["LocalNotificationsPage"]
    }
];
var LocalNotificationsPageModule = /** @class */ (function () {
    function LocalNotificationsPageModule() {
    }
    LocalNotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_local_notifications_page__WEBPACK_IMPORTED_MODULE_6__["LocalNotificationsPage"]]
        })
    ], LocalNotificationsPageModule);
    return LocalNotificationsPageModule;
}());



/***/ }),

/***/ "./src/app/local-notifications/local-notifications.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/local-notifications/local-notifications.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>local-notifications</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/local-notifications/local-notifications.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/local-notifications/local-notifications.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvY2FsLW5vdGlmaWNhdGlvbnMvbG9jYWwtbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/local-notifications/local-notifications.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/local-notifications/local-notifications.page.ts ***!
  \*****************************************************************/
/*! exports provided: LocalNotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPage", function() { return LocalNotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocalNotificationsPage = /** @class */ (function () {
    function LocalNotificationsPage() {
    }
    LocalNotificationsPage.prototype.ngOnInit = function () {
    };
    LocalNotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-local-notifications',
            template: __webpack_require__(/*! ./local-notifications.page.html */ "./src/app/local-notifications/local-notifications.page.html"),
            styles: [__webpack_require__(/*! ./local-notifications.page.scss */ "./src/app/local-notifications/local-notifications.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocalNotificationsPage);
    return LocalNotificationsPage;
}());



/***/ })

}]);
//# sourceMappingURL=local-notifications-local-notifications-module.js.map