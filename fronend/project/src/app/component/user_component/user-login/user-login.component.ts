import { Component } from '@angular/core';
import { UserServiceService } from "../../../services/user_services/user-service.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {

  ErrMessage = ''
  
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  name:string = "Login";

  loginUserData = {
    "email": '',
    "password": ''
  }

  constructor (private _auth:UserServiceService , private _router:Router) {}

  ngOnInit(): void {
      
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      (res:any) => {
        console.log(res);
        if(res.message == 'logined'){
          console.log(res);
          console.log(res.token);
          console.log(res.message);
        localStorage.setItem('userToken', res.token)
        this._router.navigate(['/user_home'])
        }else if(res.errMessage == 'incorrectEmail'){
          this.ErrMessage = 'Email is not valid'
        }else if(res.errMessage == 'incorrectPassword'){
          this.ErrMessage = 'password is invalid'
        }else if(res.errMessage == 'userBlocked'){
          this.ErrMessage = 'user Blocked'
        }else{

        }
      },
      (err:any) => {
      console.log(err.message)
      console.log('error');
      }
      
    )
  }

}
