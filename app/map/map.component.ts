import {Component, OnInit} from '@angular/core';
declare const google: any;

@Component({
  moduleId:   module.id,
  selector:   'osl-map',
  templateUrl:'map.component.html'
})

export default class MapComponent implements OnInit {
    constructor() {}
    ngOnInit() {
        let mapProp = {
          // create map according to LatLng stored in restaurant item
            center: new google.maps.LatLng(53.392934, -6.250284),
            zoom: 20,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }
}