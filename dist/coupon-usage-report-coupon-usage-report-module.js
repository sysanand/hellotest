(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-usage-report-coupon-usage-report-module"],{

/***/ "./src/app/layout/coupon-usage-report/coupon-usage-report-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/coupon-usage-report/coupon-usage-report-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: CouponUsageReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponUsageReportRoutingModule", function() { return CouponUsageReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _coupon_usage_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-usage-report.component */ "./src/app/layout/coupon-usage-report/coupon-usage-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _coupon_usage_report_component__WEBPACK_IMPORTED_MODULE_2__["CouponUsageReportComponent"]
    }
];
var CouponUsageReportRoutingModule = /** @class */ (function () {
    function CouponUsageReportRoutingModule() {
    }
    CouponUsageReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CouponUsageReportRoutingModule);
    return CouponUsageReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/coupon-usage-report/coupon-usage-report.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/layout/coupon-usage-report/coupon-usage-report.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/coupon-usage-report/coupon-usage-report.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/coupon-usage-report/coupon-usage-report.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner>\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>Scanned Coupon Amount</h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li class=\"active\">Scanned Coupon Amount</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel\">\r\n              <div class=\"panel-body\" style=\"margin-top:1.5px;\">\r\n                <h4>Scanned Coupon Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{totalscannedcoupon | currency: 'INR':'symbol':'1.0-0' }}</h4>\r\n                <form style=\"margin-top:30px;\" [formGroup]=\"scannedCouponForm\"\r\n                  (ngSubmit)=\"scannedCouponList(scannedCouponForm.value,0)\" class=\"form-horizontal\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4\" style=\"margin-left: -25px\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">From Date</label>\r\n                        <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span>\r\n                        <div class=\"col-sm-7\">\r\n                          <!-- <input type=\"date\" formControlName=\"fromDate\" class=\"form-control\" placeholder=\"YYYY-MM-DD\"\r\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"> -->\r\n                            <input class=\"form-control\" placeholder=\"DD/MM/YYYY\" [bsConfig]=\"datepickerConfig\" formControlName=\"fromDate\" bsDatepicker>\r\n                            \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">To Date</label>\r\n                        <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span>\r\n                        <div class=\"col-sm-7\">\r\n                          <!-- <input type=\"date\" formControlName=\"toDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\"\r\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"> -->\r\n                            <input class=\"form-control\"   placeholder=\"DD/MM/YYYY\" [bsConfig]=\"datepickerConfig\" formControlName=\"toDate\" bsDatepicker>\r\n                            \r\n                        </div>\r\n                      </div>  \r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\" style=\"margin-left: 100px\">\r\n                      <button type=\"submit\" [disabled]=\"!scannedCouponForm.valid\" style=\"background:#856c51;\"\r\n                        class=\"btn btn-success btn-rounded\">\r\n                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View\r\n                      </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                      <button type=\"button\" [disabled]=\"!scannedCouponForm.valid\"\r\n                        (click)=\"exportToExcel(scannedCouponForm.value)\" class=\"btn btn-success btn\"\r\n                        style=\"background-color:#856c51;\">\r\n                        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n                        Export</button>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                  </div>\r\n               \r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                      <div class=\"form-group\">\r\n                        <!-- <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Mobile</label> -->\r\n                        <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span> -->\r\n                        <div class=\"col-md-6\">\r\n                          <input formControlName=\"mobile\" type=\"text\" placeholder=\"Mobile Number\"\r\n                            (keypress)=\"keyPress($event)\" autocomplete=\"off\" minlength=10 maxlength=10\r\n                            class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px;\">\r\n                        </div>\r\n                        <button type=\"button\" class=\"btn btn-success btn\" (click)=\"scannedCouponList(scannedCouponForm.value,0)\"\r\n                          style=\"background-color:#000000;padding: 7px 25px;\">SEARCH</button>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\" style=\"margin-left: -190px\">\r\n                      <div class=\"form-group\">\r\n                        <!-- <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Mobile</label> -->\r\n                        <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span> -->\r\n                        <div class=\"col-md-6\">\r\n                          <input formControlName=\"name\" type=\"text\" placeholder=\"Customer Name\"\r\n                            autocomplete=\"off\" class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px;\">\r\n                        </div>\r\n                        <button type=\"button\" class=\"btn btn-success btn\" (click)=\"scannedCouponList(scannedCouponForm.value,0)\"\r\n                          style=\"background-color:#000000;padding: 7px 25px;\">SEARCH</button>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  \r\n                </form> \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Row -->\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel panel-white\">\r\n             \r\n              <div style=\"clear:both\"></div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n                    <thead>\r\n                      <tr>\r\n                       \r\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Customer Name\r\n\r\n                        </th>\r\n                        <th style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Customer Mobile\r\n\r\n                        </th>\r\n                        <th style=\"background-color: #856c51;color:white;padding-left: 2%\">Order\r\n                          Id\r\n\r\n                        </th>\r\n\r\n\r\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">Coupon\r\n                          Code\r\n\r\n                        </th>\r\n                        <th style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Scanned Date\r\n\r\n                        </th>\r\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Coupon Value\r\n\r\n                        </th>\r\n                      </tr>\r\n                    </thead> \r\n                    <tbody>\r\n                      <tr\r\n                        *ngFor=\"let x of scannedCouponAmountlist  | paginate: { itemsPerPage: 10, currentPage: p ,totalItems:countItems};let i = index\">\r\n                        <td style=\"padding-left: 2%\">{{x.consumerName}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.mobile}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.orderId}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.couponCode}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.usedDate | date:'dd MMM yyyy h:mm a'}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.couponValue}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n                  <div *ngIf=\"!scannedCouponAmountlist?.length\" class=\"col-md-12 col-centered text-center\">\r\n                    <b>No Data Found</b>\r\n                  </div>\r\n                  \r\n                  <pagination-controls (pageChange)=\"p = $event\"\r\n                  (click)=\"scannedCouponList(scannedCouponForm.value,p)\" class=\"my-pagination\">\r\n                </pagination-controls> \r\n                <!-- <pagination-controls (pageChange)=\"p = $event;onPaginateChange($event,scannedCouponForm.value,p)\"\r\n                    class=\"my-pagination\">\r\n                  </pagination-controls> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/layout/coupon-usage-report/coupon-usage-report.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/coupon-usage-report/coupon-usage-report.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CouponUsageReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponUsageReportComponent", function() { return CouponUsageReportComponent; });
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





var CouponUsageReportComponent = /** @class */ (function () {
    function CouponUsageReportComponent(fb, http, router, window) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.window = window;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL;
        this.excelURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].excelURL;
        this.btoaUsername = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername;
        this.btoaPassword = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword;
        this.flag = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].flag;
        this.companyId = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].companyid;
        this.scannedCouponAmountUrl = this.baseURL + "nikit/scannedCouponAmountNikit";
        this.exportUrl = this.baseURL + "file/scannedCouponAmountExport";
        this.datepickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            dateInputFormat: 'DD/MM/YYYY',
        });
    }
    CouponUsageReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.scannedCouponForm = this.fb.group({
            fromDate: [''],
            toDate: [''],
            name: [''],
            mobile: ['']
        });
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 10,
            "toDate": 0,
            "fromDate": 0,
            "name": "",
            "mobile": "",
        };
        this.http.post(this.scannedCouponAmountUrl, obj, options)
            .subscribe(function (data) {
            _this.countItems = data.json().data.count;
            _this.totalscannedcoupon = data.json().data.totalScannedCoupon;
            _this.scannedCouponAmountlist = data.json().data.list;
            //alert(JSON.stringify(this.getgpslocationlist));  
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
    CouponUsageReportComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    CouponUsageReportComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CouponUsageReportComponent.prototype.scannedCouponList = function (x, page) {
        var _this = this;
        if (page > 0) {
            page = page - 1;
        }
        else {
            page = page;
        }
        // this.page = 0;
        // this.size = 10000;
        if (x.mobile == "" || x.mobile == undefined || x.mobile == null) {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == "") {
            this.fromDate = 0;
        }
        else {
            this.fromDate = Date.parse(x.fromDate);
        }
        if (x.toDate == "" || x.toDate == undefined || x.toDate == "") {
            this.toDate = 0;
        }
        else {
            this.toDate = Date.parse(x.toDate);
        }
        if (x.name == "" || x.name == undefined || x.name == null) {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        var obj = {
            "keykjm": this.keykjm,
            "fromDate": this.fromDate,
            "page": page,
            "size": 10,
            "toDate": this.toDate,
            "mobile": x.mobile,
            "name": x.name,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
            alert("To date should be greater than From date");
        }
        this.http.post(this.scannedCouponAmountUrl, obj, options)
            .subscribe(function (data) {
            _this.scannedCouponAmountlist = data.json().data.list;
            _this.countItems = data.json().data.count;
            //alert(JSON.stringify(this.getgpslocationlist));  
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
    CouponUsageReportComponent.prototype.exportToExcel = function (x) {
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
        if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == "") {
            this.fromDate = 0;
        }
        else {
            this.fromDate = Date.parse(x.fromDate);
        }
        if (x.toDate == "" || x.toDate == undefined || x.toDate == "") {
            this.toDate = 0;
        }
        else {
            this.toDate = Date.parse(x.toDate);
        }
        if (this.fromDate > this.toDate) {
            alert("To date should be greater than From date");
        }
        else {
            var obj = {
                "keykjm": this.keykjm,
                "mobile": x.mobile,
                "fromDate": this.fromDate,
                "toDate": this.toDate,
                "name": x.name,
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
    CouponUsageReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coupon-usage-report',
            template: __webpack_require__(/*! ./coupon-usage-report.component.html */ "./src/app/layout/coupon-usage-report/coupon-usage-report.component.html"),
            styles: [__webpack_require__(/*! ./coupon-usage-report.component.css */ "./src/app/layout/coupon-usage-report/coupon-usage-report.component.css")],
            providers: [
                { provide: Window, useValue: window }
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Window)),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Window])
    ], CouponUsageReportComponent);
    return CouponUsageReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/coupon-usage-report/coupon-usage-report.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/coupon-usage-report/coupon-usage-report.module.ts ***!
  \**************************************************************************/
/*! exports provided: CouponUsageReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponUsageReportModule", function() { return CouponUsageReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _coupon_usage_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon-usage-report-routing.module */ "./src/app/layout/coupon-usage-report/coupon-usage-report-routing.module.ts");
/* harmony import */ var _coupon_usage_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon-usage-report.component */ "./src/app/layout/coupon-usage-report/coupon-usage-report.component.ts");
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









var CouponUsageReportModule = /** @class */ (function () {
    function CouponUsageReportModule() {
    }
    CouponUsageReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _coupon_usage_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["CouponUsageReportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipeModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_coupon_usage_report_component__WEBPACK_IMPORTED_MODULE_3__["CouponUsageReportComponent"]]
        })
    ], CouponUsageReportModule);
    return CouponUsageReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=coupon-usage-report-coupon-usage-report-module.js.map