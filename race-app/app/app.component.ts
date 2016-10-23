import { Component } from '@angular/core';
import { RaceService } from './race.service';

@Component({
    selector: 'racing-app',
    template: `
        <h1>{{heading}}</h1>
        <my-races>Loading Races..</my-races>
    `,
    providers: [RaceService]
})
export class AppComponent {
    heading = "Ultra Racing Schedule"
}