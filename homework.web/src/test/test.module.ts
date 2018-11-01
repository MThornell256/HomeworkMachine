import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './test.component';
import { ArithmaticGameModule } from "../games/arithmeticGame/arithmaticGame.module";

@NgModule({
    imports: [BrowserModule, ArithmaticGameModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})

export class AppModule {
}