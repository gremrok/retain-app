import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: 'Main',
    selector: 'main-container',
    template: `
    <div><main class="main">Content here</main></div>
    `
})
export class Main implements OnInit {
    constructor() { }

    ngOnInit() { }
}