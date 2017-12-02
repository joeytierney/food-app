import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';
import {ActivatedRoute} from '@angular/router';

@Component({
	moduleId:		module.id,
	selector:		'osl-nav-area',
	providers:		[RestaurantService],
	templateUrl:	'nav-area.component.html',
})
export default class NavAreaComponent {

/**
	@Input() restaurant: Restaurant;
	subscriberCounty: any;
	restaurantIn: Array<Restaurant>;
	constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) {
	}// end constructor
	ngOnInit() {
		this.subscriberCounty = this.route.data.subscribe(params => {
			let countyIn: string = params['county'];
			this.restaurantIn = this.restaurantService.getRestaurantsByCounty(countyIn);
		});
	}// end OnInit
	ngOnDestroy() {
		this.subscriberCounty.unsubscribe();
	}// end OnDestroy
	**/
}