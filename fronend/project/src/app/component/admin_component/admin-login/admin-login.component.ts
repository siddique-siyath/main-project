import { Component, OnInit } from '@angular/core';
import { AdminServicesServicesService } from "../../../services/admin_services/admin-services.services.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  ErrMessage = ''
  
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  name:string = "Login";

  loginAdminData = {
    "email": '',
    "password": ''
  }

  constructor (private _auth:AdminServicesServicesService , private _router:Router) {}

  ngOnInit(): void {
      
  }

  loginAdmin() {
    this._auth.loginUser(this.loginAdminData)
    .subscribe(
      (res:any) => {
        console.log(res);
        if(res.message == 'admin_logined'){
        this._router.navigate(['/admin_home'])
        }else if(res.errMessage == 'incorrectEmail'){
          this.ErrMessage = 'Email is not valid'
        }else if(res.errMessage == 'incorrectPassword'){
          this.ErrMessage = 'password is invalid'
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
