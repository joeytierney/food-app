import {Component, Input, OnInit} from '@angular/core';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';

@Component({
    selector: 'osl-review',
    moduleId: module.id,
    templateUrl: 'review.component.html',
    providers: [RestaurantService]
})

export default class ReviewComponent {
    @Input() restaurant: Restaurant;

    constructor(private restaurantService: RestaurantService){}

	placeH = 'Please enter review';
    reviewMessages: Array<string> = [];
    reviewMessage: string;

    addReview(): void {
        this.reviewMessages.push(this.reviewMessage);
        this.restaurantService.reviews.push(this.reviewMessage);
        this.reviewMessage = "";
        //console.log(this.restaurantService.reviews); //use in order to view inputted reviews
    }
}