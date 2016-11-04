import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notes-container',
    template: `
        <div class="row center-xs notes">
        <div class="col-xs-6 creator">
            <note-creator (createNote)="onCreateNote($event)"></note-creator>
        </div>
        <div class="notes col-xs-8">
            <div class="row between-xs">
            <note-card *ngFor="let note of notes;"
                class="col-xs-4"
                [thisnote]="note"
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
    notes = [
        { title: 'this is a 1 note', value: 'my first note', color: 'green' },
        { title: 'this is a 2 note', value: 'my second note', color: 'yellow' },
        { title: 'this is a 3 note', value: 'my third note', color: 'red' }                
    ];
    ngOnInit() { }
    onCreateNote(note){
        this.notes.push(note);
    }
}