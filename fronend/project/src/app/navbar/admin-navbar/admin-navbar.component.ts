import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit{

  admin:boolean = false

  constructor (private _router:Router) {}

  ngOnInit(): void {
      this.active();
  }

  logout(){
    localStorage.removeItem('adminToken');
    this._router.navigate(['/admin_login'])
  }


  active(){
    let data:any
    data = localStorage.getItem('adminToken')
    console.log(data);
    
    if(data){
      this.admin = true
    }else{
      this.admin = false
    }
  }

}
