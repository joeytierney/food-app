import {Injectable} from '@angular/core';

@Injectable()
export class ReviewTrackerService{
	
	private id: number;
    private static nextId: number = 1;

    constructor() {
        this.id = ReviewTrackerService.nextId++;
    }
  
    log(message: string): void {
        console.log(`Logger ${this.id} message: ${message}`);
    }
}