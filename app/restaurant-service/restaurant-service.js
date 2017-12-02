"use strict";
var Restaurant = (function () {
    function Restaurant(id, county, name, blurb, address, imageURL, hours, cuisines, 
        //public LatLng: Array<number>,
        facilities) {
        this.id = id;
        this.county = county;
        this.name = name;
        this.blurb = blurb;
        this.address = address;
        this.imageURL = imageURL;
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
            new Restaurant(0, "Dublin", 'Bloom Brasserie', 'Bloom Brasserie & Wine Bar is owner-operated by two young Dublin brothers who are fully committed to delivering a fantastic dining experience for all their guests.', '11 Baggot Street Upper, Dublin 4', '#', '12pm-10:30pm', ['Irish', 'European'], ['Outdoor seating', 'Reservations', 'Serves Alcohol']),
            new Restaurant(1, "Dublin", 'Yangs', 'A classic style chinese experience', '436 Clontarf Road, Dublin', '#', '5pm-10pm', ['Chinese'], ['Takeout', 'Reservations', 'Wheelchair accessible']),
            new Restaurant(2, "Cork", 'Haveli Indian Restaurant', 'Small intimate restaurant serving dining and take away customers. Please note we open on Bank Holiday Mondays also and close the Tuesday immediately after the Bank Holiday!!', "Morris House, Douglas West, Douglas, Cork", '#', '5pm-11pm', ['Indian', 'Asian'], ['Takeout', 'Serves Alcohol']),
            new Restaurant(3, "Galway", 'The Dough Bros', 'From Street Stall To Pop Up, From Pop Up To Permanent. When we first started people said you cant open a restaurant and just serve pizza. Well we did and our little pizzeria has just made it into The Top 100 Restaurants in Ireland! Its fun dining not fine dining at The Dough Bros, come check it out!', 'Middle Street, Galway SE6, Ireland', '#', '12pm-10pm', ['Italian'], ['Takeout', 'Wheelchair accessible']),
            new Restaurant(4, "Cork", 'Franciscan Well Brewery', 'Corks Franciscan Well Brewery and Brew Pub is one of Irelands longest established and best respected craft breweries. The Well has gained national fame for its popular beers along with international recognition for its numerous craft beer awards from across Europe along with their successful collaboration with Jameson Whiskey.', '14b North Mall, Cork City, Cork', '#', '1pm-11:30pm', ['Italian'], ['Television', 'Serves Alcohol', 'Accepts Visa']),
            new Restaurant(5, "Cork", 'The Fish Wife', 'The Fish Wife is a new Take away on the Cork scene. the Fish Wife prides itself on quality locally sourced fresh food. Burgers are produced daily by the local butcher. Chips are cut daily in the shop and fish are sourced locally. Specials vary depending on availabilty. Shop is charming, quirky and homely. Small but cute!!', "45A Maccurtain Street, Cork", '#', '12pm-2am', ['Irish', 'Seafood'], ['Delivery', 'Takeout']),
            new Restaurant(6, "Galway", 'Oran Tandoori', 'Experience the finest Indian cuisine served in a warm, welcoming atmosphere.We have been serving the finest Indian cuisine to the people of Oranmore.', 'Unit 2 Howley Court, Oranmore, Galway 0091', '#', '5pm-11pm', ['Indian', 'Asian'], ['Buffet', 'Wheelchair accessible']),
            new Restaurant(7, "Limerick", 'Aroi', 'Authentic Thai and Asian food, right here, in Limerick!', "1 O'Connell Street, Limerick", '#', '12pm-9:30pm', ['Thai', 'Asian'], ['Delivery', 'Wheelchair accessible']),
            new Restaurant(8, "Limerick", 'Bon Appetit', 'Experience the finest French cuisine', "Cornmarket Row, The Milk Market, Limerick", '#', '12pm-9:30pm', ['French'], ['Takeout', 'Wheelchair accessible', 'Outdoor seating']),
            new Restaurant(9, "Limerick", 'The Locke', 'The Locke Bar is one of Limericks best loved traditional Irish bars and seafood restaurants in the heart of Limerick Citys medieval quarter. The Locke is synonymous in Limerick as well as further afield for its genuine Irish hospitality, incredible atmosphere and unforgettable music sessions.', "3 George's Quay, Limerick", '#', '9am-11:30pm', ['Irish'], ['Takeout', 'Wine and beer', 'Outdoor seating']),
            new Restaurant(10, "Galway", 'Le Petit Pois', 'Do you prefer just a glass of wine and nibbles in our heated wine garden? Or a journey through French Cuisine in our cosy restaurant room? Discover our incredible set menus from Platter menus to a full Pairing of three dishes and three glasses of wine for only 60 euros! Open on Sunday only during bank holidays and holidays.', 'Victoria Place, Galway', '#', '6pm-10pm', ['French'], ['Reservations', 'Outdoor seating']),
            new Restaurant(11, "Kilkenny", 'La Rivista', 'Join us at La Rivista for a great mix of Irish and Italian food!', "22 Parliament Street, Kilkenny", '#', '5pm-10pm', ['Irish', 'Italian'], ['Takeout', 'Wheelchair accessible', 'Free WiFi']),
            new Restaurant(12, "Kilkenny", 'Campagne', 'Whether its a romantic evening or a business meeting, we have you covered!', "5 The Arches, Gashouse Lane, Kilkenny", '#', '5pm-10pm', ['French', 'Irish'], ['Reservations', 'Wheelchair accessible']),
            new Restaurant(13, "Dublin", 'Pearl Brasserie', 'Pearl Brasserie restaurant Dublin opened its doors on the 7th December 2000. Pearl Brasserie continues to perform at the top of the game in Dublin. Bon Appetite!', '20 Merrion Street Upper, Dublin', '#', '12pm-10pm', ['French'], ['Private dining', 'Reservations', 'Free WiFi', 'Full bar']),
            new Restaurant(14, "Kilkenny", 'Petronella Restaurant & Cafe', 'From wherever your are standing on the High Street in Kilkenny, a few minutes walk will get you to the most famous of all the slips, the Butterslip Lane and to Petronella, the citys most recently opened Restaurant-Cafe', "80/81 Butter Slip, Off High Street, Kilkenny", '#', '11:30am-9pm', ['Irish'], ['Reservations', 'Free WiFi']),
            new Restaurant(15, "Wexford", 'La Cote', 'Modern Seafood Restaurant, Personally run. Catering to all tastes, full wine list available. La Cote offers contemporary cooking using locally sourced ingredients at prices that are affordable. ​At a casual setting overlooking Wexfords Quay front', 'Commerical Quay, Wexford', '#', '5:30pm-9:30pm', ['French', 'Irish'], ['Private dining', 'Reservations', 'Free WiFi', 'Full bar']),
            new Restaurant(16, "Wexford", 'The Red Elephant', 'The best Asian and Thai food restaurant in Wexford! Join us!', 'Custom House Quay, Wexford', '#', '12pm-10:30pm', ['Asian', 'Thai'], ['Takeout', 'Reservations', 'Wheelchair accessible', 'Serves Alcohol']),
            new Restaurant(17, "Wexford", 'The Cloch Ban', 'Classic Irish food', 'Main Street, Clonroche, Wexford', '#', 'All hours', ['Irish'], ['Seating'])
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