import {Injectable} from '@angular/core';

export class Restaurant {
	constructor(
			public id: number,
			public county: string,
			public name: string,
			public blurb: string;
			public address: string,
			public picUrl: string,
			public hours: string,
			public cuisines: Array<string>,
			public facilities: Array<string>) {

	}
}// end Restaurant class

export class RestaurantService {

	private restaurants: Array<Restaurant>;

	constructor() {
		this.restaurants = [
			new Restaurant(0, "Dublin", 'Testaurant', 'An exciting new restaurant that you are sure to enjoy', 'Some place nice', '#', 'All hours', ['chinese', 'indian'], ['toilets', 'ramps']),
			new Restaurant(1, "Cork", 'Chinks', 'A classic style chinese experience', '27 Chink street', '#', '9am-1am', ['chinese'], ['toilets', 'ramps', 'dining area']),
			new Restaurant(2, "Galway", 'Turks', 'A classic style turkish experience. Enjoy the kebabs!', "O'Connell Street", '#', '9am-1am', ['Turkish'], ['toilets', 'ramps', 'dining area']),
			new Restaurant(0, "Dublin", 'Testaurant', 'An exciting new restaurant that you are sure to enjoy', 'Some place nice', '#', 'All hours', ['chinese', 'indian'], ['toilets', 'ramps']),
			new Restaurant(1, "Cork", 'Chinks', 'A classic style chinese experience', '27 Chink street', '#', '9am-1am', ['chinese'], ['toilets', 'ramps', 'dining area']),
			new Restaurant(2, "Galway", 'Turks', 'A classic style turkish experience. Enjoy the kebabs!', "O'Connell Street", '#', '9am-1am', ['Turkish'], ['toilets', 'ramps', 'dining area']),
		];
	}// end constructor()

	getRestaurants(): Array<Restaurant> {
		return this.restaurants;
	}// end getRestaurant()

	getRestaurantById(id: number): Restaurant {
		return this.restaurants[id];
	}// end getRestaurantById()

}