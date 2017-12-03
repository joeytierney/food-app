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
var CuisinesComponent = (function () {
    function CuisinesComponent(restaurantService, route) {
        this.restaurantService = restaurantService;
        this.route = route;
        this.restaurant = [];
        this.counties = [];
    }
    CuisinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriberParams = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this.county = _this.restaurantService.getCountyById(id);
        });
        this.counties = this.restaurantService.getCounties();
    };
    CuisinesComponent.prototype.ngOnDestroy = function () {
        this.subscriberParams.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CuisinesComponent.prototype, "restaurant", void 0);
    __decorate([
        core_1.Input('score'), 
        __metadata('design:type', Number)
    ], CuisinesComponent.prototype, "score", void 0);
    CuisinesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-county-item',
            templateUrl: 'cuisines.component.html',
            providers: [restaurant_service_1.RestaurantService]
        }), 
        __metadata('design:paramtypes', [restaurant_service_1.RestaurantService, router_1.ActivatedRoute])
    ], CuisinesComponent);
    return CuisinesComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CuisinesComponent;
//# sourceMappingURL=cuisines.component.js.map