(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["validateotp-validateotp-module"],{

/***/ "./src/app/validateotp/validateotp-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/validateotp/validateotp-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ValidateotpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateotpRoutingModule", function() { return ValidateotpRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validateotp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateotp.component */ "./src/app/validateotp/validateotp.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _validateotp_component__WEBPACK_IMPORTED_MODULE_2__["ValidateotpComponent"]
    }
];
var ValidateotpRoutingModule = /** @class */ (function () {
    function ValidateotpRoutingModule() {
    }
    ValidateotpRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ValidateotpRoutingModule);
    return ValidateotpRoutingModule;
}());



/***/ }),

/***/ "./src/app/validateotp/validateotp.component.css":
/*!*******************************************************!*\
  !*** ./src/app/validateotp/validateotp.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/validateotp/validateotp.component.html":
/*!********************************************************!*\
  !*** ./src/app/validateotp/validateotp.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content\">\r\n\r\n    <!-- <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\"  [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\"></ng4-loading-spinner> -->\r\n    <div class=\"page-inner page-login\">\r\n        <div id=\"main-wrapper\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 center\" ng-show=\"login_status\">\r\n                    <div class=\"login-box\">\r\n                        <a class=\"logo-name text-lg text-center\">\r\n                            <img style=\"width:180px;\" src=\"assets/images/nikitchemlogo3.png\" class=\" img-responsive center\" alt=\"\">\r\n                        </a>\r\n                        <p>&nbsp;</p>\r\n                        <!-- <p class=\"text-center m-t-md\">Please login into your account</p> -->\r\n                        <!-- <div ng-show=\"error\" class=\"alert alert-danger\">{{error}}</div> -->\r\n\r\n                        <form class=\"login-form\" [formGroup]=\"forgotForm\" (ngSubmit)=\"forgotpass(forgotForm.value)\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Enter your otp below to reset your password</label>\r\n                                <input type=\"text\" formControlName=\"otp\" class=\"form-control\" placeholder=\"OTP\" required (keypress)=\"numberOnly($event)\">\r\n                            </div>\r\n\r\n                            <button [disabled]=\"!forgotForm.valid\" class=\"btn btn-danger btn-block\" style=\"background-color:#0093dd \">SUBMIT</button>\r\n                            <button (click)=\"back()\" class=\"btn btn-danger btn-block\" style=\"background-color:#ffffff;color:black;border-color: lightslategray \">\r\n                                BACK</button>\r\n\r\n                        </form>\r\n                        <p class=\"text-center m-t-xs text-sm\">2019 &copy; NIKIT CHEM.</p>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- Row -->\r\n        </div>\r\n        <!-- Main Wrapper -->\r\n    </div>\r\n    <!-- Page Inner -->\r\n\r\n</main>\r\n<!-- Page Content -->"

/***/ }),

/***/ "./src/app/validateotp/validateotp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/validateotp/validateotp.component.ts ***!
  \******************************************************/
/*! exports provided: ValidateotpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateotpComponent", function() { return ValidateotpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ValidateotpComponent = /** @class */ (function () {
    function ValidateotpComponent(fb, http, router, _location) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this._location = _location;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseURL;
        this.validateUrl = this.baseURL + "matrix/otpVerify";
    }
    // private spinnerService: Ng4LoadingSpinnerService,
    ValidateotpComponent.prototype.ngOnInit = function () {
        this.forgotForm = this.fb.group({
            otp: ['']
        });
    };
    ValidateotpComponent.prototype.back = function () {
        this.router.navigate(['/login']);
    };
    ValidateotpComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    ValidateotpComponent.prototype.forgotpass = function (x) {
        var _this = this;
        this.user_name1 = JSON.parse(localStorage.getItem("user_name"));
        this.userId = JSON.parse(localStorage.getItem("userId"));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.validateotplist = {
            "user_name": this.user_name1.user_name,
            "otp": x.otp
        };
        this.http.post(this.validateUrl, this.validateotplist, options)
            .subscribe(function (data) {
            _this.forgotlist = data.json().data;
            if (_this.forgotlist.error_message == "OTP is wrong try again") {
                alert("OTP is wrong try again");
                _this.router.navigate(['/forgotpassword']);
            }
            if (_this.forgotlist.message == "Otp verified Successfully") {
                alert("Otp verified Successfully");
                _this.router.navigate(['/resetpassword']);
            }
        });
    };
    ValidateotpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validateotp',
            template: __webpack_require__(/*! ./validateotp.component.html */ "./src/app/validateotp/validateotp.component.html"),
            styles: [__webpack_require__(/*! ./validateotp.component.css */ "./src/app/validateotp/validateotp.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ValidateotpComponent);
    return ValidateotpComponent;
}());



/***/ }),

/***/ "./src/app/validateotp/validateotp.module.ts":
/*!***************************************************!*\
  !*** ./src/app/validateotp/validateotp.module.ts ***!
  \***************************************************/
/*! exports provided: ValidateotpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateotpModule", function() { return ValidateotpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _validateotp_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validateotp-routing.module */ "./src/app/validateotp/validateotp-routing.module.ts");
/* harmony import */ var _validateotp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateotp.component */ "./src/app/validateotp/validateotp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ValidateotpModule = /** @class */ (function () {
    function ValidateotpModule() {
    }
    ValidateotpModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _validateotp_routing_module__WEBPACK_IMPORTED_MODULE_2__["ValidateotpRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_validateotp_component__WEBPACK_IMPORTED_MODULE_3__["ValidateotpComponent"]]
        })
    ], ValidateotpModule);
    return ValidateotpModule;
}());



/***/ })

}]);
//# sourceMappingURL=validateotp-validateotp-module.js.map