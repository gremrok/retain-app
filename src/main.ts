import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { App }   from './app/app';

@NgModule({
    imports: [BrowserModule],
    bootstrap: [App],
    exports: [],
    declarations: [App],
    providers: [],
})
export class AppModule { };

platformBrowserDynamic().bootstrapModule(AppModule);