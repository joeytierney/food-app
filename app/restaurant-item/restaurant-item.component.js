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
var RestaurantItemComponent = (function () {
    function RestaurantItemComponent(restaurantService, route) {
        this.restaurantService = restaurantService;
        this.route = route;
        this.reviews = [];
    } // end constructor
    RestaurantItemComponent.prototype.ngOnInit = function () {
        //this.imgUrl = '/images/' + this.restaurant.id + '.jpg';
        this.reviews = this.restaurant.reviews;
        console.log(this.reviews);
        //this.imgUrl = '/images/' + this.restaurant.id + '.jpg';
        //this.subscriberParams = this.route.params.subscribe(params => {
        //	let restaurantId: number = +params['id'];
        //	this.restaurant = this.restaurantService.getRestaurantById(restaurantId);
        //});
    };
    RestaurantItemComponent.prototype.ngOnDestroy = function () {
        //this.subscriberParams.unsubscribe();
    }; // end OnDestroy
    __decorate([
        // end constructor
        core_1.Input(), 
        __metadata('design:type', restaurant_service_1.Restaurant)
    ], RestaurantItemComponent.prototype, "restaurant", void 0);
    RestaurantItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-restaurant-item',
            providers: [restaurant_service_1.RestaurantService],
            templateUrl: 'restaurant-item.component.html'
        }), 
        __metadata('design:paramtypes', [restaurant_service_1.RestaurantService, router_1.ActivatedRoute])
    ], RestaurantItemComponent);
    return RestaurantItemComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RestaurantItemComponent;
//# sourceMappingURL=restaurant-item.component.js.map