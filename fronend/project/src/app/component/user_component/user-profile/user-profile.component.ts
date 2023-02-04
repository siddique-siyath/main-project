import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "../../../services/user_services/user-service.service";
import jwt_decode from 'jwt-decode';


// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { __values } from 'tslib';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [UserServiceService]
})



export class UserProfileComponent implements OnInit {

  loading: boolean = false

  apply: boolean = false;

  constructor(private _uploadService: UserServiceService) { }

  files: File[] = [];

  values = {

  }

  UserData = {
    "name": '',
    "email": '',
    "phone": '',
    "profilePhoto": ''
  }

  email: any;

  getData() {

    let email: any = localStorage.getItem('userToken')
    this.email = jwt_decode(email)
    this.email = this.email
    console.log(this.email);

    this._uploadService.getUserData(this.email).subscribe((UserData: any) => {
      this.UserData = UserData.data
      console.log(this.UserData);

      this.findImage(this.UserData.profilePhoto)
    })
  }


  async onSelect(event: any) {
    console.log(event);
    this.files.push(...event.addedFiles);

    this.apply = true;

    this.loading = true

    const wait = await this.onupload()

  }


  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }


  live(value: boolean) {
    this.loading = value
  }


  async onupload() {

    if (!this.files[0]) {
      alert('image inserted')
    }

    const file_data = this.files[0]
    const data = new FormData();
    data.append('file', file_data)
    data.append('upload_preset', 'angular_cloud')
    data.append('cloud_name', 'dnp14omap')

    this._uploadService.profileImage(data).subscribe(async (Response: any) => {
      if (Response) {
        console.log(Response);
        console.log('id', Response.public_id);
        this.UserData.profilePhoto = Response.public_id
      }
      this.findImage(this.UserData.profilePhoto)


      let email: any = localStorage.getItem('userToken')
      this.email = jwt_decode(email)
      this.email = this.email
      console.log(this.email);

      this.values = {
        email: this.email,
        photo: this.UserData.profilePhoto
      }
      this._uploadService.insertProfile(this.values).subscribe((res) => {
        console.log(res);
        this.UserData.profilePhoto = res.profilePhoto
      }),
        (err: any) => {
          console.log(err);
        }
    })


  }



  img!: CloudinaryImage;

  title = 'hello'


  cloudName = "dnp14omap"; // replace with your own cloud name
  uploadPreset = "angular_cloud"; // replace with your own upload preset
  myWidget: any;




  ngOnInit() {

    this.getData()

    this.findImage(this.UserData.profilePhoto)

    this.live(this.loading)

  }

  async findImage(image: any) {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: 'dnp14omap'
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    this.img = cld.image(this.UserData.profilePhoto);

    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    this.img.resize(fill().width(250).height(250));

    this.loading = false

    this.files = []

  }


}
