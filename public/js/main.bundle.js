webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var route = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(route)],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var cliente_module_1 = __webpack_require__("./src/app/cliente/cliente.module.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                cliente_module_1.ClienteModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/cliente/cliente-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var list_component_1 = __webpack_require__("./src/app/cliente/list/list.component.ts");
var new_component_1 = __webpack_require__("./src/app/cliente/new/new.component.ts");
var clienteRoute = [
    { path: 'srcp/cliente', component: list_component_1.ListComponent },
    { path: 'srcp/cliente/new', component: new_component_1.NewComponent }
];
var ClienteRoutingModule = /** @class */ (function () {
    function ClienteRoutingModule() {
    }
    ClienteRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(clienteRoute)],
            exports: [router_1.RouterModule],
            declarations: []
        })
    ], ClienteRoutingModule);
    return ClienteRoutingModule;
}());
exports.ClienteRoutingModule = ClienteRoutingModule;


/***/ }),

/***/ "./src/app/cliente/cliente.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var list_component_1 = __webpack_require__("./src/app/cliente/list/list.component.ts");
var cliente_routing_module_1 = __webpack_require__("./src/app/cliente/cliente-routing.module.ts");
var cliente_service_1 = __webpack_require__("./src/app/cliente/cliente.service.ts");
var new_component_1 = __webpack_require__("./src/app/cliente/new/new.component.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var ClienteModule = /** @class */ (function () {
    function ClienteModule() {
    }
    ClienteModule = __decorate([
        core_1.NgModule({
            declarations: [
                list_component_1.ListComponent,
                new_component_1.NewComponent
            ],
            imports: [
                common_1.CommonModule,
                cliente_routing_module_1.ClienteRoutingModule,
                forms_1.FormsModule
            ],
            providers: [cliente_service_1.ClienteService]
        })
    ], ClienteModule);
    return ClienteModule;
}());
exports.ClienteModule = ClienteModule;


/***/ }),

/***/ "./src/app/cliente/cliente.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        this.url = 'http://localhost:8000/srcp/cliente';
    }
    ClienteService.prototype.getClienteList = function () {
        return this.http.get(this.url);
    };
    ClienteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;


/***/ }),

/***/ "./src/app/cliente/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row-fluid\">\r\n        <button class=\"btn btn-success\" routerLink=\"/srcp/cliente/new\"><img src=\"js/assets/svg/si-glyph-person-plus.svg\"/> Novo Cliente </button>\r\n        <div class=\"card bg-light\">\r\n            <div class=\"card-header\">Clientes</div>\r\n            <div class=\"card-body\">\r\n                <table class=\"table table-bordered table-hover\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th>#</th>\r\n                        <th>Nome</th>\r\n                        <th>CPF/CNPJ</th>\r\n                        <!--<th>Telefone</th>-->\r\n                        <th>Celular</th>\r\n                        <th>Email</th>\r\n                        <!--<th>Endereco</th>-->\r\n                        <!--<th>numero</th>-->\r\n                        <!--<th>Bairro</th>-->\r\n                        <!--<th>Cidade</th>-->\r\n                        <!--<th>Estado</th>-->\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let cliente of listCliente\">\r\n                        <td>{{cliente.id}}</td>\r\n                        <td>{{cliente.nome}}</td>\r\n                        <td>{{cliente.cpf_cnpj}}</td>\r\n                        <!--<td>{{cliente.telefone}}</td>-->\r\n                        <td>{{cliente.celular}}</td>\r\n                        <td>{{cliente.email}}</td>\r\n                        <!--<td>{{cliente.endereco}}</td>-->\r\n                        <!--<td>{{cliente.numero}}</td>-->\r\n                        <!--<td>{{cliente.bairro}}</td>-->\r\n                        <!--<td>{{cliente.cidade}}</td>-->\r\n                        <!--<td>{{cliente.estado}}</td>-->\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/cliente/list/list.component.scss":
/***/ (function(module, exports) {

module.exports = ".container-fluid .row-fluid {\n  margin-top: 20px;\n  font-family: Helvetica, Roboto, Arial, sans-serif; }\n\n.table {\n  padding: 0;\n  margin: 0; }\n\n.table thead th {\n    font-size: 12px;\n    text-align: center;\n    color: rgba(103, 87, 57, 0.8);\n    border-bottom: none;\n    background-color: #F0F1F2;\n    padding: .60rem; }\n\n.table tr td {\n    font-size: 12px; }\n\n.card {\n  margin-top: 20px;\n  border-bottom: none; }\n\n.card-header {\n  font-weight: bold;\n  color: rgba(103, 87, 57, 0.8);\n  border-bottom: none;\n  padding: .60rem 1.25rem; }\n\n.card-body {\n  padding: 0;\n  border-bottom: none; }\n"

/***/ }),

/***/ "./src/app/cliente/list/list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var cliente_service_1 = __webpack_require__("./src/app/cliente/cliente.service.ts");
var ListComponent = /** @class */ (function () {
    function ListComponent(clienteService) {
        this.clienteService = clienteService;
        this.listCliente = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getClienteList();
    };
    ListComponent.prototype.getClienteList = function () {
        var _this = this;
        this.clienteService.getClienteList().subscribe(function (data) {
            _this.listCliente = data;
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            template: __webpack_require__("./src/app/cliente/list/list.component.html"),
            styles: [__webpack_require__("./src/app/cliente/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [cliente_service_1.ClienteService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;


/***/ }),

/***/ "./src/app/cliente/new/new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row-fluid\">\n        <form action=\"\">\n            <div class=\"card bg-light\">\n                <div class=\"card-header\">Novo Cliente</div>\n                <div class=\"card-body\">\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"\">Nome</label>\n                            <input class=\"form-control\" type=\"text\" name=\"nome\" [(ngModel)]=\"cliente.nome\">\n                        </div>\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">CPF/CNPJ</label>\n                            <input class=\"form-control\" type=\"text\" name=\"cpf_cnpj\" [(ngModel)]=\"cliente.cpf_cnpj\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">Email</label>\n                            <input class=\"form-control\" type=\"text\" name=\"email\" [(ngModel)]=\"cliente.email\">\n                        </div>\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">Telefone</label>\n                            <input class=\"form-control\" type=\"text\" name=\"telefone\" [(ngModel)]=\"cliente.telefone\">\n                        </div>\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">Celular</label>\n                            <input class=\"form-control\" type=\"text\" name=\"celular\" [(ngModel)]=\"cliente.celular\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">CEP</label>\n                            <input class=\"form-control\" type=\"text\" name=\"cep\" [(ngModel)]=\"cliente.cep\">\n                        </div>\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">Endereço</label>\n                            <input class=\"form-control\" type=\"text\" name=\"endereco\" [(ngModel)]=\"cliente.endereco\">\n                        </div>\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">Numero</label>\n                            <input class=\"form-control\" type=\"text\" name=\"numero\" [(ngModel)]=\"cliente.numero\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">Bairro</label>\n                            <input class=\"form-control\" type=\"text\" name=\"bairro\" [(ngModel)]=\"cliente.bairro\">\n                        </div>\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">Cidade</label>\n                            <input class=\"form-control\" type=\"text\" name=\"cidade\" [(ngModel)]=\"cliente.cidade\">\n                        </div>\n                        <div class=\"form-group col-lg-2\">\n                            <label for=\"\">Estado</label>\n                            <input class=\"form-control\" type=\"text\" name=\"estado\" [(ngModel)]=\"cliente.estado\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <button class=\"btn btn-success\" (click)=\"save()\"><img src=\"js/assets/svg/si-glyph-floppy-disk.svg\"/> Salvar Cliente</button>\n            <button class=\"btn btn-default\" routerLink=\"/srcp/cliente\"><img src=\"js/assets/svg/si-glyph-backward-page.svg\"/> Voltar</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/cliente/new/new.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n.card-header {\n  font-weight: bold;\n  color: rgba(103, 87, 57, 0.8);\n  padding: .60rem 1.25rem; }\n"

/***/ }),

/***/ "./src/app/cliente/new/new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NewComponent = /** @class */ (function () {
    function NewComponent() {
        this.cliente = {
            nome: '',
            cpf_cnpj: ''
        };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent = __decorate([
        core_1.Component({
            selector: 'app-new',
            template: __webpack_require__("./src/app/cliente/new/new.component.html"),
            styles: [__webpack_require__("./src/app/cliente/new/new.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewComponent);
    return NewComponent;
}());
exports.NewComponent = NewComponent;


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Testando Home</h1>\r\n\r\n<button routerLink=\"/srcp/cliente\">Clientes</button>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map