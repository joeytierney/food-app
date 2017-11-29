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
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    }
}