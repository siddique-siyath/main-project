import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserLoginComponent } from './component/user_component/user-login/user-login.component';
import { UserSignupComponent } from './component/user_component/user-signup/user-signup.component';
import { UserHomeComponent } from './component/user_component/user-home/user-home.component';
import { UserNavbarComponent } from './navbar/user-navbar/user-navbar.component';
import { AdminLoginComponent } from './component/admin_component/admin-login/admin-login.component';
import { AdminNavbarComponent } from './navbar/admin-navbar/admin-navbar.component';
import { AdminHomeComponent } from './component/admin_component/admin-home/admin-home.component';
import { UserDetailsComponent } from './component/admin_component/user-details/user-details.component';
import { HotelAddDetailsComponent } from './component/vendor_component/hotels/hotel-add-details/hotel-add-details.component';
import { CarAddDetailsComponent } from './component/vendor_component/car/car-add-details/car-add-details.component';
import { GuideAddDetailsComponent } from './component/vendor_component/guide/guide-add-details/guide-add-details.component';
import { RestaurantAddDetailsComponent } from './component/vendor_component/restaurant/restaurant-add-details/restaurant-add-details.component';
import { VendorLoginComponent } from './component/vendor_component/vendor-login/vendor-login.component';
import { VendorSignupComponent } from './component/vendor_component/vendor-signup/vendor-signup.component';
import { VendorFieldComponent } from './component/vendor_component/vendor-field/vendor-field.component';
import { HotelHomeComponent } from './component/vendor_component/hotels/hotel-home/hotel-home.component';
import { RestaurantHomeComponent } from './component/vendor_component/restaurant/restaurant-home/restaurant-home.component';
import { GuideHomeComponent } from './component/vendor_component/guide/guide-home/guide-home.component';
import { CarHomeComponent } from './component/vendor_component/car/car-home/car-home.component';
import { VendorDetailsComponent } from './component/admin_component/vendor-details/vendor-details.component';
import { VendorVerifyComponent } from './component/admin_component/vendor-verify/vendor-verify.component';
import { AuthGuard } from './services/user_services/auth.guard';
import { AuthAdminGuard } from './services/admin_services/auth-admin.guard';


// import{MatDialogModule} from '@angular/material';  

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserHomeComponent,
    UserNavbarComponent,
    AdminLoginComponent,
    AdminNavbarComponent,
    AdminHomeComponent,
    UserDetailsComponent,
    HotelAddDetailsComponent,
    CarAddDetailsComponent,
    GuideAddDetailsComponent,
    RestaurantAddDetailsComponent,
    VendorLoginComponent,
    VendorSignupComponent,
    VendorFieldComponent,
    HotelHomeComponent,
    RestaurantHomeComponent,
    GuideHomeComponent,
    CarHomeComponent,
    VendorDetailsComponent,
    VendorVerifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    FormsModule,
    // MatDialogModule
  ],
  providers: [AuthGuard,AuthAdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
