import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    templateUrl: 'home.component.html',
    providers:	[RestaurantService]
})
export default class HomeComponent implements OnInit, OnDestroy{

	restaurants: Array<Restaurant> = [];
	subscriberParams: any = "";

	constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) {
		this.restaurants = restaurantService.getRestaurants();
	}// end constructor

	ngOnInit() {

		if(this.subscriberParams != "") {
			this.subscriberParams = this.route.params.subscribe(params => {
			let restaurantCounty: string = params['county'];	// set restaurant county
			console.log(restaurantCounty);
			this.restaurants = this.restaurantService.getRestaurantsByCounty(restaurantCounty);	// get restaurant by county
			//this.restaurant.imageURL = 'images/' + this.restaurant.id + '.jpg';	// set image based on restaurant id
			});
		} else {
			this.restaurants = this.restaurantService.getRestaurants();
		}

		

		//this.subscriberParams = this.route.params.subscribe(params => {
			//let restaurantCounty: string = params['county'];	// set restaurant county
			//console.log(restaurantCounty);
			//this.restaurants = this.restaurantService.getRestaurantsByCounty(restaurantCounty);	// get restaurant by county
			//this.restaurant.imageURL = 'images/' + this.restaurant.id + '.jpg';	// set image based on restaurant id
		//});
	}

	ngOnDestroy() {
		//this.subscriberParams.unsubscribe();
	}// end OnDestroy
	
	//restaurants: Array<Restaurant> = [];

	//constructor(restaurantService: RestaurantService) {
	//	this.restaurants = restaurantService.getRestaurants();
	//}
}
