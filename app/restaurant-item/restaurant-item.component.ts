import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../restaurant-service/restaurant-service';

@Component({
	moduleId:		module.id,
	selector:		'osl-restaurant-item',
	templateUrl:	'restaurant-item.component.html'
})

export default class RestaurantItemComponent implements OnInit {

	@Input() restaurant: Restaurant;

	imgUrl: string;
	
	ngOnInit() {

	}
}