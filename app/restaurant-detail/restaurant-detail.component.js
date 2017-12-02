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
var router_1 = require('@angular/router');
var restaurant_service_1 = require('../restaurant-service/restaurant-service');
var RestaurantDetailComponent = (function () {
    function RestaurantDetailComponent(restaurantService, route) {
        this.restaurantService = restaurantService;
        this.route = route;
    } // end constructor
    RestaurantDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriberParams = this.route.params.subscribe(function (params) {
            var restaurantId = +params['id']; // set restaurant id
            _this.restaurant = _this.restaurantService.getRestaurantById(restaurantId); // get restaurant by id
            _this.restaurant.imageURL = 'images/' + _this.restaurant.id + '.jpg'; // set image based on restaurant id
        });
    }; // end OnInit
    RestaurantDetailComponent.prototype.ngOnDestroy = function () {
        this.subscriberParams.unsubscribe();
    }; // end OnDestroy
    RestaurantDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'restaurant-detail.component.html',
            providers: [restaurant_service_1.RestaurantService]
        }), 
        __metadata('design:paramtypes', [restaurant_service_1.RestaurantService, router_1.ActivatedRoute])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RestaurantDetailComponent;
//# sourceMappingURL=restaurant-detail.component.js.map