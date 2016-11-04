import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app';
import { Main, Notes } from './app/containers';
import { AppBar, NoteCard, NoteCreator } from './app/ui';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    bootstrap: [App],
    exports: [],
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard,
        Notes,
        NoteCreator
    ],
    providers: [],
})
export class AppModule { };

platformBrowserDynamic().bootstrapModule(AppModule);