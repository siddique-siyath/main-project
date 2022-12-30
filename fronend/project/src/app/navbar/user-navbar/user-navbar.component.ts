import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.scss']
})

export class UserNavbarComponent implements OnInit {

  constructor (private _router:Router) {}

  ngOnInit(): void {
      
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/user_login'])
    // localStorage.clear();
  }

}
