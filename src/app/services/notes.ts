import { Injectable } from '@angular/core'
import { ApiService } from './api';

@Injectable()
export class NoteService{
	path: string = '/notes';
	constructor(private api: ApiService){

	}

	public createNote(note){
		return this.api.post(this.path, note);
	}

	public getNotes(){
		return this.api.get(this.path);
	}

	public completeNote(note){
		return this.api.delete(`${this.path}${note.id}`);
	}
}