import { Component, OnInit } from '@angular/core';
import { VendorServicesService } from "../../../services/vendor_services/vendor-services.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-vendor-field',
  templateUrl: './vendor-field.component.html',
  styleUrls: ['./vendor-field.component.scss']
})
export class VendorFieldComponent implements OnInit {

  data: any

  constructor(private _auth: VendorServicesService , private router:Router) { 
   
  }

  ngOnInit(): void {
    // this._auth.data.subscribe(data => {
    //   console.log('data', data);
    //   this.data = data;
    //   console.log(this.data);
    //   console.log('dfg',this.data.email);
    // });
  }


  hotel() {
    console.log('1');
    const id = 'hotel'

    this._auth.setData({ message: 'Hotel'});

    this.router.navigate(['/vendor/AddHotel']);
  }

  restaurant() {
    console.log('2');
  }

  car() {
    console.log('3');
  }

  guide() {
    console.log('4');
  }

}
