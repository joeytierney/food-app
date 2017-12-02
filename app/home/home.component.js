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
var HomeComponent = (function () {
    function HomeComponent(restaurantService, route) {
        this.restaurantService = restaurantService;
        this.route = route;
        this.restaurants = [];
        this.subscriberParams = "";
        this.restaurants = restaurantService.getRestaurants();
    } // end constructor
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.subscriberParams != "") {
            this.subscriberParams = this.route.params.subscribe(function (params) {
                var restaurantCounty = params['county']; // set restaurant county
                console.log(restaurantCounty);
                _this.restaurants = _this.restaurantService.getRestaurantsByCounty(restaurantCounty); // get restaurant by county
                //this.restaurant.imageURL = 'images/' + this.restaurant.id + '.jpg';	// set image based on restaurant id
            });
        }
        else {
            this.restaurants = this.restaurantService.getRestaurants();
        }
        //this.subscriberParams = this.route.params.subscribe(params => {
        //let restaurantCounty: string = params['county'];	// set restaurant county
        //console.log(restaurantCounty);
        //this.restaurants = this.restaurantService.getRestaurantsByCounty(restaurantCounty);	// get restaurant by county
        //this.restaurant.imageURL = 'images/' + this.restaurant.id + '.jpg';	// set image based on restaurant id
        //});
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        //this.subscriberParams.unsubscribe();
    }; // end OnDestroy
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home.component.html',
            providers: [restaurant_service_1.RestaurantService]
        }), 
        __metadata('design:paramtypes', [restaurant_service_1.RestaurantService, router_1.ActivatedRoute])
    ], HomeComponent);
    return HomeComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeComponent;
//# sourceMappingURL=home.component.js.map