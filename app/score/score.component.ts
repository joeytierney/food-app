// Implement ScoreComponent here.
import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-score',
    templateUrl: 'score.component.html'
})

export default class ScoreComponent implements OnInit {
	
    @Input('score') score: number;
  	
   	starsEmpty: Array<boolean> = [];

    ngOnInit() {	
    	if (this.score < 1){
    		this.starsEmpty.push(true,true,true,true,true);
    		return;
    	}
    	else if (this.score < 2){
    		this.starsEmpty.push(false,true,true,true,true);
    		return;
    	}
    	else if (this.score < 3){
    		this.starsEmpty.push(false,false,true,true,true);
    		return;
    	}
    	else if (this.score < 4){
    		this.starsEmpty.push(false,false,false,true,true);
    		return;
    	}
    	else if (this.score < 5){
    		this.starsEmpty.push(false,false,false,false,true);
    		return;
    	}
    	else {
    		this.starsEmpty.push(false,false,false,false,false);
    		return;
    	}
    }
}