import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sign-in',
    templateUrl: 'src/components/auth/signIn/signIn.template.html'
})

export class SignInComponent implements OnInit {

    username = '';
    password = '';

    constructor() { }

    ngOnInit() { }

    logIn() : void {
        console.log(`Username: ${this.username} Password: ${this.password}`)
    }
}