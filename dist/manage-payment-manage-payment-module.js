(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-payment-manage-payment-module"],{

/***/ "./src/app/layout/manage-payment/manage-payment-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/manage-payment/manage-payment-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ManagePaymentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePaymentRoutingModule", function() { return ManagePaymentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manage_payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-payment.component */ "./src/app/layout/manage-payment/manage-payment.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _manage_payment_component__WEBPACK_IMPORTED_MODULE_2__["ManagePaymentComponent"]
    }
];
var ManagePaymentRoutingModule = /** @class */ (function () {
    function ManagePaymentRoutingModule() {
    }
    ManagePaymentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ManagePaymentRoutingModule);
    return ManagePaymentRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/manage-payment/manage-payment.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/manage-payment/manage-payment.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/manage-payment/manage-payment.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/manage-payment/manage-payment.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\n  <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\n  </ng4-loading-spinner>\n  <div class=\"fix-header fix-sidebar\">\n    <div class=\"page-inner\">\n      <div class=\"page-title\">\n        <h3>Total Payment Received</h3>\n        <div class=\"page-breadcrumb\">\n          <ol class=\"breadcrumb\">\n            <li>\n              <a routerLink=\"/\">Dashboard</a>\n            </li>\n            <li class=\"active\">Total Payment Received</li>\n          </ol>\n        </div>\n      </div>\n      <div id=\"main-wrapper\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"panel\">\n              <div class=\"panel-body\" style=\"margin-top:1.5px;\">\n                <div class=\"row\">\n                    <h4 style=\"margin-left: 15px\">Payment Received &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{totalpaymentreceived | currency: 'INR':'symbol':'1.0-0' }}</h4>\n                  <!-- <div class=\"col-md-2\" style=\"float: right\">\n                    <button type=\"button\" class=\"btn btn-success btn\" routerLink=\"\" style=\"background-color:#856c51;\">\n                      <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Payment</button>\n                  </div> -->\n                </div>\n                <form style=\"margin-top:30px;\" [formGroup]=\"managepaymentForm\"\n                  (ngSubmit)=\"managepaymentList(managepaymentForm.value,0)\" class=\"form-horizontal\">\n\n                  <div class=\"row\">\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-4 control-label\">From Date</label>\n                        <div class=\"col-sm-7\">\n                          <!-- <input type=\"date\" formControlName=\"fromDate\" class=\"form-control\" placeholder=\"YYYY-MM-DD\"\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"> -->\n                            <input class=\"form-control\" placeholder=\"DD/MM/YYYY\" [bsConfig]=\"datepickerConfig\" formControlName=\"fromDate\" bsDatepicker>\n\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-4 control-label\">To Date</label>\n                        <div class=\"col-sm-7\">\n                          <!-- <input type=\"date\" formControlName=\"toDate\" placeholder=\"YYYY-MM-DD\" class=\"form-control\"\n                            pattern=\"[0-9]{4}-[0-9]{2}-[0-9]{2}\"> -->\n                            <input class=\"form-control\"   placeholder=\"DD/MM/YYYY\" [bsConfig]=\"datepickerConfig\" formControlName=\"toDate\" bsDatepicker>\n\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"form-group\">\n                        <label class=\"col-sm-4 control-label\">Payment Method</label>\n                        <div class=\"col-sm-7\">\n                          <select selected formControlName=\"paymentType\" class=\"form-control\">\n                            <option value=\"\">\n                              <b>-----Select</b>-----</option>\n                            <option *ngFor=\"let x of getTransactionData\" value=\"{{x.paymentTypeId}}\"\n                              [hidden]=\"x.paymentTypeId ==2  ||x.paymentTypeId == 4 || x.paymentTypeId==5 || x.paymentTypeId==6 || x.paymentTypeId==7  \" >{{x.typeDesc}}\n                            </option>\n                          </select>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-sm-2\">\n                      <div class=\"form-group\">\n                        <button type=\"submit\" [disabled]=\"!managepaymentForm.valid\" style=\"background:#856c51;\"\n                          class=\"btn btn-success btn-rounded\">\n                          <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View\n                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n                        <button type=\"button\" [disabled]=\"!managepaymentForm.valid\"\n                          (click)=\"exportToExcel(managepaymentForm.value)\" class=\"btn btn-success btn\"\n                          style=\"background-color:#856c51;\">\n                          <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\n                          Export</button>\n                      </div>\n                    </div>\n\n                  </div>\n                  \n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Row -->\n\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"panel panel-white\">\n              \n              <div style=\"clear:both\"></div>\n              <div class=\"panel-body\">\n                <div class=\"table-responsive\">\n                  <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\n\n\n                    <thead>\n                      <tr>\n                       \n                        <th  style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Transaction Date\n\n                        </th>\n                        <th style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Amount Received\n\n                        </th>\n                        <th style=\"background-color: #856c51;color:white;padding-left: 2%\">\n                          Payment Method \n\n                        </th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr\n                        *ngFor=\"let x of totalPaymentReceivedListData  | paginate: { itemsPerPage: 10, currentPage: p,totalItems:countItems};let i = index\">\n                        <td style=\"padding-left: 2%\">{{x.transactionDate | date:'dd MMM yyyy h:mm a'}}</td>\n                        <td style=\"padding-left: 2%\">{{x.amount}}</td>\n                        <td style=\"padding-left: 2%\">{{x.payment}}</td>\n                        \n                      </tr>\n                    </tbody>\n                  </table>\n\n                  <div *ngIf=\"!totalPaymentReceivedListData?.length\" class=\"col-md-12 col-centered text-center\">\n                    <b>No Data Found</b>\n                  </div>\n                  <pagination-controls (pageChange)=\"p = $event\"\n                    (click)=\"managepaymentList(managepaymentForm.value,p)\" class=\"my-pagination\">\n                  </pagination-controls>\n                  <!-- <pagination-controls (pageChange)=\"p = $event;onPaginateChange($event,managepaymentForm.value,p)\"\n                    class=\"my-pagination\">\n                  </pagination-controls> -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/layout/manage-payment/manage-payment.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/manage-payment/manage-payment.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManagePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePaymentComponent", function() { return ManagePaymentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagePaymentComponent = /** @class */ (function () {
    function ManagePaymentComponent(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseURL;
        this.excelURL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].excelURL;
        this.btoaUsername = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaUsername;
        this.btoaPassword = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaPassword;
        this.flag = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].flag;
        // transactiontypeUrl:string=this.baseURL+"report/paymentType";
        this.transactiontypeUrl = this.baseURL + "base/entity/PaymentType/findAll";
        this.totalPaymentReceivedUrl = this.baseURL + "nikit/totalPaymentReceivedNikitchem";
        this.exportUrl = this.baseURL + "file/nikitPaymentReceivedExport";
        this.datepickerConfig = Object.assign({}, {
            containerClass: 'theme-dark-blue',
            showWeekNumbers: false,
            dateInputFormat: 'DD/MM/YYYY',
        });
    }
    ManagePaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.managepaymentForm = this.fb.group({
            paymentType: [''],
            fromDate: [''],
            toDate: [''],
        });
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        this.http.get(this.transactiontypeUrl, options).subscribe(function (data) {
            _this.transactionList = data.json();
            // alert(JSON.stringify(this.getStates))
            _this.getTransactionData = _this.transactionList.data;
            // alert(JSON.stringify(this.getTransactionData))
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
            "fromDate": 0,
            "page": 0,
            "paymentTypeId": 0,
            "size": 10,
            "toDate": 0
        };
        this.http.post(this.totalPaymentReceivedUrl, obj, options)
            .subscribe(function (data) {
            _this.countItems = data.json().data.count;
            _this.totalpaymentreceived = data.json().data.paymentReceived;
            _this.totalPaymentReceivedListData = data.json().data.businessJournals;
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
    ManagePaymentComponent.prototype.managepaymentList = function (x, page) {
        var _this = this;
        // alert(x.fromDate)
        if (page > 0) {
            page = page - 1;
        }
        else {
            page = page;
        }
        // this.page = 0;
        // this.size = 10000;
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
            "paymentTypeId": +x.paymentType,
            "fromDate": this.fromDate,
            "page": page,
            "size": 10,
            "toDate": this.toDate,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
        if (Date.parse(this.fromDate) > Date.parse(this.toDate)) {
            alert("To date should be greater than From date");
        }
        // this.message = "cascas";
        this.http.post(this.totalPaymentReceivedUrl, obj, options)
            .subscribe(function (data) {
            _this.countItems = data.json().data.count;
            _this.totalpaymentreceived = data.json().data.paymentReceived;
            _this.totalPaymentReceivedListData = data.json().data.businessJournals;
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
    ManagePaymentComponent.prototype.exportToExcel = function (x) {
        var _this = this;
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
        if (this.fromDate > this.toDate) {
            alert("To date should be greater than From date");
        }
        else {
            var obj = {
                "keykjm": this.keykjm,
                "paymentTypeId": +x.paymentType,
                "fromDate": this.fromDate,
                "toDate": this.toDate
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
                "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].btoaPassword),
                "Content-Type": "Application/json"
            });
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: headers });
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
    ManagePaymentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-payment',
            template: __webpack_require__(/*! ./manage-payment.component.html */ "./src/app/layout/manage-payment/manage-payment.component.html"),
            styles: [__webpack_require__(/*! ./manage-payment.component.css */ "./src/app/layout/manage-payment/manage-payment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ManagePaymentComponent);
    return ManagePaymentComponent;
}());



/***/ }),

/***/ "./src/app/layout/manage-payment/manage-payment.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/manage-payment/manage-payment.module.ts ***!
  \****************************************************************/
/*! exports provided: ManagePaymentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePaymentModule", function() { return ManagePaymentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manage_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-payment-routing.module */ "./src/app/layout/manage-payment/manage-payment-routing.module.ts");
/* harmony import */ var _manage_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-payment.component */ "./src/app/layout/manage-payment/manage-payment.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ManagePaymentModule = /** @class */ (function () {
    function ManagePaymentModule() {
    }
    ManagePaymentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _manage_payment_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManagePaymentRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(),
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["FilterPipeModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_manage_payment_component__WEBPACK_IMPORTED_MODULE_3__["ManagePaymentComponent"]]
        })
    ], ManagePaymentModule);
    return ManagePaymentModule;
}());



/***/ })

}]);
//# sourceMappingURL=manage-payment-manage-payment-module.js.map