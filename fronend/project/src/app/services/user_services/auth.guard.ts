import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { UserServiceService } from "../user_services/user-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private _authService : UserServiceService, private _router:Router) { }

  canActivate(): boolean {
    if(this._authService.loggedIn()){
      return true
    } else{
    this._router.navigate(['/user_login'])
    return false
    }
  }

  
}
