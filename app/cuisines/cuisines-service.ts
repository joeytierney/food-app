import {Injectable} from '@angular/core';
import {Cuisine} from '../cuisine/cuisine'


@Injectable()
export class CuisinesService {
    getCuisines() {
        return [
            new Cuisine(1, 'Asian'),
            new Cuisine(2, 'Chinese'),
            new Cuisine(3, 'European'),
            new Cuisine(4, 'French'),
            new Cuisine(5, 'Indian'),
            new Cuisine(6, 'Irish')
        ];
    }
}