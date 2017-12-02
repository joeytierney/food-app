import {Component, OnInit, Input} from '@angular/core';
import {RestaurantService, Restaurant} from '../restaurant-service/restaurant-service';
declare const google: any;

@Component({
  moduleId:   module.id,
  selector:   'osl-map',
  templateUrl:'map.component.html'
})

export default class MapComponent implements OnInit, Input {

    @Input() restaurantInput: Restaurant;
    constructor() {}
    ngOnInit() {
        let mapProp = {
          // create map according to LatLng stored in restaurant item
            center: new google.maps.LatLng(53.366908, -6.173503),
            zoom: 20,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }
}