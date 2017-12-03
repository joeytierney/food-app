import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {Restaurant, RestaurantService} from '../restaurant-service/restaurant-service';
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    selector:    'osl-county-item',
    templateUrl: 'cuisines.component.html',
    providers:   [RestaurantService]
})

export default class CuisinesComponent implements OnInit,OnDestroy  {
    @Input() restaurant: Array<Restaurant> = [];
    @Input('score') score: number;

    subscriberParams: any;

    constructor(private restaurantService: RestaurantService,  private route: ActivatedRoute) {
    }
    
    counties: Array<string> = [];
    county: any; 

    ngOnInit() {
        this.subscriberParams = this.route.params.subscribe(params => {
            let id: number = + params['id'];   // (+) converts string 'id' to a number
            this.county = this.restaurantService.getCountyById(id);
        });
            this.counties = this.restaurantService.getCounties();

    }
    ngOnDestroy() {
        this.subscriberParams.unsubscribe();
    }
}