import {Injectable} from '@angular/core';
import {Town} from '../town/town';
import {County} from '../county/county';

@Injectable()
export class CountyService {
    getCounties() {
        return [
            new County(1, 'Dublin' ),
            new County(2, 'Cork' ),
            new County(3, 'Limerick'),
            new County(4, 'Galway' ),
            new County(5, 'Kilkenny'),
            new County(6, 'Wexford')
        ];
    }

    getTowns() {
        return [
            new Town(1, 1, 'Dublin City'),
            new Town(2, 1, 'Dublin 4'),
            new Town(1, 2, 'Douglas'),
            new Town(2, 2, 'Cork City'),
            new Town(1, 3, 'Limerick City'),
            new Town(1, 4, 'Galway City'),
            new Town(2, 4, 'Oranmore'),
            new Town(1, 5, 'Kilkenny'),
            new Town(1, 6, 'Clonroche'),
            new Town(2, 6, 'Wexford City')
        ];
    }
}