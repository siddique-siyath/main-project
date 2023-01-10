import { Component } from '@angular/core';
import { CarServicesService } from "../../../../services/vendor_services/car_services/car-services.service";
import { VendorServicesService } from "../../../../services/vendor_services/vendor-services.service";
import { Router } from "@angular/router";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.scss']
})
export class CarHomeComponent {

  status = false
  decode:any

  constructor(private _auth: CarServicesService, private Service:VendorServicesService , private route: Router) {
    console.log('status',this.status);
   }

  ngOnInit(): void {
    this.verify()
  }

  verify() {
    console.log('status',this.status);
    let email:any = localStorage.getItem('caremail')
    this.decode = jwt_decode(email)
    console.log('decode',this.decode.subject);
    this._auth.verification(this.decode).subscribe((res:any) => {
      console.log(res.verification);
      this.status = res.verification
    })
  }
  
}
