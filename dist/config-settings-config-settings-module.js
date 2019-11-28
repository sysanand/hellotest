(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-settings-config-settings-module"],{

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

/***/ "./src/app/layout/config-settings/config-settings-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/config-settings/config-settings-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: ConfigSettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigSettingsRoutingModule", function() { return ConfigSettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-settings.component */ "./src/app/layout/config-settings/config-settings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _config_settings_component__WEBPACK_IMPORTED_MODULE_2__["ConfigSettingsComponent"]
    }
];
var ConfigSettingsRoutingModule = /** @class */ (function () {
    function ConfigSettingsRoutingModule() {
    }
    ConfigSettingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ConfigSettingsRoutingModule);
    return ConfigSettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/config-settings/config-settings.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/layout/config-settings/config-settings.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/config-settings/config-settings.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/config-settings/config-settings.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"page-content content-wrap\">\r\n  <!-- <ng4-loading-spinner [threshold]=\"2000\" [timeout]=\"4000\" [loadingText]=\"'Please wait...'\" [zIndex]=\"9999\">\r\n  </ng4-loading-spinner> -->\r\n  <div class=\"fix-header fix-sidebar\">\r\n    <div class=\"page-inner\">\r\n      <div class=\"page-title\">\r\n        <h3>Config Settings</h3>\r\n        <div class=\"page-breadcrumb\">\r\n          <ol class=\"breadcrumb\">\r\n            <li>\r\n              <a routerLink=\"/\">Dashboard</a>\r\n            </li>\r\n            <li class=\"active\">Config Settings</li>\r\n          </ol>\r\n        </div>\r\n      </div>\r\n      <div id=\"main-wrapper\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <div class=\"panel panel-white\">\r\n              <div style=\"clear:both\"></div>\r\n              <div class=\"panel-body\">\r\n\r\n                <form style=\"margin-top:30px;\" [formGroup]=\"configForm\"\r\n                  (ngSubmit)=\"updateConfig(configForm.value)\" class=\"form-horizontal\">\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-1\"></div>\r\n                    <div class=\"col-md-8\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\">First Time Min Redemption Threshold</label>\r\n                        <div class=\"col-sm-7\" style=\"float: right;\">\r\n                          <input type=\"text\" formControlName=\"minThreshold\" (keypress)=\"keyPress($event)\" autocomplete=\"off\" minlength=1 maxlength=20\r\n                            class=\"form-control\" id=\"input-help-block\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-1\"></div>\r\n                    <div class=\"col-md-8\">\r\n                      <div class=\"form-group\">\r\n                        <label class=\"col-sm-4 control-label\">Max Redemption threshold Per Month</label>\r\n                        <div class=\"col-sm-7\" style=\"float: right;\">\r\n                          <input type=\"text\" formControlName=\"maxThreshold\" (keypress)=\"keyPress($event)\" autocomplete=\"off\" minlength=1 maxlength=20\r\n                            class=\"form-control\" id=\"input-help-block\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-1\"></div>\r\n                    <div class=\"col-md-8\">\r\n                      <div class=\"form-group text-center\">\r\n                        <div class=\"col-sm-7\" style=\"float: right;\">\r\n                          <button type=\"submit\" [disabled]=\"!configForm.valid\" style=\"background:#856c51;\"\r\n                            class=\"btn btn-success btn-rounded\">\r\n                            Update\r\n                          </button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </form>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "./src/app/layout/config-settings/config-settings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/config-settings/config-settings.component.ts ***!
  \*********************************************************************/
/*! exports provided: ConfigSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigSettingsComponent", function() { return ConfigSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
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






var ConfigSettingsComponent = /** @class */ (function () {
    function ConfigSettingsComponent(fb, http, router, window) {
        this.fb = fb;
        this.http = http;
        this.router = router;
        this.window = window;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURL;
        this.excelURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].excelURL;
        this.btoaUsername = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername;
        this.btoaPassword = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword;
        this.flag = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].flag;
        this.getConfigValuesUrl = this.baseURL + "company/getRedemptnConfig";
        this.updateConfigValuesUrl = this.baseURL + "company/increaseRedemption";
    }
    ConfigSettingsComponent.prototype.ngOnInit = function () {
        this.configForm = this.fb.group({
            maxThreshold: [''],
            minThreshold: ['']
        });
        this.keykjm = JSON.parse(localStorage.getItem("keykjm"));
        this.getConfigData();
    };
    ConfigSettingsComponent.prototype.getConfigData = function () {
        var _this = this;
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.post(this.getConfigValuesUrl, { "keykjm": this.keykjm, }, options).subscribe(function (data) {
            _this.getData = data.json().data;
            _this.configForm.patchValue({
                maxThreshold: _this.getData.maxThreshold,
                minThreshold: _this.getData.minThreshold
            });
            if (data.json().data.error_code == "337") {
                alert("Your session time out.Please login again");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "336") {
                alert("Unauthorized Login or Your session time out.Please login again");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConfigSettingsComponent.prototype.updateConfig = function (x) {
        var _this = this;
        // alert(JSON.stringify((x)))
        if (x.maxThreshold == '') {
            x.maxThreshold = 0;
        }
        else {
            x.maxThreshold = x.maxThreshold;
        }
        if (x.minThreshold == '') {
            x.minThreshold = 0;
        }
        else {
            x.minThreshold = x.minThreshold;
        }
        var obj = {
            "maxThreshold": x.maxThreshold,
            "minThreshold": x.minThreshold,
            "keykjm": this.keykjm
        };
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({
            "Authorization": "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaUsername + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].btoaPassword),
            "Content-Type": "Application/json"
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        this.http.post(this.updateConfigValuesUrl, obj, options).subscribe(function (data) {
            // this.getData = data.json().data;
            // this.configForm.patchValue({
            //   maxThreshold:this.getData.maxThreshold,
            //   minThreshold:this.getData.minThreshold
            // })
            if (data.json().data == "Successfully updated") {
                _this.getConfigData();
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default()({
                    text: "Updated Successfully",
                    type: 'success'
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.noop);
            }
            if (data.json().data.error_code == "337") {
                alert("Your session time out.Please login again");
                _this.router.navigate(['/login']);
            }
            if (data.json().data.error_code == "336") {
                alert("Unauthorized Login or Your session time out.Please login again");
                _this.router.navigate(['/login']);
            }
        });
    };
    ConfigSettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-config-settings',
            template: __webpack_require__(/*! ./config-settings.component.html */ "./src/app/layout/config-settings/config-settings.component.html"),
            styles: [__webpack_require__(/*! ./config-settings.component.css */ "./src/app/layout/config-settings/config-settings.component.css")],
            providers: [
                { provide: Window, useValue: window }
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Window)),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Window])
    ], ConfigSettingsComponent);
    return ConfigSettingsComponent;
}());



/***/ }),

/***/ "./src/app/layout/config-settings/config-settings.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/config-settings/config-settings.module.ts ***!
  \******************************************************************/
/*! exports provided: ConfigSettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigSettingsModule", function() { return ConfigSettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _config_settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config-settings-routing.module */ "./src/app/layout/config-settings/config-settings-routing.module.ts");
/* harmony import */ var _config_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config-settings.component */ "./src/app/layout/config-settings/config-settings.component.ts");
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








var ConfigSettingsModule = /** @class */ (function () {
    function ConfigSettingsModule() {
    }
    ConfigSettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _config_settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigSettingsRoutingModule"],
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
            declarations: [_config_settings_component__WEBPACK_IMPORTED_MODULE_3__["ConfigSettingsComponent"]]
        })
    ], ConfigSettingsModule);
    return ConfigSettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=config-settings-config-settings-module.js.map