import { Component, OnInit } from '@angular/core';
import { RaceModel } from './race-model';
import { RaceService } from './race.service';

@Component({
    selector: 'my-races',
    templateUrl: 'app/races.component.html',
    styleUrls: ['app/races.component.css']
})

export class RacesComponent implements OnInit {
    heading = "Ultra Racing Schedule"
    cash = 10000;
    races: RaceModel[];

    constructor(private raceService: RaceService) { }

    ngOnInit() {
        this.races = this.raceService.getRaces();
    }

    totalCost() {
        let sum = 0;
        for (let race of this.races) {
            if (race.isRacing) sum += race.entryFee;
        }
        return sum;
    }

    cashLeft() {
        return this.cash - this.totalCost();
    }

    enterRace(race) {
        if (this.cashLeft() > race.entryFee) {
            race.isRacing = true;
        } else {
            alert("You don't have enough funds to enter the race.");
        }
    }

    cancelRace(race) {
        race.isRacing = false;
    }
    
    downCash(cash) {
        if (cash > 0) {
            this.cash -= 1000;
        }
    }

    upCash(cash) {
        this.cash += 1000;
    }
} 