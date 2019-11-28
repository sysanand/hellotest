(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'consumers-add', loadChildren: './consumers-add/consumers-add.module#ConsumersAddModule' },
            { path: 'header', loadChildren: './header/header.module#HeaderModule' },
            { path: 'coupon-redemption-report', loadChildren: './coupon-redemption-report/coupon-redemption-report.module#CouponRedemptionReportModule' },
            { path: 'changepassword', loadChildren: './changepassword/changepassword.module#ChangepasswordModule' },
            { path: 'coupon-order-view', loadChildren: './coupon-order-view/coupon-order-view.module#CouponOrderViewModule' },
            { path: 'coupon-order-list', loadChildren: './coupon-order-list/coupon-order-list.module#CouponOrderListModule' },
            { path: 'coupon-authentication-order-view', loadChildren: './coupon-authentication-order-view/coupon-authentication-order-view.module#CouponAuthenticationOrderViewModule' },
            { path: 'coupon-authentication-track', loadChildren: './coupon-authentication-track/coupon-authentication-track.module#CouponAuthenticationTrackModule' },
            { path: 'referral-points-usage-report', loadChildren: './referral-points-usage-report/referral-points-usage-report.module#ReferralPointsUsageReportModule' },
            { path: 'config-settings', loadChildren: './config-settings/config-settings.module#ConfigSettingsModule' },
            { path: 'consumers-edit', loadChildren: './consumers-edit/consumers-edit.module#ConsumersEditModule' },
            { path: 'consumers-list', loadChildren: './consumers-list/consumers-list.module#ConsumersListModule' },
            { path: 'consumer-referral-report', loadChildren: './consumer-referral-report/consumer-referral-report.module#ConsumerReferralReportModule' },
            { path: 'consumer-wallet-balance-report', loadChildren: './consumer-wallet-balance-report/consumer-wallet-balance-report.module#ConsumerWalletBalanceReportModule' },
            { path: 'manage-payment', loadChildren: './manage-payment/manage-payment.module#ManagePaymentModule' },
            { path: 'coupon-usage-report', loadChildren: './coupon-usage-report/coupon-usage-report.module#CouponUsageReportModule' },
            { path: 'consumers-redemption-report', loadChildren: './consumers-redemption-report/consumers-redemption-report.module#ConsumersRedemptionReportModule' },
            { path: 'virtual-wallet-balance', loadChildren: './virtual-wallet-balance/virtual-wallet-balance.module#VirtualWalletBalanceModule' },
            { path: 'clear-wallet-balance', loadChildren: './clear-wallet-balance/clear-wallet-balance.module#ClearWalletBalanceModule' },
            { path: 'amount-awarded-through-referral', loadChildren: './amount-awarded-through-referral/amount-awarded-through-referral.module#AmountAwardedThroughReferralModule' },
            { path: 'referral-points-redemption-report', loadChildren: './referral-points-redemption-report/referral-points-redemption-report.module#ReferralPointsRedemptionReportModule' },
            { path: 'highest-referral', loadChildren: './highest-referral/highest-referral.module#HighestReferralModule' },
            { path: 'highest-referral-detailsview', loadChildren: './highest-referral-detailsview/highest-referral-detailsview.module#HighestReferralDetailsviewModule' },
            { path: 'blocked-amount', loadChildren: './blocked-amount/blocked-amount.module#BlockedAmountModule' },
            { path: 'redeemed-amount', loadChildren: './redeemed-amount/redeemed-amount.module#RedeemedAmountModule' }
        ]
    }];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n \r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_2__["LayoutRoutingModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map