webpackJsonp([6],{

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P2PageModule", function() { return P2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__p2__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var P2PageModule = (function () {
    function P2PageModule() {
    }
    P2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__p2__["a" /* P2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__p2__["a" /* P2Page */]),
            ],
        })
    ], P2PageModule);
    return P2PageModule;
}());

//# sourceMappingURL=p2.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_homework_homework__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(276);
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
 * Generated class for the P2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var P2Page = (function () {
    function P2Page(cameraPlugin, navCtrl, photoProvider) {
        this.cameraPlugin = cameraPlugin;
        this.navCtrl = navCtrl;
        this.photoProvider = photoProvider;
    }
    P2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad P2Page');
    };
    P2Page.prototype.createPost = function (photoName, Picture) {
        this.photoProvider.createPost(photoName, this.Picture);
    };
    P2Page.prototype.takePicture = function () {
        var _this = this;
        this.cameraPlugin.getPicture({
            quality: 95,
            destinationType: this.cameraPlugin.DestinationType.DATA_URL,
            sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: this.cameraPlugin.EncodingType.PNG,
            targetWidth: 500,
            targetHeight: 500,
            saveToPhotoAlbum: true
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.base64Image = "data:image/jpeg;base64," + imageData;
            //this.Picture is passing the string to our DB
            _this.Picture = imageData;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    P2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-p2',template:/*ion-inline-start:"C:\Users\duaaa\Desktop\FinalProject-master\src\pages\p2\p2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>AddPhoto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <button ion-button color="primary" block (click)="takePicture()">\n          Take a Picture\n  </button>\n\n  <img [src]="base64Image" *ngIf="base64Image" />\n\n  <ion-item>\n    <ion-label stacked>Photo Caption</ion-label>\n    <ion-input [(ngModel)]="photoName" type="text" placeholder="What\'s your plants\'s name?">\n    </ion-input>\n  </ion-item>\n\n  <button ion-button block (click)=" createPost(photoName, Picture);  ">\n    Upload Photo\n  </button>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\duaaa\Desktop\FinalProject-master\src\pages\p2\p2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_homework_homework__["a" /* HomeworkProvider */]])
    ], P2Page);
    return P2Page;
}());

//# sourceMappingURL=p2.js.map

/***/ })

});
//# sourceMappingURL=6.js.map