import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  constructor(public authService: AuthenticationService, public router: Router) {}
  ngOnInit() {}


 
  login() {
    {
       this.router.navigate(['login']);
     }
 
   }
}