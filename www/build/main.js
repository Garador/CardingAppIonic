webpackJsonp([0],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
123;
var Settings = (function () {
    function Settings() {
    }
    Settings.getFirebaseConfig = function () {
        return {
            apiKey: "AIzaSyCFfaSY4V14PZSK5mrKUN-YfFIIv0fGLmA",
            authDomain: "extremecard-356e1.firebaseapp.com",
            databaseURL: "https://extremecard-356e1.firebaseio.com",
            storageBucket: "extremecard-356e1.appspot.com",
            messagingSenderId: "1087916848952"
        };
    };
    Settings.getSocketIOConfig = function (isProd) {
        if (isProd) {
            return { url: 'https://extremecards.herokuapp.com', options: {} };
        }
        else {
            return { url: 'http://localhost:3000', options: {} };
        }
    };
    Settings.httpServerConfig = function (isProd) {
        if (isProd) {
            return { url: 'https://extremecards.herokuapp.com', options: {} };
        }
        else {
            return { url: 'http://localhost:3000', options: {} };
        }
    };
    Settings.isProd = function () {
        return true;
    };
    Settings.getBaseCardURL = function (isPrivate) {
        if (isPrivate) {
            return "/card/private/_id/vcf?p=pass";
        }
        else {
            return "/card/public/_id/vcf?p=pass";
        }
    };
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localstorageworker_localstorage__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SettingsProvider = (function () {
    function SettingsProvider(LocalSW) {
        this.LocalSW = LocalSW;
        console.log('Hello SettingsProvider Provider');
    }
    SettingsProvider.prototype.getDefaultSettings = function () {
        var def = {
            notifications: false,
            help_messages: false,
            card_default_sharing: null,
            card_default_type: 0,
            card_default_pass: null
        };
        return JSON.stringify(def);
    };
    SettingsProvider.prototype.generateDefaultSettings = function () {
        var ctx = this;
        return new Promise(function (accept, reject) {
            var defSettings = ctx.getDefaultSettings();
            ctx.storeSettings(defSettings)
                .then(function (data) {
                accept(data);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    SettingsProvider.prototype.getSettings = function () {
        var ctx = this;
        console.log("getSettings  1");
        return new Promise(function (accept, reject) {
            console.log("getSettings  2");
            ctx.LocalSW.getValue("settings")
                .then(function (data) {
                console.log("getSettings  3");
                try {
                    if (typeof data === "string") {
                        try {
                            console.log("getSettings  4");
                            var settings = JSON.parse(data);
                            accept(settings);
                        }
                        catch (e) {
                            console.log("getSettings  5");
                            ctx.generateDefaultSettings()
                                .then(function (data) {
                                accept(data);
                            })
                                .catch(function (err) {
                                reject(err);
                            });
                        }
                    }
                    else {
                        console.log("getSettings  6");
                        ctx.generateDefaultSettings()
                            .then(function (data) {
                            accept(data);
                        })
                            .catch(function (err) {
                            reject(err);
                        });
                    }
                }
                catch (e) {
                    console.log("getSettings  7");
                    ctx.generateDefaultSettings()
                        .then(function (data) {
                        accept(data);
                    })
                        .catch(function (err) {
                        reject(err);
                    });
                }
            })
                .catch(function (err) {
                console.log("getSettings  8");
                ctx.generateDefaultSettings()
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject(err);
                });
            });
        });
    };
    SettingsProvider.prototype.storeSettings = function (settings) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            if (typeof settings === "string") {
                ctx.LocalSW.storeValue("settings", settings);
                accept();
            }
            else {
                try {
                    settings = JSON.stringify(settings);
                    ctx.LocalSW.storeValue("settings", settings);
                    accept();
                }
                catch (e) {
                    reject({ where: 1, where2: "storeSettings", err: e });
                }
            }
        });
    };
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__localstorageworker_localstorage__["a" /* LocalStorageWorker */]])
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketconnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketconnectionProvider = (function () {
    function SocketconnectionProvider(socket) {
        this.socket = socket;
        console.log('Hello SocketconnectionProvider Provider');
    }
    SocketconnectionProvider.prototype.getSocket = function () {
        return this.socket;
    };
    SocketconnectionProvider.prototype.getTimeout = function () {
        return (30) * 1000; //TIMEOUT: 30sec.
    };
    SocketconnectionProvider.prototype.call = function (params) {
        var socket = this.getSocket();
        var timeOut = this.getTimeout();
        console.log("call params: ", params);
        /*params.callRoute
        params.responseRoute
        params.payload*/
        return new Promise(function (accept, reject) {
            var payload = { meta: {
                    callID: Math.floor((Math.random() * (new Date().getTime())) + 1),
                    auth: params.auth
                }, payload: params.payload };
            socket.emit(params.callRoute, payload);
            var timeOutI = setTimeout(function () {
                reject({ where: 1, text: "Exc: Timeout" });
            }, timeOut);
            socket.on(params.responseRoute, function (data) {
                if (data.meta.callID == payload.meta.callID) {
                    clearTimeout(timeOutI);
                    accept(data.payload);
                }
            });
        });
    };
    return SocketconnectionProvider;
}());
SocketconnectionProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ng_socket_io__["Socket"]])
], SocketconnectionProvider);

//# sourceMappingURL=socketconnection.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the CardsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var CardsProvider = (function () {
    function CardsProvider(CMR, AFA) {
        this.CMR = CMR;
        this.AFA = AFA;
        console.log('Hello CardsProvider Provider');
    }
    CardsProvider.prototype.updateCardImage = function (imageData, cardData) {
        //Upload an image to Firebase Storage bucket
        //and updates references.
        var ctx = this;
        return new Promise(function (accept, reject) {
            var uid = null;
            if (ctx.AFA.auth.currentUser != null) {
                uid = ctx.AFA.auth.currentUser.uid;
            }
            else {
                reject({ where: 4, text: "User is not logged in..." });
            }
            var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref("images/cards/main/" + cardData.CRD__id + "");
            ref.putString(imageData, 'base64', { contentType: 'image/png' })
                .then(function (savedPicture) {
                //Update the personal data.
                accept(savedPicture.downloadURL);
            })
                .catch(function (err) {
                reject({ where: 2, err: err });
            });
        });
    };
    CardsProvider.prototype.getImageData = function () {
        //Upload an image to Firebase Storage bucket
        //and updates references.
        var options = {
            quality: 100,
            destinationType: this.CMR.DestinationType.DATA_URL,
            sourceType: this.CMR.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            targetWidth: 890,
            targetHeight: 510
        };
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.CMR.getPicture(options).then(function (imageData) {
                accept(imageData);
            }, function (err) {
                reject({ where: 3, err: err });
            });
        });
    };
    return CardsProvider;
}());
CardsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
], CardsProvider);

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AlertProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AlertProvider = (function () {
    function AlertProvider(AlertC, LoadingC) {
        this.AlertC = AlertC;
        this.LoadingC = LoadingC;
        console.log('Hello AlertProvider Provider');
    }
    AlertProvider.prototype.generateSimpleAlert = function (title, description) {
        var _this = this;
        return new Promise(function (accept, reject) {
            var alert = _this.AlertC.create({
                title: title,
                subTitle: description,
                buttons: [{
                        text: "ok",
                        handler: function () {
                            var dismiss = alert.dismiss()
                                .then(function () {
                                accept();
                            });
                            return false;
                        }
                    }]
            });
            alert.present();
        });
    };
    AlertProvider.prototype.generateSimpleLoading = function (content) {
        var options = { content: "" };
        if (typeof content === "string") {
            options.content = content;
        }
        var loading = this.LoadingC.create(options);
        return loading;
    };
    AlertProvider.prototype.generateSimpleInputAlert = function (params) {
        var AlertC = this.AlertC;
        return new Promise(function (accept, reject) {
            var alert = AlertC.create({
                title: params.title,
                inputs: params.inputs,
                buttons: [{
                        text: "Cancel",
                        role: "cancel"
                    }, {
                        text: "Ok",
                        handler: function (results) {
                            var dismiss = alert.dismiss();
                            dismiss.then(function () {
                                accept(results);
                            });
                            return false;
                        }
                    }]
            });
            alert.present();
        });
    };
    AlertProvider.prototype.generateMultipleButtonsAlert = function (params) {
        var AlertC = this.AlertC;
        var alert = AlertC.create({
            title: params.title,
            buttons: params.buttons
        });
        return alert;
    };
    return AlertProvider;
}());
AlertProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
], AlertProvider);

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_validator_input_validator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_system_messages_system_messages__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__n2_n2__ = __webpack_require__(248);
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
 * Generated class for the N1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N1Page = (function () {
    function N1Page(navCtrl, navParams, formBuilder, InputVal, Auth, AlertP, SMP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.InputVal = InputVal;
        this.Auth = Auth;
        this.AlertP = AlertP;
        this.SMP = SMP;
        this.logInAttempt = false;
        this.myForm = formBuilder.group({
            email: ['azolotloner@gmail.com', function (control) {
                    if (InputVal.isValid_Email(control.value)) {
                        return null;
                    }
                    else {
                        return { "InvalidEmail": true };
                    }
                }],
            password: ['20606280', function (control) {
                    if (InputVal.isString_LongerThan(4, control.value) && InputVal.isString_ShorterThan(200, control.value)) {
                        return null;
                    }
                    else {
                        return { "InvalidPassword": true };
                    }
                }]
        });
    }
    N1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N1Page');
    };
    N1Page.prototype.logIn = function () {
        this.logInAttempt = true;
        var AlertP = this.AlertP;
        if (this.myForm.valid) {
            var simpleL_1 = AlertP.generateSimpleLoading(null);
            simpleL_1.present();
            this.Auth.logIn(this.myForm.controls.email.value, this.myForm.controls.password.value)
                .then(function (data) {
                simpleL_1.dismiss()
                    .then(function () {
                    AlertP.generateSimpleAlert("Welcome Back", "Welcome Back Description")
                        .then(function () {
                        console.log("LogIn Data: ", data);
                    });
                });
            })
                .catch(function (err) {
                simpleL_1.dismiss();
                AlertP.generateSimpleAlert("Error Loggin In", err.error.text);
            });
        }
    };
    N1Page.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__n2_n2__["a" /* N2Page */]);
    };
    N1Page.prototype.forgotPassword = function () {
        var AlertP = this.AlertP;
        var SMP = this.SMP;
        var Auth = this.Auth;
        AlertP.generateSimpleInputAlert({
            title: "Input your Email Address",
            inputs: [{
                    placeholder: "Email Address",
                    type: "email"
                }, {
                    placeholder: "Confirm Email Address",
                    type: "email"
                }]
        })
            .then(function (data) {
            if (data[0] === data[1]) {
                var loading_1 = AlertP.generateSimpleLoading("Sending Recovery Email...");
                loading_1.present();
                Auth.sendPasswordResetEmail(data[0])
                    .then(function (data) {
                    AlertP.generateSimpleAlert("Success", "A password recovery email has been sent to your inbox.");
                    loading_1.dismiss();
                })
                    .catch(function (err) {
                    console.log("err: ", err);
                    var text = "Error Found. Please try again later.";
                    switch (err.where) {
                        case 0:
                        case 1:
                            text = SMP.getFirebaseErrorMessage(err.err).text;
                            break;
                    }
                    AlertP.generateSimpleAlert("Error", text);
                    loading_1.dismiss();
                });
            }
            else {
                AlertP.generateSimpleAlert("Error", "Emails don't match");
            }
        })
            .catch(function (err) {
            console.log("Err: ", err);
            AlertP.generateSimpleAlert("Error", "Error found. Please try again later.");
        });
    };
    return N1Page;
}());
N1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n1',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n1/n1.html"*/'<!--\n  Generated template for the N1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!--<ion-header>\n  <ion-navbar>\n    <ion-title>Log In</ion-title>\n  </ion-navbar>\n</ion-header>\n-->\n\n\n<ion-content padding>\n  <div style="text-align:center">\n    <ion-img width="140" height="140" src="../../assets/imgs/logo.png"></ion-img>\n  </div>\n  <ion-list>\n    <form [formGroup]="myForm">\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item>\n        <b style="color:red"><small> {{emailErrorMsg}} </small></b>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <button ion-button full large (click)="logIn()"> Log In</button>\n      </ion-item>\n    </form>\n  </ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 style="text-align:center">\n        <ion-img width="50px" height="50px" src="../../assets/imgs/511-google-favicon.jpg"></ion-img>\n      </ion-col>\n      <ion-col col-6 style="text-align:center" (click)="signUp()">\n        <button ion-button icon-left>\n          <ion-icon name="person-add"></ion-icon>\n          Sign-Up\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 style="text-align:center" (click)="forgotPassword()">\n        <button ion-button icon-left>\n          <ion-icon name="person-add"></ion-icon>\n          Forgot Password\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n1/n1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_input_validator_input_validator__["a" /* InputValidatorProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_system_messages_system_messages__["a" /* SystemMessagesProvider */]])
], N1Page);

//# sourceMappingURL=n1.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AddressesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AddressesProvider = AddressesProvider_1 = (function () {
    function AddressesProvider(http) {
        this.http = http;
        console.log('Hello AddressesProvider Provider');
    }
    AddressesProvider.getBaseRequestingURL = function () {
        var prod = __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */].isProd();
        return __WEBPACK_IMPORTED_MODULE_3__settings__["a" /* Settings */].httpServerConfig(prod).url;
    };
    AddressesProvider.getBaseConnectionTestingURL = function () {
        return AddressesProvider_1.getBaseRequestingURL() + "/test/http/main.js";
    };
    AddressesProvider.getBaseLoginRequestURL = function () {
        return AddressesProvider_1.getBaseRequestingURL() + "/api/auth/logIn";
    };
    AddressesProvider.getBaseAuthRequestURL = function () {
        return AddressesProvider_1.getBaseRequestingURL() + "/api/auth/logIn";
    };
    AddressesProvider.getGeoIpAddress = function () {
        return "http://ip-api.com/json";
    };
    return AddressesProvider;
}());
AddressesProvider = AddressesProvider_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AddressesProvider);

var AddressesProvider_1;
//# sourceMappingURL=addresses.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_validator_input_validator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(53);
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
 * Generated class for the N2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N2Page = (function () {
    function N2Page(navCtrl, navParams, formBuilder, InputVal, AlertP, AuthP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.InputVal = InputVal;
        this.AlertP = AlertP;
        this.AuthP = AuthP;
        this.formValues = {
            pass2: "20606280",
            signupAttemt: false
        };
        this.myForm = this.formBuilder.group({
            email: ['azolotloner@gmail.com', function (control) {
                    if (_this.InputVal.isValid_Email(control.value)) {
                        return null;
                    }
                    else {
                        return { "InvalidEmail": true };
                    }
                }],
            password: ['20606280', function (control) {
                    if (_this.InputVal.isString_LongerThan(4, control.value) && _this.InputVal.isString_ShorterThan(200, control.value)) {
                        return null;
                    }
                    else {
                        return { "InvalidPassword": true };
                    }
                }],
            username: ['azolot', function (control) {
                    if (_this.InputVal.isString_LongerThan(2, control.value) && _this.InputVal.isString_ShorterThan(40, control.value)) {
                        return null;
                    }
                    else {
                        return { "InvalidUsername": true };
                    }
                }, function (control) {
                    //Check if username has been used.
                    return new Promise(function (accept, reject) {
                        accept(null);
                    });
                }],
            password2: ['20606280', function (control) {
                    if (_this.InputVal.isString_LongerThan(2, control.value) && _this.InputVal.isString_ShorterThan(200, control.value)) {
                        if (control.value !== control.value) {
                            return { "UnmatchingPasswords": true };
                        }
                        return null;
                    }
                    else {
                        return { "InvalidPassword": true };
                    }
                }],
            TCCheck: [true, function (control) {
                    if (!control.value) {
                        return { "AcceptedTermsAndConditions": false };
                    }
                    else {
                        return false;
                    }
                }]
        });
    }
    N2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N2Page');
    };
    N2Page.prototype.signUp = function () {
        var _this = this;
        this.formValues.signupAttemt = true;
        var loading = this.AlertP.generateSimpleLoading(null);
        loading.present();
        if (this.myForm.valid) {
            this.AuthP.signUp(this.myForm.controls.email.value, this.myForm.controls.password.value)
                .then(function (data) {
                loading.dismiss();
                console.log("Result from signUp: ", data);
            })
                .catch(function (err) {
                loading.dismiss();
                _this.AlertP.generateSimpleAlert("Error Signing Up", err.text);
            });
        }
        else {
            loading.dismiss();
            this.AlertP.generateSimpleAlert("Error", "Please check your data");
        }
    };
    return N2Page;
}());
N2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n2',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n2/n2.html"*/'<!--\n  Generated template for the N2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <form [formGroup]="myForm">\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" formControlName="username"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formValues.signupAttemt && myForm.controls.username.invalid">\n        <small><b>Invalid Username</b></small>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>E-mail</ion-label>\n        <ion-input type="email" formControlName="email"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formValues.signupAttemt && myForm.controls.email.invalid">\n        <small><b>Invalid Username</b></small>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" formControlName="password"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formValues.signupAttemt && myForm.controls.password.invalid">\n        <small><b>Invalid Password</b></small>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Repeat Password</ion-label>\n        <ion-input type="password" formControlName="password2" [(ngModel)]="formValues.pass2"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="formValues.signupAttemt && myForm.controls.password2.invalid">\n        <small><b>Unmatching Passwords</b></small>\n      </ion-item>\n      <ion-item>\n        <ion-label>I accept the terms and conditions of use</ion-label>\n        <ion-checkbox formControlName="TCCheck"></ion-checkbox>\n      </ion-item>\n      <ion-item *ngIf="formValues.signupAttemt && myForm.controls.TCCheck.invalid">\n        <small><b>You need to accept the terms and conditions</b></small>\n      </ion-item>\n      <ion-item>\n        <button ion-button full large (click)="signUp()">Sign Up</button>\n      </ion-item>\n    </form>\n  </ion-list>\n\n  <button ion-button>Terms and Conditions</button>\n\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n2/n2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_input_validator_input_validator__["a" /* InputValidatorProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
], N2Page);

//# sourceMappingURL=n2.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_input_validator_input_validator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__ = __webpack_require__(15);
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
 * Generated class for the N3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N3Page = (function () {
    function N3Page(navCtrl, navParams, AFA, SP, formBuilder, InputVal, ProfP, ALP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AFA = AFA;
        this.SP = SP;
        this.formBuilder = formBuilder;
        this.InputVal = InputVal;
        this.ProfP = ProfP;
        this.ALP = ALP;
        this.card_default_sharing = []; //Cards to be shareable.
        var ctx = this;
        var loading = ctx.ALP.generateSimpleLoading("Loading Profile...");
        loading.present();
        this.loadSettings()
            .then(function (settingsData) {
            loading.dismiss();
            ctx.loadSharingCards();
            ctx.settings = settingsData;
            console.log("settingsData: ", settingsData);
            _this.myForm = formBuilder.group({
                card_default_type: [ctx.settings.card_default_type, function (control) {
                        if (control.value === 1 || control.value === 0) {
                            return null;
                        }
                        else {
                            return { "InvalidNumber": true };
                        }
                    }],
                card_default_pass: [ctx.settings.card_default_pass, function (control) {
                        if (InputVal.isString_ShorterThan(200, control.value)) {
                            return null;
                        }
                        else {
                            return { "InvalidPassword": true };
                        }
                    }],
                card_default_sharing: [ctx.settings.card_default_sharing, function (control) {
                        if (InputVal.isString_LongerThan(2, control.value) && InputVal.isString_ShorterThan(20, control.value)) {
                            return null;
                        }
                        else {
                            return { "InvalidSharing": true };
                        }
                    }],
                help_messages: [ctx.settings.help_messages, function (control) {
                        if (typeof control.value === "boolean") {
                            return null;
                        }
                        else {
                            return { "InvalidSharing": true };
                        }
                    }],
                notifications: [ctx.settings.notifications, function (control) {
                        if (typeof control.value === "boolean") {
                            return null;
                        }
                        else {
                            return { "InvalidSharing": true };
                        }
                    }]
            });
        })
            .catch(function (err) {
            loading.dismiss();
            console.log("Err: ", err);
        });
        ctx.setDefaultForm();
    }
    N3Page.prototype.setDefaultForm = function () {
        var ctx = this;
        this.myForm = ctx.formBuilder.group({
            card_default_type: [1, function (control) {
                    if (control.value === 1 || control.value === 0) {
                        return null;
                    }
                    else {
                        return { "InvalidNumber": true };
                    }
                }],
            card_default_pass: ["", function (control) {
                    if (ctx.InputVal.isString_ShorterThan(200, control.value)) {
                        return null;
                    }
                    else {
                        return { "InvalidPassword": true };
                    }
                }],
            card_default_sharing: ["", function (control) {
                    if (ctx.InputVal.isString_LongerThan(2, control.value) && ctx.InputVal.isString_ShorterThan(20, control.value)) {
                        return null;
                    }
                    else {
                        return { "InvalidSharing": true };
                    }
                }],
            help_messages: [true, function (control) {
                    if (typeof control.value === "boolean") {
                        return null;
                    }
                    else {
                        return { "InvalidSharing": true };
                    }
                }],
            notifications: [true, function (control) {
                    if (typeof control.value === "boolean") {
                        return null;
                    }
                    else {
                        return { "InvalidSharing": true };
                    }
                }]
        });
    };
    N3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N3Page');
    };
    N3Page.prototype.logOut = function () {
        this.AFA.auth.signOut();
    };
    N3Page.prototype.storeSettings = function () {
        //Store current settings.
    };
    N3Page.prototype.loadSettings = function () {
        //Load settings
        var ctx = this;
        return ctx.SP.getSettings();
    };
    N3Page.prototype.loadSharingCards = function () {
        //Loads the sharing cards and sets them on the form data.
        var ctx = this;
        ctx.ProfP.getUserOwnedCards(0, 0, {
            _id: true,
            _vn: true
        })
            .then(function (data) {
            console.log("Data: ", data);
            ctx.card_default_sharing = data;
        })
            .catch(function (err) {
            console.log("Error: ", err);
        });
    };
    N3Page.prototype.saveSettings = function () {
        //Gets settings and uses storeSettings function to store them locally.
        var ctx = this;
        console.log("this.myForm: ", this.myForm);
        var loading = ctx.ALP.generateSimpleLoading("");
        loading.present();
        ctx.SP.storeSettings(this.myForm.value)
            .then(function (data) {
            console.log("Data: ", data);
            loading.dismiss();
        })
            .catch(function (err) {
            loading.dismiss();
            ctx.ALP.generateSimpleAlert("Error", "Error storing settings data. Please try again later.");
            console.log("Error: ", err);
        });
    };
    return N3Page;
}());
N3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n3',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n3/n3.html"*/'<!--\n  Generated template for the N3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <form [formGroup]="myForm">\n      <ion-item>\n        <h4 style="margin-top:10px;">System</h4>\n      </ion-item>\n      <ion-item>\n        <ion-label>Notifications</ion-label>\n        <ion-toggle formControlName="notifications"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <ion-label>Help Messages</ion-label>\n        <ion-toggle formControlName="help_messages"></ion-toggle>\n      </ion-item>\n      <ion-item>\n        <h4 style="margin-top:10px;">Card Settings</h4>\n      </ion-item>\n      <ion-item>\n        <ion-label>Default Sharing Card</ion-label>\n        <!--<ion-select formControlName="card_default_sharing">-->\n        <ion-select formControlName="card_default_sharing">\n          <ion-option *ngFor="let card of card_default_sharing" [value]="card.CRD__id">\n            {{card.CRD__id}}\n          </ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Default Card Type</ion-label>\n        <ion-select formControlName="card_default_type">\n          <ion-option value="0">Private</ion-option>\n          <ion-option value="1">Public</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Default Card Password</ion-label>\n        <ion-input type="password" formControlName="card_default_pass"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name=""></ion-icon>\n        <button ion-button full style="height:40px;" (click)="saveSettings()">\n            <h3><b>Store changes</b></h3>\n        </button>\n      </ion-item>\n    </form>\n    <!--\n    <ion-item>\n      <ion-icon name=""></ion-icon>\n      <button ion-button full style="height:40px;" (click)="logOut()">\n          <h3><b>Log Out</b></h3>\n      </button>\n    </ion-item>\n    -->\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n3/n3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_3__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__providers_input_validator_input_validator__["a" /* InputValidatorProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_alert_alert__["a" /* AlertProvider */]])
], N3Page);

//# sourceMappingURL=n3.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputValidatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the InputValidatorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var InputValidatorProvider = (function () {
    function InputValidatorProvider(http) {
        this.http = http;
        this.regExp_email = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.regExp_username = new RegExp(/^[a-zA-Z0-9]+$/);
        this.regExp_name = new RegExp(/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/);
        this.regExp_photoURL = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/); //For Firebase type of files.
        console.log('Hello InputValidatorProvider Provider');
    }
    InputValidatorProvider.prototype.validateEmail = function (possibleEmail) {
    };
    InputValidatorProvider.prototype.scapeString = function (string) {
        //https://codereview.stackexchange.com/questions/153691/escape-user-input-for-use-in-js-regex
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };
    InputValidatorProvider.prototype.isString_ShorterThan = function (maxLength, string) {
        var regEx = "^.{0," + maxLength + "}$";
        return (new RegExp(regEx)).test(string);
    };
    InputValidatorProvider.prototype.isString_LongerThan = function (minLength, string) {
        var regEx = "^.{" + minLength + ",}$";
        return (new RegExp(regEx)).test(string);
    };
    InputValidatorProvider.prototype.isValid_Email = function (email) {
        return this.regExp_email.test(email);
    };
    InputValidatorProvider.prototype.isValid_Username = function (username) {
        return this.regExp_username.test(username);
    };
    InputValidatorProvider.prototype.isValid_Name = function (name) {
        return this.regExp_name.test(name);
    };
    InputValidatorProvider.prototype.isValid_password = function (value) {
        return this.isString_LongerThan(4, value) && this.isString_ShorterThan(200, value);
    };
    InputValidatorProvider.prototype.sanitize_string = function (string) {
    };
    InputValidatorProvider.prototype.isValid_uri = function (string) {
        return this.regExp_photoURL.test(string);
    };
    return InputValidatorProvider;
}());
InputValidatorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], InputValidatorProvider);

//# sourceMappingURL=input-validator.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_input_validator_input_validator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_system_messages_system_messages__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__ = __webpack_require__(32);
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
 * Generated class for the N4Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N4Page = (function () {
    function N4Page(navCtrl, navParams, AlertP, InputVP, AuthP, SMP, ProfP, _ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AlertP = AlertP;
        this.InputVP = InputVP;
        this.AuthP = AuthP;
        this.SMP = SMP;
        this.ProfP = ProfP;
        this._ngZone = _ngZone;
        this.loadProfile(false);
    }
    N4Page.prototype.changeProfilePhoto = function () {
        var ctx = this;
        this.ProfP.updateProfilePhoto(true)
            .then(function (data) {
            console.log("Data from updateProfilePhoto: ", data);
            ctx.loadProfile(false)
                .then(function (data) {
            })
                .catch(function (err) {
                console.log("Error: ", err);
            });
        })
            .catch(function (err) {
            console.log("Error from updateProfilePhoto: ", err);
        });
    };
    N4Page.prototype.loadProfile = function (recentAuth) {
        var _this = this;
        console.log("loadProfile called       1");
        var ctx = this;
        var loading = ctx.AlertP.generateSimpleLoading("Loading Profile...");
        loading.present();
        return new Promise(function (accept, reject) {
            _this.ProfP.getProfile(recentAuth)
                .then(function (data) {
                loading.dismiss();
                console.log("loadProfile called.        2   Data: ", data);
                ctx._ngZone.run(function () {
                    ctx.userView = data;
                });
                accept();
            })
                .catch(function (err) {
                loading.dismiss();
                console.log("loadProfile called.        3   Data: ", err);
                console.log(err);
                switch (err.where) {
                    case 0:
                        if (err.refreshRequired) {
                            console.log("Calling Recursively...");
                            ctx.loadProfile(recentAuth)
                                .then(function (data) {
                                accept();
                            })
                                .catch(function (err) {
                                reject({ where: 1, err: err });
                            });
                        }
                        break;
                }
            });
        });
    };
    N4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N4Page');
    };
    N4Page.prototype.changePassword = function () {
        var AlertP = this.AlertP;
        var InputVP = this.InputVP;
        var AuthP = this.AuthP;
        var SMP = this.SMP;
        AlertP.generateSimpleInputAlert({
            title: "Input your old and new password",
            inputs: [{
                    placeholder: "Old Password",
                    type: "password"
                }, {
                    placeholder: "New Password",
                    type: "password"
                }, {
                    placeholder: "Repeat New Password",
                    type: "password"
                }]
        })
            .then(function (data) {
            var valid = InputVP.isValid_password(data[0]) && InputVP.isValid_password(data[1]);
            valid = valid && (data[1] === data[2]);
            if (valid) {
                var loading_1 = AlertP.generateSimpleLoading("Changing password...");
                loading_1.present();
                AuthP.changePassword(data[0], data[1])
                    .then(function (data) {
                    loading_1.dismiss()
                        .then(function () {
                        AlertP.generateSimpleAlert("Pasword Changed", "Your password has been changed");
                    });
                    console.log("Result from changePassword: ", data);
                })
                    .catch(function (err) {
                    var text = "";
                    switch (err.where) {
                        case 1:
                            text = err.text;
                            break;
                        case 2:
                        case 3:
                            text = SMP.getFirebaseErrorMessage(err.err).text;
                            break;
                    }
                    loading_1.dismiss();
                    AlertP.generateSimpleAlert("Error", text);
                });
            }
            else {
                AlertP.generateSimpleAlert("Error", "Your passwords are invalid. Please check them.");
            }
        })
            .catch(function (err) {
            console.log("Error: ", err);
        });
    };
    N4Page.prototype.logOut = function () {
        this.AuthP.logOut();
    };
    N4Page.prototype.editProfile = function (what) {
        var ctx = this;
        var loading = ctx.AlertP.generateSimpleLoading({
            title: "Updating"
        });
        switch (what) {
            case 1:
                ctx.AlertP.generateSimpleInputAlert({
                    title: "Input your new Email",
                    inputs: [{
                            placeholder: "New Email",
                            type: "email"
                        }]
                })
                    .then(function (data) {
                    var newEmail = data[0];
                    if (ctx.InputVP.isValid_Email(data[0])) {
                        loading.present();
                        ctx.ProfP.updateProfile({
                            email: newEmail
                        })
                            .then(function (data) {
                            loading.dismiss();
                            ctx.loadProfile(true);
                        })
                            .catch(function (err) {
                            loading.dismiss();
                            ctx.AlertP.generateSimpleAlert("Error", "An error has occured. Please try again later.");
                        });
                    }
                    else {
                        ctx.AlertP.generateSimpleAlert("Error", "The e-mail is invalid");
                    }
                })
                    .catch(function (err) {
                    console.log(err);
                    ctx.AlertP.generateSimpleAlert("Error", "There has been an error. Please try again later.");
                });
                break;
            case 2:
                ctx.AlertP.generateSimpleInputAlert({
                    title: "Input your new username",
                    inputs: [{
                            placeholder: "New Username",
                            type: "text"
                        }]
                })
                    .then(function (data) {
                    var newUsername = data[0];
                    if (ctx.InputVP.isValid_Username(newUsername)) {
                        loading.present();
                        ctx.ProfP.updateProfile({
                            displayName: newUsername
                        })
                            .then(function (data) {
                            loading.dismiss();
                            ctx.loadProfile(true);
                        })
                            .catch(function (err) {
                            console.log("Err: ", err);
                            loading.dismiss();
                            ctx.AlertP.generateSimpleAlert("Error", "An error has ocurred. Please try again later.");
                        });
                    }
                    else {
                        ctx.AlertP.generateSimpleAlert("Error", "The name is invalid");
                    }
                })
                    .catch(function (err) {
                    console.log(err);
                    ctx.AlertP.generateSimpleAlert("Error", "There has been an error. Please try again later.");
                });
                break;
        }
    };
    return N4Page;
}());
N4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n4',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n4/n4.html"*/'<!--\n  Generated template for the N4Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1 style="text-align:bottom right">\n        <ion-icon name="image" style="font-size:24px" (click)="changeProfilePhoto()"></ion-icon>\n      </ion-col>\n      <ion-col col-11 style="text-align:left">\n        <ion-img width="280px" height="280px" *ngIf="!userView" src="assets/imgs/logo.png"></ion-img>\n        <img width="280px" height="280px" *ngIf="userView && userView.PPR_phu" src={{userView.PPR_phu}}\n        style=\'border:1px solid black;border-radius:50%;box-shadow: 0 0 5px gray;border: 2px solid #fff;margin-left: auto;margin-right: auto;\'>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <hr style="margin-top:24px;"/>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1>\n        <ion-icon name="person" style="font-size:24px"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <ion-label *ngIf="userView">{{userView.PPR_dna}}</ion-label>\n      </ion-col>\n      <ion-col col-1 style="v-align:center">\n        <button ion-button (click)="editProfile(2)">\n          <ion-icon name="create" style="font-size:24px"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1 style="v-align:center">\n        <ion-icon name="mail" style="font-size:24px"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <ion-label *ngIf="userView">{{userView.PPR_eml}}</ion-label>\n        <p><small style="text-color:green" *ngIf="userView && userView.PPR_emv">Verified</small></p>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button (click)="editProfile(1)">\n          <ion-icon name="create" style="font-size:24px"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1 style="v-align:center">\n        <ion-icon name="lock" style="font-size:24px"></ion-icon>\n      </ion-col>\n      <ion-col col-11 (click)="changePassword()">\n        <button ion-button full style="height:32px">\n          <b>Change Password</b>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-1 style="v-align:center">\n        <ion-icon name="log-out" style="font-size:24px"></ion-icon>\n      </ion-col>\n      <ion-col col-11 (click)="logOut()">\n        <button ion-button full style="height:32px">\n          <b>Log Out</b>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n4/n4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_alert_alert__["a" /* AlertProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_input_validator_input_validator__["a" /* InputValidatorProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_system_messages_system_messages__["a" /* SystemMessagesProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], N4Page);

//# sourceMappingURL=n4.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N5Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the N5Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N5Page = (function () {
    function N5Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    N5Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N5Page');
    };
    return N5Page;
}());
N5Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n5',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n5/n5.html"*/'<!--\n  Generated template for the N5Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4>About Extreme Cards</h4>\n  <p>Extreme Cards is an app created for the purpose of allowing users to share\n  and receive contact cards given away by individuals whom you trust, with a simple\n  method of adding (via ID), instead of writing lengthy and often time-consuming cards.</p>\n  <p>These cards can be used to maintain your selected contacts updated with the newest information\n  to be provided to them. Also, if you wish to stop someone from seeing the card, you can delete it.</p>\n  <h4>FAQ</h4>\n  <p>\n    <b>Q: How do I add a card someone\'s sharing to me?</b>\n    <br/>\n    <b>A:</b> Just go to "Shared Cards" and click the bottom-right button to begin adding a card. If it\'s\n    a private card, you need the code the person who\'s sharing the card with you has. Otherwise, you won\'t\n    be able to add it.\n  </p>\n  <p>\n    <b>Q: How do I create a card to share to someone?</b>\n    <br/>\n    <b>A:</b> Go to Owned Cards, click the bottom-right button, and you should be able to create your card data.\n    Keep in mind that if you choose the card to be private, you\'ll have to provide a password at the time of the creation.\n  </p>\n  <p>\n    <b>Q: How do I share a card I own?</b>\n    <br/>\n    <b>A:</b> On your shared cards, you can swipe-left them, and you\'ll see a series of options.\n    In there you can choose "Share". You can share it via ID, or you can download a .vcf (contact card) file\n    from our servers with the contact information via clicking on "Get V-Card", and then, click on "Download" button that will appear\n  </p>\n  <p>\n    <b>Q: How do I back up my cards?</b>\n    <br/>\n    <b>A:</b> You can download them via the share button, and store them as .vcf files to your device, or\n    just send them over wherever you need to.\n  </p>\n  <p>\n    <b>Q: What if there\'s a problem with the app? Will my cards be deleted?</b>\n    <br/>\n    <b>A:</b> No. Your cards will remain and whenever you re-install the app, you\'ll be able to access them once again.\n  </p>\n\n  <p>V 1.0</p>\n  <h4>Contact</h4>\n  <b>azolotloner@gmail.com</b>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n5/n5.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], N5Page);

//# sourceMappingURL=n5.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N6Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the N6Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N6Page = (function () {
    function N6Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    N6Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N6Page');
    };
    return N6Page;
}());
N6Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n6',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n6/n6.html"*/'<!--\n  Generated template for the N6Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Back-Up & Restore</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>Personal Cards</ion-label>\n    </ion-item>\n    <ion-item>\n      <button ion-button full style="height:36px;">\n        <b>Generate contacts file</b>\n      </button>\n    </ion-item>\n    <ion-item>\n      <button ion-button full style="height:36px;">\n        <b>Back-Up to Google Drive</b>\n      </button>\n    </ion-item>\n    <ion-item>\n      <button ion-button full style="height:36px;">\n        <b>Restore from Google Drive</b>\n      </button>\n    </ion-item>\n    <ion-item>\n      <ion-label>Directory Cards</ion-label>\n    </ion-item>\n    <ion-item>\n      <button ion-button full style="height:36px;">\n        <b>Generate contacts file</b>\n      </button>\n    </ion-item>\n    <ion-item>\n      <button ion-button full style="height:36px;">\n        <b>Back-Up to Google Drive</b>\n      </button>\n    </ion-item>\n    <ion-item>\n      <button ion-button full style="height:36px;">\n        <b>Restore from Google Drive</b>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n6/n6.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], N6Page);

//# sourceMappingURL=n6.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N7Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__n12_n12__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__n13_n13__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__n14_n14__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(15);
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
 * Generated class for the N7Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N7Page = (function () {
    function N7Page(navCtrl, navParams, PPR, ALP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PPR = PPR;
        this.ALP = ALP;
        this.ownedCardsObj = [];
        this.getOwnedCards();
    }
    //1. Generate Cards Provider.
    //2. Get User Owned Cards.
    // 2.1 Get Fields: _id, data fields, _vn (to know when to update it)
    // 2.2 Store fields.
    //3. Display Owned Cards
    N7Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N7Page');
    };
    N7Page.prototype.editCard = function (_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__n13_n13__["a" /* N13Page */], { _id: _id });
    };
    N7Page.prototype.getOwnedCards = function () {
        var ctx = this;
        var loading = ctx.ALP.generateSimpleLoading("Loading Cards...");
        loading.present();
        return new Promise(function (accept, reject) {
            ctx.PPR.getUserOwnedCards(0, 0, {
                _id: true,
                ctt: true,
                na1: true,
                eem: true,
                _la: true,
                ph1: true,
                vis: true,
                img_uri: true
            })
                .then(function (data) {
                loading.dismiss();
                console.log("Owned cards: ", data);
                if (data != null && typeof data === "object" && !isNaN(data.length)) {
                    ctx.ownedCardsObj = data;
                }
                else {
                    ctx.ALP.generateSimpleAlert("Error", "Error getting your cards. Please try again later.");
                }
            })
                .catch(function (err) {
                loading.dismiss();
                console.log("Error gotten: ", err);
            });
        });
    };
    N7Page.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__n12_n12__["a" /* N12Page */]);
    };
    N7Page.prototype.deleteCard = function (_id) {
        var ctx = this;
        ctx.ALP.generateSimpleInputAlert({
            title: "Delete card " + _id + "?"
        })
            .then(function (data) {
            var loading = ctx.ALP.generateSimpleLoading("Deleting...");
            ctx.PPR.deleteUserOwnedCard(_id)
                .then(function (data) {
                loading.dismiss();
                console.log("Data: ", data);
                if (!isNaN(data) && data == 1) {
                    ctx.ALP.generateSimpleAlert("Done", "The card has been deleted.");
                    ctx.getOwnedCards();
                }
                else {
                    ctx.ALP.generateSimpleAlert("Error", "The card could not be deleted. Please try again later.");
                }
            })
                .catch(function (err) {
                loading.dismiss();
                console.log("Error: ", err);
                ctx.ALP.generateSimpleAlert("Error", "The card could not be deleted. Please try again later.");
            });
        })
            .catch(function (err) {
            console.log("Err: ", err);
            ctx.ALP.generateSimpleAlert("Error", "The card could not be deleted. Please try again later.");
        });
    };
    N7Page.prototype.shareCard = function (_id, vis) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__n14_n14__["a" /* N14Page */], { _id: _id, vis: vis });
    };
    return N7Page;
}());
N7Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n7',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n7/n7.html"*/'<!--\n  Generated template for the N7Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Owned Cards</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar></ion-searchbar>\n  <ion-list>\n    <ion-card *ngFor="let card of ownedCardsObj">\n      <ion-item-sliding>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4>\n                <div *ngIf="card.CRD_img_uri">\n                  <img *ngIf="card.CRD_img_uri.length>40 && card.CRD_img_uri.length<300"  src="{{card.CRD_img_uri}}" style="position:relative;"/>\n                  <img *ngIf="card.CRD_img_uri.length>300" src="data:image/png;base64,{{card.CRD_img_uri}}" style="position:relative;"/>\n                </div>\n                <span *ngIf="!card.CRD_img_uri">\n                  <img src="/assets/imgs/credit-card-512.png" style="position:relative;"/>\n                </span>\n              </ion-col>\n              <ion-col col-8>\n                <ion-card-content style="margin-bottom:-30px;margin-top:-35px;">\n                  <ion-card-title>\n                    Card ID {{card.CRD__id}}\n                  </ion-card-title>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col col-2>\n                        <ion-icon name="contact"></ion-icon>\n                      </ion-col>\n                      <ion-col col-10 style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">\n                        <b>{{card.CRD_na1}}</b>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-2>\n                        <ion-icon name="mail"></ion-icon>\n                      </ion-col>\n                      <ion-col col-10 style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">\n                        <b>{{card.CRD_eem}}</b>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-2>\n                        <ion-icon name="call"></ion-icon>\n                      </ion-col>\n                      <ion-col col-10>\n                        <b>{{card.CRD_ph1}}</b>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-12>\n                        <ion-icon name="ios-more"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button expandable color="light" (click)="shareCard(card.CRD__id, card.CRD_vis)">\n            <ion-icon name="share" style="font-size:24px"></ion-icon>\n            Share\n          </button>\n          <button ion-button expandable color="danger" (click)="deleteCard(card.CRD__id)">\n            <ion-icon name="trash" style="font-size:24px"></ion-icon>\n            Remove\n          </button>\n          <button ion-button expandable color="dark" (click)="editCard(card.CRD__id)">\n            <ion-icon name="settings" style="font-size:24px"></ion-icon>\n            Settings\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-card>\n  </ion-list>\n  <ion-fab bottom right>\n     <button ion-fab (click)="add()">\n        <ion-icon name="add"></ion-icon>\n     </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n7/n7.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */]])
], N7Page);

//# sourceMappingURL=n7.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N12Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_location_location__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_input_validator_input_validator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_cards_cards__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Geolocation, Geoposition } from '@ionic-native/geolocation';







var N12Page = (function () {
    function N12Page(navCtrl, navParams, LocP, ALP, PPR, formBuilder, InputVal, CardsP, SettsP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LocP = LocP;
        this.ALP = ALP;
        this.PPR = PPR;
        this.formBuilder = formBuilder;
        this.InputVal = InputVal;
        this.CardsP = CardsP;
        this.SettsP = SettsP;
        this.card = {
            vis: 1 //Visibility. //0: Private. 1: Public.
            ,
            na1: "Namey mcNamero" //Name
            ,
            eem: "anemail@aprovider.com" //Electronic Email Address.
            ,
            pob: "asdasd asd asdasd asd" //PO-Box Address.
            ,
            ph1: "256655854" //Phone Number #1
            ,
            ph2: "256664487" //Phone Number #1
            ,
            adr: "akldj ajsd ajsdkljaskldjaklsjdklajd" //Address (text)
            ,
            a_lon: "" //Longitude
            ,
            a_lat: "" //Latitude
            ,
            twt: "s5d4s5d4" //Twitter Username
            ,
            int: "a5sd4a5d" //Instagram Update.
            ,
            pin: "a5s4da5s" //Pinterest Username.
            ,
            gpu: "s5d4as54" //Google+ Username.
            ,
            img_uri: ""
        };
        this.loadDefSettings();
        this.card = {
            vis: 1 //Visibility. //0: Private. 1: Public.
            ,
            na1: "Namey mcNamero" //Name
            ,
            eem: "anemail@aprovider.com" //Electronic Email Address.
            ,
            pob: "asdasd asd asdasd asd" //PO-Box Address.
            ,
            ph1: "256655854" //Phone Number #1
            ,
            ph2: "256664487" //Phone Number #1
            ,
            adr: "akldj ajsd ajsdkljaskldjaklsjdklajd" //Address (text)
            ,
            a_lon: "" //Longitude
            ,
            a_lat: "" //Latitude
            ,
            twt: "s5d4s5d4" //Twitter Username
            ,
            int: "a5sd4a5d" //Instagram Update.
            ,
            pin: "a5s4da5s" //Pinterest Username.
            ,
            gpu: "s5d4as54" //Google+ Username.
            ,
            img_uri: ""
        };
        var ctx = this;
        this.myForm = formBuilder.group({
            na1: ['Namey McNamero', function (control) {
                    return (ctx.InputVal.isString_ShorterThan(120, control.value)) ? null : { text: "Invalid Name" };
                }],
            eem: ['eem1@provider.com', function (control) {
                    return (ctx.InputVal.isValid_Email(control.value)) ? null : { text: "Invalid Email" };
                }],
            pob: ['alskdj aklsdj aklsdjlaksjdlkajsd', function (control) {
                    return (ctx.InputVal.isString_ShorterThan(240, control.value)) ? null : { text: "Invalid PO-Box Address" };
                }],
            ph1: ['585556648', function (control) {
                    var isValid = !isNaN(control.value);
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(15, control.value + "");
                    return (isValid) ? null : { text: "Invalid Phone 1" };
                }],
            ph2: ['585556649', function (control) {
                    var isValid = !isNaN(control.value);
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(15, control.value + "");
                    return (isValid) ? null : { text: "Invalid Phone 2" };
                }],
            ctt: ['My New Title', function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(30, control.value);
                    return (isValid) ? null : { text: "Invalid Address" };
                }],
            adr: ['65a1d a6sd1 a6sd1a651d6a51sd', function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(300, control.value);
                    return (isValid) ? null : { text: "Invalid Address" };
                }],
            twt: ['a6s51d', function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(51, control.value);
                    return (isValid) ? null : { text: "Invalid Tweeter Username" };
                }],
            int: ['a6s5d1', function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(31, control.value);
                    return (isValid) ? null : { text: "Invalid Instagram Username" };
                }],
            pin: ['a6s51d', function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(16, control.value);
                    return (isValid) ? null : { text: "Invalid Pinterest Username" };
                }],
            gpu: ['adasdd', function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(65, control.value);
                    return (isValid) ? null : { text: "Invalid Google+ Username" };
                }]
        });
    }
    N12Page.prototype.loadDefSettings = function () {
        //Loads defPassword.
        var ctx = this;
        ctx.SettsP.getSettings()
            .then(function (data) {
            ctx.defPassword = data.card_default_pass;
            ctx.defType = (typeof data.card_default_type === "string" && !isNaN(parseInt(data.card_default_type))) ? parseInt(data.card_default_type) : 1;
            ctx.card.vis = ctx.defType;
        })
            .catch(function (err) {
            console.log("Error: ", err);
        });
    };
    N12Page.prototype.switchVisibility = function () {
        this.card.vis = (this.card.vis === 1) ? 0 : 1;
    };
    N12Page.prototype.loadMap = function () {
        var ctx = this;
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        ctx.setPin();
    };
    N12Page.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    N12Page.prototype.getImage = function () {
        var ctx = this;
        ctx.CardsP.getImageData()
            .then(function (data) {
            console.log("Data: ", data);
            ctx.card.img_uri = data;
        })
            .catch(function (err) {
            console.log("Error: ", err);
            ctx.card.img_uri = "iVBORw0KGgoAAAANSUhEUgAAATcAAAEUCAYAAABOGnGqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADA5JREFUeNrs3SF0HMcZB/BxTAIvLCwnVhaZlXnNUhSZtSgKa1EUWBQFFapBhUpQX5Fs1iCdWJlkFqYLC5PCEuTu5FaxbEun03nvbueb3++9eXLz8hprdvd/3zc7u5cSAAAAAAAAAAAAAAAAAAAAAAAAAAB0HpgCNqi55c83uWzH2Q1/BuHGRozasd2F10ftGC8QZIu6CrlpO150fz7r/jnCDXp1FV6Pu5/jDfwdcsBN2nHS/RR2wFJyZXbQjtN2vBzgyH+vvQ0FLVBghbbfjvOBBtpdQTdyCIHrdtpxXFig3TaOUn/rf0CBRl21U1qVtujIv9euwwx1hVpuPS+ChpqQgwrtVRRqQg4q0ARuP+87jpM1OSjeOM0W2IXa2+MgubsKWtCgI8/PjlMFyjBKcbZ1rGscquJg2HZUa+90w2HbKQTDsy+gehl7TiXQhkZuU4ENym3UqTBa2fOq1uFgQ8FmfW31ATd2qoFgi7pdxI0GWAN3RAUchNMIGgEHWlFDwAXjOxRiBlve7uHu3ebl727YSr7DQbjxznKgnQu2QclfVvNEwK3fe6YgVLCp2IZZSdvouwEPTUEY/2rHJ6ZhkP7Qfeh8byrgfvIzjhbxhz+8MmmNrLnFaHtOTUMR8rrbo3ZMTYVwY75R8thPac66gGPFrLmVLa+zNaahKB92RcXEVMDN8vqNdaxyhw2+2lK0o9pTtKW1+Eey7SNCe/pzO/5nKlRuzLg7GofHs1RuXPNv7WgY73cV3HNToXKrXZNmj1gRS67epqZB5Vazo+6TnlhGqjdqtptsn4g8LDX0zFtByvGZKQjtK1PQL2tuZWiStbYaWHtTuVXnC1OgekPlFs04zd6uS3z2vancVG2ElO+aeuebyq0aF8mrw2vimVOVWxV2BFt18uN1Y9Mg3KL71BRUyVKEtlRLSkjTNLuxgMpNS0ooY62pcNOSEvnDDeEWUmMKfLixPGtuw21LbNzF9alyU7XhPEC4leCxKUC4CbeIfO0b2cemQE8fzUtTQLLfTeWmFSGocbLXUbgFO6HhiiUK4SbcEG4ItyGziMx12lLh5mTGhx3CTVuKDzvhhnCD8tjnNjz2uOE6VbkBCLcSNKYAhBuAcAOEG4BwAxBuAGti/8yw5N3oF6YB16lJi8gmXlyn2lIIb2oKhFsUl6YA4SbcIjozBSDcILoTUyDcnMyAcBswa25cNzEFwi0Ka25cNzUFy7F/Znhs5MU1qnIL25b6tEZLKty0pjgPEG6lcMcU54Fw047gPEC4ldSO2BLiHHAOCDef2jj+CLdSPDcFjj/Ls4dmuOx3q1duRz8wDSq3yCf4M9NQJcdduGlNcNzRlmpNKcG0HVumQeVWQ2v6rWnQkqJyi6hpx7FpqMZW8myxyq0SEyd7VVWbY92Th6agCD+3Y8c0hPc34aYtrVG+sTAyDWHlx60emQZtaY2+MQWOLyq3iHLVdq56Cym3orZ/9MyaWzl+acev7fjEVITzeTt+MA0qt9rl6m1sGsKYtOOJaeifNbfyfGkKQvnaFMAreVPvS6P4cehU1pbyunHXnlKu/GjdVvK23ZVxQ6HcCyN/MDWmolh/Sb7dCm51qrUrchw5dbWlzLfdBRzaUbSlofyUZs+d2vumHYWQjrR6RYwDpyrczyhZfxv6sHwAS8rrbxdCZJDDM8HwjhpBMrhx0X3wAO9oV6AManjJKPRoT6gMYuw6FaF/h8JFsIGAMwQbCDhDsMEw7AodwQZDkbcP7Au4YrZ7NE5ZmG/Uhdr1Fxr2tQHURt/VbNC1jw3u0HQXy02P7vQVcOPkUa2+xnEPx+WwOx4CkrAO0t3PJm6v8b9nzB99LBm8ebNnz2VAtLW1RSupvtd2drSpS7WhzQqCrc9qEDZu2ScJ+vyEHyVfOHOfN+iOVhhs1z/EPLZFkfoIlL4uNFXc+qq1+x5373+jKE2PIdL3OtzIWtyNa2ujnub2dMljPHbZELUNvauF6Xshelur+lvrOO5xPi+SfXQEbUNX/SrwvtvUqyqztpA77jlIdnus1N1NZVDuczd0KGtDNYbc0QrmbhUtfp+bumEQ62v3/SKS0YqCOtKD+Bc9t59Xxiv+QDsVcGzSbopxh++2Nnsvlfukw3F3fFYREOu66+z15WzEfhrWwvgqP+XH3e879KA77QJ5vKJ5GG2gqr1I3kTCGg2xbVvXRTDuAuQobX7P3Hl3LFZVob25/HC+wd9VwFFlsL3Zjq2zldnuLryDtNobEhfd//9B998br+n3W8ddcBt+l/TAFPR6kjeF/H2/bceX7bjc0FxtdwF0FUIfL1hd5b/vi+7PZ93/PtvQ75Er1K/SsBb283H93OVInxdriQvrF6m/3fc1aQZ+vA8dImoOtlU/4RDReEAtqIBj5Y5SnD1f58nC9G2hVuLePgHH0qJ+q5R2texQE3AItrSZ3fslrKlFetRMwLGwvQqC7aYtJJFfnnj1xMV50OMn4LjTToXB9mY1l/dTbQc6nrV8afW+y5fb+Fq8t29A7BUYdFeBVuOx3HUZc1Pb4uvw5gfdwUBb13F3UR8lH04vU0UvvfSEwmKOki/suI9JO07S7OmB/Od1PkHQdNXk4/TqSQheycfiSXdshFvl9pLn9t7VtBsn1/58NZZdIhilV49wfdz99AqgxZx1AXcZ+ZcUbne3NF4MuJ6L7a4Lbdtx6NWzdjwVbvXq+9ulYEjyyxP+GfWXe8/xnduOCjYiO4h8jqvctKPUbdqORyng+ttDx/ZGh6o2KpE/wN9vx/cqt/iaNHvcCGqS755OhFtsbiKgPdWWhrPbjr+aBiptT3+NVL2p3F6XHyMamwYqtpWW31w9KLaCvF61CTZqF+b1SCq3V6y1wUyImwsqt5lGsMHvvtKWxvGZKYDXPuwbbWn58l2iC9MAr5l07anKrWDe0wYBqzfhltKnpgBu9IW2VEsKURW77632yk1LCvPtakvL9Ni5C3MVu5Og9nBrnLsw1zgVugf0vcoP2ti5CzGrt5rDzRMJsJgi16aFGxCyNa053NxMgMU1wq0cvvwFAhcDNW/ifel8hYXl149/oHIDInY6Y+E2fI1zFe5NuAGKAuEGlOIj4QZoS4UbUIiitk8JN2BRRT2lINyAkIQbINwAhBsQUTHrbrWG28Q5Cksp5o6pB+eBkJlRc1t65jyFuGoOt0uHH4Sbyg0QboX40eGHe5kKN5UbCDfhtjET5yrcS1Hr1LVv4lW9weJeCDfVG2hLhdtGnThfIWa4Paj8YOVHSS6csxAvL2qv3PICqXU3CFa1CbeZ56YA7jQRbuV5ZgrgTi9K+wsLt1lbOjUNoHJTvUFdilybFm4z35kCiFO1CTetKSyiyP2gwk31BncpctnmgeP2u3E7zk0DvCZ3NFsqt/IP4sQ0QPlVm3DTmkLYa0Jb+rb8rOnINMBvW0A+ULnF8Y0pgLJbUuF2s29NAZTdkgq3m00FHJR/g024aU0hXEuauaFwu+N2NKaBSm2lwp/aUbnd7mtTQKUmKcDjiMJt/gGemAYqFGJZRls6X9O1p1CLaSr0cSuVm+oN5gmzHKNyu9s4eaAeVVtxHjqed8qPoOTHsf5oKgjuaQr0XkOV22JyuJ12VRxE9KwLtzBUbov5pR0/tuPPpoKg3cnT7qdwq9APXeW2bSoI5u/t+G+0X0pbqj1FO/o04i8m3O5vuws4KN20HY+itaPa0uX9lGbrbzumgoLlQPtTCvytb8JtOWfJ+htl+1sKuM6mLe2PN4dQos9TBe8sFG7vZtQFnAoOwSbcBBwINuEm4ECwLcUNhX7kJxj+044PBRwDc3VX9Fltv7hw6zfgnicP2TMc+a7+k+4n9CLvgctf7vzSMDY0DlyGrMo4zdbhXGjGOkd+92Dj8mMd9lRxxprGfrcsAmut4g5dfMaKxmHyMgc2bFuragg1ooecSs5YZlwINUppV/e7RWAXrjFv5Nds7VpTW5wnFIZVzX2WZttIfCqT5f1p36XZBtyp6RBuUYKuacfj7qdP6zrkAJu046T7KdCEWxXta9P9fNz9VN2V7bKrzPJ4IcyEG29XeKNrP1MXfjf9O6w/uK6cXGszL6/9BAAAAAAAAAAAAAAAAAAAAAAAAAAAAFjS/wUYAImn6FFWzuAVAAAAAElFTkSuQmCC";
        });
    };
    N12Page.prototype.setPin = function () {
        //Sets the pin position to the center of the map.
        if (typeof this.marker !== "undefined") {
            this.marker.setPosition(this.map.getCenter());
        }
        else {
            this.marker = new google.maps.Marker({
                position: this.map.getCenter(),
                map: this.map,
                draggable: true,
                title: 'Your Position'
            });
        }
    };
    N12Page.prototype.locateSelf = function () {
        //Get our current position AND set the map center to it
        var isOnChrome = true;
        var ctx = this;
        this.LocP.getCurrentPosition()
            .then(function (data) {
            var mapPos = new google.maps.LatLng(data.data.coords.latitude, data.data.coords.longitude);
            ctx.map.setCenter(mapPos);
            if (data.coarse) {
                ctx.map.setZoom(10);
            }
        })
            .catch(function (err) {
            ctx.ALP.generateSimpleAlert("Error", "There has been an error locating you.");
        });
    };
    N12Page.prototype.storeCard = function (cardPayload) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            var postPayload = {};
            for (var index in cardPayload) {
                if (typeof cardPayload[index] != null) {
                    postPayload[index] = {
                        value: cardPayload[index],
                        set: true
                    };
                }
            }
            console.log("cardPayload to store: ", cardPayload);
            if (ctx.card.vis == 0) {
                ctx.ALP.generateSimpleInputAlert({
                    title: "Input the card password",
                    inputs: [{
                            placeholder: "Card Code",
                            type: "password",
                            value: ctx.defPassword
                        }, {
                            placeholder: "Confirm Card Code",
                            type: "password",
                            value: ctx.defPassword
                        }]
                })
                    .then(function (data) {
                    if (data[0].length > 0 && data[1].length > 0) {
                        if (data[0] === data[1]) {
                            postPayload["cde"] = {
                                set: true,
                                value: data[0]
                            };
                            ctx.PPR.createUserCard(postPayload)
                                .then(function (data) {
                                accept(data);
                            })
                                .catch(function (err) {
                                reject({ where: 0, err: err });
                            });
                        }
                        else {
                            ctx.ALP.generateSimpleAlert("Error", "Codes do not match");
                            reject({ where: 0, text: "Codes do not match" });
                        }
                    }
                    else {
                        //Confirm the card is going to be public and change it.
                        ctx.ALP.generateSimpleAlert("Confirm public creation", "This card is going to be public. Do you want to create it?")
                            .then(function (data) {
                            ctx.PPR.createUserCard(postPayload)
                                .then(function (data) {
                                console.log("createUserCard 2: ", data);
                                accept(data);
                            })
                                .catch(function (err) {
                                reject({ where: 0, err: err });
                            });
                        })
                            .catch(function (err) {
                            reject({ where: 0, err: err });
                        });
                    }
                })
                    .catch(function (err) {
                    reject({ where: 0, err: err });
                });
            }
            else {
                ctx.PPR.createUserCard(postPayload)
                    .then(function (data) {
                    console.log("createUserCard 3: ", data);
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 0, err: err });
                });
            }
        });
    };
    N12Page.prototype.createCard = function () {
        var ctx = this;
        if (ctx.myForm.valid) {
            /*Get the data*/
            if (typeof ctx.marker !== "undefined") {
                ctx.card.a_lat = ctx.marker.getPosition().lat();
                ctx.card.a_lon = ctx.marker.getPosition().lng();
            }
            for (var index in ctx.myForm.value) {
                ctx.card[index] = ctx.myForm.value[index];
            }
            ctx.storeCard(ctx.card)
                .then(function (data) {
                if (data != null && typeof data === "object" && data.CRD__id) {
                    //ctx.ALP.generateSimpleAlert("Created", "Your card ID "+data.CRD__id+" has been created");
                    //Update Image.
                    if (ctx.card.img_uri.length > 100) {
                        //data.CRD__id
                        ctx.CardsP.updateCardImage(ctx.card.img_uri, {
                            CRD__id: data.CRD__id
                        })
                            .then(function (pictureURL) {
                            ctx.card.img_uri = pictureURL;
                            console.log("data.CRD__id: ", data.CRD__id);
                            var _upPayload = {};
                            for (var index in ctx.card) {
                                _upPayload[index] = {
                                    set: true,
                                    value: ctx.card[index]
                                };
                            }
                            ctx.PPR.updateUserOwnedCard(_upPayload, data.CRD__id)
                                .then(function (data) {
                                console.log("updateUserOwnedCard data: ", data);
                                ctx.ALP.generateSimpleAlert("Success", "The card has been created successfully.");
                                ctx.navCtrl.goToRoot({});
                            })
                                .catch(function (err) {
                                console.log("Err: ", err);
                                ctx.ALP.generateSimpleAlert("Error", "There has been an error setting the card image. Please try again later.");
                            });
                        })
                            .catch(function (err) {
                            console.log(err);
                            ctx.ALP.generateSimpleAlert("Error", "There has been an error setting the card image (1). Please try again later.");
                        });
                    }
                    else {
                        ctx.ALP.generateSimpleAlert("Success", "The card has been created successfully.");
                        ctx.navCtrl.goToRoot({});
                    }
                }
                else {
                    ctx.ALP.generateSimpleAlert("Error", "There has been an error creating the card. Please try again later.");
                }
            })
                .catch(function (err) {
                console.log("Error from storing card: ", err);
            });
        }
    };
    return N12Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], N12Page.prototype, "mapElement", void 0);
N12Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n12',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n12/n12.html"*/'<!--\n  Generated template for the N9Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Create Presentation Card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="border:1px solid black;">\n  <form [formGroup]="myForm">\n    <ion-grid>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:25px">\n          <ion-icon name="image"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <img *ngIf="card.img_uri.length<40" src="/assets/imgs/credit-card-512.png" style="position:relative;"/>\n          <img *ngIf="card.img_uri.length<200 && card.img_uri.length> 40" src="{{card.img_uri}}" style="position:relative;"/>\n          <img *ngIf="card.img_uri.length>200" src="data:image/png;base64,{{card.img_uri}}" style="position:relative;"/>\n        </ion-col>\n        <ion-col col-1>\n          <button ion-button color="light">\n            <ion-icon name="create" (click)="getImage()"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12 *ngIf="card.vis==0"><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content" (click)="switchVisibility()" *ngIf="card.vis==0">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="eye-off"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <b>Private Card</b>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="card.vis!=0"><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content" (click)="switchVisibility()" *ngIf="card.vis!=0">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="eye"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <b>Public Card</b>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="contact"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Card Title Here"  formControlName="ctt"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="contact"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your name here"  formControlName="na1"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:25px">\n          <ion-icon name="phone-portrait"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="number" placeholder="Your Cellphone" formControlName="ph1"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="call"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="number" placeholder="Your local phone number" formControlName="ph2"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-twitter"></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <b>@</b>\n        </ion-col>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="@yourTweeterUsername" formControlName="twt"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-instagram"></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <b>@</b>\n        </ion-col>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="@yourInstagramUsername" formControlName="int"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-pinterest"></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <b>@</b>\n        </ion-col>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="@yourPinterestUsername" formControlName="pin"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-googleplus"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your Google+ Username" formControlName="gpu"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="mail"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your Email Here" formControlName="eem"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="mail"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your PO-Box Address Here" formControlName="pob"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="md-compass"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your Address Here" formControlName="adr"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="pin"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <div #map id="map" style="height:250px"></div>\n        </ion-col>\n        <ion-col col-1>\n          <button ion-button color="light" (click)="setPin()">\n            <ion-icon name="pin"></ion-icon>\n          </button>\n          <button ion-button color="light" (click)="locateSelf()">\n            <ion-icon name="locate"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="pin"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <b>Custom Field Name Here</b>\n          <hr/>\n          <b>Custom Field Content Here</b>\n        </ion-col>\n        <ion-col col-1>\n          <button ion-button color="light">\n            <ion-icon name="create"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row>\n        <button ion-button icon-start color="light">\n          <ion-icon name="add"></ion-icon>\n          <b>Add Field</b>\n        </button>\n        <button ion-button icon-start (click)="createCard()" [disabled]="!myForm.valid">\n          <ion-icon name="cloud-done"></ion-icon>\n          <b>Create</b>\n        </button>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n12/n12.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_location_location__["a" /* LocationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__providers_input_validator_input_validator__["a" /* InputValidatorProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_cards_cards__["a" /* CardsProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_settings_settings__["a" /* SettingsProvider */]])
], N12Page);

//# sourceMappingURL=n12.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N13Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_location_location__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_input_validator_input_validator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_cards_cards__ = __webpack_require__(139);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var N13Page = (function () {
    function N13Page(navCtrl, navParams, LocP, ALP, PPR, formBuilder, CardsP, InputVal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LocP = LocP;
        this.ALP = ALP;
        this.PPR = PPR;
        this.formBuilder = formBuilder;
        this.CardsP = CardsP;
        this.InputVal = InputVal;
        this.mapLoaded = false;
        this.card = {
            vis: 1 //Visibility. //0: Private. 1: Public.
            ,
            na1: "Namey mcNamero" //Name
            ,
            eem: "anemail@aprovider.com" //Electronic Email Address.
            ,
            pob: "asdasd asd asdasd asd" //PO-Box Address.
            ,
            ph1: "256655854" //Phone Number #1
            ,
            ph2: "256664487" //Phone Number #1
            ,
            adr: "akldj ajsd ajsdkljaskldjaklsjdklajd" //Address (text)
            ,
            a_lon: "" //Longitude
            ,
            a_lat: "" //Latitude
            ,
            twt: "s5d4s5d4" //Twitter Username
            ,
            int: "a5sd4a5d" //Instagram Update.
            ,
            pin: "a5s4da5s" //Pinterest Username.
            ,
            gpu: "s5d4as54" //Google+ Username.
            ,
            img_uri: ""
        };
        this.card = {
            vis: 1 //Visibility. //0: Private. 1: Public.
            ,
            na1: "" //Name
            ,
            eem: "" //Electronic Email Address.
            ,
            pob: "" //PO-Box Address.
            ,
            ph1: "" //Phone Number #1
            ,
            ph2: "" //Phone Number #1
            ,
            adr: "" //Address (text)
            ,
            a_lon: "" //Longitude
            ,
            a_lat: "" //Latitude
            ,
            twt: "" //Twitter Username
            ,
            int: "" //Instagram Update.
            ,
            pin: "" //Pinterest Username.
            ,
            gpu: "" //Google+ Username.
            ,
            img_uri: ""
        };
        var ctx = this;
        ctx.setForm(ctx.card);
        ctx.loadCard();
    }
    N13Page.prototype.switchVisibility = function () {
        this.card.vis = (this.card.vis === 1) ? 0 : 1;
    };
    N13Page.prototype.setForm = function (formData) {
        var ctx = this;
        this.myForm = ctx.formBuilder.group({
            na1: [formData.na1, function (control) {
                    return (ctx.InputVal.isString_ShorterThan(120, control.value)) ? null : { text: "Invalid Name" };
                }],
            eem: [formData.eem, function (control) {
                    return (ctx.InputVal.isValid_Email(control.value)) ? null : { text: "Invalid Email" };
                }],
            pob: [formData.pob, function (control) {
                    return (ctx.InputVal.isString_ShorterThan(240, control.value)) ? null : { text: "Invalid PO-Box Address" };
                }],
            ph1: [formData.ph1, function (control) {
                    var isValid = !isNaN(control.value);
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(15, control.value + "");
                    return (isValid) ? null : { text: "Invalid Phone 1" };
                }],
            ph2: [formData.ph2, function (control) {
                    var isValid = !isNaN(control.value);
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(15, control.value + "");
                    return (isValid) ? null : { text: "Invalid Phone 2" };
                }],
            ctt: [formData.ctt, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(30, control.value);
                    return (isValid) ? null : { text: "Invalid Address" };
                }],
            adr: [formData.adr, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(300, control.value);
                    return (isValid) ? null : { text: "Invalid Address" };
                }],
            twt: [formData.twt, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(51, control.value);
                    return (isValid) ? null : { text: "Invalid Tweeter Username" };
                }],
            int: [formData.int, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(31, control.value);
                    return (isValid) ? null : { text: "Invalid Instagram Username" };
                }],
            pin: [formData.pin, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(16, control.value);
                    return (isValid) ? null : { text: "Invalid Pinterest Username" };
                }],
            gpu: [formData.gpu, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(65, control.value);
                    return (isValid) ? null : { text: "Invalid Google+ Username" };
                }]
        });
        if (this.map) {
            if (!isNaN(formData.a_lat) && !isNaN(formData.a_lon)) {
                ctx.map.setCenter(new google.maps.LatLng(formData.a_lat, formData.a_lon));
                ctx.setPin();
            }
        }
    };
    N13Page.prototype.loadCard = function () {
        var ctx = this;
        ctx._id = this.navParams.get('_id');
        console.log("Loading card with _id: ", ctx._id);
        ctx.PPR.getUserOwnedCard(ctx._id, {
            na1: true,
            eem: true,
            ctt: true,
            pob: true,
            ph1: true,
            ph2: true,
            adr: true,
            a_lon: true,
            a_lat: true,
            twt: true,
            int: true,
            pin: true,
            gpu: true,
            vis: true,
            img_uri: true
        })
            .then(function (data) {
            console.log("Data result: ", data);
            if (data.length > 0) {
                //CRD_
                for (var index in data[0]) {
                    ctx.card[index.replace("CRD_", "")] = data[0][index];
                }
                ctx.originalCard = JSON.parse(JSON.stringify(ctx.card));
                ctx.setForm(ctx.card);
            }
            else {
                ctx.ALP.generateSimpleAlert("Error", "This card could not be loaded. Please try again later.");
            }
            //Set the card data to ctx.card
        })
            .catch(function (err) {
            console.log("Error result: ", err);
        });
    };
    N13Page.prototype.loadMap = function () {
        var ctx = this;
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        ctx.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        //ctx.setPin();
        ctx.mapLoaded = true;
    };
    N13Page.prototype.ionViewDidLoad = function () {
        this.loadMap();
        this.setForm(this.card);
    };
    N13Page.prototype.setPin = function () {
        //Sets the pin position to the center of the map.
        if (typeof this.marker !== "undefined") {
            this.marker.setPosition(this.map.getCenter());
        }
        else {
            this.marker = new google.maps.Marker({
                position: this.map.getCenter(),
                map: this.map,
                draggable: true,
                title: 'Your Position'
            });
        }
    };
    N13Page.prototype.locateSelf = function () {
        //Get our current position AND set the map center to it
        var isOnChrome = true;
        var ctx = this;
        this.LocP.getCurrentPosition()
            .then(function (data) {
            var mapPos = new google.maps.LatLng(data.data.coords.latitude, data.data.coords.longitude);
            ctx.map.setCenter(mapPos);
            if (data.coarse) {
                ctx.map.setZoom(10);
            }
        })
            .catch(function (err) {
            ctx.ALP.generateSimpleAlert("Error", "There has been an error locating you.");
        });
    };
    N13Page.prototype.storeCard = function (cardPayload) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            var postPayload = {};
            for (var index in cardPayload) {
                if (typeof cardPayload[index] != null) {
                    postPayload[index] = {
                        value: cardPayload[index],
                        set: true
                    };
                }
            }
            if (ctx.card.vis == 0 && ctx.originalCard.vis == 1) {
                ctx.ALP.generateSimpleInputAlert({
                    title: "Input the card password",
                    inputs: [{
                            placeholder: "Card Code",
                            type: "password"
                        }, {
                            placeholder: "Confirm Card Code",
                            type: "password"
                        }]
                })
                    .then(function (data) {
                    if (data[0].length > 0 && data[1].length > 0) {
                        if (data[0] === data[1]) {
                            postPayload["cde"] = {
                                set: true,
                                value: data[0]
                            };
                            ctx.PPR.updateUserOwnedCard(postPayload, ctx._id)
                                .then(function (data) {
                                accept(data);
                            })
                                .catch(function (err) {
                                reject({ where: 0, err: err });
                            });
                        }
                        else {
                            ctx.ALP.generateSimpleAlert("Error", "Codes do not match");
                            reject({ where: 0, text: "Codes do not match" });
                        }
                    }
                    else {
                        //Confirm the card is going to be public and change it.
                        ctx.ALP.generateSimpleAlert("Confirm public", "This card is going to be public. Do you want to create it?")
                            .then(function (data) {
                            ctx.PPR.updateUserOwnedCard(postPayload, ctx._id)
                                .then(function (data) {
                                console.log("updateUserOwnedCard 2: ", data);
                                accept(data);
                            })
                                .catch(function (err) {
                                reject({ where: 0, err: err });
                            });
                        })
                            .catch(function (err) {
                            reject({ where: 0, err: err });
                        });
                    }
                })
                    .catch(function (err) {
                    reject({ where: 0, err: err });
                });
            }
            else {
                ctx.PPR.updateUserOwnedCard(postPayload, ctx._id)
                    .then(function (data) {
                    console.log("updateUserOwnedCard 3: ", data);
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 0, err: err });
                });
            }
        });
    };
    N13Page.prototype.getImage = function () {
        var ctx = this;
        ctx.CardsP.getImageData()
            .then(function (data) {
            console.log("Data: ", data);
            ctx.card.img_uri = data;
        })
            .catch(function (err) {
            console.log("Error: ", err);
            ctx.card.img_uri = "iVBORw0KGgoAAAANSUhEUgAAATcAAAEUCAYAAABOGnGqAAAACXBIWXMAABcSAAAXEgFnn9JSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADA5JREFUeNrs3SF0HMcZB/BxTAIvLCwnVhaZlXnNUhSZtSgKa1EUWBQFFapBhUpQX5Fs1iCdWJlkFqYLC5PCEuTu5FaxbEun03nvbueb3++9eXLz8hprdvd/3zc7u5cSAAAAAAAAAAAAAAAAAAAAAAAAAAB0HpgCNqi55c83uWzH2Q1/BuHGRozasd2F10ftGC8QZIu6CrlpO150fz7r/jnCDXp1FV6Pu5/jDfwdcsBN2nHS/RR2wFJyZXbQjtN2vBzgyH+vvQ0FLVBghbbfjvOBBtpdQTdyCIHrdtpxXFig3TaOUn/rf0CBRl21U1qVtujIv9euwwx1hVpuPS+ChpqQgwrtVRRqQg4q0ARuP+87jpM1OSjeOM0W2IXa2+MgubsKWtCgI8/PjlMFyjBKcbZ1rGscquJg2HZUa+90w2HbKQTDsy+gehl7TiXQhkZuU4ENym3UqTBa2fOq1uFgQ8FmfW31ATd2qoFgi7pdxI0GWAN3RAUchNMIGgEHWlFDwAXjOxRiBlve7uHu3ebl727YSr7DQbjxznKgnQu2QclfVvNEwK3fe6YgVLCp2IZZSdvouwEPTUEY/2rHJ6ZhkP7Qfeh8byrgfvIzjhbxhz+8MmmNrLnFaHtOTUMR8rrbo3ZMTYVwY75R8thPac66gGPFrLmVLa+zNaahKB92RcXEVMDN8vqNdaxyhw2+2lK0o9pTtKW1+Eey7SNCe/pzO/5nKlRuzLg7GofHs1RuXPNv7WgY73cV3HNToXKrXZNmj1gRS67epqZB5Vazo+6TnlhGqjdqtptsn4g8LDX0zFtByvGZKQjtK1PQL2tuZWiStbYaWHtTuVXnC1OgekPlFs04zd6uS3z2vancVG2ElO+aeuebyq0aF8mrw2vimVOVWxV2BFt18uN1Y9Mg3KL71BRUyVKEtlRLSkjTNLuxgMpNS0ooY62pcNOSEvnDDeEWUmMKfLixPGtuw21LbNzF9alyU7XhPEC4leCxKUC4CbeIfO0b2cemQE8fzUtTQLLfTeWmFSGocbLXUbgFO6HhiiUK4SbcEG4ItyGziMx12lLh5mTGhx3CTVuKDzvhhnCD8tjnNjz2uOE6VbkBCLcSNKYAhBuAcAOEG4BwAxBuAGti/8yw5N3oF6YB16lJi8gmXlyn2lIIb2oKhFsUl6YA4SbcIjozBSDcILoTUyDcnMyAcBswa25cNzEFwi0Ka25cNzUFy7F/Znhs5MU1qnIL25b6tEZLKty0pjgPEG6lcMcU54Fw047gPEC4ldSO2BLiHHAOCDef2jj+CLdSPDcFjj/Ls4dmuOx3q1duRz8wDSq3yCf4M9NQJcdduGlNcNzRlmpNKcG0HVumQeVWQ2v6rWnQkqJyi6hpx7FpqMZW8myxyq0SEyd7VVWbY92Th6agCD+3Y8c0hPc34aYtrVG+sTAyDWHlx60emQZtaY2+MQWOLyq3iHLVdq56Cym3orZ/9MyaWzl+acev7fjEVITzeTt+MA0qt9rl6m1sGsKYtOOJaeifNbfyfGkKQvnaFMAreVPvS6P4cehU1pbyunHXnlKu/GjdVvK23ZVxQ6HcCyN/MDWmolh/Sb7dCm51qrUrchw5dbWlzLfdBRzaUbSlofyUZs+d2vumHYWQjrR6RYwDpyrczyhZfxv6sHwAS8rrbxdCZJDDM8HwjhpBMrhx0X3wAO9oV6AManjJKPRoT6gMYuw6FaF/h8JFsIGAMwQbCDhDsMEw7AodwQZDkbcP7Au4YrZ7NE5ZmG/Uhdr1Fxr2tQHURt/VbNC1jw3u0HQXy02P7vQVcOPkUa2+xnEPx+WwOx4CkrAO0t3PJm6v8b9nzB99LBm8ebNnz2VAtLW1RSupvtd2drSpS7WhzQqCrc9qEDZu2ScJ+vyEHyVfOHOfN+iOVhhs1z/EPLZFkfoIlL4uNFXc+qq1+x5373+jKE2PIdL3OtzIWtyNa2ujnub2dMljPHbZELUNvauF6Xshelur+lvrOO5xPi+SfXQEbUNX/SrwvtvUqyqztpA77jlIdnus1N1NZVDuczd0KGtDNYbc0QrmbhUtfp+bumEQ62v3/SKS0YqCOtKD+Bc9t59Xxiv+QDsVcGzSbopxh++2Nnsvlfukw3F3fFYREOu66+z15WzEfhrWwvgqP+XH3e879KA77QJ5vKJ5GG2gqr1I3kTCGg2xbVvXRTDuAuQobX7P3Hl3LFZVob25/HC+wd9VwFFlsL3Zjq2zldnuLryDtNobEhfd//9B998br+n3W8ddcBt+l/TAFPR6kjeF/H2/bceX7bjc0FxtdwF0FUIfL1hd5b/vi+7PZ93/PtvQ75Er1K/SsBb283H93OVInxdriQvrF6m/3fc1aQZ+vA8dImoOtlU/4RDReEAtqIBj5Y5SnD1f58nC9G2hVuLePgHH0qJ+q5R2texQE3AItrSZ3fslrKlFetRMwLGwvQqC7aYtJJFfnnj1xMV50OMn4LjTToXB9mY1l/dTbQc6nrV8afW+y5fb+Fq8t29A7BUYdFeBVuOx3HUZc1Pb4uvw5gfdwUBb13F3UR8lH04vU0UvvfSEwmKOki/suI9JO07S7OmB/Od1PkHQdNXk4/TqSQheycfiSXdshFvl9pLn9t7VtBsn1/58NZZdIhilV49wfdz99AqgxZx1AXcZ+ZcUbne3NF4MuJ6L7a4Lbdtx6NWzdjwVbvXq+9ulYEjyyxP+GfWXe8/xnduOCjYiO4h8jqvctKPUbdqORyng+ttDx/ZGh6o2KpE/wN9vx/cqt/iaNHvcCGqS755OhFtsbiKgPdWWhrPbjr+aBiptT3+NVL2p3F6XHyMamwYqtpWW31w9KLaCvF61CTZqF+b1SCq3V6y1wUyImwsqt5lGsMHvvtKWxvGZKYDXPuwbbWn58l2iC9MAr5l07anKrWDe0wYBqzfhltKnpgBu9IW2VEsKURW77632yk1LCvPtakvL9Ni5C3MVu5Og9nBrnLsw1zgVugf0vcoP2ti5CzGrt5rDzRMJsJgi16aFGxCyNa053NxMgMU1wq0cvvwFAhcDNW/ifel8hYXl149/oHIDInY6Y+E2fI1zFe5NuAGKAuEGlOIj4QZoS4UbUIiitk8JN2BRRT2lINyAkIQbINwAhBsQUTHrbrWG28Q5Cksp5o6pB+eBkJlRc1t65jyFuGoOt0uHH4Sbyg0QboX40eGHe5kKN5UbCDfhtjET5yrcS1Hr1LVv4lW9weJeCDfVG2hLhdtGnThfIWa4Paj8YOVHSS6csxAvL2qv3PICqXU3CFa1CbeZ56YA7jQRbuV5ZgrgTi9K+wsLt1lbOjUNoHJTvUFdilybFm4z35kCiFO1CTetKSyiyP2gwk31BncpctnmgeP2u3E7zk0DvCZ3NFsqt/IP4sQ0QPlVm3DTmkLYa0Jb+rb8rOnINMBvW0A+ULnF8Y0pgLJbUuF2s29NAZTdkgq3m00FHJR/g024aU0hXEuauaFwu+N2NKaBSm2lwp/aUbnd7mtTQKUmKcDjiMJt/gGemAYqFGJZRls6X9O1p1CLaSr0cSuVm+oN5gmzHKNyu9s4eaAeVVtxHjqed8qPoOTHsf5oKgjuaQr0XkOV22JyuJ12VRxE9KwLtzBUbov5pR0/tuPPpoKg3cnT7qdwq9APXeW2bSoI5u/t+G+0X0pbqj1FO/o04i8m3O5vuws4KN20HY+itaPa0uX9lGbrbzumgoLlQPtTCvytb8JtOWfJ+htl+1sKuM6mLe2PN4dQos9TBe8sFG7vZtQFnAoOwSbcBBwINuEm4ECwLcUNhX7kJxj+044PBRwDc3VX9Fltv7hw6zfgnicP2TMc+a7+k+4n9CLvgctf7vzSMDY0DlyGrMo4zdbhXGjGOkd+92Dj8mMd9lRxxprGfrcsAmut4g5dfMaKxmHyMgc2bFuragg1ooecSs5YZlwINUppV/e7RWAXrjFv5Nds7VpTW5wnFIZVzX2WZttIfCqT5f1p36XZBtyp6RBuUYKuacfj7qdP6zrkAJu046T7KdCEWxXta9P9fNz9VN2V7bKrzPJ4IcyEG29XeKNrP1MXfjf9O6w/uK6cXGszL6/9BAAAAAAAAAAAAAAAAAAAAAAAAAAAAFjS/wUYAImn6FFWzuAVAAAAAElFTkSuQmCC";
        });
    };
    N13Page.prototype.updateCard = function () {
        var ctx = this;
        if (ctx.myForm.valid) {
            /*Get the data*/
            if (typeof ctx.marker !== "undefined") {
                ctx.card.a_lat = ctx.marker.getPosition().lat();
                ctx.card.a_lon = ctx.marker.getPosition().lng();
            }
            for (var index in ctx.myForm.value) {
                ctx.card[index] = ctx.myForm.value[index];
            }
            var loading_1 = ctx.ALP.generateSimpleLoading("Updating...");
            loading_1.present();
            if (JSON.stringify(ctx.originalCard) !== JSON.stringify(ctx.card)) {
                if (ctx.originalCard.img_uri !== ctx.card.img_uri) {
                    //Update Image.
                    console.log("Need to update image.");
                    var CRD_id_1 = ctx._id;
                    ctx.CardsP.updateCardImage(ctx.card.img_uri, {
                        CRD__id: CRD_id_1
                    })
                        .then(function (pictureURL) {
                        ctx.card.img_uri = pictureURL;
                        console.log("CRD_id: ", CRD_id_1);
                        var _upPayload = {};
                        for (var index in ctx.card) {
                            _upPayload[index] = {
                                set: true,
                                value: ctx.card[index]
                            };
                        }
                        ctx.PPR.updateUserOwnedCard(_upPayload, CRD_id_1)
                            .then(function (data) {
                            loading_1.dismiss();
                            console.log("updateUserOwnedCard data: ", data);
                            ctx.ALP.generateSimpleAlert("Success", "The card has been updated successfully.");
                            ctx.loadCard();
                        })
                            .catch(function (err) {
                            loading_1.dismiss();
                            console.log("Err: ", err);
                            ctx.ALP.generateSimpleAlert("Error", "There has been an error setting the card image. Please try again later.");
                        });
                    })
                        .catch(function (err) {
                        loading_1.dismiss();
                        console.log(err);
                        ctx.ALP.generateSimpleAlert("Error", "There has been an error setting the card image (1). Please try again later.");
                    });
                }
                else {
                    ctx.storeCard(ctx.card)
                        .then(function (data) {
                        loading_1.dismiss();
                        console.log("Result from updating card: ", data);
                        if (typeof data === "object" && !isNaN(data.CRD__vn)) {
                            ctx.ALP.generateSimpleAlert("Success", "The card has been updated successfully.");
                        }
                        else {
                            ctx.ALP.generateSimpleAlert("Error", "There has been an error updating the card (2). Please try again later.");
                        }
                        ctx.loadCard();
                    })
                        .catch(function (err) {
                        loading_1.dismiss();
                        ctx.ALP.generateSimpleAlert("Error", "There has been an error updating the card (1). Please try again later.");
                        console.log("Error from updating data: ", err);
                    });
                }
            }
            else {
                console.log("Nothing to update...");
            }
        }
    };
    return N13Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], N13Page.prototype, "mapElement", void 0);
N13Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n13',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n13/n13.html"*/'<!--\n  Generated template for the N9Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Editing Card {{_id}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="border:1px solid black;">\n  <form [formGroup]="myForm">\n    <ion-grid>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:25px">\n          <ion-icon name="image"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <img *ngIf="!card.img_uri" src="/assets/imgs/credit-card-512.png" style="position:relative;"/>\n          <img *ngIf="card.img_uri && card.img_uri.length<300 && card.img_uri.length> 40" src="{{card.img_uri}}" style="position:relative;"/>\n          <img *ngIf="card.img_uri && card.img_uri.length>300" src="data:image/png;base64,{{card.img_uri}}" style="position:relative;"/>\n        </ion-col>\n        <ion-col col-1>\n          <button ion-button color="light" (click)="getImage()">\n            <ion-icon name="create"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12 *ngIf="card.vis==0"><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content" (click)="switchVisibility()" *ngIf="card.vis==0">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="eye-off"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <b>Private Card</b>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="card.vis!=0"><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content" (click)="switchVisibility()" *ngIf="card.vis!=0">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="eye"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <b>Public Card</b>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="contact"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Card Title Here"  formControlName="ctt"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="contact"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your name here"  formControlName="na1"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:25px">\n          <ion-icon name="phone-portrait"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="number" placeholder="Your Cellphone" formControlName="ph1"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="call"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="number" placeholder="Your local phone number" formControlName="ph2"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-twitter"></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <b>@</b>\n        </ion-col>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="@yourTweeterUsername" formControlName="twt"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-instagram"></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <b>@</b>\n        </ion-col>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="@yourInstagramUsername" formControlName="int"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-pinterest"></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <b>@</b>\n        </ion-col>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="@yourPinterestUsername" formControlName="pin"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-googleplus"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your Google+ Username" formControlName="gpu"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="mail"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your Email Here" formControlName="eem"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="mail"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your PO-Box Address Here" formControlName="pob"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="md-compass"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your Address Here" formControlName="adr"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="pin"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <div #map id="map" style="height:250px"></div>\n        </ion-col>\n        <ion-col col-1>\n          <button ion-button color="light" (click)="setPin()">\n            <ion-icon name="pin"></ion-icon>\n          </button>\n          <button ion-button color="light" (click)="locateSelf()">\n            <ion-icon name="locate"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <!--<ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="pin"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <b>Custom Field Name Here</b>\n          <hr/>\n          <b>Custom Field Content Here</b>\n        </ion-col>\n        <ion-col col-1>\n          <button ion-button color="light">\n            <ion-icon name="create"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>--->\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row>\n        <!--<button ion-button icon-start color="light">\n          <ion-icon name="add"></ion-icon>\n          <b>Add Field</b>\n        </button>-->\n        <button ion-button icon-start (click)="updateCard()" [disabled]="!myForm.valid">\n          <ion-icon name="cloud-done"></ion-icon>\n          <b>Save</b>\n        </button>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n13/n13.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_location_location__["a" /* LocationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_7__providers_cards_cards__["a" /* CardsProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_input_validator_input_validator__["a" /* InputValidatorProvider */]])
], N13Page);

//# sourceMappingURL=n13.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N14Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_httprequest_service_httprequest_service__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var N14Page = (function () {
    function N14Page(navCtrl, navParams, plat, ALP, HTTPRS) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.plat = plat;
        this.ALP = ALP;
        this.HTTPRS = HTTPRS;
        this.width = 150;
        this.baseURL = "";
        this._id = this.navParams.get('_id');
        this.vis = this.navParams.get('vis');
        console.log("_id: ", this._id);
        if (plat.isPortrait()) {
            this.width = plat.width();
        }
        this.baseURL = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].httpServerConfig(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].isProd()).url;
        //this.setVCardLink();
    }
    N14Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N14Page');
    };
    N14Page.prototype.setVCardLink = function () {
        var _this = this;
        var ctx = this;
        var URL = __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* Settings */].getBaseCardURL(ctx.vis == 0).replace("_id", ctx._id);
        if (ctx.vis == 0) {
            ctx.ALP.generateSimpleInputAlert({
                title: "Password",
                inputs: [{
                        placeholder: "Pass for the Card",
                        type: "password"
                    }]
            })
                .then(function (data) {
                URL = _this.baseURL + "" + URL.replace("=pass", "=" + data[0]);
                URL += "&nb=1";
                //Make GET request. If successfull, set link. If not, alert wrong password.
                ctx.HTTPRS.call({
                    url: URL
                })
                    .then(function (data) {
                    console.log("Result: ", data);
                    if (data.status == 200) {
                        URL = URL.replace("&nb=1", "");
                        ctx.vcardURL = URL;
                    }
                    else {
                        ctx.ALP.generateSimpleAlert("Error", "Invalid password. Cannot download vCard.");
                    }
                })
                    .catch(function (err) {
                    console.log("err: ", err);
                    if (!isNaN(err.status) && err.status == 403) {
                        ctx.ALP.generateSimpleAlert("Error", "Invalid password. Cannot download vCard.");
                    }
                    else {
                        ctx.ALP.generateSimpleAlert("Error", "Can't download card now. Please try again later.");
                    }
                });
            })
                .catch(function (err) {
                console.log(err);
            });
        }
        //var ref = cordova.InAppBrowser.open(url, target, options);
    };
    return N14Page;
}());
N14Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n14',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n14/n14.html"*/'<!--\n  Generated template for the N14Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sharing Card {{_id}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div style="align:center">\n    <qr-code [value]="_id" [size]="width"></qr-code>\n  </div>\n  <!--<button ion-button icon-left (click)="window.open(\'{{baseURL}}/nraboy\', \'_system\', \'location=yes\'); return false;">-->\n  <a *ngIf="vcardURL" href="{{vcardURL}}">\n    <button ion-button icon-left>\n      <ion-icon name="attach"></ion-icon>\n      Download\n    </button>\n  </a>\n  <button ion-button icon-left *ngIf="!vcardURL" (click)="setVCardLink()">\n    <ion-icon name="attach"></ion-icon>\n    Get V-Card\n  </button>\n  <!--\n  <button ion-button icon-left>\n    <ion-icon name="copy"></ion-icon>\n    Text\n  </button>\n  <button ion-button icon-left>\n    <ion-icon name="tablet-portrait"></ion-icon>\n    System\n  </button>\n  -->\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n14/n14.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_httprequest_service_httprequest_service__["a" /* HttprequestServiceProvider */]])
], N14Page);

//# sourceMappingURL=n14.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N8Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__n15_n15__ = __webpack_require__(279);
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
 * Generated class for the N8Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N8Page = (function () {
    function N8Page(navCtrl, navParams, PPR, ALP) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.PPR = PPR;
        this.ALP = ALP;
        this.boundCards = [];
        this.getBoundCards();
    }
    N8Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N8Page');
    };
    N8Page.prototype.getBoundCards = function () {
        var ctx = this;
        return new Promise(function (accept, reject) {
            var loading = ctx.ALP.generateSimpleLoading("Loading Cards...");
            loading.present();
            ctx.PPR.getUserBoundCards(0, 0, {
                _id: true,
                ctt: true,
                na1: true,
                eem: true,
                _la: true,
                ph1: true,
                img_uri: true
            })
                .then(function (data) {
                loading.dismiss();
                console.log("Owned cards: ", data);
                if (data != null && typeof data === "object" && !isNaN(data.length)) {
                    ctx.boundCards = data;
                }
                else {
                    ctx.ALP.generateSimpleAlert("Error", "Error getting your cards. Please try again later.");
                }
            })
                .catch(function (err) {
                loading.dismiss();
                console.log("Error gotten: ", err);
            });
        });
    };
    N8Page.prototype.viewCard = function (_id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__n15_n15__["a" /* N15Page */], { _id: _id });
    };
    N8Page.prototype.add = function () {
        var ctx = this;
        var alert = ctx.ALP.generateMultipleButtonsAlert({
            title: "Choose how you want to add your card",
            buttons: [{
                    text: "Cancel",
                    role: "cancel"
                }, {
                    text: "ID",
                    handler: function () {
                        var dismiss = alert.dismiss();
                        dismiss.then(function () {
                            ctx.ALP.generateSimpleInputAlert({
                                title: "Insert your _id",
                                inputs: [{
                                        placeholder: "ID",
                                        type: "text"
                                    }]
                            })
                                .then(function (data) {
                                //console.log("Data: ",data[0]);
                                var _cardID = data[0];
                                ctx.PPR.bindToCard(_cardID, "")
                                    .then(function (data) {
                                    console.log("PPR.bindToCard data: ", data);
                                    if (!isNaN(data)) {
                                        if (data < 1) {
                                            ctx.ALP.generateSimpleAlert("Error", "The card could not be found. Please check the code.");
                                        }
                                        else {
                                            ctx.ALP.generateSimpleAlert("Bound", "You have correctly added this card.");
                                            ctx.getBoundCards();
                                        }
                                    }
                                    else {
                                        if (typeof data.err === "object"
                                            && data.err.err != null
                                            && typeof data.err.err === "object"
                                            && !isNaN(data.err.err.where)) {
                                            if (data.err.err.where === 7) {
                                                ctx.ALP.generateSimpleInputAlert({
                                                    title: "Insert the card password",
                                                    inputs: [{
                                                            placeholder: "Passs",
                                                            type: "password"
                                                        }]
                                                })
                                                    .then(function (data) {
                                                    ctx.PPR.bindToCard(_cardID, data[0])
                                                        .then(function (data) {
                                                        console.log("bindToCard with pass data: ", data);
                                                        if (!isNaN(data)) {
                                                            if (data < 1) {
                                                                ctx.ALP.generateSimpleAlert("Error", "The card could not be found. Please check the code.");
                                                            }
                                                            else {
                                                                ctx.ALP.generateSimpleAlert("Bound", "You have correctly added this card.");
                                                                ctx.getBoundCards();
                                                            }
                                                        }
                                                        else {
                                                            if (typeof data.err === "object"
                                                                && data.err.err != null
                                                                && typeof data.err.err === "object"
                                                                && !isNaN(data.err.err.where)) {
                                                                if (data.err.err.where === 4) {
                                                                    ctx.ALP.generateSimpleAlert("Error", "Invalid password.");
                                                                }
                                                                else {
                                                                    ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
                                                                }
                                                            }
                                                            else {
                                                                ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
                                                            }
                                                            ctx.getBoundCards();
                                                        }
                                                    });
                                                })
                                                    .catch(function (err) {
                                                    ctx.ALP.generateSimpleAlert("Error", "Error Gatering Password. Please try again later.");
                                                });
                                            }
                                        }
                                        else {
                                            ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
                                        }
                                    }
                                })
                                    .catch(function (err) {
                                    console.log("PPR.bindToCard Err: ", err);
                                    ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
                                });
                            })
                                .catch(function (err) {
                                console.log("Error: ", err);
                                ctx.ALP.generateSimpleAlert("Error", "The card could not be bound. Please try again later.");
                            });
                        });
                        return false;
                    }
                }]
        });
        alert.present();
    };
    N8Page.prototype.deleteCard = function (_id) {
        var ctx = this;
        ctx.ALP.generateSimpleAlert("Remove", "Do you want to remove this card from your card box?")
            .then(function () {
            ctx.PPR.unbindCard(_id)
                .then(function (data) {
                console.log("Data: ", data);
                if (!isNaN(data) && data == 1) {
                    ctx.ALP.generateSimpleAlert("Done", "The card has been removed.");
                    ctx.getBoundCards();
                }
                else {
                    ctx.ALP.generateSimpleAlert("Error", "The card could not be removed. Please try again later.");
                }
            })
                .catch(function (err) {
                console.log("Error: ", err);
                ctx.ALP.generateSimpleAlert("Error", "The card could not be removed. Please try again later.");
            });
        })
            .catch(function () {
        });
    };
    return N8Page;
}());
N8Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n8',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n8/n8.html"*/'<!--\n  Generated template for the N7Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Shared Cards</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar></ion-searchbar>\n  <ion-list>\n    <ion-card *ngFor="let card of boundCards">\n      <ion-item-sliding>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col col-4>\n                <div *ngIf="card.CRD_img_uri">\n                  <img *ngIf="card.CRD_img_uri.length>40 && card.CRD_img_uri.length<300"  src="{{card.CRD_img_uri}}" style="position:relative;"/>\n                  <img *ngIf="card.CRD_img_uri.length>300" src="data:image/png;base64,{{card.CRD_img_uri}}" style="position:relative;"/>\n                </div>\n                <span *ngIf="!card.CRD_img_uri">\n                  <img src="/assets/imgs/credit-card-512.png" style="position:relative;"/>\n                </span>\n              </ion-col>\n              <ion-col col-8>\n                <ion-card-content style="margin-bottom:-30px;margin-top:-35px;">\n                  <ion-card-title>\n                    Card ID {{card.CRD__id}}\n                  </ion-card-title>\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col col-2>\n                        <ion-icon name="contact"></ion-icon>\n                      </ion-col>\n                      <ion-col col-10 style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">\n                        <b>{{card.CRD_na1}}</b>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-2>\n                        <ion-icon name="mail"></ion-icon>\n                      </ion-col>\n                      <ion-col col-10 style="text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">\n                        <b>{{card.CRD_eem}}</b>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-2>\n                        <ion-icon name="call"></ion-icon>\n                      </ion-col>\n                      <ion-col col-10>\n                        <b>{{card.CRD_ph1}}</b>\n                      </ion-col>\n                    </ion-row>\n                    <ion-row>\n                      <ion-col col-12>\n                        <ion-icon name="ios-more"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-card-content>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button expandable color="light" (click)="viewCard(card.CRD__id)">\n            <ion-icon name="eye" style="font-size:24px"></ion-icon>\n            View\n          </button>\n          <button ion-button expandable color="danger" (click)="deleteCard(card.CRD__id)">\n            <ion-icon name="trash" style="font-size:24px"></ion-icon>\n            Remove\n          </button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-card>\n  </ion-list>\n  <ion-fab bottom right>\n     <button ion-fab (click)="add()">\n        <ion-icon name="add"></ion-icon>\n     </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n8/n8.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */]])
], N8Page);

//# sourceMappingURL=n8.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N15Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_location_location__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_input_validator_input_validator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var N15Page = (function () {
    function N15Page(navCtrl, navParams, LocP, ALP, PPR, formBuilder, InputVal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LocP = LocP;
        this.ALP = ALP;
        this.PPR = PPR;
        this.formBuilder = formBuilder;
        this.InputVal = InputVal;
        this.mapLoaded = false;
        this.card = {
            vis: 1 //Visibility. //0: Private. 1: Public.
            ,
            na1: "Namey mcNamero" //Name
            ,
            eem: "anemail@aprovider.com" //Electronic Email Address.
            ,
            pob: "asdasd asd asdasd asd" //PO-Box Address.
            ,
            ph1: "256655854" //Phone Number #1
            ,
            ph2: "256664487" //Phone Number #1
            ,
            adr: "akldj ajsd ajsdkljaskldjaklsjdklajd" //Address (text)
            ,
            a_lon: "" //Longitude
            ,
            a_lat: "" //Latitude
            ,
            twt: "s5d4s5d4" //Twitter Username
            ,
            int: "a5sd4a5d" //Instagram Update.
            ,
            pin: "a5s4da5s" //Pinterest Username.
            ,
            gpu: "s5d4as54" //Google+ Username.
            ,
            img_uri: null
        };
        this.card = {
            vis: 1 //Visibility. //0: Private. 1: Public.
            ,
            na1: "" //Name
            ,
            eem: "" //Electronic Email Address.
            ,
            pob: "" //PO-Box Address.
            ,
            ph1: "" //Phone Number #1
            ,
            ph2: "" //Phone Number #1
            ,
            adr: "" //Address (text)
            ,
            a_lon: "" //Longitude
            ,
            a_lat: "" //Latitude
            ,
            twt: "" //Twitter Username
            ,
            int: "" //Instagram Update.
            ,
            pin: "" //Pinterest Username.
            ,
            gpu: "" //Google+ Username.
            ,
            img_uri: null
        };
        var ctx = this;
        ctx.setForm(ctx.card);
        ctx.loadCard();
    }
    N15Page.prototype.switchVisibility = function () {
        //this.card.vis = (this.card.vis === 1) ? 0 : 1;
    };
    N15Page.prototype.setForm = function (formData) {
        var _this = this;
        console.log("setForm formData: ", formData);
        var ctx = this;
        this.myForm = ctx.formBuilder.group({
            na1: [formData.na1, function (control) {
                    return (ctx.InputVal.isString_ShorterThan(120, control.value)) ? null : { text: "Invalid Name" };
                }],
            eem: [formData.eem, function (control) {
                    return (ctx.InputVal.isValid_Email(control.value)) ? null : { text: "Invalid Email" };
                }],
            pob: [formData.pob, function (control) {
                    return (ctx.InputVal.isString_ShorterThan(240, control.value)) ? null : { text: "Invalid PO-Box Address" };
                }],
            ph1: [formData.ph1, function (control) {
                    var isValid = !isNaN(control.value);
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(15, control.value + "");
                    return (isValid) ? null : { text: "Invalid Phone 1" };
                }],
            ph2: [formData.ph2, function (control) {
                    var isValid = !isNaN(control.value);
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(15, control.value + "");
                    return (isValid) ? null : { text: "Invalid Phone 2" };
                }],
            ctt: [formData.ctt, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(30, control.value);
                    return (isValid) ? null : { text: "Invalid Address" };
                }],
            adr: [formData.adr, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(300, control.value);
                    return (isValid) ? null : { text: "Invalid Address" };
                }],
            twt: [formData.twt, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(51, control.value);
                    return (isValid) ? null : { text: "Invalid Tweeter Username" };
                }],
            int: [formData.int, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(31, control.value);
                    return (isValid) ? null : { text: "Invalid Instagram Username" };
                }],
            pin: [formData.pin, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(16, control.value);
                    return (isValid) ? null : { text: "Invalid Pinterest Username" };
                }],
            gpu: [formData.gpu, function (control) {
                    var isValid = typeof control.value === "string";
                    isValid = isValid && ctx.InputVal.isString_ShorterThan(65, control.value);
                    return (isValid) ? null : { text: "Invalid Google+ Username" };
                }]
        });
        if (this.map) {
            if (!isNaN(formData.a_lat) && !isNaN(formData.a_lon)) {
                ctx.map.setCenter(new google.maps.LatLng(formData.a_lat, formData.a_lon));
                ctx.setPin();
            }
        }
        else {
            var intA_1 = setInterval(function () {
                if (_this.map) {
                    clearInterval(intA_1);
                    if (!isNaN(formData.a_lat) && !isNaN(formData.a_lon)) {
                        console.log("Setting mapCenter AND pin");
                        ctx.map.setCenter(new google.maps.LatLng(formData.a_lat, formData.a_lon));
                        ctx.setPin();
                    }
                    else {
                        console.log("Could not set map center and pin. Invalid lat and lot.");
                    }
                }
            }, 300);
        }
    };
    N15Page.prototype.loadCard = function () {
        var ctx = this;
        ctx._id = this.navParams.get('_id');
        ctx.PPR.getUserBoundCard(ctx._id, {
            na1: true,
            eem: true,
            ctt: true,
            pob: true,
            ph1: true,
            ph2: true,
            adr: true,
            a_lon: true,
            a_lat: true,
            twt: true,
            int: true,
            pin: true,
            gpu: true,
            vis: true,
            img_uri: true
        })
            .then(function (data) {
            console.log("Data result: ", data);
            if (data.length > 0) {
                for (var index in data[0]) {
                    ctx.card[index.replace("CRD_", "")] = data[0][index];
                }
                ctx.originalCard = JSON.parse(JSON.stringify(ctx.card));
                ctx.setForm(ctx.card);
            }
            else {
                ctx.ALP.generateSimpleAlert("Error", "This card could not be loaded. Please try again later.");
            }
        })
            .catch(function (err) {
            console.log("Error result: ", err);
        });
    };
    N15Page.prototype.loadMap = function () {
        var ctx = this;
        var latLng = new google.maps.LatLng(-34.9290, 158.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        ctx.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        ctx.mapLoaded = true;
    };
    N15Page.prototype.ionViewDidLoad = function () {
        this.loadMap();
        this.setForm(this.card);
    };
    N15Page.prototype.setPin = function () {
        if (typeof this.marker !== "undefined") {
            this.marker.setPosition(this.map.getCenter());
        }
        else {
            this.marker = new google.maps.Marker({
                position: this.map.getCenter(),
                map: this.map,
                draggable: false
            });
        }
    };
    N15Page.prototype.locateSelf = function () {
        //Get our current position AND set the map center to it
    };
    N15Page.prototype.storeCard = function (cardPayload) {
    };
    N15Page.prototype.updateCard = function () {
    };
    return N15Page;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], N15Page.prototype, "mapElement", void 0);
N15Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n15',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n15/n15.html"*/'<!--\n  Generated template for the N9Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Viewing Card {{_id}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="border:1px solid black;">\n  <form [formGroup]="myForm">\n    <ion-grid>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:25px">\n          <ion-icon name="image"></ion-icon>\n        </ion-col>\n        <ion-col col-10>\n          <img *ngIf="!card.img_uri" src="/assets/imgs/credit-card-512.png" style="position:relative;"/>\n          <img *ngIf="card.img_uri && card.img_uri.length<300 && card.img_uri.length> 40" src="{{card.img_uri}}" style="position:relative;"/>\n          <img *ngIf="card.img_uri && card.img_uri.length>300" src="data:image/png;base64,{{card.img_uri}}" style="position:relative;"/>\n        </ion-col>\n        <ion-col col-1>\n          <button ion-button color="light">\n            <ion-icon name="create"></ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12 *ngIf="card.vis==0"><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content" (click)="switchVisibility()" *ngIf="card.vis==0">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="eye-off"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <b>Private Card</b>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="card.vis!=0"><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content" (click)="switchVisibility()" *ngIf="card.vis!=0">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="eye"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <b>Public Card</b>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="contact"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Card Title Here"  formControlName="ctt"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:20px">\n          <ion-icon name="contact"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your name here"  formControlName="na1"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1 style="font-size:25px">\n          <ion-icon name="phone-portrait"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="number" placeholder="Your Cellphone" formControlName="ph1"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="call"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="number" placeholder="Your local phone number" formControlName="ph2"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-twitter"></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <b>@</b>\n        </ion-col>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="@yourTweeterUsername" formControlName="twt"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-instagram"></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <b>@</b>\n        </ion-col>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="@yourInstagramUsername" formControlName="int"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-pinterest"></ion-icon>\n        </ion-col>\n        <ion-col col-1>\n          <b>@</b>\n        </ion-col>\n        <ion-col col-10>\n          <ion-input type="text" placeholder="@yourPinterestUsername" formControlName="pin"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="logo-googleplus"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your Google+ Username" formControlName="gpu"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="mail"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your Email Here" formControlName="eem"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="mail"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your PO-Box Address Here" formControlName="pob"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="md-compass"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <ion-input type="text" placeholder="Your Address Here" formControlName="adr"></ion-input>\n        </ion-col>\n      </ion-row>\n      <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n      <ion-row class="vertical-align-content">\n        <ion-col col-1>\n          <ion-icon name="pin"></ion-icon>\n        </ion-col>\n        <ion-col col-11>\n          <div #map id="map" style="height:250px"></div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n15/n15.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_location_location__["a" /* LocationProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__providers_input_validator_input_validator__["a" /* InputValidatorProvider */]])
], N15Page);

//# sourceMappingURL=n15.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(297);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_qrcode__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_page1_page1__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_page2_page2__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__settings__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_localstorageworker_localstorage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_socket_io__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_socketconnection_socketconnection__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_httprequest_service_httprequest_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_n1_n1__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_n2_n2__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_n3_n3__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_n4_n4__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_n5_n5__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_n6_n6__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_n7_n7__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_n8_n8__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_n9_n9__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_n11_n11__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_n12_n12__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_n13_n13__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_n14_n14__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_n15_n15__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_input_validator_input_validator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_addresses_addresses__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_system_messages_system_messages__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_profile_profile__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_cards_cards__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_location_location__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_settings_settings__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//Configuration Object

//Firebase imports


//Settings
var firebaseConfig = __WEBPACK_IMPORTED_MODULE_12__settings__["a" /* Settings */].getFirebaseConfig();
//Storage

//Socket.io Configuration




var config = __WEBPACK_IMPORTED_MODULE_12__settings__["a" /* Settings */].getSocketIOConfig(__WEBPACK_IMPORTED_MODULE_12__settings__["a" /* Settings */].isProd());
//Pages Import.























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_page1_page1__["a" /* Page1 */],
            __WEBPACK_IMPORTED_MODULE_11__pages_page2_page2__["a" /* Page2 */],
            __WEBPACK_IMPORTED_MODULE_20__pages_n1_n1__["a" /* N1Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_n2_n2__["a" /* N2Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_n3_n3__["a" /* N3Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_n4_n4__["a" /* N4Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_n5_n5__["a" /* N5Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_n6_n6__["a" /* N6Page */],
            __WEBPACK_IMPORTED_MODULE_26__pages_n7_n7__["a" /* N7Page */],
            __WEBPACK_IMPORTED_MODULE_27__pages_n8_n8__["a" /* N8Page */],
            __WEBPACK_IMPORTED_MODULE_28__pages_n9_n9__["a" /* N9Page */],
            __WEBPACK_IMPORTED_MODULE_29__pages_n11_n11__["a" /* N11Page */],
            __WEBPACK_IMPORTED_MODULE_30__pages_n12_n12__["a" /* N12Page */],
            __WEBPACK_IMPORTED_MODULE_31__pages_n13_n13__["a" /* N13Page */],
            __WEBPACK_IMPORTED_MODULE_32__pages_n14_n14__["a" /* N14Page */],
            __WEBPACK_IMPORTED_MODULE_33__pages_n15_n15__["a" /* N15Page */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, { links: [] }),
            __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_16_ng_socket_io__["SocketIoModule"].forRoot(config),
            __WEBPACK_IMPORTED_MODULE_8_angular2_qrcode__["a" /* QRCodeModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_page1_page1__["a" /* Page1 */],
            __WEBPACK_IMPORTED_MODULE_11__pages_page2_page2__["a" /* Page2 */],
            __WEBPACK_IMPORTED_MODULE_20__pages_n1_n1__["a" /* N1Page */],
            __WEBPACK_IMPORTED_MODULE_21__pages_n2_n2__["a" /* N2Page */],
            __WEBPACK_IMPORTED_MODULE_22__pages_n3_n3__["a" /* N3Page */],
            __WEBPACK_IMPORTED_MODULE_23__pages_n4_n4__["a" /* N4Page */],
            __WEBPACK_IMPORTED_MODULE_24__pages_n5_n5__["a" /* N5Page */],
            __WEBPACK_IMPORTED_MODULE_25__pages_n6_n6__["a" /* N6Page */],
            __WEBPACK_IMPORTED_MODULE_26__pages_n7_n7__["a" /* N7Page */],
            __WEBPACK_IMPORTED_MODULE_27__pages_n8_n8__["a" /* N8Page */],
            __WEBPACK_IMPORTED_MODULE_28__pages_n9_n9__["a" /* N9Page */],
            __WEBPACK_IMPORTED_MODULE_29__pages_n11_n11__["a" /* N11Page */],
            __WEBPACK_IMPORTED_MODULE_30__pages_n12_n12__["a" /* N12Page */],
            __WEBPACK_IMPORTED_MODULE_31__pages_n13_n13__["a" /* N13Page */],
            __WEBPACK_IMPORTED_MODULE_32__pages_n14_n14__["a" /* N14Page */],
            __WEBPACK_IMPORTED_MODULE_33__pages_n15_n15__["a" /* N15Page */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_socketconnection_socketconnection__["a" /* SocketconnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_httprequest_service_httprequest_service__["a" /* HttprequestServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_34__providers_input_validator_input_validator__["a" /* InputValidatorProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_localstorageworker_localstorage__["a" /* LocalStorageWorker */],
            __WEBPACK_IMPORTED_MODULE_35__providers_addresses_addresses__["a" /* AddressesProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_37__providers_system_messages_system_messages__["a" /* SystemMessagesProvider */],
            __WEBPACK_IMPORTED_MODULE_38__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_40__providers_cards_cards__["a" /* CardsProvider */],
            __WEBPACK_IMPORTED_MODULE_40__providers_cards_cards__["a" /* CardsProvider */],
            __WEBPACK_IMPORTED_MODULE_41__providers_location_location__["a" /* LocationProvider */],
            __WEBPACK_IMPORTED_MODULE_42__providers_settings_settings__["a" /* SettingsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__socketconnection_socketconnection__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__input_validator_input_validator__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__localstorageworker_localstorage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__alert_alert__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var ProfileProvider = (function () {
    function ProfileProvider(AFA, SCP, AUP, IVP, LSW, ALP, CMR) {
        this.AFA = AFA;
        this.SCP = SCP;
        this.AUP = AUP;
        this.IVP = IVP;
        this.LSW = LSW;
        this.ALP = ALP;
        this.CMR = CMR;
        //const storageRef = firebase.storage().ref();
        //storageRef.
    }
    ProfileProvider.prototype.getIDT = function () {
        var currentU = this.AFA.auth.currentUser;
        return new Promise(function (accept, reject) {
            currentU.getIdToken()
                .then(function (IDT) {
                accept(IDT);
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    ProfileProvider.prototype.updateProfile_server = function (fields) {
        //PPR_emv: Emal Verified.
        //PPR_dna: Display Name.
        //PPR_emv: Email Verified.
        //PPR_phu: Photo URL.
        //PPR_eml: Email
        console.log("updateProfile_server fields: ", fields);
        var contx = this;
        return new Promise(function (accept, reject) {
            contx.getIDT()
                .then(function (IDT) {
                contx.SCP.call({
                    callRoute: "/profile/update",
                    responseRoute: "/profile/update",
                    payload: {
                        set: fields
                    },
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    console.log("Call response data: ", data);
                    accept();
                })
                    .catch(function (err) {
                    console.log("getProfile         4");
                    reject(err);
                });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    ProfileProvider.prototype.updateProfile_firebase = function (fields) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            var profile = ctx.AFA.auth.currentUser;
            if (profile != null) {
                var updateFields = { displayName: profile.displayName, photoURL: profile.photoURL };
                if (fields.displayName && ctx.IVP.isValid_Username(fields.displayName)) {
                    updateFields.displayName = fields.displayName;
                }
                if (fields.photoURL && ctx.IVP.isValid_uri(fields.photoURL)) {
                    updateFields.photoURL = fields.photoURL;
                }
                profile.updateProfile(updateFields)
                    .then(function () {
                    accept();
                })
                    .catch(function (err) {
                    reject({ where: 1, where0: "updateProfile_firebase", text: "User is not logged in." });
                });
            }
            else {
                reject({ where: 2, where0: "updateProfile_firebase", text: "User is not logged in." });
            }
        });
    };
    ProfileProvider.prototype.updateProfile = function (payload) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            var updatePromises = [];
            var requestReAuth = false;
            if (payload.email) {
                requestReAuth = true;
            }
            var reAuthPromises = [];
            if (requestReAuth) {
                reAuthPromises.push(ctx.AUP.reAuthenticate_emailAndPassword_0());
            }
            Promise.all(reAuthPromises)
                .then(function () {
                if (payload.email) {
                    updatePromises.push(ctx.AFA.auth.currentUser.updateEmail(payload.email));
                }
                var updateProfile_fb = false;
                var updatePayload = { photoURL: ctx.AFA.auth.currentUser.photoURL, displayName: ctx.AFA.auth.currentUser.displayName };
                if (payload.displayName) {
                    updatePayload.displayName = payload.displayName;
                    updateProfile_fb = true;
                }
                if (payload.photoURL) {
                    updatePayload.photoURL = payload.photoURL;
                    updateProfile_fb = true;
                }
                if (updateProfile_fb) {
                    updatePromises.push(ctx.AFA.auth.currentUser.updateProfile(updatePayload));
                }
                Promise.all(updatePromises)
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 2, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 3, err: err });
            });
        });
    };
    ProfileProvider.prototype.updateProfilePhoto = function (showLoading) {
        //Upload an image to Firebase Storage bucket
        //and updates references.
        var options = {
            quality: 75,
            destinationType: this.CMR.DestinationType.DATA_URL,
            sourceType: this.CMR.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            targetWidth: 500,
            targetHeight: 500
        };
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.CMR.getPicture(options).then(function (imageData) {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                //http://www.offlineprogrammer.com/upload-images-firebase-storage-using-ionic-framework/
                //let base64Image = 'data:image/jpeg;base64,' + imageData;
                var alert = ctx.ALP.generateSimpleLoading("");
                if (showLoading) {
                    alert.present();
                }
                var uid = null;
                if (ctx.AFA.auth.currentUser != null) {
                    uid = ctx.AFA.auth.currentUser.uid;
                }
                else {
                    reject({ where: 4, text: "User is not logged in..." });
                }
                var ref = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]().ref("images/profilePics/" + uid);
                ref.putString(imageData, 'base64', { contentType: 'image/png' })
                    .then(function (savedPicture) {
                    //Update the personal data.
                    ctx.updateProfile({
                        photoURL: savedPicture.downloadURL
                    })
                        .then(function (data) {
                        alert.dismiss();
                        accept();
                    })
                        .catch(function (err) {
                        alert.dismiss();
                        reject({ where: 1, err: err });
                    });
                })
                    .catch(function (err) {
                    alert.dismiss();
                    reject({ where: 2, err: err });
                });
            }, function (err) {
                reject({ where: 3, err: err });
            });
        });
    };
    ProfileProvider.prototype.storeLocalProfile = function (parameters) {
        var LSW = this.LSW;
        return new Promise(function (accept, reject) {
            LSW.storeValue("displayName", parameters.displayName);
            LSW.storeValue("email", parameters.email);
            LSW.storeValue("photoURL", parameters.photoURL);
            LSW.storeValue("emailVerified", parameters.emailVerified);
            LSW.storeValue("profileVersionN", parameters.profileVersionN);
            accept();
        });
    };
    ProfileProvider.prototype.storeProfile = function (serverRecord, recentAuth) {
        //Updates the profile record from the local storage AND the server
        //record (if found unmatching), given a record from the server on
        //raw form (meta fields)
        var currentU = this.AFA.auth.currentUser;
        var ctx = this;
        return new Promise(function (accept, reject) {
            if (currentU !== null) {
                ctx.storeLocalProfile({
                    displayName: serverRecord.PPR_dna,
                    email: serverRecord.PPR_eml,
                    photoURL: serverRecord.PPR_phu,
                    emailVerified: serverRecord.PPR_emv,
                    profileVersionN: serverRecord.PPR__vn
                })
                    .then(function (data) {
                    accept({ data: serverRecord });
                })
                    .catch(function (err) {
                    reject({ where0: "storeProfile", where: 1, text: "Error localStoring data." });
                });
            }
            else {
                reject({ where0: "storeProfile", where: 4, text: "currentU is null." });
            }
        });
    };
    ProfileProvider.prototype.solveDataConflicts = function (serverRecord, recentAuth) {
        var currentU = this.AFA.auth.currentUser;
        var serverPayload = { PPR_phu: null, PPR_dna: null, PPR_emv: null, PPR_eml: null };
        var firebasePayload = { displayName: null, photoURL: null };
        var requiresServerUpdate = false, requiresFirebaseUpdate = false;
        var requiresReAuth = false;
        serverPayload.PPR_phu = ((serverRecord.PPR_phu) !== currentU.photoURL) ? currentU.photoURL : null;
        firebasePayload.photoURL = (currentU.photoURL === null && typeof serverRecord.PPR_phu === "string") ? serverRecord.PPR_phu : null;
        serverPayload.PPR_dna = (serverRecord.PPR_dna !== currentU.displayName) ? currentU.displayName : null;
        firebasePayload.displayName = (currentU.displayName === null && typeof serverRecord.PPR_dna === "string") ? serverRecord.PPR_dna : null;
        serverPayload.PPR_emv = (serverRecord.PPR_emv !== currentU.emailVerified) ? currentU.emailVerified : null;
        serverPayload.PPR_eml = (serverRecord.PPR_eml !== currentU.email) ? currentU.email : null;
        requiresServerUpdate = (serverPayload.PPR_phu !== null) || (serverPayload.PPR_dna !== null) || (serverPayload.PPR_emv !== null) || (serverPayload.PPR_eml !== null);
        requiresFirebaseUpdate = (firebasePayload.displayName !== null) || (firebasePayload.photoURL !== null);
        requiresReAuth = (serverPayload.PPR_eml !== null && !recentAuth);
        var ctx = this;
        return new Promise(function (accept, reject) {
            if ((requiresServerUpdate || requiresFirebaseUpdate) && !requiresReAuth) {
                var updatePromises = [];
                if (requiresServerUpdate) {
                    updatePromises.push(ctx.updateProfile_server(serverPayload));
                }
                if (requiresFirebaseUpdate) {
                    updatePromises.push(ctx.updateProfile_firebase(firebasePayload));
                }
                Promise.all(updatePromises)
                    .then(function (data) {
                    accept({ updated: true });
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            }
            else {
                if (requiresReAuth) {
                    reject({ where: 2, requiresReAuth: requiresReAuth });
                }
                else {
                    accept({ updated: false });
                }
            }
        });
    };
    ProfileProvider.prototype.getProfile = function (recentAuth) {
        var contx = this;
        return new Promise(function (accept, reject) {
            if (contx.AFA.auth.currentUser != null) {
                contx.getIDT()
                    .then(function (IDT) {
                    console.log("IDT: ", IDT);
                    contx.SCP.call({
                        callRoute: "/profile/get",
                        responseRoute: "/profile/get",
                        payload: {
                            exact: {
                                uid: contx.AFA.auth.currentUser.uid
                            },
                            return: {
                                eml: true,
                                dna: true,
                                phu: true,
                                emv: true,
                                _vn: true
                            }
                        },
                        auth: "IDT " + IDT
                    })
                        .then(function (data) {
                        contx.storeProfile(data, recentAuth)
                            .then(function (storedData) {
                            contx.solveDataConflicts(data, recentAuth)
                                .then(function (data) {
                                if (data.updated) {
                                    reject({ where0: "getProfile", "where": 0, refreshRequired: true });
                                }
                                else {
                                    accept(storedData.data);
                                }
                            })
                                .catch(function (err) {
                                reject({ where0: "getProfile", where: 1, err: err });
                            });
                        })
                            .catch(function (err) {
                            reject({ where0: "getProfile", where: 2, err: err });
                        });
                    })
                        .catch(function (err) {
                        reject({ where0: "getProfile", where: 3, err: err });
                    });
                })
                    .catch(function (err) {
                    reject({ where0: "getProfile", where: 4, err: err });
                });
            }
            else {
                reject({ where0: "getProfile", where: 5, text: "The user is not logged in." });
            }
        });
    };
    ProfileProvider.prototype.getUserOwnedCards = function (skip, limit, optionalReturn) {
        var contx = this;
        return new Promise(function (accept, reject) {
            contx.getIDT()
                .then(function (IDT) {
                contx.SCP.call({
                    callRoute: "/cards/get",
                    responseRoute: "/cards/get",
                    payload: {
                        return: {
                            fields: (typeof optionalReturn === "object" && optionalReturn != null) ? optionalReturn : {
                                _id: true,
                                _la: true
                            },
                            paging: {
                                skip: skip,
                                limit: limit
                            }
                        }
                    },
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 2, err: err });
            });
        });
    };
    ProfileProvider.prototype.getUserOwnedCard = function (_id, optionalReturn) {
        var contx = this;
        return new Promise(function (accept, reject) {
            contx.getIDT()
                .then(function (IDT) {
                contx.SCP.call({
                    callRoute: "/cards/get",
                    responseRoute: "/cards/get",
                    payload: {
                        _id: {
                            exact: true,
                            value: _id
                        },
                        return: {
                            fields: (typeof optionalReturn === "object" && optionalReturn != null) ? optionalReturn : {
                                _id: true,
                                _la: true
                            }
                        }
                    },
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 2, err: err });
            });
        });
    };
    ProfileProvider.prototype.createUserCard = function (fieldsPayload) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.getIDT()
                .then(function (IDT) {
                fieldsPayload.return = {
                    fields: {
                        _id: true
                    }
                };
                ctx.SCP.call({
                    callRoute: "/cards/add",
                    responseRoute: "/cards/add",
                    payload: fieldsPayload,
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 1, err: err });
            });
        });
    };
    ProfileProvider.prototype.updateUserOwnedCard = function (fieldsPayload, cardID) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.getIDT()
                .then(function (IDT) {
                fieldsPayload.return = {
                    fields: {
                        _id: true
                    }
                };
                fieldsPayload._id = {
                    exact: true,
                    value: cardID
                };
                ctx.SCP.call({
                    callRoute: "/cards/update",
                    responseRoute: "/cards/update",
                    payload: fieldsPayload,
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 1, err: err });
            });
        });
    };
    ProfileProvider.prototype.deleteUserOwnedCard = function (cardID) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.getIDT()
                .then(function (IDT) {
                ctx.SCP.call({
                    callRoute: "/cards/delete",
                    responseRoute: "/cards/delete",
                    payload: {
                        _id: cardID,
                        return: {
                            _id: true
                        }
                    },
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 1, err: err });
            });
        });
    };
    ProfileProvider.prototype.bindToCard = function (cardID, passw) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.getIDT()
                .then(function (IDT) {
                ctx.SCP.call({
                    callRoute: "/cards/bind",
                    responseRoute: "/cards/bind",
                    payload: {
                        _id: cardID,
                        cde: (typeof passw === "string") ? passw : "",
                        return: {
                            _id: true
                        }
                    },
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 1, err: err });
            });
        });
    };
    ProfileProvider.prototype.getUserBoundCards = function (skip, limit, optionalReturn) {
        var contx = this;
        return new Promise(function (accept, reject) {
            contx.getIDT()
                .then(function (IDT) {
                contx.SCP.call({
                    callRoute: "/cards/getBoundCards",
                    responseRoute: "/cards/getBoundCards",
                    payload: {
                        return: {
                            fields: (typeof optionalReturn === "object" && optionalReturn != null) ? optionalReturn : {
                                _id: true,
                                _la: true
                            },
                            paging: {
                                skip: skip,
                                limit: limit
                            }
                        }
                    },
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 2, err: err });
            });
        });
    };
    ProfileProvider.prototype.getUserBoundCard = function (_id, optionalReturn) {
        var contx = this;
        return new Promise(function (accept, reject) {
            contx.getIDT()
                .then(function (IDT) {
                contx.SCP.call({
                    callRoute: "/cards/getBoundCards",
                    responseRoute: "/cards/getBoundCards",
                    payload: {
                        _id: {
                            exact: true,
                            value: _id
                        },
                        return: {
                            fields: (typeof optionalReturn === "object" && optionalReturn != null) ? optionalReturn : {
                                _id: true,
                                _la: true
                            }
                        }
                    },
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 2, err: err });
            });
        });
    };
    ProfileProvider.prototype.unbindCard = function (cardID) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.getIDT()
                .then(function (IDT) {
                ctx.SCP.call({
                    callRoute: "/cards/deleteUserBoundCard",
                    responseRoute: "/cards/deleteUserBoundCard",
                    payload: {
                        _id: cardID,
                        return: {
                            _id: true
                        }
                    },
                    auth: "IDT " + IDT
                })
                    .then(function (data) {
                    accept(data);
                })
                    .catch(function (err) {
                    reject({ where: 1, err: err });
                });
            })
                .catch(function (err) {
                reject({ where: 1, err: err });
            });
        });
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5__socketconnection_socketconnection__["a" /* SocketconnectionProvider */],
        __WEBPACK_IMPORTED_MODULE_6__auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_7__input_validator_input_validator__["a" /* InputValidatorProvider */],
        __WEBPACK_IMPORTED_MODULE_8__localstorageworker_localstorage__["a" /* LocalStorageWorker */],
        __WEBPACK_IMPORTED_MODULE_9__alert_alert__["a" /* AlertProvider */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_n1_n1__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_n3_n3__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_n4_n4__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_n5_n5__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_n7_n7__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_n8_n8__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_socketconnection_socketconnection__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_6__pages_n4_n4__["a" /* N4Page */], id: 1 },
            { title: 'Owned Cards', component: __WEBPACK_IMPORTED_MODULE_8__pages_n7_n7__["a" /* N7Page */], id: 2 },
            { title: 'Shared Cards', component: __WEBPACK_IMPORTED_MODULE_9__pages_n8_n8__["a" /* N8Page */], id: 3 },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_5__pages_n3_n3__["a" /* N3Page */], id: 4 },
            //{ title: 'BackUp and Restore', component: N6Page, id:5 },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_7__pages_n5_n5__["a" /* N5Page */], id: 6 }
        ];
        afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_n7_n7__["a" /* N7Page */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_n1_n1__["a" /* N1Page */];
            }
        });
    }
    MyApp.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="contact" *ngIf="p.id==1"></ion-icon>\n        <ion-icon name="card" *ngIf="p.id==2"></ion-icon>\n        <ion-icon name="share" *ngIf="p.id==3"></ion-icon>\n        <ion-icon name="cog" *ngIf="p.id==4"></ion-icon>\n        <ion-icon name="help-circle" *ngIf="p.id==6"></ion-icon>\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        {{p.title}}\n      </ion-item>\n      <!--<button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)" icon-start>\n        <ion-icon name="contact" *ngIf="p.id==1"></ion-icon>\n        {{p.title}}\n      </button>-->\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/app/app.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_11__providers_socketconnection_socketconnection__["a" /* SocketconnectionProvider */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
], MyApp);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page1 = (function () {
    function Page1(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return Page1;
}());
Page1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-page1',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/page1/page1.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Page One</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <img src="assets/icon/favicon.ico" alt="" />\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/page1/page1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], Page1);

//# sourceMappingURL=page1.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page2 = Page2_1 = (function () {
    function Page2(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    Page2.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Page2_1, {
            item: item
        });
    };
    return Page2;
}());
Page2 = Page2_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-page2',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/page2/page2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Page Two</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/page2/page2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Page2);

var Page2_1;
//# sourceMappingURL=page2.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N9Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the N9Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N9Page = (function () {
    function N9Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    N9Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N9Page');
    };
    return N9Page;
}());
N9Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n9',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n9/n9.html"*/'<!--\n  Generated template for the N9Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Owned Card JJ2HGz34</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="border:1px solid black;">\n  <ion-grid>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:25px">\n        <ion-icon name="image"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <img src="../../assets/imgs/credit-card-512.png" style="position:relative;"/>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:20px">\n        <ion-icon name="eye-off"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>Private Card</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:20px">\n        <ion-icon name="eye"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>Public Card</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:20px">\n        <ion-icon name="contact"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>Namey McNamero asdadasdsdasdasd</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:25px">\n        <ion-icon name="phone-portrait"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>+584127197921</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="call"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>+584127197921</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="md-compass"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>Streety McStreet kajhsdjkahskdjh kjahsdjk hakjsdhkajhsdjkhasjk dhkajshd jkahsjkdhajkhdjkahsd jkahsdjkhajksdhajkshdajkshdjk ahdhakjsdhajksdhjk</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>@mcTweetyFace</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="logo-instagram"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>@mcTweetyFaceInstagram</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="logo-pinterest"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>@mcTweetyFacePinterest</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="mail"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>mailthere@mailprovider.com</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="mail"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>MSC 1587, McCompany Namey, PO BOX 7530, KRYPTON TN 38188-7530</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>156156165161818</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="pin"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <div #map id="map" style="height:250px"></div>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="pin"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="pin"></ion-icon>\n      </ion-col>\n      <ion-col col-10>\n        <b>Custom Field Name Here</b>\n        <hr/>\n        <b>Custom Field Content Here</b>\n      </ion-col>\n      <ion-col col-1>\n        <button ion-button color="light">\n          <ion-icon name="create"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row>\n      <button ion-button icon-start color="light">\n        <ion-icon name="add"></ion-icon>\n        <b>Add new field</b>\n      </button>\n      <button ion-button icon-start>\n        <ion-icon name="share"></ion-icon>\n        <b>Share</b>\n      </button>\n      <button ion-button icon-start color="danger">\n        <ion-icon name="trash"></ion-icon>\n        <b>Remove</b>\n      </button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n9/n9.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], N9Page);

//# sourceMappingURL=n9.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N11Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
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
 * Generated class for the N11Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var N11Page = (function () {
    function N11Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    N11Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad N11Page');
    };
    return N11Page;
}());
N11Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-n11',template:/*ion-inline-start:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n11/n11.html"*/'<!--\n  Generated template for the N9Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Shared Card JJ2HGz34</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="border:1px solid black;">\n  <ion-grid>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:25px">\n        <ion-icon name="image"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <img src="../../assets/imgs/credit-card-512.png" style="position:relative;"/>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:20px">\n        <ion-icon name="eye-off"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>Private Card</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:20px">\n        <ion-icon name="eye"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>Public Card</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:20px">\n        <ion-icon name="contact"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>Namey McNamero asdadasdsdasdasd</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1 style="font-size:25px">\n        <ion-icon name="phone-portrait"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>+584127197921</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="call"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>+584127197921</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="md-compass"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>Streety McStreet kajhsdjkahskdjh kjahsdjk hakjsdhkajhsdjkhasjk dhkajshd jkahsjkdhajkhdjkahsd jkahsdjkhajksdhajkshdajkshdjk ahdhakjsdhajksdhjk</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="logo-twitter"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>@mcTweetyFace</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="logo-instagram"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>@mcTweetyFaceInstagram</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="logo-pinterest"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>@mcTweetyFacePinterest</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="mail"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>mailthere@mailprovider.com</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="mail"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>MSC 1587, McCompany Namey, PO BOX 7530, KRYPTON TN 38188-7530</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="logo-googleplus"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>156156165161818</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="pin"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <div #map id="map" style="height:250px;"></div>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row class="vertical-align-content">\n      <ion-col col-1>\n        <ion-icon name="pin"></ion-icon>\n      </ion-col>\n      <ion-col col-11>\n        <b>Custom Field Name Here</b>\n        <hr/>\n        <b>Custom Field Content Here</b>\n      </ion-col>\n    </ion-row>\n    <ion-row><ion-col col-12><hr/></ion-col></ion-row>\n    <ion-row>\n      <button ion-button icon-start color="danger">\n        <ion-icon name="trash"></ion-icon>\n        <b>Remove</b>\n      </button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/azolot/C65024B55024AE5D/Users/user/Documents/Work/Ionic/extreme_cards/src/pages/n11/n11.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], N11Page);

//# sourceMappingURL=n11.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__httprequest_service_httprequest_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__localstorageworker_localstorage__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__system_messages_system_messages__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alert_alert__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(AuthP, httpCaller, LStorage, SMP, ALP) {
        this.AuthP = AuthP;
        this.httpCaller = httpCaller;
        this.LStorage = LStorage;
        this.SMP = SMP;
        this.ALP = ALP;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.isLoggedIn = function () {
        var AuthP = this.AuthP;
        return new Promise(function (accept, reject) {
            var authObserver = AuthP.authState.subscribe(function (user) {
                if (user) {
                    authObserver.unsubscribe();
                    accept(user);
                }
                else {
                    authObserver.unsubscribe();
                    accept(null);
                }
            });
        });
    };
    AuthProvider.prototype.logIn = function (email, password) {
        var AuthP = this.AuthP;
        //0. Check Email and Password are correct.
        //1. LogIn to Firebase Auth. Service and get IDToken.
        //2. Get custom Auth. token from ExtremeCards server.
        //3. LogIn with that token.
        var httpCaller = this.httpCaller;
        var LStorage = this.LStorage;
        var SMP = this.SMP;
        return new Promise(function (accept, reject) {
            //TODO Step 0
            AuthP.auth //1
                .signInWithEmailAndPassword(email, password)
                .then(function (data) {
                data.getIdToken(true)
                    .then(function (idToken) {
                    var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                    headers.append('Content-Type', 'application/json');
                    headers.append('Authorization', 'IDT ' + idToken);
                    headers.append('APIKey', "MYAPIKEY");
                    var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                    httpCaller.call_parametrized(Object(__WEBPACK_IMPORTED_MODULE_5__httprequest_service_httprequest_service__["b" /* getRequestRoutes */])(0, 0), options)
                        .then(function (response) {
                        if (!response.mock) {
                            AuthP.auth.signInWithCustomToken(response.TKN)
                                .then(function (firebaseUserObj) {
                                LStorage.storeSession(firebaseUserObj)
                                    .then(function () {
                                    accept(firebaseUserObj);
                                })
                                    .catch(function (err) {
                                    reject({ code: 6, error: { text: "Error storing the current session." } });
                                });
                            })
                                .catch(function (err) {
                                reject({ code: 5, error: SMP.getFirebaseErrorMessage(err) });
                            });
                        }
                        else {
                            reject({ code: 4, error: { text: "The response from server is a mock." } });
                        }
                    })
                        .catch(function (err) {
                        //TODO Get the Auth. Errors.
                        reject({ code: 3, error: SMP.getHTTPCallErrorMessage(err) });
                    });
                })
                    .catch(function (err) {
                    reject({ code: 2, error: SMP.getFirebaseErrorMessage(err) });
                });
            })
                .catch(function (err) {
                //Get the Firebase Error message.
                reject({ code: 1, error: SMP.getFirebaseErrorMessage(err) });
            });
        });
    };
    AuthProvider.prototype.logOut = function () {
        var AuthP = this.AuthP;
        return new Promise(function (accept, reject) {
            try {
                AuthP.auth.signOut();
                accept();
            }
            catch (e) {
                reject(e);
            }
        });
    };
    AuthProvider.prototype.signUp = function (email, password) {
        var AuthP = this.AuthP;
        var SMP = this.SMP;
        return new Promise(function (accept, reject) {
            AuthP.auth.createUserWithEmailAndPassword(email, password)
                .then(function (newUser) {
                newUser.sendEmailVerification();
                AuthP.auth.signOut();
                accept({ emailSent: true });
            })
                .catch(function (err) {
                //TODO Get Firebas error and return it.
                reject(SMP.getFirebaseErrorMessage(err));
            });
        });
    };
    AuthProvider.prototype.reAuthenticate_emailAndPassword_1 = function (email, password) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.AuthP.auth.onAuthStateChanged(function (user) {
                if (user) {
                    var credentials = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].EmailAuthProvider.credential(email, password);
                    user.reauthenticateWithCredential(credentials)
                        .then(function () {
                        accept();
                    })
                        .catch(function (err) {
                        reject({ where: 2, err: err });
                    });
                }
                else {
                    reject({ where: 1, text: "reAuthenticate_emailAndPassword_1: User is not logged in" });
                }
            });
        });
    };
    AuthProvider.prototype.reAuthenticate_emailAndPassword_0 = function () {
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.ALP.generateSimpleInputAlert({
                title: "Re-Authentication Required.",
                inputs: [{
                        placeholder: "Password",
                        type: "password"
                    }]
            })
                .then(function (passw) {
                ctx.AuthP.auth.onAuthStateChanged(function (user) {
                    if (user) {
                        ctx.reAuthenticate_emailAndPassword_1(user.email, passw[0])
                            .then(function (data) {
                            accept();
                        })
                            .catch(function (err) {
                            reject({ where: 1, err: err });
                        });
                    }
                    else {
                        reject({ where: 0, text: "The user is not logged-in." });
                    }
                });
            })
                .catch(function (err) {
                reject({ where: 0, err: err });
            });
        });
    };
    AuthProvider.prototype.changePassword = function (oldPassword, newPassword) {
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.AuthP.auth.onAuthStateChanged(function (user) {
                if (user) {
                    ctx.reAuthenticate_emailAndPassword_1(user.email, oldPassword)
                        .then(function (data) {
                        ctx.AuthP.auth.currentUser.updatePassword(newPassword)
                            .then(function (data) {
                            accept(data);
                        })
                            .catch(function (err) {
                            reject({ where: 3, err: err });
                        });
                    })
                        .catch(function (err) {
                        reject({ where: 2, err: err });
                    });
                }
                else {
                    reject({ where: 1, text: "changePassword: User is not logged in" });
                }
            });
        });
    };
    AuthProvider.prototype.sendPasswordResetEmail = function (email) {
        var AuthP = this.AuthP;
        return new Promise(function (accept, reject) {
            console.log("sendPasswordResetEmail       1");
            try {
                AuthP.auth.sendPasswordResetEmail(email)
                    .then(function (data) {
                    console.log("sendPasswordResetEmail       2");
                    accept(data);
                })
                    .catch(function (err) {
                    console.log("sendPasswordResetEmail       3");
                    reject({ where: 1, err: err });
                });
            }
            catch (e) {
                reject({ where: 0, err: e });
            }
        });
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
        __WEBPACK_IMPORTED_MODULE_5__httprequest_service_httprequest_service__["a" /* HttprequestServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__localstorageworker_localstorage__["a" /* LocalStorageWorker */],
        __WEBPACK_IMPORTED_MODULE_7__system_messages_system_messages__["a" /* SystemMessagesProvider */],
        __WEBPACK_IMPORTED_MODULE_8__alert_alert__["a" /* AlertProvider */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttprequestServiceProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getRequestRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addresses_addresses__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the HttprequestServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var HttprequestServiceProvider = (function () {
    function HttprequestServiceProvider(http) {
        this.http = http;
        console.log('Hello HttprequestServiceProvider Provider');
    }
    HttprequestServiceProvider.prototype.call = function (callData) {
        var http = this.http;
        return new Promise(function (accept, reject) {
            http.get((typeof callData.url === "string") ? callData.url : __WEBPACK_IMPORTED_MODULE_2__addresses_addresses__["a" /* AddressesProvider */].getBaseConnectionTestingURL())
                .subscribe(function (data) {
                var jsonO;
                try {
                    var jsonO = data.json();
                }
                catch (e) {
                    jsonO = data;
                }
                if (jsonO.mock) {
                    //console.log("call JSON Mock detected...");
                }
                accept(jsonO);
            }, function (err) {
                reject(err);
            });
        });
    };
    HttprequestServiceProvider.prototype.call_parametrized = function (url, options) {
        var http = this.http;
        var simpleCall = this.call;
        url = (typeof url === "string") ? url : __WEBPACK_IMPORTED_MODULE_2__addresses_addresses__["a" /* AddressesProvider */].getBaseConnectionTestingURL();
        if (typeof options !== "object") {
            return simpleCall({ url: url });
        }
        else {
            return new Promise(function (accept, reject) {
                http.get(url, options)
                    .subscribe(function (data) {
                    var jsonO;
                    try {
                        jsonO = data.json();
                    }
                    catch (e) {
                        console.log(e);
                    }
                    accept(jsonO);
                }, function (err) {
                    reject(err);
                });
            });
        }
    };
    return HttprequestServiceProvider;
}());
HttprequestServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HttprequestServiceProvider);

var getRequestRoutes = function (where, which) {
    switch (!isNaN(where) ? where : -1) {
        case 0:
            switch ((!isNaN(which)) ? which : -1) {
                case 0:
                    return __WEBPACK_IMPORTED_MODULE_2__addresses_addresses__["a" /* AddressesProvider */].getBaseLoginRequestURL();
                default:
                    return __WEBPACK_IMPORTED_MODULE_2__addresses_addresses__["a" /* AddressesProvider */].getBaseAuthRequestURL();
            }
        case 1:
            switch ((!isNaN(which)) ? which : -1) {
                case 0:
                    return __WEBPACK_IMPORTED_MODULE_2__addresses_addresses__["a" /* AddressesProvider */].getGeoIpAddress();
                default:
                    return __WEBPACK_IMPORTED_MODULE_2__addresses_addresses__["a" /* AddressesProvider */].getBaseAuthRequestURL();
            }
        default:
            return __WEBPACK_IMPORTED_MODULE_2__addresses_addresses__["a" /* AddressesProvider */].getBaseConnectionTestingURL();
    }
};
//# sourceMappingURL=httprequest-service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageWorker; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 //https://ionicframework.com/docs/storage/
//Stores and retrieves data from the local storage.
var LocalStorageWorker = (function () {
    function LocalStorageWorker(storage) {
        this.storage = storage;
        console.log('Hello LocalstorageProvider Provider');
    }
    LocalStorageWorker.prototype.storeValue = function (key, value) {
        this.storage.set(key, value);
    };
    LocalStorageWorker.prototype.getValue = function (key) {
        return this.storage.get(key);
    };
    LocalStorageWorker.prototype.removeValue = function (key) {
        this.storage.set(key, null);
    };
    LocalStorageWorker.prototype.storeSession = function (firebaseUserObj) {
        var ref = this;
        return new Promise(function (accept, reject) {
            firebaseUserObj.getIdToken(true)
                .then(function (IDT) {
                ref.storeValue("IDT", IDT);
                accept();
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    LocalStorageWorker.prototype.removeSession = function (firebaseUserObj) {
        //Removes the session information
        var ref = this;
        return new Promise(function (accept, reject) {
            ref.storeValue("IDT", null);
            accept();
        });
    };
    LocalStorageWorker.prototype.getSession = function (firebaseUserObj) {
        //Retrieves the session information
        var ref = this;
        return new Promise(function (accept, reject) {
            ref.getValue("IDT")
                .then(function (IDT) {
                accept({ IDT: IDT });
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    return LocalStorageWorker;
}());
LocalStorageWorker = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], LocalStorageWorker);

//# sourceMappingURL=localstorage.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemMessagesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SystemMessagesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var SystemMessagesProvider = (function () {
    function SystemMessagesProvider() {
        console.log('Hello SystemMessagesProvider Provider');
    }
    SystemMessagesProvider.prototype.getFirebaseErrorMessages = function () {
        return {
            "auth/email-already-in-use": {
                text: "The email is already registered. Please try another email."
            }, "default": {
                text: "An error has come up (1). Please try again later."
            }, "auth/invalid-custom-token": {
                text: "The server has provided an invalid token. Please try again later."
            }, "auth/wrong-password": {
                text: "The password is invalid. Please input your current password."
            }, "auth/argument-error": {
                text: "Your inputs are invalid. Please check them again."
            }
        };
    };
    SystemMessagesProvider.prototype.getFirebaseErrorMessage = function (firebaseError) {
        var code = firebaseError.code;
        console.log("getFirebaseErrorMessage: ", firebaseError.code);
        var message = this.getFirebaseErrorMessages()[code];
        if (typeof message === "undefined") {
            message = this.getFirebaseErrorMessages()["default"];
        }
        return message;
    };
    SystemMessagesProvider.prototype.getHTTPCallErrorMessages = function () {
        return {
            status: {
                "0": {
                    text: "The server seems to be down. Please try again later."
                }
            }
        };
    };
    SystemMessagesProvider.prototype.getHTTPCallErrorMessage = function (err) {
        console.log("Err: ", err);
        var error = { text: "HTTP Call Error" };
        switch (err.status) {
            case 0:
                error = this.getHTTPCallErrorMessages().status["0"];
                break;
        }
        return error;
    };
    return SystemMessagesProvider;
}());
SystemMessagesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SystemMessagesProvider);

//# sourceMappingURL=system-messages.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__httprequest_service_httprequest_service__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the LocationProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LocationProvider = (function () {
    function LocationProvider(http, geolocation, HTTP_SP) {
        this.http = http;
        this.geolocation = geolocation;
        this.HTTP_SP = HTTP_SP;
        console.log('Hello LocationProvider Provider');
    }
    LocationProvider.prototype.getCurrentLocation_http = function () {
        //Gets a coarse location from an HTTP call.
        var ctx = this;
        return new Promise(function (accept, reject) {
            console.log("getCurrentLocation_http 1---");
            ctx.HTTP_SP.call({
                url: Object(__WEBPACK_IMPORTED_MODULE_4__httprequest_service_httprequest_service__["b" /* getRequestRoutes */])(1, 0)
            })
                .then(function (data) {
                console.log("getCurrentLocation_http 2 ---", data);
                if (data.status === "success") {
                    accept({
                        coords: {
                            latitude: data.lat,
                            longitude: data.lon
                        }
                    });
                }
                else {
                    reject({ where: 1, text: "Error on request: not successfull." });
                }
            })
                .catch(function (err) {
                console.log("getCurrentLocation_http 3---", err);
                reject({ where: 2, err: err });
            });
        });
    };
    LocationProvider.prototype.getCurrentPosition = function () {
        var position = {
            coords: {
                latitude: -34.9290,
                longitude: 138.6010
            }
        };
        var ctx = this;
        return new Promise(function (accept, reject) {
            ctx.geolocation.getCurrentPosition()
                .then(function (position) {
                console.log("getCurrentPosition 1: ", position);
                accept({ coarse: false, data: position });
            })
                .catch(function (err) {
                console.log("getCurrentPosition 2: ", err);
                ctx.getCurrentLocation_http()
                    .then(function (data) {
                    console.log("getCurrentPosition 3: ", data);
                    position.coords = data.coords;
                    accept({ coarse: true, data: position });
                })
                    .catch(function (err) {
                    console.log("getCurrentPosition 4: ", err);
                    reject({ where: 1, err: err });
                });
            });
        });
    };
    return LocationProvider;
}());
LocationProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__httprequest_service_httprequest_service__["a" /* HttprequestServiceProvider */]])
], LocationProvider);

//# sourceMappingURL=location.js.map

/***/ })

},[280]);
//# sourceMappingURL=main.js.map