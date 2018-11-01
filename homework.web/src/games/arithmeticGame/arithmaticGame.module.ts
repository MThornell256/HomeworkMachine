import {NgModule} from "@angular/core";

import { ArithmaticGame } from './arithmeticGame.component';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ArithmaticGame],
    bootstrap: [ArithmaticGame],
    exports: [ArithmaticGame],
})

export class ArithmaticGameModule {
}