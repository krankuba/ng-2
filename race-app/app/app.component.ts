import { Component } from '@angular/core';

@Component({
    selector: 'racing-app',
    template: `
        <h1>{{heading}}</h1>
        <my-races>Loading Races..</my-races>
    `
})
export class AppComponent {
    heading = "Ultra Racing Schedule"
}