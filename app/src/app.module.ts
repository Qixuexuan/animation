import {NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component'
import { HeaderModule } from './header/header.module';

@NgModule({
    imports:      [BrowserModule,HeaderModule],
    declarations: [ AppComponent],
    bootstrap:    [ AppComponent ]
})

export class AppModule{}
   