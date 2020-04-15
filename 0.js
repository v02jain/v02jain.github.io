(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/app/details/detail.component.html":
/*!***********************************************!*\
  !*** ./src/app/details/detail.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-align\">{{ (country$|async).Country }} {{ (country$|async).CountryCode }}</h3>\r\n<div class=\"row\">\r\n  <div class=\"col\">\r\n    <button type=\"button\" class=\"btn btn-primary\">\r\n      Total Cases <span class=\"badge badge-light\">{{ (country$|async).TotalConfirmed }}</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"col\">\r\n  <button  type=\"button\" class=\"btn btn-primary\">\r\n    Total Deaths <span class=\"badge badge-light\">{{ (country$|async).TotalDeaths }}</span>\r\n  </button>\r\n  </div>\r\n  <div class=\"col\">\r\n  <button  type=\"button\" class=\"btn btn-primary\">\r\n    Total Recovered <span class=\"badge badge-light\">{{ (country$|async).TotalRecovered }}</span>\r\n  </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"text-align\">\r\n  <button routerLink=\"/dashboard\" type=\"button\" class=\"btn btn-info\">Back to dashboard</button>\r\n</div>"

/***/ }),

/***/ "./src/app/details/detail.component.scss":
/*!***********************************************!*\
  !*** ./src/app/details/detail.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/details/detail.component.ts":
/*!*********************************************!*\
  !*** ./src/app/details/detail.component.ts ***!
  \*********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var DetailComponent = /** @class */ (function () {
    function DetailComponent(store) {
        this.store = store;
    }
    DetailComponent.prototype.ngOnInit = function () {
        this.country$ = this.store.select(function (state) { return state.dashboard.countrySelected; });
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/details/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.scss */ "./src/app/details/detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/details/details-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/details/details-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsRoutingModule", function() { return DetailsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.component */ "./src/app/details/detail.component.ts");




var routes = [
    {
        path: '',
        component: _detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"],
    }
];
var DetailsRoutingModule = /** @class */ (function () {
    function DetailsRoutingModule() {
    }
    DetailsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DetailsRoutingModule);
    return DetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsModule", function() { return DetailsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail.component */ "./src/app/details/detail.component.ts");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/details/details-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./src/app/details/reducers/index.ts");







var DetailsModule = /** @class */ (function () {
    function DetailsModule() {
    }
    DetailsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _details_routing_module__WEBPACK_IMPORTED_MODULE_4__["DetailsRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_reducers__WEBPACK_IMPORTED_MODULE_6__["detailsFeatureKey"], _reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"]),
            ],
        })
    ], DetailsModule);
    return DetailsModule;
}());



/***/ }),

/***/ "./src/app/details/reducers/index.ts":
/*!*******************************************!*\
  !*** ./src/app/details/reducers/index.ts ***!
  \*******************************************/
/*! exports provided: detailsFeatureKey, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailsFeatureKey", function() { return detailsFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
var detailsFeatureKey = 'details';
var reducers = {};


/***/ })

}]);
//# sourceMappingURL=0.js.map