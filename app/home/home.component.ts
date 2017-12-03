import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';
import {CountyService} from '../counties/counties-service';
import {County} from '../county/county';
import {Town} from '../town/town';



@Component({
    moduleId:     module.id,
    templateUrl: 'home.component.html',
    providers:	[RestaurantService, CountyService]
})
export default class HomeComponent {

	restaurants: Array<Restaurant> = [];
	subscriberParams: any = "";

	countyChosen: string;
	county: string;
	counties: County[];

	towns: Town[];

	selectedCounty: County = new County(0,"");

	constructor(private restaurantService: RestaurantService, private countyService: CountyService, private route: ActivatedRoute) {
		this.restaurants = restaurantService.getRestaurants();
		this.counties = this.countyService.getCounties();
	}// end constructor

	onSelect(countyId: number) {
		this.restaurants = this.restaurantService.getRestaurants().filter((item)=> item.countyId == countyId);
		this.towns = this.countyService.getTowns().filter((item)=> item.countyId == countyId);
	}

}
