//student-edit.page
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brands } from '../models/brands';
import { ApiService } from '../servicesB/api.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.page.html',
  styleUrls: ['./brand-edit.page.scss'],
})
export class BrandEditPage implements OnInit {


  id: number;
  data: Brands;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {
    this.data = new Brands();
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
    this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    })
  }

  update() {
    //Update item by taking id and updated data object
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['brand-list']);
    })
  }

}
