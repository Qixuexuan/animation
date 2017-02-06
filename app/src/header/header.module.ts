import { bootstrap } from '@angular/upgrade/src/angular_js';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HeaderComponent } from './header.component';

@NgModule({
    imports:[BrowserModule ,FormsModule,HttpModule],
    declarations:[HeaderComponent],
    exports:[HeaderComponent]
})

export class HeaderModule{}