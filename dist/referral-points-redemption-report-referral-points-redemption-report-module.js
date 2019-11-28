(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["referral-points-redemption-report-referral-points-redemption-report-module"],{

/***/ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report-routing.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/referral-points-redemption-report/referral-points-redemption-report-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ReferralPointsRedemptionReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPointsRedemptionReportRoutingModule", function() { return ReferralPointsRedemptionReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _referral_points_redemption_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./referral-points-redemption-report.component */ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _referral_points_redemption_report_component__WEBPACK_IMPORTED_MODULE_2__["ReferralPointsRedemptionReportComponent"]
    }
];
var ReferralPointsRedemptionReportRoutingModule = /** @class */ (function () {
    function ReferralPointsRedemptionReportRoutingModule() {
    }
    ReferralPointsRedemptionReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReferralPointsRedemptionReportRoutingModule);
    return ReferralPointsRedemptionReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.css":
/*!**********************************************************************************************************!*\
  !*** ./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.css ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner>\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>Redeemed Amount Through Referral</h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li class=\"active\">Redeemed Amount Through Referral</li>\r\n          </ol>\r\n        </div> \r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        \r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"panel\">\r\n                <div class=\"panel-body\" style=\"margin-top:1.5px;\">\r\n                  <h4>Redeemed Amount Through Referral &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{totalamount | currency: 'INR':'symbol':'1.0-0' }}</h4><br>\r\n\r\n                    <form style=\"margin-top:15px;\" [formGroup]=\"referralSearchForm\"\r\n                    (ngSubmit)=\"usagelist(referralSearchForm.value,0)\">\r\n                  <!-- <div class=\"form-group\"> -->\r\n\r\n                    <div class=\"row\">\r\n\r\n                      <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                          <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Payment Type</label>\r\n                          <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\">*</span> -->\r\n                          <div class=\"col-sm-6\">\r\n                            <select selected formControlName=\"paymentType\" class=\"form-control\">\r\n                              <option value=\"\">\r\n                                <b>-----Select</b>-----</option>\r\n                              <option *ngFor=\"let x of getTransactionData\" value=\"{{x.paymentTypeId}}\"\r\n                                [hidden]=\"x.paymentTypeId == 5 ||x.paymentTypeId == 6 \">{{x.paymentType}}\r\n                              </option>\r\n                            </select>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-md-3\">\r\n                        <div class=\"form-group\" style=\"margin-left: -60px\">\r\n                          <label class=\"col-sm-4 control-label\" style=\"margin-top: 5px;\">From\r\n                            Date</label>\r\n                          <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span> -->\r\n                          <div class=\"col-sm-7\">\r\n                            <!-- <input type=\"date\" formControlName=\"fromDate\" class=\"form-control\" placeholder=\"YYYY-MM-DD\"\r\n                              pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"> -->\r\n                              <input class=\"form-control\" placeholder=\"DD/MM/YYYY\" [bsConfig]=\"datepickerConfig\" formControlName=\"fromDate\" bsDatepicker>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col-md-3\">\r\n                        <div class=\"form-group\" style=\"margin-left: -60px\">\r\n                          <label class=\"col-sm-4 control-label\" style=\"text-align:right;margin-top: 5px;\">To\r\n                            Date</label>\r\n                          <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span> -->\r\n                          <div class=\"col-sm-7\">\r\n                            <!-- <input type=\"date\" formControlName=\"toDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\"\r\n                              pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"> -->\r\n                              <input class=\"form-control\"   placeholder=\"DD/MM/YYYY\" [bsConfig]=\"datepickerConfig\" formControlName=\"toDate\" bsDatepicker>\r\n\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col-sm-2\">\r\n                        <div class=\"form-group\" style=\"margin-left: -30px\">\r\n                          <button type=\"submit\" [disabled]=\"!referralSearchForm.valid\" style=\"background:#856c51;\"\r\n                            class=\"btn btn-success btn-rounded\">\r\n                            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View\r\n                          </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                          <button type=\"button\" [disabled]=\"!referralSearchForm.valid\"\r\n                            (click)=\"exportToExcel(referralSearchForm.value)\" class=\"btn btn-success btn\"\r\n                            style=\"background-color:#856c51;\">\r\n                            <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n                            Export</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <br>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"form-group\" >\r\n                          <!-- <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Mobile</label> -->\r\n                          <div class=\"col-md-6\">\r\n                            <input formControlName=\"mobile\" type=\"text\" placeholder=\"Mobile Number\"\r\n                              (keypress)=\"keyPress($event)\" autocomplete=\"off\" minlength=10 maxlength=10\r\n                              class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px\">\r\n                          </div>\r\n                          <button type=\"button\" class=\"btn btn-success btn\" (click)=\"usagelist(referralSearchForm.value,0)\"\r\n                            style=\"background-color:#000000;padding: 7px 25px;\">SEARCH</button>\r\n                        </div>\r\n                      </div>\r\n  \r\n                      <div class=\"col-md-6\">\r\n                        <div class=\"form-group\" >\r\n                          <!-- <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Mobile</label> -->\r\n                          <div class=\"col-md-6\" style=\"margin-left: -180px;\">\r\n                            <input formControlName=\"name\" type=\"text\" placeholder=\"Customer Name\"\r\n                             autocomplete=\"off\" minlength=10 maxlength=10\r\n                              class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px\">\r\n                          </div>\r\n                          <button type=\"button\" class=\"btn btn-success btn\" (click)=\"usagelist(referralSearchForm.value,0)\"\r\n                            style=\"background-color:#000000;padding: 7px 25px;\">SEARCH</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </form>\r\n                  <!-- </div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Row -->\r\n\r\n          <div class=\"row\"> \r\n            <div class=\"col-md-12\" id=\"bus-journal\" ng-show=\"true\">\r\n              <div class=\"panel panel-white\">\r\n\r\n\r\n                <!-- <div class=\"row\">\r\n                    <div style=\"height: 10px\"></div>\r\n                  <div class=\"col-md-6\" style =\"margin-left:800px;\">\r\n                    <div class=\"form-group\">\r\n                      <button style=\"float:right;background:#1560AA\" type=\"button\" class=\"btn btn-success dropdown-toggle\">\r\n                        <img src=\"assets/images/search.png\" style=\"float:right;height:20px;width:25px\">\r\n                      </button>\r\n                      <input type=\"text\" formControlName=\"search\" (keyup)=\"searchlist(referralSearchForm.value)\" style=\"width:50%;float:right;display:inline-block;\"\r\n                        class=\"form-control\" placeholder=\"search\">\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n\r\n\r\n                <div style=\"clear:both\"></div>\r\n                <div class=\"panel-body\">\r\n                  <div class=\"table-responsive\">\r\n                    <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n\r\n\r\n                      <thead>\r\n                        <tr>\r\n                          <th style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                            Customer Name\r\n\r\n                          </th>\r\n                          <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                            Mobile\r\n\r\n                          </th>\r\n                          <th style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                            Referral Code\r\n\r\n                          </th>\r\n\r\n                          <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                            Payment Type\r\n\r\n                          </th>\r\n                          <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                            Payment Date\r\n\r\n                          </th>\r\n                          <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                            Payment Ref.No\r\n\r\n                          </th>\r\n                          <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                            Amount\r\n\r\n                          </th>\r\n                        </tr>\r\n                      </thead>\r\n\r\n                      <tbody>\r\n                        <tr\r\n                          *ngFor=\"let x of referralRedeemData  | paginate: { itemsPerPage: 10, currentPage: p,totalItems:countItems  };let i = index\">\r\n                          <td style=\"padding-left: 2%\">{{x.consumerName}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.consumerMobile}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.refferalCode}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.paymentType}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.paymentDate | date:'dd MMM yyyy h:mm a'}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.paymentRefNo}}</td>\r\n                          <td style=\"padding-left: 2%\">{{x.amount}}</td>\r\n                        </tr>\r\n                      </tbody>\r\n                    </table>\r\n                    <div *ngIf=\"! referralRedeemData?.length\" class=\"col-md-12 col-centered text-center\">\r\n                      <b>No Data Found</b>\r\n                    </div>\r\n                    <pagination-controls (pageChange)=\"p = $event;onPaginateChange($event,referralSearchForm.value,p)\"\r\n                    class=\"my-pagination\">\r\n                  </pagination-controls>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ReferralPointsRedemptionReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPointsRedemptionReportComponent", function() { return ReferralPointsRedemptionReportComponent; });
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






var ReferralPointsRedemptionReportComponent = /** @class */ (function () {
    function ReferralPointsRedemptionReportComponent(fb, http, router, window) {
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
        this.referralRedemptionUrl = this.baseURL + "report/refferalPointsRedemption";
        this.transactiontypeUrl = this.baseURL + "report/paymentType";
        this.exportUrl = this.baseURL + "file/refferalRedemptionExport";
        this.datepickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            dateInputFormat: 'DD/MM/YYYY',
        });
    }
    ReferralPointsRedemptionReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.referralSearchForm = this.fb.group({
            fromDate: [''],
            toDate: [''],
            paymentType: [''],
            mobile: [''],
            name: ['']
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
            "size": 10,
            "toDate": 0,
            "paymentType": 0,
            "name": null,
            "mobile": null
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.post(this.referralRedemptionUrl, obj, options)
            .subscribe(function (data) {
            _this.referralRedeemData = data.json().data.list;
            _this.countItems = data.json().data.count;
            _this.totalamount = data.json().data.redemptionAmountForReferral;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Inavlid please try again...");
                _this.router.navigate(['/login']);
            }
        });
        this.http.post(this.transactiontypeUrl, { type: 0, "keykjm": this.keykjm, }, options).subscribe(function (data) {
            _this.transactionList = data.json();
            // alert(JSON.stringify(this.getStates))
            _this.getTransactionData = _this.transactionList.data;
            if (data.json().data.error_code == "337") {
                // this.msg = "Your session time out.Please login again"
                // this.openSuccessCancelSwal(this.msg);
                alert("Your session time out.Please login again");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "336") {
                // this.msg = "Unauthorized Login or Your session time out.Please login again"
                // this.openSuccessCancelSwal(this.msg);
                alert("Unauthorized Login or Your session time out.Please login again");
                _this.router.navigate(['/login']);
            }
        });
    };
    ReferralPointsRedemptionReportComponent.prototype.usagelist = function (x, page) {
        var _this = this;
        if (page > 0) {
            page = page - 1;
        }
        else {
            page = page;
        }
        // this.page = 0;
        // this.size = 10000;
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
        if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
            x.paymentType = 0;
        }
        else {
            x.paymentType = x.paymentType;
        }
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == "") {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        var obj = {
            "keykjm": this.keykjm,
            // "company": this.companyId,
            "fromDate": this.fromdate,
            "page": page,
            "size": 10,
            "toDate": this.todate,
            "paymentType": x.paymentType,
            "name": x.name,
            "mobile": x.mobile
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.post(this.referralRedemptionUrl, obj, options)
            .subscribe(function (data) {
            _this.countItems = data.json().data.count;
            _this.referralRedeemData = data.json().data.list;
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
    // mobilesearch(x) {
    //   // this.page = 0;
    //   // this.size = 10000;
    //   if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
    //     this.fromdate = 0
    //   }
    //   else {
    //     this.fromdate = Date.parse(x.fromDate)
    //   }
    //   if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
    //     this.todate = 0
    //   }
    //   else {
    //     this.todate = Date.parse(x.toDate)
    //   }
    //   if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
    //     x.paymentType = 0;      
    //   }
    //   else {
    //     x.paymentType = x.paymentType;
    //   }
    //   if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
    //     x.mobile = null;      
    //   }
    //   else {
    //     x.mobile = x.mobile;
    //   }
    //   if (x.name == "" || x.name == undefined || x.name == "") {
    //     x.name = null;      
    //   }
    //   else {
    //     x.name = x.name;
    //   }
    //   let obj={
    //     "keykjm": this.keykjm,
    //     // "company": this.companyId,
    //     "fromDate": this.fromdate,
    //     "page": 0,
    //     "size": 10000,
    //     "toDate": this.todate,
    //     "paymentType":x.paymentType,
    //     "name":x.name,
    //     "mobile":x.mobile
    //     }
    //   let headers = new Headers({
    //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
    //     "Content-Type": "Application/json"
    //   });
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.post(this.referralRedemptionUrl, obj, options)
    //     .subscribe(data => {
    //       this.referralRedeemData = data.json().data.list;
    //       if (data.json().data.error_code == "397") {
    //         alert("Session Timeout");
    //         this.router.navigate(['/login']);
    //       }
    //       if (data.json().data.error_code == "393") {
    //         alert("Session Timeout or Inavlid please try again...");
    //         this.router.navigate(['/login']);
    //       }
    //     });
    // }
    // customersearch(x){
    //   // this.page = 0;
    //   // this.size = 10000;
    //   if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
    //     this.fromdate = 0
    //   }
    //   else {
    //     this.fromdate = Date.parse(x.fromDate)
    //   }
    //   if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
    //     this.todate = 0
    //   }
    //   else {
    //     this.todate = Date.parse(x.toDate)
    //   }
    //   if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
    //     x.paymentType = 0;      
    //   }
    //   else {
    //     x.paymentType = x.paymentType;
    //   }
    //   if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
    //     x.mobile = null;      
    //   }
    //   else {
    //     x.mobile = x.mobile;
    //   }
    //   if (x.name == "" || x.name == undefined || x.name == "") {
    //     x.name = null;      
    //   }
    //   else {
    //     x.name = x.name;
    //   }
    //   let obj={
    //     "keykjm": this.keykjm,
    //     // "company": this.companyId,
    //     "fromDate": this.fromdate,
    //     "page": 0,
    //     "size": 10000,
    //     "toDate": this.todate,
    //     "paymentType":x.paymentType,
    //     "name":x.name,
    //     "mobile":x.mobile
    //     }
    //   let headers = new Headers({
    //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
    //     "Content-Type": "Application/json"
    //   });
    //   let options = new RequestOptions({ headers: headers });
    //   this.http.post(this.referralRedemptionUrl, obj, options)
    //     .subscribe(data => {
    //       this.referralRedeemData = data.json().data.list;
    //       if (data.json().data.error_code == "397") {
    //         alert("Session Timeout");
    //         this.router.navigate(['/login']);
    //       }
    //       if (data.json().data.error_code == "393") {
    //         alert("Session Timeout or Inavlid please try again...");
    //         this.router.navigate(['/login']);
    //       }
    //     });
    // }
    ReferralPointsRedemptionReportComponent.prototype.exportToExcel = function (x) {
        var _this = this;
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == "") {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
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
        if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
            x.paymentType = 0;
        }
        else {
            x.paymentType = x.paymentType;
        }
        if (this.fromdate > this.todate) {
            alert("To date should be greater than From date");
        }
        else {
            var obj = {
                "keykjm": this.keykjm,
                // "company": this.companyId,
                "fromDate": this.fromdate,
                "toDate": this.todate,
                "paymentType": x.paymentType,
                "name": x.name,
                "mobile": x.mobile
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
    ReferralPointsRedemptionReportComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ReferralPointsRedemptionReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referral-points-redemption-report',
            template: __webpack_require__(/*! ./referral-points-redemption-report.component.html */ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.html"),
            styles: [__webpack_require__(/*! ./referral-points-redemption-report.component.css */ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.css")],
            providers: [
                { provide: Window, useValue: window }
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Window)),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Window])
    ], ReferralPointsRedemptionReportComponent);
    return ReferralPointsRedemptionReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ReferralPointsRedemptionReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPointsRedemptionReportModule", function() { return ReferralPointsRedemptionReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _referral_points_redemption_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./referral-points-redemption-report-routing.module */ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report-routing.module.ts");
/* harmony import */ var _referral_points_redemption_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./referral-points-redemption-report.component */ "./src/app/layout/referral-points-redemption-report/referral-points-redemption-report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ReferralPointsRedemptionReportModule = /** @class */ (function () {
    function ReferralPointsRedemptionReportModule() {
    }
    ReferralPointsRedemptionReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _referral_points_redemption_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReferralPointsRedemptionReportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"],
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipeModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_referral_points_redemption_report_component__WEBPACK_IMPORTED_MODULE_3__["ReferralPointsRedemptionReportComponent"]]
        })
    ], ReferralPointsRedemptionReportModule);
    return ReferralPointsRedemptionReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=referral-points-redemption-report-referral-points-redemption-report-module.js.map