import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../services/rest/user.service";

@Component({
    selector: 'sign-up',
    templateUrl: 'src/components/auth/signUp/signUp.template.html',
    providers: [UserService, HttpClient]
})

export class SignUpComponent implements OnInit {

    username = '';
    password = '';
    passwordRetype = '';

    errors: string[] = [];

    constructor(private router: Router, private userService: UserService) {
    }

    ngOnInit() {
    }

    signUp(): void {
        console.log(`userName: ${this.username} password: ${this.password} password2: ${this.passwordRetype}`);

        // Reset errors
        this.errors = [];
        if (this.password.length <= 5) {
            this.errors.push('Password is not long enough, must longer then 5 characters.');
        }

        if (this.password !== this.passwordRetype) {
            this.errors.push('Passwords do not match.');
        }

        if (this.errors.length > 0) {
            return
        }

        this.userService.createUser({
            username: this.username,
            password: this.password,
        }).subscribe(
            ()=> {
                console.log(`SUCCESS`);
            },
            (err)=>{
                console.log(`FAILURE ${JSON.stringify(err)}`);
            }
        );


    }
}