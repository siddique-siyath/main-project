import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { VendorServicesService } from "../../../services/vendor_services/vendor-services.service";

@Component({
  selector: 'app-vendor-login',
  templateUrl: './vendor-login.component.html',
  styleUrls: ['./vendor-login.component.scss']
})
export class VendorLoginComponent {

  ErrMessage = ''
  
  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  name:string = "Login";

  loginVendorData = {
    "email": '',
    "password": ''
  }

  constructor (private _auth: VendorServicesService , private _router:Router) {}

  ngOnInit(): void {
      
  }

  loginVendor() {
    this._auth.loginVendor(this.loginVendorData)
    .subscribe(
      (res:any) => {
        console.log(res);
        if(res.message == 'logined'){
          console.log(res);
          console.log(res.token);
          console.log(res.message);
        localStorage.setItem('token', res.token)
        this._router.navigate(['/vendor/hotel_home'])
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
