import {Injectable} from '@angular/core';

export class Restaurant {
	constructor(
			public id: number,
			public county: string,
			public name: string,
			public blurb: string;
			public address: string,
			public imageURL: string,
			public hours: string,
			public cuisines: Array<string>,
			//public LatLng: Array<number>,
			public facilities: Array<string>,
			public reviews: Array<string>) {

	}
}// end Restaurant class
@Injectable()
export class RestaurantService {

	private restaurants: Array<Restaurant>;
	private countyOut: Array<Restaurant>;
	public reviews: Array<string> = [];

	constructor() {

		this.reviews = [
            "This restaurant was suggested to us by our hotel staff and it was completely on point. " +
            "She had the fish of the day and I had the rib eye steak with blue cheese crust and sauteed mushrooms. Both meals were amazing. " +
            "Furthermore, the atmosphere was excellent and the staff was great. I would recommend this restaurant for couples. \n - Jason Ajax",

            "Food was wonderful. The venison and the fillet steak are wonderful. Staff are very attentive. " +
            "We also had a rather nice bottle of rioja. Cremebrule was very nice. \n - Pepsiman",

            "A few years ago when we were attending an Irish rugby International match, we were looking for somewhere to eat and found this little restaurant by accident. " +
            "The meal was so delicious that every time we visit we make a point of booking a table. \n - Jim Pickens",

            "Going to this place was a total waste of time! I ordered a simple chicken curry, and yet it took an hour to get to me! Thankfully the " +
            "beer and free WiFi were decent! \n - Daniel Click",

            "It was over priced, and overrated. My mother would have made a better dish, and she's blind! I'll never come back here again and I would " +
            "hope people see my side and decide to not come back either. \n - Tim O'Byrne",

            "The restaurant is pretty homey - feels like I never left my house to begin with. Nice, warm and friendly atmosphere, I honestly can't wait " +
            "to come back and bring all my family and friends! \n - Baron Corbin",

            "You know what happens when you serve Chris Jericho average food? Huh? You know what happens? Restaurant....YOU JUST MADE THE LIST! \n - Chris Jericho"
        ];

		this.restaurants = [
			new Restaurant(0, "Dublin", 'Bloom Brasserie', 'Bloom Brasserie & Wine Bar is owner-operated by two young Dublin brothers who are fully committed to delivering a fantastic dining experience for all their guests.', '11 Baggot Street Upper, Dublin 4', '#', '12pm-10:30pm', ['Irish', 'European'], ['Outdoor seating', 'Reservations', 'Serves Alcohol'], [this.reviews[0],this.reviews[1], this.reviews[2]]),

			new Restaurant(1, "Dublin", 'Yangs', 'A classic style chinese experience', '436 Clontarf Road, Dublin', '#', '5pm-10pm', ['Chinese'], ['Takeout', 'Reservations', 'Wheelchair accessible'], [this.reviews[3],this.reviews[4]]),

			new Restaurant(2, "Cork", 'Haveli Indian Restaurant', 'Small intimate restaurant serving dining and take away customers. Please note we open on Bank Holiday Mondays also and close the Tuesday immediately after the Bank Holiday!!', "Morris House, Douglas West, Douglas, Cork", '#', '5pm-11pm', ['Indian', 'Asian'], ['Takeout', 'Serves Alcohol'], [this.reviews[5],this.reviews[6], this.reviews[2]]),

			new Restaurant(3, "Galway", 'The Dough Bros', 'From Street Stall To Pop Up, From Pop Up To Permanent. When we first started people said you cant open a restaurant and just serve pizza. Well we did and our little pizzeria has just made it into The Top 100 Restaurants in Ireland! Its fun dining not fine dining at The Dough Bros, come check it out!', 'Middle Street, Galway SE6, Ireland', '#', '12pm-10pm', ['Italian'], ['Takeout', 'Wheelchair accessible'], [this.reviews[0],this.reviews[4], this.reviews[3]]),

			new Restaurant(4, "Cork", 'Franciscan Well Brewery', 'Corks Franciscan Well Brewery and Brew Pub is one of Irelands longest established and best respected craft breweries. The Well has gained national fame for its popular beers along with international recognition for its numerous craft beer awards from across Europe along with their successful collaboration with Jameson Whiskey.', '14b North Mall, Cork City, Cork', '#', '1pm-11:30pm', ['Italian'], ['Television', 'Serves Alcohol', 'Accepts Visa'], [this.reviews[2],this.reviews[4], this.reviews[6]]),

			new Restaurant(5, "Cork", 'The Fish Wife', 'The Fish Wife is a new Take away on the Cork scene. the Fish Wife prides itself on quality locally sourced fresh food. Burgers are produced daily by the local butcher. Chips are cut daily in the shop and fish are sourced locally. Specials vary depending on availabilty. Shop is charming, quirky and homely. Small but cute!!', "45A Maccurtain Street, Cork", '#', '12pm-2am', ['Irish', 'Seafood'], ['Delivery', 'Takeout'], [this.reviews[0],this.reviews[5]),

			new Restaurant(6, "Galway", 'Oran Tandoori', 'Experience the finest Indian cuisine served in a warm, welcoming atmosphere.We have been serving the finest Indian cuisine to the people of Oranmore.', 'Unit 2 Howley Court, Oranmore, Galway 0091', '#', '5pm-11pm', ['Indian', 'Asian'], ['Buffet', 'Wheelchair accessible'], [this.reviews[3]]),

			new Restaurant(7, "Limerick", 'Aroi', 'Authentic Thai and Asian food, right here, in Limerick!', "1 O'Connell Street, Limerick", '#', '12pm-9:30pm', ['Thai', 'Asian'], ['Delivery', 'Wheelchair accessible'], [this.reviews[0],this.reviews[1], this.reviews[2]]),

			new Restaurant(8, "Limerick", 'Bon Appetit', 'Experience the finest French cuisine', "Cornmarket Row, The Milk Market, Limerick", '#', '12pm-9:30pm', ['French'], ['Takeout', 'Wheelchair accessible', 'Outdoor seating'], [this.reviews[3],this.reviews[4], this.reviews[5]]),

			new Restaurant(9, "Limerick", 'The Locke', 'The Locke Bar is one of Limericks best loved traditional Irish bars and seafood restaurants in the heart of Limerick Citys medieval quarter. The Locke is synonymous in Limerick as well as further afield for its genuine Irish hospitality, incredible atmosphere and unforgettable music sessions.', "3 George's Quay, Limerick", '#', '9am-11:30pm', ['Irish'], ['Takeout', 'Wine and beer', 'Outdoor seating'], [this.reviews[3],this.reviews[1], this.reviews[6]]),

			new Restaurant(10, "Galway", 'Le Petit Pois', 'Do you prefer just a glass of wine and nibbles in our heated wine garden? Or a journey through French Cuisine in our cosy restaurant room? Discover our incredible set menus from Platter menus to a full Pairing of three dishes and three glasses of wine for only 60 euros! Open on Sunday only during bank holidays and holidays.', 'Victoria Place, Galway', '#', '6pm-10pm', ['French'], ['Reservations', 'Outdoor seating'], [this.reviews[0],this.reviews[4]]),

			new Restaurant(11, "Kilkenny", 'La Rivista', 'Join us at La Rivista for a great mix of Irish and Italian food!', "22 Parliament Street, Kilkenny", '#', '5pm-10pm', ['Irish', 'Italian'], ['Takeout', 'Wheelchair accessible', 'Free WiFi'], [this.reviews[1],this.reviews[3]]),

			new Restaurant(12, "Kilkenny", 'Campagne', 'Whether its a romantic evening or a business meeting, we have you covered!', "5 The Arches, Gashouse Lane, Kilkenny", '#', '5pm-10pm', ['French', 'Irish'], ['Reservations', 'Wheelchair accessible'], [this.reviews[0],this.reviews[1], this.reviews[2]]),

			new Restaurant(13, "Dublin", 'Pearl Brasserie', 'Pearl Brasserie restaurant Dublin opened its doors on the 7th December 2000. Pearl Brasserie continues to perform at the top of the game in Dublin. Bon Appetite!', '20 Merrion Street Upper, Dublin', '#', '12pm-10pm', ['French'], ['Private dining', 'Reservations', 'Free WiFi', 'Full bar'], [this.reviews[4],this.reviews[2], this.reviews[6]]),

			new Restaurant(14, "Kilkenny", 'Petronella Restaurant & Cafe', 'From wherever your are standing on the High Street in Kilkenny, a few minutes walk will get you to the most famous of all the slips, the Butterslip Lane and to Petronella, the citys most recently opened Restaurant-Cafe', "80/81 Butter Slip, Off High Street, Kilkenny", '#', '11:30am-9pm', ['Irish'], ['Reservations', 'Free WiFi'], [this.reviews[0],this.reviews[1]]),

			new Restaurant(15, "Wexford", 'La Cote', 'Modern Seafood Restaurant, Personally run. Catering to all tastes, full wine list available. La Cote offers contemporary cooking using locally sourced ingredients at prices that are affordable. ​At a casual setting overlooking Wexfords Quay front', 'Commerical Quay, Wexford', '#', '5:30pm-9:30pm', ['French', 'Irish'], ['Private dining', 'Reservations', 'Free WiFi', 'Full bar'], [this.reviews[2],this.reviews[5]]),

			new Restaurant(16, "Wexford", 'The Red Elephant', 'The best Asian and Thai food restaurant in Wexford! Join us!', 'Custom House Quay, Wexford', '#', '12pm-10:30pm', ['Asian', 'Thai'], ['Takeout', 'Reservations', 'Wheelchair accessible', 'Serves Alcohol'], [this.reviews[3],this.reviews[1], this.reviews[4]]),

			new Restaurant(17, "Wexford", 'The Cloch Ban', 'Classic Irish food', 'Main Street, Clonroche, Wexford', '#', 'All hours', ['Irish'], ['Seating'], [this.reviews[0],this.reviews[1], this.reviews[2]])
		];
	}// end constructor()
	getRestaurants(): Array<Restaurant> {
		return this.restaurants;
	}// end getRestaurant()
	getRestaurantsByCounty(countyIn: string): Array<Restaurant> {
		
		for (var i = 0; i < this.restaurants.length; i++) {
			if(this.restaurants[i].county===countyIn) {
				this.countyOut.push(this.restaurants[i]);
			}
		}
		return this.countyOut;
	}// end getRestaurant()
	getRestaurantById(id: number): Restaurant {
		return this.restaurants[id];
	}// end getRestaurantById()
}