(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consumers-redemption-report-consumers-redemption-report-module"],{

/***/ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js":
/*!**************************************************************!*\
  !*** ./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js ***!
  \**************************************************************/
/*! exports provided: FilterPipeModule, FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipeModule", function() { return FilterPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    /**
     * @param {?} value
     * @param {?} key
     * @return {?}
     */
    FilterPipe.isFoundOnWalking = function (value, key) {
        var /** @type {?} */ walker = value;
        var /** @type {?} */ found = false;
        do {
            if (walker.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(walker, key)) {
                found = true;
                break;
            }
        } while (walker = Object.getPrototypeOf(walker));
        return found;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FilterPipe.isNumber = function (value) {
        return !isNaN(parseInt(value, 10)) && isFinite(value);
    };
    /**
     * Checks function's value if type is function otherwise same value
     * @param {?} value
     * @return {?}
     */
    FilterPipe.getValue = function (value) {
        return typeof value === 'function' ? value() : value;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByString = function (filter) {
        if (filter) {
            filter = filter.toLowerCase();
        }
        return function (value) { return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false); };
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByBoolean = function (filter) {
        return function (value) { return Boolean(value) === filter; };
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByObject = function (filter) {
        var _this = this;
        return function (value) {
            for (var /** @type {?} */ key in filter) {
                if (key === '$or') {
                    if (!_this.filterByOr(filter.$or)(FilterPipe.getValue(value))) {
                        return false;
                    }
                    continue;
                }
                if (!value || !FilterPipe.isFoundOnWalking(value, key)) {
                    return false;
                }
                if (!_this.isMatching(filter[key], FilterPipe.getValue(value[key]))) {
                    return false;
                }
            }
            return true;
        };
    };
    /**
     * @param {?} filter
     * @param {?} val
     * @return {?}
     */
    FilterPipe.prototype.isMatching = function (filter, val) {
        switch (typeof filter) {
            case 'boolean':
                return this.filterByBoolean(filter)(val);
            case 'string':
                return this.filterByString(filter)(val);
            case 'object':
                return this.filterByObject(filter)(val);
        }
        return this.filterDefault(filter)(val);
    };
    /**
     * Filter value by $or
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterByOr = function (filter) {
        var _this = this;
        return function (value) {
            var /** @type {?} */ length = filter.length;
            var /** @type {?} */ arrayComparison = function (i) { return value.indexOf(filter[i]) !== -1; };
            var /** @type {?} */ otherComparison = function (i) { return _this.isMatching(filter[i], value); };
            var /** @type {?} */ comparison = Array.isArray(value) ? arrayComparison : otherComparison;
            for (var /** @type {?} */ i = 0; i < length; i++) {
                if (comparison(i)) {
                    return true;
                }
            }
            return false;
        };
    };
    /**
     * Default filterDefault function
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.filterDefault = function (filter) {
        return function (value) { return filter === undefined || filter == value; };
    };
    /**
     * @param {?} array
     * @param {?} filter
     * @return {?}
     */
    FilterPipe.prototype.transform = function (array, filter) {
        if (!array) {
            return array;
        }
        switch (typeof filter) {
            case 'boolean':
                return array.filter(this.filterByBoolean(filter));
            case 'string':
                if (FilterPipe.isNumber(filter)) {
                    return array.filter(this.filterDefault(filter));
                }
                return array.filter(this.filterByString(filter));
            case 'object':
                return array.filter(this.filterByObject(filter));
            case 'function':
                return array.filter(filter);
        }
        return array.filter(this.filterDefault(filter));
    };
    return FilterPipe;
}());
FilterPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filterBy',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/** @nocollapse */
FilterPipe.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FilterPipeModule = /** @class */ (function () {
    function FilterPipeModule() {
    }
    return FilterPipeModule;
}());
FilterPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [FilterPipe],
                providers: [FilterPipe],
                exports: [FilterPipe]
            },] },
];
/** @nocollapse */
FilterPipeModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-filter-pipe.js.map


/***/ }),

/***/ "./src/app/layout/consumers-redemption-report/consumers-redemption-report-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/consumers-redemption-report/consumers-redemption-report-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ConsumersRedemptionReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersRedemptionReportRoutingModule", function() { return ConsumersRedemptionReportRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consumers_redemption_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumers-redemption-report.component */ "./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _consumers_redemption_report_component__WEBPACK_IMPORTED_MODULE_2__["ConsumersRedemptionReportComponent"]
    }
];
var ConsumersRedemptionReportRoutingModule = /** @class */ (function () {
    function ConsumersRedemptionReportRoutingModule() {
    }
    ConsumersRedemptionReportRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsumersRedemptionReportRoutingModule);
    return ConsumersRedemptionReportRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner>\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>Consumer Redemption Report</h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li class=\"active\">Consumer Redemption Report</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel\">\r\n              <div class=\"panel-body\" style=\"margin-top:1.5px;\">\r\n                <form style=\"margin-top:30px;\" [formGroup]=\"couponSearchForm\"\r\n                  (ngSubmit)=\"consumergetRedeemptionList(couponSearchForm.value,0)\" class=\"form-horizontal\">\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-2\"></div>\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">From Date</label>\r\n                        <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span>\r\n                        <div class=\"col-sm-7\">\r\n                          <input type=\"date\" formControlName=\"fromDate\" class=\"form-control\" placeholder=\"YYYY-MM-DD\"\r\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">To Date</label>\r\n                        <span class=\"error col-sm-1\" style=\"padding: 0px;\"></span>\r\n                        <div class=\"col-sm-7\">\r\n                          <input type=\"date\" formControlName=\"toDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\"\r\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-2\"></div>\r\n\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Transaction Type</label>\r\n                        <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\">*</span> -->\r\n                        <div class=\"col-sm-7\" style=\"float: right;\">\r\n                          <select selected formControlName=\"paymentTypeId\" class=\"form-control\">\r\n                            <option value=\"\">\r\n                              <b>-----Select</b>-----</option>\r\n                            <option *ngFor=\"let x of getTransactionData\" value=\"{{x.paymentTypeId}}\"\r\n                              [hidden]=\"x.paymentTypeId == 5 ||x.paymentTypeId == 6 \">{{x.paymentType}}\r\n                            </option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\" style=\"text-align:right;\">Status</label>\r\n                        <!-- <span class=\"error col-sm-1\" style=\"padding: 0px;\">*</span> -->\r\n                        <div class=\"col-sm-7\" style=\"float: right;\">\r\n                          <select selected formControlName=\"status\" class=\"form-control\">\r\n                            <option value=\"\">\r\n                              <b>-----Select</b>-----</option>\r\n                            <option *ngFor=\"let x of getStatus\" value=\"{{x.status}}\">{{x.status}}</option>\r\n\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"row text-center\">\r\n                    <div class=\"col-md-2\"></div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                      <button type=\"submit\" [disabled]=\"!couponSearchForm.valid\" style=\"background:#856c51;\"\r\n                        class=\"btn btn-success btn-rounded\">\r\n                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View Report\r\n                      </button>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\" style=\"width: 280px;\">\r\n                      <button type=\"button\" [disabled]=\"!couponSearchForm.valid\"\r\n                        (click)=\"exportToExcel(couponSearchForm.value)\" class=\"btn btn-success btn\"\r\n                        style=\"background-color:#856c51;\">\r\n                        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n                        Export</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Row -->\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel panel-white\">\r\n              <!-- <div class=\"panel-heading clearfix\" style=\"margin-bottom:20px\">\r\n              </div> -->\r\n              <!-- <form [formGroup]=\"GpsSearchForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\" style=\"margin-left:550px;\">\r\n                    <div class=\"form-group\">\r\n                      <button style=\"float:right;\" type=\"button\" class=\"btn btn-success dropdown-toggle\">\r\n                        <img src=\"assets/images/search.png\" style=\"float:right;height:20px;width:25px\">\r\n                      </button>\r\n                      <input type=\"text\" formControlName=\"search\" (keyup)=\"searchlist(GpsSearchForm.value)\" style=\"width:50%;float:right;display:inline-block;\"\r\n                        class=\"form-control\" placeholder=\"search\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form> -->\r\n              <!-- <div class=\"panel-heading clearfix\" style=\"margin-bottom:20px\">\r\n\r\n              </div> -->\r\n              <div style=\"clear:both\"></div>\r\n              <div class=\"panel-body\">\r\n                <div class=\"table-responsive\">\r\n                  <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n\r\n\r\n                    <thead>\r\n                      <tr>\r\n                        <!-- <th class=\"cursor-pointer\" (click)=\"sort('name')\"\r\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Payment Type\r\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" (click)=\"sort('mobile')\"\r\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Mobile\r\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" (click)=\"sort('locality')\"\r\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Transaction Date\r\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" (click)=\"sort('activityType')\"\r\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Amount\r\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" (click)=\"sort('amount')\"\r\n                          style=\"background-color: #856c51;color:white;padding-left: 2%\">Status\r\n                          <i class=\"fa fa-sort\" aria-hidden=\"true\"></i>\r\n                        </th> -->\r\n\r\n\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Payment Type\r\n\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Name/Mobile\r\n\r\n                        </th>\r\n                        <!-- <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">Mobile\r\n\r\n                        </th> -->\r\n\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Payment Ref.No\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Beneficiary Details\r\n\r\n                        </th>\r\n                        <!-- <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">Payee\r\n                          Acc.No\r\n\r\n                        </th> -->\r\n\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Transaction Date\r\n\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">\r\n                          Comments\r\n\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">Amount\r\n\r\n                        </th>\r\n                        <th class=\"cursor-pointer\" style=\"background-color: #856c51;color:white;padding-left: 2%\">Status\r\n\r\n                        </th>\r\n\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr\r\n                        *ngFor=\"let x of consumerRedeemptionListData  | paginate: { itemsPerPage: 10, currentPage: p, totalItems:countItems };let i = index\">\r\n                        <td style=\"padding-left: 2%\">{{x.paymentType}}</td>\r\n                        <td style=\"padding-left: 2%\">\r\n                          <span *ngIf=\"x.name != null && x.name != ''\">{{x.name}},<br></span>\r\n                          <span *ngIf=\"x.mobile != null && x.mobile != ''\">{{x.mobile}}</span>\r\n\r\n                          </td>\r\n                        <!-- <td style=\"padding-left: 2%\">{{x.mobile}}</td> -->\r\n                        <td style=\"padding-left: 2%\">\r\n                          <span *ngIf=\"x.bankTranRefer != null && x.bankTranRefer != ''\">{{x.bankTranRefer}},<br></span>\r\n                          <span *ngIf=\"x.urtNumber != null && x.urtNumber != ''\">{{x.urtNumber}},<br></span>\r\n                          <span *ngIf=\"x.cmsRefernceNum != null && x.cmsRefernceNum != ''\">{{x.cmsRefernceNum}}</span>\r\n\r\n                        </td>\r\n                        <td style=\"padding-left: 2%\">\r\n                          <span *ngIf=\"x.beneficiaryAccno != null && x.beneficiaryAccno != ''\">{{x.beneficiaryAccno}},<br></span>\r\n                          <span *ngIf=\"x.beneficiaryName != null && x.beneficiaryName != ''\">{{x.beneficiaryName}},<br></span>\r\n                          <span *ngIf=\"x.beneficiaryIfsc != null && x.beneficiaryIfsc != ''\">{{x.beneficiaryIfsc}},<br></span>\r\n                          <span *ngIf=\"x.payeeAccNo != null && x.payeeAccNo != ''\">{{x.payeeAccNo}}</span>\r\n                        </td>\r\n                        <!-- <td style=\"padding-left: 2%\">{{x.payeeAccNo}}</td> -->\r\n                        <td style=\"padding-left: 2%\">{{x.transactionDate | date:'dd MMM yyyy h:mm a'}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.rejectReason}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.amount}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.status}}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n                  <div *ngIf=\"!consumerRedeemptionListData?.length\" class=\"col-md-12 col-centered text-center\">\r\n                    <b>No Data Found</b>\r\n                  </div>\r\n                  <pagination-controls (pageChange)=\"p = $event\"\r\n                    (click)=\"consumergetRedeemptionList(couponSearchForm.value,p)\" class=\"my-pagination\">\r\n                  </pagination-controls>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ConsumersRedemptionReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersRedemptionReportComponent", function() { return ConsumersRedemptionReportComponent; });
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






var ConsumersRedemptionReportComponent = /** @class */ (function () {
    function ConsumersRedemptionReportComponent(fb, http, router, window) {
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
        this.consumerRedeemptionUrl = this.baseURL + "report/consumerRedemption";
        this.statusDropdownUrl = this.baseURL + "report/status";
        this.transactiontypeUrl = this.baseURL + "report/paymentType";
        this.exportUrl = this.baseURL + "file/consumerRedemptionNikitchem";
    }
    ConsumersRedemptionReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.couponSearchForm = this.fb.group({
            status: [''],
            paymentTypeId: [''],
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
            "paymentTypeId": 0,
            "size": 10,
            "status": null,
            "toDate": 0
        };
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
    ConsumersRedemptionReportComponent.prototype.getToday = function () {
        return new Date().toISOString().split('T')[0];
    };
    ConsumersRedemptionReportComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ConsumersRedemptionReportComponent.prototype.consumergetRedeemptionList = function (x, page) {
        var _this = this;
        if (page > 0) {
            page = page - 1;
        }
        else {
            page = page;
        }
        // this.page = 0;
        this.size = 10000;
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
        var obj = {
            "keykjm": this.keykjm,
            // "company": this.companyId,
            "paymentTypeId": +x.paymentTypeId,
            "fromDate": this.fromDate,
            "page": page,
            "size": 10,
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
    ConsumersRedemptionReportComponent.prototype.exportToExcel = function (x) {
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
                "status": x.status
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
    ConsumersRedemptionReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumers-redemption-report',
            template: __webpack_require__(/*! ./consumers-redemption-report.component.html */ "./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.html"),
            styles: [__webpack_require__(/*! ./consumers-redemption-report.component.css */ "./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.css")],
            providers: [
                { provide: Window, useValue: window }
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Window)),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Window])
    ], ConsumersRedemptionReportComponent);
    return ConsumersRedemptionReportComponent;
}());



/***/ }),

/***/ "./src/app/layout/consumers-redemption-report/consumers-redemption-report.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/consumers-redemption-report/consumers-redemption-report.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ConsumersRedemptionReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersRedemptionReportModule", function() { return ConsumersRedemptionReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consumers_redemption_report_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumers-redemption-report-routing.module */ "./src/app/layout/consumers-redemption-report/consumers-redemption-report-routing.module.ts");
/* harmony import */ var _consumers_redemption_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consumers-redemption-report.component */ "./src/app/layout/consumers-redemption-report/consumers-redemption-report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ConsumersRedemptionReportModule = /** @class */ (function () {
    function ConsumersRedemptionReportModule() {
    }
    ConsumersRedemptionReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _consumers_redemption_report_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsumersRedemptionReportRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"],
                //BrowserModule,
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipeModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_consumers_redemption_report_component__WEBPACK_IMPORTED_MODULE_3__["ConsumersRedemptionReportComponent"]]
        })
    ], ConsumersRedemptionReportModule);
    return ConsumersRedemptionReportModule;
}());



/***/ })

}]);
//# sourceMappingURL=consumers-redemption-report-consumers-redemption-report-module.js.map