import { Component, OnInit } from '@angular/core';
import { VendorServicesService } from "../../../services/vendor_services/vendor-services.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-vendor-signup',
  templateUrl: './vendor-signup.component.html',
  styleUrls: ['./vendor-signup.component.scss']
})
export class VendorSignupComponent implements OnInit {
  sig: string = "Register";

  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  errorMsg: string = '';

  passwordMismatch: boolean = false


  registerData = {
    "confirmPassword": ''
  }

  registerVendorData = {
    "name": '',
    "email": '',
    "password": '',
    "phone": '',
  }

  constructor(private _auth: VendorServicesService, private _router: Router) { }

  ngOnInit(): void {

  }

  // setData(data: any) {
  //   this._auth.setData(data);
  // }

  async registerVendor() {
    this.passwordMismatch = false;

    console.log('Afhj');


    if (this.registerVendorData.email != '' && this.registerVendorData.name != '' && this.registerVendorData.password != '' && this.registerData.confirmPassword != '') {

      if (this.registerVendorData.password == this.registerData.confirmPassword) {
        console.log(this.registerVendorData);

        let email = this.registerVendorData.email;

        console.log(email);
        
       let Data = await this._auth.setEmail({ message: email });

        this._auth.registerVendor(this.registerVendorData)
          .subscribe(
            (res: any) => {
              console.log(res)
              if (res.message == 'signup') {
                this._router.navigate(['/vendor_field'])
              } else if (res.errMessage == 'already exist') {
                this.errorMsg = "user is already exist"
              }
            },
            (err: any) => {
              console.log('error');
              console.log(err)
            }
          )
        console.log('hgjgjhg');


      } else {
        this.passwordMismatch = true;
      }
    } else {
      this.errorMsg = 'fill the details'
    }

  }



}



