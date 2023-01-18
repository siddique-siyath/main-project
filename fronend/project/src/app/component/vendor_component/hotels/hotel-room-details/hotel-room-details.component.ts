import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { HotelServicesService } from "../../../../services/vendor_services/hotel_services/hotel-services.service";
import { Router } from "@angular/router";
import jwtDecode from 'jwt-decode';


import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, MatSortHeader } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table';



export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];




@Component({
  selector: 'app-hotel-room-details',
  templateUrl: './hotel-room-details.component.html',
  styleUrls: ['./hotel-room-details.component.scss']
})


export class HotelRoomDetailsComponent implements OnInit {


  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource = new MatTableDataSource<UserData>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  

  constructor( private hotelDataServices: HotelServicesService, private _router: Router) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => this.createNewUser(k+1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users) 

  }

  ngAfterViewInit() {
    this.dataSource.paginator= this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


   createNewUser(id: number): UserData {
    const name = 
    // this.hotelDetails.location
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';
  
    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
  }





  hotelDetails: any

  // constructor(private hotelDataServices: HotelServicesService, private _router: Router) { }


  ngOnInit(): void {
    this.hotelData();
  }

  hotelData() {
    let email: any = localStorage.getItem('hotelemail')
    let decode = jwtDecode(email)
    this.hotelDataServices.getRoomsData(decode).subscribe((res: any) => {
      console.log(res.result);

      this.hotelDetails = res.result
      console.log('rseult = ', this.hotelDetails);
    }),
      (err: any) => {
        console.log(err);

      }
  }

}




/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}