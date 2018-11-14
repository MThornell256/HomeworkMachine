import {Injectable} from '@angular/core';
import {BackendService} from "./backend.service";
import {User} from "@models/user";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

    constructor(private backendService: BackendService) {

    }

    getUser(username: string) {
        return this.backendService.secureGet<User>('users', { username });
    }

    createUser(user: User): Observable<User> {
        return this.backendService.post<User>('signup', user);
    }

    deleteUser(username: string) {
        return this.backendService.secureDelete<User>('users', { username });
    }

    updatePassword(username: string, password: string) {
        return this.backendService.securePatch<User>('users', { username, password });
    }
}