import { Injectable } from '@angular/core'
import { ApiService } from './api';
import { StoreHelper } from './store-helper';
import 'rxjs/Rx';

@Injectable()
export class NoteService{
	path: string = '/notes';
	constructor(
		private api: ApiService,
		private storeHelper: StoreHelper
	){

	}

	public createNote(note){
		return this.api.post(this.path, note)
		.do(savedNote => this.storeHelper.add('notes', savedNote));
	}

	public getNotes(){
		return this.api.get(this.path)
		.do((resp: any) => this.storeHelper.update('notes', resp.data));
	}

	public completeNote(note){
		return this.api.delete(`${this.path}${note.id}`)
		.do((res: any) => this.storeHelper.findAndDelete('notes', res.id));
	}
}