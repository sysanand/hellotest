(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-redemption-report-coupon-redemption-report-module"],{

/***/ "./src/app/layout/coupon-redemption-report/coupon-redemption-report-routing.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/coupon-redemption-report/coupon-redemption-report-routing.module.ts ***!
  \********************************************************************************************/
/*! exports provided: CouponRedemptionReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponRedemptionReportRoutingModule", function() { return CouponRedemptionReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coupon_redemption_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-redemption-report.component */ "./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _coupon_redemption_report_component__WEBPACK_IMPORTED_MODULE_2__["CouponRedemptionReportComponent"]
    }
];
var CouponRedemptionReportRoutingModule = /** @class */ (function () {
    function CouponRedemptionReportRoutingModule() {
    }
    CouponRedemptionReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CouponRedemptionReportRoutingModule);
    return CouponRedemptionReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\"></ng4-loading-spinner>\r\n\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>Coupon Redemption Report</h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li class=\"active\">Coupon Redemption Report</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <form style=\"margin-top:30px;\" [formGroup]=\"couponRedeemForm\" (ngSubmit)=\"usagelist(couponRedeemForm.value)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"panel\">\r\n                <div class=\"panel-body\" style=\"margin-top:1.5px;\">\r\n\r\n                  <div class=\"form-group\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"col-sm-4 control-label\" style=\"text-align:right;margin-top: 5px;\">From Date</label>\r\n                          <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span>\r\n                          <div class=\"col-sm-7\">\r\n                            <input type=\"date\" formControlName=\"fromDate\" class=\"form-control\" placeholder=\"YYYY-MM-DD\"\r\n                              pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"col-sm-4 control-label\" style=\"text-align:right;margin-top: 5px;\">To Date</label>\r\n                          <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span>\r\n                          <div class=\"col-sm-7\">\r\n                            <input type=\"date\" formControlName=\"toDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\"\r\n                              pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\">\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-4\" style=\"width: 200px\">\r\n                        <button type=\"submit\" [disabled]=\"!couponRedeemForm.valid\" style=\"background:#856c51;\" class=\"btn btn-success btn-rounded\">\r\n                          <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View Report\r\n                        </button>\r\n                      </div>\r\n                     \r\n                      <div class=\"col-md-2\" style=\"width: 200px\">\r\n                        <button type=\"button\" [disabled]=\"!couponRedeemForm.valid\" (click)=\"exportToExcel(couponRedeemForm.value)\" class=\"btn btn-success btn\"\r\n                          style=\"background-color:#856c51\">\r\n                          <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n                          Export</button>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Row -->\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\" id=\"bus-journal\" ng-show=\"true\">\r\n              <div class=\"panel panel-white\">\r\n                \r\n               \r\n                <!-- <div class=\"row\">\r\n                    <div style=\"height: 10px\"></div>\r\n                  <div class=\"col-md-6\" style =\"margin-left:800px;\">\r\n                    <div class=\"form-group\">\r\n                      <button style=\"float:right;background:#1560AA\" type=\"button\" class=\"btn btn-success dropdown-toggle\">\r\n                        <img src=\"assets/images/search.png\" style=\"float:right;height:20px;width:25px\">\r\n                      </button>\r\n                      <input type=\"text\" formControlName=\"search\" (keyup)=\"searchlist(couponRedeemForm.value)\" style=\"width:50%;float:right;display:inline-block;\"\r\n                        class=\"form-control\" placeholder=\"search\">\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n              \r\n\r\n                <div style=\"clear:both\"></div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"table-responsive\">\r\n                    <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n\r\n\r\n                      <thead>\r\n                        <tr>\r\n                            <th class=\"cursor-pointer\" \r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Coupon Code\r\n                           \r\n                          </th>\r\n                          <th class=\"cursor-pointer\" \r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Consumer name\r\n                          \r\n                          </th>\r\n                          <th class=\"cursor-pointer\"\r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Mobile\r\n                           \r\n                          </th>\r\n                          \r\n                          <th class=\"cursor-pointer\"\r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Payment Type \r\n                           \r\n                          </th>\r\n                          <th class=\"cursor-pointer\"\r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Payment Date \r\n                          \r\n                          </th>\r\n                          <th class=\"cursor-pointer\"\r\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Payment Ref.No \r\n                        \r\n                        </th>\r\n                        <th class=\"cursor-pointer\"\r\n                        style=\"background-color: #856c51;color:white;padding-left: 2%\">Amount  \r\n                      \r\n                      </th>\r\n                        </tr>\r\n                      </thead>\r\n\r\n                      <tbody>\r\n                        <tr *ngFor=\"let x of couponRedeemListData  | paginate: { itemsPerPage: 10, currentPage: p };let i = index\">\r\n                          <td style=\"padding-left: 2%\">{{x.coupon}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.consumerName}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.consumerMobile}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.paymentType}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.paymentDate | date:'short'}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.coupon_redemtion}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.amount}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <div *ngIf=\"! couponRedeemListData?.length\" class=\"col-md-12 col-centered text-center\">\r\n                      <b>No Data Found</b>\r\n                    </div>\r\n                    <pagination-controls (pageChange)=\"p = $event\" autoHide=true class=\"my-pagination\"></pagination-controls>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</main>"

/***/ }),

/***/ "./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CouponRedemptionReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponRedemptionReportComponent", function() { return CouponRedemptionReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CouponRedemptionReportComponent = /** @class */ (function () {
    function CouponRedemptionReportComponent(fb, http, router, window) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.window = window;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL;
        this.excelURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].excelURL;
        this.btoaUsername = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername;
        this.btoaPassword = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword;
        this.companyId = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].companyid;
        this.flag = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].flag;
        this.getCouponRedeemUrl = this.baseURL + "report/couponRedemption";
        this.exportUrl = this.baseURL + "file/couponRedemptionNikitchem";
    }
    CouponRedemptionReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.couponRedeemForm = this.fb.group({
            fromDate: [''],
            toDate: [''],
        });
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        this.page = 0;
        this.size = 10000;
        this.fromdate = 0;
        this.todate = 0;
        var obj = {
            "keykjm": this.keykjm,
            // "company": this.companyId,
            "fromDate": 0,
            "page": 0,
            "size": 10000,
            "subclient": "",
            "toDate": 0
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.post(this.getCouponRedeemUrl, obj, options)
            .subscribe(function (data) {
            _this.couponRedeemListData = data.json().data;
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
    CouponRedemptionReportComponent.prototype.usagelist = function (x) {
        var _this = this;
        this.page = 0;
        this.size = 10000;
        if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
            this.fromdate = 0;
        }
        else {
            this.fromdate = Date.parse(x.fromDate);
        }
        if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
            this.todate = 0;
        }
        else {
            this.todate = Date.parse(x.toDate);
        }
        var obj = {
            "keykjm": this.keykjm,
            // "company": this.companyId,
            "fromDate": this.fromdate,
            "page": this.page,
            "size": this.size,
            "subclient": "",
            "toDate": this.todate
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.post(this.getCouponRedeemUrl, obj, options)
            .subscribe(function (data) {
            _this.couponRedeemListData = data.json().data;
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
    CouponRedemptionReportComponent.prototype.exportToExcel = function (x) {
        var _this = this;
        if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
            this.fromdate = 0;
        }
        else {
            this.fromdate = Date.parse(x.fromDate);
        }
        if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
            this.todate = 0;
        }
        else {
            this.todate = Date.parse(x.toDate);
        }
        if (this.fromdate > this.todate) {
            alert("To date should be greater than From date");
        }
        else {
            var obj = {
                "keykjm": this.keykjm,
                "fromDate": this.fromdate,
                "toDate": this.todate,
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
                "Content-Type": "Application/json"
            });
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
            this.http.post(this.exportUrl, obj, options)
                .subscribe(function (data) {
                // {"data":"ConsumerDetails190621144835635.xlsx","status":"success"}
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
        }
    };
    CouponRedemptionReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupon-redemption-report',
            template: __webpack_require__(/*! ./coupon-redemption-report.component.html */ "./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.html"),
            styles: [__webpack_require__(/*! ./coupon-redemption-report.component.css */ "./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.css")],
            providers: [
                { provide: Window, useValue: window }
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Window)),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Window])
    ], CouponRedemptionReportComponent);
    return CouponRedemptionReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/coupon-redemption-report/coupon-redemption-report.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/coupon-redemption-report/coupon-redemption-report.module.ts ***!
  \************************************************************************************/
/*! exports provided: CouponRedemptionReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponRedemptionReportModule", function() { return CouponRedemptionReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coupon_redemption_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-redemption-report-routing.module */ "./src/app/layout/coupon-redemption-report/coupon-redemption-report-routing.module.ts");
/* harmony import */ var _coupon_redemption_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-redemption-report.component */ "./src/app/layout/coupon-redemption-report/coupon-redemption-report.component.ts");
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







var CouponRedemptionReportModule = /** @class */ (function () {
    function CouponRedemptionReportModule() {
    }
    CouponRedemptionReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _coupon_redemption_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["CouponRedemptionReportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_coupon_redemption_report_component__WEBPACK_IMPORTED_MODULE_3__["CouponRedemptionReportComponent"]]
        })
    ], CouponRedemptionReportModule);
    return CouponRedemptionReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=coupon-redemption-report-coupon-redemption-report-module.js.map