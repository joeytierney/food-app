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
            new Town(1, 1, 'Clare City'),
            new Town(2, 1, 'Ennis'),
            new Town(3, 2, 'Cork City'),
            new Town(4, 3, 'Dublin City'),
            new Town(5, 3, 'Swords' ),
            new Town(6, 4, 'Galway City'),
            new Town(7, 4, 'Salthill'),
            new Town(8, 5, 'Waterford City' ),
            new Town(9, 5, 'Waterford City' ),
            new Town(10, 6, 'Wexford City')
        ];
    }
}