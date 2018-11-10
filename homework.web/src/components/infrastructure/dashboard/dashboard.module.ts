import { NgModule } from '@angular/core';

import {DashboardComponent} from './dashboard.component';

import { UserLevelBarModule } from "../userLevelBar/userLevelBar.module";

@NgModule({
    imports: [ UserLevelBarModule ],
    exports: [ DashboardComponent ],
    declarations: [ DashboardComponent ],
    providers: [],
})
export class DashboardModule {
}
