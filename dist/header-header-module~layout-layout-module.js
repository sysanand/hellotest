(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["header-header-module~layout-layout-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/of.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/of.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].of = rxjs__WEBPACK_IMPORTED_MODULE_0__["of"];
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n    <div class=\"navbar-inner\">\r\n        <div class=\"sidebar-pusher\">\r\n            <a href=\"javascript:void(0);\" class=\"waves-effect waves-button waves-classic push-sidebar\">\r\n                <i class=\"fa fa-bars\"></i>\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"logo-box\" style=\"background-color:#fff;width: 100px;\">\r\n\r\n            <a>\r\n                <img style=\"width:115px; height:60px; object-fit: contain;\" src=\"assets/images/nikitchemlogo3.png\" />\r\n            </a>\r\n        </div>\r\n        <!-- Logo Box -->\r\n        <div class=\"topmenu-outer\">\r\n            <div class=\"top-menu\">\r\n                <ul class=\"nav navbar-nav navbar-left\">\r\n                    <p style=\"font-family: Cinzel;font-size: 20px;margin-top: 15px;\r\n                        margin-left: -43px;\">Nikit Chem</p>\r\n                    <!-- <li class=\"dropdown\">\r\n\r\n                        <a class=\"dropdown-toggle waves-effect waves-button waves-classic\" data-toggle=\"dropdown\">\r\n\r\n                            <img src=\"assets/images/menu-nik.png\" style=\"width:24px;\" alt=\"\">\r\n                        </a>\r\n\r\n                        <ul class=\"dropdown-menu dropdown-list\" role=\"menu\">\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\"\r\n                                        style=\"font-size: 20px\"></i>dashboard</a>\r\n                            </li>\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/consumers-list\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\"\r\n                                        style=\"font-size: 20px\"></i>Consumers</a>\r\n                            </li>\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/gps-location-report\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>GPS\r\n                                    Location Report</a>\r\n                            </li>\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/customer-wallet-balance-report\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>Customer\r\n                                    Wallet Balance Report</a>\r\n                            </li>\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/customer-wallet-usage-report\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>Customer\r\n                                    Wallet Usage Report</a>\r\n                            </li>\r\n\r\n\r\n                        </ul>\r\n                    </li> -->\r\n\r\n                    <li style=\"display:none;\">\r\n                        <a href=\"javascript:void(0);\" class=\"waves-effect waves-button waves-classic\" id=\"showRight\">\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n                <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle waves-effect waves-button waves-classic\" data-toggle=\"dropdown\">\r\n                            <img src=\"assets/images/nikit/report.png\" style=\"width:24px;\" alt=\"\">\r\n                        </a>\r\n                        <ul class=\"dropdown-menu dropdown-list\" role=\"menu\">\r\n                            <!-- <li role=\"presentation\">\r\n                                <a routerLink=\"/coupon-usage-report\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>\r\n                                    Coupon Usage Report</a>\r\n                            </li> -->\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/consumers-redemption-report\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>\r\n                                    Consumers Redemption Report</a>\r\n                            </li>\r\n                            <!-- <li role=\"presentation\">\r\n                                <a routerLink=\"/coupon-redemption-report\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>\r\n                                    Coupon Redemption Report</a>\r\n                            </li> -->\r\n                            <!-- <li role=\"presentation\">\r\n                                <a routerLink=\"/consumer-referral-report\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>\r\n                                    Consumer Referral Report</a>\r\n                            </li> -->\r\n                            <!-- <li role=\"presentation\">\r\n                                <a routerLink=\"/referral-points-redemption-report\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>\r\n                                    Referral Points Redemption Report</a>\r\n                            </li> -->\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/referral-points-usage-report\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>\r\n                                    Referral Points Usage Report</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n\r\n                    <li class=\"dropdown\">\r\n\r\n                        <a class=\"dropdown-toggle waves-effect waves-button waves-classic\" data-toggle=\"dropdown\">\r\n\r\n                            <img src=\"assets/images/niki-new.png\" style=\"width:24px;\" alt=\"\">\r\n                        </a>\r\n\r\n                        <ul class=\"dropdown-menu dropdown-list\" role=\"menu\">\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\"\r\n                                        style=\"font-size: 20px\"></i>Dashboard</a>\r\n                            </li>\r\n                            <!-- <li role=\"presentation\">\r\n                                <a routerLink=\"/consumers-list\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>Manage\r\n                                    Consumers</a>\r\n                            </li> -->\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/coupon-order-list\">\r\n                                    <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>\r\n                                    Coupon Order List</a>\r\n                            </li>\r\n                            <li role=\"presentation\">\r\n                                    <a routerLink=\"/config-settings\">\r\n                                        <i class=\"menu-icon glyphicon glyphicon-stats\" style=\"font-size: 20px\"></i>\r\n                                        Config Settings</a>\r\n                                </li>\r\n                        </ul>\r\n                    </li>\r\n                    <li class=\"dropdown\">\r\n                        <a class=\"dropdown-toggle waves-effect waves-button waves-classic\" data-toggle=\"dropdown\">\r\n                            <span class=\"user-name\">{{name}}\r\n                                <i class=\"fa fa-angle-down\"></i>\r\n                            </span>\r\n                            <img class=\"img-circle avatar\" src=\"assets/images/avatar1.png\" width=\"40\" height=\"40\"\r\n                                alt=\"\">\r\n                        </a>\r\n\r\n                        <ul class=\"dropdown-menu dropdown-list\" role=\"menu\">\r\n                            <li role=\"presentation\">\r\n                                <a routerLink=\"/changepassword\">\r\n                                    <i class=\"fa fa-user\"></i>Profile</a>\r\n                            </li>\r\n                            <li role=\"presentation\">\r\n                                <a (click)=\"logout()\">\r\n                                    <i class=\"fa fa-sign-out m-r-xs\"></i>Log out</a>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n\r\n                    <li style=\"display:none;\">\r\n                        <a href=\"javascript:void(0);\" class=\"waves-effect waves-button waves-classic\" id=\"showRight\">\r\n\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n                <!-- Nav -->\r\n            </div>\r\n            <!-- Top Menu -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- <app-alerts></app-alerts> -->\r\n<!-- Navbar -->\r\n<!-- <div class=\"responsive\">\r\n  <div class=\"page-sidebar\">\r\n      <div class=\"page-sidebar-inner slimscroll\">\r\n          <ul class=\"menu accordion-menu\">\r\n               <li *ngFor=\"let y of menuIcons\">\r\n                  <a routerLink=\"{{y.url}}\" class=\"waves-effect waves-button\">\r\n                      <span class=\"{{y.icon}}\" style=\"font-size:25px\"></span>\r\n                      <p value=\"y.menuId\">{{y.menu}}</p>\r\n\r\n                  </a>\r\n              </li> \r\n          </ul>\r\n      </div>\r\n      \r\n  </div>\r\n  \r\n</div> -->\r\n<div class=\"page-footer topmenu-outer\">\r\n    <p class=\"no-s\">2019 &copy; NIKIT CHEM.</p>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
        this.logoutUrl = this.baseURL + "matrix/logout";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.name = JSON.parse(localStorage.getItem("name"));
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        //   this.http.post(this.loginUrl, x, options)
        this.keykjm = { "keykjm": this.keykjm };
        this.http.post(this.logoutUrl, this.keykjm, options)
            .subscribe(function (data) {
            _this.Message = data.json().data;
            // alert(this.Message.status);
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Inavlid please try again...");
                _this.router.navigate(['/login']);
            }
            if (_this.Message.message == 'Logout successfully') {
                _this.router.navigate(['/login']);
            }
        });
        localStorage.clear();
        this.router.navigate(['/login']);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ })

}]);
//# sourceMappingURL=header-header-module~layout-layout-module.js.map