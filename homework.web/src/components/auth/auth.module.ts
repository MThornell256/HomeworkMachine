import {NgModule}  from  '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {SignUpComponent} from "./signUp/signUp.component";
import {SignInComponent} from "./signIn/signIn.component";
import {AuthMainComponent} from "./authMain/authMain.component";


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [AuthMainComponent],
    declarations: [SignUpComponent, SignInComponent, AuthMainComponent],
    providers: [],
})
export class AuthModule {
}
