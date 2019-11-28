(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["virtual-wallet-balance-virtual-wallet-balance-module"],{

/***/ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/virtual-wallet-balance/virtual-wallet-balance-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: VirtualWalletBalanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualWalletBalanceRoutingModule", function() { return VirtualWalletBalanceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _virtual_wallet_balance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-wallet-balance.component */ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _virtual_wallet_balance_component__WEBPACK_IMPORTED_MODULE_2__["VirtualWalletBalanceComponent"]
    }
];
var VirtualWalletBalanceRoutingModule = /** @class */ (function () {
    function VirtualWalletBalanceRoutingModule() {
    }
    VirtualWalletBalanceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], VirtualWalletBalanceRoutingModule);
    return VirtualWalletBalanceRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\n    <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\n    </ng4-loading-spinner>\n    <div class=\"fix-header fix-sidebar\">\n      <div class=\"page-inner\">\n        <div class=\"page-title\">\n          <h3>Virtual Wallet Balance</h3>\n          <div class=\"page-breadcrumb\">\n            <ol class=\"breadcrumb\">\n              <li>\n                <a routerLink=\"/\">Dashboard</a>\n              </li>\n              <li class=\"active\">Virtual Wallet Balance</li>\n            </ol>\n          </div>\n        </div>\n        <div id=\"main-wrapper\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"panel\">\n                <div class=\"panel-body\" style=\"margin-top:1.5px;\">\n                  <div class=\"row\">\n                      <h4 style=\"margin-left: 15px\">Virtual Wallet Balance &nbsp;&nbsp;&nbsp;{{vitualBalance | currency: 'INR':'symbol':'1.0-0' }}</h4>\n                  </div>\n  \n                  <!-- <form style=\"margin-top:30px;\" [formGroup]=\"virtualwalletForm\"\n                    (ngSubmit)=\"consumergetRedeemptionList(virtualwalletForm.value,0)\" class=\"form-horizontal\"> -->\n  \n                    <div class=\"row\">\n                      \n                      <div class=\"col-sm-11\">\n                        <div class=\"form-group\" style=\"float: right\">\n                         \n                          <button type=\"button\" \n                            (click)=\"exportToExcel()\" class=\"btn btn-success btn\"\n                            style=\"background-color:#856c51;\">\n                            <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i> \n                            Export</button>    \n                        </div>\n                      </div>\n  \n                    </div>\n                    \n                  <!-- </form> -->\n                </div>\n              </div>\n            </div>\n          </div>\n          <!-- Row -->\n  \n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"panel panel-white\">\n                \n                <div style=\"clear:both\"></div>\n                <div class=\"panel-body\">\n                  <div class=\"table-responsive\">\n                    <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\n  \n  \n                      <thead>\n                        <tr>\n                         \n                          \n                          <th style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                            Amount Received\n  \n                          </th>\n                          <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                              Coupon Used\n    \n                            </th>\n                          <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                            Virtual Balance\n  \n                          </th>\n  \n                         \n  \n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr\n                          *ngFor=\"let x of vitualBalanceListData  | paginate: { itemsPerPage: 10, currentPage: p, totalItems:countItems };let i = index\">\n                          <td style=\"padding-left: 2%\">{{x.amountReceived}}</td>\n                        <td style=\"padding-left: 2%\">{{x.couponUsed}}</td>\n                        <td style=\"padding-left: 2%\">{{x.virtualBalance}}</td>\n                        </tr>\n                      </tbody>\n                    </table>\n  \n                    <div *ngIf=\"!vitualBalanceListData?.length\" class=\"col-md-12 col-centered text-center\">\n                      <b>No Data Found</b>\n                    </div>\n                    <pagination-controls (pageChange)=\"p = $event\"\n                      (click)=\"vitualBalanceListData(virtualwalletForm.value,p)\" class=\"my-pagination\">\n                    </pagination-controls>\n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n"

/***/ }),

/***/ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VirtualWalletBalanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualWalletBalanceComponent", function() { return VirtualWalletBalanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VirtualWalletBalanceComponent = /** @class */ (function () {
    function VirtualWalletBalanceComponent(http, router) {
        this.http = http;
        this.router = router;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
        this.excelURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].excelURL;
        this.btoaUsername = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername;
        this.btoaPassword = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword;
        this.flag = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].flag;
        this.vitualBalanceUrl = this.baseURL + "nikit/vitualBalanceNikit";
        this.exportVirtualWalletUsageReportListUrl = this.baseURL + "file/nikitVirtualWalletBalanceExport";
    }
    VirtualWalletBalanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 10000,
        };
        this.http.post(this.vitualBalanceUrl, obj, options)
            .subscribe(function (data) {
            _this.vitualBalance = data.json().data.virtualBalance;
            _this.vitualBalanceListData = data.json().data.list;
            // alert(JSON.stringify(this.vitualBalanceListData))      
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
    VirtualWalletBalanceComponent.prototype.exportToExcel = function () {
        var _this = this;
        var obj = {
            "keykjm": this.keykjm,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        this.http.post(this.exportVirtualWalletUsageReportListUrl, obj, options)
            .subscribe(function (data) {
            //{"data":"ClearWalletBalanceNikit1910171039421042.xlsx","status":"success"}
            if (data.json().status == "success") {
                _this.getexportlist = data.json().data;
                window.open(_this.excelURL + "report/" + _this.getexportlist, '_blank');
            }
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
    VirtualWalletBalanceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-virtual-wallet-balance',
            template: __webpack_require__(/*! ./virtual-wallet-balance.component.html */ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.html"),
            styles: [__webpack_require__(/*! ./virtual-wallet-balance.component.css */ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], VirtualWalletBalanceComponent);
    return VirtualWalletBalanceComponent;
}());



/***/ }),

/***/ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.module.ts ***!
  \********************************************************************************/
/*! exports provided: VirtualWalletBalanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirtualWalletBalanceModule", function() { return VirtualWalletBalanceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _virtual_wallet_balance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./virtual-wallet-balance-routing.module */ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance-routing.module.ts");
/* harmony import */ var _virtual_wallet_balance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtual-wallet-balance.component */ "./src/app/layout/virtual-wallet-balance/virtual-wallet-balance.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var VirtualWalletBalanceModule = /** @class */ (function () {
    function VirtualWalletBalanceModule() {
    }
    VirtualWalletBalanceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _virtual_wallet_balance_routing_module__WEBPACK_IMPORTED_MODULE_2__["VirtualWalletBalanceRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            ],
            declarations: [_virtual_wallet_balance_component__WEBPACK_IMPORTED_MODULE_3__["VirtualWalletBalanceComponent"]]
        })
    ], VirtualWalletBalanceModule);
    return VirtualWalletBalanceModule;
}());



/***/ })

}]);
//# sourceMappingURL=virtual-wallet-balance-virtual-wallet-balance-module.js.map