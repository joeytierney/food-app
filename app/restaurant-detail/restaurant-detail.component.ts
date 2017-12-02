import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RestaurantService, Restaurant} from '../restaurant-service/restaurant-service';

@Component({
	moduleId: module.id,
	templateUrl: 'restaurant-detail.component.html',
	providers: [RestaurantService]
})

export default class RestaurantDetailComponent implements OnInit, OnDestroy {

	restaurant: Restaurant;
	subscriberParams: any;

	constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) {

	}// end constructor

	ngOnInit() {
		this.subscriberParams = this.route.params.subscribe(params => {
			let restaurantId: number = +params['id'];
			this.restaurant = this.restaurantService.getRestaurantById(restaurantId);
		});
	}// end OnInit

	ngOnDestroy() {
		this.subscriberParams.unsubscribe();
	}// end OnDestroy
}