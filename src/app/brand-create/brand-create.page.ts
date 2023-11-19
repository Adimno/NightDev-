//student-create.page.ts
import { Component, OnInit } from '@angular/core';
import { Brands } from '../models/brands';
import { ApiService } from '../servicesB/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.page.html',
  styleUrls: ['./brand-create.page.scss'],
})
export class BrandCreatePage implements OnInit {

  data: Brands 

  constructor(
    public apiService: ApiService,
    public router: Router,

  ) {
    this.data = new Brands ();
  }

  ngOnInit() {
  }

  submitForm() {
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['brand-list']);
    });

  }

  submitView() {
    {
       this.router.navigate(['brand-list']);
     }
 
   }
 

   signOut() {
    {
       this.router.navigate(['login']);
     }
 
   }

 

}