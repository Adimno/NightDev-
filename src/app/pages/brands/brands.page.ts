import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.page.html',
  styleUrls: ['./brands.page.scss'],
})
export class BrandsPage implements OnInit {

  constructor(   public router: Router ) { }

  ngOnInit() {
  }

  
  signOut() {
    {
       this.router.navigate(['login']);
     }
 
   }
}
