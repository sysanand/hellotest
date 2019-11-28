(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-authentication-order-view-coupon-authentication-order-view-module"],{

/***/ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: CouponAuthenticationOrderViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponAuthenticationOrderViewRoutingModule", function() { return CouponAuthenticationOrderViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coupon_authentication_order_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-authentication-order-view.component */ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _coupon_authentication_order_view_component__WEBPACK_IMPORTED_MODULE_2__["CouponAuthenticationOrderViewComponent"]
    }
];
var CouponAuthenticationOrderViewRoutingModule = /** @class */ (function () {
    function CouponAuthenticationOrderViewRoutingModule() {
    }
    CouponAuthenticationOrderViewRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CouponAuthenticationOrderViewRoutingModule);
    return CouponAuthenticationOrderViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <!-- <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner> -->\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>View Authentication Order </h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/coupon-order-list\">Coupon Orders</a>\r\n            </li>\r\n            <li class=\"active\">View Authentication Coupons</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-6 fade-element-in animated zoomIn\" >\r\n            <div class=\"panel info-box panel-white\">\r\n              <div class=\"panel-body\" style=\"height: 107px;\">\r\n                <div class=\"info-box-stats\">\r\n                  <p style=\"text-align: left;\">\r\n                    <span class=\"counter\">{{couponsCount.activeCoupons}}</span>\r\n                  </p>\r\n                  <span class=\"info-box-title\"  style=\"font-weight: bold; text-align: left;\">Total Coupons Active</span>\r\n                </div>\r\n                <div class=\"info-box-icon\">\r\n                  <i class=\"fa fa-tag\" style=\"color:#856c51;\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"col-lg-4 col-md-6 animated zoomIn\">\r\n              <div class=\"panel info-box panel-white\">\r\n                <div class=\"panel-body\" style=\"height: 107px;\">\r\n                  <div class=\"info-box-stats\">\r\n                    <p style=\"text-align: left;\">\r\n                      <!-- <i class=\"fa fa-inr\" aria-hidden=\"true\" style=\"font-size:26px;\"></i> -->\r\n                      <span class=\"counter\">{{couponsCount.inactiveCoupons}}</span>\r\n                    </p>\r\n                    <span class=\"info-box-title\"  style=\"font-weight: bold; text-align: left;\">Total Coupons InActive</span>\r\n                  </div>\r\n                  <div class=\"info-box-icon\">\r\n                    <i class=\"fa fa-tag\" style=\"color:#856c51;\"></i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n          <div class=\"col-lg-4 col-md-6 animated zoomIn\">\r\n            <div class=\"panel info-box panel-white\">\r\n              <div class=\"panel-body\" style=\"height: 107px;\">\r\n                <div class=\"info-box-stats\">\r\n                  <p style=\"text-align: left;\">\r\n                    <!-- <i class=\"fa fa-inr\" aria-hidden=\"true\" style=\"font-size:26px;\"></i> -->\r\n                    <span class=\"counter\" >{{couponsCount.scannedCoupons}}</span>\r\n                  </p>\r\n                  <span class=\"info-box-title\"  style=\"font-weight: bold; text-align: left;\">Total Coupons Scanned</span>\r\n                </div>\r\n                <div class=\"info-box-icon\">\r\n                  <i class=\"fa fa-tag\" style=\"color:#856c51;\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  \r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel panel-white\">\r\n              <div style=\"clear:both\"></div>\r\n              <div class=\"panel-body\">\r\n               \r\n                  <div class=\"col-md-12\">\r\n                      <form [formGroup]=\"couponSearch\"\r\n                      class=\"form-horizontal\"> \r\n                    <div class=\"col-md-5\"> \r\n                      <button type=\"button\" class=\"btn btn-success btn\"\r\n                      style=\"background-color:#856c51;\" (click)=\"activeCoupons()\">  \r\n                      Activate</button>\r\n                    </div>\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"form-group\">\r\n                          <div class=\"col-md-8\">\r\n                            <input formControlName=\"couponId\" type=\"text\" placeholder=\"Search coupon\" autocomplete=\"off\"\r\n                              class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px;\">\r\n                          </div>\r\n                          <button type=\"button\" class=\"btn btn-success btn\"\r\n                            (click)=\"searchCoupon(couponSearch.value)\"\r\n                            style=\"background-color:#856c51 ;padding: 7px 25px;\">SEARCH</button>\r\n                        </div>\r\n                      </div>\r\n                    <div class=\"col-md-2 text-right\">\r\n                      <button type=\"button\" class=\"btn btn-success btn\"\r\n                        style=\"background-color:#856c51;\" data-toggle=\"modal\"\r\n                        data-target=\"#myModal1\" style=\"background-color:#856c51;margin-right: 10px;\">  \r\n                        Active</button>\r\n                      \r\n                      <!-- <div class=\"col-md-2 text-right\"> -->\r\n                        <button type=\"button\" class=\"btn btn-success btn\"\r\n                        style=\"background-color:#856c51;\" (click)=\"inActiveCoupons()\">  \r\n                        Inactive</button>\r\n                    </div>\r\n                  </form>\r\n                  </div>\r\n                <div>&nbsp;</div>\r\n                <div class=\"table-responsive\">\r\n                  <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\"></th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n\r\n                          Coupon Code\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Status\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Usage Count\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Action\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr\r\n                        *ngFor=\"let x of getAuthenticationView  | paginate: { itemsPerPage: 10, currentPage: p, id:'id1' };let i = index\">\r\n                        <td> <input id=\"{{x.couponCode}}\" [disabled]=\"x.couponStatus == 'Scanned'\" type=\"checkbox\"\r\n                            value=\"{{x.couponCode}}\" (change)=\"checkIfAllSelected(x.couponCode,$event.target.checked);\">\r\n                        </td>\r\n                        <td style=\"padding-left: 2%\">{{x.couponCode}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.couponStatus}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.usageCount}}</td>\r\n                        <td style=\"padding-left: 2%\"> <button type=\"button\" (click)=\"viewTrackUsageOrder(x.couponCode)\"\r\n                            class=\"btn btn-success btn-rounded\" style=\"background:#856c51;\">\r\n                            Track Usage\r\n                          </button></td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                  <div *ngIf=\"! getAuthenticationView?.length\" class=\"col-md-12 col-centered text-center\">\r\n                    <b>No Data Found</b>\r\n                  </div>\r\n                  <pagination-controls (pageChange)=\"p = $event\" id=\"id1\" autoHide=true class=\"my-pagination\">\r\n                  </pagination-controls>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n\r\n\r\n\r\n<div data-keyboard=\"false\" data-backdrop=\"static\" class=\"modal fade\" id=\"myModal1\" tabindex=\"1\" role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Active Coupons</h4> \r\n      </div>\r\n      <!-- <div id=\"main-wrapper\"> -->\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"panel panel-white\">\r\n            <div class=\"panel-body\" style=\"padding: 10px;\">\r\n              <form class=\"form-horizontal\" [formGroup]=\"acticeCouponsForm\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"input-help-block\" class=\"col-sm-4 control-label\">No.of Coupons\r\n                    <span class=\"error\">*</span>\r\n                  </label>\r\n                  <div class=\"col-sm-8\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"couponCount\"  pattern=\"^[0-9]*$\"\r\n                     required>\r\n                    <div *ngIf=\"acticeCouponsForm.controls['couponCount'].invalid && (acticeCouponsForm.controls['couponCount'].dirty || acticeCouponsForm.controls['couponCount'].touched)\"\r\n                      class=\"alert alert-danger\">\r\n                      <div *ngIf=\"acticeCouponsForm.controls['couponCount'].errors.required\">\r\n                        No.of Coupons required.\r\n                      </div>\r\n                      <div *ngIf=\"acticeCouponsForm.controls['couponCount'].errors.pattern\">Invalid Number</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                \r\n                </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- </div> -->\r\n      <!-- Main Wrapper -->\r\n      <div class=\"modal-footer\" style=\"padding-top: 0px;\">\r\n        <button type=\"submit\" [disabled]=\"!acticeCouponsForm.valid\" style=\"background:#856c51;\" (click)=\"activatingCoupons(acticeCouponsForm.value)\" data-dismiss=\"modal\"\r\n        class=\"btn btn-success\">Activate</button>\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">\r\n          Close\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CouponAuthenticationOrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponAuthenticationOrderViewComponent", function() { return CouponAuthenticationOrderViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CouponAuthenticationOrderViewComponent = /** @class */ (function () {
    function CouponAuthenticationOrderViewComponent(http, router, fb) {
        this.http = http;
        this.router = router;
        this.fb = fb;
        // getAuthenticationUrl: string = "couponorder/getAuthenticationList/";
        this.getAuthenticationUrl = "nikit/getAuthenticationListView";
        this.couponInactiveUrl = "couponorder/updateCouponStatus";
        this.activateCouponUrl = "couponorder/activateCoupon";
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL;
        this.btoaUsername = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername;
        this.btoaPassword = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword;
        this.companyId = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].companyid;
        this.list = [];
    }
    CouponAuthenticationOrderViewComponent.prototype.ngOnInit = function () {
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        this.orderId = localStorage.getItem('orderId');
        this.listofCoupons();
        this.couponSearch = this.fb.group({
            couponId: ['']
        });
        this.acticeCouponsForm = this.fb.group({
            "keykjm": this.keykjm,
            "orderId": this.orderId,
            "couponCount": ['']
        });
    };
    CouponAuthenticationOrderViewComponent.prototype.listofCoupons = function () {
        var _this = this;
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 10,
            "search": null,
            //"company": this.companyId,
            "orderId": this.orderId
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.getAuthenticationUrl, obj, options)
            .subscribe(function (data) {
            _this.couponsCount = data.json().data;
            _this.getAuthenticationView = data.json().data.CouponAuthenticationList;
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
    CouponAuthenticationOrderViewComponent.prototype.searchCoupon = function (x) {
        var _this = this;
        if (this.orderId == null || this.orderId == undefined || this.orderId == "") {
            this.orderId = null;
        }
        else {
            this.orderId = this.orderId;
        }
        if (x.couponId == null || x.couponId == undefined || x.couponId == "") {
            x.couponId = null;
        }
        else {
            x.couponId = x.couponId;
        }
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 100000,
            "search": x.couponId,
            // "company": this.companyId,
            "orderId": this.orderId
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.getAuthenticationUrl, obj, options)
            .subscribe(function (data) {
            _this.getAuthenticationView = data.json().data.CouponAuthenticationList;
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
    CouponAuthenticationOrderViewComponent.prototype.activatingCoupons = function (x) {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.activateCouponUrl, x, options)
            .subscribe(function (data) {
            // this.getRedeemView = data.json().data.CouponRedeemableList;
            if (data.json().status == "success") {
                _this.listofCoupons();
                //this.acticeCouponsForm.reset();
                _this.msg = data.json().data.message;
                _this.openSuccessCancelSwal(_this.msg);
            }
            if (data.json().data.error_code == "414") {
                _this.msg = data.json().data.error_message;
                _this.openErrorCancelSwal(_this.msg);
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
    CouponAuthenticationOrderViewComponent.prototype.openSuccessCancelSwal = function (msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            // title: 'Deleted!',
            text: msg,
            type: 'success',
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
    };
    CouponAuthenticationOrderViewComponent.prototype.openErrorCancelSwal = function (msg) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            // title: 'Deleted!',
            text: msg,
            type: 'error',
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
    };
    CouponAuthenticationOrderViewComponent.prototype.checkIfAllSelected = function (id, checked) {
        if (checked) {
            this.list.push(id);
        }
        else {
            var index = this.list.indexOf(id);
            this.list.splice(index, 1);
            // alert("splice =="+JSON.stringify(this.list))
        }
        // alert(JSON.stringify(this.list))
    };
    CouponAuthenticationOrderViewComponent.prototype.activeCoupons = function () {
        var _this = this;
        if (this.list.length != 0) {
            var obj = {
                "coupons": this.list,
                "status": 1,
                "keykjm": this.keykjm,
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
                "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
                "Content-Type": "Application/json"
            });
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
            this.http.post(this.baseURL + this.couponInactiveUrl, obj, options)
                .subscribe(function (data) {
                // this.getRedeemView = data.json().data.CouponRedeemableList;
                _this.listofCoupons();
                if (_this.msg = data.json().data.message) {
                    _this.list = [];
                    _this.openSuccessSwal(_this.msg);
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
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                text: "Select atleast one checkbox",
                type: 'warning'
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
        }
    };
    CouponAuthenticationOrderViewComponent.prototype.inActiveCoupons = function () {
        var _this = this;
        if (this.list.length != 0) {
            var obj = {
                "coupons": this.list,
                "status": 0,
                "keykjm": this.keykjm,
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
                "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
                "Content-Type": "Application/json"
            });
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
            this.http.post(this.baseURL + this.couponInactiveUrl, obj, options)
                .subscribe(function (data) {
                // this.getRedeemView = data.json().data.CouponRedeemableList;
                _this.listofCoupons();
                if (_this.msg = data.json().data.message) {
                    _this.list = [];
                    _this.openSuccessSwal(_this.msg);
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
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                text: "Select atleast one checkbox",
                type: 'warning'
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
        }
    };
    CouponAuthenticationOrderViewComponent.prototype.openSuccessSwal = function (success) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
            text: success,
            type: 'success'
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
    };
    CouponAuthenticationOrderViewComponent.prototype.viewTrackUsageOrder = function (x) {
        localStorage.setItem('couponCode', x);
        this.router.navigate(['/coupon-authentication-track']);
    };
    CouponAuthenticationOrderViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupon-authentication-order-view',
            template: __webpack_require__(/*! ./coupon-authentication-order-view.component.html */ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.html"),
            styles: [__webpack_require__(/*! ./coupon-authentication-order-view.component.css */ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], CouponAuthenticationOrderViewComponent);
    return CouponAuthenticationOrderViewComponent;
}());



/***/ }),

/***/ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: CouponAuthenticationOrderViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponAuthenticationOrderViewModule", function() { return CouponAuthenticationOrderViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coupon_authentication_order_view_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-authentication-order-view-routing.module */ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view-routing.module.ts");
/* harmony import */ var _coupon_authentication_order_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-authentication-order-view.component */ "./src/app/layout/coupon-authentication-order-view/coupon-authentication-order-view.component.ts");
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







var CouponAuthenticationOrderViewModule = /** @class */ (function () {
    function CouponAuthenticationOrderViewModule() {
    }
    CouponAuthenticationOrderViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _coupon_authentication_order_view_routing_module__WEBPACK_IMPORTED_MODULE_2__["CouponAuthenticationOrderViewRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_coupon_authentication_order_view_component__WEBPACK_IMPORTED_MODULE_3__["CouponAuthenticationOrderViewComponent"]]
        })
    ], CouponAuthenticationOrderViewModule);
    return CouponAuthenticationOrderViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=coupon-authentication-order-view-coupon-authentication-order-view-module.js.map