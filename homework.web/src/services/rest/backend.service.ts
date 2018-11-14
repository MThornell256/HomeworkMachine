import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as Rx from "rxjs";

@Injectable()
export class BackendService {

    // Must end in '/'
    private baseAddress: string = 'http://localhost:3000/';
    private tokenKey: string = 'token';

    constructor(private http: HttpClient) {
    }

    logIn(username: string, password: string): Rx.Observable<boolean> {

        const body = {
            username,
            password,
        };

        const result = new Rx.Subject<boolean>();

        this.http.post('http://localhost:3000/login', body)
            .subscribe((loginResult: LoginResponse) => {
                if (loginResult.token) {
                    sessionStorage.setItem(this.tokenKey, loginResult.token);
                }

                result.next(!!loginResult.token);
            });

        return result;
    }

    logOut(): void {
        sessionStorage.removeItem(this.tokenKey);
    }


    get<T> (endpointUrl: string, params: any): Rx.Observable<T> {
        return this.http.get<T>(this.baseAddress + endpointUrl, {
            headers: {
                params,
            },
        });
    }

    post<T>(endpointUrl: string, body: any, options?: {}): Rx.Observable<T> {
        return this.http.post<T>(this.baseAddress + endpointUrl, body, options || {});
    }

    secureGet<T> (endpointUrl: string, params: any): Rx.Observable<T> {
        return this.http.get<T>(this.baseAddress + endpointUrl, {
            headers: {
                bearer: sessionStorage.getItem(this.tokenKey),
                params,
            },
        });
    }

    securePost<T>(endpointUrl: string, body: any): Rx.Observable<T> {
        return this.http.post<T>(this.baseAddress + endpointUrl, body, {
            headers: {
                bearer: sessionStorage.getItem(this.tokenKey),
            },
        });
    }

    securePatch<T> (endpointUrl: string, body: any): Rx.Observable<T> {
        return this.http.patch<T>(this.baseAddress + endpointUrl, body, {
            headers: {
                bearer: sessionStorage.getItem(this.tokenKey),
            },
        });
    }

    securePut<T> (endpointUrl: string, body: any): Rx.Observable<T> {
        return this.http.put<T>(this.baseAddress + endpointUrl, body, {
            headers: {
                bearer: sessionStorage.getItem(this.tokenKey),
            },
        });
    }

    secureDelete<T> (endpointUrl: string, params: any): Rx.Observable<T> {
        return this.http.delete<T>(this.baseAddress + endpointUrl, {
            headers: {
                bearer: sessionStorage.getItem(this.tokenKey),
                params,
            },
        });
    }
}

interface LoginResponse extends BackendResponse {
    token: string;
}

interface BackendResponse {
    error: string,
}