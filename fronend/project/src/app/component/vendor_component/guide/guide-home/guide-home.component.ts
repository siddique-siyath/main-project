import { Component } from '@angular/core';
import { HotelServicesService } from "../../../../services/vendor_services/hotel_services/hotel-services.service";
import { VendorServicesService } from "../../../../services/vendor_services/vendor-services.service";
import { Router } from "@angular/router";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-guide-home',
  templateUrl: './guide-home.component.html',
  styleUrls: ['./guide-home.component.scss']
})
export class GuideHomeComponent {

  status = false
  decode:any

  constructor(private _auth: HotelServicesService, private Service:VendorServicesService , private route: Router) { }

  ngOnInit(): void {
    this.verify()
  }

  verify() {
    console.log('status',this.status);
    let email:any = localStorage.getItem('email')
    this.decode = jwt_decode(email)
    console.log('decode',this.decode.subject);
    this._auth.verification(this.decode).subscribe((res:any) => {
      console.log(res.verification);
      this.status = res.verification
    })
  }

}
