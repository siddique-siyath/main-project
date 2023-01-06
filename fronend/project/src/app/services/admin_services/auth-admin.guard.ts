import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { AdminServicesServicesService } from "../admin_services/admin-services.services.service";

@Injectable({
  providedIn: 'root'
})

export class AuthAdminGuard implements CanActivate {

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }


  constructor(private _authService : AdminServicesServicesService, private _router:Router) { }

  canActivate(): boolean {
    if(this._authService.loggedIn()){
      return true
    } else{
    this._router.navigate(['/admin_login'])
    return false
    }
  }
  
}
