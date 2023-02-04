import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HotelServicesService } from "../../../../services/vendor_services/hotel_services/hotel-services.service";
import { ActivatedRoute } from '@angular/router';
import { VendorServicesService } from "../../../../services/vendor_services/vendor-services.service";


@Component({
  selector: 'app-hotel-add-details',
  templateUrl: './hotel-add-details.component.html',
  styleUrls: ['./hotel-add-details.component.scss']
})
export class HotelAddDetailsComponent implements OnInit {

  h: string = 'Hotel'

  errorMsg: string = ''

  hotelData = {
    "email": '',
    "type": '',
    "name": '',
    "location": '',
    "licenceNumber": '',
    "image1": '',
  }

  data: any
  email: any

  constructor(private _auth: HotelServicesService, private dataService: VendorServicesService, private _router: Router, private route: ActivatedRoute) {
    this.data = this.dataService.getData();
    console.log('data', this.data.message);

    this.email = this.dataService.getEmail();
    console.log('data', this.email.message);

  }

  ngOnInit(): void {
    // console.log(this.data);

    console.log(this.hotelData.image1);


  }


  AddHotelDetails() {

    if (this.hotelData.name != '' && this.hotelData.location != '' && this.hotelData.licenceNumber != '') {



      this.data = this.dataService.getData();
      console.log('data', this.data.message);
      this.hotelData.type = this.data.message

      this.email = this.dataService.getEmail();
      console.log('data', this.email.message);
      this.hotelData.email = this.email.message

      console.log(this.hotelData);
      this._auth.AddHotel(this.hotelData)
        .subscribe(
          (res: any) => {
            console.log(res)
            if (res.message == 'added_hotel') {
              this._router.navigate(['/vendor/hotel_home'])
            } else if (res.errMessage == 'hotel_error') {
              this.errorMsg = "error"
            }
          },
          (err: any) => {
            console.log('error');
            console.log(err)
          }
        )
      console.log('hgjgjhg');


    } else {
      this.errorMsg = 'fill the details'
    }


  }


}
