(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-authentication-track-coupon-authentication-track-module"],{

/***/ "./src/app/layout/coupon-authentication-track/coupon-authentication-track-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-track/coupon-authentication-track-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: CouponAuthenticationTrackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponAuthenticationTrackRoutingModule", function() { return CouponAuthenticationTrackRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coupon_authentication_track_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-authentication-track.component */ "./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _coupon_authentication_track_component__WEBPACK_IMPORTED_MODULE_2__["CouponAuthenticationTrackComponent"]
    }
];
var CouponAuthenticationTrackRoutingModule = /** @class */ (function () {
    function CouponAuthenticationTrackRoutingModule() {
    }
    CouponAuthenticationTrackRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CouponAuthenticationTrackRoutingModule);
    return CouponAuthenticationTrackRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <!-- <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner> -->\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>View Track Usage </h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/coupon-order-list\">Coupon Orders</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/coupon-authentication-order-view\">View Authentication Coupons</a>\r\n            </li>\r\n            <li class=\"active\">View Track Usage</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel panel-white\">\r\n              <div style=\"clear:both\"></div>\r\n              <div class=\"panel-body\">\r\n        \r\n                <div class=\"table-responsive\">\r\n                  <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n                    <thead>\r\n                      <tr>\r\n                       \r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n\r\n                          Mobile\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          State\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Platform\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Status\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Used Date\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr\r\n                        *ngFor=\"let x of getTrackUsageView  | paginate: { itemsPerPage: 10, currentPage: p, id:'id1' };let i = index\">\r\n                  \r\n                        <td style=\"padding-left: 2%\">{{x.mobile}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.city}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.platform}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.status}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.usedDate | date : 'dd/MM/yyyy'}} {{x.usedDate|date:'shortTime'}}</td>\r\n\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <div *ngIf=\"! getTrackUsageView?.length\" class=\"col-md-12 col-centered text-center\">\r\n                    <b>No Data Found</b>\r\n                  </div>\r\n                  <pagination-controls (pageChange)=\"p = $event\" id=\"id1\" autoHide=true class=\"my-pagination\">\r\n                  </pagination-controls>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CouponAuthenticationTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponAuthenticationTrackComponent", function() { return CouponAuthenticationTrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CouponAuthenticationTrackComponent = /** @class */ (function () {
    function CouponAuthenticationTrackComponent(http, router) {
        this.http = http;
        this.router = router;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseURL;
        this.btoaUsername = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].btoaUsername;
        this.btoaPassword = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].btoaPassword;
        this.companyId = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].companyid;
        this.getTrackUsageUrl = "couponorder/getAuthentDetailList/";
    }
    CouponAuthenticationTrackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        this.couponCode = localStorage.getItem('couponCode');
        // let obj = {
        //   "keykjm": this.keykjm,
        // }
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        this.http.get(this.baseURL + this.getTrackUsageUrl + this.couponCode, options)
            .subscribe(function (data) {
            _this.getTrackUsageView = data.json().data.trackCoupon;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Inavlid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    CouponAuthenticationTrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupon-authentication-track',
            template: __webpack_require__(/*! ./coupon-authentication-track.component.html */ "./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.html"),
            styles: [__webpack_require__(/*! ./coupon-authentication-track.component.css */ "./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CouponAuthenticationTrackComponent);
    return CouponAuthenticationTrackComponent;
}());



/***/ }),

/***/ "./src/app/layout/coupon-authentication-track/coupon-authentication-track.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-track/coupon-authentication-track.module.ts ***!
  \******************************************************************************************/
/*! exports provided: CouponAuthenticationTrackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponAuthenticationTrackModule", function() { return CouponAuthenticationTrackModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coupon_authentication_track_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-authentication-track-routing.module */ "./src/app/layout/coupon-authentication-track/coupon-authentication-track-routing.module.ts");
/* harmony import */ var _coupon_authentication_track_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-authentication-track.component */ "./src/app/layout/coupon-authentication-track/coupon-authentication-track.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CouponAuthenticationTrackModule = /** @class */ (function () {
    function CouponAuthenticationTrackModule() {
    }
    CouponAuthenticationTrackModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _coupon_authentication_track_routing_module__WEBPACK_IMPORTED_MODULE_2__["CouponAuthenticationTrackRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_coupon_authentication_track_component__WEBPACK_IMPORTED_MODULE_3__["CouponAuthenticationTrackComponent"]]
        })
    ], CouponAuthenticationTrackModule);
    return CouponAuthenticationTrackModule;
}());



/***/ })

}]);
//# sourceMappingURL=coupon-authentication-track-coupon-authentication-track-module.js.map