import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services';
import { Store } from '../store';

@Component({
    selector: 'notes-container',
    template: `
        <div class="row center-xs notes">
        <div class="col-xs-6 creator">
            <note-creator (createNote)="onCreateNote($event)"></note-creator>
        </div>
        <div class="notes col-xs-8">
            <div class="row between-xs">
            <note-card *ngFor="let note of notes"
                class="col-xs-4"
                [thisnote]="note"
                (checked)="onNoteChecked($event)"
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
    notes = [];

    constructor(
        private noteService: NoteService,
        private store: Store
    ) { }
        
    ngOnInit() {
        this.noteService.getNotes()
		.subscribe();

        this.store.changes
        .map(data => data.notes)
        .subscribe(notes => this.notes = notes);
    }

    onCreateNote(note){
        this.noteService.createNote(note)
        .subscribe();
    }

    onNoteChecked(note){
        this.noteService.completeNote(note)
		.subscribe();
    }
}