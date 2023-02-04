import { Token } from '@angular/compiler';
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

  name: string = "Login";

  loginVendorData = {
    "email": '',
    "password": ''
  }

  constructor(private _auth: VendorServicesService, private _router: Router) { }

  ngOnInit(): void {

  }

  async loginVendor() {
    this._auth.loginVendor(this.loginVendorData)
      .subscribe(
        (res: any) => {
          console.log(res);
          console.log('t', res.token);
          console.log(res.message);
          console.log(res.status);


          if (res.message == 'hotel_logined') {
            localStorage.setItem('hoteltoken', res.token)
            localStorage.setItem('hotelemail', res.emailId)
            this._router.navigate(['/vendor/hotel_home'])
          } else if (res.message == 'restaurant_logined') {
            localStorage.setItem('restauranttoken', res.token)
            localStorage.setItem('restaurantemail', res.emailId)
            this._router.navigate(['/vendor/restaurant_home'])
          } else if (res.message == 'car_logined') {
            localStorage.setItem('cartoken', res.token)
            localStorage.setItem('caremail', res.emailId)
            this._router.navigate(['/vendor/car_home'])
          } else if (res.message == 'guide_logined') {
            localStorage.setItem('guidetoken', res.token)
            localStorage.setItem('guideemail', res.emailId)
            this._router.navigate(['/vendor/guide_home'])
          } else if (res.errMessage == 'incorrectEmail') {
            this.ErrMessage = 'Email is not valid'
          } else if (res.errMessage == 'incorrectPassword') {
            this.ErrMessage = 'password is invalid'
          } else if (res.errMessage == 'vendorBlocked') {
            this.ErrMessage = 'vendor Blocked'
          } else {

          }

        },
        (err: any) => {
          console.log(err.message)
          console.log('error');
        }

      )
  }

}
