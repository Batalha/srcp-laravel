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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-error-handle.ts":
/*!*************************************!*\
  !*** ./src/app/app-error-handle.ts ***!
  \*************************************/
/*! exports provided: AppErrorHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppErrorHandle", function() { return AppErrorHandle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppErrorHandle = /** @class */ (function (_super) {
    __extends(AppErrorHandle, _super);
    function AppErrorHandle(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AppErrorHandle.prototype.handleError = function (errorResp) {
        if (errorResp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            var error = (typeof errorResp.error !== 'object') ? JSON.parse(errorResp.error) : errorResp.error;
            if (errorResp.status === 400 &&
                (error.error === 'token_expired' ||
                    error.error === 'token_invalid' ||
                    error.error === 'A token is required' || error.error === 'token_not_provided')) {
                this.goToLogin();
            }
            if (errorResp.status === 401 && error.error === 'token_has_been_blacklisted') {
                this.goToLogin();
            }
        }
        _super.prototype.handleError.call(this, errorResp);
    };
    AppErrorHandle.prototype.goToLogin = function () {
        var router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        router.navigate(['/login']);
    };
    AppErrorHandle = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], AppErrorHandle);
    return AppErrorHandle;
}(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var route = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
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

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/token-interceptor */ "./src/app/interceptors/token-interceptor.ts");
/* harmony import */ var _interceptors_refresh_token_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/refresh-token-interceptor */ "./src/app/interceptors/refresh-token-interceptor.ts");
/* harmony import */ var _app_error_handle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-error-handle */ "./src/app/app-error-handle.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _srcp_srcp_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./srcp/srcp.module */ "./src/app/srcp/srcp.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_9__["AuthModule"],
                _srcp_srcp_module__WEBPACK_IMPORTED_MODULE_8__["SrcpModule"]
            ],
            providers: [
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _interceptors_refresh_token_interceptor__WEBPACK_IMPORTED_MODULE_5__["RefreshTokenInterceptor"], multi: true },
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _app_error_handle__WEBPACK_IMPORTED_MODULE_6__["AppErrorHandle"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _trocar_senha_trocar_senha_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trocar-senha/trocar-senha.component */ "./src/app/auth/trocar-senha/trocar-senha.component.ts");
/* harmony import */ var _compare_compare_validator_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compare/compare-validator.directive */ "./src/app/auth/compare/compare-validator.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
                _compare_compare_validator_directive__WEBPACK_IMPORTED_MODULE_5__["CompareValidatorDirective"],
                _trocar_senha_trocar_senha_component__WEBPACK_IMPORTED_MODULE_4__["TrocarSenhaComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import 'rxjs/add/operator/toPromise';
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.url = 'http://localhost:8000';
        this.urlUpdate = 'http://localhost:8000/srcp/trocar_senha';
    }
    AuthService.prototype.check = function () {
        return localStorage.getItem('user') ? true : false;
    };
    AuthService.prototype.login = function (data) {
        return this.http.post(this.url + "/login", data)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', btoa(JSON.stringify(data.user)));
        }));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.http.get(this.url + "/logout")
            .subscribe(function (data) {
            localStorage.clear();
            _this.router.navigate(['/login']);
        });
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
    };
    AuthService.prototype.setUser = function () {
        return this.http.get(this.url + "/me")
            .toPromise()
            .then(function (data) {
            if (data.user) {
                localStorage.setItem('user', btoa(JSON.stringify(data.user)));
                return true;
            }
            return false;
        });
    };
    AuthService.prototype.update = function (data) {
        return this.http.put(this.urlUpdate + "/" + this.getUser().id, data);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/compare/compare-validator.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/compare/compare-validator.directive.ts ***!
  \*************************************************************/
/*! exports provided: CompareValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareValidatorDirective", function() { return CompareValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompareValidatorDirective = /** @class */ (function () {
    function CompareValidatorDirective() {
    }
    CompareValidatorDirective_1 = CompareValidatorDirective;
    CompareValidatorDirective.prototype.validate = function (c) {
        // console.log(c.value === null)
        // if (c.value === null || c.value === 0){
        //     return null;
        // }else{
        var controlToCompare = c.root.get(this.controlNameToCompare);
        if (controlToCompare) {
            var subscription_1 = controlToCompare.valueChanges.subscribe(function () {
                c.updateValueAndValidity();
                subscription_1.unsubscribe();
            });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('compare'),
        __metadata("design:type", String)
    ], CompareValidatorDirective.prototype, "controlNameToCompare", void 0);
    CompareValidatorDirective = CompareValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[compare]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: CompareValidatorDirective_1, multi: true }]
        })
    ], CompareValidatorDirective);
    return CompareValidatorDirective;
    var CompareValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <!--<div class=\"container\">-->\r\n        <!--<div class=\"row justify-content-center\">-->\r\n            <!--<div class=\"col-md-5\">-->\r\n                <!--<div *ngIf=\"errorCredentials\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">-->\r\n                    <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">-->\r\n                        <!--<span aria-hidden=\"true\">&times;</span>-->\r\n                    <!--</button>-->\r\n                    <!--Usuario ou Senha Invalido.-->\r\n                <!--</div>-->\r\n                <!--<div class=\"card\">-->\r\n                    <!--<div class=\"card-header\">Login</div>-->\r\n                    <!--<div class=\"card-body\">-->\r\n                        <!--<form class=\"form-horizontal\">-->\r\n                            <!--<div class=\"form-row\">-->\r\n                                <!--<div class=\"form-group col-md-12\">-->\r\n                                    <!--<input id=\"email\" name=\"name\" type=\"email\" class=\"form-control\" placeholder=\"Usuario\"-->\r\n                                           <!--[(ngModel)]=\"user.name\"-->\r\n                                           <!--required autofocus>-->\r\n                                <!--</div>-->\r\n                            <!--</div>-->\r\n\r\n                            <!--<div class=\"form-row\">-->\r\n                                <!--<div class=\"form-group col-md-12\">-->\r\n                                    <!--<input id=\"password\" name=\"password\" type=\"password\" class=\"form-control\" name=\"password\"-->\r\n                                           <!--placeholder=\"Password\"-->\r\n                                           <!--[(ngModel)]=\"user.password\"-->\r\n                                           <!--required>-->\r\n                                <!--</div>-->\r\n                            <!--</div>-->\r\n\r\n                            <!--<div class=\"form-row\">-->\r\n                                <!--<div class=\"form-group col-md-2\">-->\r\n                                    <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitAuth()\">Login</button>-->\r\n                                <!--</div>-->\r\n                            <!--</div>-->\r\n                        <!--</form>-->\r\n                    <!--</div>-->\r\n                <!--</div>-->\r\n            <!--</div>-->\r\n        <!--</div>-->\r\n    <!--</div>-->\r\n\r\n    <div class=\"container\">\r\n        <div class=\"d-flex justify-content-center\">\r\n            <div class=\"col-md-4\">\r\n                <div *ngIf=\"errorCredentials\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                    Usuario ou Senha Invalido.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n        <div class=\"d-flex justify-content-center h-100\">\r\n            <div class=\"user_card\">\r\n                <div class=\"d-flex justify-content-center\">\r\n                    <div class=\"brand_logo_container\">\r\n                        <img src=\"js/assets/img/icon_login.png\" class=\"brand_logo\" alt=\"Logo\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center form_container\">\r\n                    <form>\r\n                        <div class=\"input-group mb-3\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\"><img src=\"js/assets/svg/si-glyph-person-2.svg\" alt=\"\"></span>\r\n                            </div>\r\n                            <input id=\"name\" name=\"name\" type=\"text\" class=\"form-control input_user\" placeholder=\"Usuario\"\r\n                                   [(ngModel)]=\"user.name\"\r\n                                   required autofocus>\r\n                        </div>\r\n                        <div class=\"input-group mb-2\">\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\"><img src=\"js/assets/svg/si-glyph-key-2.svg\" alt=\"\"></span>\r\n                            </div>\r\n                            <input id=\"password\" name=\"password\" type=\"password\" class=\"form-control input_pass\" name=\"password\"\r\n                                   placeholder=\"Password\"\r\n                                   [(ngModel)]=\"user.password\"\r\n                                   required>\r\n                        </div>\r\n                        <!--<div class=\"form-group\">-->\r\n                            <!--<div class=\"custom-control custom-checkbox\">-->\r\n                                <!--<input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlInline\">-->\r\n                                <!--<label class=\"custom-control-label\" for=\"customControlInline\">Remember me</label>-->\r\n                            <!--</div>-->\r\n                        <!--</div>-->\r\n                    </form>\r\n                </div>\r\n                <div class=\"d-flex justify-content-center mt-3 login_container\">\r\n                    <button type=\"button\" name=\"button\" class=\"btn login_btn\" (click)=\"onSubmitAuth()\">Login</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 11%; }\n\n/* Coded with love by Mutiullah Samim */\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  background: #60a3bc !important; }\n\n.user_card {\n  height: 400px;\n  width: 350px;\n  margin-top: auto;\n  margin-bottom: auto;\n  background: #606263;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px; }\n\n.brand_logo_container {\n  position: absolute;\n  height: 170px;\n  width: 170px;\n  top: -75px;\n  border-radius: 50%;\n  background: #eaece4;\n  padding: 10px;\n  text-align: center; }\n\n.brand_logo {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 2px solid white; }\n\n.form_container {\n  margin-top: 75px; }\n\n.login_btn {\n  width: 100%;\n  background: #c0392b !important;\n  color: white !important; }\n\n.login_btn:focus {\n  box-shadow: none !important;\n  outline: 0px !important; }\n\n.login_container {\n  padding: 0 2rem; }\n\n.mb-3 {\n  margin-bottom: 30px !important; }\n\n.mb-2 {\n  margin-bottom: 30px !important; }\n\n.input-group-text {\n  background: #c0392b !important;\n  color: white !important;\n  border: 0 !important;\n  border-radius: 0.25rem 0 0 0.25rem !important; }\n\n.input_user,\n.input_pass:focus {\n  box-shadow: none !important;\n  outline: 0px !important; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #c0392b !important; }\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _srcp_bootstrap_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../srcp/bootstrap/message.service */ "./src/app/srcp/bootstrap/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, message) {
        this.auth = auth;
        this.router = router;
        this.message = message;
        this.errorCredentials = false;
        this.messagepass = null;
        this.user = {
            name: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.messagepass = this.message.messagePass;
    };
    LoginComponent.prototype.onSubmitAuth = function () {
        var _this = this;
        this.auth.login(this.user).subscribe(function (data) {
            _this.router.navigate(['/srcp']);
        }, function (errorResponse) {
            if (errorResponse.status === 401) {
                _this.errorCredentials = true;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _srcp_bootstrap_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/trocar-senha/trocar-senha.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/trocar-senha/trocar-senha.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-5\">\r\n            <!--<div *ngIf=\"errorCredentials\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">-->\r\n                <!--<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">-->\r\n                    <!--<span aria-hidden=\"true\">&times;</span>-->\r\n                <!--</button>-->\r\n                <!--Usuario ou Senha Invalido.-->\r\n            <!--</div>-->\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">Alterar Senha</div>\r\n                <div class=\"card-body\">\r\n\r\n\r\n                    <form #f=\"ngForm\">\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"dataPass.password\"\r\n                                   ngModel #password=\"ngModel\" required>\r\n                            <div class=\"text-danger\" *ngIf=\"password.invalid && (password.dirty || password.touched)\">\r\n                                Password e requerido\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label>Password Confirm</label>\r\n                            <input type=\"password\" class=\"form-control\" name=\"passwordConfirm\" [(ngModel)]=\"dataPass.passwordConfirm\"\r\n                                   ngModel #pwConfirm=\"ngModel\" required compare=\"password\">\r\n                            <div class=\"text-danger\" *ngIf=\"pwConfirm.invalid && (pwConfirm.dirty || pwConfirm.touched)\">\r\n                                <div *ngIf=\"pwConfirm.errors['required']\">Password confirme e requerido</div>\r\n                                <div *ngIf=\"!pwConfirm.errors['required'] && pwConfirm.errors['compare']\">Password confirme nao combina!</div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <button type=\"button\" class=\"btn btn-danger login_btn\" [disabled]=\"f.invalid\" (click)=\"trocarSenha()\">Alterar</button>\r\n                    </form>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/trocar-senha/trocar-senha.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/auth/trocar-senha/trocar-senha.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 12%; }\n\n.card {\n  width: 75%;\n  height: 340px; }\n\n.card-body {\n  flex: 1 1 auto;\n  padding: 1.25rem;\n  background-color: #606263; }\n\n.login_btn {\n  margin-top: 25px;\n  width: 100%;\n  background: #c0392b !important;\n  color: white !important; }\n"

/***/ }),

/***/ "./src/app/auth/trocar-senha/trocar-senha.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/trocar-senha/trocar-senha.component.ts ***!
  \*************************************************************/
/*! exports provided: TrocarSenhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrocarSenhaComponent", function() { return TrocarSenhaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _srcp_bootstrap_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../srcp/bootstrap/message.service */ "./src/app/srcp/bootstrap/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrocarSenhaComponent = /** @class */ (function () {
    function TrocarSenhaComponent(authService, messageService, router) {
        this.authService = authService;
        this.messageService = messageService;
        this.router = router;
        this.dataPass = {
            id: null,
            name: '',
            email: '',
            password: '',
            passwordConfirm: '',
            remember_token: ''
        };
    }
    TrocarSenhaComponent.prototype.ngOnInit = function () {
    };
    TrocarSenhaComponent.prototype.trocarSenha = function () {
        var _this = this;
        this.authService.update(this.dataPass)
            .subscribe(function (data) {
            _this.messageService.messagePass = 'Senha Alterado com Sucesso!';
            _this.router.navigate(['/login']);
        });
    };
    TrocarSenhaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trocar-senha',
            template: __webpack_require__(/*! ./trocar-senha.component.html */ "./src/app/auth/trocar-senha/trocar-senha.component.html"),
            styles: [__webpack_require__(/*! ./trocar-senha.component.scss */ "./src/app/auth/trocar-senha/trocar-senha.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _srcp_bootstrap_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TrocarSenhaComponent);
    return TrocarSenhaComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.check()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (childRoute, state) {
        if (this.auth.check()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/interceptors/refresh-token-interceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/interceptors/refresh-token-interceptor.ts ***!
  \***********************************************************/
/*! exports provided: RefreshTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshTokenInterceptor", function() { return RefreshTokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RefreshTokenInterceptor = /** @class */ (function () {
    function RefreshTokenInterceptor(injector) {
        this.injector = injector;
        this.url = 'http://localhost:8000';
    }
    RefreshTokenInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        return next.handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (errorResponse) {
            var error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse;
            console.log(error.error.error);
            if (errorResponse.status === 401 && error.error.error === 'token_expired') {
                var http = _this.injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);
                return http.post(_this.url + "/refresh", {})
                    .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (data) {
                    localStorage.setItem('token', data.token);
                    var cloneRequest = req.clone({ setHeaders: { 'Authorization': "Bearer " + data.token } });
                    return next.handle(cloneRequest);
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorResponse);
        }));
    };
    RefreshTokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], RefreshTokenInterceptor);
    return RefreshTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptors/token-interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceptors/token-interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
        this.url = 'http://localhost:8000';
    }
    TokenInterceptor.prototype.intercept = function (req, next) {
        var reqUrl = req.url.split('/');
        var webUrl = this.url.split('/');
        var token = localStorage.getItem('token');
        if (token && (reqUrl[2] == webUrl[2])) {
            var newReq = req.clone({ setHeaders: { 'Authorization': "Bearer " + token } });
            return next.handle(newReq);
        }
        else {
            return next.handle(req);
        }
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/srcp/bootstrap/alert-servico/alert-servico.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/srcp/bootstrap/alert-servico/alert-servico.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  alert-servico works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/srcp/bootstrap/alert-servico/alert-servico.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/srcp/bootstrap/alert-servico/alert-servico.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/srcp/bootstrap/alert-servico/alert-servico.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/srcp/bootstrap/alert-servico/alert-servico.component.ts ***!
  \*************************************************************************/
/*! exports provided: AlertServicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertServicoComponent", function() { return AlertServicoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/srcp/bootstrap/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertServicoComponent = /** @class */ (function () {
    function AlertServicoComponent(messageService) {
        this.messageService = messageService;
        this.cor = 'success';
        this.timeout = null;
    }
    AlertServicoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.timeout) {
            setTimeout(function () {
                $(_this.divAlert.nativeElement).alert('close');
            }, this.timeout);
            this.messageService.messageCliente = null;
            this.messageService.messageChamado = null;
            this.messageService.messageServico = null;
            this.messageService.messagePass = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertServicoComponent.prototype, "cor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertServicoComponent.prototype, "timeout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('divAlert'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AlertServicoComponent.prototype, "divAlert", void 0);
    AlertServicoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert-servico',
            template: __webpack_require__(/*! ./alert-servico.component.html */ "./src/app/srcp/bootstrap/alert-servico/alert-servico.component.html"),
            styles: [__webpack_require__(/*! ./alert-servico.component.scss */ "./src/app/srcp/bootstrap/alert-servico/alert-servico.component.scss")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], AlertServicoComponent);
    return AlertServicoComponent;
}());



/***/ }),

/***/ "./src/app/srcp/bootstrap/alert/alert.component.html":
/*!***********************************************************!*\
  !*** ./src/app/srcp/bootstrap/alert/alert.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [className]=\"'alert alert-'+cor\" role=\"alert\" #divAlert>\r\n  <ng-content></ng-content>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./src/app/srcp/bootstrap/alert/alert.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/srcp/bootstrap/alert/alert.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/srcp/bootstrap/alert/alert.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/srcp/bootstrap/alert/alert.component.ts ***!
  \*********************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/srcp/bootstrap/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(messageService) {
        this.messageService = messageService;
        this.cor = 'success';
        this.timeout = null;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.timeout) {
            setTimeout(function () {
                $(_this.divAlert.nativeElement).alert('close');
            }, this.timeout);
            this.messageService.messageCliente = null;
            this.messageService.messageChamado = null;
            this.messageService.messageServico = null;
            this.messageService.messagePass = null;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "cor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AlertComponent.prototype, "timeout", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('divAlert'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AlertComponent.prototype, "divAlert", void 0);
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/srcp/bootstrap/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/srcp/bootstrap/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/srcp/bootstrap/message.service.ts":
/*!***************************************************!*\
  !*** ./src/app/srcp/bootstrap/message.service.ts ***!
  \***************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messageCliente = null;
        this.messageChamado = null;
        this.messageServico = null;
        this.messagePass = null;
    }
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/srcp/chamado/chamado-card/chamado-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-card/chamado-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-ligth\">\r\n  <div class=\"card-header\"> Home > Chamado</div>\r\n  <div class=\"card-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/srcp/chamado/chamado-card/chamado-card.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-card/chamado-card.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid .row-fluid {\n  margin-top: 20px;\n  font-family: Helvetica, Roboto, Arial, sans-serif; }\n\n.card {\n  position: relative;\n  border-radius: 0px;\n  border-left: none;\n  margin-top: -44px;\n  margin-left: 220px;\n  min-height: 850px; }\n\n.card .card-header {\n    background-color: #FFFFFF;\n    padding: 0.6rem 1.25rem; }\n\n.card .card-body {\n    padding: 0;\n    padding: 0px 20px;\n    background-color: #F0F1F2; }\n"

/***/ }),

/***/ "./src/app/srcp/chamado/chamado-card/chamado-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-card/chamado-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChamadoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoCardComponent", function() { return ChamadoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChamadoCardComponent = /** @class */ (function () {
    function ChamadoCardComponent() {
    }
    ChamadoCardComponent.prototype.ngOnInit = function () {
    };
    ChamadoCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chamado-card',
            template: __webpack_require__(/*! ./chamado-card.component.html */ "./src/app/srcp/chamado/chamado-card/chamado-card.component.html"),
            styles: [__webpack_require__(/*! ./chamado-card.component.scss */ "./src/app/srcp/chamado/chamado-card/chamado-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChamadoCardComponent);
    return ChamadoCardComponent;
}());



/***/ }),

/***/ "./src/app/srcp/chamado/chamado-list/chamado-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-list/chamado-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chamado-card>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <button class=\"btn btn-outline-success\" routerLink=\"/srcp/chamado/new\">\r\n                        <img src=\"js/assets/svg/si-glyph-adicionar.svg\"/> Adicionar OS\r\n                    </button>\r\n                <!--</div>-->\r\n                <!--<div class=\"col-md-4\">-->\r\n                    <button class=\"btn btn-outline-primary bt-2\" routerLink=\"/srcp/chamado/lista\">\r\n                        <img src=\"js/assets/svg/si-glyph-document-bullet-list.svg\"/> Listar Dados Clientes\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"card c2 bg-light\">\r\n                <!--<div class=\"card-header c-header2\">Ordem de Serviços</div>-->\r\n                <div class=\"card-body c-body2\">\r\n                    <table id=\"chamado_table\" class=\"table table-sm display\" data-order='[[ 0, \"desc\" ]]'>\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Cliente</th>\r\n                            <th>Data Inicial</th>\r\n                            <th>Data Final</th>\r\n                            <th>Estatus</th>\r\n                            <th>Ação</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody id=\"tbS\" hidden>\r\n                        <!--<tbody id=\"tbC\">-->\r\n                        <tr *ngFor=\"let chamado of listChamados; let i = index\">\r\n                            <td>{{chamado.id}}</td>\r\n                            <td>{{chamado.cliente.nome}}</td>\r\n                            <td>{{chamado.data_inicial | date: 'dd/MM/yyyy'}}</td>\r\n                            <td>{{chamado.data_final | date: 'dd/MM/yyyy'}}</td>\r\n                            <td>{{chamado.status}}</td>\r\n                            <td class=\"bt_a\">\r\n                                <a routerLink='/srcp/chamado/{{chamado.id}}/view' class=\"badge b-view badge-secundario\">\r\n                                    <img src=\"js/assets/svg/si-glyph-view.svg\" alt=\"\">\r\n                                </a>\r\n                                <a routerLink='/srcp/chamado/{{chamado.id}}/edit' class=\"badge b-edit badge-info\">\r\n                                    <img src=\"js/assets/svg/si-glyph-edit.svg\" alt=\"\">\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" (click)=\"destroyChamado(chamado.id, i)\"\r\n                                   class=\"badge b-delete badge-danger\">\r\n                                    <img src=\"js/assets/svg/si-glyph-delete.svg\" alt=\"\">\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</app-chamado-card>\r\n"

/***/ }),

/***/ "./src/app/srcp/chamado/chamado-list/chamado-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-list/chamado-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin: 0;\n  margin-top: 25px;\n  padding: 0; }\n  .container-fluid .row-fluid {\n    font-family: Tahoma, Arial, sans-serif; }\n  .table {\n  padding: 0;\n  margin: 0; }\n  .table thead th {\n    font-size: 12px;\n    text-align: center;\n    color: rgba(103, 87, 57, 0.8);\n    background-color: #F0F1F2;\n    padding: .60rem; }\n  .table tr td {\n    font-size: 12px;\n    font-family: Arial, Helvetica, sans-serif; }\n  .table tr td .badge {\n      display: inline-block;\n      padding: .30em .5em;\n      font-size: 75%;\n      font-weight: 700;\n      line-height: 1;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border-radius: 0.2rem; }\n  .table tr td .b-edit {\n      background-color: rgba(78, 216, 240, 0.18);\n      border: 1px solid #3ea5bc; }\n  .table tr td .b-edit:hover {\n      background-color: #4cdaf2; }\n  .table tr td .b-view {\n      background-color: #EEEEEE;\n      border: 1px solid #888a88; }\n  .table tr td .b-view:hover {\n      background-color: #858489; }\n  .table tr td .b-delete {\n      background-color: rgba(238, 0, 10, 0.16);\n      border: 1px solid #d10009; }\n  .table tr td .b-delete:hover {\n      background-color: rgba(255, 25, 23, 0.67); }\n  .table-sm td {\n  padding: 0.4rem 0.8rem; }\n  .c2 {\n  margin-top: 20px; }\n  .c2 .c-header2 {\n    background-color: #e3e3e3;\n    font-weight: bold;\n    color: rgba(16, 16, 16, 0.59);\n    border-bottom: none;\n    padding: 4px 16px 0px; }\n  .c2 .c-body2 {\n    padding: 0;\n    border-bottom: none; }\n  .c2 .bg-light {\n    background-color: #e3e3e3; }\n  .data-row {\n  margin: -2px -5px; }\n  .bt_a a {\n  margin-left: 6px; }\n  .bt-2 {\n  margin-left: 30px; }\n"

/***/ }),

/***/ "./src/app/srcp/chamado/chamado-list/chamado-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-list/chamado-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChamadoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoListComponent", function() { return ChamadoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chamado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chamado.service */ "./src/app/srcp/chamado/chamado.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChamadoListComponent = /** @class */ (function () {
    function ChamadoListComponent(chamdoService) {
        this.chamdoService = chamdoService;
        this.listChamados = [];
        this.nomeCliente = '';
    }
    ChamadoListComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            $('#chamado_table').DataTable({
                scrollY: 400,
                'oLanguage': {
                    'sLengthMenu': 'Mostrar _MENU_ itens por Pag',
                    'sZeroRecords': 'Nenhum registro encontrado',
                    'sInfo': 'Mostrando _START_ ao _END_ de _TOTAL_ itens',
                    'sInfoEmpty': 'Mostrando 0 ao 0 de 0 itens',
                    'sInfoFiltered': '(filtrado de _MAX_ itens)',
                    'sSearch': 'Procurar: ',
                    'oPaginate': {
                        'sFirst': '<<',
                        'sPrevious': '<',
                        'sNext': '>',
                        'sLast': '>>'
                    }
                }
            });
            $('.ui-widget-header').css('border', '1px solid #e3e3e3');
            $('#chamado_table_filter input').attr('size', 30);
            $('#chamado_table_filter').css('padding-top', '4px');
            $(' label').css({ 'margin-bottom': '4px', 'font-size': '14px' });
            $('.dataTables_info').css({ 'font-size': '14px' });
            $('.dataTables_paginate').css({ 'float': 'none', 'font-size': '14px' });
            $('table.dataTable.no-footer').css({ 'border-bottom': 'none' });
            $('.dataTables_wrapper .ui-toolbar').css('padding', '2px 8px');
            $('#chamado_table_length').css('padding', '8px 8px 2px');
            $('#tbS').removeAttr('hidden', false);
        }, 1500);
        this.getChamadoList();
    };
    ChamadoListComponent.prototype.getChamadoList = function () {
        var _this = this;
        this.chamdoService.getChamadoList().subscribe(function (data) {
            _this.listChamados = data;
        });
    };
    ChamadoListComponent.prototype.destroyChamado = function (id, index) {
        var _this = this;
        if (confirm('Deseja Excluir esse Chamado?')) {
            this.chamdoService.destroy(id).subscribe(function () {
                _this.listChamados.splice(index, 1);
            });
        }
    };
    ChamadoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chamado-list',
            template: __webpack_require__(/*! ./chamado-list.component.html */ "./src/app/srcp/chamado/chamado-list/chamado-list.component.html"),
            styles: [__webpack_require__(/*! ./chamado-list.component.scss */ "./src/app/srcp/chamado/chamado-list/chamado-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_chamado_service__WEBPACK_IMPORTED_MODULE_1__["ChamadoService"]])
    ], ChamadoListComponent);
    return ChamadoListComponent;
}());



/***/ }),

/***/ "./src/app/srcp/chamado/chamado-new/chamado-new.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-new/chamado-new.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chamado-card>\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <form id=\"filter\" action=\"\" #f=\"ngForm\">\r\n                <input type=\"hidden\" name=\"id\" [(ngModel)]=\"chamado.id\">\r\n                <div class=\"card c2 bg-light\">\r\n                    <div class=\"card-header c-header2\">{{chamado.id ? 'Editar OS':'Cadastrar Nova OS'}}</div>\r\n                    <div class=\"card-body c-body2\">\r\n\r\n                        <ul *ngIf=\"chamado.id\" class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link active\" id=\"pills-os-tab\" data-toggle=\"pill\" href=\"#pills-os\" role=\"tab\" aria-controls=\"pills-os\" aria-selected=\"true\"\r\n                                    (click)=\"onClick()\"\r\n                                >Detalhes OS</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" id=\"pills-servico-tab\" data-toggle=\"pill\" href=\"#pills-servico\" role=\"tab\" aria-controls=\"pills-servico\" aria-selected=\"false\"\r\n                                    (click)=\"onClick()\"\r\n                                >Serviços</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content\" id=\"pills-tabContent\">\r\n                            <div class=\"tab-pane fade show active\" id=\"pills-os\" role=\"tabpanel\" aria-labelledby=\"pills-os-tab\">\r\n\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <label for=\"cliente_id\" class=\"control-label\">Cliente</label>\r\n                                        <input\r\n                                                required\r\n                                                ngui-auto-complete\r\n                                                [max-num-list]= \"5\"\r\n                                                [min-chars]=\"1\"\r\n                                                [accept-user-input]=\"false\"\r\n                                                class=\"form-control\"\r\n                                                id = \"cliente_id\"\r\n                                                name=\"cliente_id\"\r\n                                                placeholder=\"Search Cliente\"\r\n                                                [(ngModel)] = \"dadosCliente\"\r\n                                                [source] = \"nomeCliente\"\r\n                                                display-property-name=\"nome\"\r\n                                                [list-formatter]=\"renderCliente\"\r\n                                                [header-item-template]=\"clienteHeaderTemplate\"\r\n                                        />\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"form-group col-md-3\">\r\n                                        <label for=\"status\" class=\"control-label\">Status</label>\r\n                                        <select class=\"form-control\" id=\"status\" name=\"status\" required\r\n                                                [(ngModel)]=\"chamado.status\">\r\n                                            <option value=\"1\">Aberto</option>\r\n                                            <option value=\"2\">Fechado</option>\r\n                                            <option value=\"3\">Em Andamento</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-3\">\r\n                                        <label for=\"data_incial\" class=\"control-label\">Data Inicial</label>\r\n                                        <input class=\"form-control\" type=\"date\" id=\"data_incial\" name=\"data_incial\"\r\n                                               [(ngModel)]=\"chamado.data_inicial\" placeholder=\"Data Inicial\"\r\n                                               required\r\n                                        >\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-3\">\r\n                                        <label for=\"data_final\" class=\"control-label\">Data Final</label>\r\n                                        <input class=\"form-control\" type=\"date\" id=\"data_final\" name=\"data_final\"\r\n                                               [(ngModel)]=\"chamado.data_final\" placeholder=\"Data Final\"\r\n                                               required\r\n                                        >\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <label for=\"descricao\" class=\"control-label\">Descriçoes</label>\r\n                                        <textarea class=\"form-control\" rows=\"5\" id=\"descricao\" name=\"descricao\" [(ngModel)]=\"chamado.descricao\" placeholder=\"Descricao Produto/Serviço\"></textarea>\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <label for=\"defeito\" class=\"control-label\">Defeito</label>\r\n                                        <textarea class=\"form-control\" rows=\"5\" id=\"defeito\" name=\"defeito\" [(ngModel)]=\"chamado.defeito\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-row\">\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <label for=\"observacao\" class=\"control-label\">Observação</label>\r\n                                        <textarea class=\"form-control\" rows=\"5\" id=\"observacao\" name=\"observacao\" [(ngModel)]=\"chamado.observacao\" placeholder=\"Observação\"></textarea>\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-6\">\r\n                                        <label for=\"laudo\" class=\"control-label\">Laudo Tecnico</label>\r\n                                        <textarea class=\"form-control\" rows=\"5\" id=\"laudo\" name=\"laudo\" [(ngModel)]=\"chamado.laudo\"></textarea>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"pills-servico\" role=\"tabpanel\" aria-labelledby=\"pills-servico-tab\">\r\n\r\n                                <div class=\"form row\">\r\n                                    <div class=\"form-group col-md-9\">\r\n                                        <input\r\n                                                ngui-auto-complete\r\n                                                [max-num-list]=\"1\"\r\n                                                [min-chars]=\"1\"\r\n                                                [accept-user-input]=\"false\"\r\n                                                class=\"form-control\"\r\n                                                id=\"servico_id\"\r\n                                                name=\"servico_id\"\r\n                                                placeholder=\"Digite o nome do Serviço\"\r\n                                                [(ngModel)]=\"dadosServico\"\r\n                                                [source]=\"nomeServico\"\r\n                                                display-property-name=\"nome\"\r\n                                                [list-formatter]=\"renderServico\"\r\n                                                [header-item-template]=\"servicoHeaderTemplate\"\r\n                                        >\r\n                                    </div>\r\n                                    <div class=\"form-group col-md-3\">\r\n                                        <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"addServicoOs()\">\r\n                                            <img src=\"js/assets/svg/si-glyph-adicionar.svg\"/>\r\n                                            Adicionar Serviço</button>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <table class=\"table table-striped table-bordered table-sm\">\r\n                                    <thead>\r\n                                    <tr>\r\n                                        <th>Açoes</th>\r\n                                        <th>Serviço</th>\r\n                                        <th>Sub-Total</th>\r\n                                    </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                    <tr *ngFor=\"let servico of listServico\">\r\n                                        <td width=\"10%\">\r\n                                            <a (click)=\"destroyServicoOs(servico.id,i)\" class=\"badge b-delete badge-danger\">\r\n                                                <img src=\"js/assets/svg/si-glyph-delete.svg\" alt=\"\">\r\n                                            </a>\r\n                                        </td>\r\n                                        <td width=\"50%\">{{servico.nome}}</td>\r\n                                        <td>R$ {{servico.preco}}</td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td></td>\r\n                                        <td class=\"text-right\"><b>Valor Total :</b></td>\r\n                                        <td><b>R$ {{soma}}</b></td>\r\n                                    </tr>\r\n                                    </tbody>\r\n                                </table>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div [hidden]=\"escondeBtn\">\r\n                    <button *ngIf=\"chamado.id\" type=\"submit\" class=\"btn btn-outline-success\" (click)=\"updateChamado()\"\r\n                            [disabled]=\"!f.valid\"><img src=\"js/assets/svg/si-glyph-checked.svg\"/>\r\n                        Alterar\r\n                    </button>\r\n                    <button style=\"margin-left: 5px\" *ngIf=\"chamado.id\" type=\"submit\" class=\"btn btn-outline-info\" routerLink='/srcp/chamado/{{chamado.id}}/view'\r\n                            [disabled]=\"!f.valid\"><img src=\"js/assets/svg/si-glyph-view.svg\" alt=\"\"/>\r\n                        Visualizar Os\r\n                    </button>\r\n                    <button *ngIf=\"!chamado.id\" type=\"button\" class=\"btn btn-outline-success\" (click)=\"saveChamado()\"\r\n                            [disabled]=\"!f.valid\"><img src=\"js/assets/svg/si-glyph-arrow-forward.svg\"/>\r\n                        Continuar\r\n                    </button>\r\n                    <button style=\"margin-left: 5px\" class=\"btn btn-outline-dark\" routerLink=\"/srcp/chamado\">\r\n                        <img src=\"js/assets/svg/si-glyph-backward-page.svg\"/> Voltar\r\n                    </button>\r\n\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n\r\n</app-chamado-card>\r\n"

/***/ }),

/***/ "./src/app/srcp/chamado/chamado-new/chamado-new.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-new/chamado-new.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin-bottom: 100px; }\n\n.c2 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.c-header2 {\n  font-weight: bold;\n  color: rgba(103, 87, 57, 0.8);\n  padding: .60rem 1.25rem; }\n\n.control-label {\n  font-size: 13px;\n  font-weight: 700;\n  color: rgba(103, 87, 57, 0.8); }\n\n.ng-invalid.ng-touched:not(form) {\n  border: 1px solid red; }\n\n.format {\n  font-size: 14px;\n  font-weight: bold;\n  background-color: #bfbfbf;\n  padding: 5px; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  background-color: #959595; }\n\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\n  color: #fafafa;\n  font-size: 14px; }\n\n.mb-3 a {\n  border: 1px solid #8c8c8c;\n  font-size: 14px; }\n\n.mb-3 a:hover {\n  background-color: #8c8c8c;\n  text-decoration: underline; }\n\n.nav-pills .nav-link {\n  border-radius: .10rem; }\n\n.nav-link {\n  display: block;\n  padding: 0.4rem 0.5rem; }\n\ntable tr {\n  font-size: 12px; }\n\ntable thead {\n  background-color: #c6c6c6; }\n"

/***/ }),

/***/ "./src/app/srcp/chamado/chamado-new/chamado-new.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-new/chamado-new.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChamadoNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoNewComponent", function() { return ChamadoNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cliente/cliente.service */ "./src/app/srcp/cliente/cliente.service.ts");
/* harmony import */ var _chamado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chamado.service */ "./src/app/srcp/chamado/chamado.service.ts");
/* harmony import */ var _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../bootstrap/message.service */ "./src/app/srcp/bootstrap/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servico_servico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../servico/servico.service */ "./src/app/srcp/servico/servico.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChamadoNewComponent = /** @class */ (function () {
    function ChamadoNewComponent(dadosChamados, router, routeActive, listCliente, listaServico, messageService) {
        this.dadosChamados = dadosChamados;
        this.router = router;
        this.routeActive = routeActive;
        this.listCliente = listCliente;
        this.listaServico = listaServico;
        this.messageService = messageService;
        this.listServico = [];
        this.boolean = true;
        this.nomeServico = [];
        this.dadosServico = '';
        this.servico = {
            servico_id: ''
        };
        this.nomeCliente = [];
        this.dadosCliente = '';
        //
        this.chamado = {
            id: null,
            cliente_id: '',
            status: '',
            data_inicial: '',
            data_final: '',
            descricao: '',
            defeito: '',
            observacao: '',
            laudo: '',
            servico_id: '',
            acoes: false
        };
        this.clienteHeaderTemplate = "\n        <div class=\"form-row format\">\n                <div class=\"col-md-6\">Nome</div>\n                <div class=\"col-md-6\">Telefone</div>\n        </div>\n    ";
        this.servicoHeaderTemplate = "\n        <div class=\"form-row format\">\n                <div class=\"col-md-6\">Nome</div>\n                <div class=\"col-md-6\">Preco</div>\n        </div>\n    ";
        this.edit();
    }
    ChamadoNewComponent.prototype.renderCliente = function (data) {
        var html = "\n        <div class=\"form-row\">\n                <div class=\"col-md-6\">" + data.nome + "</div>\n                <div class=\"col-md-6\">" + data.telefone + "</div>\n        </div>\n        ";
        return html;
    };
    ChamadoNewComponent.prototype.renderServico = function (data) {
        var html = "\n        <div class=\"form-row\">\n                <div class=\"col-md-6\">" + data.nome + "</div>\n                <div class=\"col-md-6\">" + data.preco + "</div>\n        </div>\n        ";
        return html;
    };
    ChamadoNewComponent.prototype.ngOnInit = function () {
        this.getListaCliente();
        this.getListaServico();
        this.edit();
    };
    ChamadoNewComponent.prototype.edit = function () {
        var _this = this;
        this.routeActive.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.dadosChamados.edite(params['id'])
                    .subscribe(function (data) {
                    _this.chamado = data;
                    _this.dadosCliente = data['cliente'].nome;
                    _this.dadosServico = data['servicos'].nome;
                    _this.listServico = data['servicos'];
                    var i, st = 0;
                    for (i = 0; i < _this.listServico.length; i++) {
                        st += _this.listServico[i].preco;
                    }
                    _this.soma = st.toFixed(2);
                });
            }
        });
    };
    ChamadoNewComponent.prototype.getListaCliente = function () {
        var _this = this;
        this.listCliente.getClienteList().subscribe(function (data) {
            _this.nomeCliente = data;
        });
    };
    ChamadoNewComponent.prototype.updateChamado = function () {
        var _this = this;
        // delete this.chamado['cliente'];
        this.chamado.cliente_id = this.json(this.dadosCliente['id']);
        this.dadosChamados.update(this.chamado)
            .subscribe(function (data) {
            _this.messageService.messageChamado = 'OS Alterado com Sucesso!';
            _this.router.navigate(['/srcp/chamado']);
        });
    };
    ChamadoNewComponent.prototype.saveChamado = function () {
        var _this = this;
        this.chamado.cliente_id = this.json(this.dadosCliente['id']);
        this.dadosChamados.save(this.chamado)
            .subscribe(function (data) {
            _this.messageService.messageChamado = 'OS Salvo com sucesso.';
            _this.router.navigate(["/srcp/chamado/" + data.id + "/edit"]);
        });
    };
    ChamadoNewComponent.prototype.getListaServico = function () {
        var _this = this;
        this.listaServico.getListServico().subscribe(function (data) {
            _this.nomeServico = data;
        });
    };
    ChamadoNewComponent.prototype.addServicoOs = function () {
        var _this = this;
        this.chamado.servico_id = this.json(this.dadosServico['id']);
        this.chamado.acoes = true;
        this.dadosChamados.update(this.chamado).subscribe(function (data) {
            _this.listServico = data['servicos'];
            var i, st = 0;
            for (i = 0; i < _this.listServico.length; i++) {
                st += _this.listServico[i].preco;
            }
            _this.soma = st.toFixed(2);
            _this.router.navigate(["/srcp/chamado/" + data.id + "/edit"]);
        });
    };
    ChamadoNewComponent.prototype.destroyServicoOs = function (id) {
        var _this = this;
        this.chamado.servico_id = this.json(id);
        this.chamado.acoes = false;
        this.dadosChamados.destroyServico(this.chamado).subscribe(function (data) {
            _this.listServico = data['servicos'];
            var i, st = 0;
            for (i = 0; i < _this.listServico.length; i++) {
                st += _this.listServico[i].preco;
            }
            _this.soma = st.toFixed(2);
            _this.router.navigate(["/srcp/chamado/" + data.id + "/edit"]);
        });
    };
    ChamadoNewComponent.prototype.json = function (obj) {
        return JSON.stringify(obj, null, '  ');
    };
    ChamadoNewComponent.prototype.onClick = function () {
        this.escondeBtn = !this.escondeBtn;
    };
    ChamadoNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chamado-new',
            template: __webpack_require__(/*! ./chamado-new.component.html */ "./src/app/srcp/chamado/chamado-new/chamado-new.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./chamado-new.component.scss */ "./src/app/srcp/chamado/chamado-new/chamado-new.component.scss")]
        }),
        __metadata("design:paramtypes", [_chamado_service__WEBPACK_IMPORTED_MODULE_2__["ChamadoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"],
            _servico_servico_service__WEBPACK_IMPORTED_MODULE_5__["ServicoService"],
            _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], ChamadoNewComponent);
    return ChamadoNewComponent;
}());



/***/ }),

/***/ "./src/app/srcp/chamado/chamado-view/chamado-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-view/chamado-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chamado-card>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"form-row\">\r\n                <button style=\"margin-left: 5px;\" class=\"btn btn-outline-success\" routerLink=\"/srcp/chamado/{{os.id}}/edit\">\r\n                    <img src=\"js/assets/svg/si-glyph-edit.svg\"/> Editar\r\n                </button>\r\n                <button style=\"margin-left: 5px;\" class=\"btn btn-outline-success\" (click)=\"downloadChamado()\">\r\n                    <img src=\"js/assets/svg/si-glyph-print.svg\"/> Imprimir\r\n                </button>\r\n            </div>\r\n            <div class=\"card c2 bg-light\">\r\n                <div class=\"card-header c-header2\">Ordem de Serviço</div>\r\n                <div class=\"card-body c-body2\">\r\n\r\n                    <div class=\"form-row\">\r\n                        <div class=\"form-group col-md-4\">\r\n                            <img id=\"logo_os\" src=\"js/assets/img/logo_srcp_os.png\" alt=\"\">\r\n                        </div>\r\n                        <div class=\"form-group col-md-4\">\r\n                            <p>\r\n                            SOL REPAROS <br>\r\n                            End: <br>\r\n                            E-mail: <br>\r\n                            </p>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                    <div class=\"form-row \">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <h6>Cliente</h6>\r\n                            <p class=\"font-weight-light text-sm-left\">\r\n                                {{os.cliente.nome}}<br>\r\n                                {{os.cliente.endereco}}, {{os.cliente.numero}}<br>\r\n                                {{os.cliente.estado}}\r\n                            </p>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <h6>Descrição</h6>\r\n                            <p class=\"font-weight-light\">{{os.descricao}}</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <h6>Defeito</h6>\r\n                            <p class=\"font-weight-light\">{{os.defeito}}</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <h6>Laudo Tecnico </h6>\r\n                            <p class=\"font-weight-light\">{{os.laudo}}</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-md-12\">\r\n                            <h6>Observaçoes</h6>\r\n                            <p class=\"font-weight-light\">{{os.observacao}}</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <br>\r\n                    <br>\r\n                    <table class=\"table table-striped table-bordered table-sm\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>Serviço</th>\r\n                            <th>Sub-Total</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let servico of listServico\">\r\n                            <td width=\"50%\">{{servico.nome}}</td>\r\n                            <td>R$ {{servico.preco}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"text-right\"><b>Valor Total :</b></td>\r\n                            <td><b>R$ {{soma}}</b></td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                    <div class=\"form-row\" style=\"font-size: 18px\">\r\n                        <div class=\"col-md-12 text-right\">\r\n                            <b>Valor Total : R$ {{soma}}</b>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <br>\r\n            <br>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"content\" #content hidden>\r\n        <h1>O Titlo</h1>\r\n\r\n        <p>Testando O a Geraçao de PDF</p>\r\n    </div>\r\n\r\n</app-chamado-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/srcp/chamado/chamado-view/chamado-view.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-view/chamado-view.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-right: 0px;\n  padding-left: 0px;\n  margin-top: 50px;\n  margin-bottom: 50px; }\n\n.c2 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.c-header2 {\n  font-weight: bold;\n  color: rgba(103, 87, 57, 0.8);\n  padding: .60rem 1.25rem; }\n\n.c-body2 span {\n  font-size: 12px; }\n\n.c-body2 #logo_os {\n  width: 200px;\n  height: 150px; }\n\ntable tr {\n  font-size: 12px; }\n\ntable thead {\n  background-color: #c6c6c6; }\n"

/***/ }),

/***/ "./src/app/srcp/chamado/chamado-view/chamado-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/chamado/chamado-view/chamado-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChamadoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoViewComponent", function() { return ChamadoViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chamado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chamado.service */ "./src/app/srcp/chamado/chamado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChamadoViewComponent = /** @class */ (function () {
    function ChamadoViewComponent(chamadoService, routeActive) {
        this.chamadoService = chamadoService;
        this.routeActive = routeActive;
        this.listServico = [];
        this.os = {
            id: null,
            cliente_id: '',
            data_inicial: '',
            data_final: '',
            status: '',
            descricao: '',
            defeito: '',
            observacao: '',
            laudo: '',
            created_at: '',
            updated_at: '',
            cliente: {
                id: '',
                nome: '',
                cpf_cnpj: '',
                telefone: '',
                celular: '',
                email: '',
                cep: '',
                endereco: '',
                numero: '',
                bairro: '',
                cidade: '',
                estado: '',
                created_at: '',
                updated_at: ''
            }
        };
    }
    ChamadoViewComponent.prototype.ngOnInit = function () {
        this.view();
    };
    ChamadoViewComponent.prototype.view = function () {
        var _this = this;
        this.routeActive.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.chamadoService.view(params['id'])
                    .subscribe(function (data) {
                    _this.os = data;
                    _this.listServico = data['servicos'];
                    var i, st = 0;
                    for (i = 0; i < _this.listServico.length; i++) {
                        st += _this.listServico[i].preco;
                    }
                    _this.soma = st.toFixed(2);
                });
            }
        });
    };
    ChamadoViewComponent.prototype.downloadChamado = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__('p', 'pt', 'a4');
        var specialElementHandlers = {
            '#editor': function (element, renderer) {
                return true;
            }
        };
        var content = this.content.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 190,
            'elementHandlers': specialElementHandlers
        });
        doc.save('teste.pdf');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChamadoViewComponent.prototype, "content", void 0);
    ChamadoViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chamado-view',
            template: __webpack_require__(/*! ./chamado-view.component.html */ "./src/app/srcp/chamado/chamado-view/chamado-view.component.html"),
            styles: [__webpack_require__(/*! ./chamado-view.component.scss */ "./src/app/srcp/chamado/chamado-view/chamado-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_chamado_service__WEBPACK_IMPORTED_MODULE_1__["ChamadoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChamadoViewComponent);
    return ChamadoViewComponent;
}());



/***/ }),

/***/ "./src/app/srcp/chamado/chamado.service.ts":
/*!*************************************************!*\
  !*** ./src/app/srcp/chamado/chamado.service.ts ***!
  \*************************************************/
/*! exports provided: ChamadoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChamadoService", function() { return ChamadoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChamadoService = /** @class */ (function () {
    function ChamadoService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/srcp/chamado';
        this.urlLista = 'http://localhost:8000/srcp/chamado/lista';
        this.urlPdf = 'http://localhost:8000/srcp/chamado/gerarpdf';
    }
    ChamadoService.prototype.getChamadoList = function () {
        return this.http.get(this.url);
    };
    ChamadoService.prototype.getChamadoListDados = function (data) {
        return this.http.post(this.urlLista, data);
    };
    ChamadoService.prototype.gerarPdf = function (data) {
        return this.http.post(this.urlPdf, data);
    };
    ChamadoService.prototype.view = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    ChamadoService.prototype.save = function (data) {
        return this.http.post(this.url, data);
    };
    ChamadoService.prototype.edite = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    ChamadoService.prototype.update = function (data) {
        return this.http.put(this.url + "/" + data.id, data);
    };
    ChamadoService.prototype.destroyServico = function (data) {
        return this.http.put(this.url + "/" + data.id, data);
    };
    ChamadoService.prototype.destroy = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    ChamadoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChamadoService);
    return ChamadoService;
}());



/***/ }),

/***/ "./src/app/srcp/chamado/filter.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/srcp/chamado/filter.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, search) {
        if (!search) {
            return value;
        }
        var solution = value.filter(function (v) {
            if (!v) {
                return;
            }
            return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return solution;
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'seachFilter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/srcp/cliente/cliente-card/cliente-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-card/cliente-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-ligth\">\r\n  <div class=\"card-header\"> Home > Cliente</div>\r\n  <div class=\"card-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/srcp/cliente/cliente-card/cliente-card.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-card/cliente-card.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid .row-fluid {\n  margin-top: 20px;\n  font-family: Helvetica, Roboto, Arial, sans-serif; }\n\n.card {\n  position: relative;\n  border-radius: 0px;\n  border-left: none;\n  margin-top: -44px;\n  margin-left: 220px;\n  min-height: 850px; }\n\n.card .card-header {\n    background-color: #FFFFFF;\n    padding: 0.6rem 1.25rem; }\n\n.card .card-body {\n    padding: 0;\n    padding: 0px 20px;\n    background-color: #F0F1F2; }\n"

/***/ }),

/***/ "./src/app/srcp/cliente/cliente-card/cliente-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-card/cliente-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClienteCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteCardComponent", function() { return ClienteCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClienteCardComponent = /** @class */ (function () {
    function ClienteCardComponent() {
    }
    ClienteCardComponent.prototype.ngOnInit = function () {
    };
    ClienteCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-card',
            template: __webpack_require__(/*! ./cliente-card.component.html */ "./src/app/srcp/cliente/cliente-card/cliente-card.component.html"),
            styles: [__webpack_require__(/*! ./cliente-card.component.scss */ "./src/app/srcp/cliente/cliente-card/cliente-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ClienteCardComponent);
    return ClienteCardComponent;
}());



/***/ }),

/***/ "./src/app/srcp/cliente/cliente-list/cliente-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-list/cliente-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cliente-card>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                    <button class=\"btn btn-outline-success\" routerLink=\"/srcp/cliente/new\">\r\n                        <img src=\"js/assets/svg/si-glyph-person-plus.svg\"/> Novo Cliente\r\n                    </button>\r\n                </div>\r\n                <div *ngIf=\"message\" class=\"col-md-8 text-left\">\r\n                    <app-alert [timeout]=\"4000\">{{message}}</app-alert>\r\n                </div>\r\n            </div>\r\n            <div class=\"card c2 bg-light\">\r\n                <!--<div class=\"card-header c-header2\">Clientes</div>-->\r\n                <div class=\"card-body c-body2\">\r\n                    <table id=\"mytable\" class=\"table table-sm display\" data-order='[[ 0, \"desc\" ]]'>\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Nome</th>\r\n                            <th>CPF/CNPJ</th>\r\n                            <th>Celular</th>\r\n                            <th>Email</th>\r\n                            <th>Ação</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody id=\"tbC\" hidden>\r\n                        <tr *ngFor=\"let cliente of listCliente; let i = index\">\r\n                            <td>{{cliente.id}}</td>\r\n                            <td>{{cliente.nome}}</td>\r\n                            <td>{{cliente.cpf_cnpj}}</td>\r\n                            <td>{{cliente.celular}}</td>\r\n                            <td>{{cliente.email}}</td>\r\n                            <td class=\"bt_a\">\r\n                                <a routerLink='/srcp/cliente/{{cliente.id}}/view' class=\"badge b-view badge-secundario\">\r\n                                    <img src=\"js/assets/svg/si-glyph-view.svg\" alt=\"\">\r\n                                </a>\r\n                                <a routerLink='/srcp/cliente/{{cliente.id}}/edit' class=\"badge b-edit badge-info\">\r\n                                    <img src=\"js/assets/svg/si-glyph-edit.svg\" alt=\"\">\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" (click)=\"destroy(cliente.id,i)\" class=\"badge b-delete badge-danger\">\r\n                                    <img src=\"js/assets/svg/si-glyph-delete.svg\" alt=\"\">\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</app-cliente-card>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/srcp/cliente/cliente-list/cliente-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-list/cliente-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin: 0;\n  margin-top: 25px;\n  padding: 0; }\n  .container-fluid .row-fluid {\n    font-family: Tahoma, Arial, sans-serif; }\n  .table {\n  padding: 0;\n  margin: 0; }\n  .table thead th {\n    font-size: 12px;\n    text-align: center;\n    color: rgba(103, 87, 57, 0.8);\n    background-color: #F0F1F2;\n    padding: .60rem; }\n  .table tr td {\n    font-size: 12px;\n    font-family: Arial, Helvetica, sans-serif; }\n  .table tr td .badge {\n      display: inline-block;\n      padding: .30em .5em;\n      font-size: 75%;\n      font-weight: 700;\n      line-height: 1;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border-radius: 0.2rem; }\n  .table tr td .b-edit {\n      background-color: rgba(78, 216, 240, 0.18);\n      border: 1px solid #3ea5bc; }\n  .table tr td .b-edit:hover {\n      background-color: #4cdaf2; }\n  .table tr td .b-view {\n      background-color: #EEEEEE;\n      border: 1px solid #888a88; }\n  .table tr td .b-view:hover {\n      background-color: #858489; }\n  .table tr td .b-delete {\n      background-color: rgba(238, 0, 10, 0.16);\n      border: 1px solid #d10009; }\n  .table tr td .b-delete:hover {\n      background-color: rgba(255, 25, 23, 0.67); }\n  .table-sm td {\n  padding: 0.4rem 0.8rem; }\n  .c2 {\n  margin-top: 20px; }\n  .c2 .c-header2 {\n    background-color: #e3e3e3;\n    font-weight: bold;\n    color: rgba(16, 16, 16, 0.59);\n    border-bottom: none;\n    padding: 4px 16px 0px; }\n  .c2 .c-body2 {\n    padding: 0;\n    border-bottom: none; }\n  .c2 .bg-light {\n    background-color: #e3e3e3; }\n  .bt_a a {\n  margin-left: 6px; }\n"

/***/ }),

/***/ "./src/app/srcp/cliente/cliente-list/cliente-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-list/cliente-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClienteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteListComponent", function() { return ClienteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cliente.service */ "./src/app/srcp/cliente/cliente.service.ts");
/* harmony import */ var _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bootstrap/message.service */ "./src/app/srcp/bootstrap/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClienteListComponent = /** @class */ (function () {
    function ClienteListComponent(clienteService, messegeServece, router) {
        this.clienteService = clienteService;
        this.messegeServece = messegeServece;
        this.router = router;
        this.listCliente = [];
        this.mytable = '';
        this.message = null;
        this.message = this.messegeServece.messageCliente;
    }
    ClienteListComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            this.mytable = $('#mytable').DataTable({
                scrollY: 400,
                'oLanguage': {
                    'sLengthMenu': 'Mostrar _MENU_ itens por Pag',
                    'sZeroRecords': 'Nenhum registro encontrado',
                    'sInfo': 'Mostrando _START_ ao _END_ de _TOTAL_ itens',
                    'sInfoEmpty': 'Mostrando 0 ao 0 de 0 itens',
                    'sInfoFiltered': '(filtrado de _MAX_ itens)',
                    'sSearch': 'Procurar: ',
                    'oPaginate': {
                        'sFirst': '<<',
                        'sPrevious': '<',
                        'sNext': '>',
                        'sLast': '>>'
                    }
                }
            });
            $('.ui-widget-header').css('border', '1px solid #e3e3e3');
            $('#mytable_filter input').attr('size', 30);
            $('#mytable_filter').css('padding-top', '4px');
            $(' label').css({ 'margin-bottom': '4px', 'font-size': '14px' });
            $('.dataTables_info').css({ 'font-size': '14px' });
            $('.dataTables_paginate').css({ 'float': 'none', 'font-size': '14px' });
            $('table.dataTable.no-footer').css({ 'border-bottom': 'none' });
            $('.dataTables_wrapper .ui-toolbar').css('padding', '2px 8px');
            $('#mytable_length').css('padding', '8px 8px 2px');
            $('#tbC').removeAttr('hidden', false);
        }, 1500);
        this.getClienteList();
    };
    ClienteListComponent.prototype.getClienteList = function () {
        var _this = this;
        this.clienteService.getClienteList().subscribe(function (data) {
            _this.listCliente = data;
        });
    };
    ClienteListComponent.prototype.destroy = function (id, index) {
        var _this = this;
        if (confirm('Deseja Excluir esse Cliente?')) {
            this.clienteService.destroy(id).subscribe(function () {
                _this.listCliente.splice(index, 1);
            });
        }
    };
    ClienteListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-list',
            template: __webpack_require__(/*! ./cliente-list.component.html */ "./src/app/srcp/cliente/cliente-list/cliente-list.component.html"),
            styles: [__webpack_require__(/*! ./cliente-list.component.scss */ "./src/app/srcp/cliente/cliente-list/cliente-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"],
            _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClienteListComponent);
    return ClienteListComponent;
}());



/***/ }),

/***/ "./src/app/srcp/cliente/cliente-new/cliente-new.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-new/cliente-new.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cliente-card>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <form action=\"\" #f=\"ngForm\">\r\n                <input type=\"hidden\" name=\"id\" [(ngModel)]=\"cliente.id\">\r\n                <div class=\"card c2 bg-light\">\r\n                    <div class=\"card-header c-header2\">{{cliente.id ? 'Alterar Cliente': 'Novo Cliente'}}</div>\r\n                    <div class=\"card-body c-body2\">\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-3\">\r\n                                <label for=\"cpf_cnpj\" class=\"control-label\">CPF/CNPJ</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"cpf_cnpj\" name=\"cpf_cnpj\"\r\n                                       [(ngModel)]=\"cliente.cpf_cnpj\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"nome\" class=\"control-label\">Nome</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"nome\" name=\"nome\"\r\n                                       [(ngModel)]=\"cliente.nome\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                            <div class=\"form-group col-md-3\">\r\n                                <label for=\"telefone\" class=\"control-label\">Telefone</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"telefone\" name=\"telefone\"\r\n                                       [(ngModel)]=\"cliente.telefone\"\r\n                                       required\r\n                                       [dropSpecialCharacters]=\"false\"\r\n                                       mask = \"(00) 00000-0000\"\r\n                                >\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"email\" class=\"control-label\">Email</label>\r\n                                <input class=\"form-control\" type=\"email\" id=\"email\" name=\"email\"\r\n                                       [(ngModel)]=\"cliente.email\"\r\n                                       required email\r\n                                >\r\n                            </div>\r\n\r\n                            <div class=\"form-group col-md-3\">\r\n                                <label for=\"celular\" class=\"control-label\">Celular</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"celular\" name=\"celular\"\r\n                                       [(ngModel)]=\"cliente.celular\"\r\n                                       required\r\n                                       [dropSpecialCharacters]=\"false\"\r\n                                       mask =\"(00) 00000-0000\"\r\n                                >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-3\">\r\n                                <label for=\"cep\" class=\"control-label\">CEP</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"cep\" name=\"cep\"\r\n                                       mask = \"00.000-000\"\r\n                                       [(ngModel)]=\"cliente.cep\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                            <div class=\"form-group col-md-1\">\r\n                                <label for=\"numero\" class=\"control-label\">Numero</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"numero\" name=\"numero\"\r\n                                       [(ngModel)]=\"cliente.numero\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n\r\n                            <div class=\"form-group col-md-3\">\r\n                                <label for=\"endereco\" class=\"control-label\">Endereço</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"endereco\" name=\"endereco\"\r\n                                       [(ngModel)]=\"cliente.endereco\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-3\">\r\n                                <label for=\"cidade\" class=\"control-label\">Cidade</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"cidade\" name=\"cidade\"\r\n                                       [(ngModel)]=\"cliente.cidade\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                            <div class=\"form-group col-md-1\">\r\n                                <label for=\"estado\" class=\"control-label\">Estado</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"estado\" name=\"estado\"\r\n                                       [(ngModel)]=\"cliente.estado\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                            <div class=\"form-group col-md-3\">\r\n                                <label for=\"bairro\" class=\"control-label\">Bairro</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"bairro\" name=\"bairro\"\r\n                                       [(ngModel)]=\"cliente.bairro\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button *ngIf=\"cliente.id\" type=\"button\" class=\"btn btn-outline-success\" (click)=\"update()\"\r\n                        [disabled]=\"!f.valid\"><img src=\"js/assets/svg/si-glyph-floppy-disk.svg\"/>\r\n                    Alterar Cliente\r\n                </button>\r\n                <button *ngIf=\"!cliente.id\" type=\"button\" class=\"btn btn-outline-success\" (click)=\"save()\"\r\n                        ><img src=\"js/assets/svg/si-glyph-floppy-disk.svg\"/>\r\n                    Salvar Cliente\r\n                </button>\r\n                <button style=\"margin-left: 5px\" class=\"btn btn-outline-secondary\" routerLink=\"/srcp/cliente\">\r\n                    <img src=\"js/assets/svg/si-glyph-backward-page.svg\"/> Voltar\r\n                </button>\r\n            </form>\r\n        </div>\r\n\r\n    </div>\r\n</app-cliente-card>\r\n\r\n<!--<div class=\"card c1 bg-ligth\">-->\r\n<!--<div class=\"card-header c-header1\"> Home > Cliente</div>-->\r\n<!--<div class=\"card-body c-body1\">-->\r\n\r\n\r\n<!--</div>-->\r\n<!--</div>-->"

/***/ }),

/***/ "./src/app/srcp/cliente/cliente-new/cliente-new.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-new/cliente-new.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c2 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.c-header2 {\n  font-weight: bold;\n  color: rgba(103, 87, 57, 0.8);\n  padding: .60rem 1.25rem; }\n\n.control-label {\n  font-size: 13px;\n  font-weight: 700;\n  color: rgba(103, 87, 57, 0.8); }\n\n.ng-invalid.ng-touched:not(form) {\n  border: 1px solid red; }\n"

/***/ }),

/***/ "./src/app/srcp/cliente/cliente-new/cliente-new.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-new/cliente-new.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClienteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteNewComponent", function() { return ClienteNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cliente.service */ "./src/app/srcp/cliente/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../bootstrap/message.service */ "./src/app/srcp/bootstrap/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClienteNewComponent = /** @class */ (function () {
    function ClienteNewComponent(clienteService, router, routeActive, messageService) {
        this.clienteService = clienteService;
        this.router = router;
        this.routeActive = routeActive;
        this.messageService = messageService;
        this.cliente = {
            id: null,
            nome: '',
            cpf_cnpj: '',
            telefone: '',
            celular: '',
            email: '',
            cep: '',
            endereco: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: ''
        };
    }
    ClienteNewComponent.prototype.ngOnInit = function () {
        this.edit();
    };
    ClienteNewComponent.prototype.edit = function () {
        var _this = this;
        this.routeActive.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.clienteService.edite(params['id'])
                    .subscribe(function (data) {
                    _this.cliente = data;
                });
            }
        });
    };
    ClienteNewComponent.prototype.update = function () {
        var _this = this;
        this.clienteService.update(this.cliente)
            .subscribe(function (data) {
            _this.messageService.messageCliente = 'Cliente Alterado com Sucesso!';
            _this.router.navigate(['/srcp/cliente']);
        });
    };
    ClienteNewComponent.prototype.save = function () {
        var _this = this;
        this.clienteService.save(this.cliente)
            .subscribe(function (data) {
            _this.messageService.messageCliente = 'Cliente salvo com Sucesso!';
            _this.router.navigate(['/srcp/cliente']);
        });
    };
    ClienteNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-new',
            template: __webpack_require__(/*! ./cliente-new.component.html */ "./src/app/srcp/cliente/cliente-new/cliente-new.component.html"),
            styles: [__webpack_require__(/*! ./cliente-new.component.scss */ "./src/app/srcp/cliente/cliente-new/cliente-new.component.scss")]
        }),
        __metadata("design:paramtypes", [_cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], ClienteNewComponent);
    return ClienteNewComponent;
}());



/***/ }),

/***/ "./src/app/srcp/cliente/cliente-view/cliente-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-view/cliente-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cliente-card>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card c2 bg-light\">\r\n                    <div class=\"card-header c-header2\">Dados do Pessoais</div>\r\n                    <div class=\"card-body c-body2\">\r\n\r\n                        <table class=\"table table-bordered\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td class=\"col\">Nome</td>\r\n                                <td class=\"col2\">{{ cliente.nome }}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col\">CPF/CNPJ</td>\r\n                                <td class=\"col2\">{{cliente.cpf_cnpj}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col\">Telefone</td>\r\n                                <td class=\"col2\">{{cliente.telefone}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col\">Celular</td>\r\n                                <td class=\"col2\">{{cliente.celular}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col\">Email</td>\r\n                                <td class=\"col2\">{{cliente.email}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card c2 bg-light\">\r\n                    <div class=\"card-header c-header2\">Endereço</div>\r\n                    <div class=\"card-body c-body2\">\r\n\r\n                        <table class=\"table table-bordered\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td class=\"col\">Endereco</td>\r\n                                <td class=\"col2\">{{cliente.endereco}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col\">Numero</td>\r\n                                <td class=\"col2\">{{cliente.numero}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col\">Bairro</td>\r\n                                <td class=\"col2\">{{cliente.bairro}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col\">Cidade</td>\r\n                                <td class=\"col2\">{{cliente.cidade}}</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"col\">Estado</td>\r\n                                <td class=\"col2\">{{cliente.estado}}</td>\r\n                            </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <button routerLink='/srcp/cliente/{{cliente.id}}/edit' class=\"btn btn-outline-success\">\r\n            <img src=\"js/assets/svg/si-glyph-edit.svg\" alt=\"\"> Editar Cliente\r\n        </button>\r\n        <button style=\"margin-left: 5px\" class=\"btn btn-outline-secondary\" routerLink=\"/srcp/cliente\">\r\n            <img src=\"js/assets/svg/si-glyph-backward-page.svg\"/> Voltar\r\n        </button>\r\n    </div>\r\n</app-cliente-card>\r\n\r\n<!--<div class=\"card c1 bg-ligth\">-->\r\n    <!--<div class=\"card-header c-header1\"> Home > Cliente</div>-->\r\n    <!--<div class=\"card-body c-body1\">-->\r\n\r\n\r\n\r\n\r\n    <!--</div>-->\r\n<!--</div>-->"

/***/ }),

/***/ "./src/app/srcp/cliente/cliente-view/cliente-view.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-view/cliente-view.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c2 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.c-header2 {\n  font-weight: bold;\n  color: rgba(103, 87, 57, 0.8);\n  padding: .60rem 1.25rem; }\n\n.c-body2 .table .col {\n  width: 30%;\n  color: #747373;\n  font-weight: bold;\n  font-size: 13px; }\n\n.c-body2 .table .col2 {\n  color: #8a8989;\n  font-size: 13px; }\n"

/***/ }),

/***/ "./src/app/srcp/cliente/cliente-view/cliente-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/cliente/cliente-view/cliente-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClienteViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteViewComponent", function() { return ClienteViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cliente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cliente.service */ "./src/app/srcp/cliente/cliente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClienteViewComponent = /** @class */ (function () {
    function ClienteViewComponent(clienteService, routeActive) {
        this.clienteService = clienteService;
        this.routeActive = routeActive;
        this.cliente = {
            id: null,
            nome: '',
            cpf_cnpj: '',
            telefone: '',
            celular: '',
            email: '',
            cep: '',
            endereco: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: ''
        };
    }
    ClienteViewComponent.prototype.ngOnInit = function () {
        this.view();
    };
    ClienteViewComponent.prototype.view = function () {
        var _this = this;
        this.routeActive.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.clienteService.view(params['id'])
                    .subscribe(function (data) {
                    _this.cliente = data;
                });
            }
        });
    };
    ClienteViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cliente-view',
            template: __webpack_require__(/*! ./cliente-view.component.html */ "./src/app/srcp/cliente/cliente-view/cliente-view.component.html"),
            styles: [__webpack_require__(/*! ./cliente-view.component.scss */ "./src/app/srcp/cliente/cliente-view/cliente-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_cliente_service__WEBPACK_IMPORTED_MODULE_1__["ClienteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ClienteViewComponent);
    return ClienteViewComponent;
}());



/***/ }),

/***/ "./src/app/srcp/cliente/cliente.service.ts":
/*!*************************************************!*\
  !*** ./src/app/srcp/cliente/cliente.service.ts ***!
  \*************************************************/
/*! exports provided: ClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteService", function() { return ClienteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/srcp/cliente';
    }
    ClienteService.prototype.getClienteList = function () {
        return this.http.get(this.url);
    };
    ClienteService.prototype.view = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    ClienteService.prototype.edite = function (id) {
        return this.http.get(this.url + "/" + id + "/edit");
    };
    ClienteService.prototype.update = function (data) {
        return this.http.put(this.url + "/" + data.id, data);
    };
    ClienteService.prototype.save = function (data) {
        return this.http.post(this.url, data);
    };
    ClienteService.prototype.destroy = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    ClienteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "./src/app/srcp/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/srcp/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card c1 bg-ligth\">\r\n    <div class=\"card-header c-header1\"> Home </div>\r\n    <div class=\"card-body c-body1\">\r\n\r\n        <h1>Tela Home</h1>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!--<app-layout-body>-->\r\n\r\n<!--</app-layout-body>-->"

/***/ }),

/***/ "./src/app/srcp/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/srcp/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid .row-fluid {\n  margin-top: 20px;\n  font-family: Helvetica, Roboto, Arial, sans-serif; }\n\n.c1 {\n  position: relative;\n  border-radius: 0px;\n  border-left: none;\n  margin-top: -44px;\n  margin-left: 220px;\n  min-height: 850px; }\n\n.c1 .c-header1 {\n    background-color: #FFFFFF;\n    padding: 0.6rem 1.25rem; }\n\n.c1 .c-body1 {\n    padding: 0;\n    padding-left: 20px;\n    padding-right: 20px;\n    background-color: #F0F1F2; }\n"

/***/ }),

/***/ "./src/app/srcp/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/srcp/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/srcp/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/srcp/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/srcp/lista/lista.component.html":
/*!*************************************************!*\
  !*** ./src/app/srcp/lista/lista.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-chamado-card>\r\n    <div class=\"container-fluid text-center\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">Impressão dos Dados de Clientes</div>\r\n                    <div class=\"card-body\">\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <input class=\"form-control\" type=\"date\" id=\"data_incial\" name=\"data_incial\"\r\n                                       [(ngModel)]=\"listar.data_inicial\" placeholder=\"Data Inicial\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                            <div class=\"form-group col-md-6\">\r\n                                <input class=\"form-control\" type=\"date\" id=\"data_final\" name=\"data_final\"\r\n                                       [(ngModel)]=\"listar.data_final\" placeholder=\"Data Final\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6 text-left\">\r\n                                <button class=\"btn btn-outline-success\" routerLink=\"/srcp/chamado\">\r\n                                    <img src=\"js/assets/svg/si-glyph-adicionar.svg\"/> Voltar\r\n                                </button>\r\n                                <button style=\"margin-left: 10px\" class=\"btn btn-outline-success\" (click)=\"getListaPage()\">\r\n                                    <img src=\"js/assets/svg/si-glyph-print.svg\"/> Imprimir\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <br>\r\n    </div>\r\n</app-chamado-card>\r\n"

/***/ }),

/***/ "./src/app/srcp/lista/lista.component.scss":
/*!*************************************************!*\
  !*** ./src/app/srcp/lista/lista.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin: 0;\n  margin-top: 25px;\n  padding: 0; }\n  .container-fluid .row-fluid {\n    font-family: Tahoma, Arial, sans-serif; }\n  .container-fluid .row-fluid .testeB {\n      background-color: #8a8a8a; }\n  .table {\n  padding: 0;\n  margin: 0; }\n  .table thead th {\n    font-size: 12px;\n    text-align: center;\n    color: rgba(103, 87, 57, 0.8);\n    background-color: #F0F1F2;\n    padding: .60rem; }\n  .table tr td {\n    font-size: 12px;\n    font-family: Arial, Helvetica, sans-serif; }\n  .table tr td .badge {\n      display: inline-block;\n      padding: .30em .5em;\n      font-size: 75%;\n      font-weight: 700;\n      line-height: 1;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border-radius: 0.2rem; }\n  .table tr td .b-edit {\n      background-color: rgba(78, 216, 240, 0.18);\n      border: 1px solid #3ea5bc; }\n  .table tr td .b-edit:hover {\n      background-color: #4cdaf2; }\n  .table tr td .b-view {\n      background-color: #EEEEEE;\n      border: 1px solid #888a88; }\n  .table tr td .b-view:hover {\n      background-color: #858489; }\n  .table tr td .b-delete {\n      background-color: rgba(238, 0, 10, 0.16);\n      border: 1px solid #d10009; }\n  .table tr td .b-delete:hover {\n      background-color: rgba(255, 25, 23, 0.67); }\n  .table-sm td {\n  padding: 0.4rem 0.8rem; }\n  .c2 {\n  margin-top: 20px; }\n  .c2 .c-header2 {\n    background-color: #e3e3e3;\n    font-weight: bold;\n    color: rgba(16, 16, 16, 0.59);\n    border-bottom: none;\n    padding: 4px 16px 0px; }\n  .c2 .c-body2 {\n    padding: 0;\n    border-bottom: none; }\n  .c2 .bg-light {\n    background-color: #e3e3e3; }\n  .data-row {\n  margin: -2px -5px; }\n  .bt_a a {\n  margin-left: 6px; }\n"

/***/ }),

/***/ "./src/app/srcp/lista/lista.component.ts":
/*!***********************************************!*\
  !*** ./src/app/srcp/lista/lista.component.ts ***!
  \***********************************************/
/*! exports provided: ListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaComponent", function() { return ListaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chamado_chamado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chamado/chamado.service */ "./src/app/srcp/chamado/chamado.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// declare var xepOnline: any;
var ListaComponent = /** @class */ (function () {
    function ListaComponent(listaDados, router) {
        this.listaDados = listaDados;
        this.router = router;
        this.listarDados = [];
        this.data = [];
        this.listar = {
            data_inicial: '',
            data_final: ''
        };
    }
    ListaComponent.prototype.ngOnInit = function () {
    };
    ListaComponent.prototype.getListaPage = function () {
        var _this = this;
        this.doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__();
        this.listaDados.getChamadoListDados(this.listar).subscribe(function (data) {
            console.log(data[0]['servicos']);
            _this.listarDados = data;
            var paginas = Math.floor(data.length / 5);
            var resultado = (data.length - Math.trunc(data.length / 5) * 5);
            var dadosTotal = data.length;
            // console.log('resto :'+ paginas + ' resultado : ' + resultado + 'total :'+ data.length)
            _this.doc.setFontSize(14);
            _this.doc.setFont('verdana');
            _this.doc.setFontType('bold');
            _this.doc.text(10, 15, 'Listagem de Clientes/Fornecedores');
            var y = 25;
            var x = 10;
            var pag = 0;
            for (var i = 0; i < dadosTotal; i++) {
                pag = pag + 1;
                _this.constroiPdf(data, i, x, y);
                y = y + 50;
                if (pag >= 5) {
                    _this.doc.addPage();
                    y = 25;
                    x = 10;
                    pag = 0;
                }
            }
            _this.doc.save('teste.pdf');
        });
    };
    ListaComponent.prototype.constroiPdf = function (data, i, x, y) {
        var codigo = data[i]['cliente'].celular.replace(/[^\d]+/g, '');
        var dataInc = data[i].data_inicial.split('-');
        var dataFim = data[i].data_final.split('-');
        var dataInc = dataInc[2] + '/' + dataInc[1] + '/' + dataInc[0];
        var dataFim = dataFim[2] + '/' + dataFim[1] + '/' + dataFim[0];
        this.doc.setDrawColor(0);
        this.doc.setFillColor(200, 200, 200);
        this.doc.rect(x, y + 1, 190, 5, 'FD');
        this.doc.setFontSize(9);
        this.doc.setFont('verdana');
        this.doc.setFontType('bold');
        this.doc.text(x + 1, y + 5, 'Codigo :');
        this.doc.setFontType('');
        this.doc.text(x + 15, y + 5, codigo);
        this.doc.setFontType('bold');
        this.doc.text(x + 1, y + 12, 'Nome :');
        this.doc.setFontType('');
        this.doc.text(x + 13, y + 12, data[i]['cliente'].nome);
        this.doc.setFontType('bold');
        this.doc.text(x + 110, y + 12, 'Dt.Inicial :');
        this.doc.setFontType('');
        this.doc.text(x + 130, y + 12, dataInc);
        this.doc.setFontType('bold');
        this.doc.text(x + 153, y + 12, 'Dt.Final :');
        this.doc.setFontType('');
        this.doc.text(x + 171, y + 12, dataFim);
        this.doc.setFontType('bold');
        this.doc.text(x + 1, y + 18, 'Endereco :');
        this.doc.setFontType('');
        this.doc.text(x + 18, y + 18, data[i]['cliente'].endereco);
        this.doc.setFontType('bold');
        this.doc.text(x + 110, y + 18, 'CEP :');
        this.doc.setFontType('');
        this.doc.text(x + 119, y + 18, data[i]['cliente'].cep);
        this.doc.setFontType('bold');
        this.doc.text(x + 1, y + 24, 'Estado :');
        this.doc.setFontType('');
        this.doc.text(x + 14, y + 24, data[i]['cliente'].estado);
        this.doc.setFontType('bold');
        this.doc.text(x + 34, y + 24, 'Cidade :');
        this.doc.setFontType('');
        this.doc.text(x + 48, y + 24, data[i]['cliente'].cidade);
        this.doc.setFontType('bold');
        this.doc.text(x + 80, y + 24, 'Bairro :');
        this.doc.setFontType('');
        this.doc.text(x + 93, y + 24, data[i]['cliente'].bairro);
        this.doc.setFontType('bold');
        this.doc.text(x + 1, y + 30, 'Telefone :');
        this.doc.setFontType('');
        this.doc.text(x + 16, y + 30, data[i]['cliente'].telefone);
        this.doc.setFontType('bold');
        this.doc.text(x + 80, y + 30, 'Celular :');
        this.doc.setFontType('');
        this.doc.text(x + 95, y + 30, data[i]['cliente'].celular);
        this.doc.setFontType('bold');
        this.doc.text(x + 1, y + 36, 'CPF :');
        this.doc.setFontType('');
        this.doc.text(x + 12, y + 36, data[i]['cliente'].cpf_cnpj);
        this.doc.setFontType('bold');
        this.doc.text(x + 1, y + 42, 'Email :');
        this.doc.setFontType('');
        this.doc.text(x + 13, y + 42, data[i]['cliente'].email);
        if (data[i]['servicos'].length > 0) {
            var b = 25;
            var total = 0;
            this.doc.setFontType('bold');
            this.doc.text(x + 1, y + 48, 'Tipo Serviços :');
            for (var j = 0; j < data[i]['servicos'].length; j++) {
                var soma = data[i]['servicos'][j].preco;
                total = parseFloat(total) + soma;
                // var valor: any = parseFloat(valor + soma)
                this.doc.setFontType('');
                this.doc.text(x + b, y + 48, data[i]['servicos'][j].nome + ',');
                b = b + 35;
            }
            total = total.toFixed(2);
            this.doc.setFontType('bold');
            this.doc.text(x + 155, y + 48, 'Valor Total :');
            this.doc.setFontType('');
            this.doc.text(x + 178, y + 48, total);
        }
    };
    ListaComponent.prototype.downloadDadosList = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_3__();
        doc.fromHTML($('.content').value()
            .get(0), 10, 20, {
            'width': 200
        });
        // doc.rect(15,25,180,6)
        //
        // doc.setFontSize(11)
        // doc.setFontType('bold')
        // doc.text(16,30, 'Codigo:')
        // let specialElementHandlers = {
        //     '#editor': function (element, renderer) {
        //         return true;
        //     }
        // };
        // let content = this.content.nativeElement;
        // doc.fromHTML(content.innerHTML, 15, 15, {
        //     'width': 190,
        //     'elementHandlers': specialElementHandlers
        // });
        doc.save('teste.pdf');
    };
    // public downloadDadosList(){
    //     return xepOnline.Formatter.Format('content', {render: 'download'});
    // }
    ListaComponent.prototype.json = function (obj) {
        return JSON.stringify(obj, null, '  ');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ListaComponent.prototype, "content", void 0);
    ListaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lista',
            template: __webpack_require__(/*! ./lista.component.html */ "./src/app/srcp/lista/lista.component.html"),
            styles: [__webpack_require__(/*! ./lista.component.scss */ "./src/app/srcp/lista/lista.component.scss")]
        }),
        __metadata("design:paramtypes", [_chamado_chamado_service__WEBPACK_IMPORTED_MODULE_1__["ChamadoService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListaComponent);
    return ListaComponent;
}());



/***/ }),

/***/ "./src/app/srcp/pipes/replace/replace.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/srcp/pipes/replace/replace.pipe.ts ***!
  \****************************************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReplacePipe = /** @class */ (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (value, args) {
        var numero = value.replace(/[^\d]+/g, '');
        return numero;
    };
    ReplacePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'replaceNumber'
        })
    ], ReplacePipe);
    return ReplacePipe;
}());



/***/ }),

/***/ "./src/app/srcp/servico/servico-card/servico-card.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/servico/servico-card/servico-card.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card bg-ligth\">\r\n  <div class=\"card-header\"> Home > Serviço</div>\r\n  <div class=\"card-body\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/srcp/servico/servico-card/servico-card.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/servico/servico-card/servico-card.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid .row-fluid {\n  margin-top: 20px;\n  font-family: Helvetica, Roboto, Arial, sans-serif; }\n\n.card {\n  position: relative;\n  border-radius: 0px;\n  border-left: none;\n  margin-top: -44px;\n  margin-left: 220px;\n  min-height: 850px; }\n\n.card .card-header {\n    background-color: #FFFFFF;\n    padding: 0.6rem 1.25rem; }\n\n.card .card-body {\n    padding: 0;\n    padding: 0px 20px;\n    background-color: #F0F1F2; }\n"

/***/ }),

/***/ "./src/app/srcp/servico/servico-card/servico-card.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/servico/servico-card/servico-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServicoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoCardComponent", function() { return ServicoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicoCardComponent = /** @class */ (function () {
    function ServicoCardComponent() {
    }
    ServicoCardComponent.prototype.ngOnInit = function () {
    };
    ServicoCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servico-card',
            template: __webpack_require__(/*! ./servico-card.component.html */ "./src/app/srcp/servico/servico-card/servico-card.component.html"),
            styles: [__webpack_require__(/*! ./servico-card.component.scss */ "./src/app/srcp/servico/servico-card/servico-card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicoCardComponent);
    return ServicoCardComponent;
}());



/***/ }),

/***/ "./src/app/srcp/servico/servico-list/servico-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/servico/servico-list/servico-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-servico-card>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                    <button class=\"btn btn-outline-success\" routerLink=\"/srcp/servico/new\"><img\r\n                            src=\"js/assets/svg/si-glyph-hammer-and-wrench.svg\"/> Novo Serviço\r\n                    </button>\r\n                </div>\r\n                <div *ngIf=\"message\" class=\"col-md-8 text-left\">\r\n                    <app-alert [timeout]=\"4000\">{{message}}</app-alert>\r\n                </div>\r\n            </div>\r\n            <div class=\"card c2 bg-light\">\r\n                <!--<div class=\"card-header c-header2\">Serviços</div>-->\r\n                <div class=\"card-body c-body2\">\r\n\r\n                    <table id=\"t_servico\" class=\"table table-sm display\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th>#</th>\r\n                            <th>Nome</th>\r\n                            <th>Preço</th>\r\n                            <th>Descrição</th>\r\n                            <th>Ação</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody id=\"tbS\" hidden>\r\n                        <tr *ngFor=\"let servico of listServico; let i = index\">\r\n                            <td>{{servico.id}}</td>\r\n                            <td>{{servico.nome}}</td>\r\n                            <td>R$ {{servico.preco | number: '1.0-3'}}</td>\r\n                            <td>{{servico.descricao}}</td>\r\n                            <td class=\"bt_a\">\r\n                                <a routerLink='/srcp/servico/{{servico.id}}/edit' class=\"badge b-edit badge-info\">\r\n                                    <img src=\"js/assets/svg/si-glyph-edit.svg\" alt=\"\">\r\n                                </a>\r\n                                <a href=\"javascript:void(0)\" (click)=\"destroyServico(servico.id,i)\" class=\"badge b-delete badge-danger\">\r\n                                    <img src=\"js/assets/svg/si-glyph-delete.svg\" alt=\"\">\r\n                                </a>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</app-servico-card>"

/***/ }),

/***/ "./src/app/srcp/servico/servico-list/servico-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/srcp/servico/servico-list/servico-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  margin: 25px 0px 0px 0px;\n  padding: 0; }\n  .container-fluid .row-fluid {\n    font-family: Tahoma, Arial, sans-serif; }\n  .table {\n  padding: 0;\n  margin: 0; }\n  .table thead th {\n    font-size: 12px;\n    text-align: center;\n    color: rgba(103, 87, 57, 0.8);\n    background-color: #F0F1F2;\n    padding: .60rem; }\n  .table tr td {\n    font-size: 12px;\n    font-family: Arial, Helvetica, sans-serif; }\n  .table tr td .badge {\n      display: inline-block;\n      padding: .30em .5em;\n      font-size: 75%;\n      font-weight: 700;\n      line-height: 1;\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      border-radius: 0.2rem; }\n  .table tr td .b-edit {\n      background-color: rgba(78, 216, 240, 0.18);\n      border: 1px solid #3ea5bc; }\n  .table tr td .b-edit:hover {\n      background-color: #4cdaf2; }\n  .table tr td .b-view {\n      background-color: #EEEEEE;\n      border: 1px solid #888a88; }\n  .table tr td .b-view:hover {\n      background-color: #858489; }\n  .table tr td .b-delete {\n      background-color: rgba(238, 0, 10, 0.16);\n      border: 1px solid #d10009; }\n  .table tr td .b-delete:hover {\n      background-color: rgba(255, 25, 23, 0.67); }\n  .table-sm td {\n  padding: 0.4rem 0.8rem; }\n  .c2 {\n  margin-top: 20px; }\n  .c2 .c-header2 {\n    background-color: #e3e3e3;\n    font-weight: bold;\n    color: rgba(16, 16, 16, 0.59);\n    border-bottom: none;\n    padding: 4px 16px 0px; }\n  .c2 .c-body2 {\n    padding: 0;\n    border-bottom: none; }\n  .c2 .bg-light {\n    background-color: #e3e3e3; }\n  .bt_a a {\n  margin-left: 6px; }\n"

/***/ }),

/***/ "./src/app/srcp/servico/servico-list/servico-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/servico/servico-list/servico-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServicoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoListComponent", function() { return ServicoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servico_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servico.service */ "./src/app/srcp/servico/servico.service.ts");
/* harmony import */ var _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bootstrap/message.service */ "./src/app/srcp/bootstrap/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicoListComponent = /** @class */ (function () {
    function ServicoListComponent(serivcoService, messageService) {
        this.serivcoService = serivcoService;
        this.messageService = messageService;
        this.listServico = [];
        this.mytable = '';
        this.message = null;
        this.message = this.messageService.messageServico;
    }
    ServicoListComponent.prototype.ngOnInit = function () {
        this.getListServico();
        setTimeout(function () {
            $('#t_servico').DataTable({
                scrollY: 400,
                'oLanguage': {
                    'sLengthMenu': 'Mostrar _MENU_ itens por Pag',
                    'sZeroRecords': 'Nenhum registro encontrado',
                    'sInfo': 'Mostrando _START_ ao _END_ de _TOTAL_ itens',
                    'sInfoEmpty': 'Mostrando 0 ao 0 de 0 itens',
                    'sInfoFiltered': '(filtrado de _MAX_ itens)',
                    'sSearch': 'Procurar: ',
                    'oPaginate': {
                        'sFirst': '<<',
                        'sPrevious': '<',
                        'sNext': '>',
                        'sLast': '>>'
                    }
                }
            });
            $('.ui-widget-header').css('border', '1px solid #e3e3e3');
            $('#mytable_filter input').attr('size', 30);
            $('#mytable_filter').css('padding-top', '4px');
            $(' label').css({ 'margin-bottom': '4px', 'font-size': '14px' });
            $('.dataTables_info').css({ 'font-size': '14px' });
            $('.dataTables_paginate').css({ 'float': 'none', 'font-size': '14px' });
            $('table.dataTable.no-footer').css({ 'border-bottom': 'none' });
            $('.dataTables_wrapper .ui-toolbar').css('padding', '2px 8px');
            $('#mytable_length').css('padding', '8px 8px 2px');
            $('#tbS').removeAttr('hidden', false);
        }, 1500);
    };
    ServicoListComponent.prototype.getListServico = function () {
        var _this = this;
        this.serivcoService.getListServico().subscribe(function (data) {
            _this.listServico = data;
        });
    };
    ServicoListComponent.prototype.destroyServico = function (id, index) {
        var _this = this;
        if (confirm('Deseja excluir o serviço?')) {
            this.serivcoService.destroy(id).subscribe(function () {
                _this.listServico.splice(index, 1);
            });
        }
    };
    ServicoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servico-list',
            template: __webpack_require__(/*! ./servico-list.component.html */ "./src/app/srcp/servico/servico-list/servico-list.component.html"),
            styles: [__webpack_require__(/*! ./servico-list.component.scss */ "./src/app/srcp/servico/servico-list/servico-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_servico_service__WEBPACK_IMPORTED_MODULE_1__["ServicoService"],
            _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], ServicoListComponent);
    return ServicoListComponent;
}());



/***/ }),

/***/ "./src/app/srcp/servico/servico-new/servico-new.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/servico/servico-new/servico-new.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-servico-card>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row-fluid\">\r\n            <form action=\"\" #f=\"ngForm\">\r\n                <input type=\"hidden\" name=\"id\" [(ngModel)]=\"servico.id\">\r\n                <div class=\"card c2 bg-light\">\r\n                    <div class=\"card-header c-header2\">{{servico.id ? 'Alterar Serviço': 'Novo Serviço'}}</div>\r\n                    <div class=\"card-body c-body2\">\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"nome\" class=\"control-label\">Nome do Serviço</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"nome\" name=\"nome\"\r\n                                       [(ngModel)]=\"servico.nome\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"preco\" class=\"control-label\">Preço do Serviço</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"preco\" name=\"preco\"\r\n                                       currencyMask\r\n                                       [options]=\"{prefix: 'R$', thousands: '.', decimal: ','}\"\r\n                                       [(ngModel)]=\"servico.preco\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-row\">\r\n                            <div class=\"form-group col-md-4\">\r\n                                <label for=\"descricao\" class=\"control-label\">Descrição do Serviço</label>\r\n                                <input class=\"form-control\" type=\"text\" id=\"descricao\" name=\"descricao\"\r\n                                       [(ngModel)]=\"servico.descricao\"\r\n                                       required\r\n                                >\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button *ngIf=\"servico.id\" type=\"button\" class=\"btn btn-outline-success\" (click)=\"updateServico()\"\r\n                        [disabled]=\"!f.valid\"><img src=\"js/assets/svg/si-glyph-floppy-disk.svg\"/>\r\n                    Alterar Serviço\r\n                </button>\r\n                <button *ngIf=\"!servico.id\" type=\"button\" class=\"btn btn-outline-success\" (click)=\"saveServico()\"\r\n                        [disabled]=\"!f.valid\"><img src=\"js/assets/svg/si-glyph-floppy-disk.svg\"/>\r\n                    Salvar Serviço\r\n                </button>\r\n                <button style=\"margin-left: 5px\" class=\"btn btn-outline-secondary\" routerLink=\"/srcp/servico\">\r\n                    <img src=\"js/assets/svg/si-glyph-backward-page.svg\"/> Voltar\r\n                </button>\r\n            </form>\r\n        </div>\r\n\r\n    </div>\r\n</app-servico-card>"

/***/ }),

/***/ "./src/app/srcp/servico/servico-new/servico-new.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/srcp/servico/servico-new/servico-new.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".c2 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.c-header2 {\n  font-weight: bold;\n  color: rgba(103, 87, 57, 0.8);\n  padding: .60rem 1.25rem; }\n\n.control-label {\n  font-size: 13px;\n  font-weight: 700;\n  color: rgba(103, 87, 57, 0.8); }\n\n.ng-invalid.ng-touched:not(form) {\n  border: 1px solid red; }\n"

/***/ }),

/***/ "./src/app/srcp/servico/servico-new/servico-new.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/srcp/servico/servico-new/servico-new.component.ts ***!
  \*******************************************************************/
/*! exports provided: ServicoNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoNewComponent", function() { return ServicoNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servico_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servico.service */ "./src/app/srcp/servico/servico.service.ts");
/* harmony import */ var _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bootstrap/message.service */ "./src/app/srcp/bootstrap/message.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicoNewComponent = /** @class */ (function () {
    function ServicoNewComponent(servicoService, messageServico, router, routeActive) {
        this.servicoService = servicoService;
        this.messageServico = messageServico;
        this.router = router;
        this.routeActive = routeActive;
        this.servico = {
            id: null,
            nome: '',
            preco: '',
            descricao: ''
        };
    }
    ServicoNewComponent.prototype.ngOnInit = function () {
        this.edit();
    };
    ServicoNewComponent.prototype.edit = function () {
        var _this = this;
        this.routeActive.params.subscribe(function (params) {
            if (params.hasOwnProperty('id')) {
                _this.servicoService.edite(params['id'])
                    .subscribe(function (data) {
                    _this.servico = data;
                });
            }
        });
    };
    ServicoNewComponent.prototype.updateServico = function () {
        var _this = this;
        this.servicoService.update(this.servico)
            .subscribe(function (data) {
            _this.messageServico.messageServico = 'Serviço Alterado com Sucesso!';
            _this.router.navigate(['/srcp/servico']);
        });
    };
    ServicoNewComponent.prototype.saveServico = function () {
        var _this = this;
        this.servicoService.save(this.servico)
            .subscribe(function (data) {
            _this.messageServico.messageServico = 'Serviço Salvo Com Sucesso';
            _this.router.navigate(['/srcp/servico']);
        });
    };
    ServicoNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-servico-new',
            template: __webpack_require__(/*! ./servico-new.component.html */ "./src/app/srcp/servico/servico-new/servico-new.component.html"),
            styles: [__webpack_require__(/*! ./servico-new.component.scss */ "./src/app/srcp/servico/servico-new/servico-new.component.scss")]
        }),
        __metadata("design:paramtypes", [_servico_service__WEBPACK_IMPORTED_MODULE_1__["ServicoService"],
            _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ServicoNewComponent);
    return ServicoNewComponent;
}());



/***/ }),

/***/ "./src/app/srcp/servico/servico.service.ts":
/*!*************************************************!*\
  !*** ./src/app/srcp/servico/servico.service.ts ***!
  \*************************************************/
/*! exports provided: ServicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicoService", function() { return ServicoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicoService = /** @class */ (function () {
    function ServicoService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/srcp/servico';
    }
    ServicoService.prototype.getListServico = function () {
        return this.http.get(this.url);
    };
    ServicoService.prototype.edite = function (id) {
        return this.http.get(this.url + "/" + id + "/edit");
    };
    ServicoService.prototype.update = function (data) {
        return this.http.put(this.url + "/" + data.id, data);
    };
    ServicoService.prototype.save = function (data) {
        return this.http.post(this.url, data);
    };
    ServicoService.prototype.destroy = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    ServicoService.prototype.addServicoOs = function (data) {
        return this.http.post(this.url, data);
    };
    ServicoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServicoService);
    return ServicoService;
}());



/***/ }),

/***/ "./src/app/srcp/srcp-routing/srcp-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/srcp/srcp-routing/srcp-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: SrcpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrcpRoutingModule", function() { return SrcpRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cliente/cliente-list/cliente-list.component */ "./src/app/srcp/cliente/cliente-list/cliente-list.component.ts");
/* harmony import */ var _cliente_cliente_new_cliente_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cliente/cliente-new/cliente-new.component */ "./src/app/srcp/cliente/cliente-new/cliente-new.component.ts");
/* harmony import */ var _cliente_cliente_view_cliente_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cliente/cliente-view/cliente-view.component */ "./src/app/srcp/cliente/cliente-view/cliente-view.component.ts");
/* harmony import */ var _servico_servico_list_servico_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servico/servico-list/servico-list.component */ "./src/app/srcp/servico/servico-list/servico-list.component.ts");
/* harmony import */ var _servico_servico_new_servico_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../servico/servico-new/servico-new.component */ "./src/app/srcp/servico/servico-new/servico-new.component.ts");
/* harmony import */ var _srcp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../srcp.component */ "./src/app/srcp/srcp.component.ts");
/* harmony import */ var _chamado_chamado_list_chamado_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../chamado/chamado-list/chamado-list.component */ "./src/app/srcp/chamado/chamado-list/chamado-list.component.ts");
/* harmony import */ var _chamado_chamado_new_chamado_new_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chamado/chamado-new/chamado-new.component */ "./src/app/srcp/chamado/chamado-new/chamado-new.component.ts");
/* harmony import */ var _chamado_chamado_view_chamado_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../chamado/chamado-view/chamado-view.component */ "./src/app/srcp/chamado/chamado-view/chamado-view.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../home/home.component */ "./src/app/srcp/home/home.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lista/lista.component */ "./src/app/srcp/lista/lista.component.ts");
/* harmony import */ var _auth_trocar_senha_trocar_senha_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../auth/trocar-senha/trocar-senha.component */ "./src/app/auth/trocar-senha/trocar-senha.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var srcpRoute = [
    {
        path: 'srcp', component: _srcp_component__WEBPACK_IMPORTED_MODULE_7__["SrcpComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]], canActivateChild: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'cliente', pathMatch: 'full' },
            { path: 'cliente', component: _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_2__["ClienteListComponent"] },
            { path: 'cliente/new', component: _cliente_cliente_new_cliente_new_component__WEBPACK_IMPORTED_MODULE_3__["ClienteNewComponent"] },
            { path: 'cliente/:id/view', component: _cliente_cliente_view_cliente_view_component__WEBPACK_IMPORTED_MODULE_4__["ClienteViewComponent"] },
            { path: 'cliente/:id/edit', component: _cliente_cliente_new_cliente_new_component__WEBPACK_IMPORTED_MODULE_3__["ClienteNewComponent"] },
            { path: 'servico', component: _servico_servico_list_servico_list_component__WEBPACK_IMPORTED_MODULE_5__["ServicoListComponent"] },
            { path: 'servico/new', component: _servico_servico_new_servico_new_component__WEBPACK_IMPORTED_MODULE_6__["ServicoNewComponent"] },
            { path: 'servico/:id/edit', component: _servico_servico_new_servico_new_component__WEBPACK_IMPORTED_MODULE_6__["ServicoNewComponent"] },
            { path: 'chamado', component: _chamado_chamado_list_chamado_list_component__WEBPACK_IMPORTED_MODULE_8__["ChamadoListComponent"] },
            { path: 'chamado/lista', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ListaComponent"] },
            { path: 'chamado/gerarpdf', component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_13__["ListaComponent"] },
            { path: 'chamado/new', component: _chamado_chamado_new_chamado_new_component__WEBPACK_IMPORTED_MODULE_9__["ChamadoNewComponent"] },
            { path: 'chamado/:id/view', component: _chamado_chamado_view_chamado_view_component__WEBPACK_IMPORTED_MODULE_10__["ChamadoViewComponent"] },
            { path: 'chamado/:id/edit', component: _chamado_chamado_new_chamado_new_component__WEBPACK_IMPORTED_MODULE_9__["ChamadoNewComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
        ]
    },
    { path: 'srcp/cliente', component: _srcp_component__WEBPACK_IMPORTED_MODULE_7__["SrcpComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'srcp/trocar_senha', component: _auth_trocar_senha_trocar_senha_component__WEBPACK_IMPORTED_MODULE_14__["TrocarSenhaComponent"] }
];
var SrcpRoutingModule = /** @class */ (function () {
    function SrcpRoutingModule() {
    }
    SrcpRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(srcpRoute)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], SrcpRoutingModule);
    return SrcpRoutingModule;
}());



/***/ }),

/***/ "./src/app/srcp/srcp.component.html":
/*!******************************************!*\
  !*** ./src/app/srcp/srcp.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"content-body\">\r\n        <nav class=\"navbar navbar-dark bg-dark\">\r\n            <a class=\"navbar-brand\" href=\"#\">\r\n                <img src=\"js/assets/img/logo_srcp.png\" class=\"d-inline-block align-top logo\" alt=\"\">\r\n            </a>\r\n            <div class=\"dropdown pull-right image\">\r\n                <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                    <img id=\"img\" src=\"js/assets/img/icon_login.png\" class=\"rounded-circle\">\r\n                    <span class=\"mr-4\">{{auth.getUser().name}}</span>\r\n                </a>\r\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\r\n                    <button type=\"button\" class=\"dropdown-item btn btn-link\" routerLink=\"/srcp/trocar_senha\">Trocar Senha</button>\r\n                    <div class=\"dropdown-divider\"></div>\r\n                    <a class=\"dropdown-item\" href=\"#\" (click)=\"logout($event)\">Sair</a>\r\n\r\n                </div>\r\n                <!--<img id=\"icon_off\" src=\"js/assets/svg/si-glyph-turn-off.svg\" class=\"rounded-circle\">-->\r\n            </div>\r\n            <!--<div class=\"pull-right image\">-->\r\n            <!--</div>-->\r\n        </nav>\r\n\r\n        <div class=\"btn-group-vertical btn-menu\" aria-label=\"Vertical button group\">\r\n            <!--<button type=\"button\" routerLinkActive=\"active\" routerLink=\"/srcp/home\" class=\"btn btn-secondary text-left\">-->\r\n                <!--<img src=\"js/assets/svg/si-glyph-house.svg\" alt=\"\"><span class=\"img-active\"> Home</span></button>-->\r\n\r\n            <button type=\"button\" routerLinkActive=\"active\" routerLink=\"/srcp/cliente\"\r\n                    class=\"btn btn-secondary text-left\">\r\n                <img src=\"js/assets/svg/si-glyph-person-public.svg\" alt=\"\"><span class=\"img-active\"> Clientes</span>\r\n            </button>\r\n\r\n            <button type=\"button\" routerLinkActive=\"active\" routerLink=\"/srcp/servico\"\r\n                    class=\"btn btn-secondary text-left\">\r\n                <img src=\"js/assets/svg/si-glyph-hammer-and-wrench.svg\" alt=\"\"><span class=\"img-active\"> Serviços</span>\r\n            </button>\r\n\r\n            <button type=\"button\" routerLinkActive=\"active\" routerLink=\"/srcp/chamado\"\r\n                    class=\"btn btn-secondary text-left\">\r\n                <img src=\"js/assets/svg/si-glyph-tag-price.svg\" alt=\"\"><span\r\n                    class=\"img-active\"> Ordem de Serviços</span>\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-secondary b-border\"></button>\r\n        </div>\r\n\r\n\r\n        <router-outlet></router-outlet>\r\n        <footer class=\"footer\">\r\n            <div class=\"container text-center\">\r\n                <span class=\"text-muted\">Coloque o conteúdo do rodapé fixo aqui.</span>\r\n            </div>\r\n        </footer>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/srcp/srcp.component.scss":
/*!******************************************!*\
  !*** ./src/app/srcp/srcp.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-body {\n  background-color: #2e3031;\n  position: absolute;\n  width: 100%;\n  min-height: 100%; }\n  .content-body .navbar {\n    padding: 1.8rem 1rem; }\n  .content-body .navbar .dropdown a:hover {\n      text-decoration: none; }\n  .content-body .navbar .dropdown .dropdown-toggle span {\n      color: #FFFFFF; }\n  .content-body .navbar .dropdown .dropdown-toggle span:hover {\n      color: #2b3cff; }\n  .content-body .navbar .dropdown .dropdown-menu {\n      margin-top: 7px;\n      border-top-right-radius: 0;\n      border-top-left-radius: 0;\n      background-clip: padding-box;\n      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.175); }\n  .content-body .navbar .dropdown .dropdown-menu button,\n      .content-body .navbar .dropdown .dropdown-menu a {\n        font-family: Source Sans Pro,sans-serif;\n        font-size: 14px; }\n  .content-body .navbar .dropdown .dropdown-menu button:hover,\n      .content-body .navbar .dropdown .dropdown-menu a:hover {\n        color: #2b3cff; }\n  .content-body .navbar .dropdown .dropdown-menu .dropdown-divider {\n        margin: 0px 0px; }\n  .content-body .navbar-brand img {\n    position: relative;\n    width: 200px;\n    height: 100px;\n    margin-top: -40px;\n    margin-bottom: -30px; }\n  .content-body img {\n    margin-bottom: 5px;\n    margin-right: 8px;\n    width: 15px;\n    height: 15px; }\n  .content-body .btn-menu {\n    float: left;\n    width: 220px; }\n  .content-body .btn-secondary {\n    font-size: 13px;\n    color: #d7d3c7;\n    border-radius: 0;\n    background-color: #2E3031;\n    border-left: none;\n    border-right: none;\n    padding: 13px 0px 13px 15px;\n    margin-top: 0.1px;\n    border-top-color: #414344;\n    border-bottom-color: #151515; }\n  .content-body .b-border {\n    padding: 0px;\n    border-bottom-color: #353535; }\n  .content-body .btn-secondary:hover {\n    background-color: #9a9c8e; }\n  .content-body .btn.active {\n    background-color: #9a9c8e;\n    border-bottom: 1px solid #9a9c8e;\n    border-top: 1px solid #9a9c8e; }\n  .content-body .btn.active > span {\n    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAOCAYAAADjXQYbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADZmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOkY3N0YxMTc0MDcyMDY4MTE5MkIwREY4NUQ0OTY0RjhBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ2RDY2NTNFNjkyQjExRTA5NTM5REREODE3NEE4NTRDIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ2RDY2NTNENjkyQjExRTA5NTM5REREODE3NEE4NTRDIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDI4MDExNzQwNzIwNjgxMUE3QkFEOTgwQjFBOUIwNTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Rjc3RjExNzQwNzIwNjgxMTkyQjBERjg1RDQ5NjRGOEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4nn/J4AAAAIXRFWHRDcmVhdGlvbiBUaW1lADIwMTI6MDg6MTAgMTg6NTM6NDBr1POsAAAATklEQVQoU3WQ2wkAMAgDa0dw/xldwWJB8RH99C5gJFU9aERE7wZsP6AlPFBgBiXZQUAEPtwAPChff5mZYFGvsglRBQmlZxfGh7IAf+vCA8faHuLttYI2AAAAAElFTkSuQmCC\") no-repeat scroll right center transparent !important;\n    text-decoration: none;\n    float: right;\n    width: 86%; }\n  .content-body .card {\n    border-radius: 0px;\n    margin-top: -44px;\n    margin-left: 220px; }\n  .content-body .card .card-header {\n      background-color: #FFFFFF;\n      padding: 0.6rem 1.25rem; }\n  .content-body .card .card-body {\n      padding: 0;\n      padding-left: 20px;\n      padding-right: 20px;\n      background-color: #F0F1F2; }\n  .content-body .footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    line-height: 60px;\n    background-color: #2e3031; }\n  .content-body .image {\n    margin-top: -35px;\n    margin-right: 20px;\n    color: #d7d3c7; }\n  .content-body #img {\n    width: 25px;\n    height: 25px; }\n  .content-body #icon_off {\n    width: 25px;\n    height: 25px; }\n"

/***/ }),

/***/ "./src/app/srcp/srcp.component.ts":
/*!****************************************!*\
  !*** ./src/app/srcp/srcp.component.ts ***!
  \****************************************/
/*! exports provided: SrcpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrcpComponent", function() { return SrcpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SrcpComponent = /** @class */ (function () {
    function SrcpComponent(auth) {
        this.auth = auth;
    }
    SrcpComponent.prototype.ngOnInit = function () {
    };
    SrcpComponent.prototype.logout = function (e) {
        e.preventDefault();
        this.auth.logout();
    };
    SrcpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-srcp',
            template: __webpack_require__(/*! ./srcp.component.html */ "./src/app/srcp/srcp.component.html"),
            styles: [__webpack_require__(/*! ./srcp.component.scss */ "./src/app/srcp/srcp.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SrcpComponent);
    return SrcpComponent;
}());



/***/ }),

/***/ "./src/app/srcp/srcp.module.ts":
/*!*************************************!*\
  !*** ./src/app/srcp/srcp.module.ts ***!
  \*************************************/
/*! exports provided: SrcpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SrcpModule", function() { return SrcpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _srcp_routing_srcp_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./srcp-routing/srcp-routing.module */ "./src/app/srcp/srcp-routing/srcp-routing.module.ts");
/* harmony import */ var _srcp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./srcp.component */ "./src/app/srcp/srcp.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/srcp/home/home.component.ts");
/* harmony import */ var _bootstrap_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap/message.service */ "./src/app/srcp/bootstrap/message.service.ts");
/* harmony import */ var _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cliente/cliente.service */ "./src/app/srcp/cliente/cliente.service.ts");
/* harmony import */ var _servico_servico_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servico/servico.service */ "./src/app/srcp/servico/servico.service.ts");
/* harmony import */ var _chamado_chamado_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chamado/chamado.service */ "./src/app/srcp/chamado/chamado.service.ts");
/* harmony import */ var _bootstrap_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bootstrap/alert/alert.component */ "./src/app/srcp/bootstrap/alert/alert.component.ts");
/* harmony import */ var _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cliente/cliente-list/cliente-list.component */ "./src/app/srcp/cliente/cliente-list/cliente-list.component.ts");
/* harmony import */ var _cliente_cliente_new_cliente_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cliente/cliente-new/cliente-new.component */ "./src/app/srcp/cliente/cliente-new/cliente-new.component.ts");
/* harmony import */ var _cliente_cliente_view_cliente_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cliente/cliente-view/cliente-view.component */ "./src/app/srcp/cliente/cliente-view/cliente-view.component.ts");
/* harmony import */ var _cliente_cliente_card_cliente_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cliente/cliente-card/cliente-card.component */ "./src/app/srcp/cliente/cliente-card/cliente-card.component.ts");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm5/ngx-mask.js");
/* harmony import */ var _servico_servico_list_servico_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./servico/servico-list/servico-list.component */ "./src/app/srcp/servico/servico-list/servico-list.component.ts");
/* harmony import */ var _servico_servico_new_servico_new_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./servico/servico-new/servico-new.component */ "./src/app/srcp/servico/servico-new/servico-new.component.ts");
/* harmony import */ var _bootstrap_alert_servico_alert_servico_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./bootstrap/alert-servico/alert-servico.component */ "./src/app/srcp/bootstrap/alert-servico/alert-servico.component.ts");
/* harmony import */ var _servico_servico_card_servico_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./servico/servico-card/servico-card.component */ "./src/app/srcp/servico/servico-card/servico-card.component.ts");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _chamado_chamado_list_chamado_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chamado/chamado-list/chamado-list.component */ "./src/app/srcp/chamado/chamado-list/chamado-list.component.ts");
/* harmony import */ var _chamado_chamado_card_chamado_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chamado/chamado-card/chamado-card.component */ "./src/app/srcp/chamado/chamado-card/chamado-card.component.ts");
/* harmony import */ var _chamado_chamado_new_chamado_new_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chamado/chamado-new/chamado-new.component */ "./src/app/srcp/chamado/chamado-new/chamado-new.component.ts");
/* harmony import */ var _chamado_chamado_view_chamado_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chamado/chamado-view/chamado-view.component */ "./src/app/srcp/chamado/chamado-view/chamado-view.component.ts");
/* harmony import */ var _chamado_filter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./chamado/filter.pipe */ "./src/app/srcp/chamado/filter.pipe.ts");
/* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @ngui/auto-complete */ "./node_modules/@ngui/auto-complete/dist/index.js");
/* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_ngui_auto_complete__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./lista/lista.component */ "./src/app/srcp/lista/lista.component.ts");
/* harmony import */ var _pipes_replace_replace_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pipes/replace/replace.pipe */ "./src/app/srcp/pipes/replace/replace.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var SrcpModule = /** @class */ (function () {
    function SrcpModule() {
    }
    SrcpModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _srcp_component__WEBPACK_IMPORTED_MODULE_4__["SrcpComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _bootstrap_alert_alert_component__WEBPACK_IMPORTED_MODULE_10__["AlertComponent"],
                _cliente_cliente_list_cliente_list_component__WEBPACK_IMPORTED_MODULE_11__["ClienteListComponent"],
                _cliente_cliente_new_cliente_new_component__WEBPACK_IMPORTED_MODULE_12__["ClienteNewComponent"],
                _cliente_cliente_view_cliente_view_component__WEBPACK_IMPORTED_MODULE_13__["ClienteViewComponent"],
                _cliente_cliente_card_cliente_card_component__WEBPACK_IMPORTED_MODULE_14__["ClienteCardComponent"],
                _servico_servico_list_servico_list_component__WEBPACK_IMPORTED_MODULE_16__["ServicoListComponent"],
                _servico_servico_new_servico_new_component__WEBPACK_IMPORTED_MODULE_17__["ServicoNewComponent"],
                _bootstrap_alert_servico_alert_servico_component__WEBPACK_IMPORTED_MODULE_18__["AlertServicoComponent"],
                _servico_servico_card_servico_card_component__WEBPACK_IMPORTED_MODULE_19__["ServicoCardComponent"],
                _chamado_chamado_list_chamado_list_component__WEBPACK_IMPORTED_MODULE_21__["ChamadoListComponent"],
                _chamado_chamado_card_chamado_card_component__WEBPACK_IMPORTED_MODULE_22__["ChamadoCardComponent"],
                _chamado_chamado_new_chamado_new_component__WEBPACK_IMPORTED_MODULE_23__["ChamadoNewComponent"],
                _chamado_chamado_view_chamado_view_component__WEBPACK_IMPORTED_MODULE_24__["ChamadoViewComponent"],
                _chamado_filter_pipe__WEBPACK_IMPORTED_MODULE_25__["FilterPipe"],
                _lista_lista_component__WEBPACK_IMPORTED_MODULE_27__["ListaComponent"],
                _pipes_replace_replace_pipe__WEBPACK_IMPORTED_MODULE_28__["ReplacePipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _srcp_routing_srcp_routing_module__WEBPACK_IMPORTED_MODULE_3__["SrcpRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ng2_currency_mask__WEBPACK_IMPORTED_MODULE_20__["CurrencyMaskModule"],
                ngx_mask__WEBPACK_IMPORTED_MODULE_15__["NgxMaskModule"].forRoot(),
                _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_26__["NguiAutoCompleteModule"],
            ],
            exports: [_srcp_component__WEBPACK_IMPORTED_MODULE_4__["SrcpComponent"]],
            providers: [_bootstrap_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"], _servico_servico_service__WEBPACK_IMPORTED_MODULE_8__["ServicoService"], _cliente_cliente_service__WEBPACK_IMPORTED_MODULE_7__["ClienteService"], _chamado_chamado_service__WEBPACK_IMPORTED_MODULE_9__["ChamadoService"]]
        })
    ], SrcpModule);
    return SrcpModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desenvolvimento PHP\www\srcp\srcp-angular6\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map