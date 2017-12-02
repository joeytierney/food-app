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
var restaurant_service_1 = require('../restaurant-service/restaurant-service');
var router_1 = require('@angular/router');
var NavAreaComponent = (function () {
    function NavAreaComponent(restaurantService, route) {
        this.restaurantService = restaurantService;
        this.route = route;
    } // end constructor
    NavAreaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriberCounty = this.route.data.subscribe(function (params) {
            var countyIn = params['county'];
            _this.restaurantIn = _this.restaurantService.getRestaurantsByCounty(countyIn);
        });
    }; // end OnInit
    NavAreaComponent.prototype.ngOnDestroy = function () {
        this.subscriberCounty.unsubscribe();
    }; // end OnDestroy
    __decorate([
        core_1.Input(), 
        __metadata('design:type', restaurant_service_1.Restaurant)
    ], NavAreaComponent.prototype, "restaurant", void 0);
    NavAreaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-nav-area',
            templateUrl: 'nav-area.component.html',
        }), 
        __metadata('design:paramtypes', [restaurant_service_1.RestaurantService, router_1.ActivatedRoute])
    ], NavAreaComponent);
    return NavAreaComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NavAreaComponent;
//# sourceMappingURL=nav-area.component.js.map