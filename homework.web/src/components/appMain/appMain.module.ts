import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMain } from './appMain.component';
import { InfrastructureModule } from "../infrastructure/infrastructure.module";

// Obsolete.. remove later when safe...
import {ArithmaticGameModule} from "../../games/arithmeticGame/arithmaticGame.module";

@NgModule({
    imports: [BrowserModule, ArithmaticGameModule, InfrastructureModule],
    declarations: [AppMain],
    bootstrap: [AppMain],
})

export class AppModule {
}