(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resetpassword-resetpassword-module"],{

/***/ "./src/app/resetpassword/resetpassword-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ResetpasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordRoutingModule", function() { return ResetpasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _resetpassword_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetpassword.component */ "./src/app/resetpassword/resetpassword.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _resetpassword_component__WEBPACK_IMPORTED_MODULE_2__["ResetpasswordComponent"]
    }
];
var ResetpasswordRoutingModule = /** @class */ (function () {
    function ResetpasswordRoutingModule() {
    }
    ResetpasswordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ResetpasswordRoutingModule);
    return ResetpasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.css":
/*!***********************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.html":
/*!************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <main class=\"page-content\">\r\n\r\n  <!-- <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\"  [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\"></ng4-loading-spinner> -->\r\n<div class=\"page-inner page-login\">\r\n<div id=\"main-wrapper\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 center\" ng-show=\"login_status\">\r\n            <div class=\"login-box\">\r\n                <a class=\"logo-name text-lg text-center\"><img style=\"width:180px;\" src=\"assets/images/nikitchemlogo3.png\" class=\" img-responsive center\" alt=\"\"></a>\r\n                <p>&nbsp;</p>\r\n<!-- <p class=\"text-center m-t-md\">Please login into your account</p> -->\r\n<!-- <div ng-show=\"error\" class=\"alert alert-danger\">{{error}}</div> -->\r\n             \r\n<form class=\"login-form\" [formGroup]=\"resetForm\" (ngSubmit)=\"reset(resetForm.value)\">\r\n\r\n      <div class=\"form-group\">\r\n              <label><b>RESET PASSWORD</b></label>\r\n              <input type=\"password\"  name=\"newPassword\" formControlName=\"newPassword\"  placeholder=\"New Password\"  class=\"form-control\" required (keydown)=\"$event.keyCode != 32 ? $event:$event.preventDefault()\"/>\r\n              <!-- <span ngif=\"loginForm.username.$dirty && loginForm.username.$error.required\" class=\"help-block error\">User Id is required</span> -->\r\n              <!-- <input class=\"form-control\" name=\"username\" ng-model=\"vm.username\" limit-to=\"25\" id=\"fname\" placeholder=\"User Id\"  type=\"text\" required /> -->\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <!-- <label>Password</label> -->\r\n              <!-- <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\"> -->\r\n              <input type=\"password\"  name=\"confirmpassword\" formControlName=\"confirmpassword\"  placeholder=\"Confirm Password\"  class=\"form-control\" required (keydown)=\"$event.keyCode != 32 ? $event:$event.preventDefault()\"/>\r\n              <!-- <span ngif=\"loginForm.password.$dirty && loginForm.password.$error.required\" class=\"help-block error\">Password is required</span> -->\r\n          </div>\r\n          \r\n          <!-- <button type=\"submit\" class=\"btn btn-success btn-flat m-b-30 m-t-30\">Sign in</button> -->\r\n      \r\n          <button   [disabled]=\"!resetForm.valid\" class=\"btn btn-danger btn-block\" style=\"background-color:#0093dd \">RESET PASSWORD</button>\r\n                    <!-- <div class=\"form-group\">\r\n                        <input class=\"form-control\" name=\"username\" ng-model=\"vm.username\" limit-to=\"25\" id=\"fname\" placeholder=\"User Id\"  type=\"text\" required />\r\n    <span ng-show=\"loginForm.username.$dirty && loginForm.username.$error.required\" class=\"help-block error\">User Id is required</span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <input type=\"password\"  name=\"password\" ng-model=\"vm.password\" placeholder=\"Password\"  class=\"form-control\" required />\r\n      <span ng-show=\"loginForm.password.$dirty && loginForm.password.$error.required\" class=\"help-block error\">Password is required</span>\r\n                    </div>\r\n  <button   ng-disabled=\"loginForm.$invalid || dataLoading\" class=\"btn btn-danger btn-block\">Login</button> -->\r\n                   <!--  <img ng-if=\"dataLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/> -->\r\n                    <!-- <a ui-sref=\"forgotpwd\" class=\"display-block text-center m-t-md text-sm\">Forgot Password?</a> -->\r\n                   <!--  <p class=\"text-center m-t-xs text-sm\">Do not have an account?</p> -->\r\n                   <!--  <a href=\"register.html\" class=\"btn btn-default btn-block m-t-md\">Create an account</a> -->\r\n                </form>\r\n                <p class=\"text-center m-t-xs text-sm\">2018 &copy; Matrix.</p>\r\n            </div>\r\n        </div>\r\n<!-- <div class=\"col-md-3 center\" ng-show=\"change_pwd_status\">\r\n            <div class=\"login-box\">\r\n                <a href=\"#\" class=\"logo-name text-lg text-center\"><img style=\"width: 100px; margin-left: 30%;\" src=\"app/assets/images/uniplyImages/uniplyLogo.png\" class=\"img-circle img-responsive\" alt=\"\"></a>\r\n                <p class=\"text-center m-t-md\">Change Password.</p>\r\n                <form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" ng-model=\"pwd.newpwd\" class=\"form-control\" value=\"\" placeholder=\"New Password\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\"  ng-model=\"pwd.confirm\"  class=\"form-control\" value=\"\" placeholder=\"Confirm Password\" required>\r\n                    </div>\r\n                    <a ng-click=\"changepwd(pwd)\" class=\"btn btn-success btn-block\">Submit</a>\r\n                 \r\n                  \r\n                </form>\r\n                <p class=\"text-center m-t-xs text-sm\">2018 &copy; Uniply.</p>\r\n            </div>\r\n        </div> -->\r\n    </div><!-- Row -->\r\n</div><!-- Main Wrapper -->\r\n</div><!-- Page Inner -->\r\n\r\n</main><!-- Page Content -->\r\n"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.ts ***!
  \**********************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
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







var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(fb, http, router, _location) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this._location = _location;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseURL;
        this.resetUrl = this.baseURL + "consumer/password";
    }
    // private spinnerService: Ng4LoadingSpinnerService,
    ResetpasswordComponent.prototype.ngOnInit = function () {
        // this.otp = JSON.parse(localStorage.getItem("OTP"));
        this.userId = JSON.parse(localStorage.getItem("userId"));
        this.resetForm = this.fb.group({
            newPassword: [''],
            confirmpassword: [''],
        });
    };
    ResetpasswordComponent.prototype.back = function () {
        this.router.navigate(['/login']);
    };
    ResetpasswordComponent.prototype.reset = function (x) {
        var _this = this;
        // alert(JSON.stringify(x));
        x.userId = this.userId;
        x.isConsumerLogin = false;
        // x.isConsumerLogin=false;
        if (x.newPassword == x.confirmpassword) {
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
                "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].btoaPassword),
                "Content-Type": "Application/json"
            });
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
            // UserServicesUrl:string=this.baseURL + 'user/userlist/' + (page_no - 1) + '/' + this.page_size + '/' + this.roleId + '/' + this.city + '/' + this.state + '/' + search,
            this.resetlist = {
                "newPassword": x.newPassword,
                "userId": x.userId,
                "isConsumerLogin": x.isConsumerLogin
            };
            this.http.post(this.resetUrl, this.resetlist, options)
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
                    alert("Password changed successfully...");
                    // localStorage.setItem("OTP", JSON.stringify(this.forgotlist.otp));
                    localStorage.setItem("userId", JSON.stringify(_this.forgotlist.userId));
                    // localStorage.clear();
                    _this.router.navigate(['/login']);
                }
                // alert(JSON.stringify( this.forgotlist))
            });
        }
        else {
            alert("New Password doesn't match with Confirm Password");
        }
    };
    ResetpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetpassword.component.html */ "./src/app/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__(/*! ./resetpassword.component.css */ "./src/app/resetpassword/resetpassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.module.ts ***!
  \*******************************************************/
/*! exports provided: ResetpasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordModule", function() { return ResetpasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetpassword-routing.module */ "./src/app/resetpassword/resetpassword-routing.module.ts");
/* harmony import */ var _resetpassword_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetpassword.component */ "./src/app/resetpassword/resetpassword.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ResetpasswordModule = /** @class */ (function () {
    function ResetpasswordModule() {
    }
    ResetpasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _resetpassword_routing_module__WEBPACK_IMPORTED_MODULE_2__["ResetpasswordRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_resetpassword_component__WEBPACK_IMPORTED_MODULE_3__["ResetpasswordComponent"]]
        })
    ], ResetpasswordModule);
    return ResetpasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=resetpassword-resetpassword-module.js.map