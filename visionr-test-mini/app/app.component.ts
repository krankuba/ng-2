import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
        <a routerLink="/home" routerLinkActive="active">HOME</a>
        <a routerLink="/about" routerLinkActive="active">ABOUT</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: [ '../css/app.components.css']
})
export class AppComponent {
    title = 'Angular Mini Demo Project'
}