import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';
import {CountyService} from '../counties/counties-service';
import {CuisinesService} from '../cuisines/cuisines-service';
import {County} from '../county/county';
import {Town} from '../town/town';
import {Cuisine} from '../cuisine/cuisine';



@Component({
    moduleId:     module.id,
    templateUrl: 'home.component.html',
    providers:	[RestaurantService, CountyService, CuisinesService]
})
export default class HomeComponent {

	restaurants: Array<Restaurant> = [];
	subscriberParams: any = "";

	countyChosen: string;
	county: string;
	counties: County[];

	towns: Town[];

	cuisines: Cuisine[];

	selectedCounty: County = new County(0,"");

	constructor(private restaurantService: RestaurantService, private countyService: CountyService, private cuisineService: CuisinesService, private route: ActivatedRoute) {
		this.restaurants = restaurantService.getRestaurants();
		this.counties = this.countyService.getCounties();
		this.towns = this.countyService.getTowns();
		this.cuisines = this.cuisineService.getCuisines();
	}// end constructor

	onSelect(countyId: number) {
		this.restaurants = this.restaurantService.getRestaurants().filter((item)=> item.countyId == countyId);
		this.towns = this.countyService.getTowns().filter((item)=> item.countyId == countyId);
	}

	onSelectCuisine(cuisineType: String) {
		//this.restaurants = this.restaurantService.getRestaurants().filter((item)=> item.countyId == countyId);
		//this.towns = this.countyService.getTowns().filter((item)=> item.countyId == countyId);
		this.cuisines = this.cuisineService.getCuisines().filter((item)=>item.id == id);
	}

}
