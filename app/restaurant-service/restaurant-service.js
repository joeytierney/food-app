"use strict";
var Restaurant = (function () {
    function Restaurant(id, county, name, blurb, address, picUrl, hours, cuisines, facilities) {
        this.id = id;
        this.county = county;
        this.name = name;
        this.blurb = blurb;
        this.address = address;
        this.picUrl = picUrl;
        this.hours = hours;
        this.cuisines = cuisines;
        this.facilities = facilities;
    }
    return Restaurant;
}());
exports.Restaurant = Restaurant; // end Restaurant class
var RestaurantService = (function () {
    function RestaurantService() {
        this.restaurants = [
            new Restaurant(0, "Dublin", 'Zao Restaurant', 'Roomy Chinese eatery with stripped flooring, indoor plants and a Thai/Malaysian/Chinese menu', 'Omni Park Shopping Centre, Swords Rd', '#', '5pm-11pm', ['chinese', 'thai'], ['toilets', 'ramps']),
            new Restaurant(1, "Cork", 'Chinks', 'A classic style chinese experience', '27 Chink street', '#', '9am-1am', ['chinese'], ['toilets', 'ramps', 'dining area']),
            new Restaurant(2, "Galway", 'Turks', 'A classic style turkish experience. Enjoy the kebabs!', "O'Connell Street", '#', '9am-1am', ['Turkish'], ['toilets', 'ramps', 'dining area']),
            new Restaurant(0, "Dublin", 'Testaurant', 'An exciting new restaurant that you are sure to enjoy', 'Some place nice', '#', 'All hours', ['chinese', 'indian'], ['toilets', 'ramps']),
            new Restaurant(1, "Cork", 'Chinks', 'A classic style chinese experience', '27 Chink street', '#', '9am-1am', ['chinese'], ['toilets', 'ramps', 'dining area']),
            new Restaurant(2, "Galway", 'Turks', 'A classic style turkish experience. Enjoy the kebabs!', "O'Connell Street", '#', '9am-1am', ['Turkish'], ['toilets', 'ramps', 'dining area']),
        ];
    } // end constructor()
    RestaurantService.prototype.getRestaurants = function () {
        return this.restaurants;
    }; // end getRestaurant()
    RestaurantService.prototype.getRestaurantsByCounty = function (countyIn) {
        for (var i = 0; i < this.restaurants.length; i++) {
            if (this.restaurants[i].county === countyIn) {
                this.countyOut.push(this.restaurants[i]);
            }
        }
        return this.countyOut;
    }; // end getRestaurant()
    RestaurantService.prototype.getRestaurantById = function (id) {
        return this.restaurants[id];
    }; // end getRestaurantById()
    return RestaurantService;
}());
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=restaurant-service.js.map