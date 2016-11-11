import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <div>
        <router-outlet></router-outlet>
    </div>
    `
})
export class App implements OnInit {
    constructor() { }

    ngOnInit() { }

}