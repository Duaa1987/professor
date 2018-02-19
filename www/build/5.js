webpackJsonp([5],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P3PageModule", function() { return P3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__p3__ = __webpack_require__(454);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var P3PageModule = (function () {
    function P3PageModule() {
    }
    P3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__p3__["a" /* P3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__p3__["a" /* P3Page */]),
            ],
        })
    ], P3PageModule);
    return P3PageModule;
}());

//# sourceMappingURL=p3.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homework_homework__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the P3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var P3Page = (function () {
    function P3Page(navCtrl, photoProvider) {
        this.navCtrl = navCtrl;
        this.photoProvider = photoProvider;
        this.photoList = [];
    }
    //calling our list from our Database, and setting values 
    P3Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.photoProvider.getPhotoList().on('value', function (snapshot) {
            _this.photoList = [];
            snapshot.forEach(function (snap) {
                _this.photoList.push({
                    id: snap.key,
                    name: snap.val().name,
                    picture: snap.val().picture,
                });
                console.log(_this.photoList);
                return false;
            });
        });
    };
    //go to the Add Photo Page
    P3Page.prototype.goToAddPhoto = function () {
        this.navCtrl.push('AddPhotoPage');
    };
    P3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-p3',template:/*ion-inline-start:"C:\Users\duaaa\Desktop\FinalProject-master\src\pages\p3\p3.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-card *ngFor="let pic of photoList" >\n  <ion-item>\n    <h1>{{pic?.name}}</h1>\n      <ion-thumbnail item-left>\n        <img src={{pic?.picture}} >\n      </ion-thumbnail>    \n  </ion-item>\n</ion-card>\n\n<button ion-button (click)="goToAddPhoto();">\nAdd Photo Page\n</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\duaaa\Desktop\FinalProject-master\src\pages\p3\p3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_homework_homework__["a" /* HomeworkProvider */]])
    ], P3Page);
    return P3Page;
}());

//# sourceMappingURL=p3.js.map

/***/ })

});
//# sourceMappingURL=5.js.map