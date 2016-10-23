import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
//new imports here:
import { RacesComponent } from './races.component';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, RacesComponent ], // <---- new imports decclarations here
    bootstrap:    [ AppComponent ]
})

export class AppModule { }