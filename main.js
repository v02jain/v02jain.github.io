(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<h2>Coronavirus Dashboard</h2>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n  font-size: 40px;\n  margin-bottom: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGNvdmlkLTE5XFxOZ3J4L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tracker-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: 'details',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./details/details.module */ "./src/app/details/details.module.ts")).then(function (m) { return m.DetailsModule; });
                        },
                    },
                    { path: '**', redirectTo: '/' }
                ]),
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_1__["DashboardModule"].forRoot(),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                    maxAge: 25,
                    logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
                }),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_9__["reducers"], {
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true,
                    },
                }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_10__["EffectsModule"].forRoot(),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/actions/dashboard.actions.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/actions/dashboard.actions.ts ***!
  \********************************************************/
/*! exports provided: loadCountries, loadGlobal, selectedCountry, loadedCountryList, failLoadCountries, loadedGlobal, failLoadGlobal, loadedCountryConfirmed, loadedCountryRecovered, loadedCountryDead, failLoadCountryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCountries", function() { return loadCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadGlobal", function() { return loadGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedCountry", function() { return selectedCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedCountryList", function() { return loadedCountryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failLoadCountries", function() { return failLoadCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedGlobal", function() { return loadedGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failLoadGlobal", function() { return failLoadGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedCountryConfirmed", function() { return loadedCountryConfirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedCountryRecovered", function() { return loadedCountryRecovered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadedCountryDead", function() { return loadedCountryDead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failLoadCountryData", function() { return failLoadCountryData; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var loadCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dashboard] Load Countries');
var loadGlobal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dashboard] Load Global Details');
var selectedCountry = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dashboard] Selected Country', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadedCountryList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries API] Countries Loaded Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var failLoadCountries = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries API] Countries Loaded Error');
var loadedGlobal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global API] Global Loaded Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var failLoadGlobal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Global API] Global Loaded Error');
var loadedCountryConfirmed = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries Confirmed API] Countries Confirmed Cases Loaded', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadedCountryRecovered = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries Recovered API] Countries Recovered Cases Loaded', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadedCountryDead = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Countries Dead API] Countries Dead Cases Loaded', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var failLoadCountryData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Selected Country Data API] CountryData Loaded Error');


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n     <div class=\"card text-white bg-primary mb-3\">\r\n       <div class=\"card-header\">Total Cases</div>\r\n       <div class=\"card-body\">\r\n         <p class=\"card-text\">{{ (global$ | async)?.TotalConfirmed }}</p>\r\n       </div>\r\n     </div>\r\n    </div>\r\n     <div class=\"col\">\r\n       <div class=\"card text-white bg-danger mb-3\">\r\n         <div class=\"card-header\">Total Deaths</div>\r\n         <div class=\"card-body\">\r\n           <p class=\"card-text\">{{ (global$ | async)?.TotalDeaths }}</p>\r\n         </div>\r\n       </div>\r\n     </div>\r\n   <div class=\"col\">\r\n     <div class=\"col card text-white bg-success mb-3\">\r\n       <div class=\"card-header\">Total Recovered</div>\r\n       <div class=\"card-body\">\r\n         <p class=\"card-text\">{{ (global$ | async)?.TotalRecovered }}</p>\r\n       </div>\r\n     </div>\r\n   </div>\r\n   </div>\r\n</div>\r\n\r\n\r\n<form class=\"container\" [formGroup]=\"countryForm\">\r\n  <select formControlName=\"country\" class=\"custom-select custom-select-lg mb-3\">\r\n    <option\r\n      *ngFor=\"let country of countryList$ | async\"\r\n      [ngValue]=\"country.CountryCode\"\r\n      >{{ country.Country }} ({{ country.CountryCode }})</option\r\n    >\r\n  </select>\r\n  \r\n</form>\r\n\r\n<div class=\"container\" *ngIf=\"countrySelected\">\r\n  <h3 class=\"text-align\">\r\n    {{ (countrySelectedData$ | async).Country }}-{{\r\n      (countrySelectedData$ | async).CountryCode\r\n    }}\r\n  </h3>\r\n\r\n  <div class=\"alert alert-primary\" role=\"alert\">\r\n    Total Cases - {{ (countrySelectedData$ | async)?.TotalConfirmed }}\r\n  </div>\r\n  <div class=\"alert alert-danger\" role=\"alert\">\r\n    Total Deaths - {{ (countrySelectedData$ | async)?.TotalDeaths }}\r\n  </div>\r\n  <div class=\"alert alert-success\" role=\"alert\">\r\n    Total Recovered - {{ (countrySelectedData$ | async)?.TotalRecovered }}\r\n  </div>\r\n  <div class=\"text-align\">\r\n    <button routerLink=\"/details\" type=\"button\" class=\"btn btn-info\">\r\n      Go to details\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- <h3 class=\"heading\">World Data</h3>\r\n<div class=\"world-map\"></div>\r\n<h3 class=\"heading\">Country Specific</h3>\r\n<div class=\"select\">\r\n  <select id=\"country\"></select>\r\n</div>\r\n<div class=\"country-chart\"></div> -->\r\n<!-- \r\n<br />\r\n<br />\r\n<br />\r\n<br /> -->\r\n<br />\r\n<p class=\"info text-align\">\r\n  The API used is available\r\n  <a\r\n    href=\"https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest\"\r\n    target=\"_blank\"\r\n    >here</a\r\n  >.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stats.service */ "./src/app/dashboard/stats.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions/dashboard.actions */ "./src/app/dashboard/actions/dashboard.actions.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(statService, store) {
        this.statService = statService;
        this.store = store;
        this.global$ = this.store.select(function (state) { return state.dashboard.globaldetails; });
        this.countryList$ = this.store.select(function (state) { return state.dashboard.countryList; });
        this.countrySelectedData$ = this.store.select(function (state) { return state.dashboard.countrySelected; });
        this.countrySelected = false;
        this.countrySlectedCode = 'IN';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.global$.subscribe(function (val) {
            if (!val) {
                _this.store.dispatch(Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_4__["loadGlobal"])());
            }
        });
        this.countryList$.subscribe(function (val) {
            if (!val) {
                _this.store.dispatch(Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_4__["loadCountries"])());
            }
        });
        this.countrySelectedData$.subscribe(function (val) {
            if (val) {
                _this.countrySelected = true;
                _this.countrySlectedCode = val.CountryCode;
            }
        });
        this.countryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.countrySlectedCode),
        });
        this.getStations(this.countryForm.controls.country.value);
        this.countryForm.controls.country.valueChanges.subscribe(function (val) {
            _this.getStations(val);
        });
    };
    DashboardComponent.prototype.getStations = function (stationCode) {
        var _this = this;
        this.statService
            .countryByCountryCode(stationCode)
            .subscribe(function (countryStats) {
            _this.store.dispatch(Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_4__["selectedCountry"])({ countrySelected: countryStats }));
            _this.countrySelected = true;
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_stats_service__WEBPACK_IMPORTED_MODULE_1__["StatsService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers */ "./src/app/dashboard/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _effects_dashboard_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects/dashboard.effects */ "./src/app/dashboard/effects/dashboard.effects.ts");











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule_1 = DashboardModule;
    DashboardModule.forRoot = function () {
        return {
            ngModule: DashboardModule_1,
            providers: []
        };
    };
    var DashboardModule_1;
    DashboardModule = DashboardModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
                    },
                ]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature(_reducers__WEBPACK_IMPORTED_MODULE_8__["dashboardFeatureKey"], _reducers__WEBPACK_IMPORTED_MODULE_8__["reducer"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_effects_dashboard_effects__WEBPACK_IMPORTED_MODULE_10__["DashboardEffects"]])
            ],
            exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/effects/dashboard.effects.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/effects/dashboard.effects.ts ***!
  \********************************************************/
/*! exports provided: DashboardEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardEffects", function() { return DashboardEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/dashboard.actions */ "./src/app/dashboard/actions/dashboard.actions.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _stats_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stats.service */ "./src/app/dashboard/stats.service.ts");








var DashboardEffects = /** @class */ (function () {
    function DashboardEffects(actions$, statsService) {
        var _this = this;
        this.actions$ = actions$;
        this.statsService = statsService;
        this.loadCountries$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["loadCountries"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
                return _this.statsService.getCountriesList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (countries) { return Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["loadedCountryList"])({ countryList: countries }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["failLoadCountries"])()); }));
            }));
        });
        this.getGlobalDetails$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["loadGlobal"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () {
                return _this.statsService.getGlobalDetail().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (details) { return Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["loadedGlobal"])({ globaldetails: details }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["failLoadGlobal"])()); }));
            }));
        });
        this.getCountrySelectedConfirmedDetails$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["selectedCountry"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) {
                return _this.statsService.getConfirmedByCountry(action.countrySelected.CountryCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (confirmed) {
                    return Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["loadedCountryConfirmed"])({ confirmedList: confirmed });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["failLoadCountryData"])()); }));
            }));
        });
        this.getCountrySelectedRecoveredDetails$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["selectedCountry"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) {
                return _this.statsService.getRecoveredByCountry(action.countrySelected.CountryCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (recovered) {
                    return Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["loadedCountryRecovered"])({ recoveredList: recovered });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["failLoadCountryData"])()); }));
            }));
        });
        this.getCountrySelectedDeadDetails$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["selectedCountry"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (action) {
                return _this.statsService.getDeadByCountry(action.countrySelected.CountryCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (dead) {
                    return Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["loadedCountryDead"])({ deadList: dead });
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(Object(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_1__["failLoadCountryData"])()); }));
            }));
        });
    }
    DashboardEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"], _stats_service__WEBPACK_IMPORTED_MODULE_6__["StatsService"]])
    ], DashboardEffects);
    return DashboardEffects;
}());



/***/ }),

/***/ "./src/app/dashboard/reducers/index.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/reducers/index.ts ***!
  \*********************************************/
/*! exports provided: dashboardFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardFeatureKey", function() { return dashboardFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/dashboard.actions */ "./src/app/dashboard/actions/dashboard.actions.ts");



var dashboardFeatureKey = "dashboard";
var initialState = {
    countryList: null,
    countrySelected: null,
    globaldetails: null,
    countryConfirmedData: null,
    countryRecoveredData: null,
    countryDeadData: null
};
var dashboardReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadedCountryList"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { countryList: action.countryList })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["selectedCountry"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { countrySelected: action.countrySelected })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadedGlobal"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { globaldetails: action.globaldetails })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadedCountryConfirmed"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { countryConfirmedData: action.confirmedList })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadedCountryRecovered"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { countryRecoveredData: action.recoveredList })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_dashboard_actions__WEBPACK_IMPORTED_MODULE_2__["loadedCountryDead"], function (state, action) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { countryDeadData: action.deadList })); }));
function reducer(state, action) {
    return dashboardReducer(state, action);
}


/***/ }),

/***/ "./src/app/dashboard/stats.service.ts":
/*!********************************************!*\
  !*** ./src/app/dashboard/stats.service.ts ***!
  \********************************************/
/*! exports provided: StatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsService", function() { return StatsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var StatsService = /** @class */ (function () {
    function StatsService(http) {
        this.http = http;
        this.configUrl = 'https://api.covid19api.com/summary';
    }
    StatsService.prototype.getConfig = function () {
        return this.http.get(this.configUrl);
    };
    // private getCountryDataConfig(country) {
    //   const countryDataUrl = "https://api.covid19api.com/country/"+country+"/status/confirmed/live";
    //   return this.http.get(countryDataUrl);
    // }
    StatsService.prototype.getGlobalDetail = function () {
        return this.getConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.Global; }));
    };
    StatsService.prototype.getCountriesList = function () {
        return this.getConfig().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data
                ? data.Countries.map(function (countryData) { return countryData; })
                : [];
        }));
    };
    StatsService.prototype.countryByCountryCode = function (countryCode) {
        return this.getCountriesList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (countries) {
            return countries.find(function (country) {
                return country.CountryCode === countryCode;
            });
        }));
    };
    StatsService.prototype.getConfirmedByCountry = function (countryCode) {
        return this.http.get('https://api.covid19api.com/country/' +
            countryCode +
            '/status/confirmed/live');
    };
    StatsService.prototype.getDeadByCountry = function (countryCode) {
        return this.http.get('https://api.covid19api.com/country/' +
            countryCode +
            '/status/deaths/live');
    };
    StatsService.prototype.getRecoveredByCountry = function (countryCode) {
        return this.http.get('https://api.covid19api.com/country/' +
            countryCode +
            '/status/recovered/live');
    };
    StatsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StatsService);
    return StatsService;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: initialState, reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var initialState = {
    dashboard: null,
    details: null,
};
var appReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState);
function reducers(state, action) {
    return appReducer(state, action);
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\covid-19\Ngrx\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map