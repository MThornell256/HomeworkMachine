import { NgModule }  from  '@angular/core';

import {SignUpComponent} from "./signUp/signUp.component";
import {SignInComponent} from "./signIn/signIn.component";
import {AuthMainComponent} from "./authMain/authMain.component";

@NgModule({
    imports: [SignUpComponent, SignInComponent, AuthMainComponent],
    exports: [SignUpComponent, SignInComponent, AuthMainComponent],
    declarations: [],
    providers: [],
})
export class NameModule {
}
