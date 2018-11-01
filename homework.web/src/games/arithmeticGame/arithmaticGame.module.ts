import {NgModule} from "@angular/core";

import { ArithmaticGame } from './arithmeticGame.component';
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    imports: [BrowserModule],
    declarations: [ArithmaticGame],
    bootstrap: [ArithmaticGame],
    exports: [ArithmaticGame],
})

export class ArithmaticGameModule {
}