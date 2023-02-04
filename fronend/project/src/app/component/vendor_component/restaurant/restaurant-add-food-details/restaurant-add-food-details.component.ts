import { Component } from '@angular/core';


import { Router } from "@angular/router";


import { RestaurantServicesService } from "../../../../services/vendor_services/restaurant_services/restaurant-services.service";

@Component({
  selector: 'app-restaurant-add-food-details',
  templateUrl: './restaurant-add-food-details.component.html',
  styleUrls: ['./restaurant-add-food-details.component.scss']
})
export class RestaurantAddFoodDetailsComponent {


  uploadFinish: boolean = false
  message: string = ''
  uploadMessage: string = ''
  uploadMessageErr: string = ''

  reataurantData = {
    "name": '',
    "foodName": '',
    "description": '',
    "actualPrice": '',
    "discountPrice": '',
    "image1": '',
    "subImages": [{}]
  }

  files: File[] = [];


  constructor(private _Service: RestaurantServicesService , private _router: Router) { }

  ngOnInit(): void {

  }


  

  async onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);

  }


  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }



  async onupload() {

    console.log('file = ', this.files);


    if (!this.files[0] || this.files.length <= 4 || this.files.length > 5) {
      alert('image inserted')
      this.uploadMessageErr = 'Please upload image'
      return;
    }

    const result = await this.files.forEach(async (file, index) => {
      const file_data = file
      const data = new FormData();
      data.append('file', file_data)
      data.append('upload_preset', 'angular_cloud')
      data.append('cloud_name', 'dnp14omap')


      await this._Service.imageInsert(data).subscribe(async (Response: any) => {
        if (Response) {

          console.log(index);
          console.log(Response);

          console.log('id', Response.public_id);

          if (index == 0) {
            this.reataurantData.image1 = Response.public_id
          } else {
            this.reataurantData.subImages.push(Response.public_id)
          }

          if (this.reataurantData.subImages.length == 3) {
            this.uploadFinish = true
            this.uploadMessageErr = ''
            this.uploadMessage = 'image  uploaded'
          }

        }

      })

    })


  }



  async addData() {

    if (this.uploadFinish == false) {
      this.message = 'Please upload the image'
      return;
    }

    this.reataurantData.subImages.shift()
    console.log("reataurant = ", this.reataurantData);

    this._Service.addRestaurantServices(this.reataurantData).subscribe(async (res: any) => {
      console.log('response = ', res);
      if(res.message == 'Data_Added'){
        this._router.navigate(['/vendor/restaurant_home'])
      }else{
        console.log('error');
      }
    }),
      (err: any) => {
        console.log(err);
      }


  }



  
}
