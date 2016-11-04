import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: 'App',
    selector: 'app',
    template: `
    <div>
        <main-container></main-container>
    </div>
    `
})
export class App implements OnInit {
    constructor() { }

    ngOnInit() { }

}