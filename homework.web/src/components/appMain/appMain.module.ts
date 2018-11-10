import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMain } from './appMain.component';
import {ArithmaticGameModule} from "../../games/arithmeticGame/arithmaticGame.module";

@NgModule({
    imports: [BrowserModule, ArithmaticGameModule],
    declarations: [AppMain],
    bootstrap: [AppMain],
})

export class AppModule {
}