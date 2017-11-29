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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var about_component_1 = require('./about/about.component');
var application_component_1 = require('./application/application.component');
var footer_component_1 = require('./footer/footer.component');
var home_component_1 = require('./home/home.component');
var menubar_component_1 = require('./menubar/menubar.component');
var pagenotfound_component_1 = require('./pagenotfound/pagenotfound.component');
var restaurant_item_component_1 = require('./restaurant-item/restaurant-item.component');
var services_component_1 = require('./services/services.component');
var nav_area_component_1 = require('./nav-area/nav-area.component');
var restaurant_detail_component_1 = require('./restaurant-detail/restaurant-detail.component');
var map_component_1 = require('./map/map.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.default },
                    { path: 'home', component: home_component_1.default },
                    { path: 'about', component: about_component_1.default },
                    { path: 'services', component: services_component_1.default },
                    { path: 'details/:id', component: restaurant_detail_component_1.default },
                    { path: '**', component: pagenotfound_component_1.default }
                ])
            ],
            declarations: [
                application_component_1.default,
                menubar_component_1.default,
                footer_component_1.default,
                about_component_1.default,
                services_component_1.default,
                pagenotfound_component_1.default,
                restaurant_item_component_1.default,
                home_component_1.default,
                nav_area_component_1.default,
                restaurant_detail_component_1.default,
                map_component_1.default
            ],
            bootstrap: [application_component_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=module.js.map