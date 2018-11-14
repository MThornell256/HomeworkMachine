import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {BackendService} from "../../../services/rest/backend.service";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'sign-in',
    templateUrl: 'src/components/auth/signIn/signIn.template.html',
    providers: [BackendService, HttpClient]
})

export class SignInComponent implements OnInit {

    username = '';
    password = '';

    setErrorMode = false;

    constructor(private router: Router, private backendService: BackendService) {
    }

    ngOnInit() {
    }

    logIn(): void {
        console.log(`Username: ${this.username} Password: ${this.password}`);

        this.backendService.logIn(this.username, this.password)
            .subscribe(loginResult => {
                if (loginResult) {
                    this.router.navigateByUrl("/");
                } else {
                    this.setErrorMode = true;
                }

            })
    }
}