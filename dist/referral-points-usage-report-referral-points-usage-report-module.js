(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["referral-points-usage-report-referral-points-usage-report-module"],{

/***/ "./src/app/layout/referral-points-usage-report/referral-points-usage-report-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/referral-points-usage-report/referral-points-usage-report-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReferralPointsUsageReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPointsUsageReportRoutingModule", function() { return ReferralPointsUsageReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _referral_points_usage_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./referral-points-usage-report.component */ "./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _referral_points_usage_report_component__WEBPACK_IMPORTED_MODULE_2__["ReferralPointsUsageReportComponent"]
    }
];
var ReferralPointsUsageReportRoutingModule = /** @class */ (function () {
    function ReferralPointsUsageReportRoutingModule() {
    }
    ReferralPointsUsageReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReferralPointsUsageReportRoutingModule);
    return ReferralPointsUsageReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner>\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>Referral Points Usage Report</h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li class=\"active\">Referral Points Usage Report</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel\">\r\n              <div class=\"panel-body\" style=\"margin-top:1.5px;\">\r\n                <form style=\"margin-top:30px;\" [formGroup]=\"referralSearchForm\"\r\n                  (ngSubmit)=\"consumergetRedeemptionList(referralSearchForm.value)\" class=\"form-horizontal\">\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Mobile</label>\r\n                        <div class=\"col-sm-7\" style=\"float: right;\">\r\n                          <input formControlName=\"mobile\" type=\"text\" (keypress)=\"keyPress($event)\" autocomplete=\"off\"\r\n                            minlength=10 maxlength=10 class=\"form-control\" id=\"input-help-block\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">From Date</label>\r\n                        <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span>\r\n                        <div class=\"col-sm-7\">\r\n                          <input type=\"date\" formControlName=\"fromDate\" class=\"form-control\" placeholder=\"YYYY-MM-DD\"\r\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">To Date</label>\r\n                        <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span>\r\n                        <div class=\"col-sm-7\">\r\n                          <input type=\"date\" formControlName=\"toDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\"\r\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div>&nbsp;</div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6 text-right\">\r\n                      <button type=\"submit\" [disabled]=\"!referralSearchForm.valid\" style=\"background:#856c51;\"\r\n                        class=\"btn btn-success btn-rounded\">\r\n                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View Report\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"col-md-6 text-left\" style=\"width: 200px\">\r\n                      <button type=\"button\" [disabled]=\"!referralSearchForm.valid\"\r\n                        (click)=\"exportToExcel(referralSearchForm.value)\" class=\"btn btn-success btn\"\r\n                        style=\"float:right;background-color:#856c51\">\r\n                        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n                        Export</button>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <!-- <div class=\"row\">                               \r\n                      <div class=\"col-md-4\" style=\"width: 280px;\">\r\n                        <button type=\"button\" [disabled]=\"!GpsLocationForm.valid\" (click)=\"exportToExcel(GpsLocationForm.value)\" class=\"btn btn-success btn\"\r\n                          style=\"background-color:#1560AA;float:right;\">\r\n                          <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n                          Export</button>\r\n                      </div>\r\n                    </div> -->\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Row -->\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel panel-white\">\r\n              <!-- <div class=\"panel-heading clearfix\" style=\"margin-bottom:20px\">\r\n                </div> -->\r\n              <!-- <form [formGroup]=\"GpsSearchForm\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\" style=\"margin-left:550px;\">\r\n                      <div class=\"form-group\">\r\n                        <button style=\"float:right;\" type=\"button\" class=\"btn btn-success dropdown-toggle\">\r\n                          <img src=\"assets/images/search.png\" style=\"float:right;height:20px;width:25px\">\r\n                        </button>\r\n                        <input type=\"text\" formControlName=\"search\" (keyup)=\"searchlist(GpsSearchForm.value)\" style=\"width:50%;float:right;display:inline-block;\"\r\n                          class=\"form-control\" placeholder=\"search\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form> -->\r\n              <!-- <div class=\"panel-heading clearfix\" style=\"margin-bottom:20px\">\r\n  \r\n                </div> -->\r\n              <div style=\"clear:both\"></div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n\r\n\r\n                    <thead>\r\n                      <tr>\r\n                        <!-- <th class=\"cursor-pointer\" (click)=\"sort('name')\"\r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Payment Type\r\n                            <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                          </th>\r\n                          <th class=\"cursor-pointer\" (click)=\"sort('mobile')\"\r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Mobile\r\n                            <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                          </th>\r\n                          <th class=\"cursor-pointer\" (click)=\"sort('locality')\"\r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Transaction Date\r\n                            <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                          </th>\r\n                          <th class=\"cursor-pointer\" (click)=\"sort('activityType')\"\r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Amount\r\n                            <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                          </th>\r\n                          <th class=\"cursor-pointer\" (click)=\"sort('amount')\"\r\n                            style=\"background-color: #856c51;color:white;padding-left: 2%\">Status\r\n                            <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                          </th> -->\r\n\r\n\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Consumer Name\r\n\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Consumer Mobile\r\n\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Referral Ref Code\r\n\r\n                        </th>\r\n                        <!-- <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Platform\r\n\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Location\r\n\r\n                        </th> -->\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Accrued Amount\r\n\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Accrued Date\r\n\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr\r\n                        *ngFor=\"let x of consumerRefferalListData  | paginate: { itemsPerPage: 10, currentPage: p };let i = index\">\r\n                        <td style=\"padding-left: 2%\">{{x.consumerName}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.mobileNo}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.reffralKey}}</td>\r\n                        <!-- <td style=\"padding-left: 2%\">{{x.platform}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.location}}</td> -->\r\n                        <td style=\"padding-left: 2%\">{{x.accruedAmount}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.accurualDate | date:'dd MMM yyyy h:mm a'}}</td>\r\n\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n                  <div *ngIf=\"! consumerRefferalListData?.length\" class=\"col-md-12 col-centered text-center\">\r\n                    <b>No Data Found</b>\r\n                  </div>\r\n                  <pagination-controls (pageChange)=\"p = $event\" autoHide=true class=\"my-pagination\">\r\n                  </pagination-controls>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ReferralPointsUsageReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPointsUsageReportComponent", function() { return ReferralPointsUsageReportComponent; });
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






var ReferralPointsUsageReportComponent = /** @class */ (function () {
    function ReferralPointsUsageReportComponent(fb, http, router, window) {
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
        this.consumerRefferalReportUrl = this.baseURL + "report/RefferalPointsUsageReport";
        this.statusDropdownUrl = this.baseURL + "report/status";
        this.transactiontypeUrl = this.baseURL + "report/paymentType";
        this.exportReportListUrl = this.baseURL + "file/refferalPointsUsageReportExport";
    }
    ReferralPointsUsageReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.referralSearchForm = this.fb.group({
            status: [''],
            mobile: [''],
            fromDate: [''],
            toDate: [''],
        });
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        // 
        this.http.post(this.statusDropdownUrl, { "keykjm": this.keykjm, }, options).subscribe(function (data) {
            _this.statusList = data.json();
            // alert(JSON.stringify(this.getStates))
            _this.getStatus = _this.statusList.data;
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
        var obj = {
            "keykjm": this.keykjm,
            // "company": this.companyId,
            "fromDate": 0,
            "page": 0,
            "mobile": null,
            "size": 10,
            "status": null,
            "toDate": 0
        };
        this.http.post(this.consumerRefferalReportUrl, obj, options)
            .subscribe(function (data) {
            _this.consumerRefferalListData = data.json().data.list;
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
    ReferralPointsUsageReportComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    ReferralPointsUsageReportComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ReferralPointsUsageReportComponent.prototype.consumergetRedeemptionList = function (x) {
        var _this = this;
        this.page = 0;
        this.size = 10000;
        //  alert(x.mobile)
        if (x.mobile == "" || x.mobile == undefined || x.mobile == null || x.mobile == 0) {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.status == "" || x.status == undefined || x.status == null) {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
            this.fromDate = 0;
        }
        else {
            this.fromDate = Date.parse(x.fromDate);
        }
        if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
            this.toDate = 0;
        }
        else {
            this.toDate = Date.parse(x.toDate);
        }
        var obj = {
            "keykjm": this.keykjm,
            // "company": this.companyId,
            "mobile": x.mobile,
            "fromDate": this.fromDate,
            "page": this.page,
            "size": this.size,
            "toDate": this.toDate,
            "status": x.status
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
            alert("To date should be greater than From date");
        }
        // this.message = "cascas";
        this.http.post(this.consumerRefferalReportUrl, obj, options)
            .subscribe(function (data) {
            _this.consumerRefferalListData = data.json().data.list;
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
    ReferralPointsUsageReportComponent.prototype.exportToExcel = function (x) {
        var _this = this;
        if (x.mobile == "" || x.mobile == undefined || x.mobile == null || x.mobile == 0) {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == null) {
            this.fromDate = 0;
        }
        else {
            this.fromDate = Date.parse(x.fromDate);
        }
        if (x.toDate == "" || x.toDate == undefined || x.toDate == null) {
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
                "fromDate": this.fromDate,
                "toDate": this.toDate,
                "mobile": x.mobile,
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
                "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
                "Content-Type": "Application/json"
            });
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
            this.http.post(this.exportReportListUrl, obj, options)
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
    ReferralPointsUsageReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-referral-points-usage-report',
            template: __webpack_require__(/*! ./referral-points-usage-report.component.html */ "./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.html"),
            styles: [__webpack_require__(/*! ./referral-points-usage-report.component.css */ "./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.css")],
            providers: [
                { provide: Window, useValue: window }
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Window)),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Window])
    ], ReferralPointsUsageReportComponent);
    return ReferralPointsUsageReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/referral-points-usage-report/referral-points-usage-report.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/referral-points-usage-report/referral-points-usage-report.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ReferralPointsUsageReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPointsUsageReportModule", function() { return ReferralPointsUsageReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _referral_points_usage_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./referral-points-usage-report-routing.module */ "./src/app/layout/referral-points-usage-report/referral-points-usage-report-routing.module.ts");
/* harmony import */ var _referral_points_usage_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./referral-points-usage-report.component */ "./src/app/layout/referral-points-usage-report/referral-points-usage-report.component.ts");
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







var ReferralPointsUsageReportModule = /** @class */ (function () {
    function ReferralPointsUsageReportModule() {
    }
    ReferralPointsUsageReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _referral_points_usage_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReferralPointsUsageReportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_referral_points_usage_report_component__WEBPACK_IMPORTED_MODULE_3__["ReferralPointsUsageReportComponent"]]
        })
    ], ReferralPointsUsageReportModule);
    return ReferralPointsUsageReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=referral-points-usage-report-referral-points-usage-report-module.js.map