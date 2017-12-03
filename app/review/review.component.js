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
var ReviewComponent = (function () {
    function ReviewComponent(restaurantService) {
        this.restaurantService = restaurantService;
        this.placeH = 'Please enter review';
        this.reviewMessages = [];
    }
    ReviewComponent.prototype.addReview = function () {
        this.reviewMessages.push(this.reviewMessage);
        this.restaurantService.reviews.push(this.reviewMessage);
        this.reviewMessage = "";
        console.log(this.restaurantService.reviews); //use in order to view inputted reviews
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', restaurant_service_1.Restaurant)
    ], ReviewComponent.prototype, "restaurant", void 0);
    ReviewComponent = __decorate([
        core_1.Component({
            selector: 'osl-review',
            moduleId: module.id,
            templateUrl: 'review.component.html',
            providers: [restaurant_service_1.RestaurantService]
        }), 
        __metadata('design:paramtypes', [restaurant_service_1.RestaurantService])
    ], ReviewComponent);
    return ReviewComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReviewComponent;
//# sourceMappingURL=review.component.js.map