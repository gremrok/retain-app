import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App, providers, routes } from './app';
import { Main, Notes, About } from './app/containers';
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './app/ui';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routes
    ],
    bootstrap: [App],
    exports: [],
    declarations: [
        App,
        Main,
        AppBar,
        NoteCard,
        Notes,
        NoteCreator,
        ColorPicker,
        About
    ],
    providers
})
export class AppModule { };

platformBrowserDynamic().bootstrapModule(AppModule);