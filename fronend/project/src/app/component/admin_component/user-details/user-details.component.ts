import { Component, OnInit } from '@angular/core';
import { AdminServicesServicesService } from "../../../services/admin_services/admin-services.services.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  UserData: any = {
    "name": '',
    "email": '',
  }

  data = ''

  constructor(private userDataServices: AdminServicesServicesService,private _router:Router) { }

  ngOnInit(): void {
    this.getData();
  }

   getData() {
    this.userDataServices.getUserData().subscribe((UserData: any) => {
      this.UserData = UserData.userData
      console.log(this.UserData);
    })
  }

  Block(id:any) {
    this.userDataServices.BlockUser({queryParams:{id}}).subscribe(async (res: any) => {
     console.log(res);
     const Data = await this.getData()
     this._router.navigate(['/admin/user_details'])
     console.log('asdfghjk');
    }),
      (err: any) => {
        console.log(err);
      }
  }


  UnBlock(id:any) {
    this.userDataServices.UnBlockUser({queryParams:{id}}).subscribe(async (res: any) => {
     console.log(res);
     const Data = await this.getData()
     this._router.navigate(['/admin/user_details'])
     console.log('asdfghjk');
    }),
      (err: any) => {
        console.log(err);
      }
  }


}
