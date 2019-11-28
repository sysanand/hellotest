(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-page {\r\n    width: 400px;\r\n    padding: 2% 0 0;\r\n    margin: auto;\r\n}\r\n.alert {\r\n    padding: 20px;\r\n    background-color: #f44336; /* Red */\r\n    color: white;\r\n    margin-bottom: 15px;\r\n}\r\n.form {\r\n    position: relative;\r\n    z-index: 1;\r\n    background: #FFFFFF;\r\n    max-width: 360px;\r\n    margin: 0 auto 15px;\r\n    padding: 45px;\r\n    text-align: center;\r\n    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n.form input {\r\n        font-family: \"Georgia\", sans-serif;\r\n        outline: 0;\r\n        background: #f2f2f2;\r\n        width: 100%;\r\n        border: 0;\r\n        margin: 0 0 12px;\r\n        padding: 12px;\r\n        box-sizing: border-box;\r\n        font-size: 14px;\r\n    }\r\n.alert {\r\n        padding: 20px;\r\n        background-color: #f44336; /* Red */\r\n        color: white;\r\n        margin-bottom: 15px;\r\n    }\r\n/* The close button */\r\n.closebtn {\r\n        margin-left: 15px;\r\n        color: white;\r\n        font-weight: bold;\r\n        float: right;\r\n        font-size: 22px;\r\n        line-height: 20px;\r\n        cursor: pointer;\r\n        transition: 0.3s;\r\n    }\r\n/* When moving the mouse over the close button */\r\n.closebtn:hover {\r\n        color: black;\r\n    }\r\n/*.form button {\r\n        font-family: \"Georgia\", sans-serif;\r\n        text-transform: uppercase;\r\n        outline: 0;\r\n        text-align:center;\r\n        display: inline-block;\r\n        background: #1c93d1;\r\n        width: 100%;\r\n        border: 0;\r\n         padding: 10% 0 0;\r\n        color: #FFFFFF;\r\n        font-size: 14px;\r\n        -webkit-transition: all 0.3 ease;\r\n        transition: all 0.3 ease;\r\n        cursor: pointer;\r\n    }*/\r\n.form button:hover, .form button:active, .form button:focus {\r\n        background:#8bc540;        \r\n        /* // #13C0EF; */\r\n    }\r\n.form .message {\r\n        margin: 15px 0 0;\r\n        color: #b3b3b3;\r\n        font-size: 12px;\r\n    }\r\n.form .message a {\r\n            color: #1263E8;\r\n            text-decoration: none;\r\n        }\r\n.form .register-form {\r\n        display: none;\r\n    }\r\n.container {\r\n    position: relative;\r\n    z-index: 1;\r\n    max-width: 290px;\r\n    margin: 0 auto;\r\n}\r\n.container:before, .container:after {\r\n        content: \"\";\r\n        display: block;\r\n        clear: both;\r\n    }\r\n.container .info {\r\n        margin: 50px auto;\r\n        text-align: center;\r\n    }\r\n.container .info h1 {\r\n            margin: 0 0 15px;\r\n            padding: 0;\r\n            font-size: 36px;\r\n            font-weight: 300;\r\n            color: #1a1a1a;\r\n        }\r\n.container .info span {\r\n            color: #4d4d4d;\r\n            font-size: 12px;\r\n        }\r\n.container .info span a {\r\n                color: #000000;\r\n                text-decoration: none;\r\n            }\r\n.container .info span .fa {\r\n                color: #EF3B3A;\r\n            }\r\nbody {\r\n    background: #FFFFFF; /* fallback for old browsers */\r\n    background: linear-gradient(to left, #FFFFFF, #FFFFFF);\r\n    font-family: \"Georgia\", sans-serif;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content\">\r\n\r\n    <!-- <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\"  [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\"></ng4-loading-spinner> -->\r\n    <div class=\"page-inner page-login\">\r\n        <div id=\"main-wrapper\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4 center\" ng-show=\"login_status\">\r\n                    <div class=\"login-box\">\r\n                        <a class=\"logo-name text-lg text-center\">\r\n                            <img src=\"assets/images/nikitchemlogo3.png\" style=\"width:100px;\" class=\" img-responsive center\" alt=\"gfd\">\r\n                        </a>\r\n                        <p>&nbsp;</p>\r\n                        <!-- <p class=\"text-center m-t-md\">Please login into your account</p> -->\r\n                        <!-- <div ng-show=\"error\" class=\"alert alert-danger\">{{error}}</div> -->\r\n\r\n                        <form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <!-- <label>Username</label> -->\r\n                                <input type=\"text\" formControlName=\"user_name\" class=\"form-control\" placeholder=\"User Id\" type=\"text\" required (keydown)=\"$event.keyCode != 32 ? $event:$event.preventDefault()\">\r\n                                <!-- <span ngif=\"loginForm.username.$dirty && loginForm.username.$error.required\" class=\"help-block error\">User Id is required</span> -->\r\n                                <!-- <input class=\"form-control\" name=\"username\" ng-model=\"vm.username\" limit-to=\"25\" id=\"fname\" placeholder=\"User Id\"  type=\"text\" required /> -->\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <!-- <label>Password</label> -->\r\n                                <!-- <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\"> -->\r\n                                <input type=\"password\" autocomplete=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"form-control\" required\r\n                                    (keydown)=\"$event.keyCode != 32 ? $event:$event.preventDefault()\" />\r\n                                <!-- <span ngif=\"loginForm.password.$dirty && loginForm.password.$error.required\" class=\"help-block error\">Password is required</span> -->\r\n                            </div>\r\n                            <div class=\"checkbox\">\r\n\r\n                                <label class=\"pull-right\">\r\n                                    <a routerLink=\"/forgotpassword\">Forgot Password?</a>\r\n                                </label>\r\n\r\n                            </div>\r\n                            <!-- <button type=\"submit\" class=\"btn btn-success btn-flat m-b-30 m-t-30\">Sign in</button> -->\r\n\r\n                            <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-danger btn-block\" style=\"background-color:#856c51 \">Login</button>\r\n\r\n                            <!-- <div class=\"form-group\">\r\n                        <input class=\"form-control\" name=\"username\" ng-model=\"vm.username\" limit-to=\"25\" id=\"fname\" placeholder=\"User Id\"  type=\"text\" required />\r\n    <span ng-show=\"loginForm.username.$dirty && loginForm.username.$error.required\" class=\"help-block error\">User Id is required</span>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <input type=\"password\"  name=\"password\" ng-model=\"vm.password\" placeholder=\"Password\"  class=\"form-control\" required />\r\n      <span ng-show=\"loginForm.password.$dirty && loginForm.password.$error.required\" class=\"help-block error\">Password is required</span>\r\n                    </div>\r\n  <button   ng-disabled=\"loginForm.$invalid || dataLoading\" class=\"btn btn-danger btn-block\">Login</button> -->\r\n                            <!--  <img ng-if=\"dataLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/> -->\r\n                            <!-- <a ui-sref=\"forgotpwd\" class=\"display-block text-center m-t-md text-sm\">Forgot Password?</a> -->\r\n                            <!--  <p class=\"text-center m-t-xs text-sm\">Do not have an account?</p> -->\r\n                            <!--  <a href=\"register.html\" class=\"btn btn-default btn-block m-t-md\">Create an account</a> -->\r\n                            <!-- <div *ngIf=\"message\" class=\"alert alert-danger\">\r\n               \r\n                        <span class=\"closebtn\" onclick=\"this.parentElement.style.display='none';\">&times;</span> \r\n                        This is an alert box.\r\n                      \r\n             </div> -->\r\n                        </form>\r\n                        <p class=\"text-center m-t-xs text-sm\">2019 &copy; NIKIT CHEM.</p>\r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"col-md-3 center\" ng-show=\"change_pwd_status\">\r\n            <div class=\"login-box\">\r\n                <a href=\"#\" class=\"logo-name text-lg text-center\"><img style=\"width: 100px; margin-left: 30%;\" src=\"app/assets/images/uniplyImages/uniplyLogo.png\" class=\"img-circle img-responsive\" alt=\"\"></a>\r\n                <p class=\"text-center m-t-md\">Change Password.</p>\r\n                <form class=\"login-form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" ng-model=\"pwd.newpwd\" class=\"form-control\" value=\"\" placeholder=\"New Password\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\"  ng-model=\"pwd.confirm\"  class=\"form-control\" value=\"\" placeholder=\"Confirm Password\" required>\r\n                    </div>\r\n                    <a ng-click=\"changepwd(pwd)\" class=\"btn btn-success btn-block\">Submit</a>\r\n                 \r\n                  \r\n                </form>\r\n                <p class=\"text-center m-t-xs text-sm\">2018 &copy; Uniply.</p>\r\n            </div>\r\n        </div> -->\r\n            </div>\r\n            <!-- Row -->\r\n        </div>\r\n        <!-- Main Wrapper -->\r\n    </div>\r\n    <!-- Page Inner -->\r\n\r\n</main>\r\n<!-- Page Content -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, http, router, _location) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this._location = _location;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseURL;
        this.companyID = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].companyid;
        this.loginUrl = this.baseURL + "matrix/loginNew";
    }
    // private spinnerService: Ng4LoadingSpinnerService,
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            user_name: [''],
            password: ['']
        });
    };
    LoginComponent.prototype.login = function (x) {
        var _this = this;
        // this.spinnerService.show();
        // alert(JSON.stringify(x));
        // localStorage.setItem("username",JSON.stringify(x));
        if (x.user_name.length == 0) {
            alert("Enter User Name");
        }
        else if (x.password.length == 0) {
            alert("Enter Password");
        }
        else {
            x.flag = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].flag;
            x.company = this.companyID;
            // alert(JSON.stringify(x));
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
                "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].btoaPassword),
                "Content-Type": "Application/json"
            });
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
            this.http.post(this.loginUrl, x, options)
                .subscribe(function (data) {
                _this.Message = data.json();
                if (data.json().data.error_code == "397") {
                    alert("Session Timeout");
                    _this.router.navigate(['/login']);
                }
                if (data.json().data.error_code == "393") {
                    alert("Unauthorized Login");
                    _this.router.navigate(['/login']);
                }
                if (_this.Message.status == "success") {
                    localStorage.setItem("name", JSON.stringify(_this.Message.data.name));
                    localStorage.setItem("keykjm", JSON.stringify(_this.Message.data.session));
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    alert("Invalid user credentials");
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_2__["LoginRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map