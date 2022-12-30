import { Component } from '@angular/core';
import { UserServiceService } from "../../../services/user_services/user-service.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent {

  sig: string = "Register";

  emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

  errorMsg: string = '';

  passwordMismatch: boolean = false


  registerData = {
    "confirmPassword": ''
  }

  registerUserData = {
    "name": '',
    "email": '',
    "password": '',
  }

  constructor(private _auth: UserServiceService, private _router: Router) { }

  ngOnInit(): void {

  }

  registerUser() {
    this.passwordMismatch = false;

    if (this.registerUserData.email != '' && this.registerUserData.name != '' && this.registerUserData.password != '' && this.registerData.confirmPassword != '') {

      if (this.registerUserData.password == this.registerData.confirmPassword) {
        console.log(this.registerUserData);
        this._auth.registerUser(this.registerUserData)
          .subscribe(
            (res: any) => {
              console.log(res)
              if (res.message == 'signup') {
                this._router.navigate(['/user_home'])
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