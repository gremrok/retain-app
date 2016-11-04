import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App } from './app';
import { Main, Notes } from './app/containers';
import { AppBar, NoteCard } from './app/ui';
@NgModule({
    imports: [BrowserModule],
    bootstrap: [App],
    exports: [],
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard,
        Notes
    ],
    providers: [],
})
export class AppModule { };

platformBrowserDynamic().bootstrapModule(AppModule);