import { Component } from '@angular/core';
import { AdminServicesServicesService } from "../../../services/admin_services/admin-services.services.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.scss']
})
export class VendorDetailsComponent {

  vendorData: any = {
    "name": '',
    "email": '',
    "phone": '',
    "field": '',
    "hotelName": '',
    "licenseNumber": '',
    "location": '',
    "adharNumber": '',
    "restaurantName" : '',
    "carNumber" : ''
  }

  data = ''

  constructor(private vendorDataServices: AdminServicesServicesService, private _router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.vendorDataServices.getVendorData().subscribe((vendorData: any) => {
      console.log(vendorData);
      console.log(vendorData.length);
      this.vendorData = vendorData
      console.log('new',this.vendorData);
    })
  }

  Block(id: any) {
    this.vendorDataServices.blockVendor({ queryParams: { id } }).subscribe(async (res: any) => {
      console.log(res);
      const Data = await this.getData()
      // this._router.navigate(['/admin/vendor_details'])
      console.log('asdfghjk');
    }),
      (err: any) => {
        console.log(err);
      }
  }


  UnBlock(id: any) {
    this.vendorDataServices.unblockVendor({ queryParams: { id } }).subscribe(async (res: any) => {
      console.log(res);
      const Data = await this.getData()
      // this._router.navigate(['/admin/vendor_details'])
      console.log('asdfghjk');
    }),
      (err: any) => {
        console.log(err);
      }
  }

}
