import {Component} from '@angular/core';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    templateUrl: 'home.component.html',
    providers:	[RestaurantService]
})
export default class HomeComponent {
	
	restaurants: Array<Restaurant> = [];

	constructor(restaurantService: RestaurantService) {
		this.restaurants = restaurantService.getRestaurants();
	}
}
