import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";


export class AuthGuard implements CanActivate {

    canActivate() {
        if (!sessionStorage.getItem('token')) {
            return true;
        }
    }

}