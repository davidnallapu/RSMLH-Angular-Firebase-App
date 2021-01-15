import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        NgbModule,
        FormsModule,
        RouterModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDdXhAhpXctvwA0v9rBVZcZKvq028sXax4'
          })
        
    ],
    declarations: [ HomeComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
