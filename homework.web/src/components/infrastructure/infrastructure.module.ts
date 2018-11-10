import { NgModule } from '@angular/core';

import { UserLevelBarModule } from "./userLevelBar/userLevelBar.module";
import { DashboardModule } from "./dashboard/dashboard.module";

@NgModule({
    imports: [DashboardModule, UserLevelBarModule],
    exports: [DashboardModule, UserLevelBarModule],
    declarations: [],
    providers: [],
})

export class InfrastructureModule {
}
