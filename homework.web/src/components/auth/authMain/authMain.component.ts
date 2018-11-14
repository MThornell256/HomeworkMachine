import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'auth-main',
    templateUrl: 'src/components/auth/authMain/authMain.template.html'
})

export class AuthMainComponent implements OnInit {

    mode: string = AuthDisplayModes.SIGN_IN;

    constructor() {
    }

    ngOnInit() {
    }
}

export const AuthDisplayModes =
{
    SIGN_IN: 'SIGN IN',
    SIGN_UP: 'SIGN UP',
    FORGOT_PASSWORD: 'FORGOT PASSWORD',
};