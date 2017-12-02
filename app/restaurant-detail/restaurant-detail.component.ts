import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantService, Restaurant} from '../restaurant-service/restaurant-service';

@Component({
	moduleId: module.id,
	templateUrl: 'restaurant-detail.component.html',
	providers: [RestaurantService]
})

export default class RestaurantDetailComponent implements OnInit, OnDestroy {

	//@Input() restaurantInput: Restaurant;
	restaurant: Restaurant;
	

	subscriberParams: any;
	imageURL: string;
	mapImage: string;
	menuImage: string;

	constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) {

	}// end constructor
	ngOnInit() {

		this.subscriberParams = this.route.params.subscribe(params => {
			let restaurantCounty: string = params['county'];	// set restaurant county
			console.log(restaurantCounty);
			//this.restaurant = this.restaurantService.getRestaurantsByCounty(restaurantCounty);	// get restaurant by county
			//this.restaurant.imageURL = 'images/' + this.restaurant.id + '.jpg';	// set image based on restaurant id
		});

		this.subscriberParams = this.route.params.subscribe(params => {
			let restaurantId: number = +params['id'];	// set restaurant id
			this.restaurant = this.restaurantService.getRestaurantById(restaurantId);	// get restaurant by id
			this.restaurant.imageURL = 'images/' + this.restaurant.id + '.jpg';	// set image based on restaurant id
			this.restaurant.mapImage = 'images/map/' + this.restaurant.id + '.png';
			this.restaurant.menuImage = 'images/menu/' + this.restaurant.id + '.jpg';
		});
	}// end OnInit
	ngOnDestroy() {
		this.subscriberParams.unsubscribe();
	}// end OnDestroy
}