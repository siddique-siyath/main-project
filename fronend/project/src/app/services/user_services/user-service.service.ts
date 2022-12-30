import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";




@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private _registerUrl = "http://localhost:3000/user_signup"
  private _loginUrl = "http://localhost:3000/user_login"


  constructor (private http:HttpClient) {}

 registerUser(user: any) {
    console.log(user);
    return this.http.post<any>(this._registerUrl, user) 
  }


  loginUser(user: any) {
    console.log("yes");
    console.log(this._loginUrl);
    console.log(user);
    return this.http.post<any>(this._loginUrl, user)
  }

}
