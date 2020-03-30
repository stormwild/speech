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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_speeches_view_speeches_view_speeches_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/speeches/view-speeches/view-speeches.component */ "./src/app/modules/speeches/view-speeches/view-speeches.component.ts");
/* harmony import */ var _modules_speeches_submit_speech_submit_speech_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/speeches/submit-speech/submit-speech.component */ "./src/app/modules/speeches/submit-speech/submit-speech.component.ts");
/* harmony import */ var _modules_speeches_search_speeches_search_speeches_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/speeches/search-speeches/search-speeches.component */ "./src/app/modules/speeches/search-speeches/search-speeches.component.ts");
/* harmony import */ var _modules_main_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/main/home/home.component */ "./src/app/modules/main/home/home.component.ts");







var routes = [
    { path: 'view', component: _modules_speeches_view_speeches_view_speeches_component__WEBPACK_IMPORTED_MODULE_3__["ViewSpeechesComponent"] },
    { path: 'submit', component: _modules_speeches_submit_speech_submit_speech_component__WEBPACK_IMPORTED_MODULE_4__["SubmitSpeechComponent"] },
    { path: 'search', component: _modules_speeches_search_speeches_search_speeches_component__WEBPACK_IMPORTED_MODULE_5__["SearchSpeechesComponent"] },
    { path: '', component: _modules_main_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-main-nav title=\"{{ title }}\"></app-main-nav>\n<main rel=\"main\" class=\"bg-white py-5\">\n    <router-outlet></router-outlet>\n</main>\n<footer class=\"container-fluid bg-dark text-white\">\n    <div class=\"row\">\n        <div class=\"col-12 py-3\">\n            <p><small>Copyright &copy; 2018 Speeches </small></p>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'speeches';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/nav/nav.module */ "./src/app/modules/nav/nav.module.ts");
/* harmony import */ var _services_speech_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/speech.service */ "./src/app/services/speech.service.ts");
/* harmony import */ var _modules_speeches_speeches_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/speeches/speeches.module */ "./src/app/modules/speeches/speeches.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modules_main_main_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/main/main.module */ "./src/app/modules/main/main.module.ts");
/* harmony import */ var _providers_custom_date_formatter_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./providers/custom-date-formatter.service */ "./src/app/providers/custom-date-formatter.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                _modules_nav_nav_module__WEBPACK_IMPORTED_MODULE_6__["NavModule"],
                _modules_main_main_module__WEBPACK_IMPORTED_MODULE_10__["MainModule"],
                _modules_speeches_speeches_module__WEBPACK_IMPORTED_MODULE_8__["SpeechesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"]
            ],
            providers: [
                _services_speech_service__WEBPACK_IMPORTED_MODULE_7__["SpeechService"],
                _providers_custom_date_formatter_service__WEBPACK_IMPORTED_MODULE_11__["CustomDateFormatterService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mock/speeches.ts":
/*!**********************************!*\
  !*** ./src/app/mock/speeches.ts ***!
  \**********************************/
/*! exports provided: SPEECHES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPEECHES", function() { return SPEECHES; });
var SPEECHES = [
    {
        id: 1,
        title: 'Sonnet 1',
        content: "From fairest creatures we desire increase,\nThat thereby beauty's rose might never die,\nBut as the riper should by time decease,\nHis tender heir might bear his memory:\nBut thou, contracted to thine own bright eyes,\nFeed'st thy light'st flame with self/substantial fuel,\nMaking a famine where abundance lies,\nThyself thy foe, to thy sweet self too cruel.\nThou that art now the world's fresh ornament\nAnd only herald to the gaudy spring,\nWithin thine own bud buriest thy content\nAnd, tender churl, makest waste in niggarding.\nPity the world, or else this glutton be,\nTo eat the world's due, by the grave and thee.",
        author: 'William Shakespeare',
        updated: '05/20/1609',
        tags: ['sonnet', 'abc', 'abcd', 'great', 'classic', 'reinasaance']
    },
    {
        id: 2,
        title: 'Sonnet 2',
        content: "When forty winters shall beseige thy brow,\nAnd dig deep trenches in thy beauty's field,\nThy youth's proud livery, so gazed on now,\nWill be a tatter'd weed, of small worth held:\nThen being ask'd where all thy beauty lies,\nWhere all the treasure of thy lusty days,\nTo say, within thine own deep/sunken eyes,\nWere an all/eating shame and thriftless praise.\nHow much more praise deserved thy beauty's use,\nIf thou couldst answer 'This fair child of mine\nShall sum my count and make my old excuse,'\nProving his beauty by succession thine!\nThis were to be new made when thou art old,\nAnd see thy blood warm when thou feel'st it cold.",
        author: 'William Shakespeare',
        updated: '05/20/1609',
        tags: ['sonnet']
    },
    {
        id: 3,
        title: 'Sonnet 3',
        content: "Look in thy glass, and tell the face thou viewest\nNow is the time that face should form another;\nWhose fresh repair if now thou not renewest,\nThou dost beguile the world, unbless some mother.\nFor where is she so fair whose unear'd womb\nDisdains the tillage of thy husbandry?\nOr who is he so fond will be the tomb\nOf his self/love, to stop posterity?\nThou art thy mother's glass, and she in thee\nCalls back the lovely April of her prime:\nSo thou through windows of thine age shall see\nDespite of wrinkles this thy golden time.\nBut if thou live, remember'd not to be,\nDie single, and thine image dies with thee.",
        author: 'William Shakespeare',
        updated: '05/20/1609',
        tags: ['modern']
    }
];


/***/ }),

/***/ "./src/app/models/speech.ts":
/*!**********************************!*\
  !*** ./src/app/models/speech.ts ***!
  \**********************************/
/*! exports provided: Speech */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Speech", function() { return Speech; });
var Speech = /** @class */ (function () {
    function Speech() {
    }
    return Speech;
}());



/***/ }),

/***/ "./src/app/modules/main/home/home.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/main/home/home.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <h1>Speeches</h1>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/main/home/home.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/modules/main/home/home.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/main/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/main/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/main/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/main/main.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/main/main.module.ts ***!
  \*********************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/main/home/home.component.ts");




var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/modules/nav/main-nav/main-nav.component.html":
/*!**************************************************************!*\
  !*** ./src/app/modules/nav/main-nav/main-nav.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\" routerLink=\"/\">{{ title | titlecase }}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/view\">View My Speeches <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/submit\">Submit New Speech</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" href=\"#\" routerLink=\"/search\">Search All Speeches</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/modules/nav/main-nav/main-nav.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/nav/main-nav/main-nav.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmF2L21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/nav/main-nav/main-nav.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/nav/main-nav/main-nav.component.ts ***!
  \************************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainNavComponent = /** @class */ (function () {
    function MainNavComponent() {
    }
    MainNavComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MainNavComponent.prototype, "title", void 0);
    MainNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-nav',
            template: __webpack_require__(/*! ./main-nav.component.html */ "./src/app/modules/nav/main-nav/main-nav.component.html"),
            styles: [__webpack_require__(/*! ./main-nav.component.scss */ "./src/app/modules/nav/main-nav/main-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainNavComponent);
    return MainNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/nav/nav.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/nav/nav.module.ts ***!
  \*******************************************/
/*! exports provided: NavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModule", function() { return NavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/modules/nav/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavModule = /** @class */ (function () {
    function NavModule() {
    }
    NavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            exports: [
                _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"]
            ]
        })
    ], NavModule);
    return NavModule;
}());



/***/ }),

/***/ "./src/app/modules/speeches/search-speeches/search-speeches.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/speeches/search-speeches/search-speeches.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Search Speeches</h1>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/speeches/search-speeches/search-speeches.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/speeches/search-speeches/search-speeches.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3BlZWNoZXMvc2VhcmNoLXNwZWVjaGVzL3NlYXJjaC1zcGVlY2hlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/speeches/search-speeches/search-speeches.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/speeches/search-speeches/search-speeches.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchSpeechesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSpeechesComponent", function() { return SearchSpeechesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchSpeechesComponent = /** @class */ (function () {
    function SearchSpeechesComponent() {
    }
    SearchSpeechesComponent.prototype.ngOnInit = function () {
    };
    SearchSpeechesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-speeches',
            template: __webpack_require__(/*! ./search-speeches.component.html */ "./src/app/modules/speeches/search-speeches/search-speeches.component.html"),
            styles: [__webpack_require__(/*! ./search-speeches.component.scss */ "./src/app/modules/speeches/search-speeches/search-speeches.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchSpeechesComponent);
    return SearchSpeechesComponent;
}());



/***/ }),

/***/ "./src/app/modules/speeches/share-modal/share-modal.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/speeches/share-modal/share-modal.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n    <form [formGroup]=\"shareForm\" (ngSubmit)=\"send($event)\">\n        <div class=\"modal-header\">\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Share Speech</h4>\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n                <span aria-hidden=\"true\">&times;</span>\n            </button>\n        </div>\n        <div class=\"modal-body\">\n\n            <div class=\"form-group\">\n                <label class=\"\" for=\"email\">Email</label>\n                <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Email\" formControlName=\"email\">\n                <div *ngIf=\"(submitted  && email.invalid) || (email.invalid && (email.touched || email.dirty))\" class=\"alert alert-danger mt-3\">\n                    <div *ngIf=\"email.errors.required\">\n                        Email is required.\n                    </div>\n                    <div *ngIf=\"email.errors.email\">\n                        Email is not valid.\n                    </div>\n                </div>                \n            </div>\n\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"submit\" class=\"btn btn-outline-dark\">Save</button>\n        </div>\n    </form>\n</ng-template>\n\n<button class=\"btn btn-block btn-outline-secondary\" type=\"button\" (click)=\"open(content)\">Share</button>"

/***/ }),

/***/ "./src/app/modules/speeches/share-modal/share-modal.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/speeches/share-modal/share-modal.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3BlZWNoZXMvc2hhcmUtbW9kYWwvc2hhcmUtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/speeches/share-modal/share-modal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/speeches/share-modal/share-modal.component.ts ***!
  \***********************************************************************/
/*! exports provided: ShareModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModalComponent", function() { return ShareModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_models_speech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/speech */ "./src/app/models/speech.ts");






var ShareModalComponent = /** @class */ (function () {
    function ShareModalComponent(modalService, fb, toastr) {
        this.modalService = modalService;
        this.fb = fb;
        this.toastr = toastr;
        this.submitted = false;
    }
    ShareModalComponent.prototype.ngOnInit = function () {
        this.shareForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]]
        });
    };
    Object.defineProperty(ShareModalComponent.prototype, "email", {
        get: function () {
            return this.shareForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    ShareModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
            console.log(_this.closeResult);
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log(_this.closeResult);
        });
    };
    ShareModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ShareModalComponent.prototype.send = function ($e) {
        $e.preventDefault();
        this.submitted = true;
        if (this.shareForm.invalid) {
            return;
        }
        this.toastr.success("Speech " + this.speech.title + " shared with " + this.email.value + ". Email sent!");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_speech__WEBPACK_IMPORTED_MODULE_5__["Speech"])
    ], ShareModalComponent.prototype, "speech", void 0);
    ShareModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-share-modal',
            template: __webpack_require__(/*! ./share-modal.component.html */ "./src/app/modules/speeches/share-modal/share-modal.component.html"),
            styles: [__webpack_require__(/*! ./share-modal.component.scss */ "./src/app/modules/speeches/share-modal/share-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], ShareModalComponent);
    return ShareModalComponent;
}());



/***/ }),

/***/ "./src/app/modules/speeches/speech-editor/speech-editor.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/speeches/speech-editor/speech-editor.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Edit Speech</h5>\n<form [formGroup]=\"speechForm\" (ngSubmit)=\"onSubmit($event)\">\n  <div class=\"form-group\">\n    <label for=\"content\">Content</label>\n    <textarea class=\"form-control\" cols=\"30\" rows=\"10\" placeholder=\"Speech content\" formControlName=\"content\"></textarea>\n    <div *ngIf=\"content.invalid && (content.dirty || content.touched)\"\n    class=\"alert alert-danger mt-3\">\n      <div *ngIf=\"content.errors.required\">\n        Content is required.\n      </div>\n    </div>\n  </div>\n  <div class=\"form-row align-items-start mb-3\">\n    <div class=\"col-md-4 mb-3\">\n      <label class=\"\" for=\"author\">Author</label>\n      <input type=\"text\" class=\"form-control\" id=\"author\" placeholder=\"Author Name\" formControlName=\"author\">\n      <div *ngIf=\"author.invalid && (author.dirty || author.touched)\"\n      class=\"alert alert-danger mt-3\">\n        <div *ngIf=\"author.errors.required\">\n          Author is required.\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4 mb-3\">\n        <label for=\"\" class=\"\">Keywords</label>\n        <div *ngIf=\"tags\" class=\"form-control well mb-3\">\n            <a \n            href=\"#\"\n            *ngFor=\"let tag of tags.controls; trackBy: trackByIndex; let i = index\" \n            (click)=\"remove(i)\" \n            class=\"badge badge-pill badge-light\">{{ tag.value }}</a>\n        </div>  \n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" #tag (keyup.enter)=\"addTag(tag.value)\" placeholder=\"Add tag or keyword\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-secondary\" (click)=\"addTag(tag.value)\" type=\"button\"><fa-icon [icon]=\"faPlus\"></fa-icon></button>\n            </div>\n        </div>  \n    </div>\n    <div class=\"col-md-4 mb-3\">\n      <label for=\"\" class=\"\">Updated Date</label>\n      <div class=\"input-group\">\n        <input type=\"text\"\n               class=\"form-control\" \n               placeholder=\"mm/dd/yyyy\"\n               ngbDatepicker \n               #d=\"ngbDatepicker\" \n               value=\"updated.value\"\n               formControlName=\"updated\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-secondary\" (click)=\"d.toggle()\" type=\"button\"><fa-icon [icon]=\"faCalendar\"></fa-icon></button>\n        </div>\n      </div>\n      <div *ngIf=\"updated.invalid && (updated.dirty || updated.touched)\"\n        class=\"alert alert-danger mt-3\">\n        <div *ngIf=\"updated.errors.required\">\n          Updated is required.\n        </div>\n      </div>      \n    </div>\n  </div>\n  <div class=\"form-row\">\n    <div class=\"col-md-3 mb-3\"></div>\n    <div class=\"col-md-3 mb-3\">\n      <button class=\"btn btn-block btn-outline-secondary\" type=\"button\" (click)=\"onDelete($event)\">Delete</button>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n        <button class=\"btn btn-block btn-outline-secondary\" type=\"submit\" [disabled]=\"!speechForm.valid\">Save</button>\n    </div>\n    <div class=\"col-md-3 mb-3\">\n        <app-share-modal [speech]=\"speech\"></app-share-modal>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/modules/speeches/speech-editor/speech-editor.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/speeches/speech-editor/speech-editor.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3BlZWNoZXMvc3BlZWNoLWVkaXRvci9zcGVlY2gtZWRpdG9yLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/speeches/speech-editor/speech-editor.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/speeches/speech-editor/speech-editor.component.ts ***!
  \***************************************************************************/
/*! exports provided: SpeechEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechEditorComponent", function() { return SpeechEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_providers_custom_date_formatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/custom-date-formatter.service */ "./src/app/providers/custom-date-formatter.service.ts");
/* harmony import */ var src_app_models_speech__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/speech */ "./src/app/models/speech.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");








var SpeechEditorComponent = /** @class */ (function () {
    function SpeechEditorComponent(fb, dateService, toastr) {
        this.fb = fb;
        this.dateService = dateService;
        this.toastr = toastr;
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlus"];
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faCalendar"];
        this.speechForm = this.fb.group({
            content: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            tags: this.fb.array([]),
            updated: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    SpeechEditorComponent.prototype.ngOnInit = function () {
    };
    SpeechEditorComponent.prototype.ngOnChanges = function () {
        if (this.speech) {
            this.speechForm.patchValue({
                content: this.speech.content,
                author: this.speech.author,
                updated: this.dateService.parse(this.speech.updated),
                tags: this.initTags(this.speech.tags)
            });
        }
    };
    Object.defineProperty(SpeechEditorComponent.prototype, "content", {
        get: function () {
            return this.speechForm.get('content');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechEditorComponent.prototype, "author", {
        get: function () {
            return this.speechForm.get('author');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechEditorComponent.prototype, "updated", {
        get: function () {
            return this.speechForm.get('updated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpeechEditorComponent.prototype, "tags", {
        get: function () {
            return this.speechForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    SpeechEditorComponent.prototype.initTags = function (tags) {
        this.speechForm.setControl('tags', this.fb.array([]));
        for (var index = 0; index < tags.length; index++) {
            this.tags.push(this.fb.control(tags[index]));
        }
        return tags;
    };
    SpeechEditorComponent.prototype.addTag = function (tag) {
        var containsTag = false;
        for (var index = 0; index < this.tags.length; index++) {
            if (this.tags.at(index).value === tag) {
                containsTag = true;
            }
        }
        if (containsTag === false) {
            this.tags.push(this.fb.control(tag));
        }
        this.tag.nativeElement.value = '';
        return false;
    };
    SpeechEditorComponent.prototype.trackByIndex = function (index, tag) {
        return index;
    };
    SpeechEditorComponent.prototype.remove = function (i) {
        this.tags.removeAt(i);
        return false;
    };
    SpeechEditorComponent.prototype.onSubmit = function ($e) {
        $e.preventDefault();
        if (this.speechForm.valid) {
            var speech = {
                id: this.speech.id,
                title: this.speech.title,
                content: this.content.value,
                author: this.author.value,
                tags: this.tags.value,
                updated: this.dateService.format(this.updated.value)
            };
            this.save.emit(speech);
            this.toastr.success(this.speech.title + " updated!");
        }
    };
    SpeechEditorComponent.prototype.onDelete = function ($e) {
        $e.preventDefault();
        var title = this.speech.title;
        this.delete.emit({
            id: this.speech.id,
            title: this.speech.title,
            content: this.content.value,
            author: this.author.value,
            tags: this.tags.value,
            updated: this.dateService.format(this.updated.value)
        });
        this.toastr.success(title + " removed!");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_models_speech__WEBPACK_IMPORTED_MODULE_4__["Speech"])
    ], SpeechEditorComponent.prototype, "speech", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpeechEditorComponent.prototype, "save", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpeechEditorComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tag'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SpeechEditorComponent.prototype, "tag", void 0);
    SpeechEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-speech-editor',
            template: __webpack_require__(/*! ./speech-editor.component.html */ "./src/app/modules/speeches/speech-editor/speech-editor.component.html"),
            providers: [
                { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"], useClass: src_app_providers_custom_date_formatter_service__WEBPACK_IMPORTED_MODULE_3__["CustomDateFormatterService"] }
            ],
            styles: [__webpack_require__(/*! ./speech-editor.component.scss */ "./src/app/modules/speeches/speech-editor/speech-editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], src_app_providers_custom_date_formatter_service__WEBPACK_IMPORTED_MODULE_3__["CustomDateFormatterService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]])
    ], SpeechEditorComponent);
    return SpeechEditorComponent;
}());



/***/ }),

/***/ "./src/app/modules/speeches/speeches-list/speeches-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/speeches/speeches-list/speeches-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5>Speeches</h5>\n<div *ngIf=\"speeches\" class=\"list-group mb-3\">\n    <a href=\"#\" \n       *ngFor=\"let speech of speeches; trackBy: trackBySpeech;\" \n       (click)=\"select(speech)\" \n       class=\"list-group-item list-group-item-action\" \n       [class.active]=\"current.id == speech.id\">\n       {{ speech.title }}\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/modules/speeches/speeches-list/speeches-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/speeches/speeches-list/speeches-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3BlZWNoZXMvc3BlZWNoZXMtbGlzdC9zcGVlY2hlcy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/speeches/speeches-list/speeches-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/speeches/speeches-list/speeches-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: SpeechesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechesListComponent", function() { return SpeechesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SpeechesListComponent = /** @class */ (function () {
    function SpeechesListComponent() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SpeechesListComponent.prototype.ngOnInit = function () {
        this.current = this.speeches[0];
    };
    SpeechesListComponent.prototype.select = function (speech) {
        this.current = speech;
        this.change.emit(this.current);
        return false;
    };
    SpeechesListComponent.prototype.trackBySpeech = function (index, speech) {
        return speech.id;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SpeechesListComponent.prototype, "speeches", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpeechesListComponent.prototype, "change", void 0);
    SpeechesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-speeches-list',
            template: __webpack_require__(/*! ./speeches-list.component.html */ "./src/app/modules/speeches/speeches-list/speeches-list.component.html"),
            styles: [__webpack_require__(/*! ./speeches-list.component.scss */ "./src/app/modules/speeches/speeches-list/speeches-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpeechesListComponent);
    return SpeechesListComponent;
}());



/***/ }),

/***/ "./src/app/modules/speeches/speeches.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/speeches/speeches.module.ts ***!
  \*****************************************************/
/*! exports provided: SpeechesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechesModule", function() { return SpeechesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _speeches_list_speeches_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speeches-list/speeches-list.component */ "./src/app/modules/speeches/speeches-list/speeches-list.component.ts");
/* harmony import */ var _view_speeches_view_speeches_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-speeches/view-speeches.component */ "./src/app/modules/speeches/view-speeches/view-speeches.component.ts");
/* harmony import */ var _speech_editor_speech_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speech-editor/speech-editor.component */ "./src/app/modules/speeches/speech-editor/speech-editor.component.ts");
/* harmony import */ var _submit_speech_submit_speech_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submit-speech/submit-speech.component */ "./src/app/modules/speeches/submit-speech/submit-speech.component.ts");
/* harmony import */ var _search_speeches_search_speeches_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-speeches/search-speeches.component */ "./src/app/modules/speeches/search-speeches/search-speeches.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./share-modal/share-modal.component */ "./src/app/modules/speeches/share-modal/share-modal.component.ts");












var SpeechesModule = /** @class */ (function () {
    function SpeechesModule() {
    }
    SpeechesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _speeches_list_speeches_list_component__WEBPACK_IMPORTED_MODULE_3__["SpeechesListComponent"],
                _view_speeches_view_speeches_component__WEBPACK_IMPORTED_MODULE_4__["ViewSpeechesComponent"],
                _speech_editor_speech_editor_component__WEBPACK_IMPORTED_MODULE_5__["SpeechEditorComponent"],
                _submit_speech_submit_speech_component__WEBPACK_IMPORTED_MODULE_6__["SubmitSpeechComponent"],
                _search_speeches_search_speeches_component__WEBPACK_IMPORTED_MODULE_7__["SearchSpeechesComponent"],
                _share_modal_share_modal_component__WEBPACK_IMPORTED_MODULE_11__["ShareModalComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeModule"]],
            exports: [_speeches_list_speeches_list_component__WEBPACK_IMPORTED_MODULE_3__["SpeechesListComponent"], _view_speeches_view_speeches_component__WEBPACK_IMPORTED_MODULE_4__["ViewSpeechesComponent"]]
        })
    ], SpeechesModule);
    return SpeechesModule;
}());



/***/ }),

/***/ "./src/app/modules/speeches/submit-speech/submit-speech.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/speeches/submit-speech/submit-speech.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h1>Submit New Speech</h1>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modules/speeches/submit-speech/submit-speech.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/speeches/submit-speech/submit-speech.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3BlZWNoZXMvc3VibWl0LXNwZWVjaC9zdWJtaXQtc3BlZWNoLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/speeches/submit-speech/submit-speech.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/speeches/submit-speech/submit-speech.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubmitSpeechComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitSpeechComponent", function() { return SubmitSpeechComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubmitSpeechComponent = /** @class */ (function () {
    function SubmitSpeechComponent() {
    }
    SubmitSpeechComponent.prototype.ngOnInit = function () {
    };
    SubmitSpeechComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submit-speech',
            template: __webpack_require__(/*! ./submit-speech.component.html */ "./src/app/modules/speeches/submit-speech/submit-speech.component.html"),
            styles: [__webpack_require__(/*! ./submit-speech.component.scss */ "./src/app/modules/speeches/submit-speech/submit-speech.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubmitSpeechComponent);
    return SubmitSpeechComponent;
}());



/***/ }),

/***/ "./src/app/modules/speeches/view-speeches/view-speeches.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/speeches/view-speeches/view-speeches.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-4 mb-sm-3\">\n      <app-speeches-list \n      [speeches]=\"speeches\"\n      (change)=\"onChange($event)\"></app-speeches-list>\n    </div>\n    <div class=\"col-md-8\">\n      <app-speech-editor \n      [speech]=\"speech\" \n      (save)=\"onSave($event)\"\n      (delete)=\"onDelete($event)\"></app-speech-editor>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/speeches/view-speeches/view-speeches.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/speeches/view-speeches/view-speeches.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3BlZWNoZXMvdmlldy1zcGVlY2hlcy92aWV3LXNwZWVjaGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/speeches/view-speeches/view-speeches.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/speeches/view-speeches/view-speeches.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewSpeechesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewSpeechesComponent", function() { return ViewSpeechesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_speech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/speech.service */ "./src/app/services/speech.service.ts");



var ViewSpeechesComponent = /** @class */ (function () {
    function ViewSpeechesComponent(speechService) {
        this.speechService = speechService;
        this.speeches = [];
    }
    ViewSpeechesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.speechService.getSpeeches().subscribe(function (s) {
            _this.speeches = s;
            _this.speech = _this.speeches[0];
        });
    };
    ViewSpeechesComponent.prototype.onChange = function (speech) {
        this.speech = this.speeches[this.speeches.findIndex(function (s) { return s.id === speech.id; })];
    };
    ViewSpeechesComponent.prototype.onSave = function (speech) {
        var _this = this;
        this.speechService.saveSpeech(speech).subscribe(function (s) {
            _this.speeches = s;
            _this.speech = speech;
        });
    };
    ViewSpeechesComponent.prototype.onDelete = function (speech) {
        var _this = this;
        this.speechService.deleteSpeech(speech).subscribe(function (s) {
            _this.speeches = s;
            _this.speech = _this.speeches[0];
        });
    };
    ViewSpeechesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-speeches',
            template: __webpack_require__(/*! ./view-speeches.component.html */ "./src/app/modules/speeches/view-speeches/view-speeches.component.html"),
            styles: [__webpack_require__(/*! ./view-speeches.component.scss */ "./src/app/modules/speeches/view-speeches/view-speeches.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_speech_service__WEBPACK_IMPORTED_MODULE_2__["SpeechService"]])
    ], ViewSpeechesComponent);
    return ViewSpeechesComponent;
}());



/***/ }),

/***/ "./src/app/providers/custom-date-formatter.service.ts":
/*!************************************************************!*\
  !*** ./src/app/providers/custom-date-formatter.service.ts ***!
  \************************************************************/
/*! exports provided: CustomDateFormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDateFormatterService", function() { return CustomDateFormatterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var CustomDateFormatterService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomDateFormatterService, _super);
    function CustomDateFormatterService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomDateFormatterService.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('/');
            return { month: +dateParts[0], day: +dateParts[1], year: +dateParts[2] };
        }
        return null;
    };
    CustomDateFormatterService.prototype.format = function (date) {
        return date ?
            (date.month ? date.month : '') + "/" + (date.day ? date.day : '') + "/" + date.year :
            '';
    };
    CustomDateFormatterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CustomDateFormatterService);
    return CustomDateFormatterService;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDateParserFormatter"]));



/***/ }),

/***/ "./src/app/services/speech.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/speech.service.ts ***!
  \********************************************/
/*! exports provided: SpeechService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechService", function() { return SpeechService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mock_speeches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock/speeches */ "./src/app/mock/speeches.ts");





var SpeechService = /** @class */ (function () {
    function SpeechService(http) {
        this.http = http;
        if (!this.speeches) {
            this.speeches = _mock_speeches__WEBPACK_IMPORTED_MODULE_4__["SPEECHES"];
        }
    }
    SpeechService.prototype.getSpeeches = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.speeches);
    };
    SpeechService.prototype.saveSpeech = function (speech) {
        var index = this.speeches.findIndex(function (s) { return s.id === speech.id; });
        this.speeches[index] = speech;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.speeches);
    };
    SpeechService.prototype.deleteSpeech = function (speech) {
        var index = this.speeches.findIndex(function (s) { return s.id === speech.id; });
        this.speeches.splice(index, 1);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.speeches);
    };
    SpeechService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SpeechService);
    return SpeechService;
}());



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

module.exports = __webpack_require__(/*! /Users/stormwild/Source/speech/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map