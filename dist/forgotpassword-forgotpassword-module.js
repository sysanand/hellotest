(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./src/app/forgotpassword/forgotpassword-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotpasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordRoutingModule", function() { return ForgotpasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _forgotpassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _forgotpassword_component__WEBPACK_IMPORTED_MODULE_2__["ForgotpasswordComponent"]
    }
];
var ForgotpasswordRoutingModule = /** @class */ (function () {
    function ForgotpasswordRoutingModule() {
    }
    ForgotpasswordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ForgotpasswordRoutingModule);
    return ForgotpasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content\">\r\n\r\n    <!-- <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\"  [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\"></ng4-loading-spinner> -->\r\n    <div class=\"page-inner page-login\">\r\n        <div id=\"main-wrapper\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 center\" ng-show=\"login_status\">\r\n                    <div class=\"login-box\">\r\n                        <a class=\"logo-name text-lg text-center\">\r\n                            <img style=\"width:100px;\" src=\"assets/images/nikitchemlogo3.png\" class=\" img-responsive center\" alt=\"\">\r\n                        </a>\r\n                        <p>&nbsp;</p>\r\n                        <!-- <p class=\"text-center m-t-md\">Please login into your account</p> -->\r\n                        <!-- <div ng-show=\"error\" class=\"alert alert-danger\">{{error}}</div> -->\r\n\r\n                        <form class=\"login-form\" [formGroup]=\"forgotForm\" (ngSubmit)=\"forgotpass(forgotForm.value)\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Enter your e-mail address below to reset your password</label>\r\n                                <input type=\"text\" formControlName=\"user_name\" class=\"form-control\" placeholder=\"Email ID\" type=\"email\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\"\r\n                                    (keydown)=\"$event.keyCode != 32 ? $event:$event.preventDefault()\">\r\n                            </div>\r\n\r\n\r\n\r\n                            <button type=\"submit\" [disabled]=\"!forgotForm.valid\" class=\"btn btn-danger btn-block\" style=\"background-color:#1560AA \">SUBMIT</button>\r\n                            <button type=\"button\" (click)=\"back()\" class=\"btn btn-danger btn-block\" style=\"background-color:#ffffff;color:black;border-color: lightslategray \">\r\n                                BACK</button>\r\n\r\n                        </form>\r\n                        <p class=\"text-center m-t-xs text-sm\">2019 &copy; NIKIT CHEM.</p>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <!-- Row -->\r\n        </div>\r\n        <!-- Main Wrapper -->\r\n    </div>\r\n    <!-- Page Inner -->\r\n\r\n</main>\r\n<!-- Page Content -->"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
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







var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(fb, http, router, _location) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this._location = _location;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseURL;
        this.companyID = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].companyid;
        this.forgotUrl = this.baseURL + "matrix/forgotPass";
    }
    // private spinnerService: Ng4LoadingSpinnerService,
    ForgotpasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = this.fb.group({
            user_name: ['']
        });
    };
    ForgotpasswordComponent.prototype.back = function () {
        this.router.navigate(['/login']);
    };
    ForgotpasswordComponent.prototype.forgotpass = function (x) {
        var _this = this;
        localStorage.setItem("user_name", JSON.stringify(x));
        //x.isConsumerLogin=false;
        x.company = this.companyID;
        //alert(JSON.stringify(x));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.post(this.forgotUrl, x, options)
            .subscribe(function (data) {
            _this.forgotlist = data.json().data;
            // alert(JSON.stringify(data.json().data.list));  
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Inavlid please try again...");
                _this.router.navigate(['/login']);
            }
            if (data.json().status == "success") {
                alert("OTP is sent to your Mobile.Please check now");
                localStorage.setItem("userId", JSON.stringify(_this.forgotlist.userId));
                _this.router.navigate(['/validateotp']);
            }
            if (data.json().data.error_message == "Invalid UserName!") {
                alert("Invalid Email ID");
            }
        });
    };
    ForgotpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotpasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordModule", function() { return ForgotpasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpassword-routing.module */ "./src/app/forgotpassword/forgotpassword-routing.module.ts");
/* harmony import */ var _forgotpassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ForgotpasswordModule = /** @class */ (function () {
    function ForgotpasswordModule() {
    }
    ForgotpasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_2__["ForgotpasswordRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_forgotpassword_component__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordComponent"]]
        })
    ], ForgotpasswordModule);
    return ForgotpasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module.js.map