(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-camera-module"],{

/***/ "./src/app/camera/camera.module.ts":
/*!*****************************************!*\
  !*** ./src/app/camera/camera.module.ts ***!
  \*****************************************/
/*! exports provided: CameraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPageModule", function() { return CameraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _camera_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./camera.page */ "./src/app/camera/camera.page.ts");







var routes = [
    {
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]
    }
];
var CameraPageModule = /** @class */ (function () {
    function CameraPageModule() {
    }
    CameraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_6__["CameraPage"]]
        })
    ], CameraPageModule);
    return CameraPageModule;
}());



/***/ }),

/***/ "./src/app/camera/camera.page.html":
/*!*****************************************!*\
  !*** ./src/app/camera/camera.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>camera</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img *ngIf=\"image\" [src]=\"image\" />\n\n\n  <ion-button (click)=\"takePicture()\">\n    Take Picture\n  </ion-button>\n\n  <ion-button (click)=\"pickFromGallery()\">\n    Gallery\n  </ion-button>\n\n  <ion-button (click)=\"prompt()\">\n    Prompt source\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/camera/camera.page.scss":
/*!*****************************************!*\
  !*** ./src/app/camera/camera.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYS9jYW1lcmEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/camera/camera.page.ts":
/*!***************************************!*\
  !*** ./src/app/camera/camera.page.ts ***!
  \***************************************/
/*! exports provided: CameraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPage", function() { return CameraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Camera;
var CameraPage = /** @class */ (function () {
    function CameraPage(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CameraPage.prototype.ngOnInit = function () {
    };
    CameraPage.prototype.takePicture = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Camera.getPhoto({
                                quality: 70,
                                allowEditing: false,
                                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl,
                                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera
                            })];
                    case 1:
                        image = _a.sent();
                        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log('Error taking picture', err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CameraPage.prototype.pickFromGallery = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Camera.getPhoto({
                                quality: 70,
                                allowEditing: false,
                                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl,
                                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos
                            })];
                    case 1:
                        image = _a.sent();
                        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log('Error taking picture', err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CameraPage.prototype.prompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var image, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Camera.getPhoto({
                                quality: 70,
                                allowEditing: false,
                                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl,
                                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Prompt
                            })];
                    case 1:
                        image = _a.sent();
                        this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image.dataUrl);
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        console.log('Error taking picture', err_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-camera',
            template: __webpack_require__(/*! ./camera.page.html */ "./src/app/camera/camera.page.html"),
            styles: [__webpack_require__(/*! ./camera.page.scss */ "./src/app/camera/camera.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], CameraPage);
    return CameraPage;
}());



/***/ })

}]);
//# sourceMappingURL=camera-camera-module.js.map