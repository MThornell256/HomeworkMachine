import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sign-up',
    templateUrl: 'src/components/auth/signUp/signUp.template.html'
})

export class SignUpComponent implements OnInit {

    username = '';
    password = '';
    passwordRetype = '';

    constructor() { }

    ngOnInit() { }

    signUp(): void {
        console.log(`userName: ${this.username} password: ${this.password} password2: ${this.passwordRetype}`)
    }
}