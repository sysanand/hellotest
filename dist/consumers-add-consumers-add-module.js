(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["consumers-add-consumers-add-module"],{

/***/ "./src/app/layout/consumers-add/consumers-add-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/consumers-add/consumers-add-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ConsumersAddRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersAddRoutingModule", function() { return ConsumersAddRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consumers_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumers-add.component */ "./src/app/layout/consumers-add/consumers-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _consumers_add_component__WEBPACK_IMPORTED_MODULE_2__["ConsumersAddComponent"]
    }
];
var ConsumersAddRoutingModule = /** @class */ (function () {
    function ConsumersAddRoutingModule() {
    }
    ConsumersAddRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConsumersAddRoutingModule);
    return ConsumersAddRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/consumers-add/consumers-add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/consumers-add/consumers-add.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/consumers-add/consumers-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/consumers-add/consumers-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <!-- <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\"  [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\"></ng4-loading-spinner> -->\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\" style=\"min-height:1200px !important\">\r\n      <div class=\"page-title\">\r\n        <h3>Add Consumer</h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li>\r\n              <a routerLink=\"/consumers-list\">Consumers</a>\r\n            </li>\r\n            <li class=\"active\">Add Consumer</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel panel-white\">\r\n              <div class=\"panel-body\">\r\n                <form class=\"form-horizontal\" [formGroup]=\"addConsumerForm\"\r\n                  (ngSubmit)=\"addConsumer(addConsumerForm.value)\">\r\n                  <h2 style=\"margin-top: 0;\">Add Consumer</h2>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Name\r\n                      <span class=\"error\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"firstName\" value=\"\" pattern=\"[a-zA-Z][a-zA-Z ]+\" class=\"form-control\"\r\n                        id=\"input-help-block\" class=\"form-control\" maxlength=\"30\" required autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['firstName'].invalid && (addConsumerForm.controls['firstName'].dirty || addConsumerForm.controls['firstName'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['firstName'].errors.required\">\r\n                          Name required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['firstName'].errors.pattern\">Invalid Name</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Email-Id\r\n                      <!-- <span class=\"error\">*</span> -->\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"email\" value=\"\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"\r\n                        class=\"form-control\" id=\"input-help-block\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && addConsumerForm.name.errors }\"\r\n                        autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['email'].invalid && (addConsumerForm.controls['email'].dirty || addConsumerForm.controls['email'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['email'].errors.required\">\r\n                          Email required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['email'].errors.pattern\">Invalid Email ID</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Mobile\r\n                      <span class=\"error\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"mobile\" class=\"form-control\" (keypress)=\"keyPress($event)\" minlength=10\r\n                        maxlength=10 required autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['mobile'].invalid && (addConsumerForm.controls['mobile'].dirty || addConsumerForm.controls['mobile'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['mobile'].errors.required\">\r\n                          Mobile is required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['mobile'].errors.minlength\">Mobile No must be 10 characters\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">State\r\n                      <!-- <span class=\"error\">*</span> -->\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <select formControlName=\"state\" class=\"form-control\" (change)=\"GetCityList(t.value)\" #t>\r\n                        <option value=\"\">Select State</option>\r\n                        <option *ngFor=\"let x of getStates\" value={{x.stateCode}}>{{x.stateName}}</option>\r\n                      </select>\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['state'].invalid && (addConsumerForm.controls['state'].dirty || addConsumerForm.controls['state'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['state'].errors.required\">\r\n                          State required.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">City\r\n                      <!-- <span class=\"error\">*</span> -->\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <select formControlName=\"city\" class=\"form-control\" (change)=\"getDealerTeamList(r.value)\" #r\r\n                        >\r\n                        <option value=\"\">Select City</option>\r\n                        <option *ngFor=\"let x of cityLists\" value={{x.cityCode}}>{{x.cityName}}</option>\r\n                      </select>\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['city'].invalid && (addConsumerForm.controls['city'].dirty || addConsumerForm.controls['city'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['city'].errors.required\">\r\n                          City required.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Address 1\r\n                      <!-- <span class=\"error\">*</span> -->\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"address1\" value=\"\" class=\"form-control\" id=\"input-help-block\" \r\n                        class=\"form-control\" maxlength=40  autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['address1'].invalid && (addConsumerForm.controls['address1'].dirty || addConsumerForm.controls['address1'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['address1'].errors.required\">\r\n                          Address 1 is required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['address1'].errors.maxlength\">Address 1 Maximum 40\r\n                          characters</div>\r\n                        <div *ngIf=\"addConsumerForm.controls['address1'].errors.pattern\">Invalid Address format</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Address 2\r\n                      <!-- <span class=\"error\">*</span> -->\r\n                      <!-- \"^[A-Za-z0-9].+[^\\s]*$\" -->\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"address2\" value=\"\" class=\"form-control\" id=\"input-help-block\" \r\n                        class=\"form-control\" maxlength=40 autocomplete=\"off\">                                         \r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['address2'].invalid && (addConsumerForm.controls['address2'].dirty || addConsumerForm.controls['address2'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['address2'].errors.required\">\r\n                          Address 2 is required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['address2'].errors.maxlength\">Address 2 Maximum 40\r\n                          characters</div>\r\n                        <div *ngIf=\"addConsumerForm.controls['address2'].errors.pattern\">Invalid Address format</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Locality / Area\r\n                      <!-- <span class=\"error\">*</span> -->\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"locality\" value=\"\" class=\"form-control\" id=\"input-help-block\" pattern=\"^[A-Za-z0-9].+[^\\s]*$\"\r\n                        class=\"form-control\" maxlength=40  autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['locality'].invalid && (addConsumerForm.controls['locality'].dirty || addConsumerForm.controls['locality'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['locality'].errors.required\">\r\n                          Locality is required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['locality'].errors.maxlength\">Locality Maximum 40\r\n                          characters</div>\r\n                        <div *ngIf=\"addConsumerForm.controls['locality'].errors.pattern\">Invalid Locality format</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Pincode\r\n                      <!-- <span class=\"error\">*</span> -->\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"pincode\" value=\"\" (keypress)=\"numberOnly($event)\" class=\"form-control\"\r\n                        id=\"input-help-block\" class=\"form-control\" minlength=6 maxlength=6  autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['pincode'].invalid && (addConsumerForm.controls['pincode'].dirty || addConsumerForm.controls['pincode'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['pincode'].errors.required\">\r\n                          Pincode is required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['pincode'].errors.minlength\">Pincode must be 6 characters\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"form-group\"> \r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Account Number\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"bankAccNum\" value=\"\" class=\"form-control\" id=\"input-help-block\"\r\n                        class=\"form-control\" minlength=\"9\" maxlength=\"18\" pattern=\"[0-9]+\" autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['bankAccNum'].invalid && (addConsumerForm.controls['bankAccNum'].dirty || addConsumerForm.controls['bankAccNum'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['bankAccNum'].errors.required\">Account Num is required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['bankAccNum'].errors.minlength\">Account Num Minimum 7\r\n                          characters</div>\r\n                        <div *ngIf=\"addConsumerForm.controls['bankAccNum'].errors.maxlength\">Account Num Minimum 15\r\n                          characters</div>\r\n                        <div *ngIf=\"addConsumerForm.controls['bankAccNum'].errors.pattern\">Invalid Account Num</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">IFSC Code\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"ifscCode\" #ifscCode value=\"\" pattern=\"^[A-Z|a-z]{4}[0][A-Za-z0-9]+$\"\r\n                        class=\"form-control\" id=\"input-help-block\"\r\n                        (input)=\"ifscCode.value=$event.target.value.toUpperCase()\"\r\n                        (keyup.enter)=\"loadBankInfo(ifscode.value)\" (blur)=\"loadBankInfo(ifscCode.value)\" minlength=\"11\"\r\n                        maxlength=\"11\" autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['ifscCode'].invalid && (addConsumerForm.controls['ifscCode'].dirty || addConsumerForm.controls['ifscCode'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['ifscCode'].errors.required\">\r\n                          IFSC Code required.\r\n                        </div>\r\n                        <div\r\n                          *ngIf=\"addConsumerForm.controls['ifscCode'].errors.pattern || addConsumerForm.controls['ifscCode'].errors.minlength\">\r\n                          Invalid IFSC Code</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Bank Name\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"bankName\" value=\"\" id=\"input-help-block\" class=\"form-control\"\r\n                        [(ngModel)]=\"bankdtls.BANK\" autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['bankName'].invalid && (addConsumerForm.controls['bankName'].dirty || addConsumerForm.controls['bankName'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['bankName'].errors.required\">\r\n                          Bank Name is required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['bankName'].errors.maxlength\">Bank Name Maximum 40\r\n                          characters</div>\r\n                        <div *ngIf=\"addConsumerForm.controls['bankName'].errors.pattern\">Invalid Bank Name</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Branch\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"branch\" value=\"\" id=\"input-help-block\" class=\"form-control\"\r\n                        [(ngModel)]=\"bankdtls.BRANCH\" autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['branch'].invalid && (addConsumerForm.controls['branch'].dirty || addConsumerForm.controls['branch'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['branch'].errors.required\">\r\n                          Branch is required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['branch'].errors.maxlength\">Branch Name Maximum 40\r\n                          characters</div>\r\n                        <div *ngIf=\"addConsumerForm.controls['branch'].errors.pattern\">Invalid Branch Name</div>\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">PAN\r\n                      <!-- <span class=\"error\">*</span> -->\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"pan\" value=\"\" pattern=\"^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$\"\r\n                        class=\"form-control\" id=\"input-help-block\" class=\"form-control\" autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['pan'].invalid && (addConsumerForm.controls['pan'].dirty || addConsumerForm.controls['pan'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['pan'].errors.required\">\r\n                          PAN required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['pan'].errors.pattern\">Invalid PAN</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n<!-- \r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Paytm Number\r\n                      <span class=\"error\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input formControlName=\"paytmNum\" class=\"form-control\" (keypress)=\"keyPress($event)\" minlength=10\r\n                        maxlength=10  autocomplete=\"off\">\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['paytmNum'].invalid && (addConsumerForm.controls['paytmNum'].dirty || addConsumerForm.controls['paytmNum'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['paytmNum'].errors.required\">\r\n                          Paytm Number is required.\r\n                        </div>\r\n                        <div *ngIf=\"addConsumerForm.controls['paytmNum'].errors.minlength\">Paytm Number No must be 10\r\n                          characters\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Status\r\n                      <span class=\"error\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <select formControlName=\"active\" class=\"form-control\" required>\r\n                        <option value=\"\">Select Status</option>\r\n                        <option value=1>Active</option>\r\n                        <option value=0>In Active</option>\r\n                      </select>\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['active'].invalid && (addConsumerForm.controls['active'].dirty || addConsumerForm.controls['active'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['active'].errors.required\">\r\n                          Status required.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Document Type\r\n                      <span class=\"error\">*</span>\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <select formControlName=\"documentType\" class=\"form-control\">\r\n                        <option value=\"\">Select Status</option>\r\n                        <option *ngFor=\"let x of getdocument\" value={{x.id}}>{{x.gmName}}</option>\r\n\r\n                      </select>\r\n                      <div\r\n                        *ngIf=\"addConsumerForm.controls['documentType'].invalid && (addConsumerForm.controls['documentType'].dirty || addConsumerForm.controls['documentType'].touched)\"\r\n                        class=\"alert alert-danger\">\r\n                        <div *ngIf=\"addConsumerForm.controls['documentType'].errors.required\">\r\n                          Document Type required.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div> -->\r\n\r\n                  <div class=\"form-group\">\r\n                    <label for=\"input-help-block\" class=\"col-sm-2 control-label\">Document\r\n                      <!-- <span class=\"error\">*</span> -->\r\n                    </label>\r\n                    <div class=\"col-sm-10\">\r\n                      <input type=\"file\" #file multiple  class=\"form-control\"  accept=\"application/pdf, image/*\"> \r\n\r\n                      <!--                       \r\n                        <div\r\n                          *ngIf=\"addConsumerForm.controls['documentType'].invalid && (addConsumerForm.controls['documentType'].dirty || addConsumerForm.controls['documentType'].touched)\"\r\n                          class=\"alert alert-danger\">\r\n                          <div *ngIf=\"addConsumerForm.controls['documentType'].errors.required\">\r\n                            Document Type required.\r\n                          </div>\r\n                        </div> -->\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n                <button [disabled]=\"!addConsumerForm.valid\" type=\"submit\" (click)=\"addConsumer(addConsumerForm.value)\"\r\n                  class=\"btn btn-success btn-rounded\" style=\"margin-left: 17%; background:#856c51;\">\r\n                  Add\r\n                </button>\r\n                <!-- <img ng-if=\"dataLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\t -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/layout/consumers-add/consumers-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/consumers-add/consumers-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: ConsumersAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersAddComponent", function() { return ConsumersAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth */ "./src/app/services/auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ConsumersAddComponent = /** @class */ (function () {
    function ConsumersAddComponent(spinnerService, http, allservice, fb, router) {
        this.spinnerService = spinnerService;
        this.http = http;
        this.allservice = allservice;
        this.fb = fb;
        this.router = router;
        this.currentUser = {};
        this.dealerTypeList = [];
        this.statusList = [];
        this.orgTypeList = [];
        this.assignTeamList = [];
        this.countryList = [];
        this.stateListData = [];
        this.getCity = [];
        this.cityLists = [];
        this.mainDealerList = [];
        this.getDealerTeam = [];
        this.addDealerPost = {};
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
        this.btoaUsername = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername;
        this.btoaPassword = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword;
        this.companyId = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].companyid;
        this.stateBasedCityUrl = "nikit/getCities"; //this.stateId
        this.statesListUrl = "nikit/getStates";
        this.selectedItems = [];
        this.settings = {};
        this.documentDropDwonUrl = "nikit/dropDown";
        this.addConsumerUrl = "nikit/consumerRegister";
    }
    ConsumersAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.statusList = [];
        this.countryList = [];
        this.stateListData = [];
        this.bankdtls = "";
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        // this.allservice.getStatesUrl().subscribe(data => {
        //   this.stateListData = data.data;
        //   // console.log(JSON.stringify(this.stateListData));
        // })
        var obj = {
            "keykjm": this.keykjm
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.statesListUrl, obj, options).subscribe(function (data) {
            _this.statesList = data.json();
            // alert(JSON.stringify(this.getStates))
            _this.getStates = _this.statesList.data;
            // if (data.json().data.error_code == "337") {
            //   this.msg = "Your session time out.Please login again"
            //   this.openSuccessCancelSwal(this.msg);
            //   // alert("Your session time out.Please login again")
            //   this.router.navigate(['/login']);
            // }
            // if (data.json().data.error_code == "336") {
            //   this.msg = "Unauthorized Login or Your session time out.Please login again"
            //   this.openSuccessCancelSwal(this.msg);
            //   // alert("Unauthorized Login or Your session time out.Please login again")
            //   this.router.navigate(['/login']);
            // }
            // console.log(JSON.stringify(this.cityLists));
        });
        var document = {
            "category": "documentType",
            "keykjm": this.keykjm
        };
        this.http.post(this.baseURL + this.documentDropDwonUrl, document, options).subscribe(function (data) {
            _this.dropList = data.json();
            // alert(JSON.stringify(this.getStates))
            _this.getdocument = _this.dropList.data;
            if (data.json().data.error_code == "337") {
                _this.msg = "Your session time out.Please login again";
                _this.openSuccessCancelSwal(_this.msg);
                // alert("Your session time out.Please login again")
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "336") {
                _this.msg = "Unauthorized Login or Your session time out.Please login again";
                _this.openSuccessCancelSwal(_this.msg);
                // alert("Unauthorized Login or Your session time out.Please login again")
                _this.router.navigate(['/login']);
            }
            // console.log(JSON.stringify(this.cityLists));
        });
        this.addConsumerForm = this.fb.group({
            keykjm: this.keykjm,
            firstName: [''],
            email: [''],
            mobile: [''],
            state: [''],
            city: [''],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9][a-zA-Z0-9@#_&--()/.,*"\':; ]+$')])],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9][a-zA-Z0-9@#_&--()/.,*"\':; ]+$')])],
            // address1:[''],
            // address2:[''],
            locality: [''],
            pincode: [''],
            // bankName: [''],
            // bankAccNum: [''],
            // ifscCode: [''],
            // branch: [''],
            // paytmNum: [''],
            pan: [''],
            active: [''],
            // documentType: [''],
            company: this.companyId
        });
    };
    ConsumersAddComponent.prototype.loadBankInfo = function (ifsc) {
        var _this = this;
        this.StrIfsc = ifsc.toString();
        if (ifsc != null || ifsc != undefined || ifsc != "") {
            if (this.StrIfsc.length == 11) {
                this.http.get('https://ifsc.razorpay.com/' + ifsc).subscribe(function (data) {
                    _this.bankdtls = data.json();
                    console.log(_this.bankdtls);
                });
            }
        }
    };
    ConsumersAddComponent.prototype.openSuccessSwal = function (success) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            text: success,
            type: 'success'
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.noop);
        this.router.navigate(['/manage-master-data/colleges']);
    };
    ConsumersAddComponent.prototype.openSuccessCancelSwal = function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            // title: 'Deleted!',
            text: error,
            type: 'error',
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.noop);
    };
    ConsumersAddComponent.prototype.openWariningSwal = function (error) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            // title: 'Deleted!',
            text: error,
            type: 'warning',
        }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.noop);
    };
    ConsumersAddComponent.prototype.GetCityList = function (x) {
        var _this = this;
        //this.spinnerService.show();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        var ipcity = {
            "stateId": x,
            "keykjm": this.keykjm
        };
        this.http.post(this.baseURL + this.stateBasedCityUrl, ipcity, options).subscribe(function (data) {
            _this.getCity = data.json();
            _this.cityLists = _this.getCity.data;
            if (data.json().data.error_code == "337") {
                _this.msg = "Your session time out.Please login again";
                _this.openSuccessCancelSwal(_this.msg);
                // alert("Your session time out.Please login again")
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "336") {
                _this.msg = "Unauthorized Login or Your session time out.Please login again";
                _this.openSuccessCancelSwal(_this.msg);
                // alert("Unauthorized Login or Your session time out.Please login again")
                _this.router.navigate(['/login']);
            }
            // console.log(JSON.stringify(this.cityLists));
        });
    };
    ConsumersAddComponent.prototype.keyPress = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    ConsumersAddComponent.prototype.addConsumer = function (x) {
        var _this = this;
        x.active = +x.active;
        x.city = +x.city;
        x.pincode = +x.pincode;
        // x.documentType = +x.documentType;
        x.company = +x.company;
        x.state = +x.state;
        this.filecount = this.el.nativeElement.files.length;
        var formData = new FormData();
        for (var y = 0; y < this.filecount; y++) {
            formData.append("file", this.el.nativeElement.files[y]);
        }
        formData.append("data", JSON.stringify(x));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["Headers"]({
            "Authorization": "Basic " + btoa(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaUsername + ":" + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].btoaPassword),
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_6__["RequestOptions"]({ headers: headers });
        this.http.post(this.baseURL + this.addConsumerUrl, formData, options)
            .subscribe(function (data) {
            _this.Message = data.json();
            // console.log(JSON.stringify(data.json()));
            if (data.json().data.error_code == "337") {
                _this.msg = "Your session time out.Please login again";
                _this.openSuccessCancelSwal(_this.msg);
                // alert("Your session time out.Please login again")
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "336") {
                _this.msg = "Unauthorized Login or Your session time out.Please login again";
                _this.openSuccessCancelSwal(_this.msg);
                // alert("Unauthorized Login or Your session time out.Please login again")
                _this.router.navigate(['/login']);
            }
            if (_this.Message.status == "success") {
                _this.msg = _this.Message.data.message;
                _this.openSuccessSwal(_this.msg);
                // alert(this.Message.data.message);
                _this.router.navigate(['/consumers-list']);
            }
            else if (_this.Message.status == "error") {
                _this.msg = _this.Message.data.error_message;
                _this.openSuccessCancelSwal(_this.msg);
                // alert(this.Message.data.error_message); 
            }
            // else{
            //   alert("Failed To Add Product!!!");
            // }
        });
    };
    ConsumersAddComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ConsumersAddComponent.prototype, "el", void 0);
    ConsumersAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-consumers-add',
            template: __webpack_require__(/*! ./consumers-add.component.html */ "./src/app/layout/consumers-add/consumers-add.component.html"),
            styles: [__webpack_require__(/*! ./consumers-add.component.css */ "./src/app/layout/consumers-add/consumers-add.component.css")]
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["Http"], src_app_services_auth__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ConsumersAddComponent);
    return ConsumersAddComponent;
}());



/***/ }),

/***/ "./src/app/layout/consumers-add/consumers-add.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/consumers-add/consumers-add.module.ts ***!
  \**************************************************************/
/*! exports provided: ConsumersAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsumersAddModule", function() { return ConsumersAddModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _consumers_add_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consumers-add-routing.module */ "./src/app/layout/consumers-add/consumers-add-routing.module.ts");
/* harmony import */ var _consumers_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consumers-add.component */ "./src/app/layout/consumers-add/consumers-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ConsumersAddModule = /** @class */ (function () {
    function ConsumersAddModule() {
    }
    ConsumersAddModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _consumers_add_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConsumersAddRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_5__["Ng4LoadingSpinnerModule"]
            ],
            declarations: [_consumers_add_component__WEBPACK_IMPORTED_MODULE_3__["ConsumersAddComponent"]]
        })
    ], ConsumersAddModule);
    return ConsumersAddModule;
}());



/***/ })

}]);
//# sourceMappingURL=consumers-add-consumers-add-module.js.map