import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';
import {ActivatedRoute} from '@angular/router';

@Component({
	moduleId:		module.id,
	selector:		'osl-restaurant-item',
	providers:		[RestaurantService],
	templateUrl:	'restaurant-item.component.html'
})

export default class RestaurantItemComponent implements OnInit, OnDestroy {

	reviews: Array<string> = [];

	constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) {

	}// end constructor
	
	@Input() restaurant: Restaurant;

	restaurantIn: Restaurant;

	subscriberParams: any;

	subscriberCounty: any;
	
	ngOnInit(){
		this.reviews = this.restaurant.reviews;
	}

	ngOnDestroy() {
		//this.subscriberParams.unsubscribe();
	}// end OnDestroy
}