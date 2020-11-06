import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from 'src/app/Models/vendor';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.css']
})
export class VendorCardComponent implements OnInit {
  @Input() vendor: Vendor;
  role: string = this.authService.userToken.role;

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  isVendor() {
    if (this.role === 'True')
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
