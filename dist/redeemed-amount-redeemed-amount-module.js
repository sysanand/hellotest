(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redeemed-amount-redeemed-amount-module"],{

/***/ "./src/app/layout/redeemed-amount/redeemed-amount-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/redeemed-amount/redeemed-amount-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: RedeemedAmountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemedAmountRoutingModule", function() { return RedeemedAmountRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _redeemed_amount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redeemed-amount.component */ "./src/app/layout/redeemed-amount/redeemed-amount.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _redeemed_amount_component__WEBPACK_IMPORTED_MODULE_2__["RedeemedAmountComponent"]
    }
];
var RedeemedAmountRoutingModule = /** @class */ (function () {
    function RedeemedAmountRoutingModule() {
    }
    RedeemedAmountRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RedeemedAmountRoutingModule);
    return RedeemedAmountRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/redeemed-amount/redeemed-amount.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/layout/redeemed-amount/redeemed-amount.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/redeemed-amount/redeemed-amount.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/redeemed-amount/redeemed-amount.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\n  <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\n  </ng4-loading-spinner>\n  <div class=\"fix-header fix-sidebar\">\n    <div class=\"page-inner\">\n      <div class=\"page-title\">\n        <h3>Redeemed Amount</h3>\n        <div class=\"page-breadcrumb\">\n          <ol class=\"breadcrumb\">\n            <li>\n              <a routerLink=\"/\">Dashboard</a>\n            </li>\n            <li class=\"active\">Redeemed Amount</li>\n          </ol>\n        </div>\n      </div>\n      <div id=\"main-wrapper\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"panel\">\n              <div class=\"panel-body\" style=\"margin-top:1.5px;\">\n                <h4>Redeemed Amount &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{redeemedAmount | currency: 'INR':'symbol':'1.0-0' }}</h4>\n                <form style=\"margin-top:30px;\" [formGroup]=\"couponSearchForm\"\n                  (ngSubmit)=\"consumergetRedeemptionList(couponSearchForm.value,0)\" class=\"form-horizontal\">\n                  \n                  <div class=\"row\">\n                    <!-- <div class=\"col-md-2\"></div> -->\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-4 control-label\">From Date</label>\n                        <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span> -->\n                        <div class=\"col-sm-7\">\n                          <!-- <input type=\"date\" formControlName=\"fromDate\" class=\"form-control\" placeholder=\"YYYY-MM-DD\"\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"> -->\n                            <input class=\"form-control\" placeholder=\"DD/MM/YYYY\" [bsConfig]=\"datepickerConfig\" formControlName=\"fromDate\" bsDatepicker>\n\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-4 control-label\">To Date</label>\n                        <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span> -->\n                        <div class=\"col-sm-7\">\n                          <!-- <input type=\"date\" formControlName=\"toDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\"\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"> -->\n                            <input class=\"form-control\"   placeholder=\"DD/MM/YYYY\" [bsConfig]=\"datepickerConfig\" formControlName=\"toDate\" bsDatepicker>\n\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-4 control-label\">Payment Type</label>\n                        <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\">*</span> -->\n                        <div class=\"col-sm-7\">\n                          <select selected formControlName=\"paymentTypeId\" class=\"form-control\">\n                            <option value=\"\">\n                              <b>-----Select</b>-----</option>\n                            <option *ngFor=\"let x of getTransactionData\" value=\"{{x.paymentTypeId}}\"\n                              [hidden]=\"x.paymentTypeId == 5 ||x.paymentTypeId == 6 \">{{x.paymentType}}\n                            </option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                      <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"!couponSearchForm.valid\" style=\"background:#856c51;\"\n                          class=\"btn btn-success btn-rounded\">\n                          <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View\n                        </button>&nbsp;&nbsp;\n                        <button type=\"button\" [disabled]=\"!couponSearchForm.valid\"\n                          (click)=\"exportToExcel(couponSearchForm.value)\" class=\"btn btn-success btn\"\n                          style=\"background-color:#856c51;\">\n                          <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n                          Export</button>\n                      </div>\n                    </div>\n\n                  </div>\n\n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <!-- <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Mobile</label> -->\n                        <div class=\"col-md-6\">\n                          <input formControlName=\"consumerMobile\" type=\"text\" placeholder=\"Customer Mobile Number\"\n                            (keypress)=\"keyPress($event)\" autocomplete=\"off\" minlength=10 maxlength=10\n                            class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px\">\n                        </div>\n                        <button type=\"button\" class=\"btn btn-success btn\" (click)=\"consumergetRedeemptionList(couponSearchForm.value,0)\"\n                          style=\"background-color:#000000;padding: 7px 25px;\">SEARCH</button>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                      <div class=\"form-group\">\n                        <!-- <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Mobile</label> -->\n                        <div class=\"col-md-6\">\n                          <input formControlName=\"consumerName\" placeholder=\"Customer Name\" type=\"text\"\n                            autocomplete=\"off\" class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px\">\n                        </div>\n                        <button type=\"button\" class=\"btn btn-success btn\" (click)=\"consumergetRedeemptionList(couponSearchForm.value,0)\"\n                          style=\"background-color:#000000;padding: 7px 25px;\">SEARCH</button>\n                      </div>\n                    </div>\n                  </div>\n \n\n                  <!-- <div class=\"row\">\n                      <div class=\"col-md-2\"></div>\n\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Transaction Type</label>\n                        <div class=\"col-sm-7\" style=\"float: right;\">\n                          <select selected formControlName=\"paymentTypeId\" class=\"form-control\">\n                            <option value=\"\">\n                              <b>-----Select</b>-----</option>\n                            <option *ngFor=\"let x of getTransactionData\" value=\"{{x.paymentTypeId}}\"\n                              [hidden]=\"x.paymentTypeId == 5 ||x.paymentTypeId == 6 \">{{x.paymentType}}\n                            </option>\n                          </select>\n                        </div>\n                      </div>\n                    </div> -->\n                  <!-- <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Status</label>\n                        <div class=\"col-sm-7\" style=\"float: right;\">\n                          <select selected formControlName=\"status\" class=\"form-control\">\n                            <option value=\"\">\n                              <b>-----Select</b>-----</option>\n                            <option *ngFor=\"let x of getStatus\" value=\"{{x.status}}\">{{x.status}}</option>\n\n                          </select>\n                        </div>\n                      </div>\n                    </div> -->\n\n                  <!-- </div> -->\n\n                  <!-- <div class=\"row text-center\">   \n                      <div class=\"col-md-2\"></div>\n                  \n                      <div class=\"col-md-4\">\n                          <button type=\"submit\" [disabled]=\"!couponSearchForm.valid\" style=\"background:#856c51;\"\n                          class=\"btn btn-success btn-rounded\">\n                          <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View Report\n                        </button>\n                      </div>\n\n                    <div class=\"col-md-4\" style=\"width: 280px;\">                       \n                      <button type=\"button\" [disabled]=\"!couponSearchForm.valid\" (click)=\"exportToExcel(couponSearchForm.value)\" class=\"btn btn-success btn\"\n                        style=\"background-color:#856c51;\">\n                        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n                        Export</button>\n                    </div>\n                  </div> -->\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Row -->\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"panel panel-white\">\n              <!-- <div class=\"panel-heading clearfix\" style=\"margin-bottom:20px\">\n              </div> -->\n              <!-- <form [formGroup]=\"GpsSearchForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\" style=\"margin-left:550px;\">\n                    <div class=\"form-group\">\n                      <button style=\"float:right;\" type=\"button\" class=\"btn btn-success dropdown-toggle\">\n                        <img src=\"assets/images/search.png\" style=\"float:right;height:20px;width:25px\">\n                      </button>\n                      <input type=\"text\" formControlName=\"search\" (keyup)=\"searchlist(GpsSearchForm.value)\" style=\"width:50%;float:right;display:inline-block;\"\n                        class=\"form-control\" placeholder=\"search\">\n                    </div>\n                  </div>\n                </div>\n              </form> -->\n              <!-- <div class=\"panel-heading clearfix\" style=\"margin-bottom:20px\">\n\n              </div> -->\n              <div style=\"clear:both\"></div>\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\n\n\n                    <thead>\n                      <tr>\n                        <!-- <th class=\"cursor-pointer\" (click)=\"sort('name')\"\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Payment Type\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                        </th>\n                        <th class=\"cursor-pointer\" (click)=\"sort('mobile')\"\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Mobile\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                        </th>\n                        <th class=\"cursor-pointer\" (click)=\"sort('locality')\"\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Transaction Date\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                        </th>\n                        <th class=\"cursor-pointer\" (click)=\"sort('activityType')\"\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Amount\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                        </th>\n                        <th class=\"cursor-pointer\" (click)=\"sort('amount')\"\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Status\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\n                        </th> -->\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Customer Name\n\n                        </th>\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Customer Mobile\n\n                        </th>\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          City\n\n                        </th>\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Coupon Scanned\n\n                        </th>\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Order Number\n\n                        </th>\n                        <th style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Payment Type\n\n                        </th>\n\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Payment Date\n\n                        </th>\n\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Payment Ref.No\n                        </th>\n\n\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Redeemed Amount\n\n                        </th>\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Redeemed To\n\n                        </th>\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">Status\n\n                        </th>\n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">Wallet Balance\n\n                        </th>\n\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr\n                        *ngFor=\"let x of consumerRedeemptionListData  | paginate: { itemsPerPage: 10, currentPage: p,totalItems:countItems};let i = index\">\n                        <td style=\"padding-left: 2%\">{{x.consumerName}}</td>\n                        <td style=\"padding-left: 2%\">{{x.consumerMobile}}</td>\n                        <td style=\"padding-left: 2%\">{{x.city}}</td>\n                        <td style=\"padding-left: 2%\">{{x.couponScanned}}</td>\n                        <td style=\"padding-left: 2%\">{{x.orderNumber}}</td>\n                        <td style=\"padding-left: 2%\">{{x.paymentType}}</td>\n                        <td style=\"padding-left: 2%\">{{x.paymentDate | date:'dd MMM yyyy h:mm a'}}</td>\n                        <td style=\"padding-left: 2%\">{{x.coupon_redemtion}}</td>\n                        <td style=\"padding-left: 2%\">{{x.amount}}</td>\n                        <td style=\"padding-left: 2%\">{{x.transferTo}}</td>\n                        <td style=\"padding-left: 2%\">{{x.status}}</td>\n                        <td style=\"padding-left: 2%\">{{x.walletBalance}}</td>\n\n\n\n                      </tr>\n                    </tbody>\n                  </table>\n\n                  <div *ngIf=\"!consumerRedeemptionListData?.length\" class=\"col-md-12 col-centered text-center\">\n                    <b>No Data Found</b>\n                  </div>\n                  \n                  <pagination-controls (pageChange)=\"p = $event\"\n                    (click)=\"consumergetRedeemptionList(couponSearchForm.value,p)\" class=\"my-pagination\">\n                  </pagination-controls>\n                  <!-- <pagination-controls (pageChange)=\"p = $event;onPaginateChange($event,couponSearchForm.value,p)\"\n                    class=\"my-pagination\">\n                  </pagination-controls> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/layout/redeemed-amount/redeemed-amount.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/redeemed-amount/redeemed-amount.component.ts ***!
  \*********************************************************************/
/*! exports provided: RedeemedAmountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemedAmountComponent", function() { return RedeemedAmountComponent; });
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






var RedeemedAmountComponent = /** @class */ (function () {
    function RedeemedAmountComponent(fb, http, router, window) {
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
        this.consumerRedeemptionUrl = this.baseURL + "report/couponRedemption";
        this.statusDropdownUrl = this.baseURL + "report/status";
        this.transactiontypeUrl = this.baseURL + "report/paymentType";
        // exportUrl: string=this.baseURL+"file/consumerRedemptionNikitchem";
        this.exportUrl = this.baseURL + "file/couponRedemptionExport";
        this.datepickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            dateInputFormat: 'DD/MM/YYYY',
        });
    }
    RedeemedAmountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.couponSearchForm = this.fb.group({
            status: [''],
            paymentTypeId: [''],
            fromDate: [''],
            toDate: [''],
            consumerName: [''],
            consumerMobile: ['']
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
            "consumerName": null,
            "consumerMobile": null,
            "fromDate": 0,
            "page": 0,
            "paymentType": 0,
            "size": 10,
            "toDate": 0,
            "subclient": ""
        };
        this.http.post(this.consumerRedeemptionUrl, obj, options)
            .subscribe(function (data) {
            _this.countItems = data.json().data.count;
            _this.redeemedAmount = data.json().data.redeemedamount;
            _this.consumerRedeemptionListData = data.json().data.list;
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
    RedeemedAmountComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    RedeemedAmountComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RedeemedAmountComponent.prototype.consumergetRedeemptionList = function (x, page) {
        var _this = this;
        if (page > 0) {
            page = page - 1;
        }
        else {
            page = page;
        }
        // this.size = 10000;
        if (x.consumerName == null || x.consumerName == undefined || x.consumerName == "") {
            x.consumerName = null;
        }
        else {
            x.consumerName = x.consumerName;
        }
        if (x.consumerMobile == null || x.consumerMobile == undefined || x.consumerMobile == "") {
            x.consumerMobile = null;
        }
        else {
            x.consumerMobile = x.consumerMobile;
        }
        if (x.paymentType == "" || x.paymentType == undefined || x.paymentType == "") {
            x.paymentType = 0;
        }
        else {
            x.paymentType = x.paymentType;
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
        var obj = {
            "keykjm": this.keykjm,
            "consumerName": x.consumerName,
            "consumerMobile": x.consumerMobile,
            "fromDate": this.fromDate,
            "page": page,
            "paymentType": +x.paymentTypeId,
            "size": 10,
            "toDate": this.toDate,
            "subclient": ""
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
            alert("To date should be greater than From date");
        }
        this.http.post(this.consumerRedeemptionUrl, obj, options)
            .subscribe(function (data) {
            _this.countItems = data.json().data.count;
            _this.consumerRedeemptionListData = data.json().data.list;
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
    // mobilesearch(x, page) {
    //   if (page > 0) {
    //     page = page - 1
    //   } else {
    //     page = page
    //   }
    //   // this.size = 10000;
    //   if (x.consumerName == null|| x.consumerName == undefined || x.consumerName == "") {
    //     x.consumerName = null;      
    //   }
    //   else {
    //     x.consumerName = x.consumerName;
    //   }
    //   if (x.consumerMobile == null|| x.consumerMobile == undefined || x.consumerMobile == "") {
    //     x.consumerMobile = null;      
    //   }
    //   else {
    //     x.consumerMobile = x.consumerMobile;
    //   }
    //   if (x.paymentTypeId == "" || x.paymentTypeId == undefined || x.paymentTypeId == "") {
    //     x.paymentTypeId = 0;      
    //   }
    //   else {
    //     x.paymentTypeId = x.paymentTypeId;
    //   }
    //   // if (x.status == "" || x.status == undefined || x.status == "") {
    //   //   x.status = null;      
    //   // }
    //   // else {
    //   //   x.status = x.status;
    //   // }
    //   if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == "") {
    //     this.fromDate = 0
    //   }
    //   else {
    //     this.fromDate = Date.parse(x.fromDate)
    //   }
    //   if (x.toDate == "" || x.toDate == undefined || x.toDate == "") {
    //     this.toDate = 0
    //   }
    //   else {
    //     this.toDate = Date.parse(x.toDate)
    //   }
    //   let obj= {
    //     "keykjm":this.keykjm,
    //     "consumerName":x.consumerName,
    //     "consumerMobile":x.consumerMobile,
    //     "fromDate": this.fromDate,
    //     "page": page,
    //     "paymentTypeId": +x.paymentTypeId,
    //     "size": 10,
    //     "toDate": this.toDate,
    //     "subclient":""
    //     }
    //   let headers = new Headers({
    //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
    //     "Content-Type": "Application/json"
    //   });
    //   let options = new RequestOptions({ headers: headers });
    //   if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
    //     alert("To date should be greater than From date")
    //   }
    //   // this.message = "cascas";
    //   this.http.post(this.consumerRedeemptionUrl, obj, options)
    //     .subscribe(data => {
    //       this.countItems = data.json().data.count;
    //       this.consumerRedeemptionListData = data.json().data.list;
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
    // customersearch(x, page) {
    //   if (page > 0) {
    //     page = page - 1
    //   } else {
    //     page = page
    //   }
    //   this.size = 10;
    //   if (x.consumerName == null|| x.consumerName == undefined || x.consumerName == "") {
    //     x.consumerName = null;      
    //   }
    //   else {
    //     x.consumerName = x.consumerName;
    //   }
    //   if (x.consumerMobile == null|| x.consumerMobile == undefined || x.consumerMobile == "") {
    //     x.consumerMobile = null;      
    //   }
    //   else {
    //     x.consumerMobile = x.consumerMobile;
    //   }
    //   if (x.paymentTypeId == "" || x.paymentTypeId == undefined || x.paymentTypeId == "") {
    //     x.paymentTypeId = 0;      
    //   }
    //   else {
    //     x.paymentTypeId = x.paymentTypeId;
    //   }
    //   if (x.status == "" || x.status == undefined || x.status == "") {
    //     x.status = null;      
    //   }
    //   else {
    //     x.status = x.status;
    //   }
    //   if (x.fromDate == "" || x.fromDate == undefined || x.fromDate == "") {
    //     this.fromDate = 0
    //   }
    //   else {
    //     this.fromDate = Date.parse(x.fromDate)
    //   }
    //   if (x.toDate == "" || x.toDate == undefined || x.toDate == "") {
    //     this.toDate = 0
    //   }
    //   else {
    //     this.toDate = Date.parse(x.toDate)
    //   }
    //   let obj= {
    //     "keykjm":this.keykjm,
    //     "consumerName":x.consumerName,
    //     "consumerMobile":x.consumerMobile,
    //     "fromDate": this.fromDate,
    //     "page": page,
    //     "paymentTypeId": +x.paymentTypeId,
    //     "size": 10000,
    //     "toDate": this.toDate,
    //     "subclient":""
    //     }
    //   let headers = new Headers({
    //     "Authorization": "Basic " + btoa(environment.btoaUsername + ":" + environment.btoaPassword),
    //     "Content-Type": "Application/json"
    //   });
    //   let options = new RequestOptions({ headers: headers });
    //   if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
    //     alert("To date should be greater than From date")
    //   }
    //   // this.message = "cascas";
    //   this.http.post(this.consumerRedeemptionUrl, obj, options)
    //     .subscribe(data => {
    //       this.countItems = data.json().data.count;
    //       this.consumerRedeemptionListData = data.json().data.list;
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
    RedeemedAmountComponent.prototype.exportToExcel = function (x) {
        var _this = this;
        if (x.paymentTypeId == "" || x.paymentTypeId == undefined || x.paymentTypeId == "") {
            x.paymentTypeId = 0;
        }
        else {
            x.paymentTypeId = x.paymentTypeId;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
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
                "paymentTypeId": +x.paymentTypeId,
                "fromDate": this.fromDate,
                "toDate": this.toDate,
                // "status": x.status,
                "consumerName": x.consumerName,
                "consumerMobile": x.consumerMobile
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
    RedeemedAmountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redeemed-amount',
            template: __webpack_require__(/*! ./redeemed-amount.component.html */ "./src/app/layout/redeemed-amount/redeemed-amount.component.html"),
            styles: [__webpack_require__(/*! ./redeemed-amount.component.css */ "./src/app/layout/redeemed-amount/redeemed-amount.component.css")],
            providers: [
                { provide: Window, useValue: window }
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Window)),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Window])
    ], RedeemedAmountComponent);
    return RedeemedAmountComponent;
}());



/***/ }),

/***/ "./src/app/layout/redeemed-amount/redeemed-amount.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/redeemed-amount/redeemed-amount.module.ts ***!
  \******************************************************************/
/*! exports provided: RedeemedAmountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemedAmountModule", function() { return RedeemedAmountModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _redeemed_amount_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redeemed-amount-routing.module */ "./src/app/layout/redeemed-amount/redeemed-amount-routing.module.ts");
/* harmony import */ var _redeemed_amount_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redeemed-amount.component */ "./src/app/layout/redeemed-amount/redeemed-amount.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RedeemedAmountModule = /** @class */ (function () {
    function RedeemedAmountModule() {
    }
    RedeemedAmountModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _redeemed_amount_routing_module__WEBPACK_IMPORTED_MODULE_2__["RedeemedAmountRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"],
                //BrowserModule,
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipeModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_8__["BsDatepickerModule"].forRoot()
            ],
            declarations: [_redeemed_amount_component__WEBPACK_IMPORTED_MODULE_3__["RedeemedAmountComponent"]]
        })
    ], RedeemedAmountModule);
    return RedeemedAmountModule;
}());



/***/ })

}]);
//# sourceMappingURL=redeemed-amount-redeemed-amount-module.js.map