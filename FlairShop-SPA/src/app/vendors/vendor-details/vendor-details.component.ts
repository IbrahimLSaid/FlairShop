import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { Vendor } from 'src/app/Models/vendor';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/Services/product.service';
import { VendorService } from 'src/app/Services/vendor.service';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  products: Product[];
  vendor: Vendor;
  role: string = this.authService.userToken.role;

  constructor(private productService: ProductService, private alertify: AlertifyService, private authService: AuthService,
              private vendorService: VendorService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.vendor = data.vendor;
    });
  }

}
