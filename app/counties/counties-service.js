"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var town_1 = require('../town/town');
var county_1 = require('../county/county');
var CountyService = (function () {
    function CountyService() {
    }
    CountyService.prototype.getCounties = function () {
        return [
            new county_1.County(1, 'Dublin'),
            new county_1.County(2, 'Cork'),
            new county_1.County(3, 'Limerick'),
            new county_1.County(4, 'Galway'),
            new county_1.County(5, 'Kilkenny'),
            new county_1.County(6, 'Wexford')
        ];
    };
    CountyService.prototype.getTowns = function () {
        return [
            new town_1.Town(1, 1, 'Dublin City'),
            new town_1.Town(2, 1, 'Dublin 4'),
            new town_1.Town(1, 2, 'Douglas'),
            new town_1.Town(2, 2, 'Cork City'),
            new town_1.Town(1, 3, 'Limerick City'),
            new town_1.Town(1, 4, 'Galway City'),
            new town_1.Town(2, 4, 'Oranmore'),
            new town_1.Town(1, 5, 'Kilkenny'),
            new town_1.Town(1, 6, 'Clonroche'),
            new town_1.Town(2, 6, 'Wexford City')
        ];
    };
    CountyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CountyService);
    return CountyService;
}());
exports.CountyService = CountyService;
//# sourceMappingURL=counties-service.js.map