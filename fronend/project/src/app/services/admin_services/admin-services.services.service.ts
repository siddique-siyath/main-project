import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminServicesServicesService {


  private _loginUrl = "http://localhost:3000/admin/admin_login"
  private _userDataUrl = "http://localhost:3000/admin/user_data"
  private _BlockUserUrl = "http://localhost:3000/admin/user_block"
  private _UnBlockUserUrl = "http://localhost:3000/admin/user_unblock"

  constructor (private http:HttpClient) {}


  loginUser(user: any) {
    console.log("yes");
    console.log(this._loginUrl);
    console.log(user);
    return this.http.post<any>(this._loginUrl, user)
  }

 getUserData(){
    return this.http.get<any>(this._userDataUrl);
  }

  BlockUser(user:any) {
    return this.http.post<any>(this._BlockUserUrl,user)
  }

  UnBlockUser(user:any) {
    return this.http.post<any>(this._UnBlockUserUrl,user)
  }



}
