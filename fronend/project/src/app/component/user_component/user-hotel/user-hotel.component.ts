import { Component, OnInit, ViewChild } from '@angular/core';

import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { UserServiceService } from "../../../services/user_services/user-service.service";
import { Router } from "@angular/router";

// Import the Cloudinary classes.
import { Cloudinary} from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';

@Component({
  selector: 'app-user-hotel',
  templateUrl: './user-hotel.component.html',
  styleUrls: ['./user-hotel.component.scss']
})
export class UserHotelComponent implements OnInit {

  constructor(private service: UserServiceService, private router: Router) { }

  hotelData : any

  img!: any;

  images:any

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 4;
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }


  ngOnInit(): void {
    this.hotel()
  }


  async hotel(){
    this.service.hotel().subscribe((res) => {
      this.hotelData = res.hotel
      console.log(this.hotelData);

      this.hotelData.forEach((element: any, index: number) => {
        element.hotelDetails.forEach(async (item:any) => {
         const data = await this.findImage(item.image1)
         item.new = data
         console.log(this.hotelData);
        });
      })

    }),
      ((err: Error) => {
        console.log(err);
      })
  }



  async findImage(data: any) {

    // Create a Cloudinary instance and set your cloud name.
    let image = data


    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dnp14omap'
      }
    });

    // images.forEach((image: any) => {

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.

    this.img = cld.image(image);


    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    this.img.resize(fill().width(250).height(250));

    let i = this.img.resize(fill().width(250).height(250));

    this.images = i

    console.log('i = ', this.images);

    return this.images

    // this.dataSource[index].image1 = this.images

  }



 async hotelDetails(id:any,email:string){
    let data:any = await localStorage.setItem('hotelId',email)
    if(!data){
    this.router.navigate(['/user_hotel_details', id])
    }else{

    }
  }


}
