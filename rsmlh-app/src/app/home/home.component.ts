import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    lat: number = 16.292236;
    lng: number = 80.441920;
    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
