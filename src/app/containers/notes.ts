import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notes-container',
    template: `
        <div class="row center-xs notes">
        <div class="col-xs-6 creator">
            note creator here
        </div>
        <div class="notes col-xs-8">
            <div class="row between-xs">
            <note-card
                class="col-xs-4"
                [thisnote]="notes"
            >
            </note-card>
            </div>
        </div>
        </div>`,
    styles: [`
        .notes {
        padding-top: 50px;
        }
        .creator {
        margin-bottom: 40px; 
        }
    `]
})
export class Notes implements OnInit {
    constructor() { }
    notes = { title: 'this is a note', value: 'my first note', color: 'green' };
    ngOnInit() { }
}