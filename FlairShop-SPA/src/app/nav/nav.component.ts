import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../Services/alertify.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  role: string;
  model: any = {};

  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) { }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/products']);
    });
  }


  loggedIn() {
    if(this.authService.loggedIn())
    {
      return true;
    }
  }

  logout() {
    this.authService.logout();
    this.alertify.message('Logged out!');
    this.router.navigate['/home'];
  }

  isVendor() {
    if(this.authService.isVendor())
    {
      return true;
    }
  }


  ngOnInit() {

  }

}
