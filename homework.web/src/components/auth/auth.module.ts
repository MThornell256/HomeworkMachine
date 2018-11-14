import {NgModule}  from  '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {SignUpComponent} from "./signUp/signUp.component";
import {SignInComponent} from "./signIn/signIn.component";
import {AuthMainComponent} from "./authMain/authMain.component";
import {HttpClientModule} from "@angular/common/http";
import {BackendService} from "../../services/rest/backend.service";

@NgModule({
    imports: [CommonModule, FormsModule, HttpClientModule],
    exports: [AuthMainComponent],
    declarations: [SignUpComponent, SignInComponent, AuthMainComponent],
    providers: [BackendService],
})
export class AuthModule {
}
