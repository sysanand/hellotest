(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-order-list-coupon-order-list-module"],{

/***/ "./src/app/layout/coupon-order-list/coupon-order-list-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/coupon-order-list/coupon-order-list-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: CouponOrderListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponOrderListRoutingModule", function() { return CouponOrderListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coupon_order_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-order-list.component */ "./src/app/layout/coupon-order-list/coupon-order-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _coupon_order_list_component__WEBPACK_IMPORTED_MODULE_2__["CouponOrderListComponent"]
    }
];
var CouponOrderListRoutingModule = /** @class */ (function () {
    function CouponOrderListRoutingModule() {
    }
    CouponOrderListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CouponOrderListRoutingModule);
    return CouponOrderListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/coupon-order-list/coupon-order-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/layout/coupon-order-list/coupon-order-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/coupon-order-list/coupon-order-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/layout/coupon-order-list/coupon-order-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner>\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>Coupons Order List</h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li class=\"active\">Coupons Order List</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel panel-white\">\r\n              <div style=\"clear:both\"></div>\r\n              <div class=\"panel-body\">\r\n                <ul class=\"nav nav-tabs\">\r\n                  <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">Redeemable</a></li>\r\n                  <li><a data-toggle=\"tab\" href=\"#menu1\">Authentication</a></li>\r\n                </ul>\r\n                <div class=\"tab-content\">\r\n                        <!-- <div class=\"form-group\">\r\n                          <div class=\"col-md-10\">\r\n                            <input formControlName=\"name\" type=\"text\" placeholder=\"Search coupon\" autocomplete=\"off\"\r\n                              class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px;width: 300px;\r\n                              float: right;\">\r\n                          </div>\r\n                          <button type=\"button\" class=\"btn btn-success btn\"\r\n                            (click)=\"couponsearch()\"\r\n                            style=\"background-color:#856c51 ;padding: 7px 25px;margin-left: -15px;\">SEARCH</button>\r\n                        </div> -->\r\n                        <form style=\"margin-top:30px;\" [formGroup]=\"couponSearch\"\r\n                         class=\"form-horizontal\">                     \r\n                            <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\"  style=\"display: flex\">\r\n                                <div>\r\n                                  <input formControlName=\"orderId\" type=\"text\" placeholder=\"Order Search\" autocomplete=\"off\"\r\n                                    class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px;width: 270px\">\r\n                                </div>\r\n                                <button type=\"button\" class=\"btn btn-success btn\"\r\n                                  (click)=\"search(couponSearch.value)\"\r\n                                  style=\"background-color:#856c51 ;padding: 7px 25px;\">SEARCH</button>\r\n      \r\n                              </div>\r\n                              <div class=\"form-group col-md-6\"  style=\"display: flex\">\r\n                                  <div>\r\n                                    <input formControlName=\"couponId\" type=\"text\" placeholder=\"Coupon Search\" autocomplete=\"off\"\r\n                                      class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px;width: 270px\">\r\n                                  </div>\r\n                                  <button type=\"button\" class=\"btn btn-success btn\"\r\n                                    (click)=\"search(couponSearch.value)\"\r\n                                    style=\"background-color:#856c51 ;padding: 7px 25px;\">SEARCH</button>\r\n                                </div>\r\n      \r\n                        </div>\r\n                         \r\n                      </form>\r\n\r\n\r\n                  <div id=\"home\" class=\"tab-pane fade in active\">\r\n                    <div class=\"table-responsive\">\r\n                      <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                              Order Id\r\n                            </th>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                              No.of Coupons\r\n\r\n                            </th>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                              Coupon Value\r\n                            </th>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                                Active Coupons\r\n                              </th>\r\n                              <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                                  InActive Coupons\r\n                                </th>\r\n                                <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                                    Scanned Coupons\r\n                                  </th>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                              Ordered Date\r\n                            </th>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                              Action\r\n                            </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr\r\n                            *ngFor=\"let x of getRedeemlist  | paginate: { itemsPerPage: 10, currentPage: p };let i = index\">\r\n                            <td style=\"padding-left: 2%\">{{x.orderId}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.NoOfCoupons}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.denomination}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.activeCoupons}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.inactiveCoupons}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.scannedCoupons}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.orderedDate | date : 'dd MMM yyyy h:mm a'}}</td>\r\n                            <td style=\"padding-left: 2%\"> <button type=\"button\" (click)=\"viewRedeemOrder(x.orderId)\"\r\n                                class=\"btn btn-success btn-rounded\" style=\"margin-left: 17%; background:#856c51;\">\r\n                                View\r\n                              </button></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <div *ngIf=\"! getRedeemlist?.length\" class=\"col-md-12 col-centered text-center\">\r\n                        <b>No Data Found</b>\r\n                      </div>\r\n                      <!-- <pagination-controls (pageChange)=\"p = $event\" id=\"id1\" autoHide=true class=\"my-pagination\">\r\n                      </pagination-controls> -->\r\n                      <pagination-controls (pageChange)=\"p = $event\" autoHide=true class=\"my-pagination\">\r\n                      </pagination-controls>\r\n                    </div>\r\n                  </div>\r\n                  <div id=\"menu1\" class=\"tab-pane fade\">\r\n\r\n                    <div class=\"table-responsive\">\r\n                      <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                              Order Id\r\n                            </th>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                              No.of Coupons\r\n\r\n                            </th>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                                Active Coupons\r\n  \r\n                              </th>\r\n                              <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                                  InActive Coupons\r\n    \r\n                                </th>\r\n                                <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                                    Scanned Coupons\r\n      \r\n                                  </th>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                              Ordered Date\r\n                            </th>\r\n                            <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                              Action\r\n                            </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr\r\n                            *ngFor=\"let x of getAuthenticationlist  | paginate: { itemsPerPage: 10, currentPage: q, id:'id1' };let i = index\">\r\n                            <td style=\"padding-left: 2%\">{{x.orderId}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.NoOfCoupons}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.activeCoupons}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.inactiveCoupons}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.scannedCoupons}}</td>\r\n                            <td style=\"padding-left: 2%\">{{x.orderedDate | date : 'dd/MM/yyyy'}} {{x.orderedDate|date:'shortTime'}}</td>\r\n                            <td style=\"padding-left: 2%\"> <button type=\"button\" (click)=\"viewAuthenticationOrder(x.orderId)\"\r\n                                class=\"btn btn-success btn-rounded\" style=\"margin-left: 17%; background:#856c51;\">\r\n                                View\r\n                              </button></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <div *ngIf=\"! getAuthenticationlist?.length\" class=\"col-md-12 col-centered text-center\">\r\n                        <b>No Data Found</b>\r\n                      </div>\r\n                      <pagination-controls (pageChange)=\"q = $event\" id=\"id2\" autoHide=true class=\"my-pagination\">\r\n                      </pagination-controls>\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/layout/coupon-order-list/coupon-order-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/coupon-order-list/coupon-order-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: CouponOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponOrderListComponent", function() { return CouponOrderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CouponOrderListComponent = /** @class */ (function () {
    function CouponOrderListComponent(http, router, fb) {
        this.http = http;
        this.router = router;
        this.fb = fb;
        // redeemableListUrl:string="couponorder/getRedeemAndAuthentList/";
        this.searchListUrl = "nikit/getCouponOrderList";
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
        this.btoaUsername = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername;
        this.btoaPassword = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword;
        this.companyId = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyid;
    }
    CouponOrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.couponSearch = this.fb.group({
            orderId: [''],
            couponId: ['']
        });
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 1000,
            "search": null,
            "couponCode": ""
            //"company": this.companyId
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.searchListUrl, obj, options)
            .subscribe(function (data) {
            _this.getRedeemlist = data.json().data.RedeemableList;
            _this.getAuthenticationlist = data.json().data.AutenticationList;
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
    CouponOrderListComponent.prototype.search = function (x) {
        var _this = this;
        if (x.orderId == null || x.orderId == undefined || x.orderId == "") {
            x.orderId = null;
        }
        else {
            x.orderId = x.orderId;
        }
        if (x.couponId == null || x.couponId == undefined || x.couponId == "") {
            x.couponId = null;
        }
        else {
            x.couponId = x.couponId;
        }
        var obj = {
            "keykjm": this.keykjm,
            "search": x.orderId,
            "couponCode": x.couponId,
            "page": 0,
            "size": 10000
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.searchListUrl, obj, options)
            .subscribe(function (data) {
            _this.getRedeemlist = data.json().data.RedeemableList;
            _this.getAuthenticationlist = data.json().data.AutenticationList;
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
    // searchCoupon(x) {
    //   if (x.orderId == null|| x.orderId == undefined || x.orderId == "") {
    //         x.orderId = null;      
    //       }
    //       else {
    //         x.orderId = x.orderId;
    //       }
    //       if (x.couponId == null|| x.couponId == undefined || x.couponId == "") {
    //         x.couponId = null;      
    //       }
    //       else {
    //         x.couponId = x.couponId;
    //       }
    //   let obj = {
    //     "keykjm": this.keykjm,
    //     "search": x.orderId,
    //     "couponCode": x.couponId,
    //     "page": 0,
    //     "size": 10000
    //   }
    //   let headers = new Headers({
    //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
    //     "Content-Type": "Application/json"
    //   });
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.post(this.baseURL + this.searchListUrl, obj, options)
    //     .subscribe(data =>{
    //       this.getRedeemlist = data.json().data.RedeemableList;
    //     this.getAuthenticationlist = data.json().data.AutenticationList
    //     if (data.json().data.error_code == "397") {
    //       alert("Session Timeout");
    //       this.router.navigate(['/login']);
    //     }
    //     if (data.json().data.error_code == "393") {
    //       alert("Session Timeout or Inavlid please try again...");
    //       this.router.navigate(['/login']);
    //     }
    //   });
    // }
    CouponOrderListComponent.prototype.viewRedeemOrder = function (orderId) {
        localStorage.setItem('orderId', orderId);
        this.router.navigate(['/coupon-order-view']);
    };
    CouponOrderListComponent.prototype.viewAuthenticationOrder = function (orderId) {
        localStorage.setItem('orderId', orderId);
        this.router.navigate(['/coupon-authentication-order-view']);
    };
    CouponOrderListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupon-order-list',
            template: __webpack_require__(/*! ./coupon-order-list.component.html */ "./src/app/layout/coupon-order-list/coupon-order-list.component.html"),
            styles: [__webpack_require__(/*! ./coupon-order-list.component.css */ "./src/app/layout/coupon-order-list/coupon-order-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], CouponOrderListComponent);
    return CouponOrderListComponent;
}());



/***/ }),

/***/ "./src/app/layout/coupon-order-list/coupon-order-list.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/coupon-order-list/coupon-order-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: CouponOrderListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponOrderListModule", function() { return CouponOrderListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coupon_order_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-order-list-routing.module */ "./src/app/layout/coupon-order-list/coupon-order-list-routing.module.ts");
/* harmony import */ var _coupon_order_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-order-list.component */ "./src/app/layout/coupon-order-list/coupon-order-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CouponOrderListModule = /** @class */ (function () {
    function CouponOrderListModule() {
    }
    CouponOrderListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _coupon_order_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["CouponOrderListRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_coupon_order_list_component__WEBPACK_IMPORTED_MODULE_3__["CouponOrderListComponent"]]
        })
    ], CouponOrderListModule);
    return CouponOrderListModule;
}());



/***/ })

}]);
//# sourceMappingURL=coupon-order-list-coupon-order-list-module.js.map