//student-list.page.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicesB/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.page.html',
  styleUrls: ['./brand-list.page.scss'],
})
export class BrandListPage implements OnInit {

  brandsData: any;

  constructor(
    public apiService: ApiService,   public router: Router
  ) {
    this.brandsData = [];
  }

  ngOnInit() {
    // this.getAllStudents();
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getAllStudents();
  }

  getAllStudents() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.brandsData = response;
    })
  }


  delete(item) {
    //Delete item in Student data
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllStudents();
    });
  }

 
 
  signOut() {
    {
       this.router.navigate(['login']);
     }
 
   }



}