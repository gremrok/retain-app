import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: 'App',
    selector: 'app',
    template: `
    <div>
        <h3>
            yo, world!
        </h3>
    </div>
    `
})
export class App implements OnInit {
    constructor() { }

    ngOnInit() { }

}