(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consumers-list-consumers-list-module"],{

/***/ "./src/app/layout/consumers-list/consumers-list-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/consumers-list/consumers-list-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ConsumersListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersListRoutingModule", function() { return ConsumersListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consumers_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumers-list.component */ "./src/app/layout/consumers-list/consumers-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _consumers_list_component__WEBPACK_IMPORTED_MODULE_2__["ConsumersListComponent"]
    }
];
var ConsumersListRoutingModule = /** @class */ (function () {
    function ConsumersListRoutingModule() {
    }
    ConsumersListRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsumersListRoutingModule);
    return ConsumersListRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/consumers-list/consumers-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/layout/consumers-list/consumers-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".approve{\r\n    border: green solid 6px;\r\nbackground-color: green;\r\n\r\nfont-weight: bold;\r\n\r\nborder-radius: 3px;\r\n\r\ncolor: white;\r\n}\r\n\r\n.pending{\r\n    border: orange solid 6px;\r\nbackground-color: orange;\r\n\r\nfont-weight: bold;\r\n\r\nborder-radius: 3px;\r\n\r\ncolor: white;\r\n}\r\n\r\n.reject{\r\n    border: #ff5c33 solid 6px;\r\n    background-color: #ff5c33;\r\n    \r\n    font-weight: bold;\r\n    \r\n    border-radius: 3px;\r\n    \r\n    color: white;\r\n}\r\n\r\n.incomplete{\r\n    border: gray solid 6px;\r\n    background-color: gray;\r\n    \r\n    font-weight: bold;\r\n    \r\n    border-radius: 3px;\r\n    \r\n    color: white;\r\n}\r\n\r\n.all{\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border-radius: 50px;\r\n    background-color:#46b7f0;\r\n    font-size: 13px;\r\n    border: 1px solid black;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n\r\n.btnpending{\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border-radius: 50px;\r\n    background-color:orange;\r\n    font-size: 13px;\r\n    border: 1px solid black;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n\r\n.btnapprove{\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border-radius: 50px;\r\n    background-color:green;\r\n    font-size: 13px;\r\n    border: 1px solid black;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n\r\n.btnreject{\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border-radius: 50px;\r\n    background-color: #ff5c33;\r\n    font-size: 13px;\r\n    border: 1px solid black;\r\n    font-weight: 500;\r\n    color: black;\r\n}\r\n\r\n.btnincomplete{\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    border-radius: 50px;\r\n    background-color:grey;\r\n    font-size: 13px;\r\n    border: 1px solid black;\r\n    font-weight: 500;\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/layout/consumers-list/consumers-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/consumers-list/consumers-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner>\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>Total Registered Consumers</h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a style=\"cursor: pointer\" routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li class=\"active\">Total Registered Consumers</li>\r\n          </ol>\r\n        </div>\r\n\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel\">\r\n              <div class=\"panel-body\" style=\"margin-top:1.5px;\">\r\n                <form style=\"margin-top:30px;\" [formGroup]=\"GpsLocationForm\"\r\n                  (ngSubmit)=\"searchlist(GpsLocationForm.value)\" class=\"form-horizontal\">\r\n                  <h4 style=\"margin-top: 0;\">Total Customers {{customersCount}}</h4>\r\n                  <br>\r\n                  <div class=\"row\">\r\n\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-7\">\r\n                          <input formControlName=\"mobile\" type=\"text\" placeholder=\"Mobile Number\"\r\n                            (keypress)=\"keyPress($event)\" autocomplete=\"off\" minlength=10 maxlength=10\r\n                            class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px;\">\r\n                        </div>\r\n                        <button type=\"button\" class=\"btn btn-success btn\" (click)=\"mobilesearch(GpsLocationForm.value)\"\r\n                          style=\"background-color:#000000;padding: 7px 25px;\">SEARCH</button>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                      <div class=\"form-group\">\r\n                        <div class=\"col-md-7\">\r\n                          <input formControlName=\"name\" type=\"text\" placeholder=\"Customer Name\" autocomplete=\"off\"\r\n                            class=\"form-control\" id=\"input-help-block\" style=\"margin-left: 15px;\">\r\n                        </div>\r\n                        <button type=\"button\" class=\"btn btn-success btn\"\r\n                          (click)=\"customersearch(GpsLocationForm.value)\"\r\n                          style=\"background-color:#000000;padding: 7px 25px;\">SEARCH</button>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\" style=\"margin-left: -100px\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-md-4 control-label\" style=\"text-align:right;\">Status</label>\r\n                        <span class=\"error col-md-1\" style=\"padding: 0px;\"></span>\r\n                        <div class=\"col-md-7\" style=\"margin-left: 1px\">\r\n                          <select selected formControlName=\"status\" class=\"form-control\">\r\n                            <option value=\"\">\r\n                              <b>-----Select</b>-----</option>\r\n                            <option value=\"1\">Active</option>\r\n                            <option value=\"0\">In Active</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row text-center\">\r\n                      <div class=\"col-md-4\">\r\n                      </div>\r\n                      <div class=\"col-md-4\" style=\"float: right\">\r\n                        <button type=\"submit\" [disabled]=\"!GpsLocationForm.valid\"\r\n                          style=\"background:#856c51;border-radius: 0px\" class=\"btn btn-success btn-rounded\">\r\n                          <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View\r\n                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n                        <button type=\"button\" [disabled]=\"!GpsLocationForm.valid\"\r\n                          (click)=\"exportToExcel(GpsLocationForm.value)\" style=\"background:#856c51;border-radius: 0px\"\r\n                          class=\"btn btn-success btn-rounded\">\r\n                          <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Export\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-2\">\r\n                      <button type=\"submit\" [disabled]=\"!GpsLocationForm.valid\" style=\"background:#856c51;\"\r\n                        class=\"btn btn-success btn-rounded\">\r\n                        <i class=\"fa fa-eye\" aria-hidden=\"true\"></i> View Report\r\n                      </button>\r\n                    </div> -->\r\n\r\n\r\n                    <!-- <div class=\"col-md-2\">\r\n                      <button type=\"button\" [disabled]=\"!GpsLocationForm.valid\"\r\n                        (click)=\"exportToExcel(GpsLocationForm.value)\" class=\"btn btn-success btn\"\r\n                        style=\"background-color:#856c51;float:left;\">\r\n                        <i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>\r\n                        Export</button>\r\n                    </div> -->\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Row -->\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel panel-white\">\r\n              <div style=\"clear:both\"></div>\r\n              <div class=\"panel-body\">\r\n                <!-- <div class=\"col-md-12 text-right\"> -->\r\n                    <div class=\"col-sm-2\" >\r\n                        <button type=\"button\" (click)=\"all(GpsLocationForm.value)\" class=\"all\">\r\n                          All\r\n                        </button>\r\n                      </div> \r\n                      <div class=\"col-sm-2\" >\r\n                        <button type=\"button\" style=\"margin-left: -110px\" (click)=\"pending(GpsLocationForm.value)\" class=\"btnpending\">\r\n                          Pending\r\n                        </button>\r\n                      </div>\r\n                      <div class=\"col-sm-2\" >\r\n                        <button type=\"button\" style=\"margin-left: -188px\" (click)=\"approve(GpsLocationForm.value)\" class=\"btnapprove\">\r\n                          Approved\r\n                        </button>\r\n                      </div>\r\n                      <div class=\"col-sm-2\" >\r\n                        <button type=\"button\" style=\"margin-left: -253px\" (click)=\"reject(GpsLocationForm.value)\" class=\"btnreject\">\r\n                          Rejected\r\n                        </button> \r\n                      </div>\r\n    \r\n                      <div class=\"col-sm-2\" >\r\n                        <button type=\"button\" style=\"margin-left: -325px\" (click)=\"incomplete(GpsLocationForm.value)\" class=\"btnincomplete\">\r\n                          Incomplete\r\n                        </button>\r\n                      </div>\r\n                  <div class=\"col-sm-2\">\r\n                    <button type=\"button\" class=\"btn btn-success btn\" routerLink=\"/consumers-add\"\r\n                      style=\"background-color:#856c51;\"> <i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Add\r\n                      Consumer</button>\r\n                  </div>\r\n                <!-- </div> -->\r\n                <div>&nbsp;</div>\r\n                <div class=\"table-responsive\">\r\n                  <table id=\"example\" class=\"display table\" style=\"width: 100%;\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th style=\"background-color: #856c51;color:white;padding-left: 2%\">Name\r\n\r\n                        </th>\r\n                        <th style=\"width:15%;background-color: #856c51;color:white;padding-left: 2%\">Mobile/Email\r\n\r\n                        </th>\r\n                        <th style=\"width:20%;background-color: #856c51;color:white;padding-left: 2%\">Address\r\n\r\n                        </th>\r\n                        <!-- <th \r\n                          style=\"width:20%;background-color: #856c51;color:white;padding-left: 2%\">Bank Details\r\n\r\n                        </th> -->\r\n                        <th style=\"width:20%;background-color: #856c51;color:white;padding-left: 2%\">KYC Status\r\n\r\n                        </th>\r\n                        <th style=\"width:10%;background-color: #856c51;color:white;padding-left: 2%\">Status\r\n\r\n                        </th>\r\n                        <th style=\"width:20%;background-color: #856c51;color:white;padding-left: 2%\">Ref.Code\r\n\r\n                        </th>\r\n                        <th style=\"background-color: #856c51;color:white;padding-left: 2%\">PAN\r\n\r\n                        </th>\r\n\r\n                        <th style=\"width:15%;background-color: #856c51;color:white;padding-left: 2%\">Created On\r\n                        </th>\r\n                        <th style=\"background-color: #856c51;color:white;padding-left: 2%\">Action\r\n                        </th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr\r\n                        *ngFor=\"let x of getConsumerslist  | paginate: { itemsPerPage: 10, currentPage: p};let i = index\">\r\n                        <td style=\"padding-left: 2%\">{{x.firstName}}</td>\r\n                        <td style=\"padding-left: 2%\">\r\n                          {{x.mobile}}<br> <span *ngIf=\"x.email != null && x.email != ''\">{{x.email}}</span></td>\r\n\r\n                        <td style=\"padding-left: 2%\">\r\n                          <span *ngIf=\"x.address1 != null && x.address1 != ''\">{{x.address1}},<br></span>\r\n                          <span *ngIf=\"x.address2 != null && x.address2 != ''\">{{x.address2}},<br></span>\r\n                          <span *ngIf=\"x.locality != null && x.locality != ''\">{{x.locality}},<br></span>\r\n                          <span *ngIf=\"x.city != null && x.city != ''\">{{x.city}},<br></span>\r\n                          <span *ngIf=\"x.state != null && x.state != ''\">{{x.state}}-<br></span>\r\n                          <span *ngIf=\"x.pincode != null && x.pincode != ''\">{{x.pincode}}.</span>\r\n                        </td>\r\n                        <!-- <td style=\"padding-left: 2%\">\r\n                          <span *ngIf=\"x.bankAccNum != null && x.bankAccNum != ''\">{{x.bankAccNum}}/<br></span>\r\n                          <span *ngIf=\"x.bankName != null && x.bankName != ''\">{{x.bankName}}/<br></span>\r\n                          <span *ngIf=\"x.branch != null && x.branch != ''\">{{x.branch}}/<br></span>\r\n                          <span *ngIf=\"x.ifscCode != null && x.ifscCode != ''\">{{x.ifscCode}}<br></span>\r\n                        </td> -->\r\n                        <td style=\"padding-left: 2%\"><span *ngIf=\"x.kycStatusId==11\"\r\n                            class=\"approve\">{{x.kycStatus}}</span>\r\n                          <span *ngIf=\"x.kycStatusId==12\" class=\"pending\">{{x.kycStatus}}</span>\r\n                          <span *ngIf=\"x.kycStatusId==13\" class=\"reject\">{{x.kycStatus}}</span>\r\n                          <span *ngIf=\"x.kycStatusId==10\" class=\"incomplete\">{{x.kycStatus}}</span>\r\n\r\n\r\n                        </td>\r\n                        <td style=\"padding-left: 2%\">{{x.active}}</td>\r\n                        <td style=\"padding-left: 2%\">{{x.RefferalCode}}</td>\r\n\r\n                        <td style=\"padding-left: 2%\"><span *ngIf=\"x.pan != null && x.pan != ''\">{{x.pan}}</span></td>\r\n                        <td style=\"padding-left: 2%\">{{x.createddate | date:'dd MMM yyyy h:mm a'}}\r\n                        </td>\r\n                        <td>\r\n                          <button type=\"submit\" (click)=\"editConsumer(x.consuemrId)\" class=\"btn btn-success btn-rounded\"\r\n                            style=\"margin-left: 17%; background:#856c51;\">\r\n                            Edit\r\n                          </button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n \r\n                  <div *ngIf=\"! getConsumerslist?.length\" class=\"col-md-12 col-centered text-center\">\r\n                    <b>No Data Found</b>\r\n                  </div>\r\n                  <pagination-controls (pageChange)=\"p = $event;onPaginateChange($event,GpsLocationForm.value)\"\r\n                    class=\"my-pagination\">\r\n                  </pagination-controls>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/layout/consumers-list/consumers-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/consumers-list/consumers-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConsumersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersListComponent", function() { return ConsumersListComponent; });
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





var ConsumersListComponent = /** @class */ (function () {
    function ConsumersListComponent(fb, http, router) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
        this.btoaUsername = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername;
        this.btoaPassword = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword;
        this.excelURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].excelURL;
        this.companyId = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyid;
        // consumersListUrl: string = this.baseURL+"nikit/consumersList";
        // exportUrl: string = this.baseURL+"file/nikitConsumerListExport"
        this.consumersListUrl = "nikit/consumersList";
        this.exportUrl = this.baseURL + "file/nikitConsumerListExport";
    }
    ConsumersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        if (localStorage.getItem('statusFilter') == null) {
            this.kycStatus = 0;
        }
        else {
            this.kycStatus = localStorage.getItem('statusFilter');
        }
        this.GpsLocationForm = this.fb.group({
            mobile: [''],
            status: [''],
            name: ['']
        });
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 1000,
            "status": "",
            "kycStatus": this.kycStatus,
            "mobile": null,
            "name": null,
            "companyId": this.companyId
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.consumersListUrl, obj, options)
            .subscribe(function (data) {
            _this.customersCount = data.json().data.totalConsumerCount;
            _this.totalcount = data.json().data.count;
            _this.getConsumerslist = data.json().data.list;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Invalid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConsumersListComponent.prototype.searchlist = function (x) {
        var _this = this;
        // alert(p)
        // alert(x.phone)
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == null || x.name == undefined || x.name == "") {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        // this.page = 0;
        // this.size = 10000;
        // this.company = this.companyId;
        // this.search = x.phone;
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 100000,
            "status": x.status,
            "kycStatus": 0,
            "mobile": x.mobile,
            "name": x.name,
            "companyId": this.companyId
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.consumersListUrl, obj, options)
            .subscribe(function (data) {
            _this.customersCount = data.json().data.totalConsumerCount;
            _this.getConsumerslist = data.json().data.list;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Invalid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConsumersListComponent.prototype.mobilesearch = function (x) {
        var _this = this;
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == null) {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 100000,
            "mobile": x.mobile,
            "name": x.name,
            "kycStatus": 0,
            "status": x.status,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.consumersListUrl, obj, options)
            .subscribe(function (data) {
            _this.customersCount = data.json().data.totalConsumerCount;
            _this.getConsumerslist = data.json().data.list;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Invalid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConsumersListComponent.prototype.customersearch = function (x) {
        var _this = this;
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == null) {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 100000,
            "mobile": x.mobile,
            "name": x.name,
            "kycStatus": 0,
            "status": x.status,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.consumersListUrl, obj, options)
            .subscribe(function (data) {
            _this.customersCount = data.json().data.totalConsumerCount;
            _this.getConsumerslist = data.json().data.list;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Invalid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConsumersListComponent.prototype.all = function (x) {
        var _this = this;
        this.kycStatus = 0;
        localStorage.setItem('statusFilter', '0');
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == null) {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 100000,
            "mobile": x.mobile,
            "name": x.name,
            "kycStatus": this.kycStatus,
            "status": x.status,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.consumersListUrl, obj, options)
            .subscribe(function (data) {
            _this.customersCount = data.json().data.totalConsumerCount;
            _this.getConsumerslist = data.json().data.list;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Invalid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConsumersListComponent.prototype.pending = function (x) {
        var _this = this;
        this.kycStatus = 12;
        localStorage.setItem('statusFilter', '12');
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == null) {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 100000,
            "mobile": x.mobile,
            "name": x.name,
            "kycStatus": this.kycStatus,
            "status": x.status,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.consumersListUrl, obj, options)
            .subscribe(function (data) {
            _this.customersCount = data.json().data.totalConsumerCount;
            _this.getConsumerslist = data.json().data.list;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Invalid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConsumersListComponent.prototype.approve = function (x) {
        var _this = this;
        this.kycStatus = 11;
        localStorage.setItem('statusFilter', '11');
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == null) {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 100000,
            "mobile": x.mobile,
            "name": x.name,
            "kycStatus": this.kycStatus,
            "status": x.status,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.consumersListUrl, obj, options)
            .subscribe(function (data) {
            _this.customersCount = data.json().data.totalConsumerCount;
            _this.getConsumerslist = data.json().data.list;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Invalid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConsumersListComponent.prototype.reject = function (x) {
        var _this = this;
        this.kycStatus = 13;
        localStorage.setItem('statusFilter', '13');
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == null) {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 100000,
            "mobile": x.mobile,
            "name": x.name,
            "kycStatus": this.kycStatus,
            "status": x.status,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.consumersListUrl, obj, options)
            .subscribe(function (data) {
            _this.customersCount = data.json().data.totalConsumerCount;
            _this.getConsumerslist = data.json().data.list;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Invalid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConsumersListComponent.prototype.incomplete = function (x) {
        var _this = this;
        this.kycStatus = 10;
        localStorage.setItem('statusFilter', '10');
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == null) {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        var obj = {
            "keykjm": this.keykjm,
            "page": 0,
            "size": 100000,
            "mobile": x.mobile,
            "name": x.name,
            "kycStatus": this.kycStatus,
            "status": x.status,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.consumersListUrl, obj, options)
            .subscribe(function (data) {
            _this.customersCount = data.json().data.totalConsumerCount;
            _this.getConsumerslist = data.json().data.list;
            if (data.json().data.error_code == "397") {
                alert("Session Timeout");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "393") {
                alert("Session Timeout or Invalid please try again...");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConsumersListComponent.prototype.exportToExcel = function (x) {
        var _this = this;
        if (x.mobile == null || x.mobile == undefined || x.mobile == "") {
            x.mobile = null;
        }
        else {
            x.mobile = x.mobile;
        }
        if (x.name == "" || x.name == undefined || x.name == null) {
            x.name = null;
        }
        else {
            x.name = x.name;
        }
        if (x.status == "" || x.status == undefined || x.status == "") {
            x.status = null;
        }
        else {
            x.status = x.status;
        }
        var obj = {
            "keykjm": this.keykjm,
            "kycStatus": 0,
            "mobile": x.mobile,
            "name": x.name,
            "status": x.status,
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: headers });
        this.http.post(this.exportUrl, obj, options)
            .subscribe(function (data) {
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
    ConsumersListComponent.prototype.keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ConsumersListComponent.prototype.editConsumer = function (consumerId) {
        localStorage.setItem('consumerId', consumerId);
        this.router.navigate(['/consumers-edit']);
    };
    ConsumersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumers-list',
            template: __webpack_require__(/*! ./consumers-list.component.html */ "./src/app/layout/consumers-list/consumers-list.component.html"),
            styles: [__webpack_require__(/*! ./consumers-list.component.css */ "./src/app/layout/consumers-list/consumers-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ConsumersListComponent);
    return ConsumersListComponent;
}());



/***/ }),

/***/ "./src/app/layout/consumers-list/consumers-list.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/consumers-list/consumers-list.module.ts ***!
  \****************************************************************/
/*! exports provided: ConsumersListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersListModule", function() { return ConsumersListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consumers_list_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumers-list-routing.module */ "./src/app/layout/consumers-list/consumers-list-routing.module.ts");
/* harmony import */ var _consumers_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consumers-list.component */ "./src/app/layout/consumers-list/consumers-list.component.ts");
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







var ConsumersListModule = /** @class */ (function () {
    function ConsumersListModule() {
    }
    ConsumersListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _consumers_list_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsumersListRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_6__["Ng4LoadingSpinnerModule"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            declarations: [_consumers_list_component__WEBPACK_IMPORTED_MODULE_3__["ConsumersListComponent"]]
        })
    ], ConsumersListModule);
    return ConsumersListModule;
}());



/***/ })

}]);
//# sourceMappingURL=consumers-list-consumers-list-module.js.map