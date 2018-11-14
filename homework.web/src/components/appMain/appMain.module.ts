import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';

import { AppMain } from './appMain.component';
import { InfrastructureModule } from "../infrastructure/infrastructure.module";

// Obsolete.. remove later when safe...
import {ArithmaticGameModule} from "../../games/arithmeticGame/arithmaticGame.module";
import {DashboardComponent} from "../infrastructure/dashboard/dashboard.component";
import {AuthMainComponent} from "../auth/authMain/authMain.component";
import {AuthModule} from "../auth/auth.module";
import {CommonModule} from "@angular/common";

const routes: Routes = [
    { path: 'auth', component: AuthMainComponent },
    { path: '', component: DashboardComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule, ArithmaticGameModule, InfrastructureModule, AuthModule, CommonModule],
    declarations: [AppMain],
    bootstrap: [AppMain],
})

export class AppModule {
}