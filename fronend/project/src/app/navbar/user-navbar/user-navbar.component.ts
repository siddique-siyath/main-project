import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Admin } from 'mongodb';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})


export class UserNavbarComponent implements OnInit {

  // admin:boolean = false

  constructor (private _router:Router) {}

  ngOnInit(): void {
      // this.active();
  }

  // active(){
  //   let data:any
  //   data = localStorage.getItem('adminToken')
  //   console.log(data);
    
  //   if(!data){
  //     this.admin = true
  //   }else{
  //     this.admin = false
  //   }
  // }


  logout(){
    localStorage.removeItem('userToken');
    this._router.navigate(['/user_login'])
    // localStorage.clear();
  }

}
