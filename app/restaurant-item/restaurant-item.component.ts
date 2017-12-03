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

	//imageURL: string;
	subscriberCounty: any;
	
	ngOnInit(){

		//this.imageURL = '/images/' + this.restaurant.id + '.jpg';

		this.reviews = this.restaurant.reviews;
        console.log(this.reviews);
		//this.imgUrl = '/images/' + this.restaurant.id + '.jpg';
		//this.subscriberParams = this.route.params.subscribe(params => {
		//	let restaurantId: number = +params['id'];
		//	this.restaurant = this.restaurantService.getRestaurantById(restaurantId);
		//});
	}

	ngOnDestroy() {
		//this.subscriberParams.unsubscribe();
	}// end OnDestroy
}